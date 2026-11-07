(()=>{var yu=Object.defineProperty;var _u=(i,t)=>{for(var e in t)yu(i,e,{get:t[e],enumerable:!0})};var De={};_u(De,{AdditiveBlending:()=>jr,AmbientLight:()=>Uo,BackSide:()=>He,Box3:()=>en,BoxGeometry:()=>Qi,BufferAttribute:()=>je,BufferGeometry:()=>Fe,CanvasTexture:()=>Ss,CircleGeometry:()=>vo,Color:()=>jt,Curve:()=>rn,CustomBlending:()=>Jc,CylinderGeometry:()=>yo,DirectionalLight:()=>Po,DoubleSide:()=>Bn,Euler:()=>hn,ExtrudeGeometry:()=>_o,FrontSide:()=>Pn,Group:()=>li,InstancedMesh:()=>uo,LatheGeometry:()=>Mo,LinearFilter:()=>mn,MathUtils:()=>Yn,Matrix4:()=>de,Mesh:()=>Ne,MeshBasicMaterial:()=>Es,MeshLambertMaterial:()=>Io,MeshPhysicalMaterial:()=>To,MeshStandardMaterial:()=>ur,NearestFilter:()=>Ze,NeutralToneMapping:()=>Gi,OneFactor:()=>Xc,OneMinusSrcAlphaFactor:()=>ir,OrthographicCamera:()=>gi,PMREMGenerator:()=>Cs,PerspectiveCamera:()=>be,PlaneGeometry:()=>mi,Quaternion:()=>We,Ray:()=>pi,RingGeometry:()=>Eo,SRGBColorSpace:()=>Ce,Scene:()=>Wn,ShaderMaterial:()=>sn,Shape:()=>bs,ShapeGeometry:()=>Bo,SphereGeometry:()=>Co,TorusGeometry:()=>So,TubeGeometry:()=>bo,UnsignedByteType:()=>Sn,Vector2:()=>dt,Vector3:()=>R,Vector4:()=>me,WebGLRenderTarget:()=>bn,WebGLRenderer:()=>xi});var Yc="170";var Eu=0,ml=1,Bu=2;var Eh=1,Cu=2,Gn=3,Pn=0,He=1,Bn=2,hi=0,As=1,jr=2,gl=3,xl=4,Jc=5,Ii=100,Su=101,bu=102,Tu=103,Iu=104,Du=200,Xc=201,Ru=202,Pu=203,Ba=204,ir=205,Uu=206,Fu=207,Lu=208,Qu=209,Nu=210,Ou=211,ku=212,Gu=213,zu=214,Ca=0,Sa=1,ba=2,ws=3,Ta=4,Ia=5,Da=6,Ra=7,qc=0,Vu=1,Hu=2,ui=0,Wu=1,Yu=2,Ju=3,Xu=4,qu=5,Ku=6,Gi=7;var Bh=300,Ms=301,vs=302,Pa=303,Ua=304,Fo=306,Fa=1e3,Pi=1001,La=1002,Ze=1003,Zu=1004;var vr=1005;var mn=1006,Jo=1007;var Ui=1008;var Sn=1009,Ch=1010,Sh=1011,sr=1012,Kc=1013,Fi=1014,Rn=1015,fr=1016,Zc=1017,jc=1018,ys=1020,bh=35902,Th=1021,Ih=1022,Cn=1023,Dh=1024,Rh=1025,ms=1026,_s=1027,$c=1028,tl=1029,Ph=1030,el=1031;var nl=1033,Jr=33776,Xr=33777,qr=33778,Kr=33779,Qa=35840,Na=35841,Oa=35842,ka=35843,Ga=36196,za=37492,Va=37496,Ha=37808,Wa=37809,Ya=37810,Ja=37811,Xa=37812,qa=37813,Ka=37814,Za=37815,ja=37816,$a=37817,tc=37818,ec=37819,nc=37820,ic=37821,Zr=36492,sc=36494,rc=36495,Uh=36283,oc=36284,ac=36285,cc=36286;var $r=2300,lc=2301,Xo=2302,wl=2400,Ml=2401,vl=2402;var ju=3200,$u=3201;var il=0,tf=1,ci="",Ce="srgb",Is="srgb-linear",Lo="linear",pe="srgb";var Zi=7680;var yl=519,ef=512,nf=513,sf=514,Fh=515,rf=516,of=517,af=518,cf=519,_l=35044;var El="300 es",Vn=2e3,to=2001,di=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bl=1234567,js=Math.PI/180,rr=180/Math.PI;function zi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ze[i&255]+ze[i>>8&255]+ze[i>>16&255]+ze[i>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]).toLowerCase()}function Se(i,t,e){return Math.max(t,Math.min(e,i))}function sl(i,t){return(i%t+t)%t}function lf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function hf(i,t,e){return i!==t?(e-i)/(t-i):0}function $s(i,t,e){return(1-e)*i+e*t}function uf(i,t,e,n){return $s(i,t,1-Math.exp(-e*n))}function ff(i,t=1){return t-Math.abs(sl(i,t*2)-t)}function df(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function pf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Af(i,t){return i+Math.floor(Math.random()*(t-i+1))}function mf(i,t){return i+Math.random()*(t-i)}function gf(i){return i*(.5-Math.random())}function xf(i){i!==void 0&&(Bl=i);let t=Bl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function wf(i){return i*js}function Mf(i){return i*rr}function vf(i){return(i&i-1)===0&&i!==0}function yf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function _f(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ef(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),h=r((t-n)/2),f=o((t-n)/2),A=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*u,c*h,c*f,a*l);break;case"YZY":i.set(c*f,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*f,a*u,a*l);break;case"XZX":i.set(a*u,c*m,c*A,a*l);break;case"YXY":i.set(c*A,a*u,c*m,a*l);break;case"ZYZ":i.set(c*m,c*A,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function fs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function qe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Yn={DEG2RAD:js,RAD2DEG:rr,generateUUID:zi,clamp:Se,euclideanModulo:sl,mapLinear:lf,inverseLerp:hf,lerp:$s,damp:uf,pingpong:ff,smoothstep:df,smootherstep:pf,randInt:Af,randFloat:mf,randFloatSpread:gf,seededRandom:xf,degToRad:wf,radToDeg:Mf,isPowerOfTwo:vf,ceilPowerOfTwo:yf,floorPowerOfTwo:_f,setQuaternionFromProperEuler:Ef,normalize:qe,denormalize:fs},dt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qt=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],A=n[5],m=n[8],g=s[0],d=s[3],p=s[6],M=s[1],w=s[4],x=s[7],D=s[2],B=s[5],b=s[8];return r[0]=o*g+a*M+c*D,r[3]=o*d+a*w+c*B,r[6]=o*p+a*x+c*b,r[1]=l*g+u*M+h*D,r[4]=l*d+u*w+h*B,r[7]=l*p+u*x+h*b,r[2]=f*g+A*M+m*D,r[5]=f*d+A*w+m*B,r[8]=f*p+A*x+m*b,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,f=a*c-u*r,A=l*r-o*c,m=e*h+n*f+s*A;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/m;return t[0]=h*g,t[1]=(s*l-u*n)*g,t[2]=(a*n-s*o)*g,t[3]=f*g,t[4]=(u*e-s*c)*g,t[5]=(s*r-a*e)*g,t[6]=A*g,t[7]=(n*c-l*e)*g,t[8]=(o*e-n*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(qo.makeScale(t,e)),this}rotate(t){return this.premultiply(qo.makeRotation(-t)),this}translate(t,e){return this.premultiply(qo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},qo=new qt;function Lh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function eo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Bf(){let i=eo("canvas");return i.style.display="block",i}var Cl={};function Ks(i){i in Cl||(Cl[i]=!0,console.warn(i))}function Cf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Sf(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function bf(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var oe={enabled:!0,workingColorSpace:Is,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===pe&&(i.r=Hn(i.r),i.g=Hn(i.g),i.b=Hn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===pe&&(i.r=gs(i.r),i.g=gs(i.g),i.b=gs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ci?Lo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Hn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function gs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Sl=[.64,.33,.3,.6,.15,.06],bl=[.2126,.7152,.0722],Tl=[.3127,.329],Il=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dl=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);oe.define({[Is]:{primaries:Sl,whitePoint:Tl,transfer:Lo,toXYZ:Il,fromXYZ:Dl,luminanceCoefficients:bl,workingColorSpaceConfig:{unpackColorSpace:Ce},outputColorSpaceConfig:{drawingBufferColorSpace:Ce}},[Ce]:{primaries:Sl,whitePoint:Tl,transfer:pe,toXYZ:Il,fromXYZ:Dl,luminanceCoefficients:bl,outputColorSpaceConfig:{drawingBufferColorSpace:Ce}}});var ji,hc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ji===void 0&&(ji=eo("canvas")),ji.width=t.width,ji.height=t.height;let n=ji.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ji}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=eo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Hn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Hn(e[n]/255)*255):e[n]=Hn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Tf=0,no=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=zi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ko(s[o].image)):r.push(Ko(s[o]))}else r=Ko(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ko(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?hc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var If=0,tn=class i extends di{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Pi,s=Pi,r=mn,o=Ui,a=Cn,c=Sn,l=i.DEFAULT_ANISOTROPY,u=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=zi(),this.name="",this.source=new no(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fa:t.x=t.x-Math.floor(t.x);break;case Pi:t.x=t.x<0?0:1;break;case La:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fa:t.y=t.y-Math.floor(t.y);break;case Pi:t.y=t.y<0?0:1;break;case La:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Bh;tn.DEFAULT_ANISOTROPY=1;var me=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],A=c[5],m=c[9],g=c[2],d=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(m-d)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(m+d)<.1&&Math.abs(l+A+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(l+1)/2,x=(A+1)/2,D=(p+1)/2,B=(u+f)/4,b=(h+g)/4,I=(m+d)/4;return w>x&&w>D?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=B/n,r=b/n):x>D?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=B/s,r=I/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=b/r,s=I/r),this.set(n,s,r,e),this}let M=Math.sqrt((d-m)*(d-m)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(d-m)/M,this.y=(h-g)/M,this.z=(f-u)/M,this.w=Math.acos((l+A+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},uc=class extends di{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new tn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new no(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},bn=class extends uc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},io=class extends tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var fc=class extends tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var We=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3],f=r[o+0],A=r[o+1],m=r[o+2],g=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=A,t[e+2]=m,t[e+3]=g;return}if(h!==g||c!==f||l!==A||u!==m){let d=1-a,p=c*f+l*A+u*m+h*g,M=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){let D=Math.sqrt(w),B=Math.atan2(D,p*M);d=Math.sin(d*B)/D,a=Math.sin(a*B)/D}let x=a*M;if(c=c*d+f*x,l=l*d+A*x,u=u*d+m*x,h=h*d+g*x,d===1-a){let D=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=D,l*=D,u*=D,h*=D}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],f=r[o+1],A=r[o+2],m=r[o+3];return t[e]=a*m+u*h+c*A-l*f,t[e+1]=c*m+u*f+l*h-a*A,t[e+2]=l*m+u*A+a*f-c*h,t[e+3]=u*m-a*h-c*f-l*A,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),f=c(n/2),A=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=f*u*h+l*A*m,this._y=l*A*h-f*u*m,this._z=l*u*m+f*A*h,this._w=l*u*h-f*A*m;break;case"YXZ":this._x=f*u*h+l*A*m,this._y=l*A*h-f*u*m,this._z=l*u*m-f*A*h,this._w=l*u*h+f*A*m;break;case"ZXY":this._x=f*u*h-l*A*m,this._y=l*A*h+f*u*m,this._z=l*u*m+f*A*h,this._w=l*u*h-f*A*m;break;case"ZYX":this._x=f*u*h-l*A*m,this._y=l*A*h+f*u*m,this._z=l*u*m-f*A*h,this._w=l*u*h+f*A*m;break;case"YZX":this._x=f*u*h+l*A*m,this._y=l*A*h+f*u*m,this._z=l*u*m-f*A*h,this._w=l*u*h-f*A*m;break;case"XZY":this._x=f*u*h-l*A*m,this._y=l*A*h-f*u*m,this._z=l*u*m+f*A*h,this._w=l*u*h+f*A*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){let A=.5/Math.sqrt(f+1);this._w=.25/A,this._x=(u-c)*A,this._y=(r-l)*A,this._z=(o-s)*A}else if(n>a&&n>h){let A=2*Math.sqrt(1+n-a-h);this._w=(u-c)/A,this._x=.25*A,this._y=(s+o)/A,this._z=(r+l)/A}else if(a>h){let A=2*Math.sqrt(1+a-n-h);this._w=(r-l)/A,this._x=(s+o)/A,this._y=.25*A,this._z=(c+u)/A}else{let A=2*Math.sqrt(1+h-n-a);this._w=(o-s)/A,this._x=(r+l)/A,this._y=(c+u)/A,this._z=.25*A}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let A=1-e;return this._w=A*o+e*this._w,this._x=A*n+e*this._x,this._y=A*s+e*this._y,this._z=A*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Rl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Rl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Zo.copy(this).projectOnVector(t),this.sub(Zo)}reflect(t){return this.sub(Zo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Zo=new R,Rl=new We,en=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,yn):yn.fromBufferAttribute(r,o),yn.applyMatrix4(t.matrixWorld),this.expandByPoint(yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),yr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),yr.copy(n.boundingBox)),yr.applyMatrix4(t.matrixWorld),this.union(yr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hs),_r.subVectors(this.max,Hs),$i.subVectors(t.a,Hs),ts.subVectors(t.b,Hs),es.subVectors(t.c,Hs),ni.subVectors(ts,$i),ii.subVectors(es,ts),_i.subVectors($i,es);let e=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-_i.z,_i.y,ni.z,0,-ni.x,ii.z,0,-ii.x,_i.z,0,-_i.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-_i.y,_i.x,0];return!jo(e,$i,ts,es,_r)||(e=[1,0,0,0,1,0,0,0,1],!jo(e,$i,ts,es,_r))?!1:(Er.crossVectors(ni,ii),e=[Er.x,Er.y,Er.z],jo(e,$i,ts,es,_r))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Ln=[new R,new R,new R,new R,new R,new R,new R,new R],yn=new R,yr=new en,$i=new R,ts=new R,es=new R,ni=new R,ii=new R,_i=new R,Hs=new R,_r=new R,Er=new R,Ei=new R;function jo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ei.fromArray(i,r);let a=s.x*Math.abs(Ei.x)+s.y*Math.abs(Ei.y)+s.z*Math.abs(Ei.z),c=t.dot(Ei),l=e.dot(Ei),u=n.dot(Ei);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var Df=new en,Ws=new R,$o=new R,Li=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Df.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ws.subVectors(t,this.center);let e=Ws.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ws,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($o.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ws.copy(t.center).add($o)),this.expandByPoint(Ws.copy(t.center).sub($o))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Qn=new R,ta=new R,Br=new R,si=new R,ea=new R,Cr=new R,na=new R,pi=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qn.copy(this.origin).addScaledVector(this.direction,e),Qn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ta.copy(t).add(e).multiplyScalar(.5),Br.copy(e).sub(t).normalize(),si.copy(this.origin).sub(ta);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Br),a=si.dot(this.direction),c=-si.dot(Br),l=si.lengthSq(),u=Math.abs(1-o*o),h,f,A,m;if(u>0)if(h=o*c-a,f=o*a-c,m=r*u,h>=0)if(f>=-m)if(f<=m){let g=1/u;h*=g,f*=g,A=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=r,h=Math.max(0,-(o*f+a)),A=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(o*f+a)),A=-h*h+f*(f+2*c)+l;else f<=-m?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-c),r),A=-h*h+f*(f+2*c)+l):f<=m?(h=0,f=Math.min(Math.max(-r,-c),r),A=f*(f+2*c)+l):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-c),r),A=-h*h+f*(f+2*c)+l);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),A=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ta).addScaledVector(Br,f),A}intersectSphere(t,e){Qn.subVectors(t.center,this.origin);let n=Qn.dot(this.direction),s=Qn.dot(Qn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Qn)!==null}intersectTriangle(t,e,n,s,r){ea.subVectors(e,t),Cr.subVectors(n,t),na.crossVectors(ea,Cr);let o=this.direction.dot(na),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;si.subVectors(this.origin,t);let c=a*this.direction.dot(Cr.crossVectors(si,Cr));if(c<0)return null;let l=a*this.direction.dot(ea.cross(si));if(l<0||c+l>o)return null;let u=-a*si.dot(na);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},de=class i{constructor(t,e,n,s,r,o,a,c,l,u,h,f,A,m,g,d){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,h,f,A,m,g,d)}set(t,e,n,s,r,o,a,c,l,u,h,f,A,m,g,d){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=A,p[7]=m,p[11]=g,p[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ns.setFromMatrixColumn(t,0).length(),r=1/ns.setFromMatrixColumn(t,1).length(),o=1/ns.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let f=o*u,A=o*h,m=a*u,g=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=A+m*l,e[5]=f-g*l,e[9]=-a*c,e[2]=g-f*l,e[6]=m+A*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*u,A=c*h,m=l*u,g=l*h;e[0]=f+g*a,e[4]=m*a-A,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=A*a-m,e[6]=g+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*u,A=c*h,m=l*u,g=l*h;e[0]=f-g*a,e[4]=-o*h,e[8]=m+A*a,e[1]=A+m*a,e[5]=o*u,e[9]=g-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*u,A=o*h,m=a*u,g=a*h;e[0]=c*u,e[4]=m*l-A,e[8]=f*l+g,e[1]=c*h,e[5]=g*l+f,e[9]=A*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,A=o*l,m=a*c,g=a*l;e[0]=c*u,e[4]=g-f*h,e[8]=m*h+A,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=A*h+m,e[10]=f-g*h}else if(t.order==="XZY"){let f=o*c,A=o*l,m=a*c,g=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+g,e[5]=o*u,e[9]=A*h-m,e[2]=m*h-A,e[6]=a*u,e[10]=g*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Rf,t,Pf)}lookAt(t,e,n){let s=this.elements;return cn.subVectors(t,e),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),ri.crossVectors(n,cn),ri.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),ri.crossVectors(n,cn)),ri.normalize(),Sr.crossVectors(cn,ri),s[0]=ri.x,s[4]=Sr.x,s[8]=cn.x,s[1]=ri.y,s[5]=Sr.y,s[9]=cn.y,s[2]=ri.z,s[6]=Sr.z,s[10]=cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],A=n[13],m=n[2],g=n[6],d=n[10],p=n[14],M=n[3],w=n[7],x=n[11],D=n[15],B=s[0],b=s[4],I=s[8],_=s[12],v=s[1],S=s[5],O=s[9],L=s[13],N=s[2],K=s[6],G=s[10],tt=s[14],z=s[3],ct=s[7],ut=s[11],wt=s[15];return r[0]=o*B+a*v+c*N+l*z,r[4]=o*b+a*S+c*K+l*ct,r[8]=o*I+a*O+c*G+l*ut,r[12]=o*_+a*L+c*tt+l*wt,r[1]=u*B+h*v+f*N+A*z,r[5]=u*b+h*S+f*K+A*ct,r[9]=u*I+h*O+f*G+A*ut,r[13]=u*_+h*L+f*tt+A*wt,r[2]=m*B+g*v+d*N+p*z,r[6]=m*b+g*S+d*K+p*ct,r[10]=m*I+g*O+d*G+p*ut,r[14]=m*_+g*L+d*tt+p*wt,r[3]=M*B+w*v+x*N+D*z,r[7]=M*b+w*S+x*K+D*ct,r[11]=M*I+w*O+x*G+D*ut,r[15]=M*_+w*L+x*tt+D*wt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],A=t[14],m=t[3],g=t[7],d=t[11],p=t[15];return m*(+r*c*h-s*l*h-r*a*f+n*l*f+s*a*A-n*c*A)+g*(+e*c*A-e*l*f+r*o*f-s*o*A+s*l*u-r*c*u)+d*(+e*l*h-e*a*A-r*o*h+n*o*A+r*a*u-n*l*u)+p*(-s*a*u-e*c*h+e*a*f+s*o*h-n*o*f+n*c*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],A=t[11],m=t[12],g=t[13],d=t[14],p=t[15],M=h*d*l-g*f*l+g*c*A-a*d*A-h*c*p+a*f*p,w=m*f*l-u*d*l-m*c*A+o*d*A+u*c*p-o*f*p,x=u*g*l-m*h*l+m*a*A-o*g*A-u*a*p+o*h*p,D=m*h*c-u*g*c-m*a*f+o*g*f+u*a*d-o*h*d,B=e*M+n*w+s*x+r*D;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/B;return t[0]=M*b,t[1]=(g*f*r-h*d*r-g*s*A+n*d*A+h*s*p-n*f*p)*b,t[2]=(a*d*r-g*c*r+g*s*l-n*d*l-a*s*p+n*c*p)*b,t[3]=(h*c*r-a*f*r-h*s*l+n*f*l+a*s*A-n*c*A)*b,t[4]=w*b,t[5]=(u*d*r-m*f*r+m*s*A-e*d*A-u*s*p+e*f*p)*b,t[6]=(m*c*r-o*d*r-m*s*l+e*d*l+o*s*p-e*c*p)*b,t[7]=(o*f*r-u*c*r+u*s*l-e*f*l-o*s*A+e*c*A)*b,t[8]=x*b,t[9]=(m*h*r-u*g*r-m*n*A+e*g*A+u*n*p-e*h*p)*b,t[10]=(o*g*r-m*a*r+m*n*l-e*g*l-o*n*p+e*a*p)*b,t[11]=(u*a*r-o*h*r-u*n*l+e*h*l+o*n*A-e*a*A)*b,t[12]=D*b,t[13]=(u*g*s-m*h*s+m*n*f-e*g*f-u*n*d+e*h*d)*b,t[14]=(m*a*s-o*g*s-m*n*c+e*g*c+o*n*d-e*a*d)*b,t[15]=(o*h*s-u*a*s+u*n*c-e*h*c-o*n*f+e*a*f)*b,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,h=a+a,f=r*l,A=r*u,m=r*h,g=o*u,d=o*h,p=a*h,M=c*l,w=c*u,x=c*h,D=n.x,B=n.y,b=n.z;return s[0]=(1-(g+p))*D,s[1]=(A+x)*D,s[2]=(m-w)*D,s[3]=0,s[4]=(A-x)*B,s[5]=(1-(f+p))*B,s[6]=(d+M)*B,s[7]=0,s[8]=(m+w)*b,s[9]=(d-M)*b,s[10]=(1-(f+g))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ns.set(s[0],s[1],s[2]).length(),o=ns.set(s[4],s[5],s[6]).length(),a=ns.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],_n.copy(this);let l=1/r,u=1/o,h=1/a;return _n.elements[0]*=l,_n.elements[1]*=l,_n.elements[2]*=l,_n.elements[4]*=u,_n.elements[5]*=u,_n.elements[6]*=u,_n.elements[8]*=h,_n.elements[9]*=h,_n.elements[10]*=h,e.setFromRotationMatrix(_n),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Vn){let c=this.elements,l=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s),A,m;if(a===Vn)A=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===to)A=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=A,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Vn){let c=this.elements,l=1/(e-t),u=1/(n-s),h=1/(o-r),f=(e+t)*l,A=(n+s)*u,m,g;if(a===Vn)m=(o+r)*h,g=-2*h;else if(a===to)m=r*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-A,c[2]=0,c[6]=0,c[10]=g,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ns=new R,_n=new de,Rf=new R(0,0,0),Pf=new R(1,1,1),ri=new R,Sr=new R,cn=new R,Pl=new de,Ul=new We,hn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],A=s[10];switch(e){case"XYZ":this._y=Math.asin(Se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,A),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,A),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Se(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,A),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,A),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Se(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,A));break;case"XZY":this._z=Math.asin(-Se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,A),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Pl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ul.setFromEuler(this),this.setFromQuaternion(Ul,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hn.DEFAULT_ORDER="XYZ";var so=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Uf=0,Fl=new R,is=new We,Nn=new de,br=new R,Ys=new R,Ff=new R,Lf=new We,Ll=new R(1,0,0),Ql=new R(0,1,0),Nl=new R(0,0,1),Ol={type:"added"},Qf={type:"removed"},ss={type:"childadded",child:null},ia={type:"childremoved",child:null},nn=class i extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new R,e=new hn,n=new We,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new de},normalMatrix:{value:new qt}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new so,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.multiply(is),this}rotateOnWorldAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.premultiply(is),this}rotateX(t){return this.rotateOnAxis(Ll,t)}rotateY(t){return this.rotateOnAxis(Ql,t)}rotateZ(t){return this.rotateOnAxis(Nl,t)}translateOnAxis(t,e){return Fl.copy(t).applyQuaternion(this.quaternion),this.position.add(Fl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ll,t)}translateY(t){return this.translateOnAxis(Ql,t)}translateZ(t){return this.translateOnAxis(Nl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?br.copy(t):br.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(Ys,br,this.up):Nn.lookAt(br,Ys,this.up),this.quaternion.setFromRotationMatrix(Nn),s&&(Nn.extractRotation(s.matrixWorld),is.setFromRotationMatrix(Nn),this.quaternion.premultiply(is.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ol),ss.child=t,this.dispatchEvent(ss),ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Qf),ia.child=t,this.dispatchEvent(ia),ia.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Nn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ol),ss.child=t,this.dispatchEvent(ss),ss.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,t,Ff),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,Lf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),A=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),A.length>0&&(n.animations=A),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};nn.DEFAULT_UP=new R(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var En=new R,On=new R,sa=new R,kn=new R,rs=new R,os=new R,kl=new R,ra=new R,oa=new R,aa=new R,ca=new me,la=new me,ha=new me,Di=class i{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),En.subVectors(t,e),s.cross(En);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){En.subVectors(s,e),On.subVectors(n,e),sa.subVectors(t,e);let o=En.dot(En),a=En.dot(On),c=En.dot(sa),l=On.dot(On),u=On.dot(sa),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,A=(l*c-a*u)*f,m=(o*u-a*c)*f;return r.set(1-A-m,m,A)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,kn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,kn.x),c.addScaledVector(o,kn.y),c.addScaledVector(a,kn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return ca.setScalar(0),la.setScalar(0),ha.setScalar(0),ca.fromBufferAttribute(t,e),la.fromBufferAttribute(t,n),ha.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ca,r.x),o.addScaledVector(la,r.y),o.addScaledVector(ha,r.z),o}static isFrontFacing(t,e,n,s){return En.subVectors(n,e),On.subVectors(t,e),En.cross(On).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return En.subVectors(this.c,this.b),On.subVectors(this.a,this.b),En.cross(On).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;rs.subVectors(s,n),os.subVectors(r,n),ra.subVectors(t,n);let c=rs.dot(ra),l=os.dot(ra);if(c<=0&&l<=0)return e.copy(n);oa.subVectors(t,s);let u=rs.dot(oa),h=os.dot(oa);if(u>=0&&h<=u)return e.copy(s);let f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(rs,o);aa.subVectors(t,r);let A=rs.dot(aa),m=os.dot(aa);if(m>=0&&A<=m)return e.copy(r);let g=A*l-c*m;if(g<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(os,a);let d=u*m-A*h;if(d<=0&&h-u>=0&&A-m>=0)return kl.subVectors(r,s),a=(h-u)/(h-u+(A-m)),e.copy(s).addScaledVector(kl,a);let p=1/(d+g+f);return o=g*p,a=f*p,e.copy(n).addScaledVector(rs,o).addScaledVector(os,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Qh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},Tr={h:0,s:0,l:0};function ua(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var jt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=oe.workingColorSpace){if(t=sl(t,1),e=Se(e,0,1),n=Se(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ua(o,r,t+1/3),this.g=ua(o,r,t),this.b=ua(o,r,t-1/3)}return oe.toWorkingColorSpace(this,s),this}setStyle(t,e=Ce){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ce){let n=Qh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hn(t.r),this.g=Hn(t.g),this.b=Hn(t.b),this}copyLinearToSRGB(t){return this.r=gs(t.r),this.g=gs(t.g),this.b=gs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ce){return oe.fromWorkingColorSpace(Ve.copy(this),t),Math.round(Se(Ve.r*255,0,255))*65536+Math.round(Se(Ve.g*255,0,255))*256+Math.round(Se(Ve.b*255,0,255))}getHexString(t=Ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(Ve.copy(this),e);let n=Ve.r,s=Ve.g,r=Ve.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=Ce){oe.fromWorkingColorSpace(Ve.copy(this),t);let e=Ve.r,n=Ve.g,s=Ve.b;return t!==Ce?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(oi),this.setHSL(oi.h+t,oi.s+e,oi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(oi),t.getHSL(Tr);let n=$s(oi.h,Tr.h,e),s=$s(oi.s,Tr.s,e),r=$s(oi.l,Tr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ve=new jt;jt.NAMES=Qh;var Nf=0,Ai=class extends di{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=zi(),this.name="",this.blending=As,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ba,this.blendDst=ir,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zi,this.stencilZFail=Zi,this.stencilZPass=Zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(n.blending=this.blending),this.side!==Pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ba&&(n.blendSrc=this.blendSrc),this.blendDst!==ir&&(n.blendDst=this.blendDst),this.blendEquation!==Ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ws&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Es=class extends Ai{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=qc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Be=new R,Ir=new dt,je=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=_l,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ir.fromBufferAttribute(this,e),Ir.applyMatrix3(t),this.setXY(e,Ir.x,Ir.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix3(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=fs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=qe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fs(e,this.array)),e}setX(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fs(e,this.array)),e}setY(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fs(e,this.array)),e}setW(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),s=qe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),s=qe(s,this.array),r=qe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==_l&&(t.usage=this.usage),t}};var ro=class extends je{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var oo=class extends je{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ne=class extends je{constructor(t,e,n){super(new Float32Array(t),e,n)}},Of=0,An=new de,fa=new nn,as=new R,ln=new en,Js=new en,Ue=new R,Fe=class i extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Lh(t)?oo:ro)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return An.makeRotationFromQuaternion(t),this.applyMatrix4(An),this}rotateX(t){return An.makeRotationX(t),this.applyMatrix4(An),this}rotateY(t){return An.makeRotationY(t),this.applyMatrix4(An),this}rotateZ(t){return An.makeRotationZ(t),this.applyMatrix4(An),this}translate(t,e,n){return An.makeTranslation(t,e,n),this.applyMatrix4(An),this}scale(t,e,n){return An.makeScale(t,e,n),this.applyMatrix4(An),this}lookAt(t){return fa.lookAt(t),fa.updateMatrix(),this.applyMatrix4(fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ne(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new en);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Li);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Js.setFromBufferAttribute(a),this.morphTargetsRelative?(Ue.addVectors(ln.min,Js.min),ln.expandByPoint(Ue),Ue.addVectors(ln.max,Js.max),ln.expandByPoint(Ue)):(ln.expandByPoint(Js.min),ln.expandByPoint(Js.max))}ln.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ue.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ue));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ue.fromBufferAttribute(a,l),c&&(as.fromBufferAttribute(t,l),Ue.add(as)),s=Math.max(s,n.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new je(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new R,c[I]=new R;let l=new R,u=new R,h=new R,f=new dt,A=new dt,m=new dt,g=new R,d=new R;function p(I,_,v){l.fromBufferAttribute(n,I),u.fromBufferAttribute(n,_),h.fromBufferAttribute(n,v),f.fromBufferAttribute(r,I),A.fromBufferAttribute(r,_),m.fromBufferAttribute(r,v),u.sub(l),h.sub(l),A.sub(f),m.sub(f);let S=1/(A.x*m.y-m.x*A.y);isFinite(S)&&(g.copy(u).multiplyScalar(m.y).addScaledVector(h,-A.y).multiplyScalar(S),d.copy(h).multiplyScalar(A.x).addScaledVector(u,-m.x).multiplyScalar(S),a[I].add(g),a[_].add(g),a[v].add(g),c[I].add(d),c[_].add(d),c[v].add(d))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let I=0,_=M.length;I<_;++I){let v=M[I],S=v.start,O=v.count;for(let L=S,N=S+O;L<N;L+=3)p(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let w=new R,x=new R,D=new R,B=new R;function b(I){D.fromBufferAttribute(s,I),B.copy(D);let _=a[I];w.copy(_),w.sub(D.multiplyScalar(D.dot(_))).normalize(),x.crossVectors(B,_);let S=x.dot(c[I])<0?-1:1;o.setXYZW(I,w.x,w.y,w.z,S)}for(let I=0,_=M.length;I<_;++I){let v=M[I],S=v.start,O=v.count;for(let L=S,N=S+O;L<N;L+=3)b(t.getX(L+0)),b(t.getX(L+1)),b(t.getX(L+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,A=n.count;f<A;f++)n.setXYZ(f,0,0,0);let s=new R,r=new R,o=new R,a=new R,c=new R,l=new R,u=new R,h=new R;if(t)for(let f=0,A=t.count;f<A;f+=3){let m=t.getX(f+0),g=t.getX(f+1),d=t.getX(f+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,d),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,d),a.add(u),c.add(u),l.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(d,l.x,l.y,l.z)}else for(let f=0,A=e.count;f<A;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(a,c){let l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u),A=0,m=0;for(let g=0,d=c.length;g<d;g++){a.isInterleavedBufferAttribute?A=c[g]*a.data.stride+a.offset:A=c[g]*u;for(let p=0;p<u;p++)f[m++]=l[A++]}return new je(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){let f=l[u],A=t(f,n);c.push(A)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){let A=l[h];u.push(A.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],h=r[l];for(let f=0,A=h.length;f<A;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,u=o.length;l<u;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gl=new de,Bi=new pi,Dr=new Li,zl=new R,Rr=new R,Pr=new R,Ur=new R,da=new R,Fr=new R,Vl=new R,Lr=new R,Ne=class extends nn{constructor(t=new Fe,e=new Es){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Fr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],h=r[c];u!==0&&(da.fromBufferAttribute(h,t),o?Fr.addScaledVector(da,u):Fr.addScaledVector(da.sub(e),u))}e.add(Fr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(r),Bi.copy(t.ray).recast(t.near),!(Dr.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(Dr,zl)===null||Bi.origin.distanceToSquared(zl)>(t.far-t.near)**2))&&(Gl.copy(r).invert(),Bi.copy(t.ray).applyMatrix4(Gl),!(n.boundingBox!==null&&Bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Bi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,A=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,g=f.length;m<g;m++){let d=f[m],p=o[d.materialIndex],M=Math.max(d.start,A.start),w=Math.min(a.count,Math.min(d.start+d.count,A.start+A.count));for(let x=M,D=w;x<D;x+=3){let B=a.getX(x),b=a.getX(x+1),I=a.getX(x+2);s=Qr(this,p,t,n,l,u,h,B,b,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{let m=Math.max(0,A.start),g=Math.min(a.count,A.start+A.count);for(let d=m,p=g;d<p;d+=3){let M=a.getX(d),w=a.getX(d+1),x=a.getX(d+2);s=Qr(this,o,t,n,l,u,h,M,w,x),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,g=f.length;m<g;m++){let d=f[m],p=o[d.materialIndex],M=Math.max(d.start,A.start),w=Math.min(c.count,Math.min(d.start+d.count,A.start+A.count));for(let x=M,D=w;x<D;x+=3){let B=x,b=x+1,I=x+2;s=Qr(this,p,t,n,l,u,h,B,b,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{let m=Math.max(0,A.start),g=Math.min(c.count,A.start+A.count);for(let d=m,p=g;d<p;d+=3){let M=d,w=d+1,x=d+2;s=Qr(this,o,t,n,l,u,h,M,w,x),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}}};function kf(i,t,e,n,s,r,o,a){let c;if(t.side===He?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Pn,a),c===null)return null;Lr.copy(a),Lr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Lr);return l<e.near||l>e.far?null:{distance:l,point:Lr.clone(),object:i}}function Qr(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Rr),i.getVertexPosition(c,Pr),i.getVertexPosition(l,Ur);let u=kf(i,t,e,n,Rr,Pr,Ur,Vl);if(u){let h=new R;Di.getBarycoord(Vl,Rr,Pr,Ur,h),s&&(u.uv=Di.getInterpolatedAttribute(s,a,c,l,h,new dt)),r&&(u.uv1=Di.getInterpolatedAttribute(r,a,c,l,h,new dt)),o&&(u.normal=Di.getInterpolatedAttribute(o,a,c,l,h,new R),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new R,materialIndex:0};Di.getNormal(Rr,Pr,Ur,f.normal),u.face=f,u.barycoord=h}return u}var Qi=class i extends Fe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],h=[],f=0,A=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ne(l,3)),this.setAttribute("normal",new ne(u,3)),this.setAttribute("uv",new ne(h,2));function m(g,d,p,M,w,x,D,B,b,I,_){let v=x/b,S=D/I,O=x/2,L=D/2,N=B/2,K=b+1,G=I+1,tt=0,z=0,ct=new R;for(let ut=0;ut<G;ut++){let wt=ut*S-L;for(let Nt=0;Nt<K;Nt++){let St=Nt*v-O;ct[g]=St*M,ct[d]=wt*w,ct[p]=N,l.push(ct.x,ct.y,ct.z),ct[g]=0,ct[d]=0,ct[p]=B>0?1:-1,u.push(ct.x,ct.y,ct.z),h.push(Nt/b),h.push(1-ut/I),tt+=1}}for(let ut=0;ut<I;ut++)for(let wt=0;wt<b;wt++){let Nt=f+wt+K*ut,St=f+wt+K*(ut+1),Y=f+(wt+1)+K*(ut+1),it=f+(wt+1)+K*ut;c.push(Nt,St,it),c.push(St,Y,it),z+=6}a.addGroup(A,z,_),A+=z,f+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Bs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ke(i){let t={};for(let e=0;e<i.length;e++){let n=Bs(i[e]);for(let s in n)t[s]=n[s]}return t}function Gf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Nh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}var zf={clone:Bs,merge:Ke},Vf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,sn=class extends Ai{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vf,this.fragmentShader=Hf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Bs(t.uniforms),this.uniformsGroups=Gf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},ao=class extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=Vn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ai=new R,Hl=new dt,Wl=new dt,be=class extends ao{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=rr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(js*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rr*2*Math.atan(Math.tan(js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ai.x,ai.y).multiplyScalar(-t/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ai.x,ai.y).multiplyScalar(-t/ai.z)}getViewSize(t,e){return this.getViewBounds(t,Hl,Wl),e.subVectors(Wl,Hl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(js*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},cs=-90,ls=1,dc=class extends nn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new be(cs,ls,t,e);s.layers=this.layers,this.add(s);let r=new be(cs,ls,t,e);r.layers=this.layers,this.add(r);let o=new be(cs,ls,t,e);o.layers=this.layers,this.add(o);let a=new be(cs,ls,t,e);a.layers=this.layers,this.add(a);let c=new be(cs,ls,t,e);c.layers=this.layers,this.add(c);let l=new be(cs,ls,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===to)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),A=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,f,A),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},co=class extends tn{constructor(t,e,n,s,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Ms,super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},pc=class extends bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new co(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:mn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Qi(5,5,5),r=new sn({name:"CubemapFromEquirect",uniforms:Bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:He,blending:hi});r.uniforms.tEquirect.value=e;let o=new Ne(s,r),a=e.minFilter;return e.minFilter===Ui&&(e.minFilter=mn),new dc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},pa=new R,Wf=new R,Yf=new qt,zn=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=pa.subVectors(n,e).cross(Wf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(pa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Yf.getNormalMatrix(t),s=this.coplanarPoint(pa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ci=new Li,Nr=new R,or=class{constructor(t=new zn,e=new zn,n=new zn,s=new zn,r=new zn,o=new zn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Vn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],f=s[7],A=s[8],m=s[9],g=s[10],d=s[11],p=s[12],M=s[13],w=s[14],x=s[15];if(n[0].setComponents(c-r,f-l,d-A,x-p).normalize(),n[1].setComponents(c+r,f+l,d+A,x+p).normalize(),n[2].setComponents(c+o,f+u,d+m,x+M).normalize(),n[3].setComponents(c-o,f-u,d-m,x-M).normalize(),n[4].setComponents(c-a,f-h,d-g,x-w).normalize(),e===Vn)n[5].setComponents(c+a,f+h,d+g,x+w).normalize();else if(e===to)n[5].setComponents(a,h,g,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(t){return Ci.center.set(0,0,0),Ci.radius=.7071067811865476,Ci.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Nr.x=s.normal.x>0?t.max.x:t.min.x,Nr.y=s.normal.y>0?t.max.y:t.min.y,Nr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Nr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Oh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Jf(i){let t=new WeakMap;function e(a,c){let l=a.array,u=a.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),a.onUploadCallback();let A;if(l instanceof Float32Array)A=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?A=i.HALF_FLOAT:A=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)A=i.SHORT;else if(l instanceof Uint32Array)A=i.UNSIGNED_INT;else if(l instanceof Int32Array)A=i.INT;else if(l instanceof Int8Array)A=i.BYTE;else if(l instanceof Uint8Array)A=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)A=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:A,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){let u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((A,m)=>A.start-m.start);let f=0;for(let A=1;A<h.length;A++){let m=h[f],g=h[A];g.start<=m.start+m.count+1?m.count=Math.max(m.count,g.start+g.count-m.start):(++f,h[f]=g)}h.length=f+1;for(let A=0,m=h.length;A<m;A++){let g=h[A];i.bufferSubData(l,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var mi=class i extends Fe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=t/a,f=e/c,A=[],m=[],g=[],d=[];for(let p=0;p<u;p++){let M=p*f-o;for(let w=0;w<l;w++){let x=w*h-r;m.push(x,-M,0),g.push(0,0,1),d.push(w/a),d.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){let w=M+l*p,x=M+l*(p+1),D=M+1+l*(p+1),B=M+1+l*p;A.push(w,x,B),A.push(x,D,B)}this.setIndex(A),this.setAttribute("position",new ne(m,3)),this.setAttribute("normal",new ne(g,3)),this.setAttribute("uv",new ne(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Xf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qf=`#ifdef USE_ALPHAHASH
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
#endif`,Kf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$f=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,td=`#ifdef USE_AOMAP
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
#endif`,ed=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nd=`#ifdef USE_BATCHING
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
#endif`,id=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,od=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ad=`#ifdef USE_IRIDESCENCE
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
#endif`,cd=`#ifdef USE_BUMPMAP
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
#endif`,ld=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ud=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ad=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,md=`#if defined( USE_COLOR_ALPHA )
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
#endif`,gd=`#define PI 3.141592653589793
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
} // validated`,xd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wd=`vec3 transformedNormal = objectNormal;
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
#endif`,Md=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_d=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ed="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cd=`#ifdef USE_ENVMAP
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
#endif`,Sd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bd=`#ifdef USE_ENVMAP
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
#endif`,Td=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Id=`#ifdef USE_ENVMAP
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
#endif`,Dd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ud=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fd=`#ifdef USE_GRADIENTMAP
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
}`,Ld=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nd=`varying vec3 vViewPosition;
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
#endif`,kd=`#ifdef USE_ENVMAP
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
#endif`,Gd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wd=`PhysicalMaterial material;
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
#endif`,Yd=`struct PhysicalMaterial {
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
}`,Jd=`
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
#endif`,Xd=`#if defined( RE_IndirectDiffuse )
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
#endif`,qd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$d=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ep=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,np=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ip=`#if defined( USE_POINTS_UV )
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
#endif`,sp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,op=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ap=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lp=`#ifdef USE_MORPHTARGETS
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
#endif`,hp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,up=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ap=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mp=`#ifdef USE_NORMALMAP
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
#endif`,gp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_p=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ep=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ip=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rp=`float getShadowMask() {
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
}`,Pp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Up=`#ifdef USE_SKINNING
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
#endif`,Fp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lp=`#ifdef USE_SKINNING
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
#endif`,Qp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Np=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Op=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gp=`#ifdef USE_TRANSMISSION
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
#endif`,zp=`#ifdef USE_TRANSMISSION
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
#endif`,Vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Jp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xp=`uniform sampler2D t2D;
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
}`,qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$p=`#include <common>
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
}`,tA=`#if DEPTH_PACKING == 3200
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
}`,eA=`#define DISTANCE
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
}`,nA=`#define DISTANCE
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
}`,iA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rA=`uniform float scale;
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
}`,oA=`uniform vec3 diffuse;
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
}`,aA=`#include <common>
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
}`,cA=`uniform vec3 diffuse;
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
}`,lA=`#define LAMBERT
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
}`,hA=`#define LAMBERT
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
}`,uA=`#define MATCAP
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
}`,fA=`#define MATCAP
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
}`,dA=`#define NORMAL
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
}`,pA=`#define NORMAL
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
}`,AA=`#define PHONG
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
}`,mA=`#define PHONG
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
}`,gA=`#define STANDARD
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
}`,xA=`#define STANDARD
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
}`,wA=`#define TOON
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
}`,MA=`#define TOON
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
}`,vA=`uniform float size;
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
}`,yA=`uniform vec3 diffuse;
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
}`,_A=`#include <common>
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
}`,EA=`uniform vec3 color;
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
}`,BA=`uniform float rotation;
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
}`,CA=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:Xf,alphahash_pars_fragment:qf,alphamap_fragment:Kf,alphamap_pars_fragment:Zf,alphatest_fragment:jf,alphatest_pars_fragment:$f,aomap_fragment:td,aomap_pars_fragment:ed,batching_pars_vertex:nd,batching_vertex:id,begin_vertex:sd,beginnormal_vertex:rd,bsdfs:od,iridescence_fragment:ad,bumpmap_pars_fragment:cd,clipping_planes_fragment:ld,clipping_planes_pars_fragment:hd,clipping_planes_pars_vertex:ud,clipping_planes_vertex:fd,color_fragment:dd,color_pars_fragment:pd,color_pars_vertex:Ad,color_vertex:md,common:gd,cube_uv_reflection_fragment:xd,defaultnormal_vertex:wd,displacementmap_pars_vertex:Md,displacementmap_vertex:vd,emissivemap_fragment:yd,emissivemap_pars_fragment:_d,colorspace_fragment:Ed,colorspace_pars_fragment:Bd,envmap_fragment:Cd,envmap_common_pars_fragment:Sd,envmap_pars_fragment:bd,envmap_pars_vertex:Td,envmap_physical_pars_fragment:kd,envmap_vertex:Id,fog_vertex:Dd,fog_pars_vertex:Rd,fog_fragment:Pd,fog_pars_fragment:Ud,gradientmap_pars_fragment:Fd,lightmap_pars_fragment:Ld,lights_lambert_fragment:Qd,lights_lambert_pars_fragment:Nd,lights_pars_begin:Od,lights_toon_fragment:Gd,lights_toon_pars_fragment:zd,lights_phong_fragment:Vd,lights_phong_pars_fragment:Hd,lights_physical_fragment:Wd,lights_physical_pars_fragment:Yd,lights_fragment_begin:Jd,lights_fragment_maps:Xd,lights_fragment_end:qd,logdepthbuf_fragment:Kd,logdepthbuf_pars_fragment:Zd,logdepthbuf_pars_vertex:jd,logdepthbuf_vertex:$d,map_fragment:tp,map_pars_fragment:ep,map_particle_fragment:np,map_particle_pars_fragment:ip,metalnessmap_fragment:sp,metalnessmap_pars_fragment:rp,morphinstance_vertex:op,morphcolor_vertex:ap,morphnormal_vertex:cp,morphtarget_pars_vertex:lp,morphtarget_vertex:hp,normal_fragment_begin:up,normal_fragment_maps:fp,normal_pars_fragment:dp,normal_pars_vertex:pp,normal_vertex:Ap,normalmap_pars_fragment:mp,clearcoat_normal_fragment_begin:gp,clearcoat_normal_fragment_maps:xp,clearcoat_pars_fragment:wp,iridescence_pars_fragment:Mp,opaque_fragment:vp,packing:yp,premultiplied_alpha_fragment:_p,project_vertex:Ep,dithering_fragment:Bp,dithering_pars_fragment:Cp,roughnessmap_fragment:Sp,roughnessmap_pars_fragment:bp,shadowmap_pars_fragment:Tp,shadowmap_pars_vertex:Ip,shadowmap_vertex:Dp,shadowmask_pars_fragment:Rp,skinbase_vertex:Pp,skinning_pars_vertex:Up,skinning_vertex:Fp,skinnormal_vertex:Lp,specularmap_fragment:Qp,specularmap_pars_fragment:Np,tonemapping_fragment:Op,tonemapping_pars_fragment:kp,transmission_fragment:Gp,transmission_pars_fragment:zp,uv_pars_fragment:Vp,uv_pars_vertex:Hp,uv_vertex:Wp,worldpos_vertex:Yp,background_vert:Jp,background_frag:Xp,backgroundCube_vert:qp,backgroundCube_frag:Kp,cube_vert:Zp,cube_frag:jp,depth_vert:$p,depth_frag:tA,distanceRGBA_vert:eA,distanceRGBA_frag:nA,equirect_vert:iA,equirect_frag:sA,linedashed_vert:rA,linedashed_frag:oA,meshbasic_vert:aA,meshbasic_frag:cA,meshlambert_vert:lA,meshlambert_frag:hA,meshmatcap_vert:uA,meshmatcap_frag:fA,meshnormal_vert:dA,meshnormal_frag:pA,meshphong_vert:AA,meshphong_frag:mA,meshphysical_vert:gA,meshphysical_frag:xA,meshtoon_vert:wA,meshtoon_frag:MA,points_vert:vA,points_frag:yA,shadow_vert:_A,shadow_frag:EA,sprite_vert:BA,sprite_frag:CA},vt={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},Dn={basic:{uniforms:Ke([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:Ke([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new jt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:Ke([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:Ke([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:Ke([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new jt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:Ke([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:Ke([vt.points,vt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:Ke([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:Ke([vt.common,vt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:Ke([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:Ke([vt.sprite,vt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:Ke([vt.common,vt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:Ke([vt.lights,vt.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};Dn.physical={uniforms:Ke([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};var Or={r:0,b:0,g:0},Si=new hn,SA=new de;function bA(i,t,e,n,s,r,o){let a=new jt(0),c=r===!0?0:1,l,u,h=null,f=0,A=null;function m(M){let w=M.isScene===!0?M.background:null;return w&&w.isTexture&&(w=(M.backgroundBlurriness>0?e:t).get(w)),w}function g(M){let w=!1,x=m(M);x===null?p(a,c):x&&x.isColor&&(p(x,1),w=!0);let D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function d(M,w){let x=m(w);x&&(x.isCubeTexture||x.mapping===Fo)?(u===void 0&&(u=new Ne(new Qi(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:Bs(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,B,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Si.copy(w.backgroundRotation),Si.x*=-1,Si.y*=-1,Si.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(SA.makeRotationFromEuler(Si)),u.material.toneMapped=oe.getTransfer(x.colorSpace)!==pe,(h!==x||f!==x.version||A!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,A=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Ne(new mi(2,2),new sn({name:"BackgroundMaterial",uniforms:Bs(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=oe.getTransfer(x.colorSpace)!==pe,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||A!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,f=x.version,A=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,w){M.getRGB(Or,Nh(i)),n.buffers.color.setClear(Or.r,Or.g,Or.b,w,o)}return{getClearColor:function(){return a},setClearColor:function(M,w=1){a.set(M),c=w,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(a,c)},render:g,addToRenderList:d}}function TA(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(v,S,O,L,N){let K=!1,G=h(L,O,S);r!==G&&(r=G,l(r.object)),K=A(v,L,O,N),K&&m(v,L,O,N),N!==null&&t.update(N,i.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,x(v,S,O,L),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function u(v){return i.deleteVertexArray(v)}function h(v,S,O){let L=O.wireframe===!0,N=n[v.id];N===void 0&&(N={},n[v.id]=N);let K=N[S.id];K===void 0&&(K={},N[S.id]=K);let G=K[L];return G===void 0&&(G=f(c()),K[L]=G),G}function f(v){let S=[],O=[],L=[];for(let N=0;N<e;N++)S[N]=0,O[N]=0,L[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:O,attributeDivisors:L,object:v,attributes:{},index:null}}function A(v,S,O,L){let N=r.attributes,K=S.attributes,G=0,tt=O.getAttributes();for(let z in tt)if(tt[z].location>=0){let ut=N[z],wt=K[z];if(wt===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(wt=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(wt=v.instanceColor)),ut===void 0||ut.attribute!==wt||wt&&ut.data!==wt.data)return!0;G++}return r.attributesNum!==G||r.index!==L}function m(v,S,O,L){let N={},K=S.attributes,G=0,tt=O.getAttributes();for(let z in tt)if(tt[z].location>=0){let ut=K[z];ut===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(ut=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(ut=v.instanceColor));let wt={};wt.attribute=ut,ut&&ut.data&&(wt.data=ut.data),N[z]=wt,G++}r.attributes=N,r.attributesNum=G,r.index=L}function g(){let v=r.newAttributes;for(let S=0,O=v.length;S<O;S++)v[S]=0}function d(v){p(v,0)}function p(v,S){let O=r.newAttributes,L=r.enabledAttributes,N=r.attributeDivisors;O[v]=1,L[v]===0&&(i.enableVertexAttribArray(v),L[v]=1),N[v]!==S&&(i.vertexAttribDivisor(v,S),N[v]=S)}function M(){let v=r.newAttributes,S=r.enabledAttributes;for(let O=0,L=S.length;O<L;O++)S[O]!==v[O]&&(i.disableVertexAttribArray(O),S[O]=0)}function w(v,S,O,L,N,K,G){G===!0?i.vertexAttribIPointer(v,S,O,N,K):i.vertexAttribPointer(v,S,O,L,N,K)}function x(v,S,O,L){g();let N=L.attributes,K=O.getAttributes(),G=S.defaultAttributeValues;for(let tt in K){let z=K[tt];if(z.location>=0){let ct=N[tt];if(ct===void 0&&(tt==="instanceMatrix"&&v.instanceMatrix&&(ct=v.instanceMatrix),tt==="instanceColor"&&v.instanceColor&&(ct=v.instanceColor)),ct!==void 0){let ut=ct.normalized,wt=ct.itemSize,Nt=t.get(ct);if(Nt===void 0)continue;let St=Nt.buffer,Y=Nt.type,it=Nt.bytesPerElement,ht=Y===i.INT||Y===i.UNSIGNED_INT||ct.gpuType===Kc;if(ct.isInterleavedBufferAttribute){let st=ct.data,At=st.stride,yt=ct.offset;if(st.isInstancedInterleavedBuffer){for(let Rt=0;Rt<z.locationSize;Rt++)p(z.location+Rt,st.meshPerAttribute);v.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Rt=0;Rt<z.locationSize;Rt++)d(z.location+Rt);i.bindBuffer(i.ARRAY_BUFFER,St);for(let Rt=0;Rt<z.locationSize;Rt++)w(z.location+Rt,wt/z.locationSize,Y,ut,At*it,(yt+wt/z.locationSize*Rt)*it,ht)}else{if(ct.isInstancedBufferAttribute){for(let st=0;st<z.locationSize;st++)p(z.location+st,ct.meshPerAttribute);v.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let st=0;st<z.locationSize;st++)d(z.location+st);i.bindBuffer(i.ARRAY_BUFFER,St);for(let st=0;st<z.locationSize;st++)w(z.location+st,wt/z.locationSize,Y,ut,wt*it,wt/z.locationSize*st*it,ht)}}else if(G!==void 0){let ut=G[tt];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(z.location,ut);break;case 3:i.vertexAttrib3fv(z.location,ut);break;case 4:i.vertexAttrib4fv(z.location,ut);break;default:i.vertexAttrib1fv(z.location,ut)}}}}M()}function D(){I();for(let v in n){let S=n[v];for(let O in S){let L=S[O];for(let N in L)u(L[N].object),delete L[N];delete S[O]}delete n[v]}}function B(v){if(n[v.id]===void 0)return;let S=n[v.id];for(let O in S){let L=S[O];for(let N in L)u(L[N].object),delete L[N];delete S[O]}delete n[v.id]}function b(v){for(let S in n){let O=n[S];if(O[v.id]===void 0)continue;let L=O[v.id];for(let N in L)u(L[N].object),delete L[N];delete O[v.id]}}function I(){_(),o=!0,r!==s&&(r=s,l(r.object))}function _(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:_,dispose:D,releaseStatesOfGeometry:B,releaseStatesOfProgram:b,initAttributes:g,enableAttribute:d,disableUnusedAttributes:M}}function IA(i,t,e){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),e.update(u,n,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let A=0;for(let m=0;m<h;m++)A+=u[m];e.update(A,n,1)}function c(l,u,h,f){if(h===0)return;let A=t.get("WEBGL_multi_draw");if(A===null)for(let m=0;m<l.length;m++)o(l[m],u[m],f[m]);else{A.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let m=0;for(let g=0;g<h;g++)m+=u[g]*f[g];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function DA(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let b=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(b){return!(b!==Cn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){let I=b===fr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==Sn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Rn&&!I)}function c(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),A=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=m>0,B=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:A,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:x,vertexTextures:D,maxSamples:B}}function RA(i){let t=this,e=null,n=0,s=!1,r=!1,o=new zn,a=new qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let A=h.length!==0||f||n!==0||s;return s=f,n=h.length,A},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,A){let m=h.clippingPlanes,g=h.clipIntersection,d=h.clipShadows,p=i.get(h);if(!s||m===null||m.length===0||r&&!d)r?u(null):l();else{let M=r?0:n,w=M*4,x=p.clippingState||null;c.value=x,x=u(m,f,w,A);for(let D=0;D!==w;++D)x[D]=e[D];p.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,A,m){let g=h!==null?h.length:0,d=null;if(g!==0){if(d=c.value,m!==!0||d===null){let p=A+g*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(d===null||d.length<p)&&(d=new Float32Array(p));for(let w=0,x=A;w!==g;++w,x+=4)o.copy(h[w]).applyMatrix4(M,a),o.normal.toArray(d,x),d[x+3]=o.constant}c.value=d,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,d}}function PA(i){let t=new WeakMap;function e(o,a){return a===Pa?o.mapping=Ms:a===Ua&&(o.mapping=vs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Pa||a===Ua)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new pc(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var gi=class extends ao{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ds=4,Yl=[.125,.215,.35,.446,.526,.582],Ri=20,Aa=new gi,Jl=new jt,ma=null,ga=0,xa=0,wa=!1,Ti=(1+Math.sqrt(5))/2,hs=1/Ti,Xl=[new R(-Ti,hs,0),new R(Ti,hs,0),new R(-hs,0,Ti),new R(hs,0,Ti),new R(0,Ti,-hs),new R(0,Ti,hs),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],Cs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ma,ga,xa),this._renderer.xr.enabled=wa,t.scissorTest=!1,kr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ms||t.mapping===vs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:fr,format:Cn,colorSpace:Is,depthBuffer:!1},s=ql(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ql(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=UA(r)),this._blurMaterial=FA(r,t,e)}return s}_compileMaterial(t){let e=new Ne(this._lodPlanes[0],t);this._renderer.compile(e,Aa)}_sceneToCubeUV(t,e,n,s){let a=new be(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Jl),u.toneMapping=ui,u.autoClear=!1;let A=new Es({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1}),m=new Ne(new Qi,A),g=!1,d=t.background;d?d.isColor&&(A.color.copy(d),t.background=null,g=!0):(A.color.copy(Jl),g=!0);for(let p=0;p<6;p++){let M=p%3;M===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):M===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let w=this._cubeSize;kr(s,M*w,p>2?w:0,w,w),u.setRenderTarget(s),g&&u.render(m,a),u.render(t,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=d}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ms||t.mapping===vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kl());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ne(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;kr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Aa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Xl[(s-r-1)%Xl.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Ne(this._lodPlanes[s],l),f=l.uniforms,A=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*A):2*Math.PI/(2*Ri-1),g=r/m,d=isFinite(r)?1+Math.floor(u*g):Ri;d>Ri&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Ri}`);let p=[],M=0;for(let b=0;b<Ri;++b){let I=b/g,_=Math.exp(-I*I/2);p.push(_),b===0?M+=_:b<d&&(M+=2*_)}for(let b=0;b<p.length;b++)p[b]=p[b]/M;f.envMap.value=t.texture,f.samples.value=d,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:w}=this;f.dTheta.value=m,f.mipInt.value=w-n;let x=this._sizeLods[s],D=3*x*(s>w-ds?s-w+ds:0),B=4*(this._cubeSize-x);kr(e,D,B,3*x,2*x),c.setRenderTarget(e),c.render(h,Aa)}};function UA(i){let t=[],e=[],n=[],s=i,r=i-ds+1+Yl.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-ds?c=Yl[o-i+ds-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],A=6,m=6,g=3,d=2,p=1,M=new Float32Array(g*m*A),w=new Float32Array(d*m*A),x=new Float32Array(p*m*A);for(let B=0;B<A;B++){let b=B%3*2/3-1,I=B>2?0:-1,_=[b,I,0,b+2/3,I,0,b+2/3,I+1,0,b,I,0,b+2/3,I+1,0,b,I+1,0];M.set(_,g*m*B),w.set(f,d*m*B);let v=[B,B,B,B,B,B];x.set(v,p*m*B)}let D=new Fe;D.setAttribute("position",new je(M,g)),D.setAttribute("uv",new je(w,d)),D.setAttribute("faceIndex",new je(x,p)),t.push(D),s>ds&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ql(i,t,e){let n=new bn(i,t,e);return n.texture.mapping=Fo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function kr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function FA(i,t,e){let n=new Float32Array(Ri),s=new R(0,1,0);return new sn({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:rl(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Kl(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rl(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Zl(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function rl(){return`

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
	`}function LA(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Pa||c===Ua,u=c===Ms||c===vs;if(l||u){let h=t.get(a),f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Cs(i)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{let A=a.image;return l&&A&&A.height>0||u&&A&&s(A)?(e===null&&(e=new Cs(i)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function QA(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ks("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function NA(i,t,e,n){let s={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);for(let m in f.morphAttributes){let g=f.morphAttributes[m];for(let d=0,p=g.length;d<p;d++)t.remove(g[d])}f.removeEventListener("dispose",o),delete s[f.id];let A=r.get(f);A&&(t.remove(A),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(h){let f=h.attributes;for(let m in f)t.update(f[m],i.ARRAY_BUFFER);let A=h.morphAttributes;for(let m in A){let g=A[m];for(let d=0,p=g.length;d<p;d++)t.update(g[d],i.ARRAY_BUFFER)}}function l(h){let f=[],A=h.index,m=h.attributes.position,g=0;if(A!==null){let M=A.array;g=A.version;for(let w=0,x=M.length;w<x;w+=3){let D=M[w+0],B=M[w+1],b=M[w+2];f.push(D,B,B,b,b,D)}}else if(m!==void 0){let M=m.array;g=m.version;for(let w=0,x=M.length/3-1;w<x;w+=3){let D=w+0,B=w+1,b=w+2;f.push(D,B,B,b,b,D)}}else return;let d=new(Lh(f)?oo:ro)(f,1);d.version=g;let p=r.get(h);p&&t.remove(p),r.set(h,d)}function u(h){let f=r.get(h);if(f){let A=h.index;A!==null&&f.version<A.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function OA(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,A){i.drawElements(n,A,r,f*o),e.update(A,n,1)}function l(f,A,m){m!==0&&(i.drawElementsInstanced(n,A,r,f*o,m),e.update(A,n,m))}function u(f,A,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,A,0,r,f,0,m);let d=0;for(let p=0;p<m;p++)d+=A[p];e.update(d,n,1)}function h(f,A,m,g){if(m===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<f.length;p++)l(f[p]/o,A[p],g[p]);else{d.multiDrawElementsInstancedWEBGL(n,A,0,r,f,0,g,0,m);let p=0;for(let M=0;M<m;M++)p+=A[M]*g[M];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function kA(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function GA(i,t,e){let n=new WeakMap,s=new me;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let _=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",_)};f!==void 0&&f.texture.dispose();let A=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],w=0;A===!0&&(w=1),m===!0&&(w=2),g===!0&&(w=3);let x=a.attributes.position.count*w,D=1;x>t.maxTextureSize&&(D=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let B=new Float32Array(x*D*4*h),b=new io(B,x,D,h);b.type=Rn,b.needsUpdate=!0;let I=w*4;for(let v=0;v<h;v++){let S=d[v],O=p[v],L=M[v],N=x*D*4*v;for(let K=0;K<S.count;K++){let G=K*I;A===!0&&(s.fromBufferAttribute(S,K),B[N+G+0]=s.x,B[N+G+1]=s.y,B[N+G+2]=s.z,B[N+G+3]=0),m===!0&&(s.fromBufferAttribute(O,K),B[N+G+4]=s.x,B[N+G+5]=s.y,B[N+G+6]=s.z,B[N+G+7]=0),g===!0&&(s.fromBufferAttribute(L,K),B[N+G+8]=s.x,B[N+G+9]=s.y,B[N+G+10]=s.z,B[N+G+11]=L.itemSize===4?s.w:1)}}f={count:h,texture:b,size:new dt(x,D)},n.set(a,f),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let A=0;for(let g=0;g<l.length;g++)A+=l[g];let m=a.morphTargetsRelative?1:1-A;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function zA(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return h}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var lo=class extends tn{constructor(t,e,n,s,r,o,a,c,l,u=ms){if(u!==ms&&u!==_s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ms&&(n=Fi),n===void 0&&u===_s&&(n=ys),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ze,this.minFilter=c!==void 0?c:Ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},kh=new tn,jl=new lo(1,1),Gh=new io,zh=new fc,Vh=new co,$l=[],th=[],eh=new Float32Array(16),nh=new Float32Array(9),ih=new Float32Array(4);function Ds(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=$l[s];if(r===void 0&&(r=new Float32Array(s),$l[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Te(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ie(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Qo(i,t){let e=th[t];e===void 0&&(e=new Int32Array(t),th[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function VA(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function HA(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2fv(this.addr,t),Ie(e,t)}}function WA(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Te(e,t))return;i.uniform3fv(this.addr,t),Ie(e,t)}}function YA(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4fv(this.addr,t),Ie(e,t)}}function JA(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(Te(e,n))return;ih.set(n),i.uniformMatrix2fv(this.addr,!1,ih),Ie(e,n)}}function XA(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(Te(e,n))return;nh.set(n),i.uniformMatrix3fv(this.addr,!1,nh),Ie(e,n)}}function qA(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(Te(e,n))return;eh.set(n),i.uniformMatrix4fv(this.addr,!1,eh),Ie(e,n)}}function KA(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ZA(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2iv(this.addr,t),Ie(e,t)}}function jA(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3iv(this.addr,t),Ie(e,t)}}function $A(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4iv(this.addr,t),Ie(e,t)}}function tm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function em(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2uiv(this.addr,t),Ie(e,t)}}function nm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3uiv(this.addr,t),Ie(e,t)}}function im(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4uiv(this.addr,t),Ie(e,t)}}function sm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(jl.compareFunction=Fh,r=jl):r=kh,e.setTexture2D(t||r,s)}function rm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||zh,s)}function om(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Vh,s)}function am(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Gh,s)}function cm(i){switch(i){case 5126:return VA;case 35664:return HA;case 35665:return WA;case 35666:return YA;case 35674:return JA;case 35675:return XA;case 35676:return qA;case 5124:case 35670:return KA;case 35667:case 35671:return ZA;case 35668:case 35672:return jA;case 35669:case 35673:return $A;case 5125:return tm;case 36294:return em;case 36295:return nm;case 36296:return im;case 35678:case 36198:case 36298:case 36306:case 35682:return sm;case 35679:case 36299:case 36307:return rm;case 35680:case 36300:case 36308:case 36293:return om;case 36289:case 36303:case 36311:case 36292:return am}}function lm(i,t){i.uniform1fv(this.addr,t)}function hm(i,t){let e=Ds(t,this.size,2);i.uniform2fv(this.addr,e)}function um(i,t){let e=Ds(t,this.size,3);i.uniform3fv(this.addr,e)}function fm(i,t){let e=Ds(t,this.size,4);i.uniform4fv(this.addr,e)}function dm(i,t){let e=Ds(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function pm(i,t){let e=Ds(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Am(i,t){let e=Ds(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function mm(i,t){i.uniform1iv(this.addr,t)}function gm(i,t){i.uniform2iv(this.addr,t)}function xm(i,t){i.uniform3iv(this.addr,t)}function wm(i,t){i.uniform4iv(this.addr,t)}function Mm(i,t){i.uniform1uiv(this.addr,t)}function vm(i,t){i.uniform2uiv(this.addr,t)}function ym(i,t){i.uniform3uiv(this.addr,t)}function _m(i,t){i.uniform4uiv(this.addr,t)}function Em(i,t,e){let n=this.cache,s=t.length,r=Qo(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||kh,r[o])}function Bm(i,t,e){let n=this.cache,s=t.length,r=Qo(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||zh,r[o])}function Cm(i,t,e){let n=this.cache,s=t.length,r=Qo(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Vh,r[o])}function Sm(i,t,e){let n=this.cache,s=t.length,r=Qo(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Gh,r[o])}function bm(i){switch(i){case 5126:return lm;case 35664:return hm;case 35665:return um;case 35666:return fm;case 35674:return dm;case 35675:return pm;case 35676:return Am;case 5124:case 35670:return mm;case 35667:case 35671:return gm;case 35668:case 35672:return xm;case 35669:case 35673:return wm;case 5125:return Mm;case 36294:return vm;case 36295:return ym;case 36296:return _m;case 35678:case 36198:case 36298:case 36306:case 35682:return Em;case 35679:case 36299:case 36307:return Bm;case 35680:case 36300:case 36308:case 36293:return Cm;case 36289:case 36303:case 36311:case 36292:return Sm}}var Ac=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=cm(e.type)}},mc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=bm(e.type)}},gc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Ma=/(\w+)(\])?(\[|\.)?/g;function sh(i,t){i.seq.push(t),i.map[t.id]=t}function Tm(i,t,e){let n=i.name,s=n.length;for(Ma.lastIndex=0;;){let r=Ma.exec(n),o=Ma.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){sh(e,l===void 0?new Ac(a,i,t):new mc(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new gc(a),sh(e,h)),e=h}}}var xs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Tm(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function rh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Im=37297,Dm=0;function Rm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var oh=new qt;function Pm(i){oe._getMatrix(oh,oe.workingColorSpace,i);let t=`mat3( ${oh.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(i)){case Lo:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ah(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Rm(i.getShaderSource(t),o)}else return s}function Um(i,t){let e=Pm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Fm(i,t){let e;switch(t){case Wu:e="Linear";break;case Yu:e="Reinhard";break;case Ju:e="Cineon";break;case Xu:e="ACESFilmic";break;case Ku:e="AgX";break;case Gi:e="Neutral";break;case qu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Gr=new R;function Lm(){oe.getLuminanceCoefficients(Gr);let i=Gr.x.toFixed(4),t=Gr.y.toFixed(4),e=Gr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zs).join(`
`)}function Nm(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Om(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Zs(i){return i!==""}function ch(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function lh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var km=/^[ \t]*#include +<([\w\d./]+)>/gm;function xc(i){return i.replace(km,zm)}var Gm=new Map;function zm(i,t){let e=Zt[t];if(e===void 0){let n=Gm.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return xc(e)}var Vm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hh(i){return i.replace(Vm,Hm)}function Hm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function uh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Wm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Eh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Cu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Gn&&(t="SHADOWMAP_TYPE_VSM"),t}function Ym(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ms:case vs:t="ENVMAP_TYPE_CUBE";break;case Fo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Jm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case vs:t="ENVMAP_MODE_REFRACTION";break}return t}function Xm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case qc:t="ENVMAP_BLENDING_MULTIPLY";break;case Vu:t="ENVMAP_BLENDING_MIX";break;case Hu:t="ENVMAP_BLENDING_ADD";break}return t}function qm(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Km(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=Wm(e),l=Ym(e),u=Jm(e),h=Xm(e),f=qm(e),A=Qm(e),m=Nm(r),g=s.createProgram(),d,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Zs).join(`
`),d.length>0&&(d+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Zs).join(`
`),p.length>0&&(p+=`
`)):(d=[uh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zs).join(`
`),p=[uh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ui?"#define TONE_MAPPING":"",e.toneMapping!==ui?Zt.tonemapping_pars_fragment:"",e.toneMapping!==ui?Fm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,Um("linearToOutputTexel",e.outputColorSpace),Lm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Zs).join(`
`)),o=xc(o),o=ch(o,e),o=lh(o,e),a=xc(a),a=ch(a,e),a=lh(a,e),o=hh(o),a=hh(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,d=[A,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,p=["#define varying in",e.glslVersion===El?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===El?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=M+d+o,x=M+p+a,D=rh(s,s.VERTEX_SHADER,w),B=rh(s,s.FRAGMENT_SHADER,x);s.attachShader(g,D),s.attachShader(g,B),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function b(S){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(g).trim(),L=s.getShaderInfoLog(D).trim(),N=s.getShaderInfoLog(B).trim(),K=!0,G=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,D,B);else{let tt=ah(s,D,"vertex"),z=ah(s,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+O+`
`+tt+`
`+z)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(L===""||N==="")&&(G=!1);G&&(S.diagnostics={runnable:K,programLog:O,vertexShader:{log:L,prefix:d},fragmentShader:{log:N,prefix:p}})}s.deleteShader(D),s.deleteShader(B),I=new xs(s,g),_=Om(s,g)}let I;this.getUniforms=function(){return I===void 0&&b(this),I};let _;this.getAttributes=function(){return _===void 0&&b(this),_};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(g,Im)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Dm++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=D,this.fragmentShader=B,this}var Zm=0,wc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Mc(t),e.set(t,n)),n}},Mc=class{constructor(t){this.id=Zm++,this.code=t,this.usedTimes=0}};function jm(i,t,e,n,s,r,o){let a=new so,c=new wc,l=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures,A=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function d(_,v,S,O,L){let N=O.fog,K=L.geometry,G=_.isMeshStandardMaterial?O.environment:null,tt=(_.isMeshStandardMaterial?e:t).get(_.envMap||G),z=tt&&tt.mapping===Fo?tt.image.height:null,ct=m[_.type];_.precision!==null&&(A=s.getMaxPrecision(_.precision),A!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",A,"instead."));let ut=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,wt=ut!==void 0?ut.length:0,Nt=0;K.morphAttributes.position!==void 0&&(Nt=1),K.morphAttributes.normal!==void 0&&(Nt=2),K.morphAttributes.color!==void 0&&(Nt=3);let St,Y,it,ht;if(ct){let $t=Dn[ct];St=$t.vertexShader,Y=$t.fragmentShader}else St=_.vertexShader,Y=_.fragmentShader,c.update(_),it=c.getVertexShaderID(_),ht=c.getFragmentShaderID(_);let st=i.getRenderTarget(),At=i.state.buffers.depth.getReversed(),yt=L.isInstancedMesh===!0,Rt=L.isBatchedMesh===!0,kt=!!_.map,X=!!_.matcap,at=!!tt,T=!!_.aoMap,Ut=!!_.lightMap,nt=!!_.bumpMap,Et=!!_.normalMap,pt=!!_.displacementMap,It=!!_.emissiveMap,_t=!!_.metalnessMap,C=!!_.roughnessMap,y=_.anisotropy>0,k=_.clearcoat>0,Q=_.dispersion>0,Z=_.iridescence>0,J=_.sheen>0,mt=_.transmission>0,gt=y&&!!_.anisotropyMap,bt=k&&!!_.clearcoatMap,Kt=k&&!!_.clearcoatNormalMap,lt=k&&!!_.clearcoatRoughnessMap,Tt=Z&&!!_.iridescenceMap,Ot=Z&&!!_.iridescenceThicknessMap,rt=J&&!!_.sheenColorMap,j=J&&!!_.sheenRoughnessMap,Gt=!!_.specularMap,Ft=!!_.specularColorMap,ae=!!_.specularIntensityMap,U=mt&&!!_.transmissionMap,Mt=mt&&!!_.thicknessMap,q=!!_.gradientMap,$=!!_.alphaMap,xt=_.alphaTest>0,Bt=!!_.alphaHash,zt=!!_.extensions,le=ui;_.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(le=i.toneMapping);let _e={shaderID:ct,shaderType:_.type,shaderName:_.name,vertexShader:St,fragmentShader:Y,defines:_.defines,customVertexShaderID:it,customFragmentShaderID:ht,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:A,batching:Rt,batchingColor:Rt&&L._colorsTexture!==null,instancing:yt,instancingColor:yt&&L.instanceColor!==null,instancingMorph:yt&&L.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Is,alphaToCoverage:!!_.alphaToCoverage,map:kt,matcap:X,envMap:at,envMapMode:at&&tt.mapping,envMapCubeUVHeight:z,aoMap:T,lightMap:Ut,bumpMap:nt,normalMap:Et,displacementMap:f&&pt,emissiveMap:It,normalMapObjectSpace:Et&&_.normalMapType===tf,normalMapTangentSpace:Et&&_.normalMapType===il,metalnessMap:_t,roughnessMap:C,anisotropy:y,anisotropyMap:gt,clearcoat:k,clearcoatMap:bt,clearcoatNormalMap:Kt,clearcoatRoughnessMap:lt,dispersion:Q,iridescence:Z,iridescenceMap:Tt,iridescenceThicknessMap:Ot,sheen:J,sheenColorMap:rt,sheenRoughnessMap:j,specularMap:Gt,specularColorMap:Ft,specularIntensityMap:ae,transmission:mt,transmissionMap:U,thicknessMap:Mt,gradientMap:q,opaque:_.transparent===!1&&_.blending===As&&_.alphaToCoverage===!1,alphaMap:$,alphaTest:xt,alphaHash:Bt,combine:_.combine,mapUv:kt&&g(_.map.channel),aoMapUv:T&&g(_.aoMap.channel),lightMapUv:Ut&&g(_.lightMap.channel),bumpMapUv:nt&&g(_.bumpMap.channel),normalMapUv:Et&&g(_.normalMap.channel),displacementMapUv:pt&&g(_.displacementMap.channel),emissiveMapUv:It&&g(_.emissiveMap.channel),metalnessMapUv:_t&&g(_.metalnessMap.channel),roughnessMapUv:C&&g(_.roughnessMap.channel),anisotropyMapUv:gt&&g(_.anisotropyMap.channel),clearcoatMapUv:bt&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:Kt&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:rt&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:j&&g(_.sheenRoughnessMap.channel),specularMapUv:Gt&&g(_.specularMap.channel),specularColorMapUv:Ft&&g(_.specularColorMap.channel),specularIntensityMapUv:ae&&g(_.specularIntensityMap.channel),transmissionMapUv:U&&g(_.transmissionMap.channel),thicknessMapUv:Mt&&g(_.thicknessMap.channel),alphaMapUv:$&&g(_.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Et||y),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!K.attributes.uv&&(kt||$),fog:!!N,useFog:_.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:At,skinning:L.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:Nt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&S.length>0,shadowMapType:i.shadowMap.type,toneMapping:le,decodeVideoTexture:kt&&_.map.isVideoTexture===!0&&oe.getTransfer(_.map.colorSpace)===pe,decodeVideoTextureEmissive:It&&_.emissiveMap.isVideoTexture===!0&&oe.getTransfer(_.emissiveMap.colorSpace)===pe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Bn,flipSided:_.side===He,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:zt&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&_.extensions.multiDraw===!0||Rt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return _e.vertexUv1s=l.has(1),_e.vertexUv2s=l.has(2),_e.vertexUv3s=l.has(3),l.clear(),_e}function p(_){let v=[];if(_.shaderID?v.push(_.shaderID):(v.push(_.customVertexShaderID),v.push(_.customFragmentShaderID)),_.defines!==void 0)for(let S in _.defines)v.push(S),v.push(_.defines[S]);return _.isRawShaderMaterial===!1&&(M(v,_),w(v,_),v.push(i.outputColorSpace)),v.push(_.customProgramCacheKey),v.join()}function M(_,v){_.push(v.precision),_.push(v.outputColorSpace),_.push(v.envMapMode),_.push(v.envMapCubeUVHeight),_.push(v.mapUv),_.push(v.alphaMapUv),_.push(v.lightMapUv),_.push(v.aoMapUv),_.push(v.bumpMapUv),_.push(v.normalMapUv),_.push(v.displacementMapUv),_.push(v.emissiveMapUv),_.push(v.metalnessMapUv),_.push(v.roughnessMapUv),_.push(v.anisotropyMapUv),_.push(v.clearcoatMapUv),_.push(v.clearcoatNormalMapUv),_.push(v.clearcoatRoughnessMapUv),_.push(v.iridescenceMapUv),_.push(v.iridescenceThicknessMapUv),_.push(v.sheenColorMapUv),_.push(v.sheenRoughnessMapUv),_.push(v.specularMapUv),_.push(v.specularColorMapUv),_.push(v.specularIntensityMapUv),_.push(v.transmissionMapUv),_.push(v.thicknessMapUv),_.push(v.combine),_.push(v.fogExp2),_.push(v.sizeAttenuation),_.push(v.morphTargetsCount),_.push(v.morphAttributeCount),_.push(v.numDirLights),_.push(v.numPointLights),_.push(v.numSpotLights),_.push(v.numSpotLightMaps),_.push(v.numHemiLights),_.push(v.numRectAreaLights),_.push(v.numDirLightShadows),_.push(v.numPointLightShadows),_.push(v.numSpotLightShadows),_.push(v.numSpotLightShadowsWithMaps),_.push(v.numLightProbes),_.push(v.shadowMapType),_.push(v.toneMapping),_.push(v.numClippingPlanes),_.push(v.numClipIntersection),_.push(v.depthPacking)}function w(_,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),_.push(a.mask)}function x(_){let v=m[_.type],S;if(v){let O=Dn[v];S=zf.clone(O.uniforms)}else S=_.uniforms;return S}function D(_,v){let S;for(let O=0,L=u.length;O<L;O++){let N=u[O];if(N.cacheKey===v){S=N,++S.usedTimes;break}}return S===void 0&&(S=new Km(i,v,_,r),u.push(S)),S}function B(_){if(--_.usedTimes===0){let v=u.indexOf(_);u[v]=u[u.length-1],u.pop(),_.destroy()}}function b(_){c.remove(_)}function I(){c.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:x,acquireProgram:D,releaseProgram:B,releaseShaderCache:b,programs:u,dispose:I}}function $m(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function tg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function fh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function dh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,f,A,m,g,d){let p=i[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:A,groupOrder:m,renderOrder:h.renderOrder,z:g,group:d},i[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=A,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=g,p.group=d),t++,p}function a(h,f,A,m,g,d){let p=o(h,f,A,m,g,d);A.transmission>0?n.push(p):A.transparent===!0?s.push(p):e.push(p)}function c(h,f,A,m,g,d){let p=o(h,f,A,m,g,d);A.transmission>0?n.unshift(p):A.transparent===!0?s.unshift(p):e.unshift(p)}function l(h,f){e.length>1&&e.sort(h||tg),n.length>1&&n.sort(f||fh),s.length>1&&s.sort(f||fh)}function u(){for(let h=t,f=i.length;h<f;h++){let A=i[h];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function eg(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new dh,i.set(n,[o])):s>=r.length?(o=new dh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function ng(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new jt};break;case"SpotLight":e={position:new R,direction:new R,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function ig(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var sg=0;function rg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function og(i){let t=new ng,e=ig(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);let s=new R,r=new de,o=new de;function a(l){let u=0,h=0,f=0;for(let _=0;_<9;_++)n.probe[_].set(0,0,0);let A=0,m=0,g=0,d=0,p=0,M=0,w=0,x=0,D=0,B=0,b=0;l.sort(rg);for(let _=0,v=l.length;_<v;_++){let S=l[_],O=S.color,L=S.intensity,N=S.distance,K=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)u+=O.r*L,h+=O.g*L,f+=O.b*L;else if(S.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(S.sh.coefficients[G],L);b++}else if(S.isDirectionalLight){let G=t.get(S);if(G.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let tt=S.shadow,z=e.get(S);z.shadowIntensity=tt.intensity,z.shadowBias=tt.bias,z.shadowNormalBias=tt.normalBias,z.shadowRadius=tt.radius,z.shadowMapSize=tt.mapSize,n.directionalShadow[A]=z,n.directionalShadowMap[A]=K,n.directionalShadowMatrix[A]=S.shadow.matrix,M++}n.directional[A]=G,A++}else if(S.isSpotLight){let G=t.get(S);G.position.setFromMatrixPosition(S.matrixWorld),G.color.copy(O).multiplyScalar(L),G.distance=N,G.coneCos=Math.cos(S.angle),G.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),G.decay=S.decay,n.spot[g]=G;let tt=S.shadow;if(S.map&&(n.spotLightMap[D]=S.map,D++,tt.updateMatrices(S),S.castShadow&&B++),n.spotLightMatrix[g]=tt.matrix,S.castShadow){let z=e.get(S);z.shadowIntensity=tt.intensity,z.shadowBias=tt.bias,z.shadowNormalBias=tt.normalBias,z.shadowRadius=tt.radius,z.shadowMapSize=tt.mapSize,n.spotShadow[g]=z,n.spotShadowMap[g]=K,x++}g++}else if(S.isRectAreaLight){let G=t.get(S);G.color.copy(O).multiplyScalar(L),G.halfWidth.set(S.width*.5,0,0),G.halfHeight.set(0,S.height*.5,0),n.rectArea[d]=G,d++}else if(S.isPointLight){let G=t.get(S);if(G.color.copy(S.color).multiplyScalar(S.intensity),G.distance=S.distance,G.decay=S.decay,S.castShadow){let tt=S.shadow,z=e.get(S);z.shadowIntensity=tt.intensity,z.shadowBias=tt.bias,z.shadowNormalBias=tt.normalBias,z.shadowRadius=tt.radius,z.shadowMapSize=tt.mapSize,z.shadowCameraNear=tt.camera.near,z.shadowCameraFar=tt.camera.far,n.pointShadow[m]=z,n.pointShadowMap[m]=K,n.pointShadowMatrix[m]=S.shadow.matrix,w++}n.point[m]=G,m++}else if(S.isHemisphereLight){let G=t.get(S);G.skyColor.copy(S.color).multiplyScalar(L),G.groundColor.copy(S.groundColor).multiplyScalar(L),n.hemi[p]=G,p++}}d>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let I=n.hash;(I.directionalLength!==A||I.pointLength!==m||I.spotLength!==g||I.rectAreaLength!==d||I.hemiLength!==p||I.numDirectionalShadows!==M||I.numPointShadows!==w||I.numSpotShadows!==x||I.numSpotMaps!==D||I.numLightProbes!==b)&&(n.directional.length=A,n.spot.length=g,n.rectArea.length=d,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=x+D-B,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=B,n.numLightProbes=b,I.directionalLength=A,I.pointLength=m,I.spotLength=g,I.rectAreaLength=d,I.hemiLength=p,I.numDirectionalShadows=M,I.numPointShadows=w,I.numSpotShadows=x,I.numSpotMaps=D,I.numLightProbes=b,n.version=sg++)}function c(l,u){let h=0,f=0,A=0,m=0,g=0,d=u.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){let w=l[p];if(w.isDirectionalLight){let x=n.directional[h];x.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(d),h++}else if(w.isSpotLight){let x=n.spot[A];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(d),x.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(d),A++}else if(w.isRectAreaLight){let x=n.rectArea[m];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(d),o.identity(),r.copy(w.matrixWorld),r.premultiply(d),o.extractRotation(r),x.halfWidth.set(w.width*.5,0,0),x.halfHeight.set(0,w.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(w.isPointLight){let x=n.point[f];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(d),f++}else if(w.isHemisphereLight){let x=n.hemi[g];x.direction.setFromMatrixPosition(w.matrixWorld),x.direction.transformDirection(d),g++}}}return{setup:a,setupView:c,state:n}}function ph(i){let t=new og(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function ag(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new ph(i),t.set(s,[a])):r>=o.length?(a=new ph(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var vc=class extends Ai{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ju,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},yc=class extends Ai{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},cg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lg=`uniform sampler2D shadow_pass;
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
}`;function hg(i,t,e){let n=new or,s=new dt,r=new dt,o=new me,a=new vc({depthPacking:$u}),c=new yc,l={},u=e.maxTextureSize,h={[Pn]:He,[He]:Pn,[Bn]:Bn},f=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:cg,fragmentShader:lg}),A=f.clone();A.defines.HORIZONTAL_PASS=1;let m=new Fe;m.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Ne(m,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Eh;let p=this.type;this.render=function(B,b,I){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||B.length===0)return;let _=i.getRenderTarget(),v=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),O=i.state;O.setBlending(hi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let L=p!==Gn&&this.type===Gn,N=p===Gn&&this.type!==Gn;for(let K=0,G=B.length;K<G;K++){let tt=B[K],z=tt.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let ct=z.getFrameExtents();if(s.multiply(ct),r.copy(z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ct.x),s.x=r.x*ct.x,z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ct.y),s.y=r.y*ct.y,z.mapSize.y=r.y)),z.map===null||L===!0||N===!0){let wt=this.type!==Gn?{minFilter:Ze,magFilter:Ze}:{};z.map!==null&&z.map.dispose(),z.map=new bn(s.x,s.y,wt),z.map.texture.name=tt.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();let ut=z.getViewportCount();for(let wt=0;wt<ut;wt++){let Nt=z.getViewport(wt);o.set(r.x*Nt.x,r.y*Nt.y,r.x*Nt.z,r.y*Nt.w),O.viewport(o),z.updateMatrices(tt,wt),n=z.getFrustum(),x(b,I,z.camera,tt,this.type)}z.isPointLightShadow!==!0&&this.type===Gn&&M(z,I),z.needsUpdate=!1}p=this.type,d.needsUpdate=!1,i.setRenderTarget(_,v,S)};function M(B,b){let I=t.update(g);f.defines.VSM_SAMPLES!==B.blurSamples&&(f.defines.VSM_SAMPLES=B.blurSamples,A.defines.VSM_SAMPLES=B.blurSamples,f.needsUpdate=!0,A.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new bn(s.x,s.y)),f.uniforms.shadow_pass.value=B.map.texture,f.uniforms.resolution.value=B.mapSize,f.uniforms.radius.value=B.radius,i.setRenderTarget(B.mapPass),i.clear(),i.renderBufferDirect(b,null,I,f,g,null),A.uniforms.shadow_pass.value=B.mapPass.texture,A.uniforms.resolution.value=B.mapSize,A.uniforms.radius.value=B.radius,i.setRenderTarget(B.map),i.clear(),i.renderBufferDirect(b,null,I,A,g,null)}function w(B,b,I,_){let v=null,S=I.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(S!==void 0)v=S;else if(v=I.isPointLight===!0?c:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){let O=v.uuid,L=b.uuid,N=l[O];N===void 0&&(N={},l[O]=N);let K=N[L];K===void 0&&(K=v.clone(),N[L]=K,b.addEventListener("dispose",D)),v=K}if(v.visible=b.visible,v.wireframe=b.wireframe,_===Gn?v.side=b.shadowSide!==null?b.shadowSide:b.side:v.side=b.shadowSide!==null?b.shadowSide:h[b.side],v.alphaMap=b.alphaMap,v.alphaTest=b.alphaTest,v.map=b.map,v.clipShadows=b.clipShadows,v.clippingPlanes=b.clippingPlanes,v.clipIntersection=b.clipIntersection,v.displacementMap=b.displacementMap,v.displacementScale=b.displacementScale,v.displacementBias=b.displacementBias,v.wireframeLinewidth=b.wireframeLinewidth,v.linewidth=b.linewidth,I.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let O=i.properties.get(v);O.light=I}return v}function x(B,b,I,_,v){if(B.visible===!1)return;if(B.layers.test(b.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&v===Gn)&&(!B.frustumCulled||n.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,B.matrixWorld);let L=t.update(B),N=B.material;if(Array.isArray(N)){let K=L.groups;for(let G=0,tt=K.length;G<tt;G++){let z=K[G],ct=N[z.materialIndex];if(ct&&ct.visible){let ut=w(B,ct,_,v);B.onBeforeShadow(i,B,b,I,L,ut,z),i.renderBufferDirect(I,null,L,ut,B,z),B.onAfterShadow(i,B,b,I,L,ut,z)}}}else if(N.visible){let K=w(B,N,_,v);B.onBeforeShadow(i,B,b,I,L,K,null),i.renderBufferDirect(I,null,L,K,B,null),B.onAfterShadow(i,B,b,I,L,K,null)}}let O=B.children;for(let L=0,N=O.length;L<N;L++)x(O[L],b,I,_,v)}function D(B){B.target.removeEventListener("dispose",D);for(let I in l){let _=l[I],v=B.target.uuid;v in _&&(_[v].dispose(),delete _[v])}}}var ug={[Ca]:Sa,[ba]:Da,[Ta]:Ra,[ws]:Ia,[Sa]:Ca,[Da]:ba,[Ra]:Ta,[Ia]:ws};function fg(i,t){function e(){let U=!1,Mt=new me,q=null,$=new me(0,0,0,0);return{setMask:function(xt){q!==xt&&!U&&(i.colorMask(xt,xt,xt,xt),q=xt)},setLocked:function(xt){U=xt},setClear:function(xt,Bt,zt,le,_e){_e===!0&&(xt*=le,Bt*=le,zt*=le),Mt.set(xt,Bt,zt,le),$.equals(Mt)===!1&&(i.clearColor(xt,Bt,zt,le),$.copy(Mt))},reset:function(){U=!1,q=null,$.set(-1,0,0,0)}}}function n(){let U=!1,Mt=!1,q=null,$=null,xt=null;return{setReversed:function(Bt){if(Mt!==Bt){let zt=t.get("EXT_clip_control");Mt?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT);let le=xt;xt=null,this.setClear(le)}Mt=Bt},getReversed:function(){return Mt},setTest:function(Bt){Bt?st(i.DEPTH_TEST):At(i.DEPTH_TEST)},setMask:function(Bt){q!==Bt&&!U&&(i.depthMask(Bt),q=Bt)},setFunc:function(Bt){if(Mt&&(Bt=ug[Bt]),$!==Bt){switch(Bt){case Ca:i.depthFunc(i.NEVER);break;case Sa:i.depthFunc(i.ALWAYS);break;case ba:i.depthFunc(i.LESS);break;case ws:i.depthFunc(i.LEQUAL);break;case Ta:i.depthFunc(i.EQUAL);break;case Ia:i.depthFunc(i.GEQUAL);break;case Da:i.depthFunc(i.GREATER);break;case Ra:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=Bt}},setLocked:function(Bt){U=Bt},setClear:function(Bt){xt!==Bt&&(Mt&&(Bt=1-Bt),i.clearDepth(Bt),xt=Bt)},reset:function(){U=!1,q=null,$=null,xt=null,Mt=!1}}}function s(){let U=!1,Mt=null,q=null,$=null,xt=null,Bt=null,zt=null,le=null,_e=null;return{setTest:function($t){U||($t?st(i.STENCIL_TEST):At(i.STENCIL_TEST))},setMask:function($t){Mt!==$t&&!U&&(i.stencilMask($t),Mt=$t)},setFunc:function($t,Je,fn){(q!==$t||$!==Je||xt!==fn)&&(i.stencilFunc($t,Je,fn),q=$t,$=Je,xt=fn)},setOp:function($t,Je,fn){(Bt!==$t||zt!==Je||le!==fn)&&(i.stencilOp($t,Je,fn),Bt=$t,zt=Je,le=fn)},setLocked:function($t){U=$t},setClear:function($t){_e!==$t&&(i.clearStencil($t),_e=$t)},reset:function(){U=!1,Mt=null,q=null,$=null,xt=null,Bt=null,zt=null,le=null,_e=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,u={},h={},f=new WeakMap,A=[],m=null,g=!1,d=null,p=null,M=null,w=null,x=null,D=null,B=null,b=new jt(0,0,0),I=0,_=!1,v=null,S=null,O=null,L=null,N=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,tt=0,z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(z)[1]),G=tt>=1):z.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),G=tt>=2);let ct=null,ut={},wt=i.getParameter(i.SCISSOR_BOX),Nt=i.getParameter(i.VIEWPORT),St=new me().fromArray(wt),Y=new me().fromArray(Nt);function it(U,Mt,q,$){let xt=new Uint8Array(4),Bt=i.createTexture();i.bindTexture(U,Bt),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let zt=0;zt<q;zt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(Mt,0,i.RGBA,1,1,$,0,i.RGBA,i.UNSIGNED_BYTE,xt):i.texImage2D(Mt+zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xt);return Bt}let ht={};ht[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),ht[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ht[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ht[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),st(i.DEPTH_TEST),o.setFunc(ws),nt(!1),Et(ml),st(i.CULL_FACE),T(hi);function st(U){u[U]!==!0&&(i.enable(U),u[U]=!0)}function At(U){u[U]!==!1&&(i.disable(U),u[U]=!1)}function yt(U,Mt){return h[U]!==Mt?(i.bindFramebuffer(U,Mt),h[U]=Mt,U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Mt),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Mt),!0):!1}function Rt(U,Mt){let q=A,$=!1;if(U){q=f.get(Mt),q===void 0&&(q=[],f.set(Mt,q));let xt=U.textures;if(q.length!==xt.length||q[0]!==i.COLOR_ATTACHMENT0){for(let Bt=0,zt=xt.length;Bt<zt;Bt++)q[Bt]=i.COLOR_ATTACHMENT0+Bt;q.length=xt.length,$=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,$=!0);$&&i.drawBuffers(q)}function kt(U){return m!==U?(i.useProgram(U),m=U,!0):!1}let X={[Ii]:i.FUNC_ADD,[Su]:i.FUNC_SUBTRACT,[bu]:i.FUNC_REVERSE_SUBTRACT};X[Tu]=i.MIN,X[Iu]=i.MAX;let at={[Du]:i.ZERO,[Xc]:i.ONE,[Ru]:i.SRC_COLOR,[Ba]:i.SRC_ALPHA,[Nu]:i.SRC_ALPHA_SATURATE,[Lu]:i.DST_COLOR,[Uu]:i.DST_ALPHA,[Pu]:i.ONE_MINUS_SRC_COLOR,[ir]:i.ONE_MINUS_SRC_ALPHA,[Qu]:i.ONE_MINUS_DST_COLOR,[Fu]:i.ONE_MINUS_DST_ALPHA,[Ou]:i.CONSTANT_COLOR,[ku]:i.ONE_MINUS_CONSTANT_COLOR,[Gu]:i.CONSTANT_ALPHA,[zu]:i.ONE_MINUS_CONSTANT_ALPHA};function T(U,Mt,q,$,xt,Bt,zt,le,_e,$t){if(U===hi){g===!0&&(At(i.BLEND),g=!1);return}if(g===!1&&(st(i.BLEND),g=!0),U!==Jc){if(U!==d||$t!==_){if((p!==Ii||x!==Ii)&&(i.blendEquation(i.FUNC_ADD),p=Ii,x=Ii),$t)switch(U){case As:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jr:i.blendFunc(i.ONE,i.ONE);break;case gl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case As:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case gl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}M=null,w=null,D=null,B=null,b.set(0,0,0),I=0,d=U,_=$t}return}xt=xt||Mt,Bt=Bt||q,zt=zt||$,(Mt!==p||xt!==x)&&(i.blendEquationSeparate(X[Mt],X[xt]),p=Mt,x=xt),(q!==M||$!==w||Bt!==D||zt!==B)&&(i.blendFuncSeparate(at[q],at[$],at[Bt],at[zt]),M=q,w=$,D=Bt,B=zt),(le.equals(b)===!1||_e!==I)&&(i.blendColor(le.r,le.g,le.b,_e),b.copy(le),I=_e),d=U,_=!1}function Ut(U,Mt){U.side===Bn?At(i.CULL_FACE):st(i.CULL_FACE);let q=U.side===He;Mt&&(q=!q),nt(q),U.blending===As&&U.transparent===!1?T(hi):T(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let $=U.stencilWrite;a.setTest($),$&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),It(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):At(i.SAMPLE_ALPHA_TO_COVERAGE)}function nt(U){v!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),v=U)}function Et(U){U!==Eu?(st(i.CULL_FACE),U!==S&&(U===ml?i.cullFace(i.BACK):U===Bu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):At(i.CULL_FACE),S=U}function pt(U){U!==O&&(G&&i.lineWidth(U),O=U)}function It(U,Mt,q){U?(st(i.POLYGON_OFFSET_FILL),(L!==Mt||N!==q)&&(i.polygonOffset(Mt,q),L=Mt,N=q)):At(i.POLYGON_OFFSET_FILL)}function _t(U){U?st(i.SCISSOR_TEST):At(i.SCISSOR_TEST)}function C(U){U===void 0&&(U=i.TEXTURE0+K-1),ct!==U&&(i.activeTexture(U),ct=U)}function y(U,Mt,q){q===void 0&&(ct===null?q=i.TEXTURE0+K-1:q=ct);let $=ut[q];$===void 0&&($={type:void 0,texture:void 0},ut[q]=$),($.type!==U||$.texture!==Mt)&&(ct!==q&&(i.activeTexture(q),ct=q),i.bindTexture(U,Mt||ht[U]),$.type=U,$.texture=Mt)}function k(){let U=ut[ct];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function mt(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function gt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function bt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Kt(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function lt(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Tt(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ot(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function rt(U){St.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),St.copy(U))}function j(U){Y.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Y.copy(U))}function Gt(U,Mt){let q=l.get(Mt);q===void 0&&(q=new WeakMap,l.set(Mt,q));let $=q.get(U);$===void 0&&($=i.getUniformBlockIndex(Mt,U.name),q.set(U,$))}function Ft(U,Mt){let $=l.get(Mt).get(U);c.get(Mt)!==$&&(i.uniformBlockBinding(Mt,$,U.__bindingPointIndex),c.set(Mt,$))}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ct=null,ut={},h={},f=new WeakMap,A=[],m=null,g=!1,d=null,p=null,M=null,w=null,x=null,D=null,B=null,b=new jt(0,0,0),I=0,_=!1,v=null,S=null,O=null,L=null,N=null,St.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:st,disable:At,bindFramebuffer:yt,drawBuffers:Rt,useProgram:kt,setBlending:T,setMaterial:Ut,setFlipSided:nt,setCullFace:Et,setLineWidth:pt,setPolygonOffset:It,setScissorTest:_t,activeTexture:C,bindTexture:y,unbindTexture:k,compressedTexImage2D:Q,compressedTexImage3D:Z,texImage2D:Tt,texImage3D:Ot,updateUBOMapping:Gt,uniformBlockBinding:Ft,texStorage2D:Kt,texStorage3D:lt,texSubImage2D:J,texSubImage3D:mt,compressedTexSubImage2D:gt,compressedTexSubImage3D:bt,scissor:rt,viewport:j,reset:ae}}function Ah(i,t,e,n){let s=dg(n);switch(e){case Th:return i*t;case Dh:return i*t;case Rh:return i*t*2;case $c:return i*t/s.components*s.byteLength;case tl:return i*t/s.components*s.byteLength;case Ph:return i*t*2/s.components*s.byteLength;case el:return i*t*2/s.components*s.byteLength;case Ih:return i*t*3/s.components*s.byteLength;case Cn:return i*t*4/s.components*s.byteLength;case nl:return i*t*4/s.components*s.byteLength;case Jr:case Xr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case qr:case Kr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Na:case ka:return Math.max(i,16)*Math.max(t,8)/4;case Qa:case Oa:return Math.max(i,8)*Math.max(t,8)/2;case Ga:case za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ya:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Xa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case qa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Za:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ja:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case $a:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case tc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ec:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case nc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ic:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Zr:case sc:case rc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Uh:case oc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ac:case cc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function dg(i){switch(i){case Sn:case Ch:return{byteLength:1,components:1};case sr:case Sh:case fr:return{byteLength:2,components:1};case Zc:case jc:return{byteLength:2,components:4};case Fi:case Kc:case Rn:return{byteLength:4,components:1};case bh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function pg(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new dt,u=new WeakMap,h,f=new WeakMap,A=!1;try{A=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,y){return A?new OffscreenCanvas(C,y):eo("canvas")}function g(C,y,k){let Q=1,Z=_t(C);if((Z.width>k||Z.height>k)&&(Q=k/Math.max(Z.width,Z.height)),Q<1)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap||typeof VideoFrame!="undefined"&&C instanceof VideoFrame){let J=Math.floor(Q*Z.width),mt=Math.floor(Q*Z.height);h===void 0&&(h=m(J,mt));let gt=y?m(J,mt):h;return gt.width=J,gt.height=mt,gt.getContext("2d").drawImage(C,0,0,J,mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+J+"x"+mt+")."),gt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),C;return C}function d(C){return C.generateMipmaps}function p(C){i.generateMipmap(C)}function M(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(C,y,k,Q,Z=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let J=y;if(y===i.RED&&(k===i.FLOAT&&(J=i.R32F),k===i.HALF_FLOAT&&(J=i.R16F),k===i.UNSIGNED_BYTE&&(J=i.R8)),y===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.R8UI),k===i.UNSIGNED_SHORT&&(J=i.R16UI),k===i.UNSIGNED_INT&&(J=i.R32UI),k===i.BYTE&&(J=i.R8I),k===i.SHORT&&(J=i.R16I),k===i.INT&&(J=i.R32I)),y===i.RG&&(k===i.FLOAT&&(J=i.RG32F),k===i.HALF_FLOAT&&(J=i.RG16F),k===i.UNSIGNED_BYTE&&(J=i.RG8)),y===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RG8UI),k===i.UNSIGNED_SHORT&&(J=i.RG16UI),k===i.UNSIGNED_INT&&(J=i.RG32UI),k===i.BYTE&&(J=i.RG8I),k===i.SHORT&&(J=i.RG16I),k===i.INT&&(J=i.RG32I)),y===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RGB8UI),k===i.UNSIGNED_SHORT&&(J=i.RGB16UI),k===i.UNSIGNED_INT&&(J=i.RGB32UI),k===i.BYTE&&(J=i.RGB8I),k===i.SHORT&&(J=i.RGB16I),k===i.INT&&(J=i.RGB32I)),y===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),k===i.UNSIGNED_INT&&(J=i.RGBA32UI),k===i.BYTE&&(J=i.RGBA8I),k===i.SHORT&&(J=i.RGBA16I),k===i.INT&&(J=i.RGBA32I)),y===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),y===i.RGBA){let mt=Z?Lo:oe.getTransfer(Q);k===i.FLOAT&&(J=i.RGBA32F),k===i.HALF_FLOAT&&(J=i.RGBA16F),k===i.UNSIGNED_BYTE&&(J=mt===pe?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function x(C,y){let k;return C?y===null||y===Fi||y===ys?k=i.DEPTH24_STENCIL8:y===Rn?k=i.DEPTH32F_STENCIL8:y===sr&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Fi||y===ys?k=i.DEPTH_COMPONENT24:y===Rn?k=i.DEPTH_COMPONENT32F:y===sr&&(k=i.DEPTH_COMPONENT16),k}function D(C,y){return d(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ze&&C.minFilter!==mn?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function B(C){let y=C.target;y.removeEventListener("dispose",B),I(y),y.isVideoTexture&&u.delete(y)}function b(C){let y=C.target;y.removeEventListener("dispose",b),v(y)}function I(C){let y=n.get(C);if(y.__webglInit===void 0)return;let k=C.source,Q=f.get(k);if(Q){let Z=Q[y.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&_(C),Object.keys(Q).length===0&&f.delete(k)}n.remove(C)}function _(C){let y=n.get(C);i.deleteTexture(y.__webglTexture);let k=C.source,Q=f.get(k);delete Q[y.__cacheKey],o.memory.textures--}function v(C){let y=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(y.__webglFramebuffer[Q]))for(let Z=0;Z<y.__webglFramebuffer[Q].length;Z++)i.deleteFramebuffer(y.__webglFramebuffer[Q][Z]);else i.deleteFramebuffer(y.__webglFramebuffer[Q]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[Q])}else{if(Array.isArray(y.__webglFramebuffer))for(let Q=0;Q<y.__webglFramebuffer.length;Q++)i.deleteFramebuffer(y.__webglFramebuffer[Q]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Q=0;Q<y.__webglColorRenderbuffer.length;Q++)y.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[Q]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let k=C.textures;for(let Q=0,Z=k.length;Q<Z;Q++){let J=n.get(k[Q]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(k[Q])}n.remove(C)}let S=0;function O(){S=0}function L(){let C=S;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),S+=1,C}function N(C){let y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function K(C,y){let k=n.get(C);if(C.isVideoTexture&&pt(C),C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){let Q=C.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(k,C,y);return}}e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+y)}function G(C,y){let k=n.get(C);if(C.version>0&&k.__version!==C.version){Y(k,C,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+y)}function tt(C,y){let k=n.get(C);if(C.version>0&&k.__version!==C.version){Y(k,C,y);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+y)}function z(C,y){let k=n.get(C);if(C.version>0&&k.__version!==C.version){it(k,C,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+y)}let ct={[Fa]:i.REPEAT,[Pi]:i.CLAMP_TO_EDGE,[La]:i.MIRRORED_REPEAT},ut={[Ze]:i.NEAREST,[Zu]:i.NEAREST_MIPMAP_NEAREST,[vr]:i.NEAREST_MIPMAP_LINEAR,[mn]:i.LINEAR,[Jo]:i.LINEAR_MIPMAP_NEAREST,[Ui]:i.LINEAR_MIPMAP_LINEAR},wt={[ef]:i.NEVER,[cf]:i.ALWAYS,[nf]:i.LESS,[Fh]:i.LEQUAL,[sf]:i.EQUAL,[af]:i.GEQUAL,[rf]:i.GREATER,[of]:i.NOTEQUAL};function Nt(C,y){if(y.type===Rn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===mn||y.magFilter===Jo||y.magFilter===vr||y.magFilter===Ui||y.minFilter===mn||y.minFilter===Jo||y.minFilter===vr||y.minFilter===Ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,ct[y.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,ct[y.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,ct[y.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ut[y.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ut[y.minFilter]),y.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,wt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ze||y.minFilter!==vr&&y.minFilter!==Ui||y.type===Rn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function St(C,y){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",B));let Q=y.source,Z=f.get(Q);Z===void 0&&(Z={},f.set(Q,Z));let J=N(y);if(J!==C.__cacheKey){Z[J]===void 0&&(Z[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),Z[J].usedTimes++;let mt=Z[C.__cacheKey];mt!==void 0&&(Z[C.__cacheKey].usedTimes--,mt.usedTimes===0&&_(y)),C.__cacheKey=J,C.__webglTexture=Z[J].texture}return k}function Y(C,y,k){let Q=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Q=i.TEXTURE_3D);let Z=St(C,y),J=y.source;e.bindTexture(Q,C.__webglTexture,i.TEXTURE0+k);let mt=n.get(J);if(J.version!==mt.__version||Z===!0){e.activeTexture(i.TEXTURE0+k);let gt=oe.getPrimaries(oe.workingColorSpace),bt=y.colorSpace===ci?null:oe.getPrimaries(y.colorSpace),Kt=y.colorSpace===ci||gt===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let lt=g(y.image,!1,s.maxTextureSize);lt=It(y,lt);let Tt=r.convert(y.format,y.colorSpace),Ot=r.convert(y.type),rt=w(y.internalFormat,Tt,Ot,y.colorSpace,y.isVideoTexture);Nt(Q,y);let j,Gt=y.mipmaps,Ft=y.isVideoTexture!==!0,ae=mt.__version===void 0||Z===!0,U=J.dataReady,Mt=D(y,lt);if(y.isDepthTexture)rt=x(y.format===_s,y.type),ae&&(Ft?e.texStorage2D(i.TEXTURE_2D,1,rt,lt.width,lt.height):e.texImage2D(i.TEXTURE_2D,0,rt,lt.width,lt.height,0,Tt,Ot,null));else if(y.isDataTexture)if(Gt.length>0){Ft&&ae&&e.texStorage2D(i.TEXTURE_2D,Mt,rt,Gt[0].width,Gt[0].height);for(let q=0,$=Gt.length;q<$;q++)j=Gt[q],Ft?U&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,j.width,j.height,Tt,Ot,j.data):e.texImage2D(i.TEXTURE_2D,q,rt,j.width,j.height,0,Tt,Ot,j.data);y.generateMipmaps=!1}else Ft?(ae&&e.texStorage2D(i.TEXTURE_2D,Mt,rt,lt.width,lt.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,lt.width,lt.height,Tt,Ot,lt.data)):e.texImage2D(i.TEXTURE_2D,0,rt,lt.width,lt.height,0,Tt,Ot,lt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ft&&ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,rt,Gt[0].width,Gt[0].height,lt.depth);for(let q=0,$=Gt.length;q<$;q++)if(j=Gt[q],y.format!==Cn)if(Tt!==null)if(Ft){if(U)if(y.layerUpdates.size>0){let xt=Ah(j.width,j.height,y.format,y.type);for(let Bt of y.layerUpdates){let zt=j.data.subarray(Bt*xt/j.data.BYTES_PER_ELEMENT,(Bt+1)*xt/j.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,Bt,j.width,j.height,1,Tt,zt)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,j.width,j.height,lt.depth,Tt,j.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,rt,j.width,j.height,lt.depth,0,j.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,j.width,j.height,lt.depth,Tt,Ot,j.data):e.texImage3D(i.TEXTURE_2D_ARRAY,q,rt,j.width,j.height,lt.depth,0,Tt,Ot,j.data)}else{Ft&&ae&&e.texStorage2D(i.TEXTURE_2D,Mt,rt,Gt[0].width,Gt[0].height);for(let q=0,$=Gt.length;q<$;q++)j=Gt[q],y.format!==Cn?Tt!==null?Ft?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,j.width,j.height,Tt,j.data):e.compressedTexImage2D(i.TEXTURE_2D,q,rt,j.width,j.height,0,j.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?U&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,j.width,j.height,Tt,Ot,j.data):e.texImage2D(i.TEXTURE_2D,q,rt,j.width,j.height,0,Tt,Ot,j.data)}else if(y.isDataArrayTexture)if(Ft){if(ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,rt,lt.width,lt.height,lt.depth),U)if(y.layerUpdates.size>0){let q=Ah(lt.width,lt.height,y.format,y.type);for(let $ of y.layerUpdates){let xt=lt.data.subarray($*q/lt.data.BYTES_PER_ELEMENT,($+1)*q/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,lt.width,lt.height,1,Tt,Ot,xt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,Tt,Ot,lt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,rt,lt.width,lt.height,lt.depth,0,Tt,Ot,lt.data);else if(y.isData3DTexture)Ft?(ae&&e.texStorage3D(i.TEXTURE_3D,Mt,rt,lt.width,lt.height,lt.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,Tt,Ot,lt.data)):e.texImage3D(i.TEXTURE_3D,0,rt,lt.width,lt.height,lt.depth,0,Tt,Ot,lt.data);else if(y.isFramebufferTexture){if(ae)if(Ft)e.texStorage2D(i.TEXTURE_2D,Mt,rt,lt.width,lt.height);else{let q=lt.width,$=lt.height;for(let xt=0;xt<Mt;xt++)e.texImage2D(i.TEXTURE_2D,xt,rt,q,$,0,Tt,Ot,null),q>>=1,$>>=1}}else if(Gt.length>0){if(Ft&&ae){let q=_t(Gt[0]);e.texStorage2D(i.TEXTURE_2D,Mt,rt,q.width,q.height)}for(let q=0,$=Gt.length;q<$;q++)j=Gt[q],Ft?U&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,Tt,Ot,j):e.texImage2D(i.TEXTURE_2D,q,rt,Tt,Ot,j);y.generateMipmaps=!1}else if(Ft){if(ae){let q=_t(lt);e.texStorage2D(i.TEXTURE_2D,Mt,rt,q.width,q.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Tt,Ot,lt)}else e.texImage2D(i.TEXTURE_2D,0,rt,Tt,Ot,lt);d(y)&&p(Q),mt.__version=J.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function it(C,y,k){if(y.image.length!==6)return;let Q=St(C,y),Z=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+k);let J=n.get(Z);if(Z.version!==J.__version||Q===!0){e.activeTexture(i.TEXTURE0+k);let mt=oe.getPrimaries(oe.workingColorSpace),gt=y.colorSpace===ci?null:oe.getPrimaries(y.colorSpace),bt=y.colorSpace===ci||mt===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let Kt=y.isCompressedTexture||y.image[0].isCompressedTexture,lt=y.image[0]&&y.image[0].isDataTexture,Tt=[];for(let $=0;$<6;$++)!Kt&&!lt?Tt[$]=g(y.image[$],!0,s.maxCubemapSize):Tt[$]=lt?y.image[$].image:y.image[$],Tt[$]=It(y,Tt[$]);let Ot=Tt[0],rt=r.convert(y.format,y.colorSpace),j=r.convert(y.type),Gt=w(y.internalFormat,rt,j,y.colorSpace),Ft=y.isVideoTexture!==!0,ae=J.__version===void 0||Q===!0,U=Z.dataReady,Mt=D(y,Ot);Nt(i.TEXTURE_CUBE_MAP,y);let q;if(Kt){Ft&&ae&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,Gt,Ot.width,Ot.height);for(let $=0;$<6;$++){q=Tt[$].mipmaps;for(let xt=0;xt<q.length;xt++){let Bt=q[xt];y.format!==Cn?rt!==null?Ft?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,xt,0,0,Bt.width,Bt.height,rt,Bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,xt,Gt,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,xt,0,0,Bt.width,Bt.height,rt,j,Bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,xt,Gt,Bt.width,Bt.height,0,rt,j,Bt.data)}}}else{if(q=y.mipmaps,Ft&&ae){q.length>0&&Mt++;let $=_t(Tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,Gt,$.width,$.height)}for(let $=0;$<6;$++)if(lt){Ft?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Tt[$].width,Tt[$].height,rt,j,Tt[$].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Gt,Tt[$].width,Tt[$].height,0,rt,j,Tt[$].data);for(let xt=0;xt<q.length;xt++){let zt=q[xt].image[$].image;Ft?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,xt+1,0,0,zt.width,zt.height,rt,j,zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,xt+1,Gt,zt.width,zt.height,0,rt,j,zt.data)}}else{Ft?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,rt,j,Tt[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Gt,rt,j,Tt[$]);for(let xt=0;xt<q.length;xt++){let Bt=q[xt];Ft?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,xt+1,0,0,rt,j,Bt.image[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,xt+1,Gt,rt,j,Bt.image[$])}}}d(y)&&p(i.TEXTURE_CUBE_MAP),J.__version=Z.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function ht(C,y,k,Q,Z,J){let mt=r.convert(k.format,k.colorSpace),gt=r.convert(k.type),bt=w(k.internalFormat,mt,gt,k.colorSpace),Kt=n.get(y),lt=n.get(k);if(lt.__renderTarget=y,!Kt.__hasExternalTextures){let Tt=Math.max(1,y.width>>J),Ot=Math.max(1,y.height>>J);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,J,bt,Tt,Ot,y.depth,0,mt,gt,null):e.texImage2D(Z,J,bt,Tt,Ot,0,mt,gt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),Et(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,Z,lt.__webglTexture,0,nt(y)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,Z,lt.__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(C,y,k){if(i.bindRenderbuffer(i.RENDERBUFFER,C),y.depthBuffer){let Q=y.depthTexture,Z=Q&&Q.isDepthTexture?Q.type:null,J=x(y.stencilBuffer,Z),mt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=nt(y);Et(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt,J,y.width,y.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,J,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,J,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,C)}else{let Q=y.textures;for(let Z=0;Z<Q.length;Z++){let J=Q[Z],mt=r.convert(J.format,J.colorSpace),gt=r.convert(J.type),bt=w(J.internalFormat,mt,gt,J.colorSpace),Kt=nt(y);k&&Et(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Kt,bt,y.width,y.height):Et(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Kt,bt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,bt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function At(C,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=n.get(y.depthTexture);Q.__renderTarget=y,(!Q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),K(y.depthTexture,0);let Z=Q.__webglTexture,J=nt(y);if(y.depthTexture.format===ms)Et(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(y.depthTexture.format===_s)Et(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function yt(C){let y=n.get(C),k=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){let Q=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Q){let Z=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Q.removeEventListener("dispose",Z)};Q.addEventListener("dispose",Z),y.__depthDisposeCallback=Z}y.__boundDepthTexture=Q}if(C.depthTexture&&!y.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");At(y.__webglFramebuffer,C)}else if(k){y.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[Q]),y.__webglDepthbuffer[Q]===void 0)y.__webglDepthbuffer[Q]=i.createRenderbuffer(),st(y.__webglDepthbuffer[Q],C,!1);else{let Z=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=y.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,J)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),st(y.__webglDepthbuffer,C,!1);else{let Q=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,Z)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Rt(C,y,k){let Q=n.get(C);y!==void 0&&ht(Q.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&yt(C)}function kt(C){let y=C.texture,k=n.get(C),Q=n.get(y);C.addEventListener("dispose",b);let Z=C.textures,J=C.isWebGLCubeRenderTarget===!0,mt=Z.length>1;if(mt||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=y.version,o.memory.textures++),J){k.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[gt]=[];for(let bt=0;bt<y.mipmaps.length;bt++)k.__webglFramebuffer[gt][bt]=i.createFramebuffer()}else k.__webglFramebuffer[gt]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let gt=0;gt<y.mipmaps.length;gt++)k.__webglFramebuffer[gt]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(mt)for(let gt=0,bt=Z.length;gt<bt;gt++){let Kt=n.get(Z[gt]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&Et(C)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let gt=0;gt<Z.length;gt++){let bt=Z[gt];k.__webglColorRenderbuffer[gt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[gt]);let Kt=r.convert(bt.format,bt.colorSpace),lt=r.convert(bt.type),Tt=w(bt.internalFormat,Kt,lt,bt.colorSpace,C.isXRRenderTarget===!0),Ot=nt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot,Tt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,k.__webglColorRenderbuffer[gt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),st(k.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Nt(i.TEXTURE_CUBE_MAP,y);for(let gt=0;gt<6;gt++)if(y.mipmaps&&y.mipmaps.length>0)for(let bt=0;bt<y.mipmaps.length;bt++)ht(k.__webglFramebuffer[gt][bt],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,bt);else ht(k.__webglFramebuffer[gt],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);d(y)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let gt=0,bt=Z.length;gt<bt;gt++){let Kt=Z[gt],lt=n.get(Kt);e.bindTexture(i.TEXTURE_2D,lt.__webglTexture),Nt(i.TEXTURE_2D,Kt),ht(k.__webglFramebuffer,C,Kt,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,0),d(Kt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let gt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(gt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(gt,Q.__webglTexture),Nt(gt,y),y.mipmaps&&y.mipmaps.length>0)for(let bt=0;bt<y.mipmaps.length;bt++)ht(k.__webglFramebuffer[bt],C,y,i.COLOR_ATTACHMENT0,gt,bt);else ht(k.__webglFramebuffer,C,y,i.COLOR_ATTACHMENT0,gt,0);d(y)&&p(gt),e.unbindTexture()}C.depthBuffer&&yt(C)}function X(C){let y=C.textures;for(let k=0,Q=y.length;k<Q;k++){let Z=y[k];if(d(Z)){let J=M(C),mt=n.get(Z).__webglTexture;e.bindTexture(J,mt),p(J),e.unbindTexture()}}}let at=[],T=[];function Ut(C){if(C.samples>0){if(Et(C)===!1){let y=C.textures,k=C.width,Q=C.height,Z=i.COLOR_BUFFER_BIT,J=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=n.get(C),gt=y.length>1;if(gt)for(let bt=0;bt<y.length;bt++)e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let bt=0;bt<y.length;bt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),gt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,mt.__webglColorRenderbuffer[bt]);let Kt=n.get(y[bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Kt,0)}i.blitFramebuffer(0,0,k,Q,0,0,k,Q,Z,i.NEAREST),c===!0&&(at.length=0,T.length=0,at.push(i.COLOR_ATTACHMENT0+bt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(at.push(J),T.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,T)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,at))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),gt)for(let bt=0;bt<y.length;bt++){e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,mt.__webglColorRenderbuffer[bt]);let Kt=n.get(y[bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,Kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){let y=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function nt(C){return Math.min(s.maxSamples,C.samples)}function Et(C){let y=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function pt(C){let y=o.render.frame;u.get(C)!==y&&(u.set(C,y),C.update())}function It(C,y){let k=C.colorSpace,Q=C.format,Z=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==Is&&k!==ci&&(oe.getTransfer(k)===pe?(Q!==Cn||Z!==Sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),y}function _t(C){return typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame!="undefined"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=O,this.setTexture2D=K,this.setTexture2DArray=G,this.setTexture3D=tt,this.setTextureCube=z,this.rebindTextures=Rt,this.setupRenderTarget=kt,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=Et}function Ag(i,t){function e(n,s=ci){let r,o=oe.getTransfer(s);if(n===Sn)return i.UNSIGNED_BYTE;if(n===Zc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===jc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ch)return i.BYTE;if(n===Sh)return i.SHORT;if(n===sr)return i.UNSIGNED_SHORT;if(n===Kc)return i.INT;if(n===Fi)return i.UNSIGNED_INT;if(n===Rn)return i.FLOAT;if(n===fr)return i.HALF_FLOAT;if(n===Th)return i.ALPHA;if(n===Ih)return i.RGB;if(n===Cn)return i.RGBA;if(n===Dh)return i.LUMINANCE;if(n===Rh)return i.LUMINANCE_ALPHA;if(n===ms)return i.DEPTH_COMPONENT;if(n===_s)return i.DEPTH_STENCIL;if(n===$c)return i.RED;if(n===tl)return i.RED_INTEGER;if(n===Ph)return i.RG;if(n===el)return i.RG_INTEGER;if(n===nl)return i.RGBA_INTEGER;if(n===Jr||n===Xr||n===qr||n===Kr)if(o===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Jr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Jr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===qr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Kr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qa||n===Na||n===Oa||n===ka)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Qa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Na)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Oa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ka)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ga||n===za||n===Va)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ga||n===za)return o===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Va)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ha||n===Wa||n===Ya||n===Ja||n===Xa||n===qa||n===Ka||n===Za||n===ja||n===$a||n===tc||n===ec||n===nc||n===ic)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ha)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ya)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ja)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===qa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ka)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Za)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ja)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$a)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===tc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ec)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ic)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Zr||n===sc||n===rc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Zr)return o===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===rc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Uh||n===oc||n===ac||n===cc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Zr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===oc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ac)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===cc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ys?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var _c=class extends be{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},li=class extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}},mg={type:"move"},tr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new li,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new li,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new li,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let g of t.hand.values()){let d=e.getJointPose(g,n),p=this._getHandJoint(l,g);d!==null&&(p.matrix.fromArray(d.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=d.radius),p.visible=d!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),A=.02,m=.005;l.inputState.pinching&&f>A+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=A-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(mg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new li;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},gg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xg=`
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

}`,Ec=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new tn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new sn({vertexShader:gg,fragmentShader:xg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ne(new mi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Bc=class extends di{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,A=null,m=null,g=new Ec,d=e.getContextAttributes(),p=null,M=null,w=[],x=[],D=new dt,B=null,b=new be;b.viewport=new me;let I=new be;I.viewport=new me;let _=[b,I],v=new _c,S=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let it=w[Y];return it===void 0&&(it=new tr,w[Y]=it),it.getTargetRaySpace()},this.getControllerGrip=function(Y){let it=w[Y];return it===void 0&&(it=new tr,w[Y]=it),it.getGripSpace()},this.getHand=function(Y){let it=w[Y];return it===void 0&&(it=new tr,w[Y]=it),it.getHandSpace()};function L(Y){let it=x.indexOf(Y.inputSource);if(it===-1)return;let ht=w[it];ht!==void 0&&(ht.update(Y.inputSource,Y.frame,l||o),ht.dispatchEvent({type:Y.type,data:Y.inputSource}))}function N(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",K);for(let Y=0;Y<w.length;Y++){let it=x[Y];it!==null&&(x[Y]=null,w[Y].disconnect(it))}S=null,O=null,g.reset(),t.setRenderTarget(p),A=null,f=null,h=null,s=null,M=null,St.stop(),n.isPresenting=!1,t.setPixelRatio(B),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return f!==null?f:A},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",N),s.addEventListener("inputsourceschange",K),d.xrCompatible!==!0&&await e.makeXRCompatible(),B=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){let it={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};A=new XRWebGLLayer(s,e,it),s.updateRenderState({baseLayer:A}),t.setPixelRatio(1),t.setSize(A.framebufferWidth,A.framebufferHeight,!1),M=new bn(A.framebufferWidth,A.framebufferHeight,{format:Cn,type:Sn,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil})}else{let it=null,ht=null,st=null;d.depth&&(st=d.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=d.stencil?_s:ms,ht=d.stencil?ys:Fi);let At={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(At),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new bn(f.textureWidth,f.textureHeight,{format:Cn,type:Sn,depthTexture:new lo(f.textureWidth,f.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),St.setContext(s),St.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function K(Y){for(let it=0;it<Y.removed.length;it++){let ht=Y.removed[it],st=x.indexOf(ht);st>=0&&(x[st]=null,w[st].disconnect(ht))}for(let it=0;it<Y.added.length;it++){let ht=Y.added[it],st=x.indexOf(ht);if(st===-1){for(let yt=0;yt<w.length;yt++)if(yt>=x.length){x.push(ht),st=yt;break}else if(x[yt]===null){x[yt]=ht,st=yt;break}if(st===-1)break}let At=w[st];At&&At.connect(ht)}}let G=new R,tt=new R;function z(Y,it,ht){G.setFromMatrixPosition(it.matrixWorld),tt.setFromMatrixPosition(ht.matrixWorld);let st=G.distanceTo(tt),At=it.projectionMatrix.elements,yt=ht.projectionMatrix.elements,Rt=At[14]/(At[10]-1),kt=At[14]/(At[10]+1),X=(At[9]+1)/At[5],at=(At[9]-1)/At[5],T=(At[8]-1)/At[0],Ut=(yt[8]+1)/yt[0],nt=Rt*T,Et=Rt*Ut,pt=st/(-T+Ut),It=pt*-T;if(it.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(It),Y.translateZ(pt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),At[10]===-1)Y.projectionMatrix.copy(it.projectionMatrix),Y.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let _t=Rt+pt,C=kt+pt,y=nt-It,k=Et+(st-It),Q=X*kt/C*_t,Z=at*kt/C*_t;Y.projectionMatrix.makePerspective(y,k,Q,Z,_t,C),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ct(Y,it){it===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(it.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let it=Y.near,ht=Y.far;g.texture!==null&&(g.depthNear>0&&(it=g.depthNear),g.depthFar>0&&(ht=g.depthFar)),v.near=I.near=b.near=it,v.far=I.far=b.far=ht,(S!==v.near||O!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),S=v.near,O=v.far),b.layers.mask=Y.layers.mask|2,I.layers.mask=Y.layers.mask|4,v.layers.mask=b.layers.mask|I.layers.mask;let st=Y.parent,At=v.cameras;ct(v,st);for(let yt=0;yt<At.length;yt++)ct(At[yt],st);At.length===2?z(v,b,I):v.projectionMatrix.copy(b.projectionMatrix),ut(Y,v,st)};function ut(Y,it,ht){ht===null?Y.matrix.copy(it.matrixWorld):(Y.matrix.copy(ht.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(it.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(it.projectionMatrix),Y.projectionMatrixInverse.copy(it.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=rr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&A===null))return c},this.setFoveation=function(Y){c=Y,f!==null&&(f.fixedFoveation=Y),A!==null&&A.fixedFoveation!==void 0&&(A.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(v)};let wt=null;function Nt(Y,it){if(u=it.getViewerPose(l||o),m=it,u!==null){let ht=u.views;A!==null&&(t.setRenderTargetFramebuffer(M,A.framebuffer),t.setRenderTarget(M));let st=!1;ht.length!==v.cameras.length&&(v.cameras.length=0,st=!0);for(let yt=0;yt<ht.length;yt++){let Rt=ht[yt],kt=null;if(A!==null)kt=A.getViewport(Rt);else{let at=h.getViewSubImage(f,Rt);kt=at.viewport,yt===0&&(t.setRenderTargetTextures(M,at.colorTexture,f.ignoreDepthValues?void 0:at.depthStencilTexture),t.setRenderTarget(M))}let X=_[yt];X===void 0&&(X=new be,X.layers.enable(yt),X.viewport=new me,_[yt]=X),X.matrix.fromArray(Rt.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(Rt.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set(kt.x,kt.y,kt.width,kt.height),yt===0&&(v.matrix.copy(X.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),st===!0&&v.cameras.push(X)}let At=s.enabledFeatures;if(At&&At.includes("depth-sensing")){let yt=h.getDepthInformation(ht[0]);yt&&yt.isValid&&yt.texture&&g.init(t,yt,s.renderState)}}for(let ht=0;ht<w.length;ht++){let st=x[ht],At=w[ht];st!==null&&At!==void 0&&At.update(st,it,l||o)}wt&&wt(Y,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),m=null}let St=new Oh;St.setAnimationLoop(Nt),this.setAnimationLoop=function(Y){wt=Y},this.dispose=function(){}}},bi=new hn,wg=new de;function Mg(i,t){function e(d,p){d.matrixAutoUpdate===!0&&d.updateMatrix(),p.value.copy(d.matrix)}function n(d,p){p.color.getRGB(d.fogColor.value,Nh(i)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function s(d,p,M,w,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(d,p):p.isMeshToonMaterial?(r(d,p),h(d,p)):p.isMeshPhongMaterial?(r(d,p),u(d,p)):p.isMeshStandardMaterial?(r(d,p),f(d,p),p.isMeshPhysicalMaterial&&A(d,p,x)):p.isMeshMatcapMaterial?(r(d,p),m(d,p)):p.isMeshDepthMaterial?r(d,p):p.isMeshDistanceMaterial?(r(d,p),g(d,p)):p.isMeshNormalMaterial?r(d,p):p.isLineBasicMaterial?(o(d,p),p.isLineDashedMaterial&&a(d,p)):p.isPointsMaterial?c(d,p,M,w):p.isSpriteMaterial?l(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map,e(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.bumpMap&&(d.bumpMap.value=p.bumpMap,e(p.bumpMap,d.bumpMapTransform),d.bumpScale.value=p.bumpScale,p.side===He&&(d.bumpScale.value*=-1)),p.normalMap&&(d.normalMap.value=p.normalMap,e(p.normalMap,d.normalMapTransform),d.normalScale.value.copy(p.normalScale),p.side===He&&d.normalScale.value.negate()),p.displacementMap&&(d.displacementMap.value=p.displacementMap,e(p.displacementMap,d.displacementMapTransform),d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,d.emissiveMapTransform)),p.specularMap&&(d.specularMap.value=p.specularMap,e(p.specularMap,d.specularMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let M=t.get(p),w=M.envMap,x=M.envMapRotation;w&&(d.envMap.value=w,bi.copy(x),bi.x*=-1,bi.y*=-1,bi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),d.envMapRotation.value.setFromMatrix4(wg.makeRotationFromEuler(bi)),d.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap&&(d.lightMap.value=p.lightMap,d.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,d.lightMapTransform)),p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,d.aoMapTransform))}function o(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,p.map&&(d.map.value=p.map,e(p.map,d.mapTransform))}function a(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function c(d,p,M,w){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*M,d.scale.value=w*.5,p.map&&(d.map.value=p.map,e(p.map,d.uvTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function l(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map,e(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function u(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function h(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function f(d,p){d.metalness.value=p.metalness,p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,d.metalnessMapTransform)),d.roughness.value=p.roughness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,d.roughnessMapTransform)),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function A(d,p,M){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,d.sheenColorMapTransform)),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,d.sheenRoughnessMapTransform))),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,d.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(d.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===He&&d.clearcoatNormalScale.value.negate())),p.dispersion>0&&(d.dispersion.value=p.dispersion),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,d.iridescenceMapTransform)),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=M.texture,d.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,d.transmissionMapTransform)),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(d.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(d.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,d.specularColorMapTransform)),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,d.specularIntensityMapTransform))}function m(d,p){p.matcap&&(d.matcap.value=p.matcap)}function g(d,p){let M=t.get(p).light;d.referencePosition.value.setFromMatrixPosition(M.matrixWorld),d.nearDistance.value=M.shadow.camera.near,d.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function vg(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,w){let x=w.program;n.uniformBlockBinding(M,x)}function l(M,w){let x=s[M.id];x===void 0&&(m(M),x=u(M),s[M.id]=x,M.addEventListener("dispose",d));let D=w.program;n.updateUBOMapping(M,D);let B=t.render.frame;r[M.id]!==B&&(f(M),r[M.id]=B)}function u(M){let w=h();M.__bindingPointIndex=w;let x=i.createBuffer(),D=M.__size,B=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,D,B),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,x),x}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let w=s[M.id],x=M.uniforms,D=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let B=0,b=x.length;B<b;B++){let I=Array.isArray(x[B])?x[B]:[x[B]];for(let _=0,v=I.length;_<v;_++){let S=I[_];if(A(S,B,_,D)===!0){let O=S.__offset,L=Array.isArray(S.value)?S.value:[S.value],N=0;for(let K=0;K<L.length;K++){let G=L[K],tt=g(G);typeof G=="number"||typeof G=="boolean"?(S.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,O+N,S.__data)):G.isMatrix3?(S.__data[0]=G.elements[0],S.__data[1]=G.elements[1],S.__data[2]=G.elements[2],S.__data[3]=0,S.__data[4]=G.elements[3],S.__data[5]=G.elements[4],S.__data[6]=G.elements[5],S.__data[7]=0,S.__data[8]=G.elements[6],S.__data[9]=G.elements[7],S.__data[10]=G.elements[8],S.__data[11]=0):(G.toArray(S.__data,N),N+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function A(M,w,x,D){let B=M.value,b=w+"_"+x;if(D[b]===void 0)return typeof B=="number"||typeof B=="boolean"?D[b]=B:D[b]=B.clone(),!0;{let I=D[b];if(typeof B=="number"||typeof B=="boolean"){if(I!==B)return D[b]=B,!0}else if(I.equals(B)===!1)return I.copy(B),!0}return!1}function m(M){let w=M.uniforms,x=0,D=16;for(let b=0,I=w.length;b<I;b++){let _=Array.isArray(w[b])?w[b]:[w[b]];for(let v=0,S=_.length;v<S;v++){let O=_[v],L=Array.isArray(O.value)?O.value:[O.value];for(let N=0,K=L.length;N<K;N++){let G=L[N],tt=g(G),z=x%D,ct=z%tt.boundary,ut=z+ct;x+=ct,ut!==0&&D-ut<tt.storage&&(x+=D-ut),O.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=x,x+=tt.storage}}}let B=x%D;return B>0&&(x+=D-B),M.__size=x,M.__cache={},this}function g(M){let w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),w}function d(M){let w=M.target;w.removeEventListener("dispose",d);let x=o.indexOf(w.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function p(){for(let M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var xi=class{constructor(t={}){let{canvas:e=Bf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let A;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=n.getContextAttributes().alpha}else A=o;let m=new Uint32Array(4),g=new Int32Array(4),d=null,p=null,M=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ce,this.toneMapping=ui,this.toneMappingExposure=1;let x=this,D=!1,B=0,b=0,I=null,_=-1,v=null,S=new me,O=new me,L=null,N=new jt(0),K=0,G=e.width,tt=e.height,z=1,ct=null,ut=null,wt=new me(0,0,G,tt),Nt=new me(0,0,G,tt),St=!1,Y=new or,it=!1,ht=!1,st=new de,At=new de,yt=new R,Rt=new me,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},X=!1;function at(){return I===null?z:1}let T=n;function Ut(E,P){return e.getContext(E,P)}try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Yc}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",Bt,!1),T===null){let P="webgl2";if(T=Ut(P,E),T===null)throw Ut(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let nt,Et,pt,It,_t,C,y,k,Q,Z,J,mt,gt,bt,Kt,lt,Tt,Ot,rt,j,Gt,Ft,ae,U;function Mt(){nt=new QA(T),nt.init(),Ft=new Ag(T,nt),Et=new DA(T,nt,t,Ft),pt=new fg(T,nt),Et.reverseDepthBuffer&&f&&pt.buffers.depth.setReversed(!0),It=new kA(T),_t=new $m,C=new pg(T,nt,pt,_t,Et,Ft,It),y=new PA(x),k=new LA(x),Q=new Jf(T),ae=new TA(T,Q),Z=new NA(T,Q,It,ae),J=new zA(T,Z,Q,It),rt=new GA(T,Et,C),lt=new RA(_t),mt=new jm(x,y,k,nt,Et,ae,lt),gt=new Mg(x,_t),bt=new eg,Kt=new ag(nt),Ot=new bA(x,y,k,pt,J,A,c),Tt=new hg(x,J,Et),U=new vg(T,It,Et,pt),j=new IA(T,nt,It),Gt=new OA(T,nt,It),It.programs=mt.programs,x.capabilities=Et,x.extensions=nt,x.properties=_t,x.renderLists=bt,x.shadowMap=Tt,x.state=pt,x.info=It}Mt();let q=new Bc(x,T);this.xr=q,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let E=nt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=nt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(E){E!==void 0&&(z=E,this.setSize(G,tt,!1))},this.getSize=function(E){return E.set(G,tt)},this.setSize=function(E,P,H=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=E,tt=P,e.width=Math.floor(E*z),e.height=Math.floor(P*z),H===!0&&(e.style.width=E+"px",e.style.height=P+"px"),this.setViewport(0,0,E,P)},this.getDrawingBufferSize=function(E){return E.set(G*z,tt*z).floor()},this.setDrawingBufferSize=function(E,P,H){G=E,tt=P,z=H,e.width=Math.floor(E*H),e.height=Math.floor(P*H),this.setViewport(0,0,E,P)},this.getCurrentViewport=function(E){return E.copy(S)},this.getViewport=function(E){return E.copy(wt)},this.setViewport=function(E,P,H,V){E.isVector4?wt.set(E.x,E.y,E.z,E.w):wt.set(E,P,H,V),pt.viewport(S.copy(wt).multiplyScalar(z).round())},this.getScissor=function(E){return E.copy(Nt)},this.setScissor=function(E,P,H,V){E.isVector4?Nt.set(E.x,E.y,E.z,E.w):Nt.set(E,P,H,V),pt.scissor(O.copy(Nt).multiplyScalar(z).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(E){pt.setScissorTest(St=E)},this.setOpaqueSort=function(E){ct=E},this.setTransparentSort=function(E){ut=E},this.getClearColor=function(E){return E.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor.apply(Ot,arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha.apply(Ot,arguments)},this.clear=function(E=!0,P=!0,H=!0){let V=0;if(E){let F=!1;if(I!==null){let ft=I.texture.format;F=ft===nl||ft===el||ft===tl}if(F){let ft=I.texture.type,Ct=ft===Sn||ft===Fi||ft===sr||ft===ys||ft===Zc||ft===jc,Pt=Ot.getClearColor(),Lt=Ot.getClearAlpha(),Ht=Pt.r,Yt=Pt.g,Dt=Pt.b;Ct?(m[0]=Ht,m[1]=Yt,m[2]=Dt,m[3]=Lt,T.clearBufferuiv(T.COLOR,0,m)):(g[0]=Ht,g[1]=Yt,g[2]=Dt,g[3]=Lt,T.clearBufferiv(T.COLOR,0,g))}else V|=T.COLOR_BUFFER_BIT}P&&(V|=T.DEPTH_BUFFER_BIT),H&&(V|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",Bt,!1),bt.dispose(),Kt.dispose(),_t.dispose(),y.dispose(),k.dispose(),J.dispose(),ae.dispose(),U.dispose(),mt.dispose(),q.dispose(),q.removeEventListener("sessionstart",Qs),q.removeEventListener("sessionend",Ns),Le.stop()};function $(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let E=It.autoReset,P=Tt.enabled,H=Tt.autoUpdate,V=Tt.needsUpdate,F=Tt.type;Mt(),It.autoReset=E,Tt.enabled=P,Tt.autoUpdate=H,Tt.needsUpdate=V,Tt.type=F}function Bt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function zt(E){let P=E.target;P.removeEventListener("dispose",zt),le(P)}function le(E){_e(E),_t.remove(E)}function _e(E){let P=_t.get(E).programs;P!==void 0&&(P.forEach(function(H){mt.releaseProgram(H)}),E.isShaderMaterial&&mt.releaseShaderCache(E))}this.renderBufferDirect=function(E,P,H,V,F,ft){P===null&&(P=kt);let Ct=F.isMesh&&F.matrixWorld.determinant()<0,Pt=xr(E,P,H,V,F);pt.setMaterial(V,Ct);let Lt=H.index,Ht=1;if(V.wireframe===!0){if(Lt=Z.getWireframeAttribute(H),Lt===void 0)return;Ht=2}let Yt=H.drawRange,Dt=H.attributes.position,te=Yt.start*Ht,ce=(Yt.start+Yt.count)*Ht;ft!==null&&(te=Math.max(te,ft.start*Ht),ce=Math.min(ce,(ft.start+ft.count)*Ht)),Lt!==null?(te=Math.max(te,0),ce=Math.min(ce,Lt.count)):Dt!=null&&(te=Math.max(te,0),ce=Math.min(ce,Dt.count));let ue=ce-te;if(ue<0||ue===1/0)return;ae.setup(F,V,Pt,H,Lt);let Jt,se=j;if(Lt!==null&&(Jt=Q.get(Lt),se=Gt,se.setIndex(Jt)),F.isMesh)V.wireframe===!0?(pt.setLineWidth(V.wireframeLinewidth*at()),se.setMode(T.LINES)):se.setMode(T.TRIANGLES);else if(F.isLine){let Qt=V.linewidth;Qt===void 0&&(Qt=1),pt.setLineWidth(Qt*at()),F.isLineSegments?se.setMode(T.LINES):F.isLineLoop?se.setMode(T.LINE_LOOP):se.setMode(T.LINE_STRIP)}else F.isPoints?se.setMode(T.POINTS):F.isSprite&&se.setMode(T.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)se.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))se.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Qt=F._multiDrawStarts,on=F._multiDrawCounts,ie=F._multiDrawCount,$e=Lt?Q.get(Lt).bytesPerElement:1,gn=_t.get(V).currentProgram.getUniforms();for(let Qe=0;Qe<ie;Qe++)gn.setValue(T,"_gl_DrawID",Qe),se.render(Qt[Qe]/$e,on[Qe])}else if(F.isInstancedMesh)se.renderInstances(te,ue,F.count);else if(H.isInstancedBufferGeometry){let Qt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,on=Math.min(H.instanceCount,Qt);se.renderInstances(te,ue,on)}else se.render(te,ue)};function $t(E,P,H){E.transparent===!0&&E.side===Bn&&E.forceSinglePass===!1?(E.side=He,E.needsUpdate=!0,vi(E,P,H),E.side=Pn,E.needsUpdate=!0,vi(E,P,H),E.side=Bn):vi(E,P,H)}this.compile=function(E,P,H=null){H===null&&(H=E),p=Kt.get(H),p.init(P),w.push(p),H.traverseVisible(function(F){F.isLight&&F.layers.test(P.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),E!==H&&E.traverseVisible(function(F){F.isLight&&F.layers.test(P.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();let V=new Set;return E.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let ft=F.material;if(ft)if(Array.isArray(ft))for(let Ct=0;Ct<ft.length;Ct++){let Pt=ft[Ct];$t(Pt,H,F),V.add(Pt)}else $t(ft,H,F),V.add(ft)}),w.pop(),p=null,V},this.compileAsync=function(E,P,H=null){let V=this.compile(E,P,H);return new Promise(F=>{function ft(){if(V.forEach(function(Ct){_t.get(Ct).currentProgram.isReady()&&V.delete(Ct)}),V.size===0){F(E);return}setTimeout(ft,10)}nt.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let Je=null;function fn(E){Je&&Je(E)}function Qs(){Le.stop()}function Ns(){Le.start()}let Le=new Oh;Le.setAnimationLoop(fn),typeof self!="undefined"&&Le.setContext(self),this.setAnimationLoop=function(E){Je=E,q.setAnimationLoop(E),E===null?Le.stop():Le.start()},q.addEventListener("sessionstart",Qs),q.addEventListener("sessionend",Ns),this.render=function(E,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(P),P=q.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,P,I),p=Kt.get(E,w.length),p.init(P),w.push(p),At.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),Y.setFromProjectionMatrix(At),ht=this.localClippingEnabled,it=lt.init(this.clippingPlanes,ht),d=bt.get(E,M.length),d.init(),M.push(d),q.enabled===!0&&q.isPresenting===!0){let ft=x.xr.getDepthSensingMesh();ft!==null&&Os(ft,P,-1/0,x.sortObjects)}Os(E,P,0,x.sortObjects),d.finish(),x.sortObjects===!0&&d.sort(ct,ut),X=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,X&&Ot.addToRenderList(d,E),this.info.render.frame++,it===!0&&lt.beginShadows();let H=p.state.shadowsArray;Tt.render(H,E,P),it===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=d.opaque,F=d.transmissive;if(p.setupLights(),P.isArrayCamera){let ft=P.cameras;if(F.length>0)for(let Ct=0,Pt=ft.length;Ct<Pt;Ct++){let Lt=ft[Ct];Ji(V,F,E,Lt)}X&&Ot.render(E);for(let Ct=0,Pt=ft.length;Ct<Pt;Ct++){let Lt=ft[Ct];gr(d,E,Lt,Lt.viewport)}}else F.length>0&&Ji(V,F,E,P),X&&Ot.render(E),gr(d,E,P);I!==null&&(C.updateMultisampleRenderTarget(I),C.updateRenderTargetMipmap(I)),E.isScene===!0&&E.onAfterRender(x,E,P),ae.resetDefaultState(),_=-1,v=null,w.pop(),w.length>0?(p=w[w.length-1],it===!0&&lt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?d=M[M.length-1]:d=null};function Os(E,P,H,V){if(E.visible===!1)return;if(E.layers.test(P.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(P);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Y.intersectsSprite(E)){V&&Rt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(At);let Ct=J.update(E),Pt=E.material;Pt.visible&&d.push(E,Ct,Pt,H,Rt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Y.intersectsObject(E))){let Ct=J.update(E),Pt=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Rt.copy(E.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Rt.copy(Ct.boundingSphere.center)),Rt.applyMatrix4(E.matrixWorld).applyMatrix4(At)),Array.isArray(Pt)){let Lt=Ct.groups;for(let Ht=0,Yt=Lt.length;Ht<Yt;Ht++){let Dt=Lt[Ht],te=Pt[Dt.materialIndex];te&&te.visible&&d.push(E,Ct,te,H,Rt.z,Dt)}}else Pt.visible&&d.push(E,Ct,Pt,H,Rt.z,null)}}let ft=E.children;for(let Ct=0,Pt=ft.length;Ct<Pt;Ct++)Os(ft[Ct],P,H,V)}function gr(E,P,H,V){let F=E.opaque,ft=E.transmissive,Ct=E.transparent;p.setupLightsView(H),it===!0&&lt.setGlobalState(x.clippingPlanes,H),V&&pt.viewport(S.copy(V)),F.length>0&&Mi(F,P,H),ft.length>0&&Mi(ft,P,H),Ct.length>0&&Mi(Ct,P,H),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function Ji(E,P,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new bn(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?fr:Sn,minFilter:Ui,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace}));let ft=p.state.transmissionRenderTarget[V.id],Ct=V.viewport||S;ft.setSize(Ct.z,Ct.w);let Pt=x.getRenderTarget();x.setRenderTarget(ft),x.getClearColor(N),K=x.getClearAlpha(),K<1&&x.setClearColor(16777215,.5),x.clear(),X&&Ot.render(H);let Lt=x.toneMapping;x.toneMapping=ui;let Ht=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),it===!0&&lt.setGlobalState(x.clippingPlanes,V),Mi(E,H,V),C.updateMultisampleRenderTarget(ft),C.updateRenderTargetMipmap(ft),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let Dt=0,te=P.length;Dt<te;Dt++){let ce=P[Dt],ue=ce.object,Jt=ce.geometry,se=ce.material,Qt=ce.group;if(se.side===Bn&&ue.layers.test(V.layers)){let on=se.side;se.side=He,se.needsUpdate=!0,Xi(ue,H,V,Jt,se,Qt),se.side=on,se.needsUpdate=!0,Yt=!0}}Yt===!0&&(C.updateMultisampleRenderTarget(ft),C.updateRenderTargetMipmap(ft))}x.setRenderTarget(Pt),x.setClearColor(N,K),Ht!==void 0&&(V.viewport=Ht),x.toneMapping=Lt}function Mi(E,P,H){let V=P.isScene===!0?P.overrideMaterial:null;for(let F=0,ft=E.length;F<ft;F++){let Ct=E[F],Pt=Ct.object,Lt=Ct.geometry,Ht=V===null?Ct.material:V,Yt=Ct.group;Pt.layers.test(H.layers)&&Xi(Pt,P,H,Lt,Ht,Yt)}}function Xi(E,P,H,V,F,ft){E.onBeforeRender(x,P,H,V,F,ft),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(x,P,H,V,E,ft),F.transparent===!0&&F.side===Bn&&F.forceSinglePass===!1?(F.side=He,F.needsUpdate=!0,x.renderBufferDirect(H,P,V,F,E,ft),F.side=Pn,F.needsUpdate=!0,x.renderBufferDirect(H,P,V,F,E,ft),F.side=Bn):x.renderBufferDirect(H,P,V,F,E,ft),E.onAfterRender(x,P,H,V,F,ft)}function vi(E,P,H){P.isScene!==!0&&(P=kt);let V=_t.get(E),F=p.state.lights,ft=p.state.shadowsArray,Ct=F.state.version,Pt=mt.getParameters(E,F.state,ft,P,H),Lt=mt.getProgramCacheKey(Pt),Ht=V.programs;V.environment=E.isMeshStandardMaterial?P.environment:null,V.fog=P.fog,V.envMap=(E.isMeshStandardMaterial?k:y).get(E.envMap||V.environment),V.envMapRotation=V.environment!==null&&E.envMap===null?P.environmentRotation:E.envMapRotation,Ht===void 0&&(E.addEventListener("dispose",zt),Ht=new Map,V.programs=Ht);let Yt=Ht.get(Lt);if(Yt!==void 0){if(V.currentProgram===Yt&&V.lightsStateVersion===Ct)return Ki(E,Pt),Yt}else Pt.uniforms=mt.getUniforms(E),E.onBeforeCompile(Pt,x),Yt=mt.acquireProgram(Pt,Lt),Ht.set(Lt,Yt),V.uniforms=Pt.uniforms;let Dt=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Dt.clippingPlanes=lt.uniform),Ki(E,Pt),V.needsLights=Ho(E),V.lightsStateVersion=Ct,V.needsLights&&(Dt.ambientLightColor.value=F.state.ambient,Dt.lightProbe.value=F.state.probe,Dt.directionalLights.value=F.state.directional,Dt.directionalLightShadows.value=F.state.directionalShadow,Dt.spotLights.value=F.state.spot,Dt.spotLightShadows.value=F.state.spotShadow,Dt.rectAreaLights.value=F.state.rectArea,Dt.ltc_1.value=F.state.rectAreaLTC1,Dt.ltc_2.value=F.state.rectAreaLTC2,Dt.pointLights.value=F.state.point,Dt.pointLightShadows.value=F.state.pointShadow,Dt.hemisphereLights.value=F.state.hemi,Dt.directionalShadowMap.value=F.state.directionalShadowMap,Dt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Dt.spotShadowMap.value=F.state.spotShadowMap,Dt.spotLightMatrix.value=F.state.spotLightMatrix,Dt.spotLightMap.value=F.state.spotLightMap,Dt.pointShadowMap.value=F.state.pointShadowMap,Dt.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=Yt,V.uniformsList=null,Yt}function qi(E){if(E.uniformsList===null){let P=E.currentProgram.getUniforms();E.uniformsList=xs.seqWithValue(P.seq,E.uniforms)}return E.uniformsList}function Ki(E,P){let H=_t.get(E);H.outputColorSpace=P.outputColorSpace,H.batching=P.batching,H.batchingColor=P.batchingColor,H.instancing=P.instancing,H.instancingColor=P.instancingColor,H.instancingMorph=P.instancingMorph,H.skinning=P.skinning,H.morphTargets=P.morphTargets,H.morphNormals=P.morphNormals,H.morphColors=P.morphColors,H.morphTargetsCount=P.morphTargetsCount,H.numClippingPlanes=P.numClippingPlanes,H.numIntersection=P.numClipIntersection,H.vertexAlphas=P.vertexAlphas,H.vertexTangents=P.vertexTangents,H.toneMapping=P.toneMapping}function xr(E,P,H,V,F){P.isScene!==!0&&(P=kt),C.resetTextureUnits();let ft=P.fog,Ct=V.isMeshStandardMaterial?P.environment:null,Pt=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Is,Lt=(V.isMeshStandardMaterial?k:y).get(V.envMap||Ct),Ht=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Yt=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Dt=!!H.morphAttributes.position,te=!!H.morphAttributes.normal,ce=!!H.morphAttributes.color,ue=ui;V.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ue=x.toneMapping);let Jt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,se=Jt!==void 0?Jt.length:0,Qt=_t.get(V),on=p.state.lights;if(it===!0&&(ht===!0||E!==v)){let Ge=E===v&&V.id===_;lt.setState(V,E,Ge)}let ie=!1;V.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==on.state.version||Qt.outputColorSpace!==Pt||F.isBatchedMesh&&Qt.batching===!1||!F.isBatchedMesh&&Qt.batching===!0||F.isBatchedMesh&&Qt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Qt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Qt.instancing===!1||!F.isInstancedMesh&&Qt.instancing===!0||F.isSkinnedMesh&&Qt.skinning===!1||!F.isSkinnedMesh&&Qt.skinning===!0||F.isInstancedMesh&&Qt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Qt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Qt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Qt.instancingMorph===!1&&F.morphTexture!==null||Qt.envMap!==Lt||V.fog===!0&&Qt.fog!==ft||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==lt.numPlanes||Qt.numIntersection!==lt.numIntersection)||Qt.vertexAlphas!==Ht||Qt.vertexTangents!==Yt||Qt.morphTargets!==Dt||Qt.morphNormals!==te||Qt.morphColors!==ce||Qt.toneMapping!==ue||Qt.morphTargetsCount!==se)&&(ie=!0):(ie=!0,Qt.__version=V.version);let $e=Qt.currentProgram;ie===!0&&($e=vi(V,P,F));let gn=!1,Qe=!1,Zn=!1,he=$e.getUniforms(),ke=Qt.uniforms;if(pt.useProgram($e.program)&&(gn=!0,Qe=!0,Zn=!0),V.id!==_&&(_=V.id,Qe=!0),gn||v!==E){pt.buffers.depth.getReversed()?(st.copy(E.projectionMatrix),Sf(st),bf(st),he.setValue(T,"projectionMatrix",st)):he.setValue(T,"projectionMatrix",E.projectionMatrix),he.setValue(T,"viewMatrix",E.matrixWorldInverse);let xn=he.map.cameraPosition;xn!==void 0&&xn.setValue(T,yt.setFromMatrixPosition(E.matrixWorld)),Et.logarithmicDepthBuffer&&he.setValue(T,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&he.setValue(T,"isOrthographic",E.isOrthographicCamera===!0),v!==E&&(v=E,Qe=!0,Zn=!0)}if(F.isSkinnedMesh){he.setOptional(T,F,"bindMatrix"),he.setOptional(T,F,"bindMatrixInverse");let Ge=F.skeleton;Ge&&(Ge.boneTexture===null&&Ge.computeBoneTexture(),he.setValue(T,"boneTexture",Ge.boneTexture,C))}F.isBatchedMesh&&(he.setOptional(T,F,"batchingTexture"),he.setValue(T,"batchingTexture",F._matricesTexture,C),he.setOptional(T,F,"batchingIdTexture"),he.setValue(T,"batchingIdTexture",F._indirectTexture,C),he.setOptional(T,F,"batchingColorTexture"),F._colorsTexture!==null&&he.setValue(T,"batchingColorTexture",F._colorsTexture,C));let jn=H.morphAttributes;if((jn.position!==void 0||jn.normal!==void 0||jn.color!==void 0)&&rt.update(F,H,$e),(Qe||Qt.receiveShadow!==F.receiveShadow)&&(Qt.receiveShadow=F.receiveShadow,he.setValue(T,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(ke.envMap.value=Lt,ke.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&P.environment!==null&&(ke.envMapIntensity.value=P.environmentIntensity),Qe&&(he.setValue(T,"toneMappingExposure",x.toneMappingExposure),Qt.needsLights&&wr(ke,Zn),ft&&V.fog===!0&&gt.refreshFogUniforms(ke,ft),gt.refreshMaterialUniforms(ke,V,z,tt,p.state.transmissionRenderTarget[E.id]),xs.upload(T,qi(Qt),ke,C)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(xs.upload(T,qi(Qt),ke,C),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&he.setValue(T,"center",F.center),he.setValue(T,"modelViewMatrix",F.modelViewMatrix),he.setValue(T,"normalMatrix",F.normalMatrix),he.setValue(T,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let Ge=V.uniformsGroups;for(let xn=0,wn=Ge.length;xn<wn;xn++){let ks=Ge[xn];U.update(ks,$e),U.bind(ks,$e)}}return $e}function wr(E,P){E.ambientLightColor.needsUpdate=P,E.lightProbe.needsUpdate=P,E.directionalLights.needsUpdate=P,E.directionalLightShadows.needsUpdate=P,E.pointLights.needsUpdate=P,E.pointLightShadows.needsUpdate=P,E.spotLights.needsUpdate=P,E.spotLightShadows.needsUpdate=P,E.rectAreaLights.needsUpdate=P,E.hemisphereLights.needsUpdate=P}function Ho(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(E,P,H){_t.get(E.texture).__webglTexture=P,_t.get(E.depthTexture).__webglTexture=H;let V=_t.get(E);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,P){let H=_t.get(E);H.__webglFramebuffer=P,H.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(E,P=0,H=0){I=E,B=P,b=H;let V=!0,F=null,ft=!1,Ct=!1;if(E){let Lt=_t.get(E);if(Lt.__useDefaultFramebuffer!==void 0)pt.bindFramebuffer(T.FRAMEBUFFER,null),V=!1;else if(Lt.__webglFramebuffer===void 0)C.setupRenderTarget(E);else if(Lt.__hasExternalTextures)C.rebindTextures(E,_t.get(E.texture).__webglTexture,_t.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Dt=E.depthTexture;if(Lt.__boundDepthTexture!==Dt){if(Dt!==null&&_t.has(Dt)&&(E.width!==Dt.image.width||E.height!==Dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(E)}}let Ht=E.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Ct=!0);let Yt=_t.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Yt[P])?F=Yt[P][H]:F=Yt[P],ft=!0):E.samples>0&&C.useMultisampledRTT(E)===!1?F=_t.get(E).__webglMultisampledFramebuffer:Array.isArray(Yt)?F=Yt[H]:F=Yt,S.copy(E.viewport),O.copy(E.scissor),L=E.scissorTest}else S.copy(wt).multiplyScalar(z).floor(),O.copy(Nt).multiplyScalar(z).floor(),L=St;if(pt.bindFramebuffer(T.FRAMEBUFFER,F)&&V&&pt.drawBuffers(E,F),pt.viewport(S),pt.scissor(O),pt.setScissorTest(L),ft){let Lt=_t.get(E.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+P,Lt.__webglTexture,H)}else if(Ct){let Lt=_t.get(E.texture),Ht=P||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,Lt.__webglTexture,H||0,Ht)}_=-1},this.readRenderTargetPixels=function(E,P,H,V,F,ft,Ct){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=_t.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ct!==void 0&&(Pt=Pt[Ct]),Pt){pt.bindFramebuffer(T.FRAMEBUFFER,Pt);try{let Lt=E.texture,Ht=Lt.format,Yt=Lt.type;if(!Et.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Et.textureTypeReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=E.width-V&&H>=0&&H<=E.height-F&&T.readPixels(P,H,V,F,Ft.convert(Ht),Ft.convert(Yt),ft)}finally{let Lt=I!==null?_t.get(I).__webglFramebuffer:null;pt.bindFramebuffer(T.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(E,P,H,V,F,ft,Ct){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=_t.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ct!==void 0&&(Pt=Pt[Ct]),Pt){let Lt=E.texture,Ht=Lt.format,Yt=Lt.type;if(!Et.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Et.textureTypeReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(P>=0&&P<=E.width-V&&H>=0&&H<=E.height-F){pt.bindFramebuffer(T.FRAMEBUFFER,Pt);let Dt=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Dt),T.bufferData(T.PIXEL_PACK_BUFFER,ft.byteLength,T.STREAM_READ),T.readPixels(P,H,V,F,Ft.convert(Ht),Ft.convert(Yt),0);let te=I!==null?_t.get(I).__webglFramebuffer:null;pt.bindFramebuffer(T.FRAMEBUFFER,te);let ce=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await Cf(T,ce,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Dt),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,ft),T.deleteBuffer(Dt),T.deleteSync(ce),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,P=null,H=0){E.isTexture!==!0&&(Ks("WebGLRenderer: copyFramebufferToTexture function signature has changed."),P=arguments[0]||null,E=arguments[1]);let V=Math.pow(2,-H),F=Math.floor(E.image.width*V),ft=Math.floor(E.image.height*V),Ct=P!==null?P.x:0,Pt=P!==null?P.y:0;C.setTexture2D(E,0),T.copyTexSubImage2D(T.TEXTURE_2D,H,0,0,Ct,Pt,F,ft),pt.unbindTexture()},this.copyTextureToTexture=function(E,P,H=null,V=null,F=0){E.isTexture!==!0&&(Ks("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,E=arguments[1],P=arguments[2],F=arguments[3]||0,H=null);let ft,Ct,Pt,Lt,Ht,Yt,Dt,te,ce,ue=E.isCompressedTexture?E.mipmaps[F]:E.image;H!==null?(ft=H.max.x-H.min.x,Ct=H.max.y-H.min.y,Pt=H.isBox3?H.max.z-H.min.z:1,Lt=H.min.x,Ht=H.min.y,Yt=H.isBox3?H.min.z:0):(ft=ue.width,Ct=ue.height,Pt=ue.depth||1,Lt=0,Ht=0,Yt=0),V!==null?(Dt=V.x,te=V.y,ce=V.z):(Dt=0,te=0,ce=0);let Jt=Ft.convert(P.format),se=Ft.convert(P.type),Qt;P.isData3DTexture?(C.setTexture3D(P,0),Qt=T.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(C.setTexture2DArray(P,0),Qt=T.TEXTURE_2D_ARRAY):(C.setTexture2D(P,0),Qt=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,P.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,P.unpackAlignment);let on=T.getParameter(T.UNPACK_ROW_LENGTH),ie=T.getParameter(T.UNPACK_IMAGE_HEIGHT),$e=T.getParameter(T.UNPACK_SKIP_PIXELS),gn=T.getParameter(T.UNPACK_SKIP_ROWS),Qe=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,ue.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ue.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Lt),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ht),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Yt);let Zn=E.isDataArrayTexture||E.isData3DTexture,he=P.isDataArrayTexture||P.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){let ke=_t.get(E),jn=_t.get(P),Ge=_t.get(ke.__renderTarget),xn=_t.get(jn.__renderTarget);pt.bindFramebuffer(T.READ_FRAMEBUFFER,Ge.__webglFramebuffer),pt.bindFramebuffer(T.DRAW_FRAMEBUFFER,xn.__webglFramebuffer);for(let wn=0;wn<Pt;wn++)Zn&&T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,_t.get(E).__webglTexture,F,Yt+wn),E.isDepthTexture?(he&&T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,_t.get(P).__webglTexture,F,ce+wn),T.blitFramebuffer(Lt,Ht,ft,Ct,Dt,te,ft,Ct,T.DEPTH_BUFFER_BIT,T.NEAREST)):he?T.copyTexSubImage3D(Qt,F,Dt,te,ce+wn,Lt,Ht,ft,Ct):T.copyTexSubImage2D(Qt,F,Dt,te,ce+wn,Lt,Ht,ft,Ct);pt.bindFramebuffer(T.READ_FRAMEBUFFER,null),pt.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else he?E.isDataTexture||E.isData3DTexture?T.texSubImage3D(Qt,F,Dt,te,ce,ft,Ct,Pt,Jt,se,ue.data):P.isCompressedArrayTexture?T.compressedTexSubImage3D(Qt,F,Dt,te,ce,ft,Ct,Pt,Jt,ue.data):T.texSubImage3D(Qt,F,Dt,te,ce,ft,Ct,Pt,Jt,se,ue):E.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,F,Dt,te,ft,Ct,Jt,se,ue.data):E.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,F,Dt,te,ue.width,ue.height,Jt,ue.data):T.texSubImage2D(T.TEXTURE_2D,F,Dt,te,ft,Ct,Jt,se,ue);T.pixelStorei(T.UNPACK_ROW_LENGTH,on),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ie),T.pixelStorei(T.UNPACK_SKIP_PIXELS,$e),T.pixelStorei(T.UNPACK_SKIP_ROWS,gn),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Qe),F===0&&P.generateMipmaps&&T.generateMipmap(Qt),pt.unbindTexture()},this.copyTextureToTexture3D=function(E,P,H=null,V=null,F=0){return E.isTexture!==!0&&(Ks("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,E=arguments[2],P=arguments[3],F=arguments[4]||0),Ks('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,P,H,V,F)},this.initRenderTarget=function(E){_t.get(E).__webglFramebuffer===void 0&&C.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?C.setTextureCube(E,0):E.isData3DTexture?C.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?C.setTexture2DArray(E,0):C.setTexture2D(E,0),pt.unbindTexture()},this.resetState=function(){B=0,b=0,I=null,pt.reset(),ae.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}};var Wn=class extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Cc=class extends tn{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Ze,u=Ze,h,f){super(null,o,a,c,l,u,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ho=class extends je{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},us=new de,mh=new de,zr=[],gh=new en,yg=new de,Xs=new Ne,qs=new Li,uo=class extends Ne{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ho(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,yg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new en),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,us),gh.copy(t.boundingBox).applyMatrix4(us),this.boundingBox.union(gh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Li),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,us),qs.copy(t.boundingSphere).applyMatrix4(us),this.boundingSphere.union(qs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Xs.geometry=this.geometry,Xs.material=this.material,Xs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qs.copy(this.boundingSphere),qs.applyMatrix4(n),t.ray.intersectsSphere(qs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,us),mh.multiplyMatrices(n,us),Xs.matrixWorld=mh,Xs.raycast(t,zr);for(let o=0,a=zr.length;o<a;o++){let c=zr[o];c.instanceId=r,c.object=this,e.push(c)}zr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ho(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Cc(new Float32Array(s*this.count),s,this.count,$c,Rn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Ss=class extends tn{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},rn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let u=n[s],f=n[s+1]-u,A=(o-u)/f;return(s+A)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new dt:new R);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new R,s=[],r=[],o=[],a=new R,c=new de;for(let A=0;A<=t;A++){let m=A/t;s[A]=this.getTangentAt(m,new R)}r[0]=new R,o[0]=new R;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let A=1;A<=t;A++){if(r[A]=r[A-1].clone(),o[A]=o[A-1].clone(),a.crossVectors(s[A-1],s[A]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Se(s[A-1].dot(s[A]),-1,1));r[A].applyMatrix4(c.makeRotationAxis(a,m))}o[A].crossVectors(s[A],r[A])}if(e===!0){let A=Math.acos(Se(r[0].dot(r[t]),-1,1));A/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(A=-A);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],A*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ar=class extends rn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new dt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,A=l-this.aY;c=f*u-A*h+this.aX,l=f*h+A*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Sc=class extends ar{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ol(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let f=(o-r)/l-(a-r)/(l+u)+(a-o)/u,A=(a-o)/u-(c-o)/(u+h)+(c-a)/h;f*=u,A*=u,s(o,a,f,A)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Vr=new R,va=new ol,ya=new ol,_a=new ol,bc=class extends rn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(Vr.subVectors(s[0],s[1]).add(s[0]),l=Vr);let h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Vr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Vr),this.curveType==="centripetal"||this.curveType==="chordal"){let A=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(h),A),g=Math.pow(h.distanceToSquared(f),A),d=Math.pow(f.distanceToSquared(u),A);g<1e-4&&(g=1),m<1e-4&&(m=g),d<1e-4&&(d=g),va.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,m,g,d),ya.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,m,g,d),_a.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,m,g,d)}else this.curveType==="catmullrom"&&(va.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),ya.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),_a.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return n.set(va.calc(c),ya.calc(c),_a.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function xh(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function _g(i,t){let e=1-i;return e*e*t}function Eg(i,t){return 2*(1-i)*i*t}function Bg(i,t){return i*i*t}function er(i,t,e,n){return _g(i,t)+Eg(i,e)+Bg(i,n)}function Cg(i,t){let e=1-i;return e*e*e*t}function Sg(i,t){let e=1-i;return 3*e*e*i*t}function bg(i,t){return 3*(1-i)*i*i*t}function Tg(i,t){return i*i*i*t}function nr(i,t,e,n,s){return Cg(i,t)+Sg(i,e)+bg(i,n)+Tg(i,s)}var fo=class extends rn{constructor(t=new dt,e=new dt,n=new dt,s=new dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new dt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(nr(t,s.x,r.x,o.x,a.x),nr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Tc=class extends rn{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(nr(t,s.x,r.x,o.x,a.x),nr(t,s.y,r.y,o.y,a.y),nr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},po=class extends rn{constructor(t=new dt,e=new dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new dt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ic=class extends rn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ao=class extends rn{constructor(t=new dt,e=new dt,n=new dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new dt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(er(t,s.x,r.x,o.x),er(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},mo=class extends rn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(er(t,s.x,r.x,o.x),er(t,s.y,r.y,o.y),er(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},go=class extends rn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new dt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(xh(a,c.x,l.x,u.x,h.x),xh(a,c.y,l.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new dt().fromArray(s))}return this}},xo=Object.freeze({__proto__:null,ArcCurve:Sc,CatmullRomCurve3:bc,CubicBezierCurve:fo,CubicBezierCurve3:Tc,EllipseCurve:ar,LineCurve:po,LineCurve3:Ic,QuadraticBezierCurve:Ao,QuadraticBezierCurve3:mo,SplineCurve:go}),Dc=class extends rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xo[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new xo[s.type]().fromJSON(s))}return this}},wo=class extends Dc{constructor(t){super(),this.type="Path",this.currentPoint=new dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new po(this.currentPoint.clone(),new dt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Ao(this.currentPoint.clone(),new dt(t,e),new dt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new fo(this.currentPoint.clone(),new dt(t,e),new dt(n,s),new dt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new go(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new ar(t,e,n,s,r,o,a,c);if(this.curves.length>0){let h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Mo=class i extends Fe{constructor(t=[new dt(0,-.5),new dt(.5,0),new dt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Se(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],u=1/e,h=new R,f=new dt,A=new R,m=new R,g=new R,d=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:d=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,A.x=p*1,A.y=-d,A.z=p*0,g.copy(A),A.normalize(),c.push(A.x,A.y,A.z);break;case t.length-1:c.push(g.x,g.y,g.z);break;default:d=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,A.x=p*1,A.y=-d,A.z=p*0,m.copy(A),A.x+=g.x,A.y+=g.y,A.z+=g.z,A.normalize(),c.push(A.x,A.y,A.z),g.copy(m)}for(let M=0;M<=e;M++){let w=n+M*u*s,x=Math.sin(w),D=Math.cos(w);for(let B=0;B<=t.length-1;B++){h.x=t[B].x*x,h.y=t[B].y,h.z=t[B].x*D,o.push(h.x,h.y,h.z),f.x=M/e,f.y=B/(t.length-1),a.push(f.x,f.y);let b=c[3*B+0]*x,I=c[3*B+1],_=c[3*B+0]*D;l.push(b,I,_)}}for(let M=0;M<e;M++)for(let w=0;w<t.length-1;w++){let x=w+M*t.length,D=x,B=x+t.length,b=x+t.length+1,I=x+1;r.push(D,B,I),r.push(b,I,B)}this.setIndex(r),this.setAttribute("position",new ne(o,3)),this.setAttribute("uv",new ne(a,2)),this.setAttribute("normal",new ne(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var vo=class i extends Fe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new R,u=new dt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){let A=n+h/e*s;l.x=t*Math.cos(A),l.y=t*Math.sin(A),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ne(o,3)),this.setAttribute("normal",new ne(a,3)),this.setAttribute("uv",new ne(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},yo=class i extends Fe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],A=[],m=0,g=[],d=n/2,p=0;M(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new ne(h,3)),this.setAttribute("normal",new ne(f,3)),this.setAttribute("uv",new ne(A,2));function M(){let x=new R,D=new R,B=0,b=(e-t)/n;for(let I=0;I<=r;I++){let _=[],v=I/r,S=v*(e-t)+t;for(let O=0;O<=s;O++){let L=O/s,N=L*c+a,K=Math.sin(N),G=Math.cos(N);D.x=S*K,D.y=-v*n+d,D.z=S*G,h.push(D.x,D.y,D.z),x.set(K,b,G).normalize(),f.push(x.x,x.y,x.z),A.push(L,1-v),_.push(m++)}g.push(_)}for(let I=0;I<s;I++)for(let _=0;_<r;_++){let v=g[_][I],S=g[_+1][I],O=g[_+1][I+1],L=g[_][I+1];(t>0||_!==0)&&(u.push(v,S,L),B+=3),(e>0||_!==r-1)&&(u.push(S,O,L),B+=3)}l.addGroup(p,B,0),p+=B}function w(x){let D=m,B=new dt,b=new R,I=0,_=x===!0?t:e,v=x===!0?1:-1;for(let O=1;O<=s;O++)h.push(0,d*v,0),f.push(0,v,0),A.push(.5,.5),m++;let S=m;for(let O=0;O<=s;O++){let N=O/s*c+a,K=Math.cos(N),G=Math.sin(N);b.x=_*G,b.y=d*v,b.z=_*K,h.push(b.x,b.y,b.z),f.push(0,v,0),B.x=K*.5+.5,B.y=G*.5*v+.5,A.push(B.x,B.y),m++}for(let O=0;O<s;O++){let L=D+O,N=S+O;x===!0?u.push(N,N+1,L):u.push(N+1,N,L),I+=3}l.addGroup(p,I,x===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var bs=class extends wo{constructor(t){super(t),this.uuid=zi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new wo().fromJSON(s))}return this}},Ig={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Hh(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,h,f,A;if(n&&(r=Fg(i,t,r,e)),i.length>80*e){a=l=i[0],c=u=i[1];for(let m=e;m<s;m+=e)h=i[m],f=i[m+1],h<a&&(a=h),f<c&&(c=f),h>l&&(l=h),f>u&&(u=f);A=Math.max(l-a,u-c),A=A!==0?32767/A:0}return cr(r,o,e,a,c,A,0),o}};function Hh(i,t,e,n,s){let r,o;if(s===Yg(i,t,e,n)>0)for(r=t;r<e;r+=n)o=wh(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=wh(r,i[r],i[r+1],o);return o&&No(o,o.next)&&(hr(o),o=o.next),o}function Ni(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(No(e,e.next)||ve(e.prev,e,e.next)===0)){if(hr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function cr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&kg(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?Rg(i,n,s,r):Dg(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),hr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Pg(Ni(i),t,e),cr(i,t,e,n,s,r,2)):o===2&&Ug(i,t,e,n,s,r):cr(Ni(i),t,e,n,s,r,1);break}}}function Dg(i){let t=i.prev,e=i,n=i.next;if(ve(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=s<r?s<o?s:o:r<o?r:o,h=a<c?a<l?a:l:c<l?c:l,f=s>r?s>o?s:o:r>o?r:o,A=a>c?a>l?a:l:c>l?c:l,m=n.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=h&&m.y<=A&&ps(s,a,r,c,o,l,m.x,m.y)&&ve(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Rg(i,t,e,n){let s=i.prev,r=i,o=i.next;if(ve(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,u=s.y,h=r.y,f=o.y,A=a<c?a<l?a:l:c<l?c:l,m=u<h?u<f?u:f:h<f?h:f,g=a>c?a>l?a:l:c>l?c:l,d=u>h?u>f?u:f:h>f?h:f,p=Rc(A,m,t,e,n),M=Rc(g,d,t,e,n),w=i.prevZ,x=i.nextZ;for(;w&&w.z>=p&&x&&x.z<=M;){if(w.x>=A&&w.x<=g&&w.y>=m&&w.y<=d&&w!==s&&w!==o&&ps(a,u,c,h,l,f,w.x,w.y)&&ve(w.prev,w,w.next)>=0||(w=w.prevZ,x.x>=A&&x.x<=g&&x.y>=m&&x.y<=d&&x!==s&&x!==o&&ps(a,u,c,h,l,f,x.x,x.y)&&ve(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;w&&w.z>=p;){if(w.x>=A&&w.x<=g&&w.y>=m&&w.y<=d&&w!==s&&w!==o&&ps(a,u,c,h,l,f,w.x,w.y)&&ve(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;x&&x.z<=M;){if(x.x>=A&&x.x<=g&&x.y>=m&&x.y<=d&&x!==s&&x!==o&&ps(a,u,c,h,l,f,x.x,x.y)&&ve(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Pg(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!No(s,r)&&Wh(s,n,n.next,r)&&lr(s,r)&&lr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),hr(n),hr(n.next),n=i=r),n=n.next}while(n!==i);return Ni(n)}function Ug(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Vg(o,a)){let c=Yh(o,a);o=Ni(o,o.next),c=Ni(c,c.next),cr(o,t,e,n,s,r,0),cr(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Fg(i,t,e,n){let s=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Hh(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(zg(l));for(s.sort(Lg),r=0;r<s.length;r++)e=Qg(s[r],e);return e}function Lg(i,t){return i.x-t.x}function Qg(i,t){let e=Ng(i,t);if(!e)return t;let n=Yh(e,i);return Ni(n,n.next),Ni(e,e.next)}function Ng(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,c=s.x,l=s.y,u=1/0,h;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&ps(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),lr(e,i)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&Og(s,e)))&&(s=e,u=h)),e=e.next;while(e!==a);return s}function Og(i,t){return ve(i.prev,i,t.prev)<0&&ve(t.next,i,i.next)<0}function kg(i,t,e,n){let s=i;do s.z===0&&(s.z=Rc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Gg(s)}function Gg(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function Rc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function zg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ps(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Vg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Hg(i,t)&&(lr(i,t)&&lr(t,i)&&Wg(i,t)&&(ve(i.prev,i,t.prev)||ve(i,t.prev,t))||No(i,t)&&ve(i.prev,i,i.next)>0&&ve(t.prev,t,t.next)>0)}function ve(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function No(i,t){return i.x===t.x&&i.y===t.y}function Wh(i,t,e,n){let s=Wr(ve(i,t,e)),r=Wr(ve(i,t,n)),o=Wr(ve(e,n,i)),a=Wr(ve(e,n,t));return!!(s!==r&&o!==a||s===0&&Hr(i,e,t)||r===0&&Hr(i,n,t)||o===0&&Hr(e,i,n)||a===0&&Hr(e,t,n))}function Hr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Wr(i){return i>0?1:i<0?-1:0}function Hg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Wh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function lr(i,t){return ve(i.prev,i,i.next)<0?ve(i,t,i.next)>=0&&ve(i,i.prev,t)>=0:ve(i,t,i.prev)<0||ve(i,i.next,t)<0}function Wg(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Yh(i,t){let e=new Pc(i.i,i.x,i.y),n=new Pc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function wh(i,t,e,n){let s=new Pc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function hr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Pc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Yg(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var fi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Mh(t),vh(n,t);let o=t.length;e.forEach(Mh);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,vh(n,e[c]);let a=Ig.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Mh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function vh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var _o=class i extends Fe{constructor(t=new bs([new dt(.5,.5),new dt(-.5,.5),new dt(-.5,-.5),new dt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new ne(s,3)),this.setAttribute("uv",new ne(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,A=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:A-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,d=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Jg,w,x=!1,D,B,b,I;p&&(w=p.getSpacedPoints(u),x=!0,f=!1,D=p.computeFrenetFrames(u,!1),B=new R,b=new R,I=new R),f||(d=0,A=0,m=0,g=0);let _=a.extractPoints(l),v=_.shape,S=_.holes;if(!fi.isClockWise(v)){v=v.reverse();for(let X=0,at=S.length;X<at;X++){let T=S[X];fi.isClockWise(T)&&(S[X]=T.reverse())}}let L=fi.triangulateShape(v,S),N=v;for(let X=0,at=S.length;X<at;X++){let T=S[X];v=v.concat(T)}function K(X,at,T){return at||console.error("THREE.ExtrudeGeometry: vec does not exist"),X.clone().addScaledVector(at,T)}let G=v.length,tt=L.length;function z(X,at,T){let Ut,nt,Et,pt=X.x-at.x,It=X.y-at.y,_t=T.x-X.x,C=T.y-X.y,y=pt*pt+It*It,k=pt*C-It*_t;if(Math.abs(k)>Number.EPSILON){let Q=Math.sqrt(y),Z=Math.sqrt(_t*_t+C*C),J=at.x-It/Q,mt=at.y+pt/Q,gt=T.x-C/Z,bt=T.y+_t/Z,Kt=((gt-J)*C-(bt-mt)*_t)/(pt*C-It*_t);Ut=J+pt*Kt-X.x,nt=mt+It*Kt-X.y;let lt=Ut*Ut+nt*nt;if(lt<=2)return new dt(Ut,nt);Et=Math.sqrt(lt/2)}else{let Q=!1;pt>Number.EPSILON?_t>Number.EPSILON&&(Q=!0):pt<-Number.EPSILON?_t<-Number.EPSILON&&(Q=!0):Math.sign(It)===Math.sign(C)&&(Q=!0),Q?(Ut=-It,nt=pt,Et=Math.sqrt(y)):(Ut=pt,nt=It,Et=Math.sqrt(y/2))}return new dt(Ut/Et,nt/Et)}let ct=[];for(let X=0,at=N.length,T=at-1,Ut=X+1;X<at;X++,T++,Ut++)T===at&&(T=0),Ut===at&&(Ut=0),ct[X]=z(N[X],N[T],N[Ut]);let ut=[],wt,Nt=ct.concat();for(let X=0,at=S.length;X<at;X++){let T=S[X];wt=[];for(let Ut=0,nt=T.length,Et=nt-1,pt=Ut+1;Ut<nt;Ut++,Et++,pt++)Et===nt&&(Et=0),pt===nt&&(pt=0),wt[Ut]=z(T[Ut],T[Et],T[pt]);ut.push(wt),Nt=Nt.concat(wt)}for(let X=0;X<d;X++){let at=X/d,T=A*Math.cos(at*Math.PI/2),Ut=m*Math.sin(at*Math.PI/2)+g;for(let nt=0,Et=N.length;nt<Et;nt++){let pt=K(N[nt],ct[nt],Ut);st(pt.x,pt.y,-T)}for(let nt=0,Et=S.length;nt<Et;nt++){let pt=S[nt];wt=ut[nt];for(let It=0,_t=pt.length;It<_t;It++){let C=K(pt[It],wt[It],Ut);st(C.x,C.y,-T)}}}let St=m+g;for(let X=0;X<G;X++){let at=f?K(v[X],Nt[X],St):v[X];x?(b.copy(D.normals[0]).multiplyScalar(at.x),B.copy(D.binormals[0]).multiplyScalar(at.y),I.copy(w[0]).add(b).add(B),st(I.x,I.y,I.z)):st(at.x,at.y,0)}for(let X=1;X<=u;X++)for(let at=0;at<G;at++){let T=f?K(v[at],Nt[at],St):v[at];x?(b.copy(D.normals[X]).multiplyScalar(T.x),B.copy(D.binormals[X]).multiplyScalar(T.y),I.copy(w[X]).add(b).add(B),st(I.x,I.y,I.z)):st(T.x,T.y,h/u*X)}for(let X=d-1;X>=0;X--){let at=X/d,T=A*Math.cos(at*Math.PI/2),Ut=m*Math.sin(at*Math.PI/2)+g;for(let nt=0,Et=N.length;nt<Et;nt++){let pt=K(N[nt],ct[nt],Ut);st(pt.x,pt.y,h+T)}for(let nt=0,Et=S.length;nt<Et;nt++){let pt=S[nt];wt=ut[nt];for(let It=0,_t=pt.length;It<_t;It++){let C=K(pt[It],wt[It],Ut);x?st(C.x,C.y+w[u-1].y,w[u-1].x+T):st(C.x,C.y,h+T)}}}Y(),it();function Y(){let X=s.length/3;if(f){let at=0,T=G*at;for(let Ut=0;Ut<tt;Ut++){let nt=L[Ut];At(nt[2]+T,nt[1]+T,nt[0]+T)}at=u+d*2,T=G*at;for(let Ut=0;Ut<tt;Ut++){let nt=L[Ut];At(nt[0]+T,nt[1]+T,nt[2]+T)}}else{for(let at=0;at<tt;at++){let T=L[at];At(T[2],T[1],T[0])}for(let at=0;at<tt;at++){let T=L[at];At(T[0]+G*u,T[1]+G*u,T[2]+G*u)}}n.addGroup(X,s.length/3-X,0)}function it(){let X=s.length/3,at=0;ht(N,at),at+=N.length;for(let T=0,Ut=S.length;T<Ut;T++){let nt=S[T];ht(nt,at),at+=nt.length}n.addGroup(X,s.length/3-X,1)}function ht(X,at){let T=X.length;for(;--T>=0;){let Ut=T,nt=T-1;nt<0&&(nt=X.length-1);for(let Et=0,pt=u+d*2;Et<pt;Et++){let It=G*Et,_t=G*(Et+1),C=at+Ut+It,y=at+nt+It,k=at+nt+_t,Q=at+Ut+_t;yt(C,y,k,Q)}}}function st(X,at,T){c.push(X),c.push(at),c.push(T)}function At(X,at,T){Rt(X),Rt(at),Rt(T);let Ut=s.length/3,nt=M.generateTopUV(n,s,Ut-3,Ut-2,Ut-1);kt(nt[0]),kt(nt[1]),kt(nt[2])}function yt(X,at,T,Ut){Rt(X),Rt(at),Rt(Ut),Rt(at),Rt(T),Rt(Ut);let nt=s.length/3,Et=M.generateSideWallUV(n,s,nt-6,nt-3,nt-2,nt-1);kt(Et[0]),kt(Et[1]),kt(Et[3]),kt(Et[1]),kt(Et[2]),kt(Et[3])}function Rt(X){s.push(c[X*3+0]),s.push(c[X*3+1]),s.push(c[X*3+2])}function kt(X){r.push(X.x),r.push(X.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Xg(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new xo[s.type]().fromJSON(s)),new i(n,t.options)}},Jg={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],u=t[s*3+1];return[new dt(r,o),new dt(a,c),new dt(l,u)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],h=t[n*3+2],f=t[s*3],A=t[s*3+1],m=t[s*3+2],g=t[r*3],d=t[r*3+1],p=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new dt(o,1-c),new dt(l,1-h),new dt(f,1-m),new dt(g,1-p)]:[new dt(a,1-c),new dt(u,1-h),new dt(A,1-m),new dt(d,1-p)]}};function Xg(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Eo=class i extends Fe{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],u=[],h=t,f=(e-t)/s,A=new R,m=new dt;for(let g=0;g<=s;g++){for(let d=0;d<=n;d++){let p=r+d/n*o;A.x=h*Math.cos(p),A.y=h*Math.sin(p),c.push(A.x,A.y,A.z),l.push(0,0,1),m.x=(A.x/e+1)/2,m.y=(A.y/e+1)/2,u.push(m.x,m.y)}h+=f}for(let g=0;g<s;g++){let d=g*(n+1);for(let p=0;p<n;p++){let M=p+d,w=M,x=M+n+1,D=M+n+2,B=M+1;a.push(w,x,B),a.push(x,D,B)}}this.setIndex(a),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(l,3)),this.setAttribute("uv",new ne(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Bo=class i extends Fe{constructor(t=new bs([new dt(0,.5),new dt(-.5,-.5),new dt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new ne(s,3)),this.setAttribute("normal",new ne(r,3)),this.setAttribute("uv",new ne(o,2));function l(u){let h=s.length/3,f=u.extractPoints(e),A=f.shape,m=f.holes;fi.isClockWise(A)===!1&&(A=A.reverse());for(let d=0,p=m.length;d<p;d++){let M=m[d];fi.isClockWise(M)===!0&&(m[d]=M.reverse())}let g=fi.triangulateShape(A,m);for(let d=0,p=m.length;d<p;d++){let M=m[d];A=A.concat(M)}for(let d=0,p=A.length;d<p;d++){let M=A[d];s.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let d=0,p=g.length;d<p;d++){let M=g[d],w=M[0]+h,x=M[1]+h,D=M[2]+h;n.push(w,x,D),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return qg(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function qg(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Co=class i extends Fe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,u=[],h=new R,f=new R,A=[],m=[],g=[],d=[];for(let p=0;p<=n;p++){let M=[],w=p/n,x=0;p===0&&o===0?x=.5/e:p===n&&c===Math.PI&&(x=-.5/e);for(let D=0;D<=e;D++){let B=D/e;h.x=-t*Math.cos(s+B*r)*Math.sin(o+w*a),h.y=t*Math.cos(o+w*a),h.z=t*Math.sin(s+B*r)*Math.sin(o+w*a),m.push(h.x,h.y,h.z),f.copy(h).normalize(),g.push(f.x,f.y,f.z),d.push(B+x,1-w),M.push(l++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){let w=u[p][M+1],x=u[p][M],D=u[p+1][M],B=u[p+1][M+1];(p!==0||o>0)&&A.push(w,x,B),(p!==n-1||c<Math.PI)&&A.push(x,D,B)}this.setIndex(A),this.setAttribute("position",new ne(m,3)),this.setAttribute("normal",new ne(g,3)),this.setAttribute("uv",new ne(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var So=class i extends Fe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],u=new R,h=new R,f=new R;for(let A=0;A<=n;A++)for(let m=0;m<=s;m++){let g=m/s*r,d=A/n*Math.PI*2;h.x=(t+e*Math.cos(d))*Math.cos(g),h.y=(t+e*Math.cos(d))*Math.sin(g),h.z=e*Math.sin(d),a.push(h.x,h.y,h.z),u.x=t*Math.cos(g),u.y=t*Math.sin(g),f.subVectors(h,u).normalize(),c.push(f.x,f.y,f.z),l.push(m/s),l.push(A/n)}for(let A=1;A<=n;A++)for(let m=1;m<=s;m++){let g=(s+1)*A+m-1,d=(s+1)*(A-1)+m-1,p=(s+1)*(A-1)+m,M=(s+1)*A+m;o.push(g,d,M),o.push(d,p,M)}this.setIndex(o),this.setAttribute("position",new ne(a,3)),this.setAttribute("normal",new ne(c,3)),this.setAttribute("uv",new ne(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var bo=class i extends Fe{constructor(t=new mo(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new R,c=new R,l=new dt,u=new R,h=[],f=[],A=[],m=[];g(),this.setIndex(m),this.setAttribute("position",new ne(h,3)),this.setAttribute("normal",new ne(f,3)),this.setAttribute("uv",new ne(A,2));function g(){for(let w=0;w<e;w++)d(w);d(r===!1?e:0),M(),p()}function d(w){u=t.getPointAt(w/e,u);let x=o.normals[w],D=o.binormals[w];for(let B=0;B<=s;B++){let b=B/s*Math.PI*2,I=Math.sin(b),_=-Math.cos(b);c.x=_*x.x+I*D.x,c.y=_*x.y+I*D.y,c.z=_*x.z+I*D.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=u.x+n*c.x,a.y=u.y+n*c.y,a.z=u.z+n*c.z,h.push(a.x,a.y,a.z)}}function p(){for(let w=1;w<=e;w++)for(let x=1;x<=s;x++){let D=(s+1)*(w-1)+(x-1),B=(s+1)*w+(x-1),b=(s+1)*w+x,I=(s+1)*(w-1)+x;m.push(D,B,I),m.push(B,b,I)}}function M(){for(let w=0;w<=e;w++)for(let x=0;x<=s;x++)l.x=w/e,l.y=x/s,A.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new xo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var ur=class extends Ai{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=il,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},To=class extends ur{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new dt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Se(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new jt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new jt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new jt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Io=class extends Ai{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=il,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=qc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Yr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Kg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ts=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Uc=class extends Ts{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wl,endingEnd:wl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ml:r=t,a=2*e-n;break;case vl:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ml:o=t,c=2*n-e;break;case vl:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,A=this._weightNext,m=(n-e)/(s-e),g=m*m,d=g*m,p=-f*d+2*f*g-f*m,M=(1+f)*d+(-1.5-2*f)*g+(-.5+f)*m+1,w=(-1-A)*d+(1.5+A)*g+.5*m,x=A*d-A*g;for(let D=0;D!==a;++D)r[D]=p*o[u+D]+M*o[l+D]+w*o[c+D]+x*o[h+D];return r}},Fc=class extends Ts{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=(n-e)/(s-e),h=1-u;for(let f=0;f!==a;++f)r[f]=o[l+f]*h+o[c+f]*u;return r}},Lc=class extends Ts{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Tn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Yr(e,this.TimeBufferType),this.values=Yr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Yr(t.times,Array),values:Yr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Lc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Fc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Uc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case $r:e=this.InterpolantFactoryMethodDiscrete;break;case lc:e=this.InterpolantFactoryMethodLinear;break;case Xo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $r;case this.InterpolantFactoryMethodLinear:return lc;case this.InterpolantFactoryMethodSmooth:return Xo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Kg(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Xo,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],u=t[a+1];if(l!==u&&(a!==1||l!==t[0]))if(s)c=!0;else{let h=a*n,f=h-n,A=h+n;for(let m=0;m!==n;++m){let g=e[h+m];if(g!==e[f+m]||g!==e[A+m]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let h=a*n,f=o*n;for(let A=0;A!==n;++A)e[f+A]=e[h+A]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Tn.prototype.TimeBufferType=Float32Array;Tn.prototype.ValueBufferType=Float32Array;Tn.prototype.DefaultInterpolation=lc;var Oi=class extends Tn{constructor(t,e,n){super(t,e,n)}};Oi.prototype.ValueTypeName="bool";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=$r;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var Qc=class extends Tn{};Qc.prototype.ValueTypeName="color";var Nc=class extends Tn{};Nc.prototype.ValueTypeName="number";var Oc=class extends Ts{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let u=l+a;l!==u;l+=4)We.slerpFlat(r,0,o,l-a,o,l,c);return r}},Do=class extends Tn{InterpolantFactoryMethodLinear(t){return new Oc(this.times,this.values,this.getValueSize(),t)}};Do.prototype.ValueTypeName="quaternion";Do.prototype.InterpolantFactoryMethodSmooth=void 0;var ki=class extends Tn{constructor(t,e,n){super(t,e,n)}};ki.prototype.ValueTypeName="string";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=$r;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var kc=class extends Tn{};kc.prototype.ValueTypeName="vector";var Gc=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){let A=l[h],m=l[h+1];if(A.global&&(A.lastIndex=0),A.test(u))return m}return null}}},Zg=new Gc,zc=class{constructor(t){this.manager=t!==void 0?t:Zg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};zc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ro=class extends nn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}};var Ea=new de,yh=new R,_h=new R,Vc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new or,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;yh.setFromMatrixPosition(t.matrixWorld),e.position.copy(yh),_h.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(_h),e.updateMatrixWorld(),Ea.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ea),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ea)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Hc=class extends Vc{constructor(){super(new gi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Po=class extends Ro{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.shadow=new Hc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Uo=class extends Ro{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var al="\\[\\]\\.:\\/",jg=new RegExp("["+al+"]","g"),cl="[^"+al+"]",$g="[^"+al.replace("\\.","")+"]",t0=/((?:WC+[\/:])*)/.source.replace("WC",cl),e0=/(WCOD+)?/.source.replace("WCOD",$g),n0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cl),i0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cl),s0=new RegExp("^"+t0+e0+n0+i0+"$"),r0=["material","materials","bones","map"],Wc=class{constructor(t,e,n){let s=n||Me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Me=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(jg,"")}static parseTrackName(t){let e=s0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);r0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Me.Composite=Wc;Me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Me.prototype.GetterByBindingType=[Me.prototype._getValue_direct,Me.prototype._getValue_array,Me.prototype._getValue_arrayElement,Me.prototype._getValue_toArray];Me.prototype.SetterByBindingTypeAndVersioning=[[Me.prototype._setValue_direct,Me.prototype._setValue_direct_setNeedsUpdate,Me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_array,Me.prototype._setValue_array_setNeedsUpdate,Me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_arrayElement,Me.prototype._setValue_arrayElement_setNeedsUpdate,Me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_fromArray,Me.prototype._setValue_fromArray_setNeedsUpdate,Me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var I0=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yc}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yc);function dr(i){let t=i>>>0||1;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Oo(i,t,e){let n=Math.imul(i|0,374761393)+Math.imul(t|0,668265263)+Math.imul(e|0,2147483647)|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}var Jh=i=>i*i*(3-2*i);function Vi(i,t,e=0){let n=Math.floor(i),s=Math.floor(t),r=i-n,o=t-s,a=Oo(n,s,e),c=Oo(n+1,s,e),l=Oo(n,s+1,e),u=Oo(n+1,s+1,e),h=Jh(r),f=Jh(o);return(a+(c-a)*h+(l-a)*f+(a-c-l+u)*h*f)*2-1}function Un(i,t,e=4,n=0){let s=0,r=1,o=.5,a=0;for(let c=0;c<e;c++)s+=o*Vi(i*r,t*r,n+c*17),a+=o,r*=2.03,o*=.5;return s/a}var ge=(i,t,e)=>Math.max(t,Math.min(e,i)),wi=(i,t,e)=>{let n=ge((e-i)/(t-i),0,1);return n*n*(3-2*n)};var un={l:i=>i,io:i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,o:i=>1-Math.pow(1-i,3),i:i=>i*i*i,o5:i=>1-Math.pow(1-i,5),back:i=>1+(1.5+1)*Math.pow(i-1,3)+1.5*Math.pow(i-1,2)},Jn=["M52 0h22v30h-22z","M52 200h22v30h-22z","M0 141V38A10 10 0 0 1 10 28H116A10 10 0 0 1 126 38V62L68 121L46 101Z","M0 169L45 129L68 150L126 90V192A10 10 0 0 1 116 202H10A10 10 0 0 1 0 192Z"];function Oe(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,e}var we={W:2,H:3.06,CB:.075,CT:.083,A:.25,SEAL:.0055,LOGO_V:.514,LOGO_H:.262};function Xh(i){let{W:t,H:e,CB:n,CT:s,A:r,SEAL:o}=we,a=dr(i),c=[],l=(d,p,M,w,x,D)=>c.push({x0:(d-.5)*t,y0:(p-.5)*e,dx:Math.cos(M),dy:Math.sin(M),len:w,amp:x,wid:D});for(let d=0;d<15;d++){let p=.06+a()*.88;l(p,1-s,-Math.PI/2+(p-.5)*1.4+(a()-.5)*.5,.25+a()*.55,(a()<.5?-1:1)*(.008+a()*.016),.03+a()*.05)}for(let d=0;d<13;d++){let p=.06+a()*.88;l(p,n,Math.PI/2-(p-.5)*1.3+(a()-.5)*.5,.22+a()*.5,(a()<.5?-1:1)*(.008+a()*.015),.03+a()*.05)}[[.04,1-s,-.9],[.96,1-s,-2.24],[.04,n,.85],[.96,n,2.3]].forEach(([d,p,M])=>{l(d,p,M+(a()-.5)*.2,.7+a()*.5,-.02,.07),l(d+(d<.5?.05:-.05),p,M+(d<.5?.25:-.25),.45,.014,.05)});for(let d=0;d<8;d++){let p=d%2===0;l(p?.015:.985,n+.08+a()*(1-n-s-.16),(p?0:Math.PI)+(a()-.5)*1.2,.18+a()*.25,(a()<.5?-1:1)*.012,.035)}let u=a()*10,h=d=>(d-n)/(1-s-n),f=d=>Math.pow(Math.max(0,1-Math.pow(Math.abs(2*d-1),2.3)),.52),A=d=>Math.pow(Math.max(0,1-Math.pow(Math.abs(2*d-1),5.5)),.4);function m(d,p,M){if(p<=n||p>=1-s)return 0;let w=h(p),x=f(d),D=A(w),B=r*x*D,b=(d-.5)*t,I=(p-.5)*e,_=Math.exp(-(1-s-p)/.03),v=Math.exp(-(p-n)/.027),S=Math.sin(2*Math.PI*(d*8.5+.22*Math.sin(d*6.3+u)))*.7+Math.sin(2*Math.PI*(d*3.2+u))*.3;if(B+=.03*(_+v)*S*Math.min(1,x*1.4),!M)for(let L=0;L<c.length;L++){let N=c[L],K=b-N.x0,G=I-N.y0,tt=K*N.dx+G*N.dy,z=ge(tt,0,N.len),ct=K-N.dx*z,ut=G-N.dy*z,wt=ct*ct+ut*ut,Nt=N.wid*N.wid;if(wt>Nt*9)continue;let St=Math.pow(1-z/N.len,1.4);B+=N.amp*St*Math.exp(-wt/Nt)*Math.min(1,x*2)*Math.min(1,D*3)}let O=Math.exp(-Math.min(d,1-d)/.05);return B+=.01*O*Math.sin(p*Math.PI*9+u+(M?1.3:0))*D,B*=1+.1*Un(d*2+(M?7:0),p*2.4,2,i),B+=.018*Math.sin(d*5.2+p*3.1+u)*Math.sin(p*4.4-d*1.7)*x*D,B}function g(d,p,M){let w=ge(h(p),0,1),x=p>n&&p<1-s,B=1-.05*(x?Math.exp(-(p-n)/.07)+Math.exp(-(1-s-p)/.07):0)*Math.pow(Math.abs(2*d-1),3)-(x?.006:0),b=(d-.5)*t*B,I=(p-.5)*e,_=Math.min(1,Math.min(d,1-d)/.006),v=M*(o*_+m(d,p,M<0));return[b,I,v]}return{P:g,pu:f,ps:A,bodyS:h}}function Hi(i){let{CT:t}=we,e=n=>Math.abs((n%1+1)%1-.5)*2;return 1-t-.018+.006*(e(i*31)-.5)+.003*Vi(i*40,3.7)}function Rs(i,t,e,n,s,r,o,a){let c=new Float32Array((n+1)*(s+1)*3),l=new Float32Array(c.length),u=new Float32Array((n+1)*(s+1)*2),h=new Float32Array((n+1)*(s+1)),f=1e-4,A=0;for(let d=0;d<=s;d++)for(let p=0;p<=n;p++){let M=p/n,w=r(M),x=o(M),D=w+(x-w)*(d/s),B=t.P(M,D,e),b=t.P(Math.min(1,M+f),D,e),I=t.P(Math.max(0,M-f),D,e),_=t.P(M,Math.min(1,D+f),e),v=t.P(M,Math.max(0,D-f),e),S=b[0]-I[0],O=b[1]-I[1],L=b[2]-I[2],N=_[0]-v[0],K=_[1]-v[1],G=_[2]-v[2],tt=O*G-L*K,z=L*N-S*G,ct=S*K-O*N,ut=Math.hypot(tt,z,ct)||1;tt/=ut,z/=ut,ct/=ut,e<0&&(tt=-tt,z=-z,ct=-ct),c.set(B,A*3),l.set([tt,z,ct],A*3),u[A*2]=e>0?M:1-M,u[A*2+1]=D,h[A]=a?e*a(M,D):0,A++}let m=[];for(let d=0;d<s;d++)for(let p=0;p<n;p++){let M=d*(n+1)+p,w=M+1,x=M+n+1,D=x+1;e>0?m.push(M,w,D,M,D,x):m.push(M,D,w,M,x,D)}let g=new i.BufferGeometry;return g.setAttribute("position",new i.BufferAttribute(c,3)),g.setAttribute("normal",new i.BufferAttribute(l,3)),g.setAttribute("uv",new i.BufferAttribute(u,2)),g.setAttribute("aMouth",new i.BufferAttribute(h,1)),g.setIndex(m),g}function o0(i,t,e){let{CB:n,CT:s}=we,r=new Float32Array(i*t);for(let o=0;o<t;o++){let a=1-(o+.5)/t;for(let c=0;c<i;c++){let l=(c+.5)/i,u;if(a<n||a>1-s){let h=Math.pow(.5+.5*Math.cos(l*Math.PI*2*24),1.6),f=a<n?n-a:a-(1-s),A=a<n?a:1-a;u=.3*h*(.85+.15*Vi(l*6,a*9,e))-.2*Math.exp(-f/.006)-.12*Math.exp(-A/.005)}else{let h=1+1.8*(Math.exp(-(a-n)/.12)+Math.exp(-(1-s-a)/.12)),f=1-Math.abs(Vi(l*14,a*22/h,e+5)),A=1-Math.abs(Vi(l*37+3.1,a*55/h,e+9));u=.012*f*f+.006*A*A+.018*Vi(l*4.5,a*6.5/h,e+13)}r[o*i+c]=u}}return r}function a0(i,t,e,n){let s=Oe(t,e),r=s.getContext("2d"),o=r.createImageData(t,e),a=o.data;for(let c=0;c<e;c++)for(let l=0;l<t;l++){let u=i[c*t+Math.max(0,l-1)],h=i[c*t+Math.min(t-1,l+1)],f=i[Math.max(0,c-1)*t+l],A=i[Math.min(e-1,c+1)*t+l],m=(u-h)*n,g=(A-f)*n,d=1,p=Math.hypot(m,g,d);m/=p,g/=p,d/=p;let M=(c*t+l)*4;a[M]=(m*.5+.5)*255,a[M+1]=(g*.5+.5)*255,a[M+2]=(d*.5+.5)*255,a[M+3]=255}return r.putImageData(o,0,0),s}function c0(i,t,e,n){let s=n/230;i.save(),i.translate(t-63*s,e-115*s),i.scale(s,s),Jn.forEach(r=>i.fill(new Path2D(r))),i.restore()}var l0='Inter, "SF Pro Display", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif';function h0(i,t,e,n){if(!t)return;let s=Math.round(n*.047),r=s*.2;i.font="800 "+s+"px "+l0,i.textBaseline="alphabetic";let o=[...String(t)],a=o.map(h=>i.measureText(h).width),c=a.reduce((h,f)=>h+f,0)+r*(o.length-1),l=e/2-c/2,u=n*.694;o.forEach((h,f)=>{i.fillText(h,l,u),l+=a[f]+r})}function u0(i,t,e,n){let{LOGO_V:s,LOGO_H:r,CB:o,CT:a}=we,c=i/2,l=(1-s)*t,u=r*t,h=(g,d)=>{g.fillStyle=d,g.fillRect(0,0,i,a*t),g.fillRect(0,(1-o)*t,i,o*t)},f=(g,d)=>{g.fillStyle=d,c0(g,c,l,u),h0(g,m.label,i,t)},A={color:g=>{g.fillStyle=e,g.fillRect(0,0,i,t),f(g,"#a6f357")},orm:g=>{g.fillStyle="rgb(0,56,255)",g.fillRect(0,0,i,t),h(g,"rgb(0,84,255)"),f(g,"rgb(0,215,0)")},emissive:g=>{g.fillStyle="#505050",g.fillRect(0,0,i,t),h(g,"#7a7a7a"),f(g,"#fff")},coat:g=>{g.fillStyle="rgb(200,0,0)",g.fillRect(0,0,i,t),h(g,"rgb(255,0,0)"),f(g,"rgb(18,0,0)")}},m={label:n||null};for(let g in A)m[g]=Oe(i,t);return m.draw=g=>{m.label=g||null;for(let d in A)A[d](m[d].getContext("2d"))},m.draw(n),m}function Xn(i,t={}){var n,s;let e={uHoloAmt:{value:(n=t.amt)!=null?n:.1},uHoloShift:{value:0},uMouth:{value:0},uHoloBase:{value:(s=t.base)!=null?s:0}};return i.userData.holo=e,i.onBeforeCompile=r=>{Object.assign(r.uniforms,e),r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
attribute float aMouth;
uniform float uMouth;
varying vec2 vHUv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
`+(t.mouth?`transformed.z += uMouth * aMouth;
`:"")+"vHUv = uv;"),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
uniform float uHoloAmt;
uniform float uHoloShift;
uniform float uHoloBase;
varying vec2 vHUv;`).replace("#include <opaque_fragment>",["{","  vec3 vdir = normalize(vViewPosition);","  float ndv = clamp(abs(dot(normal, vdir)), 0.0, 1.0);","  float ph = uHoloShift + normal.x * 1.7 - normal.y * 1.2 + vHUv.x * 2.6 + vHUv.y * 3.4;","  vec3 spec = 0.5 + 0.5 * cos(6.28318 * (ph + vec3(0.0, 0.33, 0.67)));","  float lum = dot(outgoingLight, vec3(0.299, 0.587, 0.114));","  float m = uHoloAmt * (0.3 + 0.7 * pow(1.0 - ndv, 1.6)) * (0.2 + smoothstep(0.04, 0.7, lum)) * max(metalnessFactor, uHoloBase);","  outgoingLight += spec * m;","}","#include <opaque_fragment>"].join(`
`))},i.customProgramCacheKey=()=>"holo"+(t.mouth?"m":""),e}function qh(i,t=.3){let e=Xh(7),n=Math.round(110*t),s=Math.round(170*t),r=()=>0,o=()=>1;return[Rs(i,e,1,n,s,r,o,null),Rs(i,e,-1,n,s,r,o,null)]}function Ps(i,t={}){var wt,Nt;let{W:e,H:n}=we,s=(wt=t.quality)!=null?wt:1,r=Xh((Nt=t.seed)!=null?Nt:7),o=Math.round(110*s),a=Math.round(170*s),c=Math.round(18*s),l=(St,Y)=>{let it=Hi(St),ht=ge((Y-(it-.26))/.26,0,1);return .15*Math.pow(r.pu(St),.8)*ht*ht},u=Rs(i,r,1,o,a,()=>0,Hi,l),h=Rs(i,r,-1,o,a,()=>0,Hi,l),f=Rs(i,r,1,o,c,Hi,()=>1,null),A=Rs(i,r,-1,o,c,Hi,()=>1,null),m=Math.round(384*s),g=Math.round(576*s),d=new i.CanvasTexture(a0(o0(m,g,5),m,g,2.8));d.anisotropy=8;let p=u0(512,768,t.metal||"#b4f25e",t.label),M=(St,Y)=>{let it=new i.CanvasTexture(St);return Y&&(it.colorSpace=i.SRGBColorSpace),it.anisotropy=4,it},w=M(p.color,!0),x=M(p.orm),D=M(p.emissive,!0),B=M(p.coat),b=St=>{let Y=new i.MeshPhysicalMaterial({color:16777215,map:St?w:null,metalness:1,roughness:1,roughnessMap:x,metalnessMap:x,normalMap:d,normalScale:new i.Vector2(.85,.85),clearcoat:1,clearcoatRoughness:.07,clearcoatMap:B,iridescence:.32,iridescenceIOR:1.3,iridescenceThicknessRange:[320,520],iridescenceMap:B,emissive:new i.Color("#a6f357"),emissiveMap:St?D:null,emissiveIntensity:St?.85:.075,envMapIntensity:1.25,side:i.DoubleSide});return St||(Y.color=new i.Color(t.metal||"#b4f25e"),Y.metalnessMap=null,Y.roughnessMap=null,Y.roughness=.24,Y.clearcoatMap=null,Y.iridescenceMap=null),Y},I=b(!0),_=b(!1),v=I.clone(),S=_.clone(),O=[Xn(I,{mouth:!0,amt:.08}),Xn(_,{mouth:!0,amt:.06}),Xn(v,{amt:.08}),Xn(S,{amt:.06})],L=new i.Group,N=new i.Group,K=new i.Group,G=new i.Group;N.add(new i.Mesh(u,I),new i.Mesh(h,_));let tt=new i.Mesh(f,v),z=new i.Mesh(A,S),ct=new i.Vector3(e/2,(Hi(1)-.5)*n,0);G.position.copy(ct),tt.position.sub(ct),z.position.sub(ct),K.add(tt,z),G.add(K),L.add(N,G),L.traverse(St=>{St.isMesh&&(St.castShadow=!1,St.frustumCulled=!1)});let ut={group:L,body:N,top:G,dims:{W:e,H:n,tearY:(Hi(.5)-.5)*n},materials:[I,_,v,S],setTear(St){let Y=wi(0,.35,St),it=wi(.25,1,St);G.rotation.z=Y*.22+it*.9,G.position.set(ct.x+it*1.6,ct.y+Y*.05+it*2.6,it*.6),G.visible=St<.995,tt.material.opacity=z.material.opacity=1},setMouth(St){O.forEach(Y=>{Y.uMouth.value=St})},setHolo(St,Y){O.forEach((it,ht)=>{it.uHoloShift.value=St,Y!=null&&(it.uHoloAmt.value=Y*(ht%2?.8:1))})},textures:[w,x,D,B,d],setLabel(St){(St||null)!==p.label&&(p.draw(St),[w,x,D,B].forEach(Y=>{Y.needsUpdate=!0}))},setEmissive(St){I.emissiveIntensity=v.emissiveIntensity=St},dispose(){L.traverse(St=>{St.geometry&&St.geometry.dispose()}),[w,x,D,B,d].forEach(St=>St.dispose()),ut.materials.forEach(St=>St.dispose())}};return ut.setTear(0),ut}var Kh={G:"M12.17 16.44C14.41 16.44 16.02 15.04 16.02 12.71V11.56H12.27V13.08H14.02C14 14.03 13.34 14.62 12.19 14.62C10.87 14.62 10.1 13.64 10.1 11.94C10.1 10.26 10.91 9.29 12.18 9.29C13.05 9.29 13.63 9.72 13.83 10.44H15.92C15.71 8.7 14.15 7.47 12.15 7.47C9.82 7.47 7.98 9.12 7.98 11.97C7.98 14.73 9.68 16.44 12.17 16.44Z"},ll={TSLA:{name:"Tesla",acc:"#A259FF",glow:"#8B4BF5",lf:"#fff",ink:1,lvb:"0 -0.005 39.017 24.01",wvb:"-0.005 -0.005 24.01 24.01",d:"M12 5.362l2.475-3.026s4.245.09 8.471 2.054c-1.082 1.636-3.231 2.438-3.231 2.438-.146-1.439-1.154-1.79-4.354-1.79L12 24 8.619 5.034c-3.18 0-4.188.354-4.335 1.792 0 0-2.146-.795-3.229-2.43C5.28 2.431 9.525 2.34 9.525 2.34L12 5.362l-.004.002H12v-.002zm0-3.899c3.415-.03 7.326.528 11.328 2.28.535-.968.672-1.395.672-1.395C19.625.612 15.528.015 12 0 8.472.015 4.375.61 0 2.349c0 0 .195.525.672 1.396C4.674 1.989 8.585 1.435 12 1.46v.003z"},SPCX:{name:"SpaceX",acc:"#8EBBFF",glow:"#8EBBFF",lf:"#fff",ink:1.625,lvb:"0 4.615 24 14.769",wvb:"0 0 24 24",d:"M24 7.417C8.882 8.287 1.89 14.75.321 16.28L0 16.583h2.797C10.356 9.005 21.222 7.663 24 7.417zm-17.046 6.35c-.472.321-.945.68-1.398 1.02l2.457 1.796h2.778zM2.948 10.8H.189l3.25 2.381c.473-.321 1.02-.661 1.512-.945Z"},GME:{name:"GameStop",acc:"#E5489B",glow:"#D63A8A",lf:"#fff",ink:1,lvb:"0 0 24 24",wvb:"0 0 24 24",initial:"G"},META:{name:"Meta Platforms",acc:"#1E8BF5",glow:"#1E8BF5",lf:"#fff",ink:1.06,lvb:"0 0.675 36.806 22.65",wvb:"0 0 24 24",d:"M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z"},AMZN:{name:"Amazon",acc:"#FF9900",glow:"#3B4D63",lf:"#FF9900",ink:1.012,lvb:"0 0.148 38.519 23.704",wvb:"0 0.001 24 24",d:"M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726a17.617 17.617 0 01-10.951-.577 17.88 17.88 0 01-5.43-3.35c-.1-.074-.151-.15-.151-.22 0-.047.021-.09.051-.13zm6.565-6.218c0-1.005.247-1.863.743-2.577.495-.71 1.17-1.25 2.04-1.615.796-.335 1.756-.575 2.912-.72.39-.046 1.033-.103 1.92-.174v-.37c0-.93-.105-1.558-.3-1.875-.302-.43-.78-.65-1.44-.65h-.182c-.48.046-.896.196-1.246.46-.35.27-.575.63-.675 1.096-.06.3-.206.465-.435.51l-2.52-.315c-.248-.06-.372-.18-.372-.39 0-.046.007-.09.022-.15.247-1.29.855-2.25 1.82-2.88.976-.616 2.1-.975 3.39-1.05h.54c1.65 0 2.957.434 3.888 1.29.135.15.27.3.405.48.12.165.224.314.283.45.075.134.15.33.195.57.06.254.105.42.135.51.03.104.062.3.076.615.01.313.02.493.02.553v5.28c0 .376.06.72.165 1.036.105.313.21.54.315.674l.51.674c.09.136.136.256.136.36 0 .12-.06.226-.18.314-1.2 1.05-1.86 1.62-1.963 1.71-.165.135-.375.15-.63.045a6.062 6.062 0 01-.526-.496l-.31-.347a9.391 9.391 0 01-.317-.42l-.3-.435c-.81.886-1.603 1.44-2.4 1.665-.494.15-1.093.227-1.83.227-1.11 0-2.04-.343-2.76-1.034-.72-.69-1.08-1.665-1.08-2.94l-.05-.076zm3.753-.438c0 .566.14 1.02.425 1.364.285.34.675.512 1.155.512.045 0 .106-.007.195-.02.09-.016.134-.023.166-.023.614-.16 1.08-.553 1.424-1.178.165-.28.285-.58.36-.91.09-.32.12-.59.135-.8.015-.195.015-.54.015-1.005v-.54c-.84 0-1.484.06-1.92.18-1.275.36-1.92 1.17-1.92 2.43l-.035-.02zm9.162 7.027c.03-.06.075-.11.132-.17.362-.243.714-.41 1.05-.5a8.094 8.094 0 011.612-.24c.14-.012.28 0 .41.03.65.06 1.05.168 1.172.33.063.09.099.228.099.39v.15c0 .51-.149 1.11-.424 1.8-.278.69-.664 1.248-1.156 1.68-.073.06-.14.09-.197.09-.03 0-.06 0-.09-.012-.09-.044-.107-.12-.064-.24.54-1.26.806-2.143.806-2.64 0-.15-.03-.27-.087-.344-.145-.166-.55-.257-1.224-.257-.243 0-.533.016-.87.046-.363.045-.7.09-1 .135-.09 0-.148-.014-.18-.044-.03-.03-.036-.047-.02-.077 0-.017.006-.03.02-.063v-.06z"},AAPL:{name:"Apple",acc:"#DDE2E8",glow:"#DDE2E8",lf:"#E9EAEC",ink:.717,lvb:"2.225 -1.643 44.339 27.285",wvb:"-1.643 -1.643 27.285 27.285",d:"M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"},NVDA:{name:"NVIDIA",acc:"#76B900",glow:"#6FB300",lf:"#fff",ink:.997,lvb:"0 -0.037 39.12 24.074",wvb:"-0.037 -0.037 24.074 24.074",d:"M8.948 8.798v-1.43a6.7 6.7 0 0 1 .424-.018c3.922-.124 6.493 3.374 6.493 3.374s-2.774 3.851-5.75 3.851c-.398 0-.787-.062-1.158-.185v-4.346c1.528.185 1.837.857 2.747 2.385l2.04-1.714s-1.492-1.952-4-1.952a6.016 6.016 0 0 0-.796.035m0-4.735v2.138l.424-.027c5.45-.185 9.01 4.47 9.01 4.47s-4.08 4.964-8.33 4.964c-.37 0-.733-.035-1.095-.097v1.325c.3.035.61.062.91.062 3.957 0 6.82-2.023 9.593-4.408.459.371 2.34 1.263 2.73 1.652-2.633 2.208-8.772 3.984-12.253 3.984-.335 0-.653-.018-.971-.053v1.864H24V4.063zm0 10.326v1.131c-3.657-.654-4.673-4.46-4.673-4.46s1.758-1.944 4.673-2.262v1.237H8.94c-1.528-.186-2.73 1.245-2.73 1.245s.68 2.412 2.739 3.11M2.456 10.9s2.164-3.197 6.5-3.533V6.201C4.153 6.59 0 10.653 0 10.653s2.35 6.802 8.948 7.42v-1.237c-4.84-.6-6.492-5.936-6.492-5.936z"}};function f0(i){for(var t=2166136261,e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function d0(i){return function(){i=i+1831565813|0;var t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var ko={};function Zh(i,t,e){var n=i+":"+(t||56)+":"+(e||100);if(ko[n])return ko[n];t=t||56,e=e||100;for(var s=d0(f0(i)),r=0,o=[],a=0;a<t;a++)r+=s()-.5+Math.sin(a/5+s())*.18,o.push(r);for(var c=Math.min.apply(null,o),l=Math.max.apply(null,o),u=l-c||1,h=o.map(function(p,M){return[M*250/(t-1),e*.08+(1-(p-c)/u)*e*.84]}),f="M"+h[0][0].toFixed(1)+","+h[0][1].toFixed(1),A=1;A<t;A++){var m=h[A-1],g=h[A],d=((m[0]+g[0])/2).toFixed(1);f+=" C"+d+","+m[1].toFixed(1)+" "+d+","+g[1].toFixed(1)+" "+g[0].toFixed(1)+","+g[1].toFixed(1)}return ko[n]={line:f,area:f+" L250,"+e+" L0,"+e+" Z"},ko[n]}var Ye={W:1.5,H:2.25,R:.107},Go='-apple-system, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Inter, Arial, sans-serif';function p0(i){return i.split(/\s+/).map(Number)}function pr(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}function jh(i,t,e,n,s){let r=e;for(let o of t)i.fillText(o,r,n),r+=i.measureText(o).width+s;return r-e-s}function $h(i,t,e,n,s,r,o,a){let[c,l,u,h]=p0(o),f=Math.max(s/u,r/h);i.save(),i.beginPath(),i.rect(e,n,s,r),i.clip(),i.translate(e-c*f+(s-u*f)*0,n-l*f+(r-h*f)/2),i.scale(f,f),i.fillStyle=a,i.strokeStyle=a,t.initial?(i.lineWidth=1.8,i.beginPath(),i.arc(12,12,10.6,0,Math.PI*2),i.stroke(),i.fill(new Path2D(Kh[t.initial]),"evenodd")):i.fill(new Path2D(t.d),"evenodd"),i.restore()}function Wi(i,t){let e=parseInt(i.slice(1),16);return"rgba("+(e>>16&255)+","+(e>>8&255)+","+(e&255)+","+t+")"}var hl="#A6F357";function Ar(i,t,e=512,n={}){let s=Math.round(e*1.5),r=e/100,[o,a,c]=i,l=n.power?Object.assign({},ll[o],{acc:hl,glow:hl}):ll[o],u=Oe(e,s),h=u.getContext("2d"),f=e*12/168,A=t==="orm",m=t==="glow";if(h.save(),pr(h,0,0,e,s,f),h.clip(),h.fillStyle=A?"rgb(0,96,0)":"#0c0e0d",h.fillRect(0,0,e,s),m&&(h.fillStyle="#000",h.fillRect(0,0,e,s)),!A){if(!m){h.save(),h.translate(.22*e,.1*s),h.scale(1.1*e,.7*s);let S=h.createRadialGradient(0,0,0,0,0,1);S.addColorStop(0,Wi(l.glow,.3)),S.addColorStop(.6,Wi(l.glow,0)),h.fillStyle=S,h.fillRect(-1,-1,2,2),h.restore()}$h(h,l,e+34*r-118*r,s+8*r-118*r,118*r,118*r,l.wvb,Wi(l.acc,m?.07:.13))}let g=S=>A?"rgb(0,58,235)":m?"rgba(255,255,255,"+S*.7+")":"rgba(255,255,255,"+S+")",d=Zh(o),p=s-33*r-.22*s,M=.22*s;if(h.save(),h.translate(0,p),h.scale(e/250,M/100),!A){let S=h.createLinearGradient(0,0,0,100);S.addColorStop(0,Wi(l.acc,m?.22:.26)),S.addColorStop(1,Wi(l.acc,0)),h.fillStyle=S,h.fill(new Path2D(d.area))}h.restore(),h.save(),h.translate(0,p);let w=new Path2D,x=new DOMMatrix().scale(e/250,M/100);w.addPath(new Path2D(d.line),x),h.lineWidth=2*e/168,h.lineJoin="round",h.strokeStyle=A?"rgb(0,40,200)":m?"#fff":l.acc,h.stroke(w),h.restore();let D=10*r,B=10*r*l.ink;$h(h,l,6.4*r,6.4*r,B,D,l.lvb,A?"rgb(0,58,235)":m?"#fff":l.lf),h.fillStyle=g(1),h.textBaseline="middle",h.font="800 "+7.6*r+"px "+Go,jh(h,o,6.4*r+B+2.4*r,6.4*r+D/2,-.01*7.6*r);let b="$"+a.toLocaleString("en-US"),I=(b.length>=8?18.5:22)*r;h.font="400 "+I+"px "+Go,h.textBaseline="alphabetic",jh(h,b,6.4*r,22*r+I*.8,-.04*I),h.font="600 "+5.2*r+"px "+Go,h.fillStyle=A?"rgb(0,96,0)":g(.75),h.textBaseline="top",h.fillText(l.name,6.4*r,45.6*r);let _=s-7.6*r;h.font="400 "+5.2*r+"px "+Go,h.fillStyle=A?"rgb(0,96,0)":g(.72),h.textBaseline="alphabetic",h.fillText((+c).toFixed(2)+" shares",6.4*r,_);let v=i[3];if(v!=null){let S=Math.max(0,Math.floor(+v)),O=S<365?S+(S===1?" day":" days"):m0(S),L=1.3*r,N=e-6.4*r-L,K=h.measureText("0").actualBoundingBoxAscent||5.2*r*.72,G=_-K/2;h.textAlign="right",h.fillText(O,N-L-2.4*r,_),h.textAlign="left",h.beginPath(),h.arc(N,G,L,0,Math.PI*2),h.fillStyle=A?"rgb(0,96,0)":g(.3),h.fill(),u.live=[N/e,G/s]}if(h.restore(),h.save(),pr(h,1.5,1.5,e-3,s-3,f-1.5),A)h.strokeStyle="rgb(0,30,255)";else{let S=h.createConicGradient(-34*Math.PI/180-Math.PI/2,e/2,s/2);S.addColorStop(0,"#ffffff"),S.addColorStop(.12,l.acc),S.addColorStop(.3,Wi(l.acc,.35)),S.addColorStop(.5,"#ffffff"),S.addColorStop(.7,Wi(l.acc,.35)),S.addColorStop(.91,l.acc),S.addColorStop(1,"#ffffff"),h.strokeStyle=S}return h.lineWidth=A?6:3,h.stroke(),h.restore(),u}function ul(i=512){let t=Math.round(i*1.5),e=Oe(i,t),n=e.getContext("2d"),s=i*12/168;pr(n,0,0,i,t,s),n.clip();let r=n.createRadialGradient(i/2,0,0,i/2,0,t*.9);r.addColorStop(0,"#20261a"),r.addColorStop(.7,"#0a0c08"),n.fillStyle=r,n.fillRect(0,0,i,t),n.save(),pr(n,i*.04,i*.04,i*.92,t-i*.08,s*.6),n.clip(),n.strokeStyle="rgba(166,243,87,0.06)",n.lineWidth=1.5;for(let c=-t;c<i+t;c+=i*.036)n.beginPath(),n.moveTo(c,0),n.lineTo(c+t,t),n.stroke();n.restore(),pr(n,i*.04,i*.04,i*.92,t-i*.08,s*.6),n.strokeStyle="rgba(166,243,87,0.35)",n.lineWidth=2,n.stroke();let o=t*.3,a=o/230;return n.save(),n.translate(i/2-63*a,t/2-115*a),n.scale(a,a),n.shadowColor="rgba(166,243,87,0.5)",n.shadowBlur=40/a,n.fillStyle="#a6f357",Jn.forEach(c=>n.fill(new Path2D(c))),n.restore(),e}function A0(i,t,e,n){let s=new i.Shape,r=-t/2,o=-e/2;return s.moveTo(r+n,o),s.lineTo(r+t-n,o),s.quadraticCurveTo(r+t,o,r+t,o+n),s.lineTo(r+t,o+e-n),s.quadraticCurveTo(r+t,o+e,r+t-n,o+e),s.lineTo(r+n,o+e),s.quadraticCurveTo(r,o+e,r,o+e-n),s.lineTo(r,o+n),s.quadraticCurveTo(r,o,r+n,o),s}function tu(i,t,e,n,s){let r=new i.ShapeGeometry(t,10),o=r.attributes.position,a=r.attributes.uv;for(let c=0;c<o.count;c++)a.setXY(c,s?.5-o.getX(c)/e:o.getX(c)/e+.5,o.getY(c)/n+.5);return r}function zo(i,t,e={}){let{W:n,H:s,R:r}=Ye,o=.012,a=A0(i,n,s,r),c=(rt,j)=>{let Gt=new i.CanvasTexture(rt);return j&&(Gt.colorSpace=i.SRGBColorSpace),Gt.anisotropy=8,Gt},l=c(Ar(t,"face"),!0),u=c(Ar(t,"orm")),h=e.power?c(Ar(t,"face",512,{power:!0}),!0):l,f=e.backTex||c(ul(),!0),A=new i.MeshPhysicalMaterial({map:l,roughnessMap:u,metalnessMap:u,roughness:1,metalness:1,clearcoat:1,clearcoatRoughness:.03,iridescence:.18,iridescenceIOR:1.3,iridescenceThicknessRange:[200,700],emissive:new i.Color(16777215),emissiveMap:l,emissiveIntensity:.62,envMapIntensity:.34,transparent:!0}),m=Xn(A,{amt:.1,base:.07}),g={uPow:{value:0},tFaceOn:{value:h}},d=A.onBeforeCompile;A.onBeforeCompile=(rt,j)=>{d(rt,j),Object.assign(rt.uniforms,g),rt.fragmentShader=rt.fragmentShader.replace("#include <common>",`#include <common>
uniform float uPow;
uniform sampler2D tFaceOn;`).replace("#include <map_fragment>",`#ifdef USE_MAP
  diffuseColor *= mix(texture2D(map, vMapUv), texture2D(tFaceOn, vMapUv), uPow);
#endif`).replace("#include <emissivemap_fragment>",`#ifdef USE_EMISSIVEMAP
  totalEmissiveRadiance *= mix(texture2D(emissiveMap, vEmissiveMapUv), texture2D(tFaceOn, vEmissiveMapUv), uPow).rgb;
#endif`)},A.customProgramCacheKey=()=>"holo-card";let p=new i.MeshPhysicalMaterial({map:f,roughness:.4,metalness:.1,clearcoat:1,clearcoatRoughness:.05,emissive:new i.Color(16777215),emissiveMap:f,emissiveIntensity:.32,transparent:!0}),M=new i.MeshStandardMaterial({color:1382415,roughness:.5,metalness:.6,transparent:!0}),w=new i.Group,x=new i.Mesh(tu(i,a,n,s,!1),A);x.position.z=o/2;let D=new i.Mesh(tu(i,a,n,s,!0),p);D.position.z=-o/2,D.rotation.y=Math.PI;let B=new i.ExtrudeGeometry(a,{depth:o,bevelEnabled:!1,curveSegments:10});B.translate(0,0,-o/2);let b=new i.Mesh(B,[new i.MeshBasicMaterial({visible:!1}),M]);w.add(b,x,D);let I=.255,_=.155,v=_/2-.0115,S=new i.Group;S.position.set(n/2-.096-I/2,s/2-.171,o/2+8e-4);let O=new i.Shape;O.absarc(-I/2+_/2,0,_/2,Math.PI/2,Math.PI*1.5,!1),O.absarc(I/2-_/2,0,_/2,-Math.PI/2,Math.PI/2,!1);let L=(rt,j)=>new i.MeshBasicMaterial({color:rt,transparent:!0,opacity:j!=null?j:1,toneMapped:!1,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),N=new i.Color("#3a3a3d"),K=new i.Color(hl),G=L(N.clone()),tt=L(0,.28),z=L(16777215),ct=new i.Mesh(new i.ShapeGeometry(O,24),G),ut=new i.Mesh(new i.CircleGeometry(v+.008,40),tt);ut.position.z=3e-4;let wt=new i.Mesh(new i.CircleGeometry(v,40),z);wt.position.z=6e-4;let Nt=Oe(64,117),St=Nt.getContext("2d");St.scale(64/126,117/230),St.fillStyle="#fff",Jn.forEach(rt=>St.fill(new Path2D(rt)));let Y=new i.CanvasTexture(Nt);Y.colorSpace=i.SRGBColorSpace;let it=new i.Color("#bcbcbc"),ht=new i.Color("#86c93f"),st=new i.MeshBasicMaterial({map:Y,color:it.clone(),transparent:!0,toneMapped:!1,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),At=v*1.08,yt=new i.Mesh(new i.PlaneGeometry(At*126/230,At),st);yt.position.z=9e-4,S.add(ct,ut,wt,yt),[ct,ut,wt,yt].forEach((rt,j)=>{rt.renderOrder=10+j}),w.add(S);let Rt=[G,tt,z,st],kt=[1,.28,1,1],X=rt=>{let j=-I/2+_/2+(I-_)*rt,Gt=Math.sin(Math.PI*Math.min(1,Math.max(0,rt)));wt.position.x=ut.position.x=yt.position.x=j,wt.scale.set(1+.22*Gt,1,1),ut.scale.set(1+.22*Gt,1,1),ut.position.y=-.006;let Ft=Math.min(1,Math.max(0,rt));G.color.copy(N).lerp(K,Ft),st.color.copy(it).lerp(ht,Ft)};X(0);let at=l.image,[T,Ut]=at.live||[.5,.5],nt=new i.Group;nt.position.set((T-.5)*n,(.5-Ut)*s,o/2+.0012),nt.userData.has=!!at.live;let Et=Oe(128,128),pt=Et.getContext("2d"),It=pt.createRadialGradient(64,64,0,64,64,64);It.addColorStop(0,"rgba(255,255,255,1)"),It.addColorStop(.18,"rgba(255,255,255,0.55)"),It.addColorStop(.45,"rgba(255,255,255,0.14)"),It.addColorStop(1,"rgba(255,255,255,0)"),pt.fillStyle=It,pt.fillRect(0,0,128,128);let _t=new i.CanvasTexture(Et);_t.colorSpace=i.SRGBColorSpace;let C=(rt,j)=>new i.MeshBasicMaterial({color:rt,map:j||null,transparent:!0,opacity:0,toneMapped:!1,depthWrite:!1,blending:i.AdditiveBlending,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),y=C(K,_t),k=C(K),Q=C(K),Z=C(new i.Color("#f1ffe0")),J=new i.Mesh(new i.PlaneGeometry(.2,.2),y),mt=new i.Mesh(new i.RingGeometry(.8,1,48),k);mt.position.z=2e-4;let gt=new i.Mesh(new i.CircleGeometry(.019,32),Q);gt.position.z=4e-4;let bt=new i.Mesh(new i.CircleGeometry(.008,24),Z);bt.position.z=6e-4,nt.add(J,mt,gt,bt),[J,mt,gt,bt].forEach((rt,j)=>{rt.renderOrder=20+j}),w.add(nt);let Kt=[y,k,Q,Z],lt=1,Tt=(rt,j)=>{if(rt=Math.min(1,Math.max(0,rt))*lt,nt.visible=nt.userData.has&&rt>.003,!nt.visible)return;let Gt=j/1.6%1,Ft=Math.exp(-Gt*7);Q.opacity=rt*(.78+.22*Ft),Z.opacity=rt*(.55+.45*Ft),y.opacity=rt*(.32+.6*Ft),J.scale.setScalar(.85+.3*Ft);let ae=.021+Gt*.07;mt.scale.setScalar(ae),k.opacity=rt*Math.pow(1-Gt,2)*.75};Tt(0,0),w.traverse(rt=>{rt.isMesh&&(rt.frustumCulled=!1)});let Ot=[A,p,M];return{group:w,row:t,setOn(rt){A.emissiveIntensity=.62+rt*.5,m.uHoloAmt.value=.1+rt*.14},setHolo(rt){m.uHoloShift.value=rt},setOpacity(rt){lt=rt,Ot.forEach(j=>{j.opacity=rt,j.depthWrite=rt>.98}),Rt.forEach((j,Gt)=>{j.opacity=rt*kt[Gt]}),w.visible=rt>.003},setToggle:X,setPower(rt){g.uPow.value=Math.min(1,Math.max(0,rt))},setLive:Tt,textures:[l,u,f,h,_t],dispose(){[l,u,h,Y,_t].forEach(rt=>rt.dispose()),Ot.forEach(rt=>rt.dispose()),Rt.forEach(rt=>rt.dispose()),Kt.forEach(rt=>rt.dispose())}}}function m0(i){let t=Math.floor(i/365),e=i%365,n=Math.min(11,Math.floor(e/30)),s=e-n*30;return t+"y "+n+"m "+s+"d"}function Us(i,t){let e=new i.Scene;e.background=new i.Color(.055,.058,.05);let n=(a,c,l,u,h,f,A)=>{let m=new i.Mesh(new i.PlaneGeometry(a,c),new i.MeshBasicMaterial({color:new i.Color(A||16777215).multiplyScalar(f),side:i.DoubleSide}));return m.position.set(l,u,h),m.lookAt(0,0,0),e.add(m),m},s=(a,c,l,u,h)=>{let f=new i.Mesh(new i.SphereGeometry(a,16,12),new i.MeshBasicMaterial({color:new i.Color(16777215).multiplyScalar(h)}));f.position.set(c,l,u),e.add(f)};n(9,2.6,0,7,5.5,2.4),n(12,5,0,3,9,.62),n(12,4.5,0,-2,9,.26),n(.5,7,-2.2,.5,8.6,2.6),n(.35,7,2.6,0,8.6,1.8),n(5,2.2,-1.5,-4.5,7,1.4),n(1.6,9,-7,.8,3.5,3.2),n(1.3,8,6.5,-.5,3,2.4),n(7,1,0,5.5,-6,1.6),n(3,3,-4,-5,4,.7,15662048),n(16,16,0,-9,0,.16),n(16,9,0,0,-9,.1),n(9,6,-9,0,-2,.32),n(9,6,9,.5,-1,.28),s(.42,-2.6,3.6,5.4,14),s(.3,3.2,-2.1,5,10),s(.22,1.2,4.4,4.6,12),s(.26,-4.2,-.6,4.4,11),s(.2,4.6,2.2,4.2,12),s(.18,-.8,-3.6,5.2,9);let r=new i.PMREMGenerator(t),o=r.fromScene(e,.035);return r.dispose(),e.traverse(a=>{a.geometry&&a.geometry.dispose(),a.material&&a.material.dispose()}),o.texture}var g0=" .'`,:;-~^\"!i|+<>=?*/\\tlfjrcxzvunoeasYJCLQ0OZmwqpdbkhaB8&%#@$";function x0(i,t,e,n){let s=Math.round(t*n),r=Math.round(e*n),o=Math.round(r*.86)+'px ui-monospace, "SF Mono", SFMono-Regular, Menlo, Consolas, "Roboto Mono", monospace',a=Oe(s,r),c=a.getContext("2d",{willReadFrequently:!0});c.font=o,c.textAlign="center",c.textBaseline="middle";let l=[];for(let d of g0){c.clearRect(0,0,s,r),c.fillStyle="#fff",c.fillText(d,s/2,r/2+r*.04);let p=c.getImageData(0,0,s,r).data,M=0;for(let w=3;w<p.length;w+=4)M+=p[w];l.push([d,M])}l.sort((d,p)=>d[1]-p[1]);let u=l[l.length-1][1]||1,h=24,f=[" "];for(let d=1;d<h;d++){let p=Math.pow(d/(h-1),1.15)*u,M=l[1];for(let w of l)Math.abs(w[1]-p)<Math.abs(M[1]-p)&&f.indexOf(w[0])<0&&(M=w);f.push(M[0])}let A=Oe(s*h,r),m=A.getContext("2d");m.font=o,m.textAlign="center",m.textBaseline="middle",m.fillStyle="#fff",f.forEach((d,p)=>m.fillText(d,p*s+s/2,r/2+r*.04));let g=new i.CanvasTexture(A);return g.minFilter=g.magFilter=i.NearestFilter,g.generateMipmaps=!1,{tex:g,N:h,gw:s,gh:r}}function qn(i,t={}){var a,c,l,u;let e=new i.MeshLambertMaterial({color:(a=t.color)!=null?a:16777215,map:t.map||null,emissive:(c=t.emissive)!=null?c:0,side:(l=t.side)!=null?l:i.FrontSide}),n=t.uniforms||{uReveal:{value:0},uTint:{value:(u=t.tint)!=null?u:0}},s=!!n.uFadeY,r=!!n.uDimY,o=s||r;return e.userData.u=n,e.onBeforeCompile=h=>{var f;Object.assign(h.uniforms,n),o&&(h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
varying float vWY;`).replace("#include <project_vertex>",`#include <project_vertex>
vWY = (modelMatrix * vec4(transformed, 1.0)).y;`)),h.fragmentShader=h.fragmentShader.replace("#include <common>",`#include <common>
uniform float uReveal;
uniform float uTint;`+(s?`
uniform vec2 uFadeY;`:"")+(r?`
uniform vec3 uDimY;`:"")+(o?`
varying float vWY;`:"")).replace("#include <dithering_fragment>",["#include <dithering_fragment>","float lum = dot(gl_FragColor.rgb, vec3(0.299, 0.587, 0.114));","float rim = pow(1.0 - clamp(abs(dot(normalize(normal), normalize(vViewPosition))), 0.0, 1.0), 3.0);","lum = clamp(lum + rim * "+((f=t.rim)!=null?f:.35).toFixed(3)+", 0.0, 1.0);",t.lum||"",r?"lum *= mix(1.0, uDimY.z, smoothstep(uDimY.x, uDimY.y, vWY));":"","float rv = uReveal"+(s?t.fadeBelow?" * smoothstep(uFadeY.x, uFadeY.y, vWY)":" * (1.0 - smoothstep(uFadeY.x, uFadeY.y, vWY))":"")+";","gl_FragColor = vec4(lum, rv, uTint, 1.0);"].join(`
`))},e.customProgramCacheKey=()=>{var h;return"lum"+((h=t.rim)!=null?h:.35)+(s?t.fadeBelow?"b":"f":"")+(r?"d":"")+(t.lum||"")},e}function eu(i,t){let e=new i.Scene;e.add(new i.AmbientLight(16777215,.45));let n=new i.DirectionalLight(16777215,3);n.position.set(-3,5,6),e.add(n);let s=new i.DirectionalLight(16777215,.8);s.position.set(5,-1,4),e.add(s);let r=new i.WebGLRenderTarget(64,64,{type:i.UnsignedByteType,minFilter:i.NearestFilter,magFilter:i.NearestFilter,depthBuffer:!0}),o=null,a={tWorld:{value:r.texture},tAtlas:{value:null},uN:{value:24},uGrid:{value:new i.Vector2(64,64)},uCell:{value:new i.Vector2(6,10)},uRes:{value:new i.Vector2(1,1)},uTime:{value:0},uPack:{value:new i.Vector3(.5,.5,.3)},uGlow:{value:1},uFade:{value:1},uQuiet:{value:new i.Vector3(0,1,0)},uBurn:{value:0}},c=new i.Mesh(new i.PlaneGeometry(2,2),new i.ShaderMaterial({uniforms:a,transparent:!0,depthTest:!1,depthWrite:!1,vertexShader:"void main(){ gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:["precision highp float;","uniform sampler2D tWorld; uniform sampler2D tAtlas; uniform float uN; uniform vec2 uGrid; uniform vec2 uCell; uniform vec2 uRes;","uniform float uTime; uniform vec3 uPack; uniform float uGlow; uniform float uFade; uniform vec3 uQuiet; uniform float uBurn;","float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }","float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h(i), h(i + vec2(1.0, 0.0)), f.x), mix(h(i + vec2(0.0, 1.0)), h(i + vec2(1.0, 1.0)), f.x), f.y); }","void main(){","  vec2 fc = vec2(gl_FragCoord.x, uRes.y - gl_FragCoord.y);","  vec2 cell = floor(fc / uCell);","  vec2 uv = (cell + 0.5) / uGrid; uv.y = 1.0 - uv.y;","  vec4 w = texture2D(tWorld, uv);","  float n = h(cell);","  float vis = smoothstep(n - 0.04, n + 0.04, w.g * 1.06);","  float lum = w.r;","  float tick = floor(uTime * 1.6 + n * 9.0);","  float sh = h(cell + tick * 7.13);","  float j = sh > 0.93 ? 1.0 : (sh < 0.07 ? -1.0 : 0.0);","  lum = smoothstep(0.04, 0.92, lum);","  float fire = 0.0;","  if (uBurn > 0.001) {","    float rb = uGrid.y - cell.y - 0.5, fb = rb / uGrid.y;","    if (fb < 0.55) {","      float y = fb / (0.36 * uBurn);","      float n1 = vn(vec2(cell.x * 0.13, rb * 0.08 - uTime * 1.1)), n2 = vn(vec2(cell.x * 0.29, rb * 0.2 - uTime * 2.1));","      float f = n1 * 0.65 + n2 * 0.35;","      fire = clamp((f - y * 0.8) * 2.2 - 0.3, 0.0, 1.0) * (0.6 + 0.4 * n2) * 0.8;","      float ec = h(vec2(cell.x, 7.0));","      if (ec > 0.95) { float ph = fract(uTime * (0.09 + ec * 0.08) + h(vec2(cell.x, 3.0))); if (abs(rb - ph * 0.38 * uGrid.y) < 0.5) fire = max(fire, 0.6 * (1.0 - ph) * uBurn); }","    }","  }","  lum = max(lum, fire); vis = max(vis, step(0.03, fire));","  float idx = clamp(floor(pow(lum, 0.8) * (uN - 1.0) + 0.5) + (lum > 0.03 ? j : 0.0), 0.0, uN - 1.0);","  vec2 local = fract(fc / uCell);","  float a = texture2D(tAtlas, vec2((idx + local.x) / uN, 1.0 - local.y)).a;","  vec2 sp = vec2(fc.x / uRes.x, fc.y / uRes.y);","  vec2 d = (sp - uPack.xy) * vec2(uRes.x / uRes.y, 1.0);","  float near = exp(-dot(d, d) / (uPack.z * uPack.z)) * uGlow;","  float ang = atan(d.y, d.x);","  vec3 film = 0.5 + 0.5 * cos(6.28318 * (ang * 0.32 + uTime * 0.05 + vec3(0.0, 0.33, 0.67)));","  vec3 base = mix(vec3(0.43, 0.43, 0.44), vec3(0.52, 0.38, 0.33), max(smoothstep(0.7, 0.95, w.b) * vis, fire * 0.8));","  base = mix(base, vec3(0.56, 0.86, 0.3), (1.0 - smoothstep(0.08, 0.2, abs(w.b - 0.5))) * vis * 0.9);","  vec3 col = mix(base, vec3(0.52, 0.72, 0.30), clamp(near * 0.6, 0.0, 0.5));","  col = mix(col, film * 0.6, near * 0.1);","  float quiet = 1.0 - uQuiet.z * (1.0 - smoothstep(uQuiet.x - uQuiet.y, uQuiet.x, fc.y));","  float alpha = a * vis * (0.13 + 0.5 * lum + near * 0.12) * uFade * quiet;","  gl_FragColor = vec4(col * alpha, alpha);","}"].join(`
`),blending:i.CustomBlending,blendSrc:i.OneFactor,blendDst:i.OneMinusSrcAlphaFactor})),l=new i.Scene;l.add(c);let u=new i.OrthographicCamera(-1,1,1,-1,0,1);return c.frustumCulled=!1,{scene:e,setSize(h,f,A,m,g){let d=Math.ceil(h/m),p=Math.ceil(f/g);r.setSize(d,p),a.uGrid.value.set(d,p),a.uCell.value.set(m*A,g*A),a.uRes.value.set(h*A,f*A),o&&o.tex.dispose(),o=x0(i,m,g,A),a.tAtlas.value=o.tex,a.uN.value=o.N},render(h,f,A){a.uTime.value=f,A&&a.uPack.value.set(A.x,A.y,A.r);let m=t.getRenderTarget();t.setRenderTarget(r),t.setClearColor(0,0),t.clear(!0,!0,!1),t.render(e,h),t.setRenderTarget(m),t.render(l,u)},uniforms:a,rt:r,dispose(){r.dispose(),o&&o.tex.dispose(),c.geometry.dispose(),c.material.dispose()}}}var nu={G:{p:"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",i:"AAABAAIAAgABAAMABAACAAUABQACAAMAAwABAAYABgABAAcABQADAAgACAADAAYACQAKAAsACwAKAAwADQALAA4ADgALAAwADwAQABEAEQAQABIAEQATABQAFAATABUAFgAXABgAFwAWABQAGQAaABsAGwAaABMAHAAdAB4AHgAdAB8AIAAhACIAIgAhACMAJAAlACYAJgAlACcAGwATABIAEgATABEAKAApACoAKgApACsAGgAZACwALAAZAC0ALgAvADAALwAuADEAMgAzADQAMwAyADUANgA0ADcANAA2ADIAOAA5ADcANwA5ADYAOgA7ADgAOAA7ADkAPAA9AD4APgA9AD8AQABBAEIAQgBBAEMAKgAFACgAKAAFAAgABwABAB4AHgABABwACQAtAAoACgAtABkADQAOABAAEAAOABIAGQAbAAoACgAbAAwAEgAOABsAGwAOAAwARAAaAEUARQAaACwAGgBEABMAEwBEABUAOABGADoAOgBGAEcASABJAEoASgBJAEMASwBMAE0ATABLAE4ATwBQAFEAUQBQAFIADwAUABYAFAAPABEAUQAfAE8ATwAfAB0AKwBOAEsATgArACkAUwBUAFUAVQBUAFYAVwBYAFkAWQBYAFoAWQBWAFcAVwBWAFQAWwBcAF0AXABeAF8AYABhAGIAYgBhAGMAZABlAGYAZgBlAGcAaABpAGoAagBpAGsAbABoAG0AbQBoAGoAbgBvAHAAcABvAHEAcgBzAHQAdABzAHUAbwBzAHEAcQBzAHIAdgB3AHgAeAB3AHkAdgB4AHoAegB4AHsAfAB9AHQAdAB9AHIAfgB/AIAAgAB/AIEAcACCAG4AbgCCAIMAhACFAIYAhgCFAIcAhACIAIUAhQCIAIkAagBrAIoAigBrAIsAdQBzAIwAjABzAI0AcwBvAI0AjQBvAI4AbwBuAI4AjgBuAI8AgwCQAG4AbgCQAI8AagCKAG0AbQCKAJEAkgCTAJQAlACTAJUAkwCSAJYAlgCSAJcAmACZAJoAmgCZAJsAmgCbAJwAnACbAJ0AngCfAKAAoACfAKEAngCZAJ8AnwCZAJgAogCjAKQApACjAKUApgCnAKMAowCnAKUAqACpAKoAqgCpAKsArACtAKkAqQCtAKsArgCvAKwArACvAK0AsACxAK4ArgCxAK8AsgCiALMAswCiAKQAhwChAIYAhgChAJ8AnACJAJoAmgCJAIgAnwCYAIYAhgCYAIQAmgCIAJgAmACIAIQAdgCSAHcAdwCSAJQAkgB2AJcAlwB2AHoAgQC0AIAAgAC0ALUAcQByALYAtgByAH0AtwC4ALkAuQC4ALoAcAC7AIIAggC7ALwAaQBoAL0AvQBoAL4AbAC/AGgAaAC/AL4AcQC2AHAAcAC2ALsAtAC3ALUAtQC3ALkAwADBAMIAwgDBAMMAwwDBAMQAxADBAMUAvgDBAL0AvQDBAMAAxQDBAL8AvwDBAL4AtACBALYAtgCBALsAtgB9ALQAtAB9ALcAfQB8ALcAtwB8ALgAvAC7AH8AfwC7AIEAxgDFAMcAxwDFAL8AyADJAMAAwADJAL0AygDLAMwAzADLAM0AzgDKAM8AzwDKAMwA0ADRANIA0gDRANMAygDUAMsAywDUANUAygDOANQA1ADOANYA0gDXANAA0ADXANgA2QDaANsA2wDaANwA3QDZAN4A3gDZANsA3wDgAOEA4QDgAOIA4wDkANgA2ADkAOUA5gDnAOgA6ADnAOkA6gDrAOwA7ADrAO0A6gDuAOsA6wDuAO8A5wDmAPAA8ADmAOAA4ADfAPAA8ADfAPEA8gDRAPMA8wDRAPQA0QDQAPQA9ADQAPUA2ADlANAA0ADlAPUA9gD3AOIA4gD3APgA+QD6APsA+wD6APwA+gD5AP0A/QD5AP4A6ADpAP8A/wDpAAABzQABAcwAzAABAQIBAwEBAQQBBAEBAc0A8wD0AAUBBQH0AAYB9AD1AAYBBgH1AAcB9QDlAAcBBwHlAAgB5QDkAAgBCAHkAAkBzAACAc8AzwACAQoB7QAAAewA7AAAAekA7wDuAPEA8QDuAPAA6QDnAOwA7ADnAOoA8ADuAOcA5wDuAOoA2QD5ANoA2gD5APsA/gD5AN0A3QD5ANkAAgEBAQsBCwEBAQwBAQEDAQwBDAEDAQ0BBQEGAQ4BDgEGAQ8BDwEGARABEAEGAQcBEAEHAREBEQEHAQgBEQEIARIBEgEIAQkBCgECARMBEwECAQsB4wDYABQBFAHYANcA1wDSABUBFQHSAPcAFgEXAfoA+gAXAfwAGAHTAPIA8gDTANEA1AAZAdUA1QAZARoBGwEZAdYA1gAZAdQAFgEcARkBGQEcARoBFwEWARsBGwEWARkBHQEeAR8BHwEeARUB4QDiACABIAHiAPgA9wD2ABUBFQH2AB8B0wD4ANIA0gD4APcAGAEgAdMA0wAgAfgAFQEeAdcA1wAeARQBIQEXASIBIgEXARsB4ADmAOIA4gDmAPYA+gD9ABYBFgH9ABwB/wAdAegA6AAdAR8B5gDoAPYA9gDoAB8BIwEkASUBJQEkASYBIwElAScBJwElASgBKQEqASsBKwEqASwBLQEuAS8BLwEuATABLQExAS4BLgExATIBKwEzASkBKQEzATQBNQE2ATMBMwE2ATcBOAE5AToBOgE5ATsBOQE4ATwBPAE4AT0BPgE1ASsBKwE1ATMBPgErAT8BPwErASwBNwE2AUABQAE2AUEBQgFDAUQBRAFDAUUBRgFHAUgBSAFHAUkBQwFKAUUBRQFKAUsBMAFBAS8BLwFBATYBMgExAT8BPwExAT4BNgE1AS8BLwE1AS0BPgExATUBNQExAS0BIwE4ASQBJAE4AToBPQE4AScBJwE4ASMBTAFNAU4BTgFNAU8BUAFMAVEBUQFMAU4BUgFTAVQBVAFTAVUBVgFXAVgBWAFXAVkBWgFWAVsBWwFWAVgBTwFNAVwBXAFNAV0BQgFeAUMBQwFeAV8BYAFhAUIBQgFhAV4BYgFjAWQBZAFjAWUBYgFmAWMBYwFmAWcBZgFHAWcBZwFHAWgBRwFGAWgBaAFGAWkBSgFDAWoBagFDAV8BawFsAW0BbQFsAW4BNAFsASkBKQFsAW8BcAFxAXIBcgFxAXMBdAFwAXUBdQFwAXIBcQFwAXYBdgFwAXcBcAF0AXcBdwF0AXgBeQF6AXsBewF6AW4BbwF8ASkBKQF8ASoBewFuATQBNAFuAWwBbwFsAX0BfQFsAWsBfAFvAX4BfgFvAX0BbQFuAX8BfwFuAXoBgAGBAV4BXgGBAV8BYQGCAV4BXgGCAYABgwGEAWMBYwGEAWUBhQGDAWcBZwGDAWMBhgGFAWgBaAGFAWcBhwGGAWkBaQGGAWgBgQGIAV8BXwGIAWoBdgF3ATwBPAF3ATkBOwE5AXgBeAE5AXcBewE3AXkBeQE3AUABewE0ATcBNwE0ATMBiQGKAYsBiwGKAYwBjQGJAY4BjgGJAYsBjwGQAZEBkQGQAZIBjwGRAZMBkwGRAZQBlQGWAZcBlwGWAZgBmQGaAZsBmwGaAZwBmQGdAZoBmgGdAZ4BnwGgAaEBoQGgAaIBowGkAaUBpQGkAaYBpwGoAaABoAGoAakBqgGrAawBrAGrAa0BrQGrAa4BrgGrAa8BsAGnAZ8BnwGnAaABsAGfAbEBsQGfAbIBqAGzAakBqQGzAbQBtQG2AbcBtwG2AbgBmwGcAagBqAGcAbMBngGdAbEBsQGdAbABqAGnAZsBmwGnAZkBsAGdAacBpwGdAZkBqwGqAY8BjwGqAZABqwGPAa8BrwGPAZMBuQG6AbsBuwG6AbwBvQGyAaEBoQGyAZ8BvgG/Aa0BrQG/AawBwAHBAcIBwgHBAcMBrgHEAa0BrQHEAb4BqQG0AcUBxQG0AcYBoAGpAaIBogGpAcUBxwHIAckByQHIAcoByAHLAcoBygHLAcwByAHHAc0BzQHHAc4BzwHQAdEB0QHQAdIB0wHUAdUB1QHUAdYB1AHTAdcB1wHTAdgB2QHTAdoB2gHTAdUB2wHcAd0B3QHcAd4B3wHgAeEB4QHgAeIBUAHjAUwBTAHjAeQB5QHmAeMB4wHmAeQB5wHoAekB6QHoAeoB6gHrAewB7AHrAe0B7gFNAeQB5AFNAUwBXQFNAe8B7wFNAe4BXQHwAfEB8QHwAfIB8wFWAfQB9AFWAVoBVwFWAfUB9QFWAfMBUgFXAfYB9gFXAfUBUwFSAfcB9wFSAfYB+AH5AfoB+gH5AfsB+wH5AfwB/AH5Af0B3wH+AeAB4AH+Af8BAAIBAv4B/gEBAgICAwLfAQQCBALfAeEBBQIGAgcCBwIGAggCCQIKAgsCCwIKAgwCDQIJAg4CDgIJAgsCDwJnABACEAJnAGUAEQJgABICEgJgAGIAEwIPAhQCFAIPAhACZgBnABUCFQJnABYCZwAPAhYCFgIPAhECDwITAhECEQITAmAAWQBaABcCFwJaABgCGQIaAhsCGwIaAhwCGgIZAlwAXAAZAh0CHgIcAh8CHwIcAhoCFAIgAhMCEwIgAiECYQBgACECIQJgABMCXABbABoCGgJbAB8CNwAiAjgAOAAiAkYAGAA0ADMANAAYABcAPQBSAD8APwBSAFAANAAXADcANwAXACICTQAwAC8AMABNAEwAFQAiAhQAFAAiAhcARQBHAEQARABHAEYAIgIVAEYARgAVAEQAIwIkAiUCJQIkAiYCJQImAmMAYwAmAmIAJwIoAikCKQIoAioCKwIsAi0CLQIsAi4CLwIwAjECMQIwAjICKwIzAjQCNAIzAjUCNgI3AjgCOAI3AjkCOAI6AjYCNgI6AjsCPAI9Aj4CPgI9Aj8CPgJAAjwCPAJAAkECQAJCAkECQQJCAkMCKgJEAkUCRQJEAkYCRwJIAkkCSQJIAkoCSwJHAkwCTAJHAkkCTAJNAksCSwJNAk4CTwJQAlECUQJQAlICUwJPAlQCVAJPAlECLQJVAisCKwJVAjMCVgJGAlcCVwJGAkQCWAJZAgQABABZAgIAWgIAAFkCWQIAAAIAWwJcAl0CXQJcAl4CXwJgAmECYQJgAmICAABaAlsCWwJaAlwCYwIkAGQCZAIkACYAZQJmAmcCZwJmAmgCXQJeAmkCaQJeAmoCHQJrAmwCbAJrAm0CbgJvAnACcAJvAnECcgJhAnMCcwJhAmICdALuAXUCdQLuAeQBdgJ3AngCeAJ3AnkCegJ7AuoB6gF7AusBfAJ6AugB6AF6AuoBfQJ+An8CfwJ+AoACgQLyAYICggLyAfAB9QHzAYMCgwLzAYQChQJkAIYChgJkAGYAhwKIAokCiQKIAooCiwKHAowCjAKHAokCjQKLAo4CjgKLAowCjwKQApECkQKQApICkwKQApQClAKQApUCkAKPApUClQKPApYClwKWApgCmAKWAo8CmQKaApUClQKaApQCmwKZApYClgKZApUCnAKbApcClwKbApYCIwAhAJ0CnQIhAJ4CQgBDAJ8CnwJDAEkAoAIiAKECoQIiACMAQQCiAkMAQwCiAkoAagJyAmkCaQJyAnMCowJIAKECoQJIAEoAoQIjAKMCowIjAJ0CWACkAqUCpQJaAFgApQKmAloAWgCmAhgCFwKnAlkAWQCnAlYAoQJKAKACoAJKAKICqAKpAiEAIQCpAp4CIACqAiEAIQCqAqgCqwI0AqQCpAI0AqUCNAI1AqUCpQI1AqYCFQKsAmYAZgCsAoYCEgJiAK0CrQJiACYCrQImAq4CrgImAiQCEgKvAhECEQKvAhYCrQKwAhICEgKwAq8CsAKtArECsQKtAq4CFQIWArICsgIWAq8CsAKzAq8CrwKzArICswKwArQCtAKwArECtQKyArYCtgKyArMCtgKzArcCtwKzArQCuAK5Ag0CDQK5AgkCugK7ArwCvAK7Ar0CvgK/AsACwAK/AsECwgLDAr4CvgLDAr8CxALFAsYCxgLFAscCyALJAsICwgLJAsMCuwLKAr0CvQLKAssCzAK+As0CzQK+AsACvgLMAsICwgLMAs4CzwI5AtAC0AI5AjcCuwK6AtEC0QK6AtICygK7AtMC0wK7AtECMQIyAtQC1AIyAtUC1gLXAtgC2ALXAtkC1wLaAtkC2QLaAtsC0QLSAtwC3ALSAt0C0wLRAt4C3gLRAtwC3wLVAuAC4ALVAjIC4ALhAt8C3wLhAuIC4wLkAl4AXgBsAuMC2ALZAuUC5QLZAuYC5wLmAtsC2wLmAtkC6ALpAuoC6gLpAusC7ALtAu4C7gLtAu8C8ALxAu8C7wLxAu4C8gLzAvQC9ALzAvUCXwD2AvcC9wL2AvgC+QLkAvoC+gLkAuMC6gLrAvkC+QLrAuQC8gL7AtwC3AL7At4C8ALvAvwC/ALvAv0C/gL9Au0C7QL9Au8C/QL+Av8C/wL+AgAD/AL9AgEDAQP9Av8CAgMDA94B3gEDA90BBAMFA9YB1gEFA9UByQEGA8cBxwEGAwcD1gEIAwQDBAMIAwkDCgMCAwsDCwMCA94BDAMNAw4DDgMNAw8DEAMRAxIDEgMRAxMDFAMVAxYDFgMVAxcDFQMUAwMCAwIUA98BGAMZA8kByQEZAwYD0QEaA88BzwEaAxsDHAMdA9EB0QEdAxoDHgMfAyADIAMfAyEDGgMiAxsDGwMiAyMDHQMkAxoDGgMkAyIDDwMeAyUDJQMeAyADDgMPAyYDJgMPAyUDJwMoAyUDJQMoAyYDEQMpAxMDEwMpAyoDEwMqAysDKwMqAywDEgMTAy0DLQMTAysDLgMvAzADMAMvAzED+wH8ATADMAP8AS4DMgMYA8oBygEYA8kBygHMATIDMgPMATMDNAOaAjUDNQOaApkCNgM1A5sCmwI1A5kCNwM2A5wCnAI2A5sCsgI4AxUCFQI4A6wCsgK1AjgDOAO1AjkDNwM6AzYDNgM6AzsDPAPUAT0DPQPUAdcB1AE8A9YB1gE8AwgDfgJ9Aj4DPgN9Aj8DQAN+AkEDQQN+Aj4DxgLHAkIDQgPHAkMDRAO5AkIDQgO5AsYCRQMJAkQDRAMJArkCCQJFAwoCCgJFA0YDRwN9AkgDSAN9An8CSQNKA0sDSwNKA0wDTQPpAewB7AHpAeoB7AHtAU4DTgPtAU8D7QFJA08DTwNJA0sD6wFQA+0B7QFQA0kDAAIUAwUCBQIUAxYD/gECAv8B/wECAlED/gHfAQACAALfARQDBQIHAgACAAIHAgECBgIFAlIDUgMFAhYDUwNUAz8DPwNUAz4DVQNWA0MDQwNWA0IDQgNWA0QDRANWA1cDRANXA0UDRQNXA1gDRQNYA0YDRgNYA1kDWgNTA1sDWwNTAz8DTwFcA04BTgFcA10DXgNfA1UBVQFfA1QBXwNgA1QBVAFgA1kBYANhA1kBWQFhA1gBYQNiA1gBWAFiA1sBXANPAWMDYwNPAVwBZAO5AWUDZQO5AWYDuQG7AWYDZgO7AWcDaANpA2oDagNpA2sDawNpA2wDbANpA20DbANtA24DbgNtA28DbgNvA3ADcANvA3EDcgNkA3MDcwNkA2UD7AFOA00DTQNOA3QDMQB1A3YDdQMxAC4ANQB3A3gDdwM1ADIAMgB5A3cDeQMyADYANgB6A3kDegM2ADkAegM5AHsDewM5ADsAfAM8AH0DfQM8AD4AQgB+A0AAQAB+A38DfQM+AIADgAM+AGACfgNCAIEDgQNCAJ8CgANgAoIDggNgAl8CgwOEA4UDhQOEA3YChgOHA3MDcwOHA4gDiQNlA4UDhQNlA2YDeAKJA3YCdgKJA4UDeAKKA4kDiQOKA4YDiQOGA2UDZQOGA3MDiwNuA4wDjANuA3AD+wGLA/oB+gGLA4wDjQOOA48DjwOOAzEDagNrA40DjQNrA44DbAOQA2sDawOQA44DkAMwA44DjgMwAzEDkANsA4sDiwNsA24DMAOQA/sB+wGQA4sDkQOSA4wBjAGSA4sBkgOTA4sBiwGTA44BkgORA5QDlAORA5UDkwOSA5YDlgOSA5QDlwOYA5kDmQOYA5oDlwObA5gDmAObA5wDnQOeA58DnwOeA6ADnQOfA7cBtwGfA5gBngOdA6EDoQOdA6IDtwG4AZ0DnQO4AaIDtwGYAbUBtQGYAZYBngOjA6ADoAOjA6QDpQOVA6YDpgOVA5EDowOeA6cDpwOeA6EDwAHCAaQBpAHCAaYBowGlAagDqAOlAakDqgOcA6sDqwOcA5sDrAO6AWQDZAO6AbkBaAOtA2kDaQOtA64DrgOvA2kDaQOvA20DbQOvA28DbwOvA7ADbwOwA3EDcQOwA7EDsgOsA3IDcgOsA2QDXQOAAbMDswOAAYIBtAO1A2sBawG1A30BtQO2A30BfQG2A34BcgFzAbcDtwNzAbgDdQFyAbkDuQNyAbcDugO0A20BbQG0A2sBfwG7A20BbQG7A7oDtQO0A7wDvAO0A70DvAO+A7UDtQO+A7YDRAFFAbgDuANFAbcDRQFLAbcDtwNLAbkDvQO0A0kBSQG0A7oDugO7A0kBSQG7A0gBvQNJAWYBZgFJAUcBvgO8A2QBZAG8A2IBvAO9A2IBYgG9A2YBvwPAA6UApQDAA6QApwDBA6UApQDBA78DwgPDA6sAqwDDA6oArQDEA6sAqwDEA8IDrwDFA60ArQDFA8QDxQOvAMYDxgOvALEAwAPHA6QApADHA7MApQGmAcgDyAOmAckDyAPKA6UBpQHKA6kDiQGXA4oBigGXA5kDiQGNAZcDlwONAZsDyQOmAZcBlwGmAcIByQOXAZ8DnwOXAZgBoAOkA8gDyAOkA8oDyAPJA6ADoAPJA58DwgHDAZcBlwHDAZUBigCLAKIAogCLAKMAiwDLA6MAowDLA6YAjACNAKgAqACNAKkAjQCOAKkAqQCOAKwArACOAK4ArgCOAI8ArgCPALAAsACPAJAAkQCKALIAsgCKAKIAmQC1AJsAmwC1ALkAwgDDAJYAlgDDAJMAkwDDAJUAlQDDAMQAmwC5AJ0AnQC5ALoAoAB+AJ4AngB+AIAAngCAAJkAmQCAALUAzAPNAwwBDAHNAwsBzgPMAw0BDQHMAwwBzwPQAw8BDwHQAw4B0QPPAxABEAHPAw8B0gPRAxEBEQHRAxAB0wPSAxIBEgHSAxEBzQPUAwsBCwHUAxMB2wG/AtwB3AG/AsMCvwLbAcECwQLbAdUDKwO6Ai0DLQO6ArwCLAPSAisDKwPSAroC3QLSAtYD1gPSAiwDKgPXAywDLAPXA9YD3AHYA94B3gHYAwsD2QPaA9sD2wPaA9wD2gPdA9wD3APdA94D3QPfA94D3gPfA+AD3wPhA+AD4APhA+ID4wPkA+UD5QPkA+YD5wPoA+MD4wPoA+QD6QPoA+oD6gPoA+cD6wPsA+0D7QPsA+4D7wPwA/ED8QPwA/ID8wP0A/UD9QP0A/YD9wP4A9wD3AP4A9sD+QP3A94D3gP3A9wD+gP5A+AD4AP5A94D+wP6A+ID4gP6A+AD5QP8A+MD4wP8A/0D/QP+A+MD4wP+A+cD/gP/A+cD5wP/A+oD4gPqA/sD+wPqA/8D7QPuAwAEAATuAwEE8QMCBO8D7wMCBAME9QMEBPMD8wMEBAUE8wMFBAYEBgQFBAcECAQJBAoECgQJBAsEDAQNBCMCIwINBCQC+AP3AwwEDAT3Aw0EDQQOBCQCJAIOBK4C9wP5Aw0EDQT5Aw4E+QP6Aw4EDgT6Aw8EDgQPBK4CrgIPBLEC+gP7Aw8EDwT7AxAEDwQQBLECsQIQBLQCHwMRBCEDIQMRBBIEEQT9AxIEEgT9A/wDEwQRBBQEFAQRBB8D/gP9AxMEEwT9AxEEFQQTBLcCtwITBBQE/wP+AxUEFQT+AxMEtwK0AhUEFQS0AhAE+wP/AxAEEAT/AxUE+AL2AhYEFgT2AhcEAAQBBBcEFwQBBBYE6AIYBOkC6QIYBBkEGAQDBBkEGQQDBAIE7gIaBOwC7AIaBBsEGgQFBBsEGwQFBAQE8QIcBO4C7gIcBBoEBQQaBAcEBwQaBBwE8wIdBPUC9QIdBB4ECgQfBAgECAQfBCAEHwTWAyAEIATWA9cDIQQiBCMEIwQiBCQEJQR2A3UDdgMlBCYEfgMkBH8DfwMkBCIEJAR+AycEJwR+A4EDKAQpBCoEKgQpBCsEKQQsBCsEKwQsBC0ELAQuBC0ELQQuBC8ELgQwBC8ELwQwBDEEMgQzBDQENAQzBDUELAR3A3kDdwMsBCkELgR5A3oDeQMuBCwEMAR6A3sDegMwBC4EMwR8A30DfAMzBDIEKQR4A3cDeAMpBCgEKgQrBDYENgQrBDcEKwQtBDcENwQtBDgELQQvBDgEOAQvBDkELwQxBDkEOQQxBDoENAQ1BDsEOwQ1BDwEPQQhBFUAVQAhBCMEIwQkBD4EPgQkBCcEPwRABEEEQQRABEIEQwQqBEQERAQqBDYEJQRFBCYEJgRFBEYEwgLOAsgCyALOAkcESARJBEoESgRJBEsESQRMBEsESwRMBE0ETgRPBFAEUARPBFEETwRSBFEEUQRSBFMEUgRUBFMEUwRUBFUEVgRXBFgEWARXBFkENwI2AkgESAQ2AkkETARJBDsCOwJJBDYCPQI8Ak4ETgQ8Ak8EUgRPBEECQQJPBDwCVARSBEMCQwJSBEECVwQoAlkEWQQoAicCVwJEAlYEVgREAlcESARaBDcCNwJaBNAC2AJbBNYC1gJbBFwEKgIoAkQCRAIoAlcE4QLgAl0EXQTgAl4ESAJHAi8CLwJHAjACUAJPAlwEXARPAtYCTwJTAtYC1gJTAtcCVQItAl8EXwQtAmAELQIuAmAEYAQuAmEEMAJeBDICMgJeBOACXQReBE4CTgJeBEsCYARhBGIEYgRhBGMEZARiBFYCVgJiBEYCXwRgBGQEZARgBGIESQJKAkACQAJKAkICTAJJAj4CPgJJAkACTQJMAj8CPwJMAj4CUQJSAjgCOAJSAjoCOAI5AlECUQI5AlQCRQJGAmMEYwRGAmIEgQKCAmUEZQSCAmYEzQLAAssCywLAAr0C9AFnBPMB8wFnBIQCPgRTACMEIwRTAFUAaARrAGkEaQRrAGkAyADAAGoEagTAAMIAvwBsAMcAxwBsAGsElgCXAGwEbASXAG0EbABtAGsEawRtAG4EywOLAGgEaASLAGsAbQCRAG4EbgSRAG8EcASUAHEEcQSUAJUAlwB6AG0EbQR6AHsAcgSyAHMEcwSyALMAeQB3AHAEcAR3AJQAaQRpAMkAyQBpAL0AxADFAHQEdATFAMYABAHNAHUEdQTNAMsA/QD+AHYEdgT+AHcEywDVAHUEdQTVAHgEeQTWAHoEegTWAM4AegTOAHsEewTOAM8AfAT7AH0EfQT7APwA/gDdAHcEdwTdAN4AzwAKAXsEewQKAX4E3ADaAHwEfATaAPsAfgQKAX8EfwQKARMB1QAaAXgEeAQaAYAE/AAXAX0EfQQXASEBgAQaAYEEgQQaARwBIgEbAXkEeQQbAdYAHAH9AIEEgQT9AHYEggQ7AYMEgwQ7AXgBPAE9AYQEhAQ9AYUEdQG5A4YEhgS5A4cERAGIBEIBQgGIBGABiQQ6AYIEggQ6ATsBPQEnAYUEhQQnASgBJgEkAYkEiQQkAToBXAFdAYoEigRdAfEBiwRKAYwEjARKAWoBjQRzAY4EjgRzAXEBgwR4AY8EjwR4AXQBjgRxAZAEkARxAXYBjwR0AYYEhgR0AXUBdgE8AZAEkAQ8AYQEigGRBIwBjAGRBJIErgGvAZMEkwSvAZQEqwObA5UElQSbA40BlgSqAZcElwSqAawBrwGTAZQElASTAZQBmASOAZkEmQSOAZMDkgGQAZYElgSQAaoBcgOaBLIDsgOaBJsEnASZA50EnQSZA5oDvwGeBKwBrAGeBJcExAGuAZ8EnwSuAZMEKAOgBCYDJgOgBNkBGwMjA80BzQEjA6EEzwEbA84BzgEbA80BywHIAaEEoQTIAc0B0AHPAaIEogTPAc4BxwEHA84BzgEHA6IEJgPZAQ4DDgPZAdoB0wHZAdgB2AHZAaAEowQSA9UD1QMSAy0D1QPbAaMEowTbAd0BhAOkBHYCdgKkBKUESgNJA6YEpgRJA1ADRgSOAkEEQQSOAqcEUwKoBNcC1wKoBNoCqARTAqkEqQRTAlQCNQSqBDwEPASqBKsErASAAkADQAOAAn4C8AGtBIICggKtBK4ErwSwBLEEkwKSApACRQSNAkYERgSNAo4CkQKSArIEswSwBLQEmAKFApcClwKFAoYCrAKcAoYChgKcApcCtQS2BKoEqgS2BKsE9AL1ArcEtwT1ArgEuQS6BLsEuwS6BB4E9AK3BLwEvQTwAvwCvgQQA6MEowQQAxIDAwO+BN0B3QG+BKMEvwQMA9oB2gEMAw4DBQO/BNUB1QG/BNoBnAKsAjcDNwOsAjgDOAM5AzcDNwM5AzoDRwPABFsDWwPABMEEVAPCBD4DPgPCBEEDwQTDBFsDWwPDBFoDXQOzA04BTgGzA1EBigTEBFwBXAHEBGMDmgRyA4gDiANyA3MDhQNmA4MDgwNmA2cDigPFBIYDhgPFBIcDpgORA5IEkgSRA4wBmQSTA8YExgSTA5YDYwPEBIgBiAHEBMcEhwS5A8gEyAS5A0sByQS4A40EjQS4A3MBiAREAckEyQREAbgDyARLAYsEiwRLAUoBkQSKAZwEnASKAZkDlQSNAZgEmASNAY4BbwSRAHIEcgSRALIAxAB0BJUAlQB0BHEEwgCWAGoEagSWAGwEwQLVA7wCvALVAy0DygTLBMwEzATLBM0EzAS5BMoEygS5BLsE9QIeBLgEuAQeBLoENgQ3BGQAZAA3BGUANwQ4BGUAZQA4BBACOAQ5BBACEAI5BBQCOQQ6BBQCFAI6BCACOwQ8BB4CHgI8BBwCtgTOBKsEqwTOBBsCpwI9BFYAVgA9BFUAcQKnBIwCjAKnBI4CRAQ2BIUChQI2BGQAzwRaBEoEzwRKBNAEqQRUAs8CzwJUAjkCwALBAr0CvQLBArwC0QSRAtIE0gSRArIERATRBEMEQwTRBNIE0QREBJgCmAJEBIUCkQLRBI8CjwLRBJgC0wTUBE0ETQTUBEsESgRLBNAE0ARLBNQE1QTWBFMEUwTWBFEEUARRBNcE1wRRBNYE2ATVBFUEVQTVBFME2QTaBCkCKQLaBCcC2gTbBCcCJwLbBFkE2gTZBHkCeQLZBNwE1QTYBHsCewLYBN0E1gTVBHoCegLVBHsC1wTWBHwCfALWBHoCWARZBN4E3gRZBNsE2wTaBHcCdwLaBHkC0ATUBIACgALUBH8C1ATTBH8CfwLTBEgD3gTbBN8E3wTbBHcCZwTgBIQChALgBOEE4gTjBMQCxALjBMUCzwTQBKwErATQBIACyQLIAuIE4gTIAuMEBALkBAMCAwLkBOUE5AQJA+UE5QQJAwgDDgLmBA0CDQLmBOcE5gQKA+cE5wQKAwsD/AH9AegE6AT9AekEMwPqBDIDMgPqBOsE6wTqBC4DLgPqBC8D6ATrBPwB/AHrBC4DGAMyA+gE6AQyA+sE7AQ8A+0E7QQ8Az0DPAPsBAgDCAPsBOUEAwLlBBUDFQPlBOwE7gS4AucE5wS4Ag0C4QTvBIQChALvBIMC6ATpBBgDGAPpBBkDFQPsBBcDFwPsBO0EmgI0A+EE4QQ0A+8E2APuBAsDCwPuBOcE4ASUAuEE4QSUApoCRwTjBMgCSgRaBEgElALgBJMCsQRlBGYE7wHuAfAE8ATuAXQC8AR0AvEE8QR0AvIE8QTzBPAE8ATzBPQE8gR0AvUE9QR0AnUC9gT3BPgE+AT3BPkE+gT7BPwE/AT7BP0E+wT+BP0E/QT+BP8E8gT1BAAFAAX1BAEFAgUDBfYE9gQDBfcErwRmBAQFZgSvBLEEZgSCAgUFBQWCAq4ELAIrAqsCqwIrAjQCBgUHBQIFAgUHBQMFAQX6BAAFAAX6BPwECAUJBf4E/gQJBf8EiAL2BIoCigL2BPgECgUGBQsFBgUKBQkF/AT9BPEE8QT9BPME8QTyBPwE/ATyBAAFBgWIAgsFCwWIAgwF+QQNBfgE+AQNBYoCDgVlAg8FDwVlAmcCJQBYAicAJwBYAgQAZgJjAmgCaAJjAmQCQAQQBUIEQgQQBREFzgQSBRsCGwISBRkCEgVrAhkCGQJrAh0CDwVnAjEAMQBnAi8AJgAnACsAKwAnACoAHABbAh0AHQBbAl0CJwAEACoAKgAEAAUAYgJgAj8APwBgAj4AAQAAABwAHAAAAFsCPASrBBwCHAKrBBsCZwJoAi8ALwBoAk0AUABPAHMCcwJPAGkCgAMTBX0DfQMTBTMETwAdAGkCaQIdAF0CJgArAGQCZAIrAEsAXAAdAl4AXgAdAmwCJgRGBEIEQgRGBEEEcAJxAokCiQJxAowCPwBQAGICYgJQAHMCTQBoAksASwBoAmQC1ALVAm0CbQLVAmwC1QLfAmwCbALfAuMC8wLyAt0C3QLyAtwCFAUdBBUFFQUdBBYF+gLjAuIC4gLjAt8C+wLyArwEvATyAvQC/wIAA+UC5QIAAxcF5QLmAv8C/wLmAgED5gLnAgEDAQPnAhgFDwURBQ4FDgURBRAFDwV2AxEFdgMPBTEAFQUZBRQFFAUZBRoFygS7BBoFGgW7BBQF3QIWBfMC8wIWBR0EuwQeBBQFFAUeBB0EJgQRBXYDEQUmBEIEMwQTBTUENQQTBaoEggMbBYADgAMbBRMFGwW1BBMFEwW1BKoEHAU/BKcEpwQ/BEEE/AIBA70EvQQBAxgFbwIcBXECcQIcBacEDQVwAooCigJwAokCWwTYAhcFFwXYAuUCXAOBAV0DXQOBAYABhAGDAV4DXgODAV8DgwGFAV8DXwOFAWADhQGGAWADYAOGAWEDhgGHAWEDYQOHAWIDYwOIAVwDXAOIAYEBugGsA5UDlQOsA5QDpQO8AZUDlQO8AboBrgOtA6EDoQOtA6cDrwOuA6IDogOuA6EDuAGwA6IDogOwA68DsQOwA7YBtgGwA7gBsgObBJYDlgObBMYElAOsA5YDlgOsA7IDwAO/A08DTwO/A04DTgO/A3QDdAO/A8EDCALDAwcCBwLDA8IDBwLCAwECAQLCA8QDAQLEAwICAgLEA8UDAgLFA1EDUQPFA8YDHQXHA0wDTAPHA0sDxwPAA0sDSwPAA08DzQPMA1MDUwPMA1QDzAPOA1QDVAPOA8IE0APPA1UDVQPPA1YDVgPPA1cDVwPPA9EDVwPRA1gDWAPRA9IDWAPSA1kDWQPSA9MDwwQeBVoDWgMeBdQD1APNA1oDWgPNA1MDiAHHBGoBagHHBIwExwMdBbMAswAdBXME1AMeBRMBEwEeBX8EHQMcAxQEFAQcA7cC7wGtBF0BXQGtBPAB9ATzBB8FHwXzBCAF/QT/BPME8wT/BCAFCgUgBQkFCQUgBf8ECAUHBQkFCQUHBQYFRwJLAjACMAJLAl4EXwBdAFwAXQBfAPcCxAGfBJoDmgOfBJ0ExAGaA74BvgGaA5gDvwG+AZwDnAO+AZgDngS/AaoDqgO/AZwDxQHGAcABwAHGAcEBpAGiAcABwAGiAcUBoQGiAaMBowGiAaQBowGoA6EBoQGoA70BtwIcA7YCtgIcAyEFHwMkAxQEFAQkAx0D1wMqAyIFIgUqAykD3AHDAtgD2APDAskC4gTuBMkCyQLuBNgDuALuBMQCxALuBOIExALGArgCuALGArkCXgDkAl8AXwDkAusCXwDrAvYC9gLrAukC9gLpAhcEFwTpAhkEAgQABBkEGQQABBcEAgTxAwAEAATxA+0D8QPyA+0D7QPyA+sDVwFSAVkBWQFSAVQBgwIjBfUB9QEjBfYB7wQkBYMCgwIkBSMFJAXvBCUFJQXvBDQDNQMmBTQDNAMmBSUFJgU1AzsDOwM1AzYD0gEhBdEB0QEhBRwDdQLkAScFJwXkAeYBfQJHAz8DPwNHA1sD3wR3AqUEpQR3AnYCigN4AtwE3AR4AnkCdQInBfUE9QQnBSgF9QQoBQEFAQUoBSkFKgX6BCkFKQX6BAEFUAPrAd0E3QTrAXsCKwX7BCoFKgX7BPoELAX+BCsFKwX+BPsELQUIBSwFLAUIBf4ELgUHBS0FLQUHBQgFBwUuBQMFAwUuBS8FAwUvBfcE9wQvBTAF9wQwBfkE+QQwBTEFMQUyBfkE+QQyBQ0FcAINBW4CbgINBTIFKgRDBCgEKARDBDMFNAUzBdIE0gQzBUME0gSyBDQFjQKzBIsChwKLArQEtASLArMErwQEBQwFDAUEBQsFCgUfBSAFHwUKBTUFrQTvAfQE9ATvAfAErQT0BK4ErgT0BB8FNQUFBR8FHwUFBa4ENQULBQQFCwU1BQoFZgQFBQQFBAUFBTUFtAQMBYcChwIMBYgCDAW0BK8ErwS0BLAEiAIGBfYE9gQGBQIFJQMgAycDJwMgAyIF1wMiBSEDIQMiBSADIQMSBNcD1wMSBCAEEgT8AyAEIAT8AwgECQQIBOUD5QMIBPwD5QPmAwkECQTmAzYFDQM3BQ8DDwM3BR4DHwMeAyQDJAMeAzcFFgXdAh8EHwTdAtYDFQUWBQoECgQWBR8ECgQLBBUFFQULBBkF4QPpA+ID4gPpA+oD9APzAzgFOAXzAwYEOQULBDYFNgULBAkEOgUaBTsFOwUaBRkFywTKBDoFOgXKBBoFOwUZBTkFOQUZBQsEPAU9BT4FPgU9BT8FPQVABT8FPwVABUEFQAVCBUEFQgVDBUEFQwVEBUEFQQVEBUUFRAVGBUUFRQVGBUcFRgVIBUcFSAVJBUcFRwVJBUoFSQVLBUoFSwVMBUoFTAVNBUoFSgVNBU4FTQVPBU4F9gH5AfcB9wH5AfgB+QH2Af0B/QH2ASMF/QEjBekE6QQjBSQF4gGPA+EB4QGPAzEDBALhAS8DLwPhATEDLwPqBAQCBALqBOQEDAJSAwsCCwJSAxYDDgILAhcDFwMLAhYDFwPtBA4CDgLtBOYEigPmAcUExQTmAeUB5gGKAycFJwWKA9wEJwXcBCgFKAXcBNkEKAXZBCkFKQXZBCkCpASmBKUEpQSmBFAD3QTfBFADUAPfBKUE2ATeBN0E3QTeBN8EVQRYBNgE2ARYBN4ERwPoAcAEwAToAecBSAN8AkcDRwN8AugB0wTXBEgDSAPXBHwCTQRQBNME0wRQBNcECQPkBDMDMwPkBOoEBAMJA8wBzAEJAzMDCgPmBD0DPQPmBO0EAgMKA9cB1wEKAz0D6QQkBRkDGQMkBSUFGQMlBQYDBgMlBSYFBgMmBQcDBwMmBTsDBwM7A6IEogQ7AzoDOQPQAToDOgPQAaIE0AE5A9IB0gE5A7UCtgIhBbUCtQIhBdIBBQMEA8sBywEEA8wBoQS/BMsBywG/BAUDIwMMA6EEoQQMA78EIgMNAyMDIwMNAwwDJAM3BSIDIgM3BQ0DAwMCA9gB2AECA9cBvgQDA6AEoAQDA9gBoAQoA74EvgQoAxADEQMQAycDJwMQAygDIgUpAycDJwMpAxEDTAROBE0ETQROBFAEOwI9AkwETAQ9Ak4EPQI7Aj8CPwI7AjoCUgJNAjoCOgJNAj8CTQJSAk4CTgJSAlACXARdBFACUAJdBE4CWwThAlwEXAThAl0E4QJbBOIC4gJbBBcFAAP6AhcFFwX6AuIC/gL5AgADAAP5AvoC7QLqAv4C/gLqAvkC7QLsAuoC6gLsAugCGAToAhsEGwToAuwCGwQEBBgEGAQEBAME7wMDBPUD9QMDBAQE9QP2A+8D7wP2A/ADRQIrBSoCKgIrBSoFYwQsBUUCRQIsBSsFYQQtBWMEYwQtBSwFLgIuBWEEYQQuBS0FLgUuAi8FLwUuAiwCLwUsAjAFMAUsAqsCMAWrAjEFMQWrAqQCMgUxBVgAWAAxBaQCbgIyBVcAVwAyBVgAbwJuAlQAVABuAlcAHAVvAlMAUwBvAlQAPwQcBT4EPgQcBVMAQAQ/BCcEJwQ/BD4EJwSBA0AEQASBAxAFDgUQBZ8CnwIQBYEDZQIOBUkASQAOBZ8CSQBIAGUCZQJIAGYCSACjAmYCZgKjAmMCJABjAp0CnQJjAqMCJQAkAJ4CngIkAJ0CngKpAiUAJQCpAlgCqAJZAqkCqQJZAlgCqgJaAqgCqAJaAlkCWgKqAlwCXAKqAiAAXAIgAF4CXgIgACIAXgIiAGoCagIiAKACcgJqAqICogJqAqACYQJyAkEAQQByAqICQQBAAGECYQJAAF8CggNfAn8DfwNfAkAAzgS2BKcCpwK2BD0EawIYAm0CbQIYAqYCMQIzAi8CLwIzAlUCVARWBFUEVQRWBFgEQwJXAlQEVARXAlYEQgJWAkMCQwJWAlcCSgJkBEICQgJkBFYCSAJfBEoCSgJfBGQELwJVAkgCSAJVAl8EMwIxAjUCNQIxAtQCbQKmAtQC1AKmAjUCFwIYAhIFEgUYAmsCpwIXAs4EzgQXAhIFIQQ9BLUEtQQ9BLYEIgQhBBsFGwUhBLUEfwMiBIIDggMiBBsFKQUpAioFKgUpAioC",min:[-.5843,-2.77557,-2.2175],max:[2.6298,.47075,.74772],reach:[2.44722,-2.30952,-.40889]},T:{p:"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",i:"AAABAAIAAQADAAIABAAFAAEABQADAAEAAwAGAAIABgAHAAIABQAIAAMACAAGAAMACQAKAAsACgAMAAsADQAOAAoADgAMAAoADwAQABEAEAASABEAEAATABQAEwAVABQAFgAXABgAGAATABYAGQAaABsAGgAUABsAHAAdAB4AHQAfAB4AIAAhACIAIQAjACIAJAAlACYAJQAnACYAGgASABQAEgAQABQAKAApACoAKQArACoAGwAsABkALAAtABkALgAvADAAMAAxAC4AMgAzADQANAA1ADIANgA3ADMAMwAyADYAOAA3ADkANwA2ADkAOgA4ADsAOAA5ADsAPAA9AD4APQA/AD4AQABBAEIAQQBDAEIAKQAoAAUAKAAIAAUABwAdAAIAHQAcAAIACQALAC0ACwAZAC0ADQARAA4AEQASAA4AGQALABoACwAMABoAEgAaAA4AGgAMAA4ARABFABsARQAsABsAGwAUAEQAFAAVAEQAOAA6AEYAOgBHAEYASABJAEoASQBDAEoASwBMAE0ATQBOAEsATwBQAFEAUABSAFEADwAWABMAEwAQAA8AUABPAB8ATwAeAB8AKwBLAE4ATgAqACsAUwBUAFUAVABWAFUAVwBYAFkAWABaAFkAWABXAFYAVwBVAFYAWwBcAF0AXQBeAF8AYABhAGIAYQBjAGIAZABlAGYAZQBnAGYAaABpAGoAaQBrAGoAbABtAGgAbQBpAGgAbgBvAHAAbwBxAHAAcgBzAHQAcwB1AHQAcABxAHQAcQByAHQAdgB3AHgAdwB5AHgAdgB6AHcAegB7AHcAfABzAH0AcwByAH0AfgB/AIAAfwCBAIAAbwBuAIIAbgCDAIIAhACFAIYAhQCHAIYAhACGAIgAhgCJAIgAaQCKAGsAigCLAGsAdQCMAHQAjACNAHQAdACNAHAAjQCOAHAAcACOAG4AjgCPAG4AgwBuAJAAbgCPAJAAaQBtAIoAbQCRAIoAkgCTAJQAkwCVAJQAlACWAJIAlgCXAJIAmACZAJoAmQCbAJoAmQCcAJsAnACdAJsAngCfAKAAnwChAKAAngCgAJoAoACYAJoAogCjAKQAowClAKQApgCkAKcApAClAKcAqACpAKoAqQCrAKoArACqAK0AqgCrAK0ArgCsAK8ArACtAK8AsACuALEArgCvALEAsgCzAKIAswCjAKIAhwCFAKEAhQCgAKEAnACZAIkAmQCIAIkAoACFAJgAhQCEAJgAmQCYAIgAmACEAIgAdgB4AJIAeACTAJIAkgCXAHYAlwB6AHYAgQB/ALQAfwC1ALQAcQC2AHIAtgB9AHIAtwC4ALkAuAC6ALkAbwCCALsAggC8ALsAagC9AGgAvQC+AGgAbABoAL8AaAC+AL8AcQBvALYAbwC7ALYAtAC1ALcAtQC4ALcAwADBAMIAwQDDAMIAwwDEAMIAxADFAMIAvgC9AMIAvQDAAMIAxQC/AMIAvwC+AMIAtAC2AIEAtgC7AIEAtgC0AH0AtAC3AH0AfQC3AHwAtwC5AHwAvACAALsAgACBALsAxgDHAMUAxwC/AMUAyADAAMkAwAC9AMkAygDLAMwAywDNAMwAzgDPAMoAzwDLAMoA0ADRANIA0QDTANIAygDMANQAzADVANQAygDUAM4A1ADWAM4A0QDQANcA0ADYANcA2QDaANsA2gDcANsA3QDeANkA3gDaANkA3wDgAOEA4ADiAOEA4wDYAOQA2ADlAOQA5gDnAOgA5wDpAOgA6gDrAOwA6wDtAOwA6gDsAO4A7ADvAO4A6ADwAOYA8ADhAOYA4QDwAN8A8ADxAN8A8gDzANIA8wD0ANIA0gD0ANAA9AD1ANAA2ADQAOUA0AD1AOUA9gDiAPcA4gD4APcA+QD6APsA+gD8APsA+wD9APkA/QD+APkA5wD/AOkA/wAAAekAzQDLAAEBywACAQEBAwEEAQEBBAHNAAEB8wAFAfQABQEGAfQA9AAGAfUABgEHAfUA9QAHAeUABwEIAeUA5QAIAeQACAEJAeQAywDPAAIBzwAKAQIB7QDrAAAB6wDpAAAB7wDxAO4A8QDwAO4A6QDrAOgA6wDqAOgA8ADoAO4A6ADqAO4A2QDbAPkA2wD6APkA/gDdAPkA3QDZAPkAAgELAQEBCwEMAQEBAQEMAQMBDAENAQMBBQEOAQYBDgEPAQYBDwEQAQYBEAEHAQYBEAERAQcBEQEIAQcBEQESAQgBEgEJAQgBCgETAQIBEwELAQIB4wAUAdgAFAHXANgA1wAVAdEAFQH3ANEAFgH7ABcB+wD8ABcBGAHyANMA8gDSANMA1ADVABkB1QAaARkBGwHWABkB1gDUABkBFgEZARwBGQEaARwBFwEbARYBGwEZARYBHQEeAR8BHgEVAR8B4AAgAeIAIAH4AOIA9wAVAfYAFQEeAfYA0wDRAPgA0QD3APgAGAHTACAB0wD4ACABFQHXAB8B1wAUAR8BIQEiARcBIgEbARcB4QDiAOYA4gD2AOYA+wAWAf0AFgEcAf0A/wDnAB0B5wAeAR0B5gD2AOcA9gAeAecAIwEkASUBJAEmASUBIwEnASQBJwEoASQBKQEqASsBKgEsASsBLQEuAS8BLgEwAS8BLQEvATEBLwEyATEBKgEpATMBKQE0ATMBNQEzATYBMwE3ATYBOAE5AToBOQE7AToBOgE8ATgBPAE9ATgBPgEqATUBKgEzATUBPgE/ASoBPwEsASoBNwFAATYBQAFBATYBQgFDAUQBQwFFAUQBRgFHAUgBRwFJAUgBRAFFAUoBRQFLAUoBMAEuAUEBLgE2AUEBMgE/ATEBPwE+ATEBNgEuATUBLgEtATUBPgE1ATEBNQEtATEBIwElATgBJQE5ATgBPQEnATgBJwEjATgBTAFNAU4BTQFPAU4BUAFRAUwBUQFNAUwBUgFTAVQBUwFVAVQBVgFXAVgBVwFZAVgBWgFbAVYBWwFXAVYBTwFcAU4BXAFdAU4BQgFEAV4BRAFfAV4BYAFCAWEBQgFeAWEBYgFjAWQBYwFlAWQBYgFkAWYBZAFnAWYBZgFnAUgBZwFoAUgBSAFoAUYBaAFpAUYBSgFqAUQBagFfAUQBawFsAW0BbAFuAW0BNAEpAW0BKQFvAW0BcAFxAXIBcQFzAXIBdAF1AXABdQFxAXABcgF2AXABdgF3AXABcAF3AXQBdwF4AXQBeQF6AXsBegFuAXsBbwEpAXwBKQErAXwBegE0AW4BNAFtAW4BbwF9AW0BfQFrAW0BfAF+AW8BfgF9AW8BbAF/AW4BfwF7AW4BgAFeAYEBXgFfAYEBYQFeAYIBXgGAAYIBgwFkAYQBZAFlAYQBhQFnAYMBZwFkAYMBhgFoAYUBaAFnAYUBhwFpAYYBaQFoAYYBgQFfAYgBXwFqAYgBdgE8AXcBPAE6AXcBOwF4AToBeAF3AToBegF5ATcBeQFAATcBegE3ATQBNwEzATQBiQGKAYsBigGMAYsBjQGOAYkBjgGKAYkBjwGQAZEBkAGSAZEBjwGTAZABkwGUAZABlQGWAZcBlgGYAZcBmQGaAZsBmgGcAZsBmQGbAZ0BmwGeAZ0BnwGgAaEBoAGiAaEBowGkAaUBpAGmAaUBpwGhAagBoQGpAagBqgGrAawBqwGtAawBrQGuAawBrgGvAawBsAGfAacBnwGhAacBsAGxAZ8BsQGyAZ8BqAGpAbMBqQG0AbMBtQG2AbcBtgG4AbcBmgGoAZwBqAGzAZwBngGxAZ0BsQGwAZ0BqAGaAacBmgGZAacBsAGnAZ0BpwGZAZ0BrAGPAaoBjwGRAaoBrAGvAY8BrwGTAY8BuQG6AbsBugG8AbsBvQGgAbIBoAGfAbIBvgGtAb8BrQGrAb8BwAHBAcIBwQHDAcIBrgGtAcQBrQG+AcQBqQHFAbQBxQHGAbQBoQGiAakBogHFAakBxwHIAckByAHKAckByQHKAcsBygHMAcsByQHNAccBzQHOAccBzwHQAdEB0AHSAdEB0wHUAdUB1AHWAdUB1QHXAdMB1wHYAdMB2QHaAdMB2gHUAdMB2wHcAd0B3AHeAd0B3wHgAeEB4AHiAeEBUAFMAeMBTAHkAeMB5QHjAeYB4wHkAeYB5wHoAekB6AHqAekB6gHrAewB6wHtAewB7gHkAU4B5AFMAU4BXQHvAU4B7wHuAU4BXQHwAfEB8AHyAfEB8wH0AVYB9AFaAVYBWAH1AVYB9QHzAVYBUgH2AVgB9gH1AVgBVAH3AVIB9wH2AVIB+AH5AfoB+QH7AfoB+wH8AfoB/AH9AfoB3wHhAf4B4QH/Af4BAAL+AQEC/gECAgECAwIEAt8BBALgAd8BBQIGAgcCBgIIAgcCCQIKAgsCCgIMAgsCDQIOAgkCDgIKAgkCDwIQAmcAEAJmAGcAEQISAmAAEgJhAGAAEwIUAg8CFAIQAg8CZQAVAmcAFQIWAmcAZwAWAg8CFgIRAg8CDwIRAhMCEQJgABMCWAAXAloAFwIYAloAGQIaAhsCGgIcAhsCGwJdABkCXQAdAhkCHgIfAhwCHwIbAhwCFAITAiACEwIhAiACYgAhAmAAIQITAmAAXQAbAlsAGwIfAlsANwA4ACICOABGACICFwA0ADMAMwAYABcAPgA/AFIAPwBRAFIAMwA3ABgANwAiAhgATAAwAC8ALwBNAEwAFQATACICEwAYACICRQBEAEcARABGAEcAIgJGABUARgBEABUAIwIkAiUCJAImAiUCJAJjACYCYwBhACYCJwIoAikCKAIqAikCKwIsAi0CLAIuAi0CLwIwAjECMAIyAjECKwIzAjQCMwI1AjQCNgI3AjgCNwI5AjgCNwI2AjoCNgI7AjoCPAI9Aj4CPQI/Aj4CPQI8AkACPAJBAkACQAJBAkICQQJDAkICKgJEAkUCRAJGAkUCRwJIAkkCSAJKAkkCSwJMAkcCTAJIAkcCTAJLAk0CSwJOAk0CTwJQAlECUAJSAlECUwJUAk8CVAJQAk8CLAIrAlUCKwI0AlUCVgJXAkYCVwJFAkYCWAIEAFkCBAABAFkCWgJZAgAAWQIBAAAAWwJcAl0CXAJeAl0CXwJgAmECYAJiAmECAABbAloCWwJdAloCYwJkAiQAZAIlACQAZQJmAmcCZgJoAmcCXAJpAl4CaQJqAl4CHQJrAmwCawJtAmwCbgJvAnACbwJxAnACcgJzAmACcwJiAmACdAJ1Au4BdQLkAe4BdgJ3AngCdwJ5AngCegLqAXsC6gHsAXsCfALpAXoC6QHqAXoCfQJ+An8CfgKAAn8CgQKCAvIBggLxAfIB9QGDAvMBgwKEAvMBhQKGAmQAhgJlAGQAhwKIAokCiAKKAokCiwKMAocCjAKIAocCjQKOAosCjgKMAosCjwKQApECkAKSApECkwKUApEClAKVApECkQKVAo8ClQKWAo8ClwKYApYCmAKPApYCmQKVApoClQKUApoCmwKWApkClgKVApkCnAKXApsClwKWApsCIwCdAiIAnQKeAiIAQQCfAkMAnwJKAEMAoAKhAiEAoQIjACEAQgBDAKICQwBJAKICagJpAnICaQJzAnICowKhAkgAoQJJAEgAoQKjAiMAowKdAiMAWQCkAqUCpAJZAFoApAJaAKYCWgAYAqYCFwJYAKcCWABWAKcCoQKgAkkAoAKiAkkAqAIiAKkCIgCeAqkCIAAiAKoCIgCoAqoCqwKlAjMCpQKkAjMCMwKkAjUCpAKmAjUCFQJlAKwCZQCGAqwCEgKtAmEArQImAmEArQKuAiYCrgIlAiYCEgIRAq8CEQIWAq8CrQISArACEgKvArACsAKxAq0CsQKuAq0CFQKyAhYCsgKvAhYCsAKvArMCrwKyArMCswK0ArACtAKxArACtQK2ArICtgKzArICtgK3ArMCtwK0ArMCuAINArkCDQIJArkCugK7ArwCuwK9ArwCvgK/AsACvwLBAsACwgK+AsMCvgLAAsMCxALFAsYCxQLHAsYCyALCAskCwgLDAskCvAK9AsoCvQLLAsoCzALNAr4CzQK/Ar4CvgLCAswCwgLOAswCzwLQAjkC0AI4AjkCvALRAroC0QLSAroCygLTArwC0wLRArwCMALUAjIC1ALVAjIC1gLXAtgC1wLZAtgC2ALZAtoC2QLbAtoC0QLcAtIC3ALdAtIC0wLeAtEC3gLcAtEC3wLgAtUC4AIyAtUC4ALfAuEC3wLiAuEC4wJfAOQCXwDjAmsC1wLlAtkC5QLmAtkC5wLbAuYC2wLZAuYC6ALpAuoC6QLrAuoC7ALtAu4C7QLvAu4C8ALvAvEC7wLtAvEC8gLzAvQC8wL1AvQCXgD2AvcC9gL4AvcC+QL6AuQC+gLjAuQC6QL5AusC+QLkAusC8gLcAvsC3ALeAvsC8AL8Au8C/AL9Au8C/gLuAv0C7gLvAv0C/QL/Av4C/wIAA/4C/AIBA/0CAQP/Av0CAgPeAQMD3gHcAQMDBAPWAQUD1gHUAQUDyAHHAQYDxwEHAwYD1gEEAwgDBAMJAwgDCgMLAwIDCwPeAQIDDAMNAw4DDQMPAw4DEAMRAxIDEQMTAxIDFAMVAxYDFQMXAxYDFgMDAhQDAwLfARQDGAPIARkDyAEGAxkD0AHPARoDzwEbAxoDHAPQAR0D0AEaAx0DHgMfAyADHwMhAyADGgMbAyIDGwMjAyIDHQMaAyQDGgMiAyQDDwMlAx4DJQMfAx4DDQMmAw8DJgMlAw8DJwMlAygDJQMmAygDEgMTAykDEwMqAykDEwMrAyoDKwMsAyoDEQMtAxMDLQMrAxMDLgMvAzADLwMxAzAD+wEvA/wBLwMuA/wBMgPKARgDygHIARgDygEyA8wBMgMzA8wBNAM1A5oCNQOZApoCNgObAjUDmwKZAjUDNwOcAjYDnAKbAjYDsgIVAjgDFQKsAjgDsgI4A7UCOAM5A7UCNwM2AzoDNgM7AzoDPAM9A9UBPQPXAdUB1QHWATwD1gEIAzwDfwI+A30CPgM/A30CQANBA38CQQM+A38CxQJCA8cCQgNDA8cCRANCA7kCQgPFArkCRQNEAwkCRAO5AgkCCQILAkUDCwJGA0UDRwNIA30CSAN+An0CSQNKA0sDSgNMA0sDTQPrAegB6wHqAegB6wFOA+0BTgNPA+0B7QFPA0kDTwNKA0kD7AHtAVAD7QFJA1ADAAIFAhQDBQIVAxQD/gH/AQIC/wFRAwIC/gEAAt8BAAIUA98BBQIAAgYCAAIBAgYCBwJSAwUCUgMVAwUCUwM/A1QDPwM+A1QDVQNDA1YDQwNCA1YDQgNEA1YDRANXA1YDRANFA1cDRQNYA1cDRQNGA1gDRgNZA1gDWgNbA1MDWwM/A1MDTwFNAVwDTQFdA1wDXgNVAV8DVQFTAV8DXwNTAWADUwFZAWADYANZAWEDWQFXAWEDYQNXAWIDVwFbAWIDXANjA08BYwNcAU8BZANlA7kBZQNmA7kBuQFmA7oBZgNnA7oBaANpA2oDaQNrA2oDawNsA2oDbANtA2oDbANuA20DbgNvA20DbgNwA28DcANxA28DcgNzA2QDcwNlA2QD6wFNA04DTQN0A04DMQB1A3YDdgMuADEANQB3A3gDeAMyADUAMgB4A3kDeQM2ADIANgB5A3oDegM5ADYAegN7AzkAewM7ADkAfAN9AzwAfQM9ADwAQQBAAH4DQAB/A34DfQOAAz0AgANhAj0AfgOBA0EAgQOfAkEAgAOCA2ECggNfAmECgwOEA4UDhAN2AoUDhgNzA4cDcwOIA4cDiQOEA2UDhANmA2UDdwJ2AokDdgKEA4kDdwKJA4oDiQOGA4oDiQNlA4YDZQNzA4YDiwOMA24DjANwA24D+wH5AYsD+QGMA4sDjQOOA48DjgMxA48DaQONA2sDjQOPA2sDbANrA5ADawOPA5ADkAOPAy8DjwMxAy8DkAOLA2wDiwNuA2wDLwP7AZAD+wGLA5ADkQOMAZIDjAGKAZIDkgOKAZMDigGOAZMDkgOUA5EDlAOVA5EDkwOWA5IDlgOUA5IDlwOYA5kDmAOaA5kDlwOZA5sDmQOcA5sDnQOeA58DngOgA58DnQO2AZ4DtgGYAZ4DnwOhA50DoQOiA50DtgGdA7gBnQOiA7gBtgG1AZgBtQGXAZgBnwOgA6MDoAOkA6MDpQOmA5UDpgORA5UDowOnA58DpwOhA58DwAGlAcEBpQGmAcEBowGoA6QBqAOpA6QBqgOrA5wDqwObA5wDrANkA7sBZAO5AbsBaANqA60DagOuA60DrgNqA68DagNtA68DbQNvA68DbwOwA68DbwNxA7ADcQOxA7ADsgNyA6wDcgNkA6wDXQOzA4ABswOCAYABtANrAbUDawF9AbUDtQN9AbYDfQF+AbYDcQG3A3MBtwO4A3MBdQG5A3EBuQO3A3EBugNsAbQDbAFrAbQDfwFsAbsDbAG6A7sDtQO8A7QDvAO9A7QDvAO1A74DtQO2A74DQwG4A0UBuAO3A0UBRQG3A0sBtwO5A0sBvQNJAbQDSQG6A7QDugNJAbsDSQFHAbsDvQNmAUkBZgFIAUkBvgNjAbwDYwFiAbwDvANiAb0DYgFmAb0DvwOlAMADpQCjAMADpwClAMEDpQC/A8EDwgOrAMMDqwCpAMMDrQCrAMQDqwDCA8QDrwCtAMUDrQDEA8UDxQPGA68AxgOxAK8AwAOjAMcDowCzAMcDpAHIA6YByAPJA6YByAOkAcoDpAGpA8oDiQGLAZcDiwGYA5cDiQGXA40BlwObA40ByQOWAaYBlgHBAaYByQOeA5YBngOYAZYBoAPIA6QDyAPKA6QDyAOgA8kDoAOeA8kDwQGWAcMBlgGVAcMBigCiAIsAogCkAIsAiwCkAMsDpACmAMsDjACoAI0AqACqAI0AjQCqAI4AqgCsAI4ArACuAI4ArgCPAI4ArgCwAI8AsACQAI8AkQCyAIoAsgCiAIoAmgCbALUAmwC4ALUAwQCWAMMAlgCUAMMAlACVAMMAlQDEAMMAmwCdALgAnQC6ALgAnwCeAH4AngB/AH4AngCaAH8AmgC1AH8AzAMMAc0DDAELAc0DzgMNAcwDDQEMAcwDzwMPAdADDwEOAdAD0QMQAc8DEAEPAc8D0gMRAdEDEQEQAdED0wMSAdIDEgERAdIDzQMLAdQDCwETAdQD2wHdAcAC3QHDAsACwALBAtsBwQLVA9sBKwMtA7oCLQO7AroCLAMrA9ICKwO6AtIC3QLWA9IC1gMsA9ICKgMsA9cDLAPWA9cD3QHeAdgD3gELA9gD2QPaA9sD2gPcA9sD2wPcA90D3APeA90D3QPeA98D3gPgA98D3wPgA+ED4APiA+ED4wPkA+UD5APmA+UD5wPjA+gD4wPlA+gD6QPqA+gD6gPnA+gD6wPsA+0D7APuA+0D7wPwA/ED8APyA/ED8wP0A/UD9AP2A/UD9wPcA/gD3APaA/gD+QPeA/cD3gPcA/cD+gPgA/kD4APeA/kD+wPiA/oD4gPgA/oD5APjA/wD4wP9A/wD/QPjA/4D4wPnA/4D/gPnA/8D5wPqA/8D4gP7A+oD+wP/A+oD7AMABO4DAAQBBO4D8APvAwIE7wMDBAIE9APzAwQE8wMFBAQE8wMGBAUEBgQHBAUECAQJBAoECQQLBAoEDAQjAg0EIwIlAg0E+AMMBPcDDAQNBPcDDQQlAg4EJQKuAg4E9wMNBPkDDQQOBPkD+QMOBPoDDgQPBPoDDgSuAg8ErgKxAg8E+gMPBPsDDwQQBPsDDwSxAhAEsQK0AhAEIAMhAxEEIQMSBBEEEQQSBP0DEgT8A/0DEwQUBBEEFAQgAxEE/gMTBP0DEwQRBP0DFQS3AhMEtwIUBBME/wMVBP4DFQQTBP4DtwIVBLQCFQQQBLQC+wMQBP8DEAQVBP8D+AIWBPcCFgQXBPcCAAQXBAEEFwQWBAEE6ALqAhgE6gIZBBgEGAQZBAMEGQQCBAME7QLsAhoE7AIbBBoEGgQbBAUEGwQEBAUE8QLtAhwE7QIaBBwEBQQHBBoEBwQcBBoE9AL1Ah0E9QIeBB0ECQQIBB8ECAQgBB8EHwQgBNYDIATXA9YDIQQiBCMEIgQkBCMEJQR2A3UDdQMmBCUEfgN/AyQEfwMjBCQEJAQnBH4DJwSBA34DKAQpBCoEKQQrBCoEKgQrBCwEKwQtBCwELAQtBC4ELQQvBC4ELgQvBDAELwQxBDAEMgQzBDQEMwQ1BDQELAR5A3gDeAMqBCwELgR6A3kDeQMsBC4EMAR7A3oDegMuBDAENAR9A3wDfAMyBDQEKgR4A3cDdwMoBCoEKQQ2BCsENgQ3BCsEKwQ3BC0ENwQ4BC0ELQQ4BC8EOAQ5BC8ELwQ5BDEEOQQ6BDEEMwQ7BDUEOwQ8BDUEPQRUACEEVAAiBCEEIgQ+BCQEPgQnBCQEPwRABEEEQARCBEEEQwREBCkERAQ2BCkEJQQmBEUEJgRGBEUEwgLIAs4CyAJHBM4CSARJBEoESQRLBEoESgRLBEwESwRNBEwETgRPBFAETwRRBFAEUARRBFIEUQRTBFIEUgRTBFQEUwRVBFQEVgRXBFgEVwRZBFgEOAJIBDYCSARKBDYCTAQ7AkoEOwI2AkoEPgJOBDwCTgRQBDwCUgRBAlAEQQI8AlAEVARDAlIEQwJBAlIEWARZBCkCWQQnAikCVwJWBEUCVgRYBEUCSAQ4AloEOALQAloE1wLWAlsE1gJcBFsEKgJFAikCRQJYBCkC4QJdBOACXQReBOACSQIvAkcCLwIxAkcCUQJcBE8CXATWAk8CTwLWAlMC1gLYAlMCVQJfBCwCXwRgBCwCLAJgBC4CYARhBC4CMQIyAl4EMgLgAl4EXQROAl4ETgJLAl4EYARiBGEEYgRjBGEEZARWAmIEVgJGAmIEXwRkBGAEZARiBGAESAJAAkoCQAJCAkoCTAI9AkgCPQJAAkgCTQI/AkwCPwI9AkwCUAI3AlICNwI6AlICNwJQAjkCUAJUAjkCRAJjBEYCYwRiBEYCgQJlBIICZQRmBIICzQLLAr8CywK9Ar8C9AHzAWcE8wGEAmcEPgQiBFMAIgRUAFMAaARpBGsAaQRqAGsAyABqBMAAagTBAMAAvwDHAGwAxwBrBGwAlgBsBJcAbARtBJcAbABrBG0AawRuBG0AywNoBIsAaARrAIsAbQBuBJEAbgRvBJEAcARxBJMAcQSVAJMAlwBtBHoAbQR7AHoAcgRzBLIAcwSzALIAeQBwBHgAcASTAHgAaQTJAGoAyQC9AGoAxAB0BMUAdATGAMUABAF1BM0AdQTMAM0A/QB2BP4AdgR3BP4AzAB1BNUAdQR4BNUAeQR6BNYAegTOANYAegR7BM4AewTPAM4AfAR9BPoAfQT8APoA/gB3BN0AdwTeAN0AzwB7BAoBewR+BAoB3AB8BNsAfAT6ANsAfgR/BAoBfwQTAQoB1QB4BBoBeASABBoB/AB9BBcBfQQhARcBgASBBBoBgQQcARoBIgF5BBsBeQTWABsBHAGBBP0AgQR2BP0AggSDBDsBgwR4ATsBPAGEBD0BhASFBD0BdQGGBLkDhgSHBLkDQwFCAYgEQgFgAYgEiQSCBDkBggQ7ATkBPQGFBCcBhQQoAScBJgGJBCUBiQQ5ASUBXAGKBF0BigTwAV0BiwSMBEoBjARqAUoBjQSOBHMBjgRyAXMBgwSPBHgBjwR0AXgBjgSQBHIBkAR2AXIBjwSGBHQBhgR1AXQBdgGQBDwBkASEBDwBiwGMAZEEjAGSBJEErgGTBK8BkwSUBK8BqwOVBJsDlQSNAZsDlgSXBKoBlwSrAaoBrwGUBJMBlASUAZMBmASZBI4BmQSTA44BkgGWBJEBlgSqAZEBcgOyA5oEsgObBJoEnASdBJgDnQSaA5gDvwGrAZ4EqwGXBJ4ExAGfBK4BnwSTBK4BKAMmA6AEJgPZAaAEGwPNASMDzQGhBCMDzwHOARsDzgHNARsDywGhBMkBoQTNAckB0QGiBM8BogTOAc8BxwHOAQcDzgGiBAcDJgMNA9kBDQPaAdkB0wHYAdkB2AGgBNkBowTVAxED1QMtAxED1QOjBNsBowTcAdsBhQN2AqQEdgKlBKQESwOmBEkDpgRQA0kDRgRABI4CQASnBI4CUwLYAqgE2ALaAqgEqASpBFMCqQRUAlMCNQQ8BKoEPASrBKoErARAA4ACQAN/AoAC8QGCAq0EggKuBK0ErwSwBLEEkwKRApICRQRGBI0CRgSOAo0CkAKyBJICswS0BLEEmAKXAoUClwKGAoUCrAKGApwChgKXApwCtQSqBLYEqgSrBLYE8wK3BPUCtwS4BPUCuQS6BLsEugQeBLsE8wK8BLcEvQT8AvACvgSjBBADowQRAxADAwPcAb4E3AGjBL4EvwTaAQwD2gENAwwDBQPUAb8E1AHaAb8EnAI3A6wCNwM4A6wCOAM3AzkDNwM6AzkDRwNbA8AEWwPBBMAEVAM+A8IEPgNBA8IEwQRbA8MEWwNaA8MEXQNNAbMDTQFRAbMDigRcAcQEXAFjA8QEmgSIA3IDiANzA3IDhAODA2YDgwNnA2YDigOGA8UEhgOHA8UEpgOSBJEDkgSMAZEDmQTGBJMDxgSWA5MDYwOIAcQEiAHHBMQEhwTIBLkDyARLAbkDyQSNBLgDjQRzAbgDiATJBEMByQS4A0MByASLBEsBiwRKAUsBkQScBIsBnASYA4sBlQSYBI0BmASOAY0BbwRyBJEAcgSyAJEAxACVAHQElQBxBHQEwQBqBJYAagRsBJYAwQK7AtUDuwItA9UDygTLBMwEywTNBMwEywTKBLkEygS6BLkE9QK4BB4EuAS7BB4ENgRkADcEZABmADcENwRmADgEZgAQAjgEOAQQAjkEEAIUAjkEOQQUAjoEFAIgAjoEOwQeAjwEHgIcAjwEtgSrBM4EqwQaAs4EpwJWAD0EVgBUAD0EcQKMAqcEjAKOAqcERASFAjYEhQJkADYEzwRJBFoEzwTQBEkEqQTPAlQCzwI5AlQCvwK9AsECvQK7AsEC0QTSBJAC0gSyBJACRARDBNEEQwTSBNEE0QSYAkQEmAKFAkQEkAKPAtEEjwKYAtEE0wRNBNQETQRLBNQESQTQBEsE0ATUBEsE1QRTBNYEUwRRBNYETwTXBFEE1wTWBFEE2ARVBNUEVQRTBNUE2QQoAtoEKAInAtoE2gQnAtsEJwJZBNsE2gR5AtkEeQLcBNkE1QR7AtgEewLdBNgE1gR6AtUEegJ7AtUE1wR8AtYEfAJ6AtYEVwTeBFkE3gTbBFkE2wR4AtoEeAJ5AtoE0ASAAtQEgAJ+AtQE1AR+AtMEfgJIA9ME3gTfBNsE3wR4AtsEZwSEAuAEhALhBOAE4gTEAuMExALGAuMEzwSsBNAErASAAtAEyQLiBMgC4gTjBMgCBAIDAuQEAwLlBOQE5ATlBAkD5QQIAwkDDgINAuYEDQLnBOYE5gTnBAoD5wQLAwoD/AHoBP0B6ATpBP0BMwMyA+oEMgPrBOoE6wQuA+oELgMwA+oE6AT8AesE/AEuA+sEGAPoBDID6ATrBDID7ATtBDwD7QQ9AzwDPAMIA+wECAPlBOwEAwIWA+UEFgPsBOUE7gTnBLgC5wQNArgC4QSEAu8EhAKDAu8E6AQYA+kEGAMZA+kEFgMXA+wEFwPtBOwEmgLhBDQD4QTvBDQD2AMLA+4ECwPnBO4E4AThBJQC4QSaApQCRwTIAuMESQRIBFoElAKTAuAEsARmBGUE7wHwBO4B8AR0Au4B8ATxBHQC8QTyBHQC8QTwBPME8AT0BPME8gT1BHQC9QR1AnQC9gT3BPgE9wT5BPgE+gT7BPwE+wT9BPwE/AT9BP4E/QT/BP4E8gQABfUEAAUBBfUEAgX2BAMF9gT4BAMFrwQEBWYEZgSwBK8EZgQFBYICBQWuBIICLQKrAisCqwIzAisCBgUCBQcFAgUDBQcFAQUABfoEAAX7BPoECAX+BAkF/gT/BAkFiQKKAvYEigL3BPYECgULBQYFBgUJBQoF+wTxBP0E8QTzBP0E8QT7BPIE+wQABfIEBgULBYkCCwUMBYkC+QT3BA0F9wSKAg0FDgUPBWUCDwVmAmUCJgAnAFgCJwAEAFgCZwJoAmMCaAJkAmMCQQRCBBAFQgQRBRAFzgQaAhIFGgIZAhIFEgUZAmwCGQIdAmwCDwUxAGYCMQAwAGYCJQArACcAKwApACcAHAAeAFsCHgBcAlsCJwApAAQAKQAFAAQAYgI/AGECPwA9AGECAgAcAAAAHABbAgAAPAQcAqsEHAIaAqsEZgIwAGgCMABMAGgCUQBzAk8AcwJpAk8AgAN9AxMFfQM0BBMFTwBpAh4AaQJcAh4AJQBkAisAZAJLACsAXQBfAB0CXwBrAh0CJgRCBEYEQgRABEYEbwKIAnECiAKMAnECPwBiAlEAYgJzAlEATABLAGgCSwBkAmgC1AJtAtUCbQJrAtUC1QJrAt8CawLjAt8C9ALdAvIC3QLcAvICFAUVBR0EFQUWBR0E+gLiAuMC4gLfAuMC+wK8BPICvATzAvIC/wLlAgAD5QIXBQAD5QL/AuYC/wIBA+YC5gIBA+cCAQMYBecCDwUOBREFDgUQBREFDwURBXUDdQMxAA8FFQUUBRkFFAUaBRkFygQaBboEGgUUBboE3QL0AhYF9AIdBBYFugQUBR4EFAUdBB4EJgR1AxEFEQVCBCYENAQ1BBMFNQSqBBMFggOAAxsFgAMTBRsFGwUTBbUEEwWqBLUEHAWnBD8EpwRABD8E/AK9BAEDvQQYBQEDcAJxAhwFcQKnBBwFDQWKAm8CigKIAm8CWwQXBdcCFwXlAtcCXANdA4EBXQOAAYEBhAFeA4MBXgNfA4MBgwFfA4UBXwNgA4UBhQFgA4YBYANhA4YBhgFhA4cBYQNiA4cBYwNcA4gBXAOBAYgBuwGVA6wDlQOUA6wDpQOVA7wBlQO7AbwBrgOhA60DoQOnA60DrwOiA64DogOhA64DuAGiA7ADogOvA7ADsQO3AbADtwG4AbADsgOWA5sElgPGBJsElAOWA6wDlgOyA6wDwANPA78DTwNOA78DTgN0A78DdAPBA78DCAIGAsMDBgLCA8MDBgIBAsIDAQLEA8IDAQICAsQDAgLFA8QDAgJRA8UDUQPGA8UDHQVMA8cDTANKA8cDxwNKA8ADSgNPA8ADzQNTA8wDUwNUA8wDzANUA84DVAPCBM4D0ANVA88DVQNWA88DVgNXA88DVwPRA88DVwNYA9EDWAPSA9EDWANZA9IDWQPTA9IDwwRaAx4FWgPUAx4F1ANaA80DWgNTA80DiAFqAccEagGMBMcExwOzAB0FswBzBB0F1AMTAR4FEwF/BB4FHQMUBBwDFAS3AhwD7wFdAa0EXQHxAa0E9AQfBfMEHwUgBfME/QTzBP8E8wQgBf8ECgUJBSAFCQX/BCAFCAUJBQcFCQUGBQcFRwIxAksCMQJeBEsCXgBdAFwAXAD2Al4AxAGaA58EmgOdBJ8ExAG+AZoDvgGZA5oDvwGcA74BnAOZA74BngSqA78BqgOcA78BxQHAAcYBwAHCAcYBpQHAAaIBwAHFAaIBoAGjAaIBowGlAaIBowGgAagDoAG9AagDtwK2AhwDtgIhBRwDIAMUBCQDFAQdAyQD1wMiBSoDIgUpAyoD3QHYA8MC2APJAsMC4gTJAu4EyQLYA+4EuALEAu4ExALiBO4ExAK4AsUCuAK5AsUCXwBeAOQCXgDrAuQCXgD3AusC9wLqAusC9wIXBOoCFwQZBOoCAgQZBAAEGQQXBAAEAgQABPADAATsA/AD8APsA/ID7APrA/IDWAFZAVIBWQFTAVIBgwL1ASMF9QH2ASMF7wSDAiQFgwIjBSQFJAUlBe8EJQU0A+8ENQM0AyYFNAMlBSYFJgU7AzUDOwM2AzUD0gHQASEF0AEcAyEFdQInBeQBJwXmAeQBfQI/A0cDPwNbA0cD3wSlBHgCpQR2AngCigPcBHcC3AR5AncCdQL1BCcF9QQoBScF9QQBBSgFAQUpBSgFKgUpBfoEKQUBBfoEUAPdBOwB3QR7AuwBKwUqBfwEKgX6BPwELAUrBf4EKwX8BP4ELQUsBQgFLAX+BAgFLgUtBQcFLQUIBQcFBwUDBS4FAwUvBS4FAwX4BC8F+AQwBS8F+AT5BDAF+QQxBTAFMQX5BDIF+QQNBTIFbwJuAg0FbgIyBQ0FKQQoBEMEKAQzBUMENAXSBDMF0gRDBDMF0gQ0BbIEjQKLArMEhwK0BIsCtASzBIsCrwQMBQQFDAULBQQFCgUgBR8FHwU1BQoFrQT0BO8B9ATwBO8BrQSuBPQErgQfBfQENQUfBQUFHwWuBAUFNQUEBQsFCwUKBTUFZgQEBQUFBAU1BQUFtASHAgwFhwKJAgwFDAWvBLQErwSxBLQEiQL2BAYF9gQCBQYFJQMnAx8DJwMiBR8D1wMhAyIFIQMfAyIFIQPXAxIE1wMgBBIEEgQgBPwDIAQIBPwDCgTkAwgE5AP8AwgE5AMKBOYDCgQ2BeYDDgMPAzcFDwMeAzcFIAMkAx4DJAM3BR4DFgUfBN0CHwTWA90CFQUJBBYFCQQfBBYFCQQVBQsEFQUZBQsE4QPiA+kD4gPqA+kD9QM4BfMDOAUGBPMDOQU2BQsENgUKBAsEOgU7BRoFOwUZBRoFzAQ6BcoEOgUaBcoEOwU5BRkFOQULBBkFPAU9BT4FPQU/BT4FPgU/BUAFPwVBBUAFQAVBBUIFQgVBBUMFQwVBBUQFQQVFBUQFRAVFBUYFRQVHBUYFRgVHBUgFSAVHBUkFRwVKBUkFSQVKBUsFSwVKBUwFTAVKBU0FSgVOBU0FTQVOBU8F9gH3AfoB9wH4AfoB+gH9AfYB/QEjBfYB/QHpBCMF6QQkBSMF4gHgAY4D4AExA44DBAIwA+ABMAMxA+ABMAMEAuoEBALkBOoEDAIKAlIDCgIVA1IDDgIXAwoCFwMVAwoCFwMOAu0EDgLmBO0EigPFBOYBxQTlAeYB5gEnBYoDJwXcBIoDJwUoBdwEKAXZBNwEKAUpBdkEKQUoAtkEpASlBKYEpQRQA6YE3QRQA98EUAOlBN8E2ATdBN4E3QTfBN4EVQTYBFcE2ATeBFcERwPABOkBwATnAekBSANHA3wCRwPpAXwC0wRIA9cESAN8AtcETQTTBE8E0wTXBE8ECQMzA+QEMwPqBOQEBAPMAQkDzAEzAwkDCgM9A+YEPQPtBOYEAgPXAQoD1wE9AwoD6QQZAyQFGQMlBSQFGQMGAyUFBgMmBSUFBgMHAyYFBwM7AyYFBwOiBDsDogQ6AzsDOQM6A9EBOgOiBNEB0QHSATkD0gG1AjkDtgK1AiEFtQLSASEFBQPLAQQDywHMAQQDoQTLAb8EywEFA78EIwOhBAwDoQS/BAwDIgMjAw4DIwMMAw4DJAMiAzcFIgMOAzcFAwPYAQID2AHXAQIDvgSgBAMDoATYAQMDoAS+BCgDvgQQAygDEgMnAxADJwMoAxADIgUnAykDJwMSAykDTARNBE4ETQRPBE4EOwJMBD4CTAROBD4CPgI/AjsCPwI6AjsCUgI6Ak0COgI/Ak0CTQJOAlICTgJRAlICXARRAl0EUQJOAl0EWwRcBOECXARdBOEC4QLiAlsE4gIXBVsEAAMXBfoCFwXiAvoC/gIAA/kCAAP6AvkC7gL+AukC/gL5AukC7gLpAuwC6QLoAuwCGAQbBOgCGwTsAugCGwQYBAQEGAQDBAQE7wP0AwME9AMEBAME9APvA/YD7wPxA/YDRAIqAisFKgIqBSsFYwREAiwFRAIrBSwFYQRjBC0FYwQsBS0FLgJhBC4FYQQtBS4FLgUvBS4CLwUtAi4CLwUwBS0CMAWrAi0CMAUxBasCMQWlAqsCMgVZADEFWQClAjEFbgJXADIFVwBZADIFcAJVAG4CVQBXAG4CHAVTAHACUwBVAHACPwQ+BBwFPgRTABwFQQQnBD8EJwQ+BD8EJwRBBIEDQQQQBYEDDgWfAhAFnwKBAxAFZQJKAA4FSgCfAg4FSgBlAkgAZQJnAkgASABnAqMCZwJjAqMCJACdAmMCnQKjAmMCJgCeAiQAngKdAiQAngImAKkCJgBYAqkCqAKpAlkCqQJYAlkCqgKoAloCqAJZAloCWgJdAqoCXQIgAKoCXQJeAiAAXgIhACAAXgJqAiEAagKgAiEAcgKiAmoCogKgAmoCYAJCAHICQgCiAnICQgBgAkAAYAJfAkAAggN/A18CfwNAAF8CzgSnArYEpwI9BLYEbAJtAhgCbQKmAhgCMAIvAjQCLwJVAjQCVARVBFYEVQRXBFYEQwJUBFcCVARWBFcCQgJDAlYCQwJXAlYCSgJCAmQEQgJWAmQESQJKAl8ESgJkBF8ELwJJAlUCSQJfBFUCNAI1AjACNQLUAjACbQLUAqYC1AI1AqYCFwISBRgCEgVsAhgCpwLOBBcCzgQSBRcCIQS1BD0EtQS2BD0EIwQbBSEEGwW1BCEEfwOCAyMEggMbBSMEKQUqBSgCKgUqAigC",min:[-3.22326,-.45438,-.95648],max:[.55512,2.19452,1.9681],reach:[-2.36385,1.45877,.03362]}};var Kn={w:1024,h:512,r:"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AgIX1gQFAQFABxT//7ACF9kEAkEIFf//sAIWmwULFP//sAIWmQUJGP//rAICAReYBQkZ//+sAgICFZcFCxn//60CAQETmQULGv//rAIBAROaBQsa//+rAhWaBQsb//+qAhabBQEBBxz//6kCF58FAx7//60CFZsFASL//60CGLsF//+sAhm7Bf//qgIBAQIBFbwF//+pAhq9Bf//qQIBAQEBFL8F//+pAheEAwG7Av//qgICARKFAwO5Av//qwIBARLBBf//qgIBARHDBf//rAIQxAX//6sCEMUF//+sAg/FBf//rgINGgIBA6UF//+rAgECDhgCAQOmBf//rQIQwwX//64CCgIBxQX//68CBQECAQXDBf//sQICAQICBsIF//+vAgMBAwQFwQX//7ECAQECBAfABf//tQIBAQECCFUC5wT//7UCEVMB5gT//7cCAQEEAQO/Bf//ugIBAQLCBf//gAj//4AI//+ACP//gAj//4AI//+ACP//gAj//4AI//+ACP//gAj//4AI//+ACP//gAj//4AI//+ACP//gAj//4AI//+ACP//2QIBpgX//4AI//+ACP//gAj//9oCBKIF///XAgOmBf//zgIBBAYBA6MF///KAgIFBKsF///OAgWtBf//ygIGsAX//8oCBs4DAuAB///IAgfIAgaEAQQYBr0B///FAgkCAcECDn8NDwotCwMDff//xAIGAwHBAhNhBwINAhcIDhwECRxz//+9AgIEBcMCAQQQWFATDwYpZ///vAIDAQe9AgIFHUdVAw0BRmX//7wCAQUEvQIEAQEBMS+wAQIEYP//wQIFtQJLHb8BXv//wgIFsQJPGcQBBgFV///BAgqTAgMSUxnPAQEDAwNI//+zAgYIC5ECBQ9VF98BRP//sQIBAgYDEQEBjgIGDVMW6wE7//+qAgEJBwIS3gECLg8EVQ0BBPABOf//qQICCgcCEbQBAUYCD2UP+gE3//+3AgYCEaYBAhABDAgGDgMCBwIFAQ5yBwEB/AEDAzD//6cCBwkGAxGZAQYHAhEtBQoIdgj/AQIQI///sgIMAhKRAQMEBRPBAQiUAiH//6wCEgIRjAEKAxQBwgEKmAIBARv//+IBAQMDBAE8BQcIAw+RAd8BCZ0CGv//4wENRAkFEY0B3wEHngIc///8AQE0CAgSiQHjAQOhAh3//9oBAx8CAgUkAxMVhAHmAQOhAh7//5YBA0MsAwIMBgkEChqCAYoEJP//lgEFBwE5AwYtBwwFAwIkfoQEAQIo//+aAQUEBgICBgIFAiNzcgER/wMr//+jAQQSBAUEGnJzAQkCA4IEKv//fwEUCggWBgQdbX2CBDH//3xIImWAAYMEMv//cdoBgAGBBDT//2bhAXSUBDH//1oBBeABdJsEMf//WAYC2gFzogQx//9eAQLEAYMBpwQx//8+AgMFDgECAQfGAXytBAoBJf//PhQI1QFwsgQICB///z7cAQQSSAcdtwQt//9B0gEBDFQPF7oEAQICASb//0TOAQUNGAUwEha/BAECJf//LgYTzgEiBjQTF7EENP//LQsYyQEDAhYHAwMvFRYCDZ8EN///MgkdzwEOBAcELBYlnQQ4//9aywEeAgwFFxg3jAQ4//9U1AEmCBEYKZ0EO///WNIBCwIRAgMJEA4orQQ3//9P7wFRugQ3//8vBBCBAkXBBDb//0n/AT/HBDL//0n8ASgQCMwEL///TIMCExoEzwQCBSr//0mGAg/9BCX//xYJIpECCIUFIf//IBkEqgcZ//8rxwcO//8t0QcC//8AFxjRB///ADARvwf//wCACP//AIAI//8AgAj//wCACP//AIAI//8AgAj//wCACP//AIAI//8AgAj//wCACP//AIAI//8AgAj//wCACP//AIAI//8="};function Yi(){return{uReveal:{value:0},uTint:{value:0}}}function ru(i,t,e){if(e)return w0(i,t);let n=Yi();n.uFadeY={value:new i.Vector2(.95,1.7)};let s=new i.Group,r=(f,A)=>qn(i,Object.assign({color:f,uniforms:n},A||{})),o=(f,A,m,g,d,p,M,w)=>{let x=new i.Mesh(new i.BoxGeometry(f,A,m),r(M,w));return x.position.set(g,d,p),s.add(x),x},a=2.75,c=[-2,-1,0,1,2],l=-1.95;o(16,4.6,.1,0,-.5,-1.7,2763306),o(15,.08,2,0,l,-.65,10132122),o(15,.32,.06,0,l-.12,.38,14211288),c.forEach(f=>o(.62,.2,.04,f*a-.7,l-.12,.42,4210752));let u=new i.Curve;u.getPoint=(f,A=new i.Vector3)=>{let m=f*Math.PI*2*3.5;return A.set(Math.cos(m)*1.08,Math.sin(m)*.5,-1.55+f*1.85)};let h=new i.TubeGeometry(u,140,.035,5,!1);return c.forEach(f=>{let A=new i.Mesh(h,r(15263976,{rim:.6}));A.position.set(f*a,-1.35,0),s.add(A)}),t&&c.forEach(f=>{if(f===0)return;let A=new i.Group;t.forEach(m=>A.add(new i.Mesh(m,r(12105912,{rim:.5,side:i.DoubleSide})))),A.position.set(f*a,0,-.35),A.scale.setScalar(.94),A.rotation.y=f*.04,s.add(A)}),o(16,2.6,.3,0,l-1.62,.42,9211020),o(7.2,1.25,.1,0,l-1.75,.62,2500134),o(2.2,.12,.06,0,l-1.25,.7,14737632,{rim:.6}),{group:s,u:n}}function w0(i,t){let e=Yi();e.uDimY={value:new i.Vector3(2,2.06,.45)};let n=new i.Group,s=(d,p)=>qn(i,Object.assign({color:d,uniforms:e},p||{})),r=(d,p,M,w,x,D,B,b)=>{let I=new i.Mesh(new i.BoxGeometry(d,p,M),s(B,b));return I.position.set(w,x,D),n.add(I),I},o=2.75,a=4.4,c=[-3,-2,-1,0,1,2,3],l=[2,1,0,-1,-2];r(22,24,.1,0,0,-1.7,2763306);let u=new i.Curve;u.getPoint=(d,p=new i.Vector3)=>{let M=d*Math.PI*2*3.5;return p.set(Math.cos(M)*1.08,Math.sin(M)*.5,-1.55+d*1.85)};let h=new i.TubeGeometry(u,140,.035,5,!1),f=s(15263976,{rim:.6}),A=s(12105912,{rim:.5,side:i.DoubleSide});l.forEach(d=>{let p=d*a-1.95;r(21,.08,2,0,p,-.65,10132122),r(21,.32,.06,0,p-.12,.38,14211288),c.forEach(M=>{r(.62,.2,.04,M*o-.7,p-.12,.42,4210752);let w=new i.Mesh(h,f);if(w.position.set(M*o,d*a-1.35,0),n.add(w),!t||d===0&&M===0)return;let x=new i.Group;t.forEach(D=>x.add(new i.Mesh(D,A))),x.position.set(M*o,d*a,-.35),x.scale.setScalar(.94),x.rotation.y=M*.04+(d%2?.03:-.02),n.add(x)})});let m=3.5*o+.25;r(.5,24,.6,-m,0,.3,8026746,{rim:.6}),r(.5,24,.6,m,0,.3,8026746,{rim:.6}),r(.08,24,.08,-m+.32,0,.66,16777215,{rim:.8}),r(.08,24,.08,m-.32,0,.66,16777215,{rim:.8}),r(2*m,.5,.6,0,2.5*a+.4,.3,8026746,{rim:.6}),r(2*m-1,.16,.16,0,2.5*a+.05,.4,16777215,{emissive:16777215});let g=m+1.9;r(3.2,24,.5,g,0,.2,5921370,{rim:.5}),r(2.2,1,.08,g,2.6,.5,1973790),r(1.9,.14,.04,g,2.6,.56,13619151,{emissive:6316128});for(let d=0;d<12;d++)r(.52,.42,.12,g-.62+d%3*.62,1.5-Math.floor(d/3)*.56,.52,14211288,{rim:.7});return r(.16,.9,.1,g,-1.4,.5,1052688),r(.5,1.2,.08,g,-1.4,.47,10132122,{rim:.6}),{group:n,u:e}}function M0(){let i=atob(Kn.r),t=i.length,e=new Uint8Array(Kn.w*Kn.h),n=0,s=0,r=0,o=0;for(;n<t&&s<Kn.h;){if(i.charCodeAt(n)===255&&i.charCodeAt(n+1)===255){n+=2,s++,r=0,o=0;continue}let c=0,l=0,u;do u=i.charCodeAt(n++),c|=(u&127)<<l,l+=7;while(u&128);o&&e.fill(1,s*Kn.w+r,s*Kn.w+r+c),r+=c,o^=1}return e}function v0(){let i=Kn.w,t=Kn.h,e=M0(),n=new Float32Array(i*t),s=new Float32Array(i*t),r=6;for(let m=0;m<t;m++){let g=0;for(let d=-r;d<=r;d++)g+=e[m*i+(d+i)%i];for(let d=0;d<i;d++)s[m*i+d]=g/(2*r+1),g+=e[m*i+(d+r+1)%i]-e[m*i+(d-r+i)%i]}for(let m=0;m<i;m++){let g=0;for(let d=-r;d<=r;d++)g+=s[Math.min(t-1,Math.max(0,d))*i+m];for(let d=0;d<t;d++)n[d*i+m]=g/(2*r+1),g+=s[Math.min(t-1,d+r+1)*i+m]-s[Math.max(0,d-r)*i+m]}let o=Oe(i,t),a=o.getContext("2d"),c=a.createImageData(i,t),l=c.data,u=(m,g,d)=>{let p=g<.88?0:(g-.88)/.12,M=p*p*(3-2*p);return M?m(g,d)*(1-M)+m(g-1,d)*M:m(g,d)},h=(m,g)=>Un(m*40,g*20,3,4),f=(m,g)=>Un(m*14,g*7,2,2),A=(m,g)=>Un(m*22+1.4*Un(m*6,g*6,3,6),g*15+1*Un(m*6+7,g*6,3,7),5,9);for(let m=0;m<t;m++){let g=m/t,d=(.5-g)*180,p=Math.abs(d),M=Math.exp(-Math.pow((p-23)/8,2)),w=Math.exp(-Math.pow((p-50)/12,2)),x=Math.exp(-Math.pow(d/7,2));for(let D=0;D<i;D++){let B=D/i,b=m*i+D,I=n[b],_;e[b]?_=.44+.2*u(h,B,g)+.12*M-.05*(1-I):_=.16+.05*u(f,B,g)+.14*I*I,p>66&&(_=Math.max(_,.55+.35*Math.min(1,(p-66)/6)));let v=u(A,B,g)+.14*x+.1*w-.16*M,S=Math.min(1,Math.max(0,(v-.16)/.24));_+=(.97-_)*S*S*(3-2*S)*.82;let O=Math.max(0,Math.min(255,_*255));l[b*4]=l[b*4+1]=l[b*4+2]=O,l[b*4+3]=255}}return a.putImageData(c,0,0),o}function ou(i){let t=Yi(),e=new i.CanvasTexture(v0());e.anisotropy=4;let n=10,s=new i.Mesh(new i.SphereGeometry(n,160,96),qn(i,{map:e,uniforms:t,rim:.35})),r=new i.Mesh(new i.SphereGeometry(n*1.035,128,64),qn(i,{uniforms:t,side:i.BackSide,lum:"lum = pow(smoothstep(0.0, 0.27, abs(dot(normalize(normal), normalize(vViewPosition)))), 1.6) * 0.62;"})),o=new i.Group;o.add(s);let a=new i.Group;return a.add(o,r),{group:a,u:t,planet:s,tilt:o,R:n,textures:[e]}}function y0(i,t){let e=Oe(i,t),n=e.getContext("2d"),s=n.createImageData(i,t),r=s.data,o=dr(11),a=[];for(let c=0;c<70;c++)a.push([o(),.15+o()*.7,.008+Math.pow(o(),3)*.06]);for(let c=0;c<t;c++)for(let l=0;l<i;l++){let u=l/i,h=c/t,f=.55+.25*Un(u*6,h*4,4,3)+.12*Un(u*22,h*14,3,8);for(let[g,d,p]of a){let M=u-g;M-=Math.round(M);let w=(h-d)*.5,x=Math.sqrt(M*M+w*w)/p;x<1.35&&(f+=x<1?-.22*(1-x*x):.18*Math.exp(-Math.pow((x-1.08)/.12,2)))}h<.07&&(f=.95);let A=(c*i+l)*4,m=Math.max(0,Math.min(255,f*235));r[A]=r[A+1]=r[A+2]=m,r[A+3]=255}return n.putImageData(s,0,0),e}function au(i){let t=Yi();t.uTint.value=1;let e=new i.CanvasTexture(y0(512,256)),n=new i.Mesh(new i.SphereGeometry(10,96,64),qn(i,{map:e,uniforms:t,rim:.3,emissive:1579032})),s=new i.Group;return s.add(n),n.rotation.z=.35,{group:s,u:t,planet:n}}var iu=6;function cu(i,t){let e=Yi(),n=new i.Group,s=(f,A)=>qn(i,Object.assign({color:f,uniforms:e},A||{})),r=4.7,o=4.6,a=new i.Mesh(new i.BoxGeometry(r*2+.7,o+.5,.18),s(6974058,{rim:.55}));a.position.z=-.12,n.add(a);let c=[];[-1,1].forEach(f=>{let A=new i.Mesh(new i.BoxGeometry(r,o,.05),s(10132122));A.position.set(f*(r/2+.18),0,.02),n.add(A);for(let m=0;m<2;m++)for(let g=0;g<3;g++){let d=f*(r/2+.18)+(g-1)*1.5,p=(.5-m)*2.12,M=new i.Mesh(new i.BoxGeometry(1.38,2.02,.03),s(16777215,{rim:.7}));M.position.set(d,p,.06),n.add(M),c.push(new i.Vector3(d,p,.1))}}),[-1.1,1.1].forEach(f=>{let A=new i.Mesh(new i.TorusGeometry(.32,.06,8,24),s(15790320,{rim:.7}));A.position.set(0,f,.12),A.rotation.y=Math.PI/2,n.add(A)});let l=t.map(f=>{let A=new i.CanvasTexture(Ar(f,"face",256));return A.colorSpace=i.SRGBColorSpace,A}),u=new i.PlaneGeometry(1.26,1.89),h=0;return c.forEach((f,A)=>{if(A===iu)return;let m=new i.Mesh(u,s(16777215,{map:l[h++%l.length],rim:.2,emissive:5263440}));m.position.copy(f),m.position.z=.09,n.add(m)}),{group:n,u:e,pockets:c,slot:c[iu],size:new i.Vector2(r*2+.7,o+.5),textures:l}}function su(i){let t=atob(i),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return new Uint16Array(e.buffer)}function lu(i){let t=Yi(),e=new i.Group,n={};return["G","T"].forEach(s=>{let r=nu[s],o=su(r.p),a=new Float32Array(o.length);for(let h=0;h<o.length;h++){let f=h%3;a[h]=r.min[f]+o[h]/65535*(r.max[f]-r.min[f])}let c=new i.BufferGeometry;c.setAttribute("position",new i.BufferAttribute(a,3)),c.setIndex(new i.BufferAttribute(su(r.i),1)),c.computeVertexNormals();let l=new i.Mesh(c,qn(i,{color:15921906,uniforms:t,rim:.45,side:i.DoubleSide}));l.frustumCulled=!1;let u=new i.Group;u.add(l),e.add(u),u.userData.reach=new i.Vector3().fromArray(r.reach),n[s]=u}),{group:e,u:t,hands:n}}function hu(i,t){let e=Yi();e.uFadeY={value:new i.Vector2(0,1)};let n=Oe(128,128),s=n.getContext("2d");s.fillStyle="#8a8a8a",s.fillRect(0,0,128,128),s.beginPath(),s.arc(64,64,52,0,Math.PI*2),s.lineWidth=5,s.strokeStyle="#ffffff",s.stroke();let r=72/230;s.save(),s.translate(64-63*r,64-115*r),s.scale(r,r),s.fillStyle="#ffffff",Jn.forEach(f=>s.fill(new Path2D(f))),s.restore();let o=new i.CanvasTexture(n),a=new i.CylinderGeometry(.5,.5,.08,28,1);a.rotateX(Math.PI/2);let c=qn(i,{map:o,uniforms:e,rim:.45,fadeBelow:!0}),l=new i.Group,u=[],h=dr(7);for(let f=0;f<t;f++){let A=new i.Mesh(a,c);A.frustumCulled=!1,l.add(A),u.push({m:A,x:(f+.2+h()*.6)/t,z:-3-h()*6,ph:h(),sp:.7+h()*.5,wx:(h()-.5)*.8,wy:.6+h()*1.4,s:1.5+h()*.9})}return{group:l,u:e,coins:u,tex:o,geo:a,mat:c,textures:[o]}}var Fs=1,In=.15,Ls=.8;function _0(i){let t=s=>{let r=Oe(i,i);return s(r.getContext("2d")),r},e=(s,r)=>{let o=i*.6,a=o/230;s.save(),s.translate(i/2-63*a,i/2-115*a),s.scale(a,a),s.fillStyle=r,Jn.forEach(c=>s.fill(new Path2D(c))),s.restore()},n=(s,r)=>{s.beginPath(),s.arc(i/2,i/2,i*.455,0,Math.PI*2),s.lineWidth=i*.012,s.strokeStyle=r,s.stroke()};return{color:t(s=>{s.fillStyle="#b4f25e",s.fillRect(0,0,i,i),n(s,"#a6f357"),e(s,"#a6f357")}),orm:t(s=>{s.fillStyle="rgb(0,40,255)",s.fillRect(0,0,i,i),n(s,"rgb(0,200,0)"),e(s,"rgb(0,215,0)")}),emissive:t(s=>{s.fillStyle="#505050",s.fillRect(0,0,i,i),n(s,"#c8c8c8"),e(s,"#ffffff")}),coat:t(s=>{s.fillStyle="rgb(210,0,0)",s.fillRect(0,0,i,i),n(s,"rgb(30,0,0)"),e(s,"rgb(18,0,0)")})}}function E0(i){let t=new i.RingGeometry(5e-4,Ls,96,14),e=t.attributes.position;for(let n=0;n<e.count;n++){let s=Math.hypot(e.getX(n),e.getY(n))/Ls;e.setZ(n,In/2-.02+.016*(1-s*s))}return t.computeVertexNormals(),t}function uu(i,t){let e=new i.Scene;e.environment=t;let n=new i.PerspectiveCamera(16,1,.1,400),s=_0(512),r=(B,b)=>{let I=new i.CanvasTexture(B);return b&&(I.colorSpace=i.SRGBColorSpace),I.anisotropy=8,I},o=r(s.color,!0),a=r(s.orm),c=r(s.emissive,!0),l=r(s.coat),u=new i.Color("#a6f357"),h=new i.MeshPhysicalMaterial({map:o,roughness:1,metalness:1,roughnessMap:a,metalnessMap:a,clearcoat:1,clearcoatRoughness:.06,clearcoatMap:l,iridescence:.3,iridescenceIOR:1.3,iridescenceThicknessRange:[320,520],iridescenceMap:l,emissive:u,emissiveMap:c,emissiveIntensity:.85,envMapIntensity:1.3,transparent:!0}),f=new i.MeshPhysicalMaterial({color:new i.Color("#b4f25e"),roughness:.17,metalness:1,clearcoat:1,clearcoatRoughness:.06,iridescence:.3,iridescenceIOR:1.3,iridescenceThicknessRange:[320,520],emissive:u,emissiveIntensity:.075,envMapIntensity:1.3,transparent:!0}),A=[Xn(h,{amt:.06}),Xn(f,{amt:.05})],m=[[Ls-.01,In/2-.02],[Ls+.05,In/2],[Fs-.06,In/2],[Fs-.012,In/2-.014],[Fs,In/2-.04],[Fs,-In/2+.04],[Fs-.012,-In/2+.014],[Fs-.06,-In/2],[Ls+.05,-In/2],[Ls-.01,-In/2+.02]],g=new i.LatheGeometry(m.reverse().map(([B,b])=>new i.Vector2(B,b)),128);g.rotateX(Math.PI/2);let d=E0(i),p=d.clone();p.rotateY(Math.PI);let M=new i.Group,w=new i.Group;w.add(new i.Mesh(g,f),new i.Mesh(d,h),new i.Mesh(p,h)),M.add(w),e.add(M),M.traverse(B=>{B.isMesh&&(B.frustumCulled=!1)});let x=-1,D=0;return{scene:e,camera:n,group:M,update(B,b,I,_,v){let S=ge(b.o,0,1);if(S<=.005)return x=-1,!1;x<0&&(x=B),D=B,n.aspect=I/_,n.fov=16;let O=_/(Math.max(4,b.size)*Math.tan(i.MathUtils.degToRad(8)));n.position.set(0,0,O),n.near=O*.5,n.far=O*2,n.lookAt(0,0,0),n.setViewOffset(I,_,I/2-b.x,_/2-b.y,I,_),n.updateProjectionMatrix();let L=4.6,N=2.5,K=B-x,G=Math.floor(K/L),tt=K-G*L,z=tt<N?0:un.io((tt-N)/(L-N));return w.rotation.set(Math.sin(B*.9)*.07,(G+z)*Math.PI*2+(v||0),Math.sin(B*.7)*.025),e.environmentRotation.set(0,Math.sin(B*.23)*.5+w.rotation.y*.15,0),A.forEach(ct=>{ct.uHoloShift.value=B*.05+w.rotation.y*.4}),h.opacity=f.opacity=S,h.depthWrite=f.depthWrite=!0,!0},textures:[o,a,c,l],dispose(){[o,a,c,l].forEach(B=>B.dispose()),[g,d,p].forEach(B=>B.dispose()),h.dispose(),f.dispose()}}}function fu(){let i={},t=n=>i[n]||(i[n]={k:{},c:{}}),e={T:i,init(n,s){let r=t(n);for(let o in s)r.c[o]=s[o],r.k[o]=[[-1,s[o],"l"]];return e},tw(n,s,r,o,a){return[].concat(n).forEach(c=>{let l=t(c);for(let u in o){let h=u in l.c?l.c[u]:0;(l.k[u]||(l.k[u]=[])).push([s,h,"l"],[r,o[u],a||"io"]),l.c[u]=o[u]}}),e},set(n,s,r){return e.tw(n,s,s+1e-4,r,"step")},done(){return Object.values(i).forEach(n=>Object.values(n.k).forEach(s=>s.sort((r,o)=>r[0]-o[0]))),e},v(n,s,r,o=0){let a=i[n],c=a&&a.k[s];if(!c)return o;if(r<=c[0][0])return c[0][1];for(let l=1;l<c.length;l++){let u=c[l];if(r<=u[0]){let h=c[l-1],f=u[0]-h[0],A=f>0?(r-h[0])/f:1,m=u[2]==="step"?A>=1?1:0:(un[u[2]]||un.io)(A);return h[1]+(u[1]-h[1])*m}}return c[c.length-1][1]},all(n,s){let r=i[n],o={};if(!r)return o;for(let a in r.k)o[a]=e.v(n,a,s);return o}};return e}function du(i){if(i<=0)return 0;if(i>=1)return 1;let t=[[0,.05],[.13,.17],[.24,.26],[.36,.42],[.5,1.01]];for(let[e,n]of t)if(i>=e&&i<n)return i>.5?Math.min(1,.55+(i-.5)*2):.75;return .04}var mr={home:7,gifts:3},gu=mr.home,pu=-1.25,Au=.55,B0=1.38;function xu(i){let t=fu();return t.init("pack",{x:0,y:0,z:0,rx:0,ry:0,rz:0,s:i?B0:1,o:1,tear:0,mouth:0,spin:0}),t.init("c0",{x:0,y:-.4,z:0,rz:0,ry:0,s:.92,o:0,on:0,slot:0,tog:0,pow:0}),t.init("c1",{x:0,y:-.4,z:-.02,rz:0,s:.92,o:0}),t.init("c2",{x:0,y:-.4,z:-.04,rz:0,s:.92,o:0}),t.init("machine",{r:0}),t.init("mars",{r:0,y:-.9}),t.init("hands",{r:0,spread:1}),t.init("binder",{r:0,y:-10}),t.init("glow",{k:1}),t.init("sky",{r:0,y:0}),t.init("burn",{r:0}),t.init("gpack",{k:0}),t.init("c0",{into:0}),t}function mu(i,t){let e=xu(i),n=i?.88:.96,s=i?.8:.76;return e.tw("machine",.12,.82,{r:1},"l"),i&&e.tw("pack",.08,.8,{s:1.1},"io"),e.tw("pack",1.1,1.85,i?{z:.85,y:.2,s:1.25}:{z:.85,y:.16},"io"),e.tw("machine",1.08,1.5,{r:0},"l"),e.tw("pack",2.08,2.55,{tear:1},"l"),e.tw("pack",2.15,2.45,{mouth:1},"o"),e.set(["c0","c1","c2"],2.16,{o:1}),e.tw("pack",2.3,2.88,i?{y:-1.12,z:.55,s:.82}:{y:-.92,z:.55,s:.7},"io"),e.tw("c0",2.3,2.86,{y:1.12,z:.14,s:i?1:.9},"o"),e.tw("c1",2.34,2.9,{x:-n,y:s,z:.04,rz:.2,s:i?1:.92},"o"),e.tw("c2",2.36,2.92,{x:n,y:s,z:0,rz:-.2,s:i?1:.92},"o"),e.tw("c1",3.08,3.5,{x:-3.6,rz:.55,o:0},"i"),e.tw("c2",3.1,3.52,{x:3.6,rz:-.55,o:0},"i"),e.tw("pack",3.08,3.48,{y:-6,o:0},"i"),e.tw("c0",3.14,3.74,{y:i?.22:.26,z:1.3,s:i?1.6:1.38},"io"),e.tw("c0",3.44,3.62,{tog:1},"io"),e.tw("c0",3.58,3.88,{on:1,pow:1},"l"),e.tw("mars",3.3,3.92,{r:1},"l"),e.tw("mars",3.2,3.95,{y:0},"o"),e.tw("mars",4.06,4.5,{r:0},"l"),e.tw("binder",4.1,4.72,{y:0},"o"),e.tw("binder",4.16,4.66,{r:1},"l"),e.tw("c0",4.2,4.86,{slot:1},"io"),e.tw("c0",4.22,4.4,{tog:0},"io"),e.tw("c0",4.28,4.56,{on:0,pow:0},"l"),e.tw("binder",5.06,5.44,{r:0},"l"),e.tw("c0",5.08,5.46,{o:0},"l"),e.tw("glow",5.04,5.5,{k:0},"l"),t&&e.tw("burn",5.25,5.85,{r:1},"l"),e.done()}function C0(i){let t=xu(i);t.init("hands",{r:1,spread:0}),t.init("pack",{y:i?0:.05,z:.3,s:i?.95:.82}),["c0","c1","c2"].forEach((s,r)=>t.init(s,{y:-.25,z:.28-r*.02,s:.8})),t.tw("hands",.04,.42,{r:0,spread:.35},"l"),t.tw("pack",.1,.36,{tear:1},"l"),t.tw("pack",.14,.38,{mouth:1},"o"),t.set(["c0","c1","c2"],.15,{o:1}),t.tw(["c0","c1","c2"],.2,.46,{y:1.35,z:.4,s:.86},"o"),t.tw("pack",.38,.72,{y:-6,o:0},"i");let e=i?1:1.2,n=i?1.1:.98;return t.tw("c0",.46,.88,{y:i?.35:.42,z:.5,s:i?1.2:1.05},"io"),t.tw("c1",.48,.9,{x:-e,y:i?0:.08,z:.3,rz:.2,s:n},"io"),t.tw("c2",.5,.92,{x:e,y:i?0:.08,z:.26,rz:-.2,s:n},"io"),t.tw("c0",.66,.8,{tog:1},"io"),t.tw("c0",.76,.96,{on:1,pow:1},"l"),t.tw("mars",.45,.95,{r:1},"l"),t.tw("mars",.4,.98,{y:0},"o"),t.tw("mars",1.06,1.45,{r:0},"l"),t.tw("c1",1.06,1.42,{x:-3.6,rz:.55,o:0},"i"),t.tw("c2",1.08,1.44,{x:3.6,rz:-.55,o:0},"i"),t.tw("c0",1.1,1.86,{into:1},"l"),t.tw("gpack",1.42,1.74,{k:1},"l"),t.tw("glow",1.3,1.7,{k:0},"l"),t.tw("hands",1.3,1.95,{r:1,spread:0},"o"),t.done()}var Vo=()=>({off:new R,vel:new R,q:new We,w:new R,held:!1,lift:0}),S0=new We;function wu(i,t={}){var wn,ks;let e=t.root||i.parentNode,n=!!t.reduce,s=t.world==="big",r=t.page==="gifts"?"gifts":"home",o=mr[r]-1,a=Math.min(window.devicePixelRatio||1,2),c=new xi({canvas:i,antialias:a<2,alpha:!1,powerPreference:"high-performance"});c.toneMapping=Gi,c.toneMappingExposure=1,c.outputColorSpace=Ce,c.autoClear=!1,c.setClearColor(1184274,1);let l=new Wn,u=Us(De,c);l.environment=u;let h=new be(30,1,.1,200),f={uRes:{value:new dt(1,1)},uP:{value:new me(.5,.5,.3,.4)},uK:{value:1}},A=new Ne(new mi(2,2),new sn({uniforms:f,depthTest:!1,depthWrite:!1,vertexShader:"void main(){ gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:["precision highp float; uniform vec2 uRes; uniform vec4 uP; uniform float uK;","void main(){","  vec2 p = gl_FragCoord.xy / uRes; p.y = 1.0 - p.y; float asp = uRes.x / uRes.y;","  vec2 d = (p - uP.xy) * vec2(asp, 1.0);","  float spill = exp(-dot(d, d) / (uP.z * uP.z * 2.2));","  vec2 e = (p - vec2(uP.x, uP.y + uP.w)) * vec2(asp * 0.55, 2.4);","  float under = exp(-dot(e, e) / (uP.z * uP.z * 0.5));","  vec3 c = vec3(0.0706) + vec3(0.36, 0.62, 0.1) * (spill * 0.055 + under * 0.05) * uK;","  float n = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);","  gl_FragColor = vec4(c + (n - 0.5) / 255.0, 1.0);","}"].join(`
`)})),m=new Wn;m.add(A),A.frustumCulled=!1;let g=new gi(-1,1,1,-1,0,1),d=Ps(De,{quality:(wn=t.quality)!=null?wn:1});l.add(d.group);let p=new Ss(ul());p.colorSpace=Ce;let w=[["SPCX",10130,"67.8926",482],["TSLA",1583,"4.1674",97],["NVDA",1452,"7.8912",184]].map((W,et)=>zo(De,W,{backTex:p,power:et===0}));w.forEach(W=>l.add(W.group));let x=uu(De,u),D=eu(De,c),B=ru(De,qh(De,.3),s);B.group.position.set(0,0,-.4);let b=s?ou(De):au(De),I=cu(De,[["TSLA",1583,"4.1674",97],["NVDA",1452,"7.8912",184],["AAPL",507,"1.8093",731],["AMZN",667,"2.1361",276],["META",1583,"2.4315",31],["GME",3994,"157.4985",1096],["SPCX",405,"1.0744",14]]),_=lu(De);D.scene.add(B.group,b.group,I.group,_.group);let v=null,S=s?hu(De,18):null,O=null;O&&D.scene.add(O.group);let L=-7,N=-1,K=new We;v&&D.scene.add(v.group),S&&D.scene.add(S.group);let G=-40,tt=!1,z=null,ct=null,ut=-1,wt=new R,Nt={x:0,y:0,z:.3,s:1},St=()=>{let W=ct;if(!W)return yt.all("pack",0);let et=Nt.z,ot=2*(h.position.z-et)*Math.tan(Yn.degToRad(15))/At;return Nt.x=(W.x-st/2)*ot,Nt.y=kt+(At/2-W.y)*ot,Nt.s=(W.h+(ht?22:30))*ot/we.H,Nt},Y=()=>{let W=z||{x:st/2,y:At*.42,size:60},et=1.8,ot=2*(h.position.z-et)*Math.tan(Yn.degToRad(15))/At;return wt.set((W.x-st/2)*ot,kt+(At/2-W.y)*ot,et),{p:wt,s:W.size*ot/we.H}},it=W=>r==="gifts"?C0(W):mu(W,s),ht=!1,st=1,At=1,yt=it(!1),Rt=7.4,kt=0,X=12,at=a,T={s:1,x:0,y:0},Ut=!1,nt=[],Et=-11.7,pt=1,It={z:-34,rise:1,spin:0,last:-1},_t=()=>r==="gifts"?1:4,C=()=>{if(s)return y();let W=yt.all("c0",r==="gifts"?1:4),Wt=.5-(W.y-Ye.H/2*W.s-kt)/(Rt*(X-W.z)/X)-(ht?.03:.025);Et=kt+(.5-Wt)*(Rt*(X+7)/X)-10},y=()=>{let W=.42,et=1.29;if(ht){let Re=mu(!0,!0).all("c0",4),Fn=Rt*(X-Re.z)/X,dn=.5-(Re.y+Ye.H/2*Re.s-kt)/Fn,pn=.5-(Re.y-Ye.H/2*Re.s-kt)/Fn;W=dn+(pn-dn)/3,et=W+.53}let ot=Rt/X,Wt=Math.atan((.5-W)*ot),Vt=Math.atan((.5-et)*ot),ee=ht?44:50,re=ee*Math.sin(Wt-Vt);pt=re/b.R,It.z=X-ee*Math.cos(Vt),Et=kt+ee*Math.sin(Vt),It.rise=ee*ot*.11/.9,b.tilt.rotation.set(Vt-.49,0,-.1),h.far=Math.max(h.far,ee+re+5),h.updateProjectionMatrix()},k=()=>{st=Math.max(1,e.clientWidth),At=Math.max(1,e.clientHeight),c.setPixelRatio(at),c.setSize(st,At,!1);let W=st/At,et=ht;ht=st<760||W<.85,et!==ht&&(yt=it(ht)),Rt=ht?Math.max(7,4.6/W):6.5,kt=((ht?.53:.585)-.5)*Rt,X=Rt/2/Math.tan(Yn.degToRad(15)),h.fov=30,h.aspect=W,h.near=.1,h.far=X+(s?110:60),h.position.set(0,kt,X),h.lookAt(0,kt,0),h.updateProjectionMatrix(),f.uRes.value.set(st*at,At*at),D.setSize(st,At,at,ht?5:6,ht?8.5:10);let Wt=Rt*(X-pu)/X,Vt=ht?.34:.36,ee=s?ht?.37:.42:ht?.3:.32;T.s=ee*Wt/2.12,T.y=kt+(.5-Vt)*Wt-I.size.y/2*T.s,T.x=ht||s?-I.slot.x*T.s:0;let re=ht?1.1:1;if(B.group.scale.setScalar(re),B.u.uFadeY&&B.u.uFadeY.value.set(.95*re,1.7*re),B.u.uDimY&&B.u.uDimY.value.set(2*re,2.06*re,.45),v){let Re=ht?2.3:1.6;v.base={y:kt-Re,z:X},v.group.position.set(0,v.base.y,X),v.group.scale.set(ht?.58:1,1,1)}I.group.scale.setScalar(T.s),I.group.position.set(T.x,T.y,pu),C(),Ut&&ie()},Q=(ks=t.start)!=null?ks:0,Z=0,J=Q,mt=null,gt=0,bt=.82,Kt=2.4,lt=()=>{mt={m0:ge(Math.round(J),0,o),drive:J}},Tt=W=>{if(!mt)return;let{m0:et}=mt,ot=mt.drive-et,Wt=et;(Math.abs(ot)>.08||Math.abs(W||0)>.6)&&(Wt=et+Math.sign(Math.abs(ot)>.08?ot:W)),J=ge(Wt,0,o),mt=null},Ot=W=>{mt||lt(),mt.drive=ge(mt.drive+W,Math.max(0,mt.m0-1),Math.min(o,mt.m0+1)),J=mt.drive},rt=()=>!!(t.isBlocked&&t.isBlocked()),j=null,Gt=W=>{if(W.preventDefault(),rt()||j)return;let et=W.deltaY;W.deltaMode===1?et*=32:W.deltaMode===2&&(et*=At);let ot=performance.now();mt&&ot-gt>260&&Tt(0),gt=ot,Ot(et/760)},Ft=null,ae=W=>{if(j||W.touches.length!==1||rt())return;let et=W.touches[0].clientY;Ft={y:et,y0:et,t:performance.now(),vy:0},lt()},U=W=>{if(W.cancelable&&W.preventDefault(),!Ft||j||P&&(F(W.touches[0].clientX,W.touches[0].clientY),P||j))return;let et=W.touches[0].clientY,ot=performance.now(),Wt=Ft.y-et;Ft.vy=.8*Ft.vy+.2*(Wt/Math.max(1,ot-Ft.t)),Ft.y=et,Ft.t=ot,Ot(Wt/(At*.5))},Mt=()=>{if(!Ft)return;let W=Ft.vy*1e3/(At*.5);Ft=null,Tt(W)},q=W=>{let et=W.key;rt()||W.target&&/^(INPUT|TEXTAREA|SELECT|BUTTON|A)$/.test(W.target.tagName)&&et===" "||(/^(ArrowDown|PageDown|ArrowRight| )$/.test(et)?(W.preventDefault(),$(Math.round(J)+1)):/^(ArrowUp|PageUp|ArrowLeft)$/.test(et)?(W.preventDefault(),$(Math.round(J)-1)):et==="Home"?$(0):et==="End"&&$(o))},$=W=>{mt=null,J=ge(Math.round(W),0,o)},xt={pack:Vo(),c0:Vo(),c1:Vo(),c2:Vo()},Bt=W=>W==="pack"?d.group:w[+W[1]].group,zt=0,le=0,_e=!1,$t=null,Je=new pi,fn=new pi,Qs=new de,Ns=new R,Le=new R,Os=new en(new R(-we.W/2,-we.H/2,-.4),new R(we.W/2,we.H/2,.4)),gr=new en(new R(-Ye.W/2,-Ye.H/2,-.06),new R(Ye.W/2,Ye.H/2,.06)),Ji={pack:1,c0:0,c1:0,c2:0},Mi=(W,et)=>{if($t&&$t.o>.5&&Math.hypot(W-$t.x,et-$t.y)<$t.size*.7)return"coin";Je.origin.copy(h.position),Je.direction.set(W/st*2-1,1-et/At*2,.5).unproject(h).sub(h.position).normalize();let ot=null,Wt=1/0;for(let Vt in xt){if(Ji[Vt]<.5)continue;let ee=Bt(Vt);if(!ee.visible||(ee.updateMatrixWorld(),Qs.copy(ee.matrixWorld).invert(),fn.copy(Je).applyMatrix4(Qs),!fn.intersectBox(Vt==="pack"?Os:gr,Ns)))continue;let re=Ns.applyMatrix4(ee.matrixWorld).distanceTo(h.position);re<Wt&&(Wt=re,ot=Vt)}return ot},Xi=W=>{let et=e.getBoundingClientRect();return[W.clientX-et.left,W.clientY-et.top]},vi=W=>W.target&&W.target.closest&&W.target.closest('button, a, input, [role="dialog"]'),qi=0,Ki=0,xr=0,wr=0,Ho=220,E=8,P=null,H=(W,et,ot,Wt)=>{if(j={key:W,id:et,x:ot,y:Wt,t:performance.now()},W==="coin")_e=!0,le=0;else{let Vt=xt[W];Vt.held=!0,Vt.vel.set(0,0,0),Vt.w.set(0,0,0)}mt=null,Ft=null;try{e.setPointerCapture(et)}catch{}e.style.cursor="grabbing"},V=()=>{P&&(clearTimeout(P.timer),P=null)},F=(W,et)=>{if(!P)return;let[ot,Wt]=Xi({clientX:W,clientY:et}),Vt=ot-P.x,ee=Wt-P.y;if(Math.hypot(Vt,ee)<E)return;let re=P;V(),!(Math.abs(ee)>Math.abs(Vt)*1.15)&&H(re.key,re.id,re.x,re.y)},ft=W=>{if(j||rt()||vi(W)||W.pointerType==="mouse"&&W.button!==0)return;let[et,ot]=Xi(W),Wt=Mi(et,ot);if(Wt){if(W.pointerType==="touch"){V(),P={key:Wt,id:W.pointerId,x:et,y:ot},P.timer=setTimeout(()=>{let Vt=P;Vt&&(V(),!j&&!rt()&&H(Vt.key,Vt.id,Vt.x,Vt.y))},Ho);return}H(Wt,W.pointerId,et,ot)}},Ct=W=>{let[et,ot]=Xi(W);if(P&&W.pointerId===P.id&&F(W.clientX,W.clientY),j&&W.pointerId===j.id){let Wt=performance.now(),Vt=et-j.x,ee=ot-j.y,re=Math.max(8,Wt-j.t)/1e3;if(j.x=et,j.y=ot,j.t=Wt,j.key==="coin"){zt+=Vt*.012,le+=(Vt*.012/re-le)*.4;return}let Re=xt[j.key];Bt(j.key).getWorldPosition(Le);let dn=2*Math.max(1,h.position.z-Le.z)*Math.tan(Yn.degToRad(15))/At;Le.set(Vt*dn,-ee*dn,0),Re.off.add(Le),Re.vel.lerp(Le.divideScalar(re),.4);let pn=Math.hypot(Vt,ee);pn>0&&(Le.set(ee/pn,Vt/pn,0),Re.q.premultiply(new We().setFromAxisAngle(Le,pn*.0055)),Re.w.lerp(Le.multiplyScalar(pn*.0055/re),.4));return}W.pointerType==="mouse"&&(xr=et/st*2-1,wr=ot/At*2-1,rt()||(e.style.cursor=!vi(W)&&Mi(et,ot)?"grab":""))},Pt=W=>{if(P&&W.pointerId===P.id&&V(),!j||W.pointerId!==j.id)return;let et=performance.now()-j.t>90;if(j.key==="coin")_e=!1,et&&(le=0);else{let ot=xt[j.key];ot.held=!1,et&&(ot.vel.set(0,0,0),ot.w.set(0,0,0))}j=null,e.style.cursor=""};e.addEventListener("wheel",Gt,{passive:!1}),e.addEventListener("pointerdown",ft),e.addEventListener("pointermove",Ct),e.addEventListener("pointerup",Pt),e.addEventListener("pointercancel",Pt),e.addEventListener("touchstart",ae,{passive:!0}),e.addEventListener("touchmove",U,{passive:!1}),e.addEventListener("touchend",Mt),e.addEventListener("touchcancel",Mt),window.addEventListener("keydown",q);let Lt=()=>k();window.addEventListener("resize",Lt);let Ht=W=>{for(let et in xt){let ot=xt[et];if(ot.lift+=((ot.held?1:0)-ot.lift)*(1-Math.exp(-W*(ot.held?16:6))),ot.held)continue;ot.vel.addScaledVector(ot.off,-15*W).multiplyScalar(Math.exp(-5.8*W)),ot.off.addScaledVector(ot.vel,W);let ee=ot.w.length();ee>1e-4&&(ot.q.premultiply(new We().setFromAxisAngle(Le.copy(ot.w).divideScalar(ee),ee*W)),ot.w.multiplyScalar(Math.exp(-W*2.4))),ot.q.slerp(S0,1-Math.exp(-W*2.2)),ot.off.lengthSq()<1e-7&&ot.vel.lengthSq()<1e-7&&(ot.off.set(0,0,0),ot.vel.set(0,0,0))}if(!_e&&(le*=Math.exp(-W*1.6),zt+=le*W,Math.abs(le)<1.2)){let et=Math.round(zt/(Math.PI*2))*Math.PI*2;zt+=(et-zt)*(1-Math.exp(-W*3))}},Yt=(W,et)=>{let ot=xt[W];et.position.add(ot.off),et.quaternion.premultiply(ot.q),ot.lift>.001&&et.scale.multiplyScalar(1+.045*ot.lift)},Dt=new R,te=new R,ce=new R,ue=(W,et,ot)=>{W.updateMatrixWorld(),Dt.set(0,0,0).applyMatrix4(W.matrixWorld).project(h),te.set(et,ot,0).applyMatrix4(W.matrixWorld).project(h);let Wt=(Dt.x*.5+.5)*st,Vt=(.5-Dt.y*.5)*At;return{x:Wt,y:Vt,w:Math.abs(te.x-Dt.x)*st,h:Math.abs(te.y-Dt.y)*At}},Jt=0,se=W=>{let et=yt.all("pack",Q),ot=Math.sin(Jt*.75)*.05,Wt=Math.sin(Jt*.31)*.16,Vt=Math.sin(Jt*.43+1)*.045,ee=j&&j.key==="pack",re=ht||ee?0:qi*.22,Re=ht||ee?0:Ki*.12;d.group.position.set(et.x,et.y+ot,et.z),d.group.rotation.set(et.rx+Vt+Re,et.ry+Wt+re+et.spin*Math.PI*2,et.rz),d.group.scale.setScalar(et.s),d.group.visible=et.o>.01;let Fn=yt.v("gpack","k",Q),dn=Y();if(Fn>.001){ut<0&&(ut=Jt);let Ae=Jt-ut,Ee=4.6,xe=2.5,ye=Math.floor(Ae/Ee),fe=Ae-ye*Ee,Xt=fe<xe?0:un.io((fe-xe)/(Ee-xe));d.group.position.copy(dn.p),d.group.scale.setScalar(dn.s*Math.max(1e-4,un.back(Fn))),d.group.rotation.set(Math.sin(Jt*.9)*.05,(ye+Xt)*Math.PI*2,Math.sin(Jt*.7)*.02),d.group.visible=!0,et.tear=0,et.mouth=0,et.o=1}else ut=-1;let pn=ue(d.group,we.W/2,we.H/2);W||Yt("pack",d.group),d.setTear(et.tear),d.setMouth(et.mouth),d.setHolo(Q*.45+Jt*.035+d.group.rotation.y*.9),l.environmentRotation.set(0,Math.sin(Jt*.11)*.45+Math.sin(Q*.9)*.2,0),Ji={pack:et.o};let $n=r==="home";w.forEach((Ae,Ee)=>{let xe=yt.all("c"+Ee,Q),ye=xe.x,fe=xe.y,Xt=xe.z,Xe=xe.s,Mn=xe.rz,an=Ee===0&&xe.slot||0;if(an>0){I.group.position.y=T.y+yt.v("binder","y",Q),I.group.updateMatrixWorld(),ce.copy(I.slot).applyMatrix4(I.group.matrixWorld);let Pe=(h.position.z-Au)/(h.position.z-ce.z),ei=h.position.x+(ce.x-h.position.x)*Pe,yi=h.position.y+(ce.y-h.position.y)*Pe,Yo=(s?1.94:1.32*1.89)*T.s*Pe/Ye.H;ye+=(ei-ye)*an,fe+=(yi-fe)*an,Xt+=(Au-Xt)*an,Xe+=(Yo-Xe)*an,Mn*=1-an}let vn=Ee===0&&!$n&&xe.into||0;if(vn>0){let Pe=Y(),ei=Pe.s*we.H*.74/Ye.H,yi=un.io(ge(vn/.72,0,1)),Yo=un.io(ge((vn-.72)/.28,0,1)),Al=Pe.p.y+we.H*Pe.s*.5+Ye.H*ei*.55,vu=Al+(Pe.p.y-Al)*Yo;ye+=(Pe.p.x-ye)*yi,fe+=(vu-fe)*yi,Xt+=(Pe.p.z-.06-Xt)*yi,Xe+=(ei-Xe)*yi,Mn*=1-yi,vn>.985&&(xe.o=0)}let Vs=Ee===0&&($n?Q>3.1&&Q<5.6?1-an*.5:0:Q>.5&&Q<1.4?1-vn:0);if(Ae.group.position.set(ye,fe+(Ee===0?ot*.6:0),Xt),Ae.group.rotation.set(Vs*(Vt+Re)*.8,(xe.ry||0)+Vs*(Wt*.7+re),Mn),Ae.group.scale.setScalar(Xe),W||Yt("c"+Ee,Ae.group),Ae.setOpacity(xe.o),Ji["c"+Ee]=xe.o,Ae.setHolo(Q*.5+Jt*.04+Ae.group.rotation.y+Ee*.3),Ee===0){let Pe=xe.on,ei=Pe>0&&Pe<.6?Math.sin(Pe*46)>.1?1:.45:1;Ae.setOn(Pe*ei),Ae.setPower(xe.pow*ei),Ae.setToggle(xe.tog),Ae.setLive(xe.pow*ei,Jt)}});let ti=s&&!tt?un.o(wi(.15,1.7,Jt)):1,Mr=du(yt.v("machine","r",Q));if(B.u.uReveal.value=Mr,v){let Ae=yt.v("sky","r",Q)*ti;v.u.uReveal.value=Ae,v.group.visible=Ae>.001,v.base&&(v.group.position.z=v.base.z-yt.v("sky","y",Q)*9-(1-ti)*2.5),(Ae>.001||tt)&&v.update(Jt)}if(S){let Ae=yt.v("burn","r",Q);S.u.uReveal.value=Ae,S.group.visible=Ae>.001,D.uniforms.uBurn.value=$n?Ae:0;let Ee=st/At;if(O){let xe=!$n&&Ae>.001;if(O.group.visible=xe,!xe)O.landed.count&&O.reset(),N=-1,S.coins.forEach(ye=>{ye.fy=void 0});else{let ye=Rt*(X-L)/X,fe=ge(ye*Ee/13,.45,1);O.group.scale.setScalar(fe),O.group.position.set(0,kt-ye/2-.3,L)}}if(Ae>.001&&$n){let ye=Rt*(X- -6)/X;S.u.uFadeY.value.set(kt+(.5-.56)*ye,kt+(.5-.32)*ye),S.coins.forEach((fe,Xt)=>{let Xe=Rt*(X-fe.z)/X,Mn=kt+Xe/2+.8,an=Xe*.6+1.6,vn=Mn-(Jt*fe.sp*.9+fe.ph*an)%an;fe.m.visible=!0,fe.m.position.set((fe.x-.5)*Xe*Ee*.96,vn,fe.z),fe.m.rotation.set(Math.sin(Jt*fe.wx+Xt)*.5,Jt*fe.wy*(Xt%2?1:-1)+Xt*.7,Math.sin(Jt*.4+Xt)*.3),fe.m.scale.setScalar(fe.s*ge(Xe*Ee/13,.45,1))})}else if(Ae>.001){S.u.uFadeY.value.set(-1e5,-99999);let xe=N<0?0:ge(Jt-N,0,.1);N=Jt;let ye=O.group,fe=ye.scale.x;S.coins.forEach((Xt,Xe)=>{let Mn=Rt*(X-Xt.z)/X,an=kt+Mn/2+.8,vn=Xt.s*ge(Mn*Ee/13,.45,1);Xt.fy===void 0&&(Xt.fy=an-Xt.ph*Mn*.75,Xt.gx=(Xt.x-.5)*Mn*Ee*.96),Xt.fy-=xe*Xt.sp*.9;let Vs=Xt.gx/fe,Pe=ye.position.y+O.surface(Vs)*fe;Xt.m.visible=!O.full()||Xt.fy>Pe+2,Xt.m.position.set(Xt.gx,Xt.fy,Xt.z),Xt.m.rotation.set(Math.sin(Jt*Xt.wx+Xe)*.5,Jt*Xt.wy*(Xe%2?1:-1)+Xe*.7,Math.sin(Jt*.4+Xe)*.3),Xt.m.scale.setScalar(vn),Xt.fy<=Pe+.15*vn&&(K.setFromEuler(Xt.m.rotation),O.land(Vs,(Xt.fy-ye.position.y)/fe,(Xt.z-ye.position.z)/fe,K,vn/fe)&&(Xt.fy=an+.5+Math.random()*2.5,Xt.x=Math.random(),Xt.gx=(Xt.x-.5)*Mn*Ee*.96))})}}if(b.u.uReveal.value=yt.v("mars","r",Q),s){b.group.position.set(0,Et+yt.v("mars","y",Q)*It.rise,It.z),b.group.scale.setScalar(pt);let Ae=It.last<0?0:ge(Jt-It.last,0,.1);It.last=Jt,It.spin=b.u.uReveal.value>.001?It.spin+Ae:0,b.planet.rotation.y=-1.92+It.spin*.028+(Q-_t())*.2}else b.group.position.set(0,Et+yt.v("mars","y",Q),-7),b.planet.rotation.y=Jt*.028+(Q-_t())*.15;let Gs=yt.v("hands","r",Q),Wo=yt.v("hands","spread",Q);_.u.uReveal.value=Gs*ti,b0(_.hands,Wo,ht,r==="gifts"&&Q>1?St():et,s),I.u.uReveal.value=yt.v("binder","r",Q),I.group.position.y=T.y+yt.v("binder","y",Q);let fl=yt.v("glow","k",Q);B.group.visible=Mr>.001,b.group.visible=b.u.uReveal.value>.001,I.group.visible=I.u.uReveal.value>.001,_.group.visible=Gs>.001;let dl=$n?Q>3&&Q<5.6:Q>.3&&Q<1.7,zs=dl?ue(w[0].group,Ye.W/2,Ye.H/2):ue(d.group,we.W/2,we.H/2),pl=dl?yt.v("c0","o",Q):et.o;return f.uP.value.set(zs.x/st,zs.y/At,Math.max(.12,zs.h/At*.5),zs.h/At*.55),f.uK.value=fl*pl,{P:et,packScreen:pn,so:zs,vk:pl,glowK:fl}},Qt=new R,on=(W,et,ot,Wt)=>{W.updateMatrixWorld(!0);let Vt=1/0;for(let ee=0;ee<8;ee++)Qt.set(ee&1?et:-et,ee&2?ot:-ot,ee&4?Wt:-Wt).applyMatrix4(W.matrixWorld).project(h),Vt=Math.min(Vt,(.5-Qt.y*.5)*At);return Vt},ie=()=>{let W=Q;nt=[];for(let et=0;et<=o;et++){Q=et,se(!0);let ot=1/0;yt.v("pack","o",et)>.5&&(ot=Math.min(ot,on(d.group,we.W/2,we.H/2,.3))),w.forEach((Wt,Vt)=>{yt.v("c"+Vt,"o",et)>.5&&(ot=Math.min(ot,on(Wt.group,Ye.W/2,Ye.H/2,.01)))}),yt.v("binder","r",et)>.5&&(ot=Math.min(ot,on(I.group,I.size.x/2,I.size.y/2,.1))),nt.push(isFinite(ot)?Math.round(ot):null)}Q=W},$e=W=>{var Re,Fn;let{P:et,packScreen:ot,so:Wt,vk:Vt,glowK:ee}=se(!1),re=!W&&t.onFrame?t.onFrame(Q,{phone:ht,page:r,pack:ot,packVisible:et.o,target:J,W:st,H:At,tops:nt}):null;if($t=re&&re.coin?re.coin:W?{x:st/2,y:At/2,size:80,o:1}:null,re&&re.pack&&(z=re.pack),re&&re.cta&&(ct=re.cta),c.setRenderTarget(null),c.clear(!0,!0,!0),c.render(m,g),D.uniforms.uGlow.value=.9*ee*Vt,s&&nt.length){let dn=ge(Math.floor(Q),0,o),pn=ge(dn+1,0,o),$n=Q-dn,ti=(Re=nt[dn])!=null?Re:nt[pn],Mr=(Fn=nt[pn])!=null?Fn:ti,Gs=ti==null?0:(ti+(Mr-ti)*$n)*at,Wo=r==="home"?ge(B.u.uReveal.value,0,1):0;D.uniforms.uQuiet.value.set(Gs,70*at,Gs>0?.4*(1-Wo):0)}D.render(h,Jt,{x:Wt.x/st,y:Wt.y/At,r:Math.max(.1,Wt.h/At*.55)}),c.clearDepth(),c.render(l,h),$t&&x.update(Jt,$t,st,At,zt)&&(c.clearDepth(),c.render(x.scene,x.camera))},gn=performance.now(),Qe=0,Zn=!0,he=16.7,ke=0,jn=0,Ge=W=>{if(!Zn)return;Qe=requestAnimationFrame(Ge);let et=W-gn,ot=Math.min(.05,et/1e3);gn=W,Jt+=ot,jn+=ot,jn>2.5&&et<120&&at>1&&(he+=(et-he)*.05,ke=he>23?ke+ot:Math.max(0,ke-ot*.5),ke>1.2&&(at=Math.max(1,at-.5),ke=0,he=16.7,k())),mt&&W-gt>260&&!Ft&&gt&&(Tt(0),gt=0);let Wt=J-Q;if(n)Q=Math.round(J),Z=0;else{let Vt=Math.abs(Wt)>1.05&&!mt?Kt:bt,ee=ge(Wt*3.4,-Vt,Vt);Z+=(ee-Z)*Math.min(1,ot*6.5),Q+=Z*ot,Math.abs(Wt)<8e-4&&Math.abs(Z)<.004&&(Q=J,Z=0)}Q=ge(Q,0,o),qi+=(xr-qi)*Math.min(1,ot*3),Ki+=(wr-Ki)*Math.min(1,ot*3),Ht(ot),$e(!1)},xn=()=>{let W=Q;[d.textures,w.flatMap(et=>et.textures),x.textures,I.textures,b.textures||[],S?S.textures:[],v?v.textures:[]].flat().forEach(et=>c.initTexture(et)),tt=!0;for(let et=0;et<=o;et++)Q=et,$e(!0);tt=!1,Q=W};k();try{xn()}catch{}return Ut=!0,ie(),Qe=requestAnimationFrame(Ge),{go:$,step:W=>$(Math.round(J)+W),get t(){return Q},get page(){return r},setPage(W){if(W=W==="gifts"?"gifts":"home",W!==r){r=W,o=mr[W]-1,yt=it(ht),C(),ie(),Q=J=0,Z=0,mt=null;for(let et in xt){let ot=xt[et];ot.off.set(0,0,0),ot.vel.set(0,0,0),ot.q.identity(),ot.w.set(0,0,0)}xn()}},renderNow(){gn=performance.now(),Ge(gn)},seek(W){Q=J=W,Z=0,mt=null},resize:k,_dbg:{ascii:D,mars:b,binder:I,machine:B,hands:_,renderer:c,camera:h,scene:l,grabs:xt,get dpr(){return at},setTime(W){Jt=W}},destroy(){Zn=!1,cancelAnimationFrame(Qe),e.removeEventListener("wheel",Gt),e.removeEventListener("pointerdown",ft),e.removeEventListener("pointermove",Ct),e.removeEventListener("pointerup",Pt),e.removeEventListener("pointercancel",Pt),e.removeEventListener("touchstart",ae),e.removeEventListener("touchmove",U),e.removeEventListener("touchend",Mt),e.removeEventListener("touchcancel",Mt),window.removeEventListener("keydown",q),window.removeEventListener("resize",Lt),V(),d.dispose(),w.forEach(W=>W.dispose()),x.dispose(),D.dispose(),c.dispose()}}}function b0(i,t,e,n,s){let r=s?e?.9:1.35:e?.75:1.1,o=s?1.5:1,a=i.G,c=i.T,l=a.userData.reach,u=c.userData.reach,h=we.H/2*n.s,f=we.W/2*n.s;a.scale.setScalar(r),c.scale.setScalar(r),a.position.set(n.x-.55*f-l.x*r-t*3.9*o,n.y+h-l.y*r+t*2.3*o,n.z-l.z*r),c.position.set(n.x+f-u.x*r+t*4.1*o,n.y-h-.04-u.y*r-t*1.7*o,n.z-u.z*r-.4)}function Mu(i,t={}){let e=new xi({canvas:i,antialias:!0,alpha:!0,premultipliedAlpha:!0});e.toneMapping=Gi,e.outputColorSpace=Ce,e.setClearColor(0,0);let n=new Wn;n.environment=Us(De,e);let s=new be(18,1,.1,100),r=Ps(De,{quality:.8});n.add(r.group);let o=1,a=1,c=t.box||{x:195,y:441,h:416},l=-1,u=0,h=!0,f=!1,A=()=>{o=Math.max(1,i.clientWidth),a=Math.max(1,i.clientHeight),e.setPixelRatio(Math.min(2,(window.devicePixelRatio||1)*(t.scale||1))),e.setSize(o,a,!1);let g=we.H/(c.h/a),d=g/2/Math.tan(Yn.degToRad(9));s.aspect=o/a,s.position.set(0,0,d),s.updateProjectionMatrix();let p=g/a;s.setViewOffset(o,a,o/2-c.x,a/2-c.y,o,a)},m=g=>{if(!h||(u=requestAnimationFrame(m),!f))return;let d=l<0?0:g-l,p=d<650?Math.sin(d/650*Math.PI*7)*(1-d/650)*.06:0,M=wi(650,1180,d),w=wi(700,1050,d),x=un.i(ge((d-1900)/660,0,1));r.group.rotation.set(Math.sin(g/900)*.04,Math.sin(g/1400)*.12,p+x*.25),r.group.position.set(0,-x*we.H*1.4,0),r.setTear(M),r.setMouth(w),r.setHolo(g/3e3+d/900),n.environmentRotation.set(0,g/5e3,0),e.clear(),e.render(n,s)};return A(),u=requestAnimationFrame(m),window.addEventListener("resize",A),{play(g,d){g&&(c=g),d!==void 0&&r.setLabel(d),A(),l=performance.now(),f=!0,i.style.opacity="1"},reset(){f=!1,l=-1,r.setTear(0),r.setMouth(0),e.clear(),i.style.opacity="0"},destroy(){h=!1,cancelAnimationFrame(u),window.removeEventListener("resize",A),r.dispose(),e.dispose()}}}window.SR4={THREE:De,createHome:wu,createRip:Mu,MILESTONES:gu,PAGES:mr,createPack:Ps,createCard:zo,studioEnv:Us,version:"4.1.0"};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
