(()=>{var Bh=Object.defineProperty;var Th=(i,t)=>{for(var e in t)Bh(i,e,{get:t[e],enumerable:!0})};var _e={};Th(_e,{AmbientLight:()=>Jr,BackSide:()=>Se,Box3:()=>qe,BoxGeometry:()=>ci,BufferAttribute:()=>Oe,BufferGeometry:()=>ve,CanvasTexture:()=>ji,CircleGeometry:()=>Fr,Color:()=>Gt,Curve:()=>ze,CustomBlending:()=>oc,DirectionalLight:()=>Xr,DoubleSide:()=>rn,Euler:()=>Ye,ExtrudeGeometry:()=>Nr,FrontSide:()=>dn,Group:()=>Un,LatheGeometry:()=>Ur,LinearFilter:()=>Ke,MathUtils:()=>pi,Matrix4:()=>oe,Mesh:()=>Pe,MeshBasicMaterial:()=>Ki,MeshLambertMaterial:()=>Hr,MeshPhysicalMaterial:()=>Vr,MeshStandardMaterial:()=>Rs,NearestFilter:()=>He,NeutralToneMapping:()=>di,OneFactor:()=>ac,OneMinusSrcAlphaFactor:()=>ws,OrthographicCamera:()=>Vn,PMREMGenerator:()=>Zi,PerspectiveCamera:()=>pe,PlaneGeometry:()=>Gn,Quaternion:()=>Le,Ray:()=>kn,RingGeometry:()=>Or,SRGBColorSpace:()=>de,Scene:()=>Sn,ShaderMaterial:()=>ke,Shape:()=>$i,ShapeGeometry:()=>Qr,SphereGeometry:()=>kr,TorusGeometry:()=>zr,TubeGeometry:()=>Gr,UnsignedByteType:()=>an,Vector2:()=>ut,Vector3:()=>L,Vector4:()=>re,WebGLRenderTarget:()=>cn,WebGLRenderer:()=>Hn});var rc="170";var Dh=0,Ec=1,Ih=2;var Il=1,Rh=2,_n=3,dn=0,Se=1,rn=2,Fn=0,ki=1,Sc=2,Cc=3,bc=4,oc=5,ni=100,Ph=101,Lh=102,Uh=103,Fh=104,Nh=200,ac=201,Oh=202,Qh=203,Qo=204,ws=205,kh=206,zh=207,Gh=208,Vh=209,Hh=210,Wh=211,Yh=212,Xh=213,Jh=214,ko=0,zo=1,Go=2,Hi=3,Vo=4,Ho=5,Wo=6,Yo=7,cc=0,Kh=1,qh=2,Nn=0,Zh=1,jh=2,$h=3,tu=4,eu=5,nu=6,di=7;var Rl=300,Wi=301,Yi=302,Xo=303,Jo=304,Kr=306,Ko=1e3,ri=1001,qo=1002,He=1003,iu=1004;var zs=1005;var Ke=1006,oo=1007;var oi=1008;var an=1009,Pl=1010,Ll=1011,Es=1012,lc=1013,ai=1014,yn=1015,Ps=1016,hc=1017,uc=1018,Xi=1020,Ul=35902,Fl=1021,Nl=1022,on=1023,Ol=1024,Ql=1025,zi=1026,Ji=1027,kl=1028,dc=1029,zl=1030,fc=1031;var pc=1033,dr=33776,fr=33777,pr=33778,Ar=33779,Zo=35840,jo=35841,$o=35842,ta=35843,ea=36196,na=37492,ia=37496,sa=37808,ra=37809,oa=37810,aa=37811,ca=37812,la=37813,ha=37814,ua=37815,da=37816,fa=37817,pa=37818,Aa=37819,ma=37820,ga=37821,mr=36492,xa=36494,va=36495,Gl=36283,_a=36284,Ma=36285,ya=36286;var gr=2300,wa=2301,ao=2302,Bc=2400,Tc=2401,Dc=2402;var su=3200,ru=3201;var Ac=0,ou=1,Ln="",de="srgb",es="srgb-linear",qr="linear",ne="srgb";var wi=7680;var Ic=519,au=512,cu=513,lu=514,Vl=515,hu=516,uu=517,du=518,fu=519,Rc=35044;var Pc="300 es",wn=2e3,xr=2001,Qn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},we=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lc=1234567,xs=Math.PI/180,Ss=180/Math.PI;function fi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(we[i&255]+we[i>>8&255]+we[i>>16&255]+we[i>>24&255]+"-"+we[t&255]+we[t>>8&255]+"-"+we[t>>16&15|64]+we[t>>24&255]+"-"+we[e&63|128]+we[e>>8&255]+"-"+we[e>>16&255]+we[e>>24&255]+we[n&255]+we[n>>8&255]+we[n>>16&255]+we[n>>24&255]).toLowerCase()}function fe(i,t,e){return Math.max(t,Math.min(e,i))}function mc(i,t){return(i%t+t)%t}function pu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Au(i,t,e){return i!==t?(e-i)/(t-i):0}function vs(i,t,e){return(1-e)*i+e*t}function mu(i,t,e,n){return vs(i,t,1-Math.exp(-e*n))}function gu(i,t=1){return t-Math.abs(mc(i,t*2)-t)}function xu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function vu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function _u(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Mu(i,t){return i+Math.random()*(t-i)}function yu(i){return i*(.5-Math.random())}function wu(i){i!==void 0&&(Lc=i);let t=Lc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Eu(i){return i*xs}function Su(i){return i*Ss}function Cu(i){return(i&i-1)===0&&i!==0}function bu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Bu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Tu(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),h=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*u,c*h,c*d,a*l);break;case"YZY":i.set(c*d,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*d,a*u,a*l);break;case"XZX":i.set(a*u,c*m,c*f,a*l);break;case"YXY":i.set(c*f,a*u,c*m,a*l);break;case"ZYZ":i.set(c*m,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ni(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ie(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var pi={DEG2RAD:xs,RAD2DEG:Ss,generateUUID:fi,clamp:fe,euclideanModulo:mc,mapLinear:pu,inverseLerp:Au,lerp:vs,damp:mu,pingpong:gu,smoothstep:xu,smootherstep:vu,randInt:_u,randFloat:Mu,randFloatSpread:yu,seededRandom:wu,degToRad:Eu,radToDeg:Su,isPowerOfTwo:Cu,ceilPowerOfTwo:bu,floorPowerOfTwo:Bu,setQuaternionFromProperEuler:Tu,normalize:Ie,denormalize:Ni},ut=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},kt=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],m=n[8],g=s[0],A=s[3],p=s[6],M=s[1],_=s[4],x=s[7],P=s[2],b=s[5],D=s[8];return r[0]=o*g+a*M+c*P,r[3]=o*A+a*_+c*b,r[6]=o*p+a*x+c*D,r[1]=l*g+u*M+h*P,r[4]=l*A+u*_+h*b,r[7]=l*p+u*x+h*D,r[2]=d*g+f*M+m*P,r[5]=d*A+f*_+m*b,r[8]=d*p+f*x+m*D,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,d=a*c-u*r,f=l*r-o*c,m=e*h+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/m;return t[0]=h*g,t[1]=(s*l-u*n)*g,t[2]=(a*n-s*o)*g,t[3]=d*g,t[4]=(u*e-s*c)*g,t[5]=(s*r-a*e)*g,t[6]=f*g,t[7]=(n*c-l*e)*g,t[8]=(o*e-n*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(co.makeScale(t,e)),this}rotate(t){return this.premultiply(co.makeRotation(-t)),this}translate(t,e){return this.premultiply(co.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},co=new kt;function Hl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function vr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Du(){let i=vr("canvas");return i.style.display="block",i}var Uc={};function ms(i){i in Uc||(Uc[i]=!0,console.warn(i))}function Iu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Ru(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Pu(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var qt={enabled:!0,workingColorSpace:es,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ne&&(i.r=En(i.r),i.g=En(i.g),i.b=En(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ne&&(i.r=Gi(i.r),i.g=Gi(i.g),i.b=Gi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ln?qr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function En(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Gi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Fc=[.64,.33,.3,.6,.15,.06],Nc=[.2126,.7152,.0722],Oc=[.3127,.329],Qc=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kc=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);qt.define({[es]:{primaries:Fc,whitePoint:Oc,transfer:qr,toXYZ:Qc,fromXYZ:kc,luminanceCoefficients:Nc,workingColorSpaceConfig:{unpackColorSpace:de},outputColorSpaceConfig:{drawingBufferColorSpace:de}},[de]:{primaries:Fc,whitePoint:Oc,transfer:ne,toXYZ:Qc,fromXYZ:kc,luminanceCoefficients:Nc,outputColorSpaceConfig:{drawingBufferColorSpace:de}}});var Ei,Ea=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ei===void 0&&(Ei=vr("canvas")),Ei.width=t.width,Ei.height=t.height;let n=Ei.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ei}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=vr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=En(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(En(e[n]/255)*255):e[n]=En(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Lu=0,_r=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=fi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(lo(s[o].image)):r.push(lo(s[o]))}else r=lo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function lo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ea.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Uu=0,We=class i extends Qn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ri,s=ri,r=Ke,o=oi,a=on,c=an,l=i.DEFAULT_ANISOTROPY,u=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=fi(),this.name="",this.source=new _r(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Rl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ko:t.x=t.x-Math.floor(t.x);break;case ri:t.x=t.x<0?0:1;break;case qo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ko:t.y=t.y-Math.floor(t.y);break;case ri:t.y=t.y<0?0:1;break;case qo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=Rl;We.DEFAULT_ANISOTROPY=1;var re=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],m=c[9],g=c[2],A=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(m-A)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(m+A)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(l+1)/2,x=(f+1)/2,P=(p+1)/2,b=(u+d)/4,D=(h+g)/4,R=(m+A)/4;return _>x&&_>P?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=b/n,r=D/n):x>P?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=b/s,r=R/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=D/r,s=R/r),this.set(n,s,r,e),this}let M=Math.sqrt((A-m)*(A-m)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(A-m)/M,this.y=(h-g)/M,this.z=(d-u)/M,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Sa=class extends Qn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ke,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new We(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new _r(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},cn=class extends Sa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Mr=class extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=He,this.minFilter=He,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ca=class extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=He,this.minFilter=He,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Le=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3],d=r[o+0],f=r[o+1],m=r[o+2],g=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=g;return}if(h!==g||c!==d||l!==f||u!==m){let A=1-a,p=c*d+l*f+u*m+h*g,M=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let P=Math.sqrt(_),b=Math.atan2(P,p*M);A=Math.sin(A*b)/P,a=Math.sin(a*b)/P}let x=a*M;if(c=c*A+d*x,l=l*A+f*x,u=u*A+m*x,h=h*A+g*x,A===1-a){let P=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=P,l*=P,u*=P,h*=P}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+u*h+c*f-l*d,t[e+1]=c*m+u*d+l*h-a*f,t[e+2]=l*m+u*f+a*d-c*h,t[e+3]=u*m-a*h-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),d=c(n/2),f=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h+d*f*m;break;case"YZX":this._x=d*u*h+l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h-d*f*m;break;case"XZY":this._x=d*u*h-l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ho.copy(this).projectOnVector(t),this.sub(ho)}reflect(t){return this.sub(ho.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ho=new L,zc=new Le,qe=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(en.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(en.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=en.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,en):en.fromBufferAttribute(r,o),en.applyMatrix4(t.matrixWorld),this.expandByPoint(en);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Gs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gs.copy(n.boundingBox)),Gs.applyMatrix4(t.matrixWorld),this.union(Gs)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,en),en.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ds),Vs.subVectors(this.max,ds),Si.subVectors(t.a,ds),Ci.subVectors(t.b,ds),bi.subVectors(t.c,ds),Bn.subVectors(Ci,Si),Tn.subVectors(bi,Ci),Kn.subVectors(Si,bi);let e=[0,-Bn.z,Bn.y,0,-Tn.z,Tn.y,0,-Kn.z,Kn.y,Bn.z,0,-Bn.x,Tn.z,0,-Tn.x,Kn.z,0,-Kn.x,-Bn.y,Bn.x,0,-Tn.y,Tn.x,0,-Kn.y,Kn.x,0];return!uo(e,Si,Ci,bi,Vs)||(e=[1,0,0,0,1,0,0,0,1],!uo(e,Si,Ci,bi,Vs))?!1:(Hs.crossVectors(Bn,Tn),e=[Hs.x,Hs.y,Hs.z],uo(e,Si,Ci,bi,Vs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,en).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(en).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(An),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},An=[new L,new L,new L,new L,new L,new L,new L,new L],en=new L,Gs=new qe,Si=new L,Ci=new L,bi=new L,Bn=new L,Tn=new L,Kn=new L,ds=new L,Vs=new L,Hs=new L,qn=new L;function uo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){qn.fromArray(i,r);let a=s.x*Math.abs(qn.x)+s.y*Math.abs(qn.y)+s.z*Math.abs(qn.z),c=t.dot(qn),l=e.dot(qn),u=n.dot(qn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var Fu=new qe,fs=new L,fo=new L,Cs=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Fu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fs.subVectors(t,this.center);let e=fs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(fs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fs.copy(t.center).add(fo)),this.expandByPoint(fs.copy(t.center).sub(fo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},mn=new L,po=new L,Ws=new L,Dn=new L,Ao=new L,Ys=new L,mo=new L,kn=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mn.copy(this.origin).addScaledVector(this.direction,e),mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){po.copy(t).add(e).multiplyScalar(.5),Ws.copy(e).sub(t).normalize(),Dn.copy(this.origin).sub(po);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ws),a=Dn.dot(this.direction),c=-Dn.dot(Ws),l=Dn.lengthSq(),u=Math.abs(1-o*o),h,d,f,m;if(u>0)if(h=o*c-a,d=o*a-c,m=r*u,h>=0)if(d>=-m)if(d<=m){let g=1/u;h*=g,d*=g,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-m?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=m?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(po).addScaledVector(Ws,d),f}intersectSphere(t,e){mn.subVectors(t.center,this.origin);let n=mn.dot(this.direction),s=mn.dot(mn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-d.z)*h,c=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,c=(t.min.z-d.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,mn)!==null}intersectTriangle(t,e,n,s,r){Ao.subVectors(e,t),Ys.subVectors(n,t),mo.crossVectors(Ao,Ys);let o=this.direction.dot(mo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Dn.subVectors(this.origin,t);let c=a*this.direction.dot(Ys.crossVectors(Dn,Ys));if(c<0)return null;let l=a*this.direction.dot(Ao.cross(Dn));if(l<0||c+l>o)return null;let u=-a*Dn.dot(mo);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},oe=class i{constructor(t,e,n,s,r,o,a,c,l,u,h,d,f,m,g,A){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,h,d,f,m,g,A)}set(t,e,n,s,r,o,a,c,l,u,h,d,f,m,g,A){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=m,p[11]=g,p[15]=A,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Bi.setFromMatrixColumn(t,0).length(),r=1/Bi.setFromMatrixColumn(t,1).length(),o=1/Bi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let d=o*u,f=o*h,m=a*u,g=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=f+m*l,e[5]=d-g*l,e[9]=-a*c,e[2]=g-d*l,e[6]=m+f*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*u,f=c*h,m=l*u,g=l*h;e[0]=d+g*a,e[4]=m*a-f,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=f*a-m,e[6]=g+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*u,f=c*h,m=l*u,g=l*h;e[0]=d-g*a,e[4]=-o*h,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*u,e[9]=g-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*u,f=o*h,m=a*u,g=a*h;e[0]=c*u,e[4]=m*l-f,e[8]=d*l+g,e[1]=c*h,e[5]=g*l+d,e[9]=f*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,f=o*l,m=a*c,g=a*l;e[0]=c*u,e[4]=g-d*h,e[8]=m*h+f,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=f*h+m,e[10]=d-g*h}else if(t.order==="XZY"){let d=o*c,f=o*l,m=a*c,g=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=d*h+g,e[5]=o*u,e[9]=f*h-m,e[2]=m*h-f,e[6]=a*u,e[10]=g*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Nu,t,Ou)}lookAt(t,e,n){let s=this.elements;return Ge.subVectors(t,e),Ge.lengthSq()===0&&(Ge.z=1),Ge.normalize(),In.crossVectors(n,Ge),In.lengthSq()===0&&(Math.abs(n.z)===1?Ge.x+=1e-4:Ge.z+=1e-4,Ge.normalize(),In.crossVectors(n,Ge)),In.normalize(),Xs.crossVectors(Ge,In),s[0]=In.x,s[4]=Xs.x,s[8]=Ge.x,s[1]=In.y,s[5]=Xs.y,s[9]=Ge.y,s[2]=In.z,s[6]=Xs.z,s[10]=Ge.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],m=n[2],g=n[6],A=n[10],p=n[14],M=n[3],_=n[7],x=n[11],P=n[15],b=s[0],D=s[4],R=s[8],w=s[12],y=s[1],I=s[5],H=s[9],N=s[13],G=s[2],J=s[6],V=s[10],q=s[14],z=s[3],st=s[7],lt=s[11],et=s[15];return r[0]=o*b+a*y+c*G+l*z,r[4]=o*D+a*I+c*J+l*st,r[8]=o*R+a*H+c*V+l*lt,r[12]=o*w+a*N+c*q+l*et,r[1]=u*b+h*y+d*G+f*z,r[5]=u*D+h*I+d*J+f*st,r[9]=u*R+h*H+d*V+f*lt,r[13]=u*w+h*N+d*q+f*et,r[2]=m*b+g*y+A*G+p*z,r[6]=m*D+g*I+A*J+p*st,r[10]=m*R+g*H+A*V+p*lt,r[14]=m*w+g*N+A*q+p*et,r[3]=M*b+_*y+x*G+P*z,r[7]=M*D+_*I+x*J+P*st,r[11]=M*R+_*H+x*V+P*lt,r[15]=M*w+_*N+x*q+P*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],d=t[10],f=t[14],m=t[3],g=t[7],A=t[11],p=t[15];return m*(+r*c*h-s*l*h-r*a*d+n*l*d+s*a*f-n*c*f)+g*(+e*c*f-e*l*d+r*o*d-s*o*f+s*l*u-r*c*u)+A*(+e*l*h-e*a*f-r*o*h+n*o*f+r*a*u-n*l*u)+p*(-s*a*u-e*c*h+e*a*d+s*o*h-n*o*d+n*c*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],d=t[10],f=t[11],m=t[12],g=t[13],A=t[14],p=t[15],M=h*A*l-g*d*l+g*c*f-a*A*f-h*c*p+a*d*p,_=m*d*l-u*A*l-m*c*f+o*A*f+u*c*p-o*d*p,x=u*g*l-m*h*l+m*a*f-o*g*f-u*a*p+o*h*p,P=m*h*c-u*g*c-m*a*d+o*g*d+u*a*A-o*h*A,b=e*M+n*_+s*x+r*P;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/b;return t[0]=M*D,t[1]=(g*d*r-h*A*r-g*s*f+n*A*f+h*s*p-n*d*p)*D,t[2]=(a*A*r-g*c*r+g*s*l-n*A*l-a*s*p+n*c*p)*D,t[3]=(h*c*r-a*d*r-h*s*l+n*d*l+a*s*f-n*c*f)*D,t[4]=_*D,t[5]=(u*A*r-m*d*r+m*s*f-e*A*f-u*s*p+e*d*p)*D,t[6]=(m*c*r-o*A*r-m*s*l+e*A*l+o*s*p-e*c*p)*D,t[7]=(o*d*r-u*c*r+u*s*l-e*d*l-o*s*f+e*c*f)*D,t[8]=x*D,t[9]=(m*h*r-u*g*r-m*n*f+e*g*f+u*n*p-e*h*p)*D,t[10]=(o*g*r-m*a*r+m*n*l-e*g*l-o*n*p+e*a*p)*D,t[11]=(u*a*r-o*h*r-u*n*l+e*h*l+o*n*f-e*a*f)*D,t[12]=P*D,t[13]=(u*g*s-m*h*s+m*n*d-e*g*d-u*n*A+e*h*A)*D,t[14]=(m*a*s-o*g*s-m*n*c+e*g*c+o*n*A-e*a*A)*D,t[15]=(o*h*s-u*a*s+u*n*c-e*h*c-o*n*d+e*a*d)*D,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,h=a+a,d=r*l,f=r*u,m=r*h,g=o*u,A=o*h,p=a*h,M=c*l,_=c*u,x=c*h,P=n.x,b=n.y,D=n.z;return s[0]=(1-(g+p))*P,s[1]=(f+x)*P,s[2]=(m-_)*P,s[3]=0,s[4]=(f-x)*b,s[5]=(1-(d+p))*b,s[6]=(A+M)*b,s[7]=0,s[8]=(m+_)*D,s[9]=(A-M)*D,s[10]=(1-(d+g))*D,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Bi.set(s[0],s[1],s[2]).length(),o=Bi.set(s[4],s[5],s[6]).length(),a=Bi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],nn.copy(this);let l=1/r,u=1/o,h=1/a;return nn.elements[0]*=l,nn.elements[1]*=l,nn.elements[2]*=l,nn.elements[4]*=u,nn.elements[5]*=u,nn.elements[6]*=u,nn.elements[8]*=h,nn.elements[9]*=h,nn.elements[10]*=h,e.setFromRotationMatrix(nn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=wn){let c=this.elements,l=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s),f,m;if(a===wn)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===xr)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=wn){let c=this.elements,l=1/(e-t),u=1/(n-s),h=1/(o-r),d=(e+t)*l,f=(n+s)*u,m,g;if(a===wn)m=(o+r)*h,g=-2*h;else if(a===xr)m=r*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=g,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Bi=new L,nn=new oe,Nu=new L(0,0,0),Ou=new L(1,1,1),In=new L,Xs=new L,Ge=new L,Gc=new oe,Vc=new Le,Ye=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-fe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(fe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-fe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(fe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Gc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Vc.setFromEuler(this),this.setFromQuaternion(Vc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ye.DEFAULT_ORDER="XYZ";var yr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Qu=0,Hc=new L,Ti=new Le,gn=new oe,Js=new L,ps=new L,ku=new L,zu=new Le,Wc=new L(1,0,0),Yc=new L(0,1,0),Xc=new L(0,0,1),Jc={type:"added"},Gu={type:"removed"},Di={type:"childadded",child:null},go={type:"childremoved",child:null},Qe=class i extends Qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qu++}),this.uuid=fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new L,e=new Ye,n=new Le,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new kt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ti.setFromAxisAngle(t,e),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(t,e){return Ti.setFromAxisAngle(t,e),this.quaternion.premultiply(Ti),this}rotateX(t){return this.rotateOnAxis(Wc,t)}rotateY(t){return this.rotateOnAxis(Yc,t)}rotateZ(t){return this.rotateOnAxis(Xc,t)}translateOnAxis(t,e){return Hc.copy(t).applyQuaternion(this.quaternion),this.position.add(Hc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wc,t)}translateY(t){return this.translateOnAxis(Yc,t)}translateZ(t){return this.translateOnAxis(Xc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Js.copy(t):Js.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(ps,Js,this.up):gn.lookAt(Js,ps,this.up),this.quaternion.setFromRotationMatrix(gn),s&&(gn.extractRotation(s.matrixWorld),Ti.setFromRotationMatrix(gn),this.quaternion.premultiply(Ti.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Jc),Di.child=t,this.dispatchEvent(Di),Di.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Gu),go.child=t,this.dispatchEvent(go),go.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Jc),Di.child=t,this.dispatchEvent(Di),Di.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,t,ku),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,zu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Qe.DEFAULT_UP=new L(0,1,0);Qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var sn=new L,xn=new L,xo=new L,vn=new L,Ii=new L,Ri=new L,Kc=new L,vo=new L,_o=new L,Mo=new L,yo=new re,wo=new re,Eo=new re,ii=class i{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),sn.subVectors(t,e),s.cross(sn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){sn.subVectors(s,e),xn.subVectors(n,e),xo.subVectors(t,e);let o=sn.dot(sn),a=sn.dot(xn),c=sn.dot(xo),l=xn.dot(xn),u=xn.dot(xo),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(l*c-a*u)*d,m=(o*u-a*c)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,vn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,vn.x),c.addScaledVector(o,vn.y),c.addScaledVector(a,vn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return yo.setScalar(0),wo.setScalar(0),Eo.setScalar(0),yo.fromBufferAttribute(t,e),wo.fromBufferAttribute(t,n),Eo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(yo,r.x),o.addScaledVector(wo,r.y),o.addScaledVector(Eo,r.z),o}static isFrontFacing(t,e,n,s){return sn.subVectors(n,e),xn.subVectors(t,e),sn.cross(xn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return sn.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),sn.cross(xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Ii.subVectors(s,n),Ri.subVectors(r,n),vo.subVectors(t,n);let c=Ii.dot(vo),l=Ri.dot(vo);if(c<=0&&l<=0)return e.copy(n);_o.subVectors(t,s);let u=Ii.dot(_o),h=Ri.dot(_o);if(u>=0&&h<=u)return e.copy(s);let d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(Ii,o);Mo.subVectors(t,r);let f=Ii.dot(Mo),m=Ri.dot(Mo);if(m>=0&&f<=m)return e.copy(r);let g=f*l-c*m;if(g<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(Ri,a);let A=u*m-f*h;if(A<=0&&h-u>=0&&f-m>=0)return Kc.subVectors(r,s),a=(h-u)/(h-u+(f-m)),e.copy(s).addScaledVector(Kc,a);let p=1/(A+g+d);return o=g*p,a=d*p,e.copy(n).addScaledVector(Ii,o).addScaledVector(Ri,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Wl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},Ks={h:0,s:0,l:0};function So(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Gt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=de){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=qt.workingColorSpace){if(t=mc(t,1),e=fe(e,0,1),n=fe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=So(o,r,t+1/3),this.g=So(o,r,t),this.b=So(o,r,t-1/3)}return qt.toWorkingColorSpace(this,s),this}setStyle(t,e=de){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=de){let n=Wl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=En(t.r),this.g=En(t.g),this.b=En(t.b),this}copyLinearToSRGB(t){return this.r=Gi(t.r),this.g=Gi(t.g),this.b=Gi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=de){return qt.fromWorkingColorSpace(Ee.copy(this),t),Math.round(fe(Ee.r*255,0,255))*65536+Math.round(fe(Ee.g*255,0,255))*256+Math.round(fe(Ee.b*255,0,255))}getHexString(t=de){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(Ee.copy(this),e);let n=Ee.r,s=Ee.g,r=Ee.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(Ee.copy(this),e),t.r=Ee.r,t.g=Ee.g,t.b=Ee.b,t}getStyle(t=de){qt.fromWorkingColorSpace(Ee.copy(this),t);let e=Ee.r,n=Ee.g,s=Ee.b;return t!==de?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Rn),this.setHSL(Rn.h+t,Rn.s+e,Rn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Rn),t.getHSL(Ks);let n=vs(Rn.h,Ks.h,e),s=vs(Rn.s,Ks.s,e),r=vs(Rn.l,Ks.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ee=new Gt;Gt.NAMES=Wl;var Vu=0,zn=class extends Qn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=fi(),this.name="",this.blending=ki,this.side=dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qo,this.blendDst=ws,this.blendEquation=ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=Hi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ic,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wi,this.stencilZFail=wi,this.stencilZPass=wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ki&&(n.blending=this.blending),this.side!==dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Qo&&(n.blendSrc=this.blendSrc),this.blendDst!==ws&&(n.blendDst=this.blendDst),this.blendEquation!==ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Hi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ic&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ki=class extends zn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ye,this.combine=cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var he=new L,qs=new ut,Oe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Rc,this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)qs.fromBufferAttribute(this,e),qs.applyMatrix3(t),this.setXY(e,qs.x,qs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.applyMatrix3(t),this.setXYZ(e,he.x,he.y,he.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.applyMatrix4(t),this.setXYZ(e,he.x,he.y,he.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.applyNormalMatrix(t),this.setXYZ(e,he.x,he.y,he.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.transformDirection(t),this.setXYZ(e,he.x,he.y,he.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ni(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ie(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ni(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ni(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ni(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ni(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),s=Ie(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),s=Ie(s,this.array),r=Ie(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Rc&&(t.usage=this.usage),t}};var wr=class extends Oe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Er=class extends Oe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Zt=class extends Oe{constructor(t,e,n){super(new Float32Array(t),e,n)}},Hu=0,Je=new oe,Co=new Qe,Pi=new L,Ve=new qe,As=new qe,xe=new L,ve=class i extends Qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hl(t)?Er:wr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Je.makeRotationFromQuaternion(t),this.applyMatrix4(Je),this}rotateX(t){return Je.makeRotationX(t),this.applyMatrix4(Je),this}rotateY(t){return Je.makeRotationY(t),this.applyMatrix4(Je),this}rotateZ(t){return Je.makeRotationZ(t),this.applyMatrix4(Je),this}translate(t,e,n){return Je.makeTranslation(t,e,n),this.applyMatrix4(Je),this}scale(t,e,n){return Je.makeScale(t,e,n),this.applyMatrix4(Je),this}lookAt(t){return Co.lookAt(t),Co.updateMatrix(),this.applyMatrix4(Co.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pi).negate(),this.translate(Pi.x,Pi.y,Pi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Zt(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qe);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ve.setFromBufferAttribute(r),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,Ve.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,Ve.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(Ve.min),this.boundingBox.expandByPoint(Ve.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(Ve.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];As.setFromBufferAttribute(a),this.morphTargetsRelative?(xe.addVectors(Ve.min,As.min),Ve.expandByPoint(xe),xe.addVectors(Ve.max,As.max),Ve.expandByPoint(xe)):(Ve.expandByPoint(As.min),Ve.expandByPoint(As.max))}Ve.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)xe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(xe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)xe.fromBufferAttribute(a,l),c&&(Pi.fromBufferAttribute(t,l),xe.add(Pi)),s=Math.max(s,n.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oe(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<n.count;R++)a[R]=new L,c[R]=new L;let l=new L,u=new L,h=new L,d=new ut,f=new ut,m=new ut,g=new L,A=new L;function p(R,w,y){l.fromBufferAttribute(n,R),u.fromBufferAttribute(n,w),h.fromBufferAttribute(n,y),d.fromBufferAttribute(r,R),f.fromBufferAttribute(r,w),m.fromBufferAttribute(r,y),u.sub(l),h.sub(l),f.sub(d),m.sub(d);let I=1/(f.x*m.y-m.x*f.y);isFinite(I)&&(g.copy(u).multiplyScalar(m.y).addScaledVector(h,-f.y).multiplyScalar(I),A.copy(h).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(I),a[R].add(g),a[w].add(g),a[y].add(g),c[R].add(A),c[w].add(A),c[y].add(A))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let R=0,w=M.length;R<w;++R){let y=M[R],I=y.start,H=y.count;for(let N=I,G=I+H;N<G;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let _=new L,x=new L,P=new L,b=new L;function D(R){P.fromBufferAttribute(s,R),b.copy(P);let w=a[R];_.copy(w),_.sub(P.multiplyScalar(P.dot(w))).normalize(),x.crossVectors(b,w);let I=x.dot(c[R])<0?-1:1;o.setXYZW(R,_.x,_.y,_.z,I)}for(let R=0,w=M.length;R<w;++R){let y=M[R],I=y.start,H=y.count;for(let N=I,G=I+H;N<G;N+=3)D(t.getX(N+0)),D(t.getX(N+1)),D(t.getX(N+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Oe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,u=new L,h=new L;if(t)for(let d=0,f=t.count;d<f;d+=3){let m=t.getX(d+0),g=t.getX(d+1),A=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,A),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,A),a.add(u),c.add(u),l.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(A,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(a,c){let l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u),f=0,m=0;for(let g=0,A=c.length;g<A;g++){a.isInterleavedBufferAttribute?f=c[g]*a.data.stride+a.offset:f=c[g]*u;for(let p=0;p<u;p++)d[m++]=l[f++]}return new Oe(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){let d=l[u],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){let f=l[h];u.push(f.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,u=o.length;l<u;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},qc=new oe,Zn=new kn,Zs=new Cs,Zc=new L,js=new L,$s=new L,tr=new L,bo=new L,er=new L,jc=new L,nr=new L,Pe=class extends Qe{constructor(t=new ve,e=new Ki){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){er.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],h=r[c];u!==0&&(bo.fromBufferAttribute(h,t),o?er.addScaledVector(bo,u):er.addScaledVector(bo.sub(e),u))}e.add(er)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zs.copy(n.boundingSphere),Zs.applyMatrix4(r),Zn.copy(t.ray).recast(t.near),!(Zs.containsPoint(Zn.origin)===!1&&(Zn.intersectSphere(Zs,Zc)===null||Zn.origin.distanceToSquared(Zc)>(t.far-t.near)**2))&&(qc.copy(r).invert(),Zn.copy(t.ray).applyMatrix4(qc),!(n.boundingBox!==null&&Zn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Zn)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,g=d.length;m<g;m++){let A=d[m],p=o[A.materialIndex],M=Math.max(A.start,f.start),_=Math.min(a.count,Math.min(A.start+A.count,f.start+f.count));for(let x=M,P=_;x<P;x+=3){let b=a.getX(x),D=a.getX(x+1),R=a.getX(x+2);s=ir(this,p,t,n,l,u,h,b,D,R),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=A.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let A=m,p=g;A<p;A+=3){let M=a.getX(A),_=a.getX(A+1),x=a.getX(A+2);s=ir(this,o,t,n,l,u,h,M,_,x),s&&(s.faceIndex=Math.floor(A/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,g=d.length;m<g;m++){let A=d[m],p=o[A.materialIndex],M=Math.max(A.start,f.start),_=Math.min(c.count,Math.min(A.start+A.count,f.start+f.count));for(let x=M,P=_;x<P;x+=3){let b=x,D=x+1,R=x+2;s=ir(this,p,t,n,l,u,h,b,D,R),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=A.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),g=Math.min(c.count,f.start+f.count);for(let A=m,p=g;A<p;A+=3){let M=A,_=A+1,x=A+2;s=ir(this,o,t,n,l,u,h,M,_,x),s&&(s.faceIndex=Math.floor(A/3),e.push(s))}}}};function Wu(i,t,e,n,s,r,o,a){let c;if(t.side===Se?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===dn,a),c===null)return null;nr.copy(a),nr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(nr);return l<e.near||l>e.far?null:{distance:l,point:nr.clone(),object:i}}function ir(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,js),i.getVertexPosition(c,$s),i.getVertexPosition(l,tr);let u=Wu(i,t,e,n,js,$s,tr,jc);if(u){let h=new L;ii.getBarycoord(jc,js,$s,tr,h),s&&(u.uv=ii.getInterpolatedAttribute(s,a,c,l,h,new ut)),r&&(u.uv1=ii.getInterpolatedAttribute(r,a,c,l,h,new ut)),o&&(u.normal=ii.getInterpolatedAttribute(o,a,c,l,h,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new L,materialIndex:0};ii.getNormal(js,$s,tr,d.normal),u.face=d,u.barycoord=h}return u}var ci=class i extends ve{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],h=[],d=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(u,3)),this.setAttribute("uv",new Zt(h,2));function m(g,A,p,M,_,x,P,b,D,R,w){let y=x/D,I=P/R,H=x/2,N=P/2,G=b/2,J=D+1,V=R+1,q=0,z=0,st=new L;for(let lt=0;lt<V;lt++){let et=lt*I-N;for(let vt=0;vt<J;vt++){let Rt=vt*y-H;st[g]=Rt*M,st[A]=et*_,st[p]=G,l.push(st.x,st.y,st.z),st[g]=0,st[A]=0,st[p]=b>0?1:-1,u.push(st.x,st.y,st.z),h.push(vt/D),h.push(1-lt/R),q+=1}}for(let lt=0;lt<R;lt++)for(let et=0;et<D;et++){let vt=d+et+J*lt,Rt=d+et+J*(lt+1),k=d+(et+1)+J*(lt+1),rt=d+(et+1)+J*lt;c.push(vt,Rt,rt),c.push(Rt,k,rt),z+=6}a.addGroup(f,z,w),f+=z,d+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function qi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Re(i){let t={};for(let e=0;e<i.length;e++){let n=qi(i[e]);for(let s in n)t[s]=n[s]}return t}function Yu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Yl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}var Xu={clone:qi,merge:Re},Ju=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ku=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ke=class extends zn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ju,this.fragmentShader=Ku,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qi(t.uniforms),this.uniformsGroups=Yu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Sr=class extends Qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=wn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Pn=new L,$c=new ut,tl=new ut,pe=class extends Sr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ss*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(xs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ss*2*Math.atan(Math.tan(xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Pn.x,Pn.y).multiplyScalar(-t/Pn.z),Pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pn.x,Pn.y).multiplyScalar(-t/Pn.z)}getViewSize(t,e){return this.getViewBounds(t,$c,tl),e.subVectors(tl,$c)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(xs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Li=-90,Ui=1,ba=class extends Qe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new pe(Li,Ui,t,e);s.layers=this.layers,this.add(s);let r=new pe(Li,Ui,t,e);r.layers=this.layers,this.add(r);let o=new pe(Li,Ui,t,e);o.layers=this.layers,this.add(o);let a=new pe(Li,Ui,t,e);a.layers=this.layers,this.add(a);let c=new pe(Li,Ui,t,e);c.layers=this.layers,this.add(c);let l=new pe(Li,Ui,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===wn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===xr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Cr=class extends We{constructor(t,e,n,s,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Wi,super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ba=class extends cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Cr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ke}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ci(5,5,5),r=new ke({name:"CubemapFromEquirect",uniforms:qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Se,blending:Fn});r.uniforms.tEquirect.value=e;let o=new Pe(s,r),a=e.minFilter;return e.minFilter===oi&&(e.minFilter=Ke),new ba(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Bo=new L,qu=new L,Zu=new kt,Mn=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Bo.subVectors(n,e).cross(qu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Bo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Zu.getNormalMatrix(t),s=this.coplanarPoint(Bo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},jn=new Cs,sr=new L,bs=class{constructor(t=new Mn,e=new Mn,n=new Mn,s=new Mn,r=new Mn,o=new Mn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=wn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],f=s[8],m=s[9],g=s[10],A=s[11],p=s[12],M=s[13],_=s[14],x=s[15];if(n[0].setComponents(c-r,d-l,A-f,x-p).normalize(),n[1].setComponents(c+r,d+l,A+f,x+p).normalize(),n[2].setComponents(c+o,d+u,A+m,x+M).normalize(),n[3].setComponents(c-o,d-u,A-m,x-M).normalize(),n[4].setComponents(c-a,d-h,A-g,x-_).normalize(),e===wn)n[5].setComponents(c+a,d+h,A+g,x+_).normalize();else if(e===xr)n[5].setComponents(a,h,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),jn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),jn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(jn)}intersectsSprite(t){return jn.center.set(0,0,0),jn.radius=.7071067811865476,jn.applyMatrix4(t.matrixWorld),this.intersectsSphere(jn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(sr.x=s.normal.x>0?t.max.x:t.min.x,sr.y=s.normal.y>0?t.max.y:t.min.y,sr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(sr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Xl(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ju(i){let t=new WeakMap;function e(a,c){let l=a.array,u=a.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){let u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<h.length;f++){let m=h[d],g=h[f];g.start<=m.start+m.count+1?m.count=Math.max(m.count,g.start+g.count-m.start):(++d,h[d]=g)}h.length=d+1;for(let f=0,m=h.length;f<m;f++){let g=h[f];i.bufferSubData(l,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Gn=class i extends ve{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=t/a,d=e/c,f=[],m=[],g=[],A=[];for(let p=0;p<u;p++){let M=p*d-o;for(let _=0;_<l;_++){let x=_*h-r;m.push(x,-M,0),g.push(0,0,1),A.push(_/a),A.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){let _=M+l*p,x=M+l*(p+1),P=M+1+l*(p+1),b=M+1+l*p;f.push(_,x,b),f.push(x,P,b)}this.setIndex(f),this.setAttribute("position",new Zt(m,3)),this.setAttribute("normal",new Zt(g,3)),this.setAttribute("uv",new Zt(A,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},$u=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,td=`#ifdef USE_ALPHAHASH
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
#endif`,ed=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,id=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rd=`#ifdef USE_AOMAP
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
#endif`,od=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ad=`#ifdef USE_BATCHING
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
#endif`,cd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ld=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ud=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dd=`#ifdef USE_IRIDESCENCE
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
#endif`,fd=`#ifdef USE_BUMPMAP
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
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ad=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,md=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_d=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Md=`#if defined( USE_COLOR_ALPHA )
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
#endif`,yd=`#define PI 3.141592653589793
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
} // validated`,wd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ed=`vec3 transformedNormal = objectNormal;
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
#endif`,Sd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Td="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Id=`#ifdef USE_ENVMAP
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
#endif`,Rd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pd=`#ifdef USE_ENVMAP
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
#endif`,Ld=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ud=`#ifdef USE_ENVMAP
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
#endif`,Fd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Od=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kd=`#ifdef USE_GRADIENTMAP
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
}`,zd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hd=`uniform bool receiveShadow;
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
#endif`,Wd=`#ifdef USE_ENVMAP
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
#endif`,Yd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qd=`PhysicalMaterial material;
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
#endif`,Zd=`struct PhysicalMaterial {
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
}`,jd=`
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
#endif`,$d=`#if defined( RE_IndirectDiffuse )
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
#endif`,tf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ef=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,of=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,af=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lf=`#if defined( USE_POINTS_UV )
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
#endif`,hf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,df=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ff=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Af=`#ifdef USE_MORPHTARGETS
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
#endif`,mf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_f=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yf=`#ifdef USE_NORMALMAP
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
#endif`,wf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ef=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Tf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Df=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,If=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Uf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ff=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Of=`float getShadowMask() {
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
}`,Qf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kf=`#ifdef USE_SKINNING
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
#endif`,zf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gf=`#ifdef USE_SKINNING
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
#endif`,Vf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xf=`#ifdef USE_TRANSMISSION
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
#endif`,Jf=`#ifdef USE_TRANSMISSION
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
#endif`,Kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$f=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tp=`uniform sampler2D t2D;
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
}`,ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,np=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rp=`#include <common>
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
}`,op=`#if DEPTH_PACKING == 3200
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
}`,ap=`#define DISTANCE
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
}`,cp=`#define DISTANCE
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
}`,lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,up=`uniform float scale;
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
}`,dp=`uniform vec3 diffuse;
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
}`,fp=`#include <common>
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
}`,pp=`uniform vec3 diffuse;
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
}`,Ap=`#define LAMBERT
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
}`,mp=`#define LAMBERT
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
}`,gp=`#define MATCAP
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
}`,xp=`#define MATCAP
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
}`,vp=`#define NORMAL
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
}`,_p=`#define NORMAL
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
}`,Mp=`#define PHONG
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
}`,yp=`#define PHONG
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
}`,wp=`#define STANDARD
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
}`,Ep=`#define STANDARD
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
}`,Sp=`#define TOON
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
}`,Cp=`#define TOON
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
}`,bp=`uniform float size;
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
}`,Bp=`uniform vec3 diffuse;
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
}`,Tp=`#include <common>
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
}`,Dp=`uniform vec3 color;
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
}`,Ip=`uniform float rotation;
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
}`,Rp=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:$u,alphahash_pars_fragment:td,alphamap_fragment:ed,alphamap_pars_fragment:nd,alphatest_fragment:id,alphatest_pars_fragment:sd,aomap_fragment:rd,aomap_pars_fragment:od,batching_pars_vertex:ad,batching_vertex:cd,begin_vertex:ld,beginnormal_vertex:hd,bsdfs:ud,iridescence_fragment:dd,bumpmap_pars_fragment:fd,clipping_planes_fragment:pd,clipping_planes_pars_fragment:Ad,clipping_planes_pars_vertex:md,clipping_planes_vertex:gd,color_fragment:xd,color_pars_fragment:vd,color_pars_vertex:_d,color_vertex:Md,common:yd,cube_uv_reflection_fragment:wd,defaultnormal_vertex:Ed,displacementmap_pars_vertex:Sd,displacementmap_vertex:Cd,emissivemap_fragment:bd,emissivemap_pars_fragment:Bd,colorspace_fragment:Td,colorspace_pars_fragment:Dd,envmap_fragment:Id,envmap_common_pars_fragment:Rd,envmap_pars_fragment:Pd,envmap_pars_vertex:Ld,envmap_physical_pars_fragment:Wd,envmap_vertex:Ud,fog_vertex:Fd,fog_pars_vertex:Nd,fog_fragment:Od,fog_pars_fragment:Qd,gradientmap_pars_fragment:kd,lightmap_pars_fragment:zd,lights_lambert_fragment:Gd,lights_lambert_pars_fragment:Vd,lights_pars_begin:Hd,lights_toon_fragment:Yd,lights_toon_pars_fragment:Xd,lights_phong_fragment:Jd,lights_phong_pars_fragment:Kd,lights_physical_fragment:qd,lights_physical_pars_fragment:Zd,lights_fragment_begin:jd,lights_fragment_maps:$d,lights_fragment_end:tf,logdepthbuf_fragment:ef,logdepthbuf_pars_fragment:nf,logdepthbuf_pars_vertex:sf,logdepthbuf_vertex:rf,map_fragment:of,map_pars_fragment:af,map_particle_fragment:cf,map_particle_pars_fragment:lf,metalnessmap_fragment:hf,metalnessmap_pars_fragment:uf,morphinstance_vertex:df,morphcolor_vertex:ff,morphnormal_vertex:pf,morphtarget_pars_vertex:Af,morphtarget_vertex:mf,normal_fragment_begin:gf,normal_fragment_maps:xf,normal_pars_fragment:vf,normal_pars_vertex:_f,normal_vertex:Mf,normalmap_pars_fragment:yf,clearcoat_normal_fragment_begin:wf,clearcoat_normal_fragment_maps:Ef,clearcoat_pars_fragment:Sf,iridescence_pars_fragment:Cf,opaque_fragment:bf,packing:Bf,premultiplied_alpha_fragment:Tf,project_vertex:Df,dithering_fragment:If,dithering_pars_fragment:Rf,roughnessmap_fragment:Pf,roughnessmap_pars_fragment:Lf,shadowmap_pars_fragment:Uf,shadowmap_pars_vertex:Ff,shadowmap_vertex:Nf,shadowmask_pars_fragment:Of,skinbase_vertex:Qf,skinning_pars_vertex:kf,skinning_vertex:zf,skinnormal_vertex:Gf,specularmap_fragment:Vf,specularmap_pars_fragment:Hf,tonemapping_fragment:Wf,tonemapping_pars_fragment:Yf,transmission_fragment:Xf,transmission_pars_fragment:Jf,uv_pars_fragment:Kf,uv_pars_vertex:qf,uv_vertex:Zf,worldpos_vertex:jf,background_vert:$f,background_frag:tp,backgroundCube_vert:ep,backgroundCube_frag:np,cube_vert:ip,cube_frag:sp,depth_vert:rp,depth_frag:op,distanceRGBA_vert:ap,distanceRGBA_frag:cp,equirect_vert:lp,equirect_frag:hp,linedashed_vert:up,linedashed_frag:dp,meshbasic_vert:fp,meshbasic_frag:pp,meshlambert_vert:Ap,meshlambert_frag:mp,meshmatcap_vert:gp,meshmatcap_frag:xp,meshnormal_vert:vp,meshnormal_frag:_p,meshphong_vert:Mp,meshphong_frag:yp,meshphysical_vert:wp,meshphysical_frag:Ep,meshtoon_vert:Sp,meshtoon_frag:Cp,points_vert:bp,points_frag:Bp,shadow_vert:Tp,shadow_frag:Dp,sprite_vert:Ip,sprite_frag:Rp},xt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},un={basic:{uniforms:Re([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Re([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Re([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Re([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Re([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Re([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Re([xt.points,xt.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Re([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Re([xt.common,xt.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Re([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Re([xt.sprite,xt.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:Re([xt.common,xt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:Re([xt.lights,xt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};un.physical={uniforms:Re([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};var rr={r:0,b:0,g:0},$n=new Ye,Pp=new oe;function Lp(i,t,e,n,s,r,o){let a=new Gt(0),c=r===!0?0:1,l,u,h=null,d=0,f=null;function m(M){let _=M.isScene===!0?M.background:null;return _&&_.isTexture&&(_=(M.backgroundBlurriness>0?e:t).get(_)),_}function g(M){let _=!1,x=m(M);x===null?p(a,c):x&&x.isColor&&(p(x,1),_=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function A(M,_){let x=m(_);x&&(x.isCubeTexture||x.mapping===Kr)?(u===void 0&&(u=new Pe(new ci(1,1,1),new ke({name:"BackgroundCubeMaterial",uniforms:qi(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:Se,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,b,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),$n.copy(_.backgroundRotation),$n.x*=-1,$n.y*=-1,$n.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&($n.y*=-1,$n.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Pp.makeRotationFromEuler($n)),u.material.toneMapped=qt.getTransfer(x.colorSpace)!==ne,(h!==x||d!==x.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,f=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Pe(new Gn(2,2),new ke({name:"BackgroundMaterial",uniforms:qi(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=qt.getTransfer(x.colorSpace)!==ne,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,f=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,_){M.getRGB(rr,Yl(i)),n.buffers.color.setClear(rr.r,rr.g,rr.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(M,_=1){a.set(M),c=_,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(a,c)},render:g,addToRenderList:A}}function Up(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(y,I,H,N,G){let J=!1,V=h(N,H,I);r!==V&&(r=V,l(r.object)),J=f(y,N,H,G),J&&m(y,N,H,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,x(y,I,H,N),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function h(y,I,H){let N=H.wireframe===!0,G=n[y.id];G===void 0&&(G={},n[y.id]=G);let J=G[I.id];J===void 0&&(J={},G[I.id]=J);let V=J[N];return V===void 0&&(V=d(c()),J[N]=V),V}function d(y){let I=[],H=[],N=[];for(let G=0;G<e;G++)I[G]=0,H[G]=0,N[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:H,attributeDivisors:N,object:y,attributes:{},index:null}}function f(y,I,H,N){let G=r.attributes,J=I.attributes,V=0,q=H.getAttributes();for(let z in q)if(q[z].location>=0){let lt=G[z],et=J[z];if(et===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(et=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(et=y.instanceColor)),lt===void 0||lt.attribute!==et||et&&lt.data!==et.data)return!0;V++}return r.attributesNum!==V||r.index!==N}function m(y,I,H,N){let G={},J=I.attributes,V=0,q=H.getAttributes();for(let z in q)if(q[z].location>=0){let lt=J[z];lt===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(lt=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(lt=y.instanceColor));let et={};et.attribute=lt,lt&&lt.data&&(et.data=lt.data),G[z]=et,V++}r.attributes=G,r.attributesNum=V,r.index=N}function g(){let y=r.newAttributes;for(let I=0,H=y.length;I<H;I++)y[I]=0}function A(y){p(y,0)}function p(y,I){let H=r.newAttributes,N=r.enabledAttributes,G=r.attributeDivisors;H[y]=1,N[y]===0&&(i.enableVertexAttribArray(y),N[y]=1),G[y]!==I&&(i.vertexAttribDivisor(y,I),G[y]=I)}function M(){let y=r.newAttributes,I=r.enabledAttributes;for(let H=0,N=I.length;H<N;H++)I[H]!==y[H]&&(i.disableVertexAttribArray(H),I[H]=0)}function _(y,I,H,N,G,J,V){V===!0?i.vertexAttribIPointer(y,I,H,G,J):i.vertexAttribPointer(y,I,H,N,G,J)}function x(y,I,H,N){g();let G=N.attributes,J=H.getAttributes(),V=I.defaultAttributeValues;for(let q in J){let z=J[q];if(z.location>=0){let st=G[q];if(st===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(st=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(st=y.instanceColor)),st!==void 0){let lt=st.normalized,et=st.itemSize,vt=t.get(st);if(vt===void 0)continue;let Rt=vt.buffer,k=vt.type,rt=vt.bytesPerElement,j=k===i.INT||k===i.UNSIGNED_INT||st.gpuType===lc;if(st.isInterleavedBufferAttribute){let Z=st.data,Et=Z.stride,Nt=st.offset;if(Z.isInstancedInterleavedBuffer){for(let Lt=0;Lt<z.locationSize;Lt++)p(z.location+Lt,Z.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Lt=0;Lt<z.locationSize;Lt++)A(z.location+Lt);i.bindBuffer(i.ARRAY_BUFFER,Rt);for(let Lt=0;Lt<z.locationSize;Lt++)_(z.location+Lt,et/z.locationSize,k,lt,Et*rt,(Nt+et/z.locationSize*Lt)*rt,j)}else{if(st.isInstancedBufferAttribute){for(let Z=0;Z<z.locationSize;Z++)p(z.location+Z,st.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Z=0;Z<z.locationSize;Z++)A(z.location+Z);i.bindBuffer(i.ARRAY_BUFFER,Rt);for(let Z=0;Z<z.locationSize;Z++)_(z.location+Z,et/z.locationSize,k,lt,et*rt,et/z.locationSize*Z*rt,j)}}else if(V!==void 0){let lt=V[q];if(lt!==void 0)switch(lt.length){case 2:i.vertexAttrib2fv(z.location,lt);break;case 3:i.vertexAttrib3fv(z.location,lt);break;case 4:i.vertexAttrib4fv(z.location,lt);break;default:i.vertexAttrib1fv(z.location,lt)}}}}M()}function P(){R();for(let y in n){let I=n[y];for(let H in I){let N=I[H];for(let G in N)u(N[G].object),delete N[G];delete I[H]}delete n[y]}}function b(y){if(n[y.id]===void 0)return;let I=n[y.id];for(let H in I){let N=I[H];for(let G in N)u(N[G].object),delete N[G];delete I[H]}delete n[y.id]}function D(y){for(let I in n){let H=n[I];if(H[y.id]===void 0)continue;let N=H[y.id];for(let G in N)u(N[G].object),delete N[G];delete H[y.id]}}function R(){w(),o=!0,r!==s&&(r=s,l(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:w,dispose:P,releaseStatesOfGeometry:b,releaseStatesOfProgram:D,initAttributes:g,enableAttribute:A,disableUnusedAttributes:M}}function Fp(i,t,e){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),e.update(u,n,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let m=0;m<h;m++)f+=u[m];e.update(f,n,1)}function c(l,u,h,d){if(h===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)o(l[m],u[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let m=0;for(let g=0;g<h;g++)m+=u[g]*d[g];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Np(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let D=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(D){return!(D!==on&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let R=D===Ps&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==an&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==yn&&!R)}function c(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),A=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=m>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:A,maxAttributes:p,maxVertexUniforms:M,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:P,maxSamples:b}}function Op(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Mn,a=new kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){let m=h.clippingPlanes,g=h.clipIntersection,A=h.clipShadows,p=i.get(h);if(!s||m===null||m.length===0||r&&!A)r?u(null):l();else{let M=r?0:n,_=M*4,x=p.clippingState||null;c.value=x,x=u(m,d,_,f);for(let P=0;P!==_;++P)x[P]=e[P];p.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,f,m){let g=h!==null?h.length:0,A=null;if(g!==0){if(A=c.value,m!==!0||A===null){let p=f+g*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(A===null||A.length<p)&&(A=new Float32Array(p));for(let _=0,x=f;_!==g;++_,x+=4)o.copy(h[_]).applyMatrix4(M,a),o.normal.toArray(A,x),A[x+3]=o.constant}c.value=A,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,A}}function Qp(i){let t=new WeakMap;function e(o,a){return a===Xo?o.mapping=Wi:a===Jo&&(o.mapping=Yi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Xo||a===Jo)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Ba(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Vn=class extends Sr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Oi=4,el=[.125,.215,.35,.446,.526,.582],si=20,To=new Vn,nl=new Gt,Do=null,Io=0,Ro=0,Po=!1,ei=(1+Math.sqrt(5))/2,Fi=1/ei,il=[new L(-ei,Fi,0),new L(ei,Fi,0),new L(-Fi,0,ei),new L(Fi,0,ei),new L(0,ei,-Fi),new L(0,ei,Fi),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Zi=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Do=this._renderer.getRenderTarget(),Io=this._renderer.getActiveCubeFace(),Ro=this._renderer.getActiveMipmapLevel(),Po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ol(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Do,Io,Ro),this._renderer.xr.enabled=Po,t.scissorTest=!1,or(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Wi||t.mapping===Yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Do=this._renderer.getRenderTarget(),Io=this._renderer.getActiveCubeFace(),Ro=this._renderer.getActiveMipmapLevel(),Po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:Ps,format:on,colorSpace:es,depthBuffer:!1},s=sl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sl(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kp(r)),this._blurMaterial=zp(r,t,e)}return s}_compileMaterial(t){let e=new Pe(this._lodPlanes[0],t);this._renderer.compile(e,To)}_sceneToCubeUV(t,e,n,s){let a=new pe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(nl),u.toneMapping=Nn,u.autoClear=!1;let f=new Ki({name:"PMREM.Background",side:Se,depthWrite:!1,depthTest:!1}),m=new Pe(new ci,f),g=!1,A=t.background;A?A.isColor&&(f.color.copy(A),t.background=null,g=!0):(f.color.copy(nl),g=!0);for(let p=0;p<6;p++){let M=p%3;M===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):M===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let _=this._cubeSize;or(s,M*_,p>2?_:0,_,_),u.setRenderTarget(s),g&&u.render(m,a),u.render(t,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=A}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Wi||t.mapping===Yi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ol()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rl());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Pe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;or(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,To)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=il[(s-r-1)%il.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Pe(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*si-1),g=r/m,A=isFinite(r)?1+Math.floor(u*g):si;A>si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${A} samples when the maximum is set to ${si}`);let p=[],M=0;for(let D=0;D<si;++D){let R=D/g,w=Math.exp(-R*R/2);p.push(w),D===0?M+=w:D<A&&(M+=2*w)}for(let D=0;D<p.length;D++)p[D]=p[D]/M;d.envMap.value=t.texture,d.samples.value=A,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:_}=this;d.dTheta.value=m,d.mipInt.value=_-n;let x=this._sizeLods[s],P=3*x*(s>_-Oi?s-_+Oi:0),b=4*(this._cubeSize-x);or(e,P,b,3*x,2*x),c.setRenderTarget(e),c.render(h,To)}};function kp(i){let t=[],e=[],n=[],s=i,r=i-Oi+1+el.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Oi?c=el[o-i+Oi-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,m=6,g=3,A=2,p=1,M=new Float32Array(g*m*f),_=new Float32Array(A*m*f),x=new Float32Array(p*m*f);for(let b=0;b<f;b++){let D=b%3*2/3-1,R=b>2?0:-1,w=[D,R,0,D+2/3,R,0,D+2/3,R+1,0,D,R,0,D+2/3,R+1,0,D,R+1,0];M.set(w,g*m*b),_.set(d,A*m*b);let y=[b,b,b,b,b,b];x.set(y,p*m*b)}let P=new ve;P.setAttribute("position",new Oe(M,g)),P.setAttribute("uv",new Oe(_,A)),P.setAttribute("faceIndex",new Oe(x,p)),t.push(P),s>Oi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function sl(i,t,e){let n=new cn(i,t,e);return n.texture.mapping=Kr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function or(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function zp(i,t,e){let n=new Float32Array(si),s=new L(0,1,0);return new ke({name:"SphericalGaussianBlur",defines:{n:si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:gc(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function rl(){return new ke({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gc(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function ol(){return new ke({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function gc(){return`

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
	`}function Gp(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Xo||c===Jo,u=c===Wi||c===Yi;if(l||u){let h=t.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Zi(i)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{let f=a.image;return l&&f&&f.height>0||u&&f&&s(f)?(e===null&&(e=new Zi(i)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Vp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ms("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Hp(i,t,e,n){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);for(let m in d.morphAttributes){let g=d.morphAttributes[m];for(let A=0,p=g.length;A<p;A++)t.remove(g[A])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(h){let d=h.attributes;for(let m in d)t.update(d[m],i.ARRAY_BUFFER);let f=h.morphAttributes;for(let m in f){let g=f[m];for(let A=0,p=g.length;A<p;A++)t.update(g[A],i.ARRAY_BUFFER)}}function l(h){let d=[],f=h.index,m=h.attributes.position,g=0;if(f!==null){let M=f.array;g=f.version;for(let _=0,x=M.length;_<x;_+=3){let P=M[_+0],b=M[_+1],D=M[_+2];d.push(P,b,b,D,D,P)}}else if(m!==void 0){let M=m.array;g=m.version;for(let _=0,x=M.length/3-1;_<x;_+=3){let P=_+0,b=_+1,D=_+2;d.push(P,b,b,D,D,P)}}else return;let A=new(Hl(d)?Er:wr)(d,1);A.version=g;let p=r.get(h);p&&t.remove(p),r.set(h,A)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Wp(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*o,m),e.update(f,n,m))}function u(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let A=0;for(let p=0;p<m;p++)A+=f[p];e.update(A,n,1)}function h(d,f,m,g){if(m===0)return;let A=t.get("WEBGL_multi_draw");if(A===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],g[p]);else{A.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,g,0,m);let p=0;for(let M=0;M<m;M++)p+=f[M]*g[M];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Yp(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Xp(i,t,e){let n=new WeakMap,s=new re;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let w=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,A=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],_=0;f===!0&&(_=1),m===!0&&(_=2),g===!0&&(_=3);let x=a.attributes.position.count*_,P=1;x>t.maxTextureSize&&(P=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let b=new Float32Array(x*P*4*h),D=new Mr(b,x,P,h);D.type=yn,D.needsUpdate=!0;let R=_*4;for(let y=0;y<h;y++){let I=A[y],H=p[y],N=M[y],G=x*P*4*y;for(let J=0;J<I.count;J++){let V=J*R;f===!0&&(s.fromBufferAttribute(I,J),b[G+V+0]=s.x,b[G+V+1]=s.y,b[G+V+2]=s.z,b[G+V+3]=0),m===!0&&(s.fromBufferAttribute(H,J),b[G+V+4]=s.x,b[G+V+5]=s.y,b[G+V+6]=s.z,b[G+V+7]=0),g===!0&&(s.fromBufferAttribute(N,J),b[G+V+8]=s.x,b[G+V+9]=s.y,b[G+V+10]=s.z,b[G+V+11]=N.itemSize===4?s.w:1)}}d={count:h,texture:D,size:new ut(x,P)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let g=0;g<l.length;g++)f+=l[g];let m=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Jp(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var br=class extends We{constructor(t,e,n,s,r,o,a,c,l,u=zi){if(u!==zi&&u!==Ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===zi&&(n=ai),n===void 0&&u===Ji&&(n=Xi),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:He,this.minFilter=c!==void 0?c:He,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Jl=new We,al=new br(1,1),Kl=new Mr,ql=new Ca,Zl=new Cr,cl=[],ll=[],hl=new Float32Array(16),ul=new Float32Array(9),dl=new Float32Array(4);function ns(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=cl[s];if(r===void 0&&(r=new Float32Array(s),cl[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ae(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Zr(i,t){let e=ll[t];e===void 0&&(e=new Int32Array(t),ll[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Kp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function qp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2fv(this.addr,t),me(e,t)}}function Zp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;i.uniform3fv(this.addr,t),me(e,t)}}function jp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4fv(this.addr,t),me(e,t)}}function $p(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(Ae(e,n))return;dl.set(n),i.uniformMatrix2fv(this.addr,!1,dl),me(e,n)}}function tA(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(Ae(e,n))return;ul.set(n),i.uniformMatrix3fv(this.addr,!1,ul),me(e,n)}}function eA(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(Ae(e,n))return;hl.set(n),i.uniformMatrix4fv(this.addr,!1,hl),me(e,n)}}function nA(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function iA(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2iv(this.addr,t),me(e,t)}}function sA(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3iv(this.addr,t),me(e,t)}}function rA(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4iv(this.addr,t),me(e,t)}}function oA(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function aA(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2uiv(this.addr,t),me(e,t)}}function cA(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3uiv(this.addr,t),me(e,t)}}function lA(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4uiv(this.addr,t),me(e,t)}}function hA(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(al.compareFunction=Vl,r=al):r=Jl,e.setTexture2D(t||r,s)}function uA(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ql,s)}function dA(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Zl,s)}function fA(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Kl,s)}function pA(i){switch(i){case 5126:return Kp;case 35664:return qp;case 35665:return Zp;case 35666:return jp;case 35674:return $p;case 35675:return tA;case 35676:return eA;case 5124:case 35670:return nA;case 35667:case 35671:return iA;case 35668:case 35672:return sA;case 35669:case 35673:return rA;case 5125:return oA;case 36294:return aA;case 36295:return cA;case 36296:return lA;case 35678:case 36198:case 36298:case 36306:case 35682:return hA;case 35679:case 36299:case 36307:return uA;case 35680:case 36300:case 36308:case 36293:return dA;case 36289:case 36303:case 36311:case 36292:return fA}}function AA(i,t){i.uniform1fv(this.addr,t)}function mA(i,t){let e=ns(t,this.size,2);i.uniform2fv(this.addr,e)}function gA(i,t){let e=ns(t,this.size,3);i.uniform3fv(this.addr,e)}function xA(i,t){let e=ns(t,this.size,4);i.uniform4fv(this.addr,e)}function vA(i,t){let e=ns(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function _A(i,t){let e=ns(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function MA(i,t){let e=ns(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function yA(i,t){i.uniform1iv(this.addr,t)}function wA(i,t){i.uniform2iv(this.addr,t)}function EA(i,t){i.uniform3iv(this.addr,t)}function SA(i,t){i.uniform4iv(this.addr,t)}function CA(i,t){i.uniform1uiv(this.addr,t)}function bA(i,t){i.uniform2uiv(this.addr,t)}function BA(i,t){i.uniform3uiv(this.addr,t)}function TA(i,t){i.uniform4uiv(this.addr,t)}function DA(i,t,e){let n=this.cache,s=t.length,r=Zr(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Jl,r[o])}function IA(i,t,e){let n=this.cache,s=t.length,r=Zr(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ql,r[o])}function RA(i,t,e){let n=this.cache,s=t.length,r=Zr(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Zl,r[o])}function PA(i,t,e){let n=this.cache,s=t.length,r=Zr(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Kl,r[o])}function LA(i){switch(i){case 5126:return AA;case 35664:return mA;case 35665:return gA;case 35666:return xA;case 35674:return vA;case 35675:return _A;case 35676:return MA;case 5124:case 35670:return yA;case 35667:case 35671:return wA;case 35668:case 35672:return EA;case 35669:case 35673:return SA;case 5125:return CA;case 36294:return bA;case 36295:return BA;case 36296:return TA;case 35678:case 36198:case 36298:case 36306:case 35682:return DA;case 35679:case 36299:case 36307:return IA;case 35680:case 36300:case 36308:case 36293:return RA;case 36289:case 36303:case 36311:case 36292:return PA}}var Ta=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=pA(e.type)}},Da=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=LA(e.type)}},Ia=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Lo=/(\w+)(\])?(\[|\.)?/g;function fl(i,t){i.seq.push(t),i.map[t.id]=t}function UA(i,t,e){let n=i.name,s=n.length;for(Lo.lastIndex=0;;){let r=Lo.exec(n),o=Lo.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){fl(e,l===void 0?new Ta(a,i,t):new Da(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new Ia(a),fl(e,h)),e=h}}}var Vi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);UA(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function pl(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var FA=37297,NA=0;function OA(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Al=new kt;function QA(i){qt._getMatrix(Al,qt.workingColorSpace,i);let t=`mat3( ${Al.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(i)){case qr:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ml(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+OA(i.getShaderSource(t),o)}else return s}function kA(i,t){let e=QA(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function zA(i,t){let e;switch(t){case Zh:e="Linear";break;case jh:e="Reinhard";break;case $h:e="Cineon";break;case tu:e="ACESFilmic";break;case nu:e="AgX";break;case di:e="Neutral";break;case eu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ar=new L;function GA(){qt.getLuminanceCoefficients(ar);let i=ar.x.toFixed(4),t=ar.y.toFixed(4),e=ar.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function VA(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gs).join(`
`)}function HA(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function WA(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function gs(i){return i!==""}function gl(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var YA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ra(i){return i.replace(YA,JA)}var XA=new Map;function JA(i,t){let e=zt[t];if(e===void 0){let n=XA.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ra(e)}var KA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vl(i){return i.replace(KA,qA)}function qA(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _l(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function ZA(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Il?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Rh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===_n&&(t="SHADOWMAP_TYPE_VSM"),t}function jA(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Wi:case Yi:t="ENVMAP_TYPE_CUBE";break;case Kr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function $A(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Yi:t="ENVMAP_MODE_REFRACTION";break}return t}function tm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case cc:t="ENVMAP_BLENDING_MULTIPLY";break;case Kh:t="ENVMAP_BLENDING_MIX";break;case qh:t="ENVMAP_BLENDING_ADD";break}return t}function em(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function nm(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=ZA(e),l=jA(e),u=$A(e),h=tm(e),d=em(e),f=VA(e),m=HA(r),g=s.createProgram(),A,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(A=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(gs).join(`
`),A.length>0&&(A+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(gs).join(`
`),p.length>0&&(p+=`
`)):(A=[_l(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gs).join(`
`),p=[_l(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Nn?"#define TONE_MAPPING":"",e.toneMapping!==Nn?zt.tonemapping_pars_fragment:"",e.toneMapping!==Nn?zA("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,kA("linearToOutputTexel",e.outputColorSpace),GA(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(gs).join(`
`)),o=Ra(o),o=gl(o,e),o=xl(o,e),a=Ra(a),a=gl(a,e),a=xl(a,e),o=vl(o),a=vl(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,A=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+A,p=["#define varying in",e.glslVersion===Pc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Pc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=M+A+o,x=M+p+a,P=pl(s,s.VERTEX_SHADER,_),b=pl(s,s.FRAGMENT_SHADER,x);s.attachShader(g,P),s.attachShader(g,b),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function D(I){if(i.debug.checkShaderErrors){let H=s.getProgramInfoLog(g).trim(),N=s.getShaderInfoLog(P).trim(),G=s.getShaderInfoLog(b).trim(),J=!0,V=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,P,b);else{let q=ml(s,P,"vertex"),z=ml(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+H+`
`+q+`
`+z)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(N===""||G==="")&&(V=!1);V&&(I.diagnostics={runnable:J,programLog:H,vertexShader:{log:N,prefix:A},fragmentShader:{log:G,prefix:p}})}s.deleteShader(P),s.deleteShader(b),R=new Vi(s,g),w=WA(s,g)}let R;this.getUniforms=function(){return R===void 0&&D(this),R};let w;this.getAttributes=function(){return w===void 0&&D(this),w};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(g,FA)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=NA++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=P,this.fragmentShader=b,this}var im=0,Pa=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new La(t),e.set(t,n)),n}},La=class{constructor(t){this.id=im++,this.code=t,this.usedTimes=0}};function sm(i,t,e,n,s,r,o){let a=new yr,c=new Pa,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(w){return l.add(w),w===0?"uv":`uv${w}`}function A(w,y,I,H,N){let G=H.fog,J=N.geometry,V=w.isMeshStandardMaterial?H.environment:null,q=(w.isMeshStandardMaterial?e:t).get(w.envMap||V),z=q&&q.mapping===Kr?q.image.height:null,st=m[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let lt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,et=lt!==void 0?lt.length:0,vt=0;J.morphAttributes.position!==void 0&&(vt=1),J.morphAttributes.normal!==void 0&&(vt=2),J.morphAttributes.color!==void 0&&(vt=3);let Rt,k,rt,j;if(st){let jt=un[st];Rt=jt.vertexShader,k=jt.fragmentShader}else Rt=w.vertexShader,k=w.fragmentShader,c.update(w),rt=c.getVertexShaderID(w),j=c.getFragmentShaderID(w);let Z=i.getRenderTarget(),Et=i.state.buffers.depth.getReversed(),Nt=N.isInstancedMesh===!0,Lt=N.isBatchedMesh===!0,Yt=!!w.map,nt=!!w.matcap,ht=!!q,T=!!w.aoMap,ft=!!w.lightMap,ot=!!w.bumpMap,mt=!!w.normalMap,pt=!!w.displacementMap,Pt=!!w.emissiveMap,yt=!!w.metalnessMap,S=!!w.roughnessMap,v=w.anisotropy>0,O=w.clearcoat>0,K=w.dispersion>0,it=w.iridescence>0,X=w.sheen>0,bt=w.transmission>0,At=v&&!!w.anisotropyMap,wt=O&&!!w.clearcoatMap,Vt=O&&!!w.clearcoatNormalMap,ct=O&&!!w.clearcoatRoughnessMap,St=it&&!!w.iridescenceMap,It=it&&!!w.iridescenceThicknessMap,Ft=X&&!!w.sheenColorMap,Ct=X&&!!w.sheenRoughnessMap,Ht=!!w.specularMap,Qt=!!w.specularColorMap,$t=!!w.specularIntensityMap,U=bt&&!!w.transmissionMap,gt=bt&&!!w.thicknessMap,Y=!!w.gradientMap,tt=!!w.alphaMap,Mt=w.alphaTest>0,_t=!!w.alphaHash,Ot=!!w.extensions,ie=Nn;w.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(ie=i.toneMapping);let ue={shaderID:st,shaderType:w.type,shaderName:w.name,vertexShader:Rt,fragmentShader:k,defines:w.defines,customVertexShaderID:rt,customFragmentShaderID:j,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Lt,batchingColor:Lt&&N._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&N.instanceColor!==null,instancingMorph:Nt&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:es,alphaToCoverage:!!w.alphaToCoverage,map:Yt,matcap:nt,envMap:ht,envMapMode:ht&&q.mapping,envMapCubeUVHeight:z,aoMap:T,lightMap:ft,bumpMap:ot,normalMap:mt,displacementMap:d&&pt,emissiveMap:Pt,normalMapObjectSpace:mt&&w.normalMapType===ou,normalMapTangentSpace:mt&&w.normalMapType===Ac,metalnessMap:yt,roughnessMap:S,anisotropy:v,anisotropyMap:At,clearcoat:O,clearcoatMap:wt,clearcoatNormalMap:Vt,clearcoatRoughnessMap:ct,dispersion:K,iridescence:it,iridescenceMap:St,iridescenceThicknessMap:It,sheen:X,sheenColorMap:Ft,sheenRoughnessMap:Ct,specularMap:Ht,specularColorMap:Qt,specularIntensityMap:$t,transmission:bt,transmissionMap:U,thicknessMap:gt,gradientMap:Y,opaque:w.transparent===!1&&w.blending===ki&&w.alphaToCoverage===!1,alphaMap:tt,alphaTest:Mt,alphaHash:_t,combine:w.combine,mapUv:Yt&&g(w.map.channel),aoMapUv:T&&g(w.aoMap.channel),lightMapUv:ft&&g(w.lightMap.channel),bumpMapUv:ot&&g(w.bumpMap.channel),normalMapUv:mt&&g(w.normalMap.channel),displacementMapUv:pt&&g(w.displacementMap.channel),emissiveMapUv:Pt&&g(w.emissiveMap.channel),metalnessMapUv:yt&&g(w.metalnessMap.channel),roughnessMapUv:S&&g(w.roughnessMap.channel),anisotropyMapUv:At&&g(w.anisotropyMap.channel),clearcoatMapUv:wt&&g(w.clearcoatMap.channel),clearcoatNormalMapUv:Vt&&g(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&g(w.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&g(w.iridescenceMap.channel),iridescenceThicknessMapUv:It&&g(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&g(w.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&g(w.sheenRoughnessMap.channel),specularMapUv:Ht&&g(w.specularMap.channel),specularColorMapUv:Qt&&g(w.specularColorMap.channel),specularIntensityMapUv:$t&&g(w.specularIntensityMap.channel),transmissionMapUv:U&&g(w.transmissionMap.channel),thicknessMapUv:gt&&g(w.thicknessMap.channel),alphaMapUv:tt&&g(w.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(mt||v),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!J.attributes.uv&&(Yt||tt),fog:!!G,useFog:w.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Et,skinning:N.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:vt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:ie,decodeVideoTexture:Yt&&w.map.isVideoTexture===!0&&qt.getTransfer(w.map.colorSpace)===ne,decodeVideoTextureEmissive:Pt&&w.emissiveMap.isVideoTexture===!0&&qt.getTransfer(w.emissiveMap.colorSpace)===ne,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===rn,flipSided:w.side===Se,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ot&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&w.extensions.multiDraw===!0||Lt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ue.vertexUv1s=l.has(1),ue.vertexUv2s=l.has(2),ue.vertexUv3s=l.has(3),l.clear(),ue}function p(w){let y=[];if(w.shaderID?y.push(w.shaderID):(y.push(w.customVertexShaderID),y.push(w.customFragmentShaderID)),w.defines!==void 0)for(let I in w.defines)y.push(I),y.push(w.defines[I]);return w.isRawShaderMaterial===!1&&(M(y,w),_(y,w),y.push(i.outputColorSpace)),y.push(w.customProgramCacheKey),y.join()}function M(w,y){w.push(y.precision),w.push(y.outputColorSpace),w.push(y.envMapMode),w.push(y.envMapCubeUVHeight),w.push(y.mapUv),w.push(y.alphaMapUv),w.push(y.lightMapUv),w.push(y.aoMapUv),w.push(y.bumpMapUv),w.push(y.normalMapUv),w.push(y.displacementMapUv),w.push(y.emissiveMapUv),w.push(y.metalnessMapUv),w.push(y.roughnessMapUv),w.push(y.anisotropyMapUv),w.push(y.clearcoatMapUv),w.push(y.clearcoatNormalMapUv),w.push(y.clearcoatRoughnessMapUv),w.push(y.iridescenceMapUv),w.push(y.iridescenceThicknessMapUv),w.push(y.sheenColorMapUv),w.push(y.sheenRoughnessMapUv),w.push(y.specularMapUv),w.push(y.specularColorMapUv),w.push(y.specularIntensityMapUv),w.push(y.transmissionMapUv),w.push(y.thicknessMapUv),w.push(y.combine),w.push(y.fogExp2),w.push(y.sizeAttenuation),w.push(y.morphTargetsCount),w.push(y.morphAttributeCount),w.push(y.numDirLights),w.push(y.numPointLights),w.push(y.numSpotLights),w.push(y.numSpotLightMaps),w.push(y.numHemiLights),w.push(y.numRectAreaLights),w.push(y.numDirLightShadows),w.push(y.numPointLightShadows),w.push(y.numSpotLightShadows),w.push(y.numSpotLightShadowsWithMaps),w.push(y.numLightProbes),w.push(y.shadowMapType),w.push(y.toneMapping),w.push(y.numClippingPlanes),w.push(y.numClipIntersection),w.push(y.depthPacking)}function _(w,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),w.push(a.mask)}function x(w){let y=m[w.type],I;if(y){let H=un[y];I=Xu.clone(H.uniforms)}else I=w.uniforms;return I}function P(w,y){let I;for(let H=0,N=u.length;H<N;H++){let G=u[H];if(G.cacheKey===y){I=G,++I.usedTimes;break}}return I===void 0&&(I=new nm(i,y,w,r),u.push(I)),I}function b(w){if(--w.usedTimes===0){let y=u.indexOf(w);u[y]=u[u.length-1],u.pop(),w.destroy()}}function D(w){c.remove(w)}function R(){c.dispose()}return{getParameters:A,getProgramCacheKey:p,getUniforms:x,acquireProgram:P,releaseProgram:b,releaseShaderCache:D,programs:u,dispose:R}}function rm(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function om(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ml(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function yl(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,d,f,m,g,A){let p=i[t];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:m,renderOrder:h.renderOrder,z:g,group:A},i[t]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=g,p.group=A),t++,p}function a(h,d,f,m,g,A){let p=o(h,d,f,m,g,A);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(h,d,f,m,g,A){let p=o(h,d,f,m,g,A);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(h,d){e.length>1&&e.sort(h||om),n.length>1&&n.sort(d||Ml),s.length>1&&s.sort(d||Ml)}function u(){for(let h=t,d=i.length;h<d;h++){let f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function am(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new yl,i.set(n,[o])):s>=r.length?(o=new yl,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function cm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Gt};break;case"SpotLight":e={position:new L,direction:new L,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function lm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var hm=0;function um(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function dm(i){let t=new cm,e=lm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);let s=new L,r=new oe,o=new oe;function a(l){let u=0,h=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,m=0,g=0,A=0,p=0,M=0,_=0,x=0,P=0,b=0,D=0;l.sort(um);for(let w=0,y=l.length;w<y;w++){let I=l[w],H=I.color,N=I.intensity,G=I.distance,J=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=H.r*N,h+=H.g*N,d+=H.b*N;else if(I.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(I.sh.coefficients[V],N);D++}else if(I.isDirectionalLight){let V=t.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let q=I.shadow,z=e.get(I);z.shadowIntensity=q.intensity,z.shadowBias=q.bias,z.shadowNormalBias=q.normalBias,z.shadowRadius=q.radius,z.shadowMapSize=q.mapSize,n.directionalShadow[f]=z,n.directionalShadowMap[f]=J,n.directionalShadowMatrix[f]=I.shadow.matrix,M++}n.directional[f]=V,f++}else if(I.isSpotLight){let V=t.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(H).multiplyScalar(N),V.distance=G,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,n.spot[g]=V;let q=I.shadow;if(I.map&&(n.spotLightMap[P]=I.map,P++,q.updateMatrices(I),I.castShadow&&b++),n.spotLightMatrix[g]=q.matrix,I.castShadow){let z=e.get(I);z.shadowIntensity=q.intensity,z.shadowBias=q.bias,z.shadowNormalBias=q.normalBias,z.shadowRadius=q.radius,z.shadowMapSize=q.mapSize,n.spotShadow[g]=z,n.spotShadowMap[g]=J,x++}g++}else if(I.isRectAreaLight){let V=t.get(I);V.color.copy(H).multiplyScalar(N),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),n.rectArea[A]=V,A++}else if(I.isPointLight){let V=t.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),V.distance=I.distance,V.decay=I.decay,I.castShadow){let q=I.shadow,z=e.get(I);z.shadowIntensity=q.intensity,z.shadowBias=q.bias,z.shadowNormalBias=q.normalBias,z.shadowRadius=q.radius,z.shadowMapSize=q.mapSize,z.shadowCameraNear=q.camera.near,z.shadowCameraFar=q.camera.far,n.pointShadow[m]=z,n.pointShadowMap[m]=J,n.pointShadowMatrix[m]=I.shadow.matrix,_++}n.point[m]=V,m++}else if(I.isHemisphereLight){let V=t.get(I);V.skyColor.copy(I.color).multiplyScalar(N),V.groundColor.copy(I.groundColor).multiplyScalar(N),n.hemi[p]=V,p++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let R=n.hash;(R.directionalLength!==f||R.pointLength!==m||R.spotLength!==g||R.rectAreaLength!==A||R.hemiLength!==p||R.numDirectionalShadows!==M||R.numPointShadows!==_||R.numSpotShadows!==x||R.numSpotMaps!==P||R.numLightProbes!==D)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=A,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=x+P-b,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=D,R.directionalLength=f,R.pointLength=m,R.spotLength=g,R.rectAreaLength=A,R.hemiLength=p,R.numDirectionalShadows=M,R.numPointShadows=_,R.numSpotShadows=x,R.numSpotMaps=P,R.numLightProbes=D,n.version=hm++)}function c(l,u){let h=0,d=0,f=0,m=0,g=0,A=u.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){let _=l[p];if(_.isDirectionalLight){let x=n.directional[h];x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(A),h++}else if(_.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(A),x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(A),f++}else if(_.isRectAreaLight){let x=n.rectArea[m];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(A),o.identity(),r.copy(_.matrixWorld),r.premultiply(A),o.extractRotation(r),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(_.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(A),d++}else if(_.isHemisphereLight){let x=n.hemi[g];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(A),g++}}}return{setup:a,setupView:c,state:n}}function wl(i){let t=new dm(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function fm(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new wl(i),t.set(s,[a])):r>=o.length?(a=new wl(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Ua=class extends zn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=su,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Fa=class extends zn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},pm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Am=`uniform sampler2D shadow_pass;
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
}`;function mm(i,t,e){let n=new bs,s=new ut,r=new ut,o=new re,a=new Ua({depthPacking:ru}),c=new Fa,l={},u=e.maxTextureSize,h={[dn]:Se,[Se]:dn,[rn]:rn},d=new ke({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:pm,fragmentShader:Am}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new ve;m.setAttribute("position",new Oe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Pe(m,d),A=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Il;let p=this.type;this.render=function(b,D,R){if(A.enabled===!1||A.autoUpdate===!1&&A.needsUpdate===!1||b.length===0)return;let w=i.getRenderTarget(),y=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),H=i.state;H.setBlending(Fn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let N=p!==_n&&this.type===_n,G=p===_n&&this.type!==_n;for(let J=0,V=b.length;J<V;J++){let q=b[J],z=q.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let st=z.getFrameExtents();if(s.multiply(st),r.copy(z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/st.x),s.x=r.x*st.x,z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/st.y),s.y=r.y*st.y,z.mapSize.y=r.y)),z.map===null||N===!0||G===!0){let et=this.type!==_n?{minFilter:He,magFilter:He}:{};z.map!==null&&z.map.dispose(),z.map=new cn(s.x,s.y,et),z.map.texture.name=q.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();let lt=z.getViewportCount();for(let et=0;et<lt;et++){let vt=z.getViewport(et);o.set(r.x*vt.x,r.y*vt.y,r.x*vt.z,r.y*vt.w),H.viewport(o),z.updateMatrices(q,et),n=z.getFrustum(),x(D,R,z.camera,q,this.type)}z.isPointLightShadow!==!0&&this.type===_n&&M(z,R),z.needsUpdate=!1}p=this.type,A.needsUpdate=!1,i.setRenderTarget(w,y,I)};function M(b,D){let R=t.update(g);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new cn(s.x,s.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(D,null,R,d,g,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(D,null,R,f,g,null)}function _(b,D,R,w){let y=null,I=R.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)y=I;else if(y=R.isPointLight===!0?c:a,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){let H=y.uuid,N=D.uuid,G=l[H];G===void 0&&(G={},l[H]=G);let J=G[N];J===void 0&&(J=y.clone(),G[N]=J,D.addEventListener("dispose",P)),y=J}if(y.visible=D.visible,y.wireframe=D.wireframe,w===_n?y.side=D.shadowSide!==null?D.shadowSide:D.side:y.side=D.shadowSide!==null?D.shadowSide:h[D.side],y.alphaMap=D.alphaMap,y.alphaTest=D.alphaTest,y.map=D.map,y.clipShadows=D.clipShadows,y.clippingPlanes=D.clippingPlanes,y.clipIntersection=D.clipIntersection,y.displacementMap=D.displacementMap,y.displacementScale=D.displacementScale,y.displacementBias=D.displacementBias,y.wireframeLinewidth=D.wireframeLinewidth,y.linewidth=D.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let H=i.properties.get(y);H.light=R}return y}function x(b,D,R,w,y){if(b.visible===!1)return;if(b.layers.test(D.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===_n)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,b.matrixWorld);let N=t.update(b),G=b.material;if(Array.isArray(G)){let J=N.groups;for(let V=0,q=J.length;V<q;V++){let z=J[V],st=G[z.materialIndex];if(st&&st.visible){let lt=_(b,st,w,y);b.onBeforeShadow(i,b,D,R,N,lt,z),i.renderBufferDirect(R,null,N,lt,b,z),b.onAfterShadow(i,b,D,R,N,lt,z)}}}else if(G.visible){let J=_(b,G,w,y);b.onBeforeShadow(i,b,D,R,N,J,null),i.renderBufferDirect(R,null,N,J,b,null),b.onAfterShadow(i,b,D,R,N,J,null)}}let H=b.children;for(let N=0,G=H.length;N<G;N++)x(H[N],D,R,w,y)}function P(b){b.target.removeEventListener("dispose",P);for(let R in l){let w=l[R],y=b.target.uuid;y in w&&(w[y].dispose(),delete w[y])}}}var gm={[ko]:zo,[Go]:Wo,[Vo]:Yo,[Hi]:Ho,[zo]:ko,[Wo]:Go,[Yo]:Vo,[Ho]:Hi};function xm(i,t){function e(){let U=!1,gt=new re,Y=null,tt=new re(0,0,0,0);return{setMask:function(Mt){Y!==Mt&&!U&&(i.colorMask(Mt,Mt,Mt,Mt),Y=Mt)},setLocked:function(Mt){U=Mt},setClear:function(Mt,_t,Ot,ie,ue){ue===!0&&(Mt*=ie,_t*=ie,Ot*=ie),gt.set(Mt,_t,Ot,ie),tt.equals(gt)===!1&&(i.clearColor(Mt,_t,Ot,ie),tt.copy(gt))},reset:function(){U=!1,Y=null,tt.set(-1,0,0,0)}}}function n(){let U=!1,gt=!1,Y=null,tt=null,Mt=null;return{setReversed:function(_t){if(gt!==_t){let Ot=t.get("EXT_clip_control");gt?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT);let ie=Mt;Mt=null,this.setClear(ie)}gt=_t},getReversed:function(){return gt},setTest:function(_t){_t?Z(i.DEPTH_TEST):Et(i.DEPTH_TEST)},setMask:function(_t){Y!==_t&&!U&&(i.depthMask(_t),Y=_t)},setFunc:function(_t){if(gt&&(_t=gm[_t]),tt!==_t){switch(_t){case ko:i.depthFunc(i.NEVER);break;case zo:i.depthFunc(i.ALWAYS);break;case Go:i.depthFunc(i.LESS);break;case Hi:i.depthFunc(i.LEQUAL);break;case Vo:i.depthFunc(i.EQUAL);break;case Ho:i.depthFunc(i.GEQUAL);break;case Wo:i.depthFunc(i.GREATER);break;case Yo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}tt=_t}},setLocked:function(_t){U=_t},setClear:function(_t){Mt!==_t&&(gt&&(_t=1-_t),i.clearDepth(_t),Mt=_t)},reset:function(){U=!1,Y=null,tt=null,Mt=null,gt=!1}}}function s(){let U=!1,gt=null,Y=null,tt=null,Mt=null,_t=null,Ot=null,ie=null,ue=null;return{setTest:function(jt){U||(jt?Z(i.STENCIL_TEST):Et(i.STENCIL_TEST))},setMask:function(jt){gt!==jt&&!U&&(i.stencilMask(jt),gt=jt)},setFunc:function(jt,Ue,be){(Y!==jt||tt!==Ue||Mt!==be)&&(i.stencilFunc(jt,Ue,be),Y=jt,tt=Ue,Mt=be)},setOp:function(jt,Ue,be){(_t!==jt||Ot!==Ue||ie!==be)&&(i.stencilOp(jt,Ue,be),_t=jt,Ot=Ue,ie=be)},setLocked:function(jt){U=jt},setClear:function(jt){ue!==jt&&(i.clearStencil(jt),ue=jt)},reset:function(){U=!1,gt=null,Y=null,tt=null,Mt=null,_t=null,Ot=null,ie=null,ue=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,u={},h={},d=new WeakMap,f=[],m=null,g=!1,A=null,p=null,M=null,_=null,x=null,P=null,b=null,D=new Gt(0,0,0),R=0,w=!1,y=null,I=null,H=null,N=null,G=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,q=0,z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(z)[1]),V=q>=1):z.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),V=q>=2);let st=null,lt={},et=i.getParameter(i.SCISSOR_BOX),vt=i.getParameter(i.VIEWPORT),Rt=new re().fromArray(et),k=new re().fromArray(vt);function rt(U,gt,Y,tt){let Mt=new Uint8Array(4),_t=i.createTexture();i.bindTexture(U,_t),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ot=0;Ot<Y;Ot++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(gt,0,i.RGBA,1,1,tt,0,i.RGBA,i.UNSIGNED_BYTE,Mt):i.texImage2D(gt+Ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Mt);return _t}let j={};j[i.TEXTURE_2D]=rt(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Z(i.DEPTH_TEST),o.setFunc(Hi),ot(!1),mt(Ec),Z(i.CULL_FACE),T(Fn);function Z(U){u[U]!==!0&&(i.enable(U),u[U]=!0)}function Et(U){u[U]!==!1&&(i.disable(U),u[U]=!1)}function Nt(U,gt){return h[U]!==gt?(i.bindFramebuffer(U,gt),h[U]=gt,U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=gt),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=gt),!0):!1}function Lt(U,gt){let Y=f,tt=!1;if(U){Y=d.get(gt),Y===void 0&&(Y=[],d.set(gt,Y));let Mt=U.textures;if(Y.length!==Mt.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let _t=0,Ot=Mt.length;_t<Ot;_t++)Y[_t]=i.COLOR_ATTACHMENT0+_t;Y.length=Mt.length,tt=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,tt=!0);tt&&i.drawBuffers(Y)}function Yt(U){return m!==U?(i.useProgram(U),m=U,!0):!1}let nt={[ni]:i.FUNC_ADD,[Ph]:i.FUNC_SUBTRACT,[Lh]:i.FUNC_REVERSE_SUBTRACT};nt[Uh]=i.MIN,nt[Fh]=i.MAX;let ht={[Nh]:i.ZERO,[ac]:i.ONE,[Oh]:i.SRC_COLOR,[Qo]:i.SRC_ALPHA,[Hh]:i.SRC_ALPHA_SATURATE,[Gh]:i.DST_COLOR,[kh]:i.DST_ALPHA,[Qh]:i.ONE_MINUS_SRC_COLOR,[ws]:i.ONE_MINUS_SRC_ALPHA,[Vh]:i.ONE_MINUS_DST_COLOR,[zh]:i.ONE_MINUS_DST_ALPHA,[Wh]:i.CONSTANT_COLOR,[Yh]:i.ONE_MINUS_CONSTANT_COLOR,[Xh]:i.CONSTANT_ALPHA,[Jh]:i.ONE_MINUS_CONSTANT_ALPHA};function T(U,gt,Y,tt,Mt,_t,Ot,ie,ue,jt){if(U===Fn){g===!0&&(Et(i.BLEND),g=!1);return}if(g===!1&&(Z(i.BLEND),g=!0),U!==oc){if(U!==A||jt!==w){if((p!==ni||x!==ni)&&(i.blendEquation(i.FUNC_ADD),p=ni,x=ni),jt)switch(U){case ki:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sc:i.blendFunc(i.ONE,i.ONE);break;case Cc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ki:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Cc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}M=null,_=null,P=null,b=null,D.set(0,0,0),R=0,A=U,w=jt}return}Mt=Mt||gt,_t=_t||Y,Ot=Ot||tt,(gt!==p||Mt!==x)&&(i.blendEquationSeparate(nt[gt],nt[Mt]),p=gt,x=Mt),(Y!==M||tt!==_||_t!==P||Ot!==b)&&(i.blendFuncSeparate(ht[Y],ht[tt],ht[_t],ht[Ot]),M=Y,_=tt,P=_t,b=Ot),(ie.equals(D)===!1||ue!==R)&&(i.blendColor(ie.r,ie.g,ie.b,ue),D.copy(ie),R=ue),A=U,w=!1}function ft(U,gt){U.side===rn?Et(i.CULL_FACE):Z(i.CULL_FACE);let Y=U.side===Se;gt&&(Y=!Y),ot(Y),U.blending===ki&&U.transparent===!1?T(Fn):T(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let tt=U.stencilWrite;a.setTest(tt),tt&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Pt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):Et(i.SAMPLE_ALPHA_TO_COVERAGE)}function ot(U){y!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),y=U)}function mt(U){U!==Dh?(Z(i.CULL_FACE),U!==I&&(U===Ec?i.cullFace(i.BACK):U===Ih?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Et(i.CULL_FACE),I=U}function pt(U){U!==H&&(V&&i.lineWidth(U),H=U)}function Pt(U,gt,Y){U?(Z(i.POLYGON_OFFSET_FILL),(N!==gt||G!==Y)&&(i.polygonOffset(gt,Y),N=gt,G=Y)):Et(i.POLYGON_OFFSET_FILL)}function yt(U){U?Z(i.SCISSOR_TEST):Et(i.SCISSOR_TEST)}function S(U){U===void 0&&(U=i.TEXTURE0+J-1),st!==U&&(i.activeTexture(U),st=U)}function v(U,gt,Y){Y===void 0&&(st===null?Y=i.TEXTURE0+J-1:Y=st);let tt=lt[Y];tt===void 0&&(tt={type:void 0,texture:void 0},lt[Y]=tt),(tt.type!==U||tt.texture!==gt)&&(st!==Y&&(i.activeTexture(Y),st=Y),i.bindTexture(U,gt||j[U]),tt.type=U,tt.texture=gt)}function O(){let U=lt[st];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function it(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function X(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function bt(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function At(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function wt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Vt(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ct(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function St(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function It(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ft(U){Rt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Rt.copy(U))}function Ct(U){k.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),k.copy(U))}function Ht(U,gt){let Y=l.get(gt);Y===void 0&&(Y=new WeakMap,l.set(gt,Y));let tt=Y.get(U);tt===void 0&&(tt=i.getUniformBlockIndex(gt,U.name),Y.set(U,tt))}function Qt(U,gt){let tt=l.get(gt).get(U);c.get(gt)!==tt&&(i.uniformBlockBinding(gt,tt,U.__bindingPointIndex),c.set(gt,tt))}function $t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},st=null,lt={},h={},d=new WeakMap,f=[],m=null,g=!1,A=null,p=null,M=null,_=null,x=null,P=null,b=null,D=new Gt(0,0,0),R=0,w=!1,y=null,I=null,H=null,N=null,G=null,Rt.set(0,0,i.canvas.width,i.canvas.height),k.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Z,disable:Et,bindFramebuffer:Nt,drawBuffers:Lt,useProgram:Yt,setBlending:T,setMaterial:ft,setFlipSided:ot,setCullFace:mt,setLineWidth:pt,setPolygonOffset:Pt,setScissorTest:yt,activeTexture:S,bindTexture:v,unbindTexture:O,compressedTexImage2D:K,compressedTexImage3D:it,texImage2D:St,texImage3D:It,updateUBOMapping:Ht,uniformBlockBinding:Qt,texStorage2D:Vt,texStorage3D:ct,texSubImage2D:X,texSubImage3D:bt,compressedTexSubImage2D:At,compressedTexSubImage3D:wt,scissor:Ft,viewport:Ct,reset:$t}}function El(i,t,e,n){let s=vm(n);switch(e){case Fl:return i*t;case Ol:return i*t;case Ql:return i*t*2;case kl:return i*t/s.components*s.byteLength;case dc:return i*t/s.components*s.byteLength;case zl:return i*t*2/s.components*s.byteLength;case fc:return i*t*2/s.components*s.byteLength;case Nl:return i*t*3/s.components*s.byteLength;case on:return i*t*4/s.components*s.byteLength;case pc:return i*t*4/s.components*s.byteLength;case dr:case fr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case pr:case Ar:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case jo:case ta:return Math.max(i,16)*Math.max(t,8)/4;case Zo:case $o:return Math.max(i,8)*Math.max(t,8)/2;case ea:case na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ra:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case oa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case aa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ca:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case la:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ha:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ua:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case da:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case fa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case pa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Aa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ma:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ga:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case mr:case xa:case va:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Gl:case _a:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ma:case ya:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function vm(i){switch(i){case an:case Pl:return{byteLength:1,components:1};case Es:case Ll:case Ps:return{byteLength:2,components:1};case hc:case uc:return{byteLength:2,components:4};case ai:case lc:case yn:return{byteLength:4,components:1};case Ul:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function _m(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ut,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(S,v){return f?new OffscreenCanvas(S,v):vr("canvas")}function g(S,v,O){let K=1,it=yt(S);if((it.width>O||it.height>O)&&(K=O/Math.max(it.width,it.height)),K<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let X=Math.floor(K*it.width),bt=Math.floor(K*it.height);h===void 0&&(h=m(X,bt));let At=v?m(X,bt):h;return At.width=X,At.height=bt,At.getContext("2d").drawImage(S,0,0,X,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+X+"x"+bt+")."),At}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),S;return S}function A(S){return S.generateMipmaps}function p(S){i.generateMipmap(S)}function M(S){return S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?i.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(S,v,O,K,it=!1){if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let X=v;if(v===i.RED&&(O===i.FLOAT&&(X=i.R32F),O===i.HALF_FLOAT&&(X=i.R16F),O===i.UNSIGNED_BYTE&&(X=i.R8)),v===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.R8UI),O===i.UNSIGNED_SHORT&&(X=i.R16UI),O===i.UNSIGNED_INT&&(X=i.R32UI),O===i.BYTE&&(X=i.R8I),O===i.SHORT&&(X=i.R16I),O===i.INT&&(X=i.R32I)),v===i.RG&&(O===i.FLOAT&&(X=i.RG32F),O===i.HALF_FLOAT&&(X=i.RG16F),O===i.UNSIGNED_BYTE&&(X=i.RG8)),v===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RG8UI),O===i.UNSIGNED_SHORT&&(X=i.RG16UI),O===i.UNSIGNED_INT&&(X=i.RG32UI),O===i.BYTE&&(X=i.RG8I),O===i.SHORT&&(X=i.RG16I),O===i.INT&&(X=i.RG32I)),v===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RGB8UI),O===i.UNSIGNED_SHORT&&(X=i.RGB16UI),O===i.UNSIGNED_INT&&(X=i.RGB32UI),O===i.BYTE&&(X=i.RGB8I),O===i.SHORT&&(X=i.RGB16I),O===i.INT&&(X=i.RGB32I)),v===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),O===i.UNSIGNED_INT&&(X=i.RGBA32UI),O===i.BYTE&&(X=i.RGBA8I),O===i.SHORT&&(X=i.RGBA16I),O===i.INT&&(X=i.RGBA32I)),v===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),v===i.RGBA){let bt=it?qr:qt.getTransfer(K);O===i.FLOAT&&(X=i.RGBA32F),O===i.HALF_FLOAT&&(X=i.RGBA16F),O===i.UNSIGNED_BYTE&&(X=bt===ne?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function x(S,v){let O;return S?v===null||v===ai||v===Xi?O=i.DEPTH24_STENCIL8:v===yn?O=i.DEPTH32F_STENCIL8:v===Es&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ai||v===Xi?O=i.DEPTH_COMPONENT24:v===yn?O=i.DEPTH_COMPONENT32F:v===Es&&(O=i.DEPTH_COMPONENT16),O}function P(S,v){return A(S)===!0||S.isFramebufferTexture&&S.minFilter!==He&&S.minFilter!==Ke?Math.log2(Math.max(v.width,v.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?v.mipmaps.length:1}function b(S){let v=S.target;v.removeEventListener("dispose",b),R(v),v.isVideoTexture&&u.delete(v)}function D(S){let v=S.target;v.removeEventListener("dispose",D),y(v)}function R(S){let v=n.get(S);if(v.__webglInit===void 0)return;let O=S.source,K=d.get(O);if(K){let it=K[v.__cacheKey];it.usedTimes--,it.usedTimes===0&&w(S),Object.keys(K).length===0&&d.delete(O)}n.remove(S)}function w(S){let v=n.get(S);i.deleteTexture(v.__webglTexture);let O=S.source,K=d.get(O);delete K[v.__cacheKey],o.memory.textures--}function y(S){let v=n.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),n.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(v.__webglFramebuffer[K]))for(let it=0;it<v.__webglFramebuffer[K].length;it++)i.deleteFramebuffer(v.__webglFramebuffer[K][it]);else i.deleteFramebuffer(v.__webglFramebuffer[K]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[K])}else{if(Array.isArray(v.__webglFramebuffer))for(let K=0;K<v.__webglFramebuffer.length;K++)i.deleteFramebuffer(v.__webglFramebuffer[K]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let K=0;K<v.__webglColorRenderbuffer.length;K++)v.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[K]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let O=S.textures;for(let K=0,it=O.length;K<it;K++){let X=n.get(O[K]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),o.memory.textures--),n.remove(O[K])}n.remove(S)}let I=0;function H(){I=0}function N(){let S=I;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),I+=1,S}function G(S){let v=[];return v.push(S.wrapS),v.push(S.wrapT),v.push(S.wrapR||0),v.push(S.magFilter),v.push(S.minFilter),v.push(S.anisotropy),v.push(S.internalFormat),v.push(S.format),v.push(S.type),v.push(S.generateMipmaps),v.push(S.premultiplyAlpha),v.push(S.flipY),v.push(S.unpackAlignment),v.push(S.colorSpace),v.join()}function J(S,v){let O=n.get(S);if(S.isVideoTexture&&pt(S),S.isRenderTargetTexture===!1&&S.version>0&&O.__version!==S.version){let K=S.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{k(O,S,v);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+v)}function V(S,v){let O=n.get(S);if(S.version>0&&O.__version!==S.version){k(O,S,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+v)}function q(S,v){let O=n.get(S);if(S.version>0&&O.__version!==S.version){k(O,S,v);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+v)}function z(S,v){let O=n.get(S);if(S.version>0&&O.__version!==S.version){rt(O,S,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+v)}let st={[Ko]:i.REPEAT,[ri]:i.CLAMP_TO_EDGE,[qo]:i.MIRRORED_REPEAT},lt={[He]:i.NEAREST,[iu]:i.NEAREST_MIPMAP_NEAREST,[zs]:i.NEAREST_MIPMAP_LINEAR,[Ke]:i.LINEAR,[oo]:i.LINEAR_MIPMAP_NEAREST,[oi]:i.LINEAR_MIPMAP_LINEAR},et={[au]:i.NEVER,[fu]:i.ALWAYS,[cu]:i.LESS,[Vl]:i.LEQUAL,[lu]:i.EQUAL,[du]:i.GEQUAL,[hu]:i.GREATER,[uu]:i.NOTEQUAL};function vt(S,v){if(v.type===yn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Ke||v.magFilter===oo||v.magFilter===zs||v.magFilter===oi||v.minFilter===Ke||v.minFilter===oo||v.minFilter===zs||v.minFilter===oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(S,i.TEXTURE_WRAP_S,st[v.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,st[v.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,st[v.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,lt[v.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,lt[v.minFilter]),v.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,et[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===He||v.minFilter!==zs&&v.minFilter!==oi||v.type===yn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(S,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Rt(S,v){let O=!1;S.__webglInit===void 0&&(S.__webglInit=!0,v.addEventListener("dispose",b));let K=v.source,it=d.get(K);it===void 0&&(it={},d.set(K,it));let X=G(v);if(X!==S.__cacheKey){it[X]===void 0&&(it[X]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),it[X].usedTimes++;let bt=it[S.__cacheKey];bt!==void 0&&(it[S.__cacheKey].usedTimes--,bt.usedTimes===0&&w(v)),S.__cacheKey=X,S.__webglTexture=it[X].texture}return O}function k(S,v,O){let K=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(K=i.TEXTURE_3D);let it=Rt(S,v),X=v.source;e.bindTexture(K,S.__webglTexture,i.TEXTURE0+O);let bt=n.get(X);if(X.version!==bt.__version||it===!0){e.activeTexture(i.TEXTURE0+O);let At=qt.getPrimaries(qt.workingColorSpace),wt=v.colorSpace===Ln?null:qt.getPrimaries(v.colorSpace),Vt=v.colorSpace===Ln||At===wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let ct=g(v.image,!1,s.maxTextureSize);ct=Pt(v,ct);let St=r.convert(v.format,v.colorSpace),It=r.convert(v.type),Ft=_(v.internalFormat,St,It,v.colorSpace,v.isVideoTexture);vt(K,v);let Ct,Ht=v.mipmaps,Qt=v.isVideoTexture!==!0,$t=bt.__version===void 0||it===!0,U=X.dataReady,gt=P(v,ct);if(v.isDepthTexture)Ft=x(v.format===Ji,v.type),$t&&(Qt?e.texStorage2D(i.TEXTURE_2D,1,Ft,ct.width,ct.height):e.texImage2D(i.TEXTURE_2D,0,Ft,ct.width,ct.height,0,St,It,null));else if(v.isDataTexture)if(Ht.length>0){Qt&&$t&&e.texStorage2D(i.TEXTURE_2D,gt,Ft,Ht[0].width,Ht[0].height);for(let Y=0,tt=Ht.length;Y<tt;Y++)Ct=Ht[Y],Qt?U&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,Ct.width,Ct.height,St,It,Ct.data):e.texImage2D(i.TEXTURE_2D,Y,Ft,Ct.width,Ct.height,0,St,It,Ct.data);v.generateMipmaps=!1}else Qt?($t&&e.texStorage2D(i.TEXTURE_2D,gt,Ft,ct.width,ct.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct.width,ct.height,St,It,ct.data)):e.texImage2D(i.TEXTURE_2D,0,Ft,ct.width,ct.height,0,St,It,ct.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Qt&&$t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,Ft,Ht[0].width,Ht[0].height,ct.depth);for(let Y=0,tt=Ht.length;Y<tt;Y++)if(Ct=Ht[Y],v.format!==on)if(St!==null)if(Qt){if(U)if(v.layerUpdates.size>0){let Mt=El(Ct.width,Ct.height,v.format,v.type);for(let _t of v.layerUpdates){let Ot=Ct.data.subarray(_t*Mt/Ct.data.BYTES_PER_ELEMENT,(_t+1)*Mt/Ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,_t,Ct.width,Ct.height,1,St,Ot)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,Ct.width,Ct.height,ct.depth,St,Ct.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,Ft,Ct.width,Ct.height,ct.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qt?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,Ct.width,Ct.height,ct.depth,St,It,Ct.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Y,Ft,Ct.width,Ct.height,ct.depth,0,St,It,Ct.data)}else{Qt&&$t&&e.texStorage2D(i.TEXTURE_2D,gt,Ft,Ht[0].width,Ht[0].height);for(let Y=0,tt=Ht.length;Y<tt;Y++)Ct=Ht[Y],v.format!==on?St!==null?Qt?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,Ct.width,Ct.height,St,Ct.data):e.compressedTexImage2D(i.TEXTURE_2D,Y,Ft,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?U&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,Ct.width,Ct.height,St,It,Ct.data):e.texImage2D(i.TEXTURE_2D,Y,Ft,Ct.width,Ct.height,0,St,It,Ct.data)}else if(v.isDataArrayTexture)if(Qt){if($t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,Ft,ct.width,ct.height,ct.depth),U)if(v.layerUpdates.size>0){let Y=El(ct.width,ct.height,v.format,v.type);for(let tt of v.layerUpdates){let Mt=ct.data.subarray(tt*Y/ct.data.BYTES_PER_ELEMENT,(tt+1)*Y/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,ct.width,ct.height,1,St,It,Mt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,St,It,ct.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ft,ct.width,ct.height,ct.depth,0,St,It,ct.data);else if(v.isData3DTexture)Qt?($t&&e.texStorage3D(i.TEXTURE_3D,gt,Ft,ct.width,ct.height,ct.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,St,It,ct.data)):e.texImage3D(i.TEXTURE_3D,0,Ft,ct.width,ct.height,ct.depth,0,St,It,ct.data);else if(v.isFramebufferTexture){if($t)if(Qt)e.texStorage2D(i.TEXTURE_2D,gt,Ft,ct.width,ct.height);else{let Y=ct.width,tt=ct.height;for(let Mt=0;Mt<gt;Mt++)e.texImage2D(i.TEXTURE_2D,Mt,Ft,Y,tt,0,St,It,null),Y>>=1,tt>>=1}}else if(Ht.length>0){if(Qt&&$t){let Y=yt(Ht[0]);e.texStorage2D(i.TEXTURE_2D,gt,Ft,Y.width,Y.height)}for(let Y=0,tt=Ht.length;Y<tt;Y++)Ct=Ht[Y],Qt?U&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,St,It,Ct):e.texImage2D(i.TEXTURE_2D,Y,Ft,St,It,Ct);v.generateMipmaps=!1}else if(Qt){if($t){let Y=yt(ct);e.texStorage2D(i.TEXTURE_2D,gt,Ft,Y.width,Y.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St,It,ct)}else e.texImage2D(i.TEXTURE_2D,0,Ft,St,It,ct);A(v)&&p(K),bt.__version=X.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function rt(S,v,O){if(v.image.length!==6)return;let K=Rt(S,v),it=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+O);let X=n.get(it);if(it.version!==X.__version||K===!0){e.activeTexture(i.TEXTURE0+O);let bt=qt.getPrimaries(qt.workingColorSpace),At=v.colorSpace===Ln?null:qt.getPrimaries(v.colorSpace),wt=v.colorSpace===Ln||bt===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);let Vt=v.isCompressedTexture||v.image[0].isCompressedTexture,ct=v.image[0]&&v.image[0].isDataTexture,St=[];for(let tt=0;tt<6;tt++)!Vt&&!ct?St[tt]=g(v.image[tt],!0,s.maxCubemapSize):St[tt]=ct?v.image[tt].image:v.image[tt],St[tt]=Pt(v,St[tt]);let It=St[0],Ft=r.convert(v.format,v.colorSpace),Ct=r.convert(v.type),Ht=_(v.internalFormat,Ft,Ct,v.colorSpace),Qt=v.isVideoTexture!==!0,$t=X.__version===void 0||K===!0,U=it.dataReady,gt=P(v,It);vt(i.TEXTURE_CUBE_MAP,v);let Y;if(Vt){Qt&&$t&&e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Ht,It.width,It.height);for(let tt=0;tt<6;tt++){Y=St[tt].mipmaps;for(let Mt=0;Mt<Y.length;Mt++){let _t=Y[Mt];v.format!==on?Ft!==null?Qt?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Mt,0,0,_t.width,_t.height,Ft,_t.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Mt,Ht,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Mt,0,0,_t.width,_t.height,Ft,Ct,_t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Mt,Ht,_t.width,_t.height,0,Ft,Ct,_t.data)}}}else{if(Y=v.mipmaps,Qt&&$t){Y.length>0&&gt++;let tt=yt(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Ht,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(ct){Qt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,St[tt].width,St[tt].height,Ft,Ct,St[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Ht,St[tt].width,St[tt].height,0,Ft,Ct,St[tt].data);for(let Mt=0;Mt<Y.length;Mt++){let Ot=Y[Mt].image[tt].image;Qt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Mt+1,0,0,Ot.width,Ot.height,Ft,Ct,Ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Mt+1,Ht,Ot.width,Ot.height,0,Ft,Ct,Ot.data)}}else{Qt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Ft,Ct,St[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Ht,Ft,Ct,St[tt]);for(let Mt=0;Mt<Y.length;Mt++){let _t=Y[Mt];Qt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Mt+1,0,0,Ft,Ct,_t.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Mt+1,Ht,Ft,Ct,_t.image[tt])}}}A(v)&&p(i.TEXTURE_CUBE_MAP),X.__version=it.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function j(S,v,O,K,it,X){let bt=r.convert(O.format,O.colorSpace),At=r.convert(O.type),wt=_(O.internalFormat,bt,At,O.colorSpace),Vt=n.get(v),ct=n.get(O);if(ct.__renderTarget=v,!Vt.__hasExternalTextures){let St=Math.max(1,v.width>>X),It=Math.max(1,v.height>>X);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,X,wt,St,It,v.depth,0,bt,At,null):e.texImage2D(it,X,wt,St,It,0,bt,At,null)}e.bindFramebuffer(i.FRAMEBUFFER,S),mt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,it,ct.__webglTexture,0,ot(v)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,it,ct.__webglTexture,X),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Z(S,v,O){if(i.bindRenderbuffer(i.RENDERBUFFER,S),v.depthBuffer){let K=v.depthTexture,it=K&&K.isDepthTexture?K.type:null,X=x(v.stencilBuffer,it),bt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=ot(v);mt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,At,X,v.width,v.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,At,X,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,X,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,S)}else{let K=v.textures;for(let it=0;it<K.length;it++){let X=K[it],bt=r.convert(X.format,X.colorSpace),At=r.convert(X.type),wt=_(X.internalFormat,bt,At,X.colorSpace),Vt=ot(v);O&&mt(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,wt,v.width,v.height):mt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Vt,wt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,wt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Et(S,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,S),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=n.get(v.depthTexture);K.__renderTarget=v,(!K.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),J(v.depthTexture,0);let it=K.__webglTexture,X=ot(v);if(v.depthTexture.format===zi)mt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0);else if(v.depthTexture.format===Ji)mt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function Nt(S){let v=n.get(S),O=S.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==S.depthTexture){let K=S.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),K){let it=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,K.removeEventListener("dispose",it)};K.addEventListener("dispose",it),v.__depthDisposeCallback=it}v.__boundDepthTexture=K}if(S.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Et(v.__webglFramebuffer,S)}else if(O){v.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[K]),v.__webglDepthbuffer[K]===void 0)v.__webglDepthbuffer[K]=i.createRenderbuffer(),Z(v.__webglDepthbuffer[K],S,!1);else{let it=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,X)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Z(v.__webglDepthbuffer,S,!1);else{let K=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,it)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(S,v,O){let K=n.get(S);v!==void 0&&j(K.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Nt(S)}function Yt(S){let v=S.texture,O=n.get(S),K=n.get(v);S.addEventListener("dispose",D);let it=S.textures,X=S.isWebGLCubeRenderTarget===!0,bt=it.length>1;if(bt||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=v.version,o.memory.textures++),X){O.__webglFramebuffer=[];for(let At=0;At<6;At++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[At]=[];for(let wt=0;wt<v.mipmaps.length;wt++)O.__webglFramebuffer[At][wt]=i.createFramebuffer()}else O.__webglFramebuffer[At]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let At=0;At<v.mipmaps.length;At++)O.__webglFramebuffer[At]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(bt)for(let At=0,wt=it.length;At<wt;At++){let Vt=n.get(it[At]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=i.createTexture(),o.memory.textures++)}if(S.samples>0&&mt(S)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let At=0;At<it.length;At++){let wt=it[At];O.__webglColorRenderbuffer[At]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[At]);let Vt=r.convert(wt.format,wt.colorSpace),ct=r.convert(wt.type),St=_(wt.internalFormat,Vt,ct,wt.colorSpace,S.isXRRenderTarget===!0),It=ot(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,It,St,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,O.__webglColorRenderbuffer[At])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Z(O.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),vt(i.TEXTURE_CUBE_MAP,v);for(let At=0;At<6;At++)if(v.mipmaps&&v.mipmaps.length>0)for(let wt=0;wt<v.mipmaps.length;wt++)j(O.__webglFramebuffer[At][wt],S,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+At,wt);else j(O.__webglFramebuffer[At],S,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);A(v)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let At=0,wt=it.length;At<wt;At++){let Vt=it[At],ct=n.get(Vt);e.bindTexture(i.TEXTURE_2D,ct.__webglTexture),vt(i.TEXTURE_2D,Vt),j(O.__webglFramebuffer,S,Vt,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,0),A(Vt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let At=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(At=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(At,K.__webglTexture),vt(At,v),v.mipmaps&&v.mipmaps.length>0)for(let wt=0;wt<v.mipmaps.length;wt++)j(O.__webglFramebuffer[wt],S,v,i.COLOR_ATTACHMENT0,At,wt);else j(O.__webglFramebuffer,S,v,i.COLOR_ATTACHMENT0,At,0);A(v)&&p(At),e.unbindTexture()}S.depthBuffer&&Nt(S)}function nt(S){let v=S.textures;for(let O=0,K=v.length;O<K;O++){let it=v[O];if(A(it)){let X=M(S),bt=n.get(it).__webglTexture;e.bindTexture(X,bt),p(X),e.unbindTexture()}}}let ht=[],T=[];function ft(S){if(S.samples>0){if(mt(S)===!1){let v=S.textures,O=S.width,K=S.height,it=i.COLOR_BUFFER_BIT,X=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=n.get(S),At=v.length>1;if(At)for(let wt=0;wt<v.length;wt++)e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let wt=0;wt<v.length;wt++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),At){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,bt.__webglColorRenderbuffer[wt]);let Vt=n.get(v[wt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Vt,0)}i.blitFramebuffer(0,0,O,K,0,0,O,K,it,i.NEAREST),c===!0&&(ht.length=0,T.length=0,ht.push(i.COLOR_ATTACHMENT0+wt),S.depthBuffer&&S.resolveDepthBuffer===!1&&(ht.push(X),T.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,T)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ht))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),At)for(let wt=0;wt<v.length;wt++){e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,bt.__webglColorRenderbuffer[wt]);let Vt=n.get(v[wt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,Vt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&c){let v=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function ot(S){return Math.min(s.maxSamples,S.samples)}function mt(S){let v=n.get(S);return S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function pt(S){let v=o.render.frame;u.get(S)!==v&&(u.set(S,v),S.update())}function Pt(S,v){let O=S.colorSpace,K=S.format,it=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||O!==es&&O!==Ln&&(qt.getTransfer(O)===ne?(K!==on||it!==an)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function yt(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(l.width=S.naturalWidth||S.width,l.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(l.width=S.displayWidth,l.height=S.displayHeight):(l.width=S.width,l.height=S.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=H,this.setTexture2D=J,this.setTexture2DArray=V,this.setTexture3D=q,this.setTextureCube=z,this.rebindTextures=Lt,this.setupRenderTarget=Yt,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=j,this.useMultisampledRTT=mt}function Mm(i,t){function e(n,s=Ln){let r,o=qt.getTransfer(s);if(n===an)return i.UNSIGNED_BYTE;if(n===hc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===uc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ul)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Pl)return i.BYTE;if(n===Ll)return i.SHORT;if(n===Es)return i.UNSIGNED_SHORT;if(n===lc)return i.INT;if(n===ai)return i.UNSIGNED_INT;if(n===yn)return i.FLOAT;if(n===Ps)return i.HALF_FLOAT;if(n===Fl)return i.ALPHA;if(n===Nl)return i.RGB;if(n===on)return i.RGBA;if(n===Ol)return i.LUMINANCE;if(n===Ql)return i.LUMINANCE_ALPHA;if(n===zi)return i.DEPTH_COMPONENT;if(n===Ji)return i.DEPTH_STENCIL;if(n===kl)return i.RED;if(n===dc)return i.RED_INTEGER;if(n===zl)return i.RG;if(n===fc)return i.RG_INTEGER;if(n===pc)return i.RGBA_INTEGER;if(n===dr||n===fr||n===pr||n===Ar)if(o===ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===dr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===dr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ar)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Zo||n===jo||n===$o||n===ta)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Zo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===jo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$o)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ta)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ea||n===na||n===ia)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ea||n===na)return o===ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ia)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===sa||n===ra||n===oa||n===aa||n===ca||n===la||n===ha||n===ua||n===da||n===fa||n===pa||n===Aa||n===ma||n===ga)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===sa)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ra)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===oa)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===aa)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ca)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===la)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ha)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ua)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===da)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===fa)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===pa)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Aa)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ma)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ga)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===mr||n===xa||n===va)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===mr)return o===ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===va)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Gl||n===_a||n===Ma||n===ya)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===mr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===_a)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ma)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ya)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Na=class extends pe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Un=class extends Qe{constructor(){super(),this.isGroup=!0,this.type="Group"}},ym={type:"move"},_s=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let g of t.hand.values()){let A=e.getJointPose(g,n),p=this._getHandJoint(l,g);A!==null&&(p.matrix.fromArray(A.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=A.radius),p.visible=A!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ym)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Un;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},wm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Em=`
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

}`,Oa=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new We,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ke({vertexShader:wm,fragmentShader:Em,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pe(new Gn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Qa=class extends Qn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,m=null,g=new Oa,A=e.getContextAttributes(),p=null,M=null,_=[],x=[],P=new ut,b=null,D=new pe;D.viewport=new re;let R=new pe;R.viewport=new re;let w=[D,R],y=new Na,I=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let rt=_[k];return rt===void 0&&(rt=new _s,_[k]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(k){let rt=_[k];return rt===void 0&&(rt=new _s,_[k]=rt),rt.getGripSpace()},this.getHand=function(k){let rt=_[k];return rt===void 0&&(rt=new _s,_[k]=rt),rt.getHandSpace()};function N(k){let rt=x.indexOf(k.inputSource);if(rt===-1)return;let j=_[rt];j!==void 0&&(j.update(k.inputSource,k.frame,l||o),j.dispatchEvent({type:k.type,data:k.inputSource}))}function G(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",J);for(let k=0;k<_.length;k++){let rt=x[k];rt!==null&&(x[k]=null,_[k].disconnect(rt))}I=null,H=null,g.reset(),t.setRenderTarget(p),f=null,d=null,h=null,s=null,M=null,Rt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",G),s.addEventListener("inputsourceschange",J),A.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){let rt={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,rt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new cn(f.framebufferWidth,f.framebufferHeight,{format:on,type:an,colorSpace:t.outputColorSpace,stencilBuffer:A.stencil})}else{let rt=null,j=null,Z=null;A.depth&&(Z=A.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=A.stencil?Ji:zi,j=A.stencil?Xi:ai);let Et={colorFormat:e.RGBA8,depthFormat:Z,scaleFactor:r};h=new XRWebGLBinding(s,e),d=h.createProjectionLayer(Et),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new cn(d.textureWidth,d.textureHeight,{format:on,type:an,depthTexture:new br(d.textureWidth,d.textureHeight,j,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:A.stencil,colorSpace:t.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Rt.setContext(s),Rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function J(k){for(let rt=0;rt<k.removed.length;rt++){let j=k.removed[rt],Z=x.indexOf(j);Z>=0&&(x[Z]=null,_[Z].disconnect(j))}for(let rt=0;rt<k.added.length;rt++){let j=k.added[rt],Z=x.indexOf(j);if(Z===-1){for(let Nt=0;Nt<_.length;Nt++)if(Nt>=x.length){x.push(j),Z=Nt;break}else if(x[Nt]===null){x[Nt]=j,Z=Nt;break}if(Z===-1)break}let Et=_[Z];Et&&Et.connect(j)}}let V=new L,q=new L;function z(k,rt,j){V.setFromMatrixPosition(rt.matrixWorld),q.setFromMatrixPosition(j.matrixWorld);let Z=V.distanceTo(q),Et=rt.projectionMatrix.elements,Nt=j.projectionMatrix.elements,Lt=Et[14]/(Et[10]-1),Yt=Et[14]/(Et[10]+1),nt=(Et[9]+1)/Et[5],ht=(Et[9]-1)/Et[5],T=(Et[8]-1)/Et[0],ft=(Nt[8]+1)/Nt[0],ot=Lt*T,mt=Lt*ft,pt=Z/(-T+ft),Pt=pt*-T;if(rt.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Pt),k.translateZ(pt),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),Et[10]===-1)k.projectionMatrix.copy(rt.projectionMatrix),k.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{let yt=Lt+pt,S=Yt+pt,v=ot-Pt,O=mt+(Z-Pt),K=nt*Yt/S*yt,it=ht*Yt/S*yt;k.projectionMatrix.makePerspective(v,O,K,it,yt,S),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function st(k,rt){rt===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(rt.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;let rt=k.near,j=k.far;g.texture!==null&&(g.depthNear>0&&(rt=g.depthNear),g.depthFar>0&&(j=g.depthFar)),y.near=R.near=D.near=rt,y.far=R.far=D.far=j,(I!==y.near||H!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),I=y.near,H=y.far),D.layers.mask=k.layers.mask|2,R.layers.mask=k.layers.mask|4,y.layers.mask=D.layers.mask|R.layers.mask;let Z=k.parent,Et=y.cameras;st(y,Z);for(let Nt=0;Nt<Et.length;Nt++)st(Et[Nt],Z);Et.length===2?z(y,D,R):y.projectionMatrix.copy(D.projectionMatrix),lt(k,y,Z)};function lt(k,rt,j){j===null?k.matrix.copy(rt.matrixWorld):(k.matrix.copy(j.matrixWorld),k.matrix.invert(),k.matrix.multiply(rt.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(rt.projectionMatrix),k.projectionMatrixInverse.copy(rt.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Ss*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(k){c=k,d!==null&&(d.fixedFoveation=k),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=k)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(y)};let et=null;function vt(k,rt){if(u=rt.getViewerPose(l||o),m=rt,u!==null){let j=u.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let Z=!1;j.length!==y.cameras.length&&(y.cameras.length=0,Z=!0);for(let Nt=0;Nt<j.length;Nt++){let Lt=j[Nt],Yt=null;if(f!==null)Yt=f.getViewport(Lt);else{let ht=h.getViewSubImage(d,Lt);Yt=ht.viewport,Nt===0&&(t.setRenderTargetTextures(M,ht.colorTexture,d.ignoreDepthValues?void 0:ht.depthStencilTexture),t.setRenderTarget(M))}let nt=w[Nt];nt===void 0&&(nt=new pe,nt.layers.enable(Nt),nt.viewport=new re,w[Nt]=nt),nt.matrix.fromArray(Lt.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(Lt.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(Yt.x,Yt.y,Yt.width,Yt.height),Nt===0&&(y.matrix.copy(nt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Z===!0&&y.cameras.push(nt)}let Et=s.enabledFeatures;if(Et&&Et.includes("depth-sensing")){let Nt=h.getDepthInformation(j[0]);Nt&&Nt.isValid&&Nt.texture&&g.init(t,Nt,s.renderState)}}for(let j=0;j<_.length;j++){let Z=x[j],Et=_[j];Z!==null&&Et!==void 0&&Et.update(Z,rt,l||o)}et&&et(k,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),m=null}let Rt=new Xl;Rt.setAnimationLoop(vt),this.setAnimationLoop=function(k){et=k},this.dispose=function(){}}},ti=new Ye,Sm=new oe;function Cm(i,t){function e(A,p){A.matrixAutoUpdate===!0&&A.updateMatrix(),p.value.copy(A.matrix)}function n(A,p){p.color.getRGB(A.fogColor.value,Yl(i)),p.isFog?(A.fogNear.value=p.near,A.fogFar.value=p.far):p.isFogExp2&&(A.fogDensity.value=p.density)}function s(A,p,M,_,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(A,p):p.isMeshToonMaterial?(r(A,p),h(A,p)):p.isMeshPhongMaterial?(r(A,p),u(A,p)):p.isMeshStandardMaterial?(r(A,p),d(A,p),p.isMeshPhysicalMaterial&&f(A,p,x)):p.isMeshMatcapMaterial?(r(A,p),m(A,p)):p.isMeshDepthMaterial?r(A,p):p.isMeshDistanceMaterial?(r(A,p),g(A,p)):p.isMeshNormalMaterial?r(A,p):p.isLineBasicMaterial?(o(A,p),p.isLineDashedMaterial&&a(A,p)):p.isPointsMaterial?c(A,p,M,_):p.isSpriteMaterial?l(A,p):p.isShadowMaterial?(A.color.value.copy(p.color),A.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(A,p){A.opacity.value=p.opacity,p.color&&A.diffuse.value.copy(p.color),p.emissive&&A.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(A.map.value=p.map,e(p.map,A.mapTransform)),p.alphaMap&&(A.alphaMap.value=p.alphaMap,e(p.alphaMap,A.alphaMapTransform)),p.bumpMap&&(A.bumpMap.value=p.bumpMap,e(p.bumpMap,A.bumpMapTransform),A.bumpScale.value=p.bumpScale,p.side===Se&&(A.bumpScale.value*=-1)),p.normalMap&&(A.normalMap.value=p.normalMap,e(p.normalMap,A.normalMapTransform),A.normalScale.value.copy(p.normalScale),p.side===Se&&A.normalScale.value.negate()),p.displacementMap&&(A.displacementMap.value=p.displacementMap,e(p.displacementMap,A.displacementMapTransform),A.displacementScale.value=p.displacementScale,A.displacementBias.value=p.displacementBias),p.emissiveMap&&(A.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,A.emissiveMapTransform)),p.specularMap&&(A.specularMap.value=p.specularMap,e(p.specularMap,A.specularMapTransform)),p.alphaTest>0&&(A.alphaTest.value=p.alphaTest);let M=t.get(p),_=M.envMap,x=M.envMapRotation;_&&(A.envMap.value=_,ti.copy(x),ti.x*=-1,ti.y*=-1,ti.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),A.envMapRotation.value.setFromMatrix4(Sm.makeRotationFromEuler(ti)),A.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,A.reflectivity.value=p.reflectivity,A.ior.value=p.ior,A.refractionRatio.value=p.refractionRatio),p.lightMap&&(A.lightMap.value=p.lightMap,A.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,A.lightMapTransform)),p.aoMap&&(A.aoMap.value=p.aoMap,A.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,A.aoMapTransform))}function o(A,p){A.diffuse.value.copy(p.color),A.opacity.value=p.opacity,p.map&&(A.map.value=p.map,e(p.map,A.mapTransform))}function a(A,p){A.dashSize.value=p.dashSize,A.totalSize.value=p.dashSize+p.gapSize,A.scale.value=p.scale}function c(A,p,M,_){A.diffuse.value.copy(p.color),A.opacity.value=p.opacity,A.size.value=p.size*M,A.scale.value=_*.5,p.map&&(A.map.value=p.map,e(p.map,A.uvTransform)),p.alphaMap&&(A.alphaMap.value=p.alphaMap,e(p.alphaMap,A.alphaMapTransform)),p.alphaTest>0&&(A.alphaTest.value=p.alphaTest)}function l(A,p){A.diffuse.value.copy(p.color),A.opacity.value=p.opacity,A.rotation.value=p.rotation,p.map&&(A.map.value=p.map,e(p.map,A.mapTransform)),p.alphaMap&&(A.alphaMap.value=p.alphaMap,e(p.alphaMap,A.alphaMapTransform)),p.alphaTest>0&&(A.alphaTest.value=p.alphaTest)}function u(A,p){A.specular.value.copy(p.specular),A.shininess.value=Math.max(p.shininess,1e-4)}function h(A,p){p.gradientMap&&(A.gradientMap.value=p.gradientMap)}function d(A,p){A.metalness.value=p.metalness,p.metalnessMap&&(A.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,A.metalnessMapTransform)),A.roughness.value=p.roughness,p.roughnessMap&&(A.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,A.roughnessMapTransform)),p.envMap&&(A.envMapIntensity.value=p.envMapIntensity)}function f(A,p,M){A.ior.value=p.ior,p.sheen>0&&(A.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),A.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(A.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,A.sheenColorMapTransform)),p.sheenRoughnessMap&&(A.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,A.sheenRoughnessMapTransform))),p.clearcoat>0&&(A.clearcoat.value=p.clearcoat,A.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(A.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,A.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(A.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,A.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(A.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,A.clearcoatNormalMapTransform),A.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Se&&A.clearcoatNormalScale.value.negate())),p.dispersion>0&&(A.dispersion.value=p.dispersion),p.iridescence>0&&(A.iridescence.value=p.iridescence,A.iridescenceIOR.value=p.iridescenceIOR,A.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],A.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(A.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,A.iridescenceMapTransform)),p.iridescenceThicknessMap&&(A.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,A.iridescenceThicknessMapTransform))),p.transmission>0&&(A.transmission.value=p.transmission,A.transmissionSamplerMap.value=M.texture,A.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(A.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,A.transmissionMapTransform)),A.thickness.value=p.thickness,p.thicknessMap&&(A.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,A.thicknessMapTransform)),A.attenuationDistance.value=p.attenuationDistance,A.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(A.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(A.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,A.anisotropyMapTransform))),A.specularIntensity.value=p.specularIntensity,A.specularColor.value.copy(p.specularColor),p.specularColorMap&&(A.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,A.specularColorMapTransform)),p.specularIntensityMap&&(A.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,A.specularIntensityMapTransform))}function m(A,p){p.matcap&&(A.matcap.value=p.matcap)}function g(A,p){let M=t.get(p).light;A.referencePosition.value.setFromMatrixPosition(M.matrixWorld),A.nearDistance.value=M.shadow.camera.near,A.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function bm(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,_){let x=_.program;n.uniformBlockBinding(M,x)}function l(M,_){let x=s[M.id];x===void 0&&(m(M),x=u(M),s[M.id]=x,M.addEventListener("dispose",A));let P=_.program;n.updateUBOMapping(M,P);let b=t.render.frame;r[M.id]!==b&&(d(M),r[M.id]=b)}function u(M){let _=h();M.__bindingPointIndex=_;let x=i.createBuffer(),P=M.__size,b=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,P,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,x),x}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let _=s[M.id],x=M.uniforms,P=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let b=0,D=x.length;b<D;b++){let R=Array.isArray(x[b])?x[b]:[x[b]];for(let w=0,y=R.length;w<y;w++){let I=R[w];if(f(I,b,w,P)===!0){let H=I.__offset,N=Array.isArray(I.value)?I.value:[I.value],G=0;for(let J=0;J<N.length;J++){let V=N[J],q=g(V);typeof V=="number"||typeof V=="boolean"?(I.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,H+G,I.__data)):V.isMatrix3?(I.__data[0]=V.elements[0],I.__data[1]=V.elements[1],I.__data[2]=V.elements[2],I.__data[3]=0,I.__data[4]=V.elements[3],I.__data[5]=V.elements[4],I.__data[6]=V.elements[5],I.__data[7]=0,I.__data[8]=V.elements[6],I.__data[9]=V.elements[7],I.__data[10]=V.elements[8],I.__data[11]=0):(V.toArray(I.__data,G),G+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,_,x,P){let b=M.value,D=_+"_"+x;if(P[D]===void 0)return typeof b=="number"||typeof b=="boolean"?P[D]=b:P[D]=b.clone(),!0;{let R=P[D];if(typeof b=="number"||typeof b=="boolean"){if(R!==b)return P[D]=b,!0}else if(R.equals(b)===!1)return R.copy(b),!0}return!1}function m(M){let _=M.uniforms,x=0,P=16;for(let D=0,R=_.length;D<R;D++){let w=Array.isArray(_[D])?_[D]:[_[D]];for(let y=0,I=w.length;y<I;y++){let H=w[y],N=Array.isArray(H.value)?H.value:[H.value];for(let G=0,J=N.length;G<J;G++){let V=N[G],q=g(V),z=x%P,st=z%q.boundary,lt=z+st;x+=st,lt!==0&&P-lt<q.storage&&(x+=P-lt),H.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=x,x+=q.storage}}}let b=x%P;return b>0&&(x+=P-b),M.__size=x,M.__cache={},this}function g(M){let _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function A(M){let _=M.target;_.removeEventListener("dispose",A);let x=o.indexOf(_.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var Hn=class{constructor(t={}){let{canvas:e=Du(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let m=new Uint32Array(4),g=new Int32Array(4),A=null,p=null,M=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=de,this.toneMapping=Nn,this.toneMappingExposure=1;let x=this,P=!1,b=0,D=0,R=null,w=-1,y=null,I=new re,H=new re,N=null,G=new Gt(0),J=0,V=e.width,q=e.height,z=1,st=null,lt=null,et=new re(0,0,V,q),vt=new re(0,0,V,q),Rt=!1,k=new bs,rt=!1,j=!1,Z=new oe,Et=new oe,Nt=new L,Lt=new re,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},nt=!1;function ht(){return R===null?z:1}let T=n;function ft(E,F){return e.getContext(E,F)}try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${rc}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",Mt,!1),e.addEventListener("webglcontextcreationerror",_t,!1),T===null){let F="webgl2";if(T=ft(F,E),T===null)throw ft(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ot,mt,pt,Pt,yt,S,v,O,K,it,X,bt,At,wt,Vt,ct,St,It,Ft,Ct,Ht,Qt,$t,U;function gt(){ot=new Vp(T),ot.init(),Qt=new Mm(T,ot),mt=new Np(T,ot,t,Qt),pt=new xm(T,ot),mt.reverseDepthBuffer&&d&&pt.buffers.depth.setReversed(!0),Pt=new Yp(T),yt=new rm,S=new _m(T,ot,pt,yt,mt,Qt,Pt),v=new Qp(x),O=new Gp(x),K=new ju(T),$t=new Up(T,K),it=new Hp(T,K,Pt,$t),X=new Jp(T,it,K,Pt),Ft=new Xp(T,mt,S),ct=new Op(yt),bt=new sm(x,v,O,ot,mt,$t,ct),At=new Cm(x,yt),wt=new am,Vt=new fm(ot),It=new Lp(x,v,O,pt,X,f,c),St=new mm(x,X,mt),U=new bm(T,Pt,mt,pt),Ct=new Fp(T,ot,Pt),Ht=new Wp(T,ot,Pt),Pt.programs=bt.programs,x.capabilities=mt,x.extensions=ot,x.properties=yt,x.renderLists=wt,x.shadowMap=St,x.state=pt,x.info=Pt}gt();let Y=new Qa(x,T);this.xr=Y,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let E=ot.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=ot.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(E){E!==void 0&&(z=E,this.setSize(V,q,!1))},this.getSize=function(E){return E.set(V,q)},this.setSize=function(E,F,W=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=E,q=F,e.width=Math.floor(E*z),e.height=Math.floor(F*z),W===!0&&(e.style.width=E+"px",e.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(V*z,q*z).floor()},this.setDrawingBufferSize=function(E,F,W){V=E,q=F,z=W,e.width=Math.floor(E*W),e.height=Math.floor(F*W),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(I)},this.getViewport=function(E){return E.copy(et)},this.setViewport=function(E,F,W,B){E.isVector4?et.set(E.x,E.y,E.z,E.w):et.set(E,F,W,B),pt.viewport(I.copy(et).multiplyScalar(z).round())},this.getScissor=function(E){return E.copy(vt)},this.setScissor=function(E,F,W,B){E.isVector4?vt.set(E.x,E.y,E.z,E.w):vt.set(E,F,W,B),pt.scissor(H.copy(vt).multiplyScalar(z).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(E){pt.setScissorTest(Rt=E)},this.setOpaqueSort=function(E){st=E},this.setTransparentSort=function(E){lt=E},this.getClearColor=function(E){return E.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor.apply(It,arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha.apply(It,arguments)},this.clear=function(E=!0,F=!0,W=!0){let B=0;if(E){let C=!1;if(R!==null){let Q=R.texture.format;C=Q===pc||Q===fc||Q===dc}if(C){let Q=R.texture.type,$=Q===an||Q===ai||Q===Es||Q===Xi||Q===hc||Q===uc,at=It.getClearColor(),dt=It.getClearAlpha(),Bt=at.r,Ut=at.g,Tt=at.b;$?(m[0]=Bt,m[1]=Ut,m[2]=Tt,m[3]=dt,T.clearBufferuiv(T.COLOR,0,m)):(g[0]=Bt,g[1]=Ut,g[2]=Tt,g[3]=dt,T.clearBufferiv(T.COLOR,0,g))}else B|=T.COLOR_BUFFER_BIT}F&&(B|=T.DEPTH_BUFFER_BIT),W&&(B|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",Mt,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),wt.dispose(),Vt.dispose(),yt.dispose(),v.dispose(),O.dispose(),X.dispose(),$t.dispose(),U.dispose(),bt.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",vi),Y.removeEventListener("sessionend",Wn),je.stop()};function tt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Mt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let E=Pt.autoReset,F=St.enabled,W=St.autoUpdate,B=St.needsUpdate,C=St.type;gt(),Pt.autoReset=E,St.enabled=F,St.autoUpdate=W,St.needsUpdate=B,St.type=C}function _t(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ot(E){let F=E.target;F.removeEventListener("dispose",Ot),ie(F)}function ie(E){ue(E),yt.remove(E)}function ue(E){let F=yt.get(E).programs;F!==void 0&&(F.forEach(function(W){bt.releaseProgram(W)}),E.isShaderMaterial&&bt.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,W,B,C,Q){F===null&&(F=Yt);let $=C.isMesh&&C.matrixWorld.determinant()<0,at=Qs(E,F,W,B,C);pt.setMaterial(B,$);let dt=W.index,Bt=1;if(B.wireframe===!0){if(dt=it.getWireframeAttribute(W),dt===void 0)return;Bt=2}let Ut=W.drawRange,Tt=W.attributes.position,Wt=Ut.start*Bt,Xt=(Ut.start+Ut.count)*Bt;Q!==null&&(Wt=Math.max(Wt,Q.start*Bt),Xt=Math.min(Xt,(Q.start+Q.count)*Bt)),dt!==null?(Wt=Math.max(Wt,0),Xt=Math.min(Xt,dt.count)):Tt!=null&&(Wt=Math.max(Wt,0),Xt=Math.min(Xt,Tt.count));let ee=Xt-Wt;if(ee<0||ee===1/0)return;$t.setup(C,B,at,W,dt);let Me,Jt=Ct;if(dt!==null&&(Me=K.get(dt),Jt=Ht,Jt.setIndex(Me)),C.isMesh)B.wireframe===!0?(pt.setLineWidth(B.wireframeLinewidth*ht()),Jt.setMode(T.LINES)):Jt.setMode(T.TRIANGLES);else if(C.isLine){let Dt=B.linewidth;Dt===void 0&&(Dt=1),pt.setLineWidth(Dt*ht()),C.isLineSegments?Jt.setMode(T.LINES):C.isLineLoop?Jt.setMode(T.LINE_LOOP):Jt.setMode(T.LINE_STRIP)}else C.isPoints?Jt.setMode(T.POINTS):C.isSprite&&Jt.setMode(T.TRIANGLES);if(C.isBatchedMesh)if(C._multiDrawInstances!==null)Jt.renderMultiDrawInstances(C._multiDrawStarts,C._multiDrawCounts,C._multiDrawCount,C._multiDrawInstances);else if(ot.get("WEBGL_multi_draw"))Jt.renderMultiDraw(C._multiDrawStarts,C._multiDrawCounts,C._multiDrawCount);else{let Dt=C._multiDrawStarts,Be=C._multiDrawCounts,Kt=C._multiDrawCount,le=dt?K.get(dt).bytesPerElement:1,Te=yt.get(B).currentProgram.getUniforms();for(let se=0;se<Kt;se++)Te.setValue(T,"_gl_DrawID",se),Jt.render(Dt[se]/le,Be[se])}else if(C.isInstancedMesh)Jt.renderInstances(Wt,ee,C.count);else if(W.isInstancedBufferGeometry){let Dt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Be=Math.min(W.instanceCount,Dt);Jt.renderInstances(Wt,ee,Be)}else Jt.render(Wt,ee)};function jt(E,F,W){E.transparent===!0&&E.side===rn&&E.forceSinglePass===!1?(E.side=Se,E.needsUpdate=!0,Yn(E,F,W),E.side=dn,E.needsUpdate=!0,Yn(E,F,W),E.side=rn):Yn(E,F,W)}this.compile=function(E,F,W=null){W===null&&(W=E),p=Vt.get(W),p.init(F),_.push(p),W.traverseVisible(function(C){C.isLight&&C.layers.test(F.layers)&&(p.pushLight(C),C.castShadow&&p.pushShadow(C))}),E!==W&&E.traverseVisible(function(C){C.isLight&&C.layers.test(F.layers)&&(p.pushLight(C),C.castShadow&&p.pushShadow(C))}),p.setupLights();let B=new Set;return E.traverse(function(C){if(!(C.isMesh||C.isPoints||C.isLine||C.isSprite))return;let Q=C.material;if(Q)if(Array.isArray(Q))for(let $=0;$<Q.length;$++){let at=Q[$];jt(at,W,C),B.add(at)}else jt(Q,W,C),B.add(Q)}),_.pop(),p=null,B},this.compileAsync=function(E,F,W=null){let B=this.compile(E,F,W);return new Promise(C=>{function Q(){if(B.forEach(function($){yt.get($).currentProgram.isReady()&&B.delete($)}),B.size===0){C(E);return}setTimeout(Q,10)}ot.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Ue=null;function be(E){Ue&&Ue(E)}function vi(){je.stop()}function Wn(){je.start()}let je=new Xl;je.setAnimationLoop(be),typeof self<"u"&&je.setContext(self),this.setAnimationLoop=function(E){Ue=E,Y.setAnimationLoop(E),E===null?je.stop():je.start()},Y.addEventListener("sessionstart",vi),Y.addEventListener("sessionend",Wn),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(F),F=Y.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,F,R),p=Vt.get(E,_.length),p.init(F),_.push(p),Et.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),k.setFromProjectionMatrix(Et),j=this.localClippingEnabled,rt=ct.init(this.clippingPlanes,j),A=wt.get(E,M.length),A.init(),M.push(A),Y.enabled===!0&&Y.isPresenting===!0){let Q=x.xr.getDepthSensingMesh();Q!==null&&Fe(Q,F,-1/0,x.sortObjects)}Fe(E,F,0,x.sortObjects),A.finish(),x.sortObjects===!0&&A.sort(st,lt),nt=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,nt&&It.addToRenderList(A,E),this.info.render.frame++,rt===!0&&ct.beginShadows();let W=p.state.shadowsArray;St.render(W,E,F),rt===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();let B=A.opaque,C=A.transmissive;if(p.setupLights(),F.isArrayCamera){let Q=F.cameras;if(C.length>0)for(let $=0,at=Q.length;$<at;$++){let dt=Q[$];us(B,C,E,dt)}nt&&It.render(E);for(let $=0,at=Q.length;$<at;$++){let dt=Q[$];hs(A,E,dt,dt.viewport)}}else C.length>0&&us(B,C,E,F),nt&&It.render(E),hs(A,E,F);R!==null&&(S.updateMultisampleRenderTarget(R),S.updateRenderTargetMipmap(R)),E.isScene===!0&&E.onAfterRender(x,E,F),$t.resetDefaultState(),w=-1,y=null,_.pop(),_.length>0?(p=_[_.length-1],rt===!0&&ct.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?A=M[M.length-1]:A=null};function Fe(E,F,W,B){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||k.intersectsSprite(E)){B&&Lt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Et);let $=X.update(E),at=E.material;at.visible&&A.push(E,$,at,W,Lt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||k.intersectsObject(E))){let $=X.update(E),at=E.material;if(B&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Lt.copy(E.boundingSphere.center)):($.boundingSphere===null&&$.computeBoundingSphere(),Lt.copy($.boundingSphere.center)),Lt.applyMatrix4(E.matrixWorld).applyMatrix4(Et)),Array.isArray(at)){let dt=$.groups;for(let Bt=0,Ut=dt.length;Bt<Ut;Bt++){let Tt=dt[Bt],Wt=at[Tt.materialIndex];Wt&&Wt.visible&&A.push(E,$,Wt,W,Lt.z,Tt)}}else at.visible&&A.push(E,$,at,W,Lt.z,null)}}let Q=E.children;for(let $=0,at=Q.length;$<at;$++)Fe(Q[$],F,W,B)}function hs(E,F,W,B){let C=E.opaque,Q=E.transmissive,$=E.transparent;p.setupLightsView(W),rt===!0&&ct.setGlobalState(x.clippingPlanes,W),B&&pt.viewport(I.copy(B)),C.length>0&&bn(C,F,W),Q.length>0&&bn(Q,F,W),$.length>0&&bn($,F,W),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function us(E,F,W,B){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[B.id]===void 0&&(p.state.transmissionRenderTarget[B.id]=new cn(1,1,{generateMipmaps:!0,type:ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float")?Ps:an,minFilter:oi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));let Q=p.state.transmissionRenderTarget[B.id],$=B.viewport||I;Q.setSize($.z,$.w);let at=x.getRenderTarget();x.setRenderTarget(Q),x.getClearColor(G),J=x.getClearAlpha(),J<1&&x.setClearColor(16777215,.5),x.clear(),nt&&It.render(W);let dt=x.toneMapping;x.toneMapping=Nn;let Bt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),p.setupLightsView(B),rt===!0&&ct.setGlobalState(x.clippingPlanes,B),bn(E,W,B),S.updateMultisampleRenderTarget(Q),S.updateRenderTargetMipmap(Q),ot.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let Tt=0,Wt=F.length;Tt<Wt;Tt++){let Xt=F[Tt],ee=Xt.object,Me=Xt.geometry,Jt=Xt.material,Dt=Xt.group;if(Jt.side===rn&&ee.layers.test(B.layers)){let Be=Jt.side;Jt.side=Se,Jt.needsUpdate=!0,_i(ee,W,B,Me,Jt,Dt),Jt.side=Be,Jt.needsUpdate=!0,Ut=!0}}Ut===!0&&(S.updateMultisampleRenderTarget(Q),S.updateRenderTargetMipmap(Q))}x.setRenderTarget(at),x.setClearColor(G,J),Bt!==void 0&&(B.viewport=Bt),x.toneMapping=dt}function bn(E,F,W){let B=F.isScene===!0?F.overrideMaterial:null;for(let C=0,Q=E.length;C<Q;C++){let $=E[C],at=$.object,dt=$.geometry,Bt=B===null?$.material:B,Ut=$.group;at.layers.test(W.layers)&&_i(at,F,W,dt,Bt,Ut)}}function _i(E,F,W,B,C,Q){E.onBeforeRender(x,F,W,B,C,Q),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),C.onBeforeRender(x,F,W,B,E,Q),C.transparent===!0&&C.side===rn&&C.forceSinglePass===!1?(C.side=Se,C.needsUpdate=!0,x.renderBufferDirect(W,F,B,C,E,Q),C.side=dn,C.needsUpdate=!0,x.renderBufferDirect(W,F,B,C,E,Q),C.side=rn):x.renderBufferDirect(W,F,B,C,E,Q),E.onAfterRender(x,F,W,B,C,Q)}function Yn(E,F,W){F.isScene!==!0&&(F=Yt);let B=yt.get(E),C=p.state.lights,Q=p.state.shadowsArray,$=C.state.version,at=bt.getParameters(E,C.state,Q,F,W),dt=bt.getProgramCacheKey(at),Bt=B.programs;B.environment=E.isMeshStandardMaterial?F.environment:null,B.fog=F.fog,B.envMap=(E.isMeshStandardMaterial?O:v).get(E.envMap||B.environment),B.envMapRotation=B.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Bt===void 0&&(E.addEventListener("dispose",Ot),Bt=new Map,B.programs=Bt);let Ut=Bt.get(dt);if(Ut!==void 0){if(B.currentProgram===Ut&&B.lightsStateVersion===$)return Mi(E,at),Ut}else at.uniforms=bt.getUniforms(E),E.onBeforeCompile(at,x),Ut=bt.acquireProgram(at,dt),Bt.set(dt,Ut),B.uniforms=at.uniforms;let Tt=B.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Tt.clippingPlanes=ct.uniform),Mi(E,at),B.needsLights=Jn(E),B.lightsStateVersion=$,B.needsLights&&(Tt.ambientLightColor.value=C.state.ambient,Tt.lightProbe.value=C.state.probe,Tt.directionalLights.value=C.state.directional,Tt.directionalLightShadows.value=C.state.directionalShadow,Tt.spotLights.value=C.state.spot,Tt.spotLightShadows.value=C.state.spotShadow,Tt.rectAreaLights.value=C.state.rectArea,Tt.ltc_1.value=C.state.rectAreaLTC1,Tt.ltc_2.value=C.state.rectAreaLTC2,Tt.pointLights.value=C.state.point,Tt.pointLightShadows.value=C.state.pointShadow,Tt.hemisphereLights.value=C.state.hemi,Tt.directionalShadowMap.value=C.state.directionalShadowMap,Tt.directionalShadowMatrix.value=C.state.directionalShadowMatrix,Tt.spotShadowMap.value=C.state.spotShadowMap,Tt.spotLightMatrix.value=C.state.spotLightMatrix,Tt.spotLightMap.value=C.state.spotLightMap,Tt.pointShadowMap.value=C.state.pointShadowMap,Tt.pointShadowMatrix.value=C.state.pointShadowMatrix),B.currentProgram=Ut,B.uniformsList=null,Ut}function Xn(E){if(E.uniformsList===null){let F=E.currentProgram.getUniforms();E.uniformsList=Vi.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function Mi(E,F){let W=yt.get(E);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function Qs(E,F,W,B,C){F.isScene!==!0&&(F=Yt),S.resetTextureUnits();let Q=F.fog,$=B.isMeshStandardMaterial?F.environment:null,at=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:es,dt=(B.isMeshStandardMaterial?O:v).get(B.envMap||$),Bt=B.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ut=!!W.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Tt=!!W.morphAttributes.position,Wt=!!W.morphAttributes.normal,Xt=!!W.morphAttributes.color,ee=Nn;B.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ee=x.toneMapping);let Me=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Jt=Me!==void 0?Me.length:0,Dt=yt.get(B),Be=p.state.lights;if(rt===!0&&(j===!0||E!==y)){let De=E===y&&B.id===w;ct.setState(B,E,De)}let Kt=!1;B.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==Be.state.version||Dt.outputColorSpace!==at||C.isBatchedMesh&&Dt.batching===!1||!C.isBatchedMesh&&Dt.batching===!0||C.isBatchedMesh&&Dt.batchingColor===!0&&C.colorTexture===null||C.isBatchedMesh&&Dt.batchingColor===!1&&C.colorTexture!==null||C.isInstancedMesh&&Dt.instancing===!1||!C.isInstancedMesh&&Dt.instancing===!0||C.isSkinnedMesh&&Dt.skinning===!1||!C.isSkinnedMesh&&Dt.skinning===!0||C.isInstancedMesh&&Dt.instancingColor===!0&&C.instanceColor===null||C.isInstancedMesh&&Dt.instancingColor===!1&&C.instanceColor!==null||C.isInstancedMesh&&Dt.instancingMorph===!0&&C.morphTexture===null||C.isInstancedMesh&&Dt.instancingMorph===!1&&C.morphTexture!==null||Dt.envMap!==dt||B.fog===!0&&Dt.fog!==Q||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==ct.numPlanes||Dt.numIntersection!==ct.numIntersection)||Dt.vertexAlphas!==Bt||Dt.vertexTangents!==Ut||Dt.morphTargets!==Tt||Dt.morphNormals!==Wt||Dt.morphColors!==Xt||Dt.toneMapping!==ee||Dt.morphTargetsCount!==Jt)&&(Kt=!0):(Kt=!0,Dt.__version=B.version);let le=Dt.currentProgram;Kt===!0&&(le=Yn(B,F,C));let Te=!1,se=!1,fn=!1,te=le.getUniforms(),Ne=Dt.uniforms;if(pt.useProgram(le.program)&&(Te=!0,se=!0,fn=!0),B.id!==w&&(w=B.id,se=!0),Te||y!==E){pt.buffers.depth.getReversed()?(Z.copy(E.projectionMatrix),Ru(Z),Pu(Z),te.setValue(T,"projectionMatrix",Z)):te.setValue(T,"projectionMatrix",E.projectionMatrix),te.setValue(T,"viewMatrix",E.matrixWorldInverse);let ye=te.map.cameraPosition;ye!==void 0&&ye.setValue(T,Nt.setFromMatrixPosition(E.matrixWorld)),mt.logarithmicDepthBuffer&&te.setValue(T,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&te.setValue(T,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,se=!0,fn=!0)}if(C.isSkinnedMesh){te.setOptional(T,C,"bindMatrix"),te.setOptional(T,C,"bindMatrixInverse");let De=C.skeleton;De&&(De.boneTexture===null&&De.computeBoneTexture(),te.setValue(T,"boneTexture",De.boneTexture,S))}C.isBatchedMesh&&(te.setOptional(T,C,"batchingTexture"),te.setValue(T,"batchingTexture",C._matricesTexture,S),te.setOptional(T,C,"batchingIdTexture"),te.setValue(T,"batchingIdTexture",C._indirectTexture,S),te.setOptional(T,C,"batchingColorTexture"),C._colorsTexture!==null&&te.setValue(T,"batchingColorTexture",C._colorsTexture,S));let pn=W.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&Ft.update(C,W,le),(se||Dt.receiveShadow!==C.receiveShadow)&&(Dt.receiveShadow=C.receiveShadow,te.setValue(T,"receiveShadow",C.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Ne.envMap.value=dt,Ne.flipEnvMap.value=dt.isCubeTexture&&dt.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&F.environment!==null&&(Ne.envMapIntensity.value=F.environmentIntensity),se&&(te.setValue(T,"toneMappingExposure",x.toneMappingExposure),Dt.needsLights&&yi(Ne,fn),Q&&B.fog===!0&&At.refreshFogUniforms(Ne,Q),At.refreshMaterialUniforms(Ne,B,z,q,p.state.transmissionRenderTarget[E.id]),Vi.upload(T,Xn(Dt),Ne,S)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Vi.upload(T,Xn(Dt),Ne,S),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&te.setValue(T,"center",C.center),te.setValue(T,"modelViewMatrix",C.modelViewMatrix),te.setValue(T,"normalMatrix",C.normalMatrix),te.setValue(T,"modelMatrix",C.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let De=B.uniformsGroups;for(let ye=0,$e=De.length;ye<$e;ye++){let tn=De[ye];U.update(tn,le),U.bind(tn,le)}}return le}function yi(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function Jn(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(E,F,W){yt.get(E.texture).__webglTexture=F,yt.get(E.depthTexture).__webglTexture=W;let B=yt.get(E);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=W===void 0,B.__autoAllocateDepthBuffer||ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,F){let W=yt.get(E);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,W=0){R=E,b=F,D=W;let B=!0,C=null,Q=!1,$=!1;if(E){let dt=yt.get(E);if(dt.__useDefaultFramebuffer!==void 0)pt.bindFramebuffer(T.FRAMEBUFFER,null),B=!1;else if(dt.__webglFramebuffer===void 0)S.setupRenderTarget(E);else if(dt.__hasExternalTextures)S.rebindTextures(E,yt.get(E.texture).__webglTexture,yt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Tt=E.depthTexture;if(dt.__boundDepthTexture!==Tt){if(Tt!==null&&yt.has(Tt)&&(E.width!==Tt.image.width||E.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(E)}}let Bt=E.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&($=!0);let Ut=yt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ut[F])?C=Ut[F][W]:C=Ut[F],Q=!0):E.samples>0&&S.useMultisampledRTT(E)===!1?C=yt.get(E).__webglMultisampledFramebuffer:Array.isArray(Ut)?C=Ut[W]:C=Ut,I.copy(E.viewport),H.copy(E.scissor),N=E.scissorTest}else I.copy(et).multiplyScalar(z).floor(),H.copy(vt).multiplyScalar(z).floor(),N=Rt;if(pt.bindFramebuffer(T.FRAMEBUFFER,C)&&B&&pt.drawBuffers(E,C),pt.viewport(I),pt.scissor(H),pt.setScissorTest(N),Q){let dt=yt.get(E.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+F,dt.__webglTexture,W)}else if($){let dt=yt.get(E.texture),Bt=F||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,dt.__webglTexture,W||0,Bt)}w=-1},this.readRenderTargetPixels=function(E,F,W,B,C,Q,$){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let at=yt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&$!==void 0&&(at=at[$]),at){pt.bindFramebuffer(T.FRAMEBUFFER,at);try{let dt=E.texture,Bt=dt.format,Ut=dt.type;if(!mt.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!mt.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-B&&W>=0&&W<=E.height-C&&T.readPixels(F,W,B,C,Qt.convert(Bt),Qt.convert(Ut),Q)}finally{let dt=R!==null?yt.get(R).__webglFramebuffer:null;pt.bindFramebuffer(T.FRAMEBUFFER,dt)}}},this.readRenderTargetPixelsAsync=async function(E,F,W,B,C,Q,$){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let at=yt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&$!==void 0&&(at=at[$]),at){let dt=E.texture,Bt=dt.format,Ut=dt.type;if(!mt.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!mt.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=E.width-B&&W>=0&&W<=E.height-C){pt.bindFramebuffer(T.FRAMEBUFFER,at);let Tt=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Tt),T.bufferData(T.PIXEL_PACK_BUFFER,Q.byteLength,T.STREAM_READ),T.readPixels(F,W,B,C,Qt.convert(Bt),Qt.convert(Ut),0);let Wt=R!==null?yt.get(R).__webglFramebuffer:null;pt.bindFramebuffer(T.FRAMEBUFFER,Wt);let Xt=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await Iu(T,Xt,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Tt),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,Q),T.deleteBuffer(Tt),T.deleteSync(Xt),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,F=null,W=0){E.isTexture!==!0&&(ms("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,E=arguments[1]);let B=Math.pow(2,-W),C=Math.floor(E.image.width*B),Q=Math.floor(E.image.height*B),$=F!==null?F.x:0,at=F!==null?F.y:0;S.setTexture2D(E,0),T.copyTexSubImage2D(T.TEXTURE_2D,W,0,0,$,at,C,Q),pt.unbindTexture()},this.copyTextureToTexture=function(E,F,W=null,B=null,C=0){E.isTexture!==!0&&(ms("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,E=arguments[1],F=arguments[2],C=arguments[3]||0,W=null);let Q,$,at,dt,Bt,Ut,Tt,Wt,Xt,ee=E.isCompressedTexture?E.mipmaps[C]:E.image;W!==null?(Q=W.max.x-W.min.x,$=W.max.y-W.min.y,at=W.isBox3?W.max.z-W.min.z:1,dt=W.min.x,Bt=W.min.y,Ut=W.isBox3?W.min.z:0):(Q=ee.width,$=ee.height,at=ee.depth||1,dt=0,Bt=0,Ut=0),B!==null?(Tt=B.x,Wt=B.y,Xt=B.z):(Tt=0,Wt=0,Xt=0);let Me=Qt.convert(F.format),Jt=Qt.convert(F.type),Dt;F.isData3DTexture?(S.setTexture3D(F,0),Dt=T.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(S.setTexture2DArray(F,0),Dt=T.TEXTURE_2D_ARRAY):(S.setTexture2D(F,0),Dt=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,F.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,F.unpackAlignment);let Be=T.getParameter(T.UNPACK_ROW_LENGTH),Kt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),le=T.getParameter(T.UNPACK_SKIP_PIXELS),Te=T.getParameter(T.UNPACK_SKIP_ROWS),se=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,ee.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ee.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,dt),T.pixelStorei(T.UNPACK_SKIP_ROWS,Bt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Ut);let fn=E.isDataArrayTexture||E.isData3DTexture,te=F.isDataArrayTexture||F.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){let Ne=yt.get(E),pn=yt.get(F),De=yt.get(Ne.__renderTarget),ye=yt.get(pn.__renderTarget);pt.bindFramebuffer(T.READ_FRAMEBUFFER,De.__webglFramebuffer),pt.bindFramebuffer(T.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let $e=0;$e<at;$e++)fn&&T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,yt.get(E).__webglTexture,C,Ut+$e),E.isDepthTexture?(te&&T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,yt.get(F).__webglTexture,C,Xt+$e),T.blitFramebuffer(dt,Bt,Q,$,Tt,Wt,Q,$,T.DEPTH_BUFFER_BIT,T.NEAREST)):te?T.copyTexSubImage3D(Dt,C,Tt,Wt,Xt+$e,dt,Bt,Q,$):T.copyTexSubImage2D(Dt,C,Tt,Wt,Xt+$e,dt,Bt,Q,$);pt.bindFramebuffer(T.READ_FRAMEBUFFER,null),pt.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else te?E.isDataTexture||E.isData3DTexture?T.texSubImage3D(Dt,C,Tt,Wt,Xt,Q,$,at,Me,Jt,ee.data):F.isCompressedArrayTexture?T.compressedTexSubImage3D(Dt,C,Tt,Wt,Xt,Q,$,at,Me,ee.data):T.texSubImage3D(Dt,C,Tt,Wt,Xt,Q,$,at,Me,Jt,ee):E.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,C,Tt,Wt,Q,$,Me,Jt,ee.data):E.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,C,Tt,Wt,ee.width,ee.height,Me,ee.data):T.texSubImage2D(T.TEXTURE_2D,C,Tt,Wt,Q,$,Me,Jt,ee);T.pixelStorei(T.UNPACK_ROW_LENGTH,Be),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Kt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,le),T.pixelStorei(T.UNPACK_SKIP_ROWS,Te),T.pixelStorei(T.UNPACK_SKIP_IMAGES,se),C===0&&F.generateMipmaps&&T.generateMipmap(Dt),pt.unbindTexture()},this.copyTextureToTexture3D=function(E,F,W=null,B=null,C=0){return E.isTexture!==!0&&(ms("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,B=arguments[1]||null,E=arguments[2],F=arguments[3],C=arguments[4]||0),ms('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,F,W,B,C)},this.initRenderTarget=function(E){yt.get(E).__webglFramebuffer===void 0&&S.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?S.setTextureCube(E,0):E.isData3DTexture?S.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?S.setTexture2DArray(E,0):S.setTexture2D(E,0),pt.unbindTexture()},this.resetState=function(){b=0,D=0,R=null,pt.reset(),$t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}};var Sn=class extends Qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ye,this.environmentIntensity=1,this.environmentRotation=new Ye,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var ji=class extends We{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},ze=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let u=n[s],d=n[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new ut:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new L,s=[],r=[],o=[],a=new L,c=new oe;for(let f=0;f<=t;f++){let m=f/t;s[f]=this.getTangentAt(m,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(fe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(fe(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Bs=class extends ze{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ut){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ka=class extends Bs{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function xc(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let d=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var cr=new L,Uo=new xc,Fo=new xc,No=new xc,za=class extends ze{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(cr.subVectors(s[0],s[1]).add(s[0]),l=cr);let h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(cr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=cr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(d),f),A=Math.pow(d.distanceToSquared(u),f);g<1e-4&&(g=1),m<1e-4&&(m=g),A<1e-4&&(A=g),Uo.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,m,g,A),Fo.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,m,g,A),No.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,m,g,A)}else this.curveType==="catmullrom"&&(Uo.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),Fo.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),No.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(Uo.calc(c),Fo.calc(c),No.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Sl(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Bm(i,t){let e=1-i;return e*e*t}function Tm(i,t){return 2*(1-i)*i*t}function Dm(i,t){return i*i*t}function Ms(i,t,e,n){return Bm(i,t)+Tm(i,e)+Dm(i,n)}function Im(i,t){let e=1-i;return e*e*e*t}function Rm(i,t){let e=1-i;return 3*e*e*i*t}function Pm(i,t){return 3*(1-i)*i*i*t}function Lm(i,t){return i*i*i*t}function ys(i,t,e,n,s){return Im(i,t)+Rm(i,e)+Pm(i,n)+Lm(i,s)}var Br=class extends ze{constructor(t=new ut,e=new ut,n=new ut,s=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ut){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ys(t,s.x,r.x,o.x,a.x),ys(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ga=class extends ze{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ys(t,s.x,r.x,o.x,a.x),ys(t,s.y,r.y,o.y,a.y),ys(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Tr=class extends ze{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Va=class extends ze{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Dr=class extends ze{constructor(t=new ut,e=new ut,n=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ut){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ms(t,s.x,r.x,o.x),Ms(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ir=class extends ze{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ms(t,s.x,r.x,o.x),Ms(t,s.y,r.y,o.y),Ms(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Rr=class extends ze{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(Sl(a,c.x,l.x,u.x,h.x),Sl(a,c.y,l.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ut().fromArray(s))}return this}},Pr=Object.freeze({__proto__:null,ArcCurve:ka,CatmullRomCurve3:za,CubicBezierCurve:Br,CubicBezierCurve3:Ga,EllipseCurve:Bs,LineCurve:Tr,LineCurve3:Va,QuadraticBezierCurve:Dr,QuadraticBezierCurve3:Ir,SplineCurve:Rr}),Ha=class extends ze{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Pr[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Pr[s.type]().fromJSON(s))}return this}},Lr=class extends Ha{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Tr(this.currentPoint.clone(),new ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Dr(this.currentPoint.clone(),new ut(t,e),new ut(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Br(this.currentPoint.clone(),new ut(t,e),new ut(n,s),new ut(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Rr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new Bs(t,e,n,s,r,o,a,c);if(this.curves.length>0){let h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ur=class i extends ve{constructor(t=[new ut(0,-.5),new ut(.5,0),new ut(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=fe(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],u=1/e,h=new L,d=new ut,f=new L,m=new L,g=new L,A=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:A=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,f.x=p*1,f.y=-A,f.z=p*0,g.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(g.x,g.y,g.z);break;default:A=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,f.x=p*1,f.y=-A,f.z=p*0,m.copy(f),f.x+=g.x,f.y+=g.y,f.z+=g.z,f.normalize(),c.push(f.x,f.y,f.z),g.copy(m)}for(let M=0;M<=e;M++){let _=n+M*u*s,x=Math.sin(_),P=Math.cos(_);for(let b=0;b<=t.length-1;b++){h.x=t[b].x*x,h.y=t[b].y,h.z=t[b].x*P,o.push(h.x,h.y,h.z),d.x=M/e,d.y=b/(t.length-1),a.push(d.x,d.y);let D=c[3*b+0]*x,R=c[3*b+1],w=c[3*b+0]*P;l.push(D,R,w)}}for(let M=0;M<e;M++)for(let _=0;_<t.length-1;_++){let x=_+M*t.length,P=x,b=x+t.length,D=x+t.length+1,R=x+1;r.push(P,b,R),r.push(D,R,b)}this.setIndex(r),this.setAttribute("position",new Zt(o,3)),this.setAttribute("uv",new Zt(a,2)),this.setAttribute("normal",new Zt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Fr=class i extends ve{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new L,u=new ut;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){let f=n+h/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[d]/t+1)/2,u.y=(o[d+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Zt(o,3)),this.setAttribute("normal",new Zt(a,3)),this.setAttribute("uv",new Zt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}};var $i=class extends Lr{constructor(t){super(t),this.uuid=fi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Lr().fromJSON(s))}return this}},Um={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=jl(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,h,d,f;if(n&&(r=km(i,t,r,e)),i.length>80*e){a=l=i[0],c=u=i[1];for(let m=e;m<s;m+=e)h=i[m],d=i[m+1],h<a&&(a=h),d<c&&(c=d),h>l&&(l=h),d>u&&(u=d);f=Math.max(l-a,u-c),f=f!==0?32767/f:0}return Ts(r,o,e,a,c,f,0),o}};function jl(i,t,e,n,s){let r,o;if(s===Zm(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Cl(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Cl(r,i[r],i[r+1],o);return o&&jr(o,o.next)&&(Is(o),o=o.next),o}function li(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(jr(e,e.next)||ce(e.prev,e,e.next)===0)){if(Is(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ts(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Wm(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?Nm(i,n,s,r):Fm(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Is(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Om(li(i),t,e),Ts(i,t,e,n,s,r,2)):o===2&&Qm(i,t,e,n,s,r):Ts(li(i),t,e,n,s,r,1);break}}}function Fm(i){let t=i.prev,e=i,n=i.next;if(ce(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=s<r?s<o?s:o:r<o?r:o,h=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l,m=n.next;for(;m!==t;){if(m.x>=u&&m.x<=d&&m.y>=h&&m.y<=f&&Qi(s,a,r,c,o,l,m.x,m.y)&&ce(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Nm(i,t,e,n){let s=i.prev,r=i,o=i.next;if(ce(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,u=s.y,h=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,m=u<h?u<d?u:d:h<d?h:d,g=a>c?a>l?a:l:c>l?c:l,A=u>h?u>d?u:d:h>d?h:d,p=Wa(f,m,t,e,n),M=Wa(g,A,t,e,n),_=i.prevZ,x=i.nextZ;for(;_&&_.z>=p&&x&&x.z<=M;){if(_.x>=f&&_.x<=g&&_.y>=m&&_.y<=A&&_!==s&&_!==o&&Qi(a,u,c,h,l,d,_.x,_.y)&&ce(_.prev,_,_.next)>=0||(_=_.prevZ,x.x>=f&&x.x<=g&&x.y>=m&&x.y<=A&&x!==s&&x!==o&&Qi(a,u,c,h,l,d,x.x,x.y)&&ce(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;_&&_.z>=p;){if(_.x>=f&&_.x<=g&&_.y>=m&&_.y<=A&&_!==s&&_!==o&&Qi(a,u,c,h,l,d,_.x,_.y)&&ce(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;x&&x.z<=M;){if(x.x>=f&&x.x<=g&&x.y>=m&&x.y<=A&&x!==s&&x!==o&&Qi(a,u,c,h,l,d,x.x,x.y)&&ce(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Om(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!jr(s,r)&&$l(s,n,n.next,r)&&Ds(s,r)&&Ds(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Is(n),Is(n.next),n=i=r),n=n.next}while(n!==i);return li(n)}function Qm(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Jm(o,a)){let c=th(o,a);o=li(o,o.next),c=li(c,c.next),Ts(o,t,e,n,s,r,0),Ts(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function km(i,t,e,n){let s=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=jl(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(Xm(l));for(s.sort(zm),r=0;r<s.length;r++)e=Gm(s[r],e);return e}function zm(i,t){return i.x-t.x}function Gm(i,t){let e=Vm(i,t);if(!e)return t;let n=th(e,i);return li(n,n.next),li(e,e.next)}function Vm(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,c=s.x,l=s.y,u=1/0,h;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Qi(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),Ds(e,i)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&Hm(s,e)))&&(s=e,u=h)),e=e.next;while(e!==a);return s}function Hm(i,t){return ce(i.prev,i,t.prev)<0&&ce(t.next,i,i.next)<0}function Wm(i,t,e,n){let s=i;do s.z===0&&(s.z=Wa(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ym(s)}function Ym(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function Wa(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Xm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Qi(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Jm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Km(i,t)&&(Ds(i,t)&&Ds(t,i)&&qm(i,t)&&(ce(i.prev,i,t.prev)||ce(i,t.prev,t))||jr(i,t)&&ce(i.prev,i,i.next)>0&&ce(t.prev,t,t.next)>0)}function ce(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function jr(i,t){return i.x===t.x&&i.y===t.y}function $l(i,t,e,n){let s=hr(ce(i,t,e)),r=hr(ce(i,t,n)),o=hr(ce(e,n,i)),a=hr(ce(e,n,t));return!!(s!==r&&o!==a||s===0&&lr(i,e,t)||r===0&&lr(i,n,t)||o===0&&lr(e,i,n)||a===0&&lr(e,t,n))}function lr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function hr(i){return i>0?1:i<0?-1:0}function Km(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&$l(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ds(i,t){return ce(i.prev,i,i.next)<0?ce(i,t,i.next)>=0&&ce(i,i.prev,t)>=0:ce(i,t,i.prev)<0||ce(i,i.next,t)<0}function qm(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function th(i,t){let e=new Ya(i.i,i.x,i.y),n=new Ya(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Cl(i,t,e,n){let s=new Ya(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Is(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ya(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Zm(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var On=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];bl(t),Bl(n,t);let o=t.length;e.forEach(bl);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Bl(n,e[c]);let a=Um.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function bl(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Bl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Nr=class i extends ve{constructor(t=new $i([new ut(.5,.5),new ut(-.5,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new Zt(s,3)),this.setAttribute("uv",new Zt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,A=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:jm,_,x=!1,P,b,D,R;p&&(_=p.getSpacedPoints(u),x=!0,d=!1,P=p.computeFrenetFrames(u,!1),b=new L,D=new L,R=new L),d||(A=0,f=0,m=0,g=0);let w=a.extractPoints(l),y=w.shape,I=w.holes;if(!On.isClockWise(y)){y=y.reverse();for(let nt=0,ht=I.length;nt<ht;nt++){let T=I[nt];On.isClockWise(T)&&(I[nt]=T.reverse())}}let N=On.triangulateShape(y,I),G=y;for(let nt=0,ht=I.length;nt<ht;nt++){let T=I[nt];y=y.concat(T)}function J(nt,ht,T){return ht||console.error("THREE.ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(ht,T)}let V=y.length,q=N.length;function z(nt,ht,T){let ft,ot,mt,pt=nt.x-ht.x,Pt=nt.y-ht.y,yt=T.x-nt.x,S=T.y-nt.y,v=pt*pt+Pt*Pt,O=pt*S-Pt*yt;if(Math.abs(O)>Number.EPSILON){let K=Math.sqrt(v),it=Math.sqrt(yt*yt+S*S),X=ht.x-Pt/K,bt=ht.y+pt/K,At=T.x-S/it,wt=T.y+yt/it,Vt=((At-X)*S-(wt-bt)*yt)/(pt*S-Pt*yt);ft=X+pt*Vt-nt.x,ot=bt+Pt*Vt-nt.y;let ct=ft*ft+ot*ot;if(ct<=2)return new ut(ft,ot);mt=Math.sqrt(ct/2)}else{let K=!1;pt>Number.EPSILON?yt>Number.EPSILON&&(K=!0):pt<-Number.EPSILON?yt<-Number.EPSILON&&(K=!0):Math.sign(Pt)===Math.sign(S)&&(K=!0),K?(ft=-Pt,ot=pt,mt=Math.sqrt(v)):(ft=pt,ot=Pt,mt=Math.sqrt(v/2))}return new ut(ft/mt,ot/mt)}let st=[];for(let nt=0,ht=G.length,T=ht-1,ft=nt+1;nt<ht;nt++,T++,ft++)T===ht&&(T=0),ft===ht&&(ft=0),st[nt]=z(G[nt],G[T],G[ft]);let lt=[],et,vt=st.concat();for(let nt=0,ht=I.length;nt<ht;nt++){let T=I[nt];et=[];for(let ft=0,ot=T.length,mt=ot-1,pt=ft+1;ft<ot;ft++,mt++,pt++)mt===ot&&(mt=0),pt===ot&&(pt=0),et[ft]=z(T[ft],T[mt],T[pt]);lt.push(et),vt=vt.concat(et)}for(let nt=0;nt<A;nt++){let ht=nt/A,T=f*Math.cos(ht*Math.PI/2),ft=m*Math.sin(ht*Math.PI/2)+g;for(let ot=0,mt=G.length;ot<mt;ot++){let pt=J(G[ot],st[ot],ft);Z(pt.x,pt.y,-T)}for(let ot=0,mt=I.length;ot<mt;ot++){let pt=I[ot];et=lt[ot];for(let Pt=0,yt=pt.length;Pt<yt;Pt++){let S=J(pt[Pt],et[Pt],ft);Z(S.x,S.y,-T)}}}let Rt=m+g;for(let nt=0;nt<V;nt++){let ht=d?J(y[nt],vt[nt],Rt):y[nt];x?(D.copy(P.normals[0]).multiplyScalar(ht.x),b.copy(P.binormals[0]).multiplyScalar(ht.y),R.copy(_[0]).add(D).add(b),Z(R.x,R.y,R.z)):Z(ht.x,ht.y,0)}for(let nt=1;nt<=u;nt++)for(let ht=0;ht<V;ht++){let T=d?J(y[ht],vt[ht],Rt):y[ht];x?(D.copy(P.normals[nt]).multiplyScalar(T.x),b.copy(P.binormals[nt]).multiplyScalar(T.y),R.copy(_[nt]).add(D).add(b),Z(R.x,R.y,R.z)):Z(T.x,T.y,h/u*nt)}for(let nt=A-1;nt>=0;nt--){let ht=nt/A,T=f*Math.cos(ht*Math.PI/2),ft=m*Math.sin(ht*Math.PI/2)+g;for(let ot=0,mt=G.length;ot<mt;ot++){let pt=J(G[ot],st[ot],ft);Z(pt.x,pt.y,h+T)}for(let ot=0,mt=I.length;ot<mt;ot++){let pt=I[ot];et=lt[ot];for(let Pt=0,yt=pt.length;Pt<yt;Pt++){let S=J(pt[Pt],et[Pt],ft);x?Z(S.x,S.y+_[u-1].y,_[u-1].x+T):Z(S.x,S.y,h+T)}}}k(),rt();function k(){let nt=s.length/3;if(d){let ht=0,T=V*ht;for(let ft=0;ft<q;ft++){let ot=N[ft];Et(ot[2]+T,ot[1]+T,ot[0]+T)}ht=u+A*2,T=V*ht;for(let ft=0;ft<q;ft++){let ot=N[ft];Et(ot[0]+T,ot[1]+T,ot[2]+T)}}else{for(let ht=0;ht<q;ht++){let T=N[ht];Et(T[2],T[1],T[0])}for(let ht=0;ht<q;ht++){let T=N[ht];Et(T[0]+V*u,T[1]+V*u,T[2]+V*u)}}n.addGroup(nt,s.length/3-nt,0)}function rt(){let nt=s.length/3,ht=0;j(G,ht),ht+=G.length;for(let T=0,ft=I.length;T<ft;T++){let ot=I[T];j(ot,ht),ht+=ot.length}n.addGroup(nt,s.length/3-nt,1)}function j(nt,ht){let T=nt.length;for(;--T>=0;){let ft=T,ot=T-1;ot<0&&(ot=nt.length-1);for(let mt=0,pt=u+A*2;mt<pt;mt++){let Pt=V*mt,yt=V*(mt+1),S=ht+ft+Pt,v=ht+ot+Pt,O=ht+ot+yt,K=ht+ft+yt;Nt(S,v,O,K)}}}function Z(nt,ht,T){c.push(nt),c.push(ht),c.push(T)}function Et(nt,ht,T){Lt(nt),Lt(ht),Lt(T);let ft=s.length/3,ot=M.generateTopUV(n,s,ft-3,ft-2,ft-1);Yt(ot[0]),Yt(ot[1]),Yt(ot[2])}function Nt(nt,ht,T,ft){Lt(nt),Lt(ht),Lt(ft),Lt(ht),Lt(T),Lt(ft);let ot=s.length/3,mt=M.generateSideWallUV(n,s,ot-6,ot-3,ot-2,ot-1);Yt(mt[0]),Yt(mt[1]),Yt(mt[3]),Yt(mt[1]),Yt(mt[2]),Yt(mt[3])}function Lt(nt){s.push(c[nt*3+0]),s.push(c[nt*3+1]),s.push(c[nt*3+2])}function Yt(nt){r.push(nt.x),r.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return $m(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Pr[s.type]().fromJSON(s)),new i(n,t.options)}},jm={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],u=t[s*3+1];return[new ut(r,o),new ut(a,c),new ut(l,u)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],h=t[n*3+2],d=t[s*3],f=t[s*3+1],m=t[s*3+2],g=t[r*3],A=t[r*3+1],p=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new ut(o,1-c),new ut(l,1-h),new ut(d,1-m),new ut(g,1-p)]:[new ut(a,1-c),new ut(u,1-h),new ut(f,1-m),new ut(A,1-p)]}};function $m(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Or=class i extends ve{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],u=[],h=t,d=(e-t)/s,f=new L,m=new ut;for(let g=0;g<=s;g++){for(let A=0;A<=n;A++){let p=r+A/n*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,u.push(m.x,m.y)}h+=d}for(let g=0;g<s;g++){let A=g*(n+1);for(let p=0;p<n;p++){let M=p+A,_=M,x=M+n+1,P=M+n+2,b=M+1;a.push(_,x,b),a.push(x,P,b)}}this.setIndex(a),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(l,3)),this.setAttribute("uv",new Zt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Qr=class i extends ve{constructor(t=new $i([new ut(0,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Zt(s,3)),this.setAttribute("normal",new Zt(r,3)),this.setAttribute("uv",new Zt(o,2));function l(u){let h=s.length/3,d=u.extractPoints(e),f=d.shape,m=d.holes;On.isClockWise(f)===!1&&(f=f.reverse());for(let A=0,p=m.length;A<p;A++){let M=m[A];On.isClockWise(M)===!0&&(m[A]=M.reverse())}let g=On.triangulateShape(f,m);for(let A=0,p=m.length;A<p;A++){let M=m[A];f=f.concat(M)}for(let A=0,p=f.length;A<p;A++){let M=f[A];s.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let A=0,p=g.length;A<p;A++){let M=g[A],_=M[0]+h,x=M[1]+h,P=M[2]+h;n.push(_,x,P),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return tg(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function tg(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var kr=class i extends ve{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,u=[],h=new L,d=new L,f=[],m=[],g=[],A=[];for(let p=0;p<=n;p++){let M=[],_=p/n,x=0;p===0&&o===0?x=.5/e:p===n&&c===Math.PI&&(x=-.5/e);for(let P=0;P<=e;P++){let b=P/e;h.x=-t*Math.cos(s+b*r)*Math.sin(o+_*a),h.y=t*Math.cos(o+_*a),h.z=t*Math.sin(s+b*r)*Math.sin(o+_*a),m.push(h.x,h.y,h.z),d.copy(h).normalize(),g.push(d.x,d.y,d.z),A.push(b+x,1-_),M.push(l++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){let _=u[p][M+1],x=u[p][M],P=u[p+1][M],b=u[p+1][M+1];(p!==0||o>0)&&f.push(_,x,b),(p!==n-1||c<Math.PI)&&f.push(x,P,b)}this.setIndex(f),this.setAttribute("position",new Zt(m,3)),this.setAttribute("normal",new Zt(g,3)),this.setAttribute("uv",new Zt(A,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var zr=class i extends ve{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],u=new L,h=new L,d=new L;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){let g=m/s*r,A=f/n*Math.PI*2;h.x=(t+e*Math.cos(A))*Math.cos(g),h.y=(t+e*Math.cos(A))*Math.sin(g),h.z=e*Math.sin(A),a.push(h.x,h.y,h.z),u.x=t*Math.cos(g),u.y=t*Math.sin(g),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(m/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){let g=(s+1)*f+m-1,A=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,M=(s+1)*f+m;o.push(g,A,M),o.push(A,p,M)}this.setIndex(o),this.setAttribute("position",new Zt(a,3)),this.setAttribute("normal",new Zt(c,3)),this.setAttribute("uv",new Zt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Gr=class i extends ve{constructor(t=new Ir(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new L,c=new L,l=new ut,u=new L,h=[],d=[],f=[],m=[];g(),this.setIndex(m),this.setAttribute("position",new Zt(h,3)),this.setAttribute("normal",new Zt(d,3)),this.setAttribute("uv",new Zt(f,2));function g(){for(let _=0;_<e;_++)A(_);A(r===!1?e:0),M(),p()}function A(_){u=t.getPointAt(_/e,u);let x=o.normals[_],P=o.binormals[_];for(let b=0;b<=s;b++){let D=b/s*Math.PI*2,R=Math.sin(D),w=-Math.cos(D);c.x=w*x.x+R*P.x,c.y=w*x.y+R*P.y,c.z=w*x.z+R*P.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=u.x+n*c.x,a.y=u.y+n*c.y,a.z=u.z+n*c.z,h.push(a.x,a.y,a.z)}}function p(){for(let _=1;_<=e;_++)for(let x=1;x<=s;x++){let P=(s+1)*(_-1)+(x-1),b=(s+1)*_+(x-1),D=(s+1)*_+x,R=(s+1)*(_-1)+x;m.push(P,b,R),m.push(b,D,R)}}function M(){for(let _=0;_<=e;_++)for(let x=0;x<=s;x++)l.x=_/e,l.y=x/s,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Pr[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Rs=class extends zn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ac,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ye,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Vr=class extends Rs{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ut(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return fe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Gt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Gt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Gt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Hr=class extends zn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ac,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ye,this.combine=cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function ur(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function eg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ts=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Xa=class extends ts{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bc,endingEnd:Bc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Tc:r=t,a=2*e-n;break;case Dc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Tc:o=t,c=2*n-e;break;case Dc:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),g=m*m,A=g*m,p=-d*A+2*d*g-d*m,M=(1+d)*A+(-1.5-2*d)*g+(-.5+d)*m+1,_=(-1-f)*A+(1.5+f)*g+.5*m,x=f*A-f*g;for(let P=0;P!==a;++P)r[P]=p*o[u+P]+M*o[l+P]+_*o[c+P]+x*o[h+P];return r}},Ja=class extends ts{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=(n-e)/(s-e),h=1-u;for(let d=0;d!==a;++d)r[d]=o[l+d]*h+o[c+d]*u;return r}},Ka=class extends ts{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ln=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ur(e,this.TimeBufferType),this.values=ur(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ur(t.times,Array),values:ur(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ka(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ja(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Xa(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case gr:e=this.InterpolantFactoryMethodDiscrete;break;case wa:e=this.InterpolantFactoryMethodLinear;break;case ao:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gr;case this.InterpolantFactoryMethodLinear:return wa;case this.InterpolantFactoryMethodSmooth:return ao}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&eg(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ao,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],u=t[a+1];if(l!==u&&(a!==1||l!==t[0]))if(s)c=!0;else{let h=a*n,d=h-n,f=h+n;for(let m=0;m!==n;++m){let g=e[h+m];if(g!==e[d+m]||g!==e[f+m]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let h=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[h+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};ln.prototype.TimeBufferType=Float32Array;ln.prototype.ValueBufferType=Float32Array;ln.prototype.DefaultInterpolation=wa;var hi=class extends ln{constructor(t,e,n){super(t,e,n)}};hi.prototype.ValueTypeName="bool";hi.prototype.ValueBufferType=Array;hi.prototype.DefaultInterpolation=gr;hi.prototype.InterpolantFactoryMethodLinear=void 0;hi.prototype.InterpolantFactoryMethodSmooth=void 0;var qa=class extends ln{};qa.prototype.ValueTypeName="color";var Za=class extends ln{};Za.prototype.ValueTypeName="number";var ja=class extends ts{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let u=l+a;l!==u;l+=4)Le.slerpFlat(r,0,o,l-a,o,l,c);return r}},Wr=class extends ln{InterpolantFactoryMethodLinear(t){return new ja(this.times,this.values,this.getValueSize(),t)}};Wr.prototype.ValueTypeName="quaternion";Wr.prototype.InterpolantFactoryMethodSmooth=void 0;var ui=class extends ln{constructor(t,e,n){super(t,e,n)}};ui.prototype.ValueTypeName="string";ui.prototype.ValueBufferType=Array;ui.prototype.DefaultInterpolation=gr;ui.prototype.InterpolantFactoryMethodLinear=void 0;ui.prototype.InterpolantFactoryMethodSmooth=void 0;var $a=class extends ln{};$a.prototype.ValueTypeName="vector";var tc=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){let f=l[h],m=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null}}},ng=new tc,ec=class{constructor(t){this.manager=t!==void 0?t:ng,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};ec.DEFAULT_MATERIAL_NAME="__DEFAULT";var Yr=class extends Qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}};var Oo=new oe,Tl=new L,Dl=new L,nc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bs,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Tl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Tl),Dl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Dl),e.updateMatrixWorld(),Oo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Oo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var ic=class extends nc{constructor(){super(new Vn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Xr=class extends Yr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.target=new Qe,this.shadow=new ic}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Jr=class extends Yr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var vc="\\[\\]\\.:\\/",ig=new RegExp("["+vc+"]","g"),_c="[^"+vc+"]",sg="[^"+vc.replace("\\.","")+"]",rg=/((?:WC+[\/:])*)/.source.replace("WC",_c),og=/(WCOD+)?/.source.replace("WCOD",sg),ag=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_c),cg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_c),lg=new RegExp("^"+rg+og+ag+cg+"$"),hg=["material","materials","bones","map"],sc=class{constructor(t,e,n){let s=n||ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ae=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ig,"")}static parseTrackName(t){let e=lg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);hg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ae.Composite=sc;ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ae.prototype.GetterByBindingType=[ae.prototype._getValue_direct,ae.prototype._getValue_array,ae.prototype._getValue_arrayElement,ae.prototype._getValue_toArray];ae.prototype.SetterByBindingTypeAndVersioning=[[ae.prototype._setValue_direct,ae.prototype._setValue_direct_setNeedsUpdate,ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_array,ae.prototype._setValue_array_setNeedsUpdate,ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_arrayElement,ae.prototype._setValue_arrayElement_setNeedsUpdate,ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_fromArray,ae.prototype._setValue_fromArray_setNeedsUpdate,ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Rg=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rc);function to(i){let t=i>>>0||1;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function $r(i,t,e){let n=Math.imul(i|0,374761393)+Math.imul(t|0,668265263)+Math.imul(e|0,2147483647)|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}var eh=i=>i*i*(3-2*i);function Ai(i,t,e=0){let n=Math.floor(i),s=Math.floor(t),r=i-n,o=t-s,a=$r(n,s,e),c=$r(n+1,s,e),l=$r(n,s+1,e),u=$r(n+1,s+1,e),h=eh(r),d=eh(o);return(a+(c-a)*h+(l-a)*d+(a-c-l+u)*h*d)*2-1}function Ls(i,t,e=4,n=0){let s=0,r=1,o=.5,a=0;for(let c=0;c<e;c++)s+=o*Ai(i*r,t*r,n+c*17),a+=o,r*=2.03,o*=.5;return s/a}var Ce=(i,t,e)=>Math.max(t,Math.min(e,i)),is=(i,t,e)=>{let n=Ce((e-i)/(t-i),0,1);return n*n*(3-2*n)};var mi={l:i=>i,io:i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,o:i=>1-Math.pow(1-i,3),i:i=>i*i*i,o5:i=>1-Math.pow(1-i,5),back:i=>1+(1.5+1)*Math.pow(i-1,3)+1.5*Math.pow(i-1,2)},ss=["M52 0h22v30h-22z","M52 200h22v30h-22z","M0 141V38A10 10 0 0 1 10 28H116A10 10 0 0 1 126 38V62L68 121L46 101Z","M0 169L45 129L68 150L126 90V192A10 10 0 0 1 116 202H10A10 10 0 0 1 0 192Z"];function Xe(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,e}var ge={W:2,H:3.06,CB:.075,CT:.083,A:.25,SEAL:.0055,LOGO_V:.514,LOGO_H:.262};function nh(i){let{W:t,H:e,CB:n,CT:s,A:r,SEAL:o}=ge,a=to(i),c=[],l=(A,p,M,_,x,P)=>c.push({x0:(A-.5)*t,y0:(p-.5)*e,dx:Math.cos(M),dy:Math.sin(M),len:_,amp:x,wid:P});for(let A=0;A<15;A++){let p=.06+a()*.88;l(p,1-s,-Math.PI/2+(p-.5)*1.4+(a()-.5)*.5,.25+a()*.55,(a()<.5?-1:1)*(.008+a()*.016),.03+a()*.05)}for(let A=0;A<13;A++){let p=.06+a()*.88;l(p,n,Math.PI/2-(p-.5)*1.3+(a()-.5)*.5,.22+a()*.5,(a()<.5?-1:1)*(.008+a()*.015),.03+a()*.05)}[[.04,1-s,-.9],[.96,1-s,-2.24],[.04,n,.85],[.96,n,2.3]].forEach(([A,p,M])=>{l(A,p,M+(a()-.5)*.2,.7+a()*.5,-.02,.07),l(A+(A<.5?.05:-.05),p,M+(A<.5?.25:-.25),.45,.014,.05)});for(let A=0;A<8;A++){let p=A%2===0;l(p?.015:.985,n+.08+a()*(1-n-s-.16),(p?0:Math.PI)+(a()-.5)*1.2,.18+a()*.25,(a()<.5?-1:1)*.012,.035)}let u=a()*10,h=A=>(A-n)/(1-s-n),d=A=>Math.pow(Math.max(0,1-Math.pow(Math.abs(2*A-1),2.3)),.52),f=A=>Math.pow(Math.max(0,1-Math.pow(Math.abs(2*A-1),5.5)),.4);function m(A,p,M){if(p<=n||p>=1-s)return 0;let _=h(p),x=d(A),P=f(_),b=r*x*P,D=(A-.5)*t,R=(p-.5)*e,w=Math.exp(-(1-s-p)/.03),y=Math.exp(-(p-n)/.027),I=Math.sin(2*Math.PI*(A*8.5+.22*Math.sin(A*6.3+u)))*.7+Math.sin(2*Math.PI*(A*3.2+u))*.3;if(b+=.03*(w+y)*I*Math.min(1,x*1.4),!M)for(let N=0;N<c.length;N++){let G=c[N],J=D-G.x0,V=R-G.y0,q=J*G.dx+V*G.dy,z=Ce(q,0,G.len),st=J-G.dx*z,lt=V-G.dy*z,et=st*st+lt*lt,vt=G.wid*G.wid;if(et>vt*9)continue;let Rt=Math.pow(1-z/G.len,1.4);b+=G.amp*Rt*Math.exp(-et/vt)*Math.min(1,x*2)*Math.min(1,P*3)}let H=Math.exp(-Math.min(A,1-A)/.05);return b+=.01*H*Math.sin(p*Math.PI*9+u+(M?1.3:0))*P,b*=1+.1*Ls(A*2+(M?7:0),p*2.4,2,i),b+=.018*Math.sin(A*5.2+p*3.1+u)*Math.sin(p*4.4-A*1.7)*x*P,b}function g(A,p,M){let _=Ce(h(p),0,1),x=p>n&&p<1-s,b=1-.05*(x?Math.exp(-(p-n)/.07)+Math.exp(-(1-s-p)/.07):0)*Math.pow(Math.abs(2*A-1),3)-(x?.006:0),D=(A-.5)*t*b,R=(p-.5)*e,w=Math.min(1,Math.min(A,1-A)/.006),y=M*(o*w+m(A,p,M<0));return[D,R,y]}return{P:g,pu:d,ps:f,bodyS:h}}function gi(i){let{CT:t}=ge,e=n=>Math.abs((n%1+1)%1-.5)*2;return 1-t-.018+.006*(e(i*31)-.5)+.003*Ai(i*40,3.7)}function rs(i,t,e,n,s,r,o,a){let c=new Float32Array((n+1)*(s+1)*3),l=new Float32Array(c.length),u=new Float32Array((n+1)*(s+1)*2),h=new Float32Array((n+1)*(s+1)),d=1e-4,f=0;for(let A=0;A<=s;A++)for(let p=0;p<=n;p++){let M=p/n,_=r(M),x=o(M),P=_+(x-_)*(A/s),b=t.P(M,P,e),D=t.P(Math.min(1,M+d),P,e),R=t.P(Math.max(0,M-d),P,e),w=t.P(M,Math.min(1,P+d),e),y=t.P(M,Math.max(0,P-d),e),I=D[0]-R[0],H=D[1]-R[1],N=D[2]-R[2],G=w[0]-y[0],J=w[1]-y[1],V=w[2]-y[2],q=H*V-N*J,z=N*G-I*V,st=I*J-H*G,lt=Math.hypot(q,z,st)||1;q/=lt,z/=lt,st/=lt,e<0&&(q=-q,z=-z,st=-st),c.set(b,f*3),l.set([q,z,st],f*3),u[f*2]=e>0?M:1-M,u[f*2+1]=P,h[f]=a?e*a(M,P):0,f++}let m=[];for(let A=0;A<s;A++)for(let p=0;p<n;p++){let M=A*(n+1)+p,_=M+1,x=M+n+1,P=x+1;e>0?m.push(M,_,P,M,P,x):m.push(M,P,_,M,x,P)}let g=new i.BufferGeometry;return g.setAttribute("position",new i.BufferAttribute(c,3)),g.setAttribute("normal",new i.BufferAttribute(l,3)),g.setAttribute("uv",new i.BufferAttribute(u,2)),g.setAttribute("aMouth",new i.BufferAttribute(h,1)),g.setIndex(m),g}function ug(i,t,e){let{CB:n,CT:s}=ge,r=new Float32Array(i*t);for(let o=0;o<t;o++){let a=1-(o+.5)/t;for(let c=0;c<i;c++){let l=(c+.5)/i,u;if(a<n||a>1-s){let h=Math.pow(.5+.5*Math.cos(l*Math.PI*2*24),1.6),d=a<n?n-a:a-(1-s),f=a<n?a:1-a;u=.3*h*(.85+.15*Ai(l*6,a*9,e))-.2*Math.exp(-d/.006)-.12*Math.exp(-f/.005)}else{let h=1+1.8*(Math.exp(-(a-n)/.12)+Math.exp(-(1-s-a)/.12)),d=1-Math.abs(Ai(l*14,a*22/h,e+5)),f=1-Math.abs(Ai(l*37+3.1,a*55/h,e+9));u=.012*d*d+.006*f*f+.018*Ai(l*4.5,a*6.5/h,e+13)}r[o*i+c]=u}}return r}function dg(i,t,e,n){let s=Xe(t,e),r=s.getContext("2d"),o=r.createImageData(t,e),a=o.data;for(let c=0;c<e;c++)for(let l=0;l<t;l++){let u=i[c*t+Math.max(0,l-1)],h=i[c*t+Math.min(t-1,l+1)],d=i[Math.max(0,c-1)*t+l],f=i[Math.min(e-1,c+1)*t+l],m=(u-h)*n,g=(f-d)*n,A=1,p=Math.hypot(m,g,A);m/=p,g/=p,A/=p;let M=(c*t+l)*4;a[M]=(m*.5+.5)*255,a[M+1]=(g*.5+.5)*255,a[M+2]=(A*.5+.5)*255,a[M+3]=255}return r.putImageData(o,0,0),s}function fg(i,t,e,n){let s=n/230;i.save(),i.translate(t-63*s,e-115*s),i.scale(s,s),ss.forEach(r=>i.fill(new Path2D(r))),i.restore()}var pg='Inter, "SF Pro Display", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif';function Ag(i,t,e,n){if(!t)return;let s=Math.round(n*.047),r=s*.2;i.font="800 "+s+"px "+pg,i.textBaseline="alphabetic";let o=[...String(t)],a=o.map(h=>i.measureText(h).width),c=a.reduce((h,d)=>h+d,0)+r*(o.length-1),l=e/2-c/2,u=n*.694;o.forEach((h,d)=>{i.fillText(h,l,u),l+=a[d]+r})}function mg(i,t,e,n){let{LOGO_V:s,LOGO_H:r,CB:o,CT:a}=ge,c=i/2,l=(1-s)*t,u=r*t,h=(g,A)=>{g.fillStyle=A,g.fillRect(0,0,i,a*t),g.fillRect(0,(1-o)*t,i,o*t)},d=(g,A)=>{g.fillStyle=A,fg(g,c,l,u),Ag(g,m.label,i,t)},f={color:g=>{g.fillStyle=e,g.fillRect(0,0,i,t),d(g,"#a6f357")},orm:g=>{g.fillStyle="rgb(0,56,255)",g.fillRect(0,0,i,t),h(g,"rgb(0,84,255)"),d(g,"rgb(0,215,0)")},emissive:g=>{g.fillStyle="#505050",g.fillRect(0,0,i,t),h(g,"#7a7a7a"),d(g,"#fff")},coat:g=>{g.fillStyle="rgb(200,0,0)",g.fillRect(0,0,i,t),h(g,"rgb(255,0,0)"),d(g,"rgb(18,0,0)")}},m={label:n||null};for(let g in f)m[g]=Xe(i,t);return m.draw=g=>{m.label=g||null;for(let A in f)f[A](m[A].getContext("2d"))},m.draw(n),m}function Cn(i,t={}){let e={uHoloAmt:{value:t.amt??.1},uHoloShift:{value:0},uMouth:{value:0},uHoloBase:{value:t.base??0}};return i.userData.holo=e,i.onBeforeCompile=n=>{Object.assign(n.uniforms,e),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float aMouth;
uniform float uMouth;
varying vec2 vHUv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
`+(t.mouth?`transformed.z += uMouth * aMouth;
`:"")+"vHUv = uv;"),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
uniform float uHoloAmt;
uniform float uHoloShift;
uniform float uHoloBase;
varying vec2 vHUv;`).replace("#include <opaque_fragment>",["{","  vec3 vdir = normalize(vViewPosition);","  float ndv = clamp(abs(dot(normal, vdir)), 0.0, 1.0);","  float ph = uHoloShift + normal.x * 1.7 - normal.y * 1.2 + vHUv.x * 2.6 + vHUv.y * 3.4;","  vec3 spec = 0.5 + 0.5 * cos(6.28318 * (ph + vec3(0.0, 0.33, 0.67)));","  float lum = dot(outgoingLight, vec3(0.299, 0.587, 0.114));","  float m = uHoloAmt * (0.3 + 0.7 * pow(1.0 - ndv, 1.6)) * (0.2 + smoothstep(0.04, 0.7, lum)) * max(metalnessFactor, uHoloBase);","  outgoingLight += spec * m;","}","#include <opaque_fragment>"].join(`
`))},i.customProgramCacheKey=()=>"holo"+(t.mouth?"m":""),e}function ih(i,t=.3){let e=nh(7),n=Math.round(110*t),s=Math.round(170*t),r=()=>0,o=()=>1;return[rs(i,e,1,n,s,r,o,null),rs(i,e,-1,n,s,r,o,null)]}function os(i,t={}){let{W:e,H:n}=ge,s=t.quality??1,r=nh(t.seed??7),o=Math.round(110*s),a=Math.round(170*s),c=Math.round(18*s),l=(et,vt)=>{let Rt=gi(et),k=Ce((vt-(Rt-.26))/.26,0,1);return .15*Math.pow(r.pu(et),.8)*k*k},u=rs(i,r,1,o,a,()=>0,gi,l),h=rs(i,r,-1,o,a,()=>0,gi,l),d=rs(i,r,1,o,c,gi,()=>1,null),f=rs(i,r,-1,o,c,gi,()=>1,null),m=Math.round(384*s),g=Math.round(576*s),A=new i.CanvasTexture(dg(ug(m,g,5),m,g,2.8));A.anisotropy=8;let p=mg(512,768,t.metal||"#b4f25e",t.label),M=(et,vt)=>{let Rt=new i.CanvasTexture(et);return vt&&(Rt.colorSpace=i.SRGBColorSpace),Rt.anisotropy=4,Rt},_=M(p.color,!0),x=M(p.orm),P=M(p.emissive,!0),b=M(p.coat),D=et=>{let vt=new i.MeshPhysicalMaterial({color:16777215,map:et?_:null,metalness:1,roughness:1,roughnessMap:x,metalnessMap:x,normalMap:A,normalScale:new i.Vector2(.85,.85),clearcoat:1,clearcoatRoughness:.07,clearcoatMap:b,iridescence:.32,iridescenceIOR:1.3,iridescenceThicknessRange:[320,520],iridescenceMap:b,emissive:new i.Color("#a6f357"),emissiveMap:et?P:null,emissiveIntensity:et?.85:.075,envMapIntensity:1.25,side:i.DoubleSide});return et||(vt.color=new i.Color(t.metal||"#b4f25e"),vt.metalnessMap=null,vt.roughnessMap=null,vt.roughness=.24,vt.clearcoatMap=null,vt.iridescenceMap=null),vt},R=D(!0),w=D(!1),y=R.clone(),I=w.clone(),H=[Cn(R,{mouth:!0,amt:.08}),Cn(w,{mouth:!0,amt:.06}),Cn(y,{amt:.08}),Cn(I,{amt:.06})],N=new i.Group,G=new i.Group,J=new i.Group,V=new i.Group;G.add(new i.Mesh(u,R),new i.Mesh(h,w));let q=new i.Mesh(d,y),z=new i.Mesh(f,I),st=new i.Vector3(e/2,(gi(1)-.5)*n,0);V.position.copy(st),q.position.sub(st),z.position.sub(st),J.add(q,z),V.add(J),N.add(G,V),N.traverse(et=>{et.isMesh&&(et.castShadow=!1,et.frustumCulled=!1)});let lt={group:N,body:G,top:V,dims:{W:e,H:n,tearY:(gi(.5)-.5)*n},materials:[R,w,y,I],setTear(et){let vt=is(0,.35,et),Rt=is(.25,1,et);V.rotation.z=vt*.22+Rt*.9,V.position.set(st.x+Rt*1.6,st.y+vt*.05+Rt*2.6,Rt*.6),V.visible=et<.995,q.material.opacity=z.material.opacity=1},setMouth(et){H.forEach(vt=>{vt.uMouth.value=et})},setHolo(et,vt){H.forEach((Rt,k)=>{Rt.uHoloShift.value=et,vt!=null&&(Rt.uHoloAmt.value=vt*(k%2?.8:1))})},textures:[_,x,P,b,A],setLabel(et){(et||null)!==p.label&&(p.draw(et),[_,x,P,b].forEach(vt=>{vt.needsUpdate=!0}))},setEmissive(et){R.emissiveIntensity=y.emissiveIntensity=et},dispose(){N.traverse(et=>{et.geometry&&et.geometry.dispose()}),[_,x,P,b,A].forEach(et=>et.dispose()),lt.materials.forEach(et=>et.dispose())}};return lt.setTear(0),lt}var sh={G:"M12.17 16.44C14.41 16.44 16.02 15.04 16.02 12.71V11.56H12.27V13.08H14.02C14 14.03 13.34 14.62 12.19 14.62C10.87 14.62 10.1 13.64 10.1 11.94C10.1 10.26 10.91 9.29 12.18 9.29C13.05 9.29 13.63 9.72 13.83 10.44H15.92C15.71 8.7 14.15 7.47 12.15 7.47C9.82 7.47 7.98 9.12 7.98 11.97C7.98 14.73 9.68 16.44 12.17 16.44Z"},Mc={TSLA:{name:"Tesla",acc:"#A259FF",glow:"#8B4BF5",lf:"#fff",ink:1,lvb:"0 -0.005 39.017 24.01",wvb:"-0.005 -0.005 24.01 24.01",d:"M12 5.362l2.475-3.026s4.245.09 8.471 2.054c-1.082 1.636-3.231 2.438-3.231 2.438-.146-1.439-1.154-1.79-4.354-1.79L12 24 8.619 5.034c-3.18 0-4.188.354-4.335 1.792 0 0-2.146-.795-3.229-2.43C5.28 2.431 9.525 2.34 9.525 2.34L12 5.362l-.004.002H12v-.002zm0-3.899c3.415-.03 7.326.528 11.328 2.28.535-.968.672-1.395.672-1.395C19.625.612 15.528.015 12 0 8.472.015 4.375.61 0 2.349c0 0 .195.525.672 1.396C4.674 1.989 8.585 1.435 12 1.46v.003z"},SPCX:{name:"SpaceX",acc:"#8EBBFF",glow:"#8EBBFF",lf:"#fff",ink:1.625,lvb:"0 4.615 24 14.769",wvb:"0 0 24 24",d:"M24 7.417C8.882 8.287 1.89 14.75.321 16.28L0 16.583h2.797C10.356 9.005 21.222 7.663 24 7.417zm-17.046 6.35c-.472.321-.945.68-1.398 1.02l2.457 1.796h2.778zM2.948 10.8H.189l3.25 2.381c.473-.321 1.02-.661 1.512-.945Z"},GME:{name:"GameStop",acc:"#E5489B",glow:"#D63A8A",lf:"#fff",ink:1,lvb:"0 0 24 24",wvb:"0 0 24 24",initial:"G"},META:{name:"Meta Platforms",acc:"#1E8BF5",glow:"#1E8BF5",lf:"#fff",ink:1.06,lvb:"0 0.675 36.806 22.65",wvb:"0 0 24 24",d:"M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z"},AMZN:{name:"Amazon",acc:"#FF9900",glow:"#3B4D63",lf:"#FF9900",ink:1.012,lvb:"0 0.148 38.519 23.704",wvb:"0 0.001 24 24",d:"M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726a17.617 17.617 0 01-10.951-.577 17.88 17.88 0 01-5.43-3.35c-.1-.074-.151-.15-.151-.22 0-.047.021-.09.051-.13zm6.565-6.218c0-1.005.247-1.863.743-2.577.495-.71 1.17-1.25 2.04-1.615.796-.335 1.756-.575 2.912-.72.39-.046 1.033-.103 1.92-.174v-.37c0-.93-.105-1.558-.3-1.875-.302-.43-.78-.65-1.44-.65h-.182c-.48.046-.896.196-1.246.46-.35.27-.575.63-.675 1.096-.06.3-.206.465-.435.51l-2.52-.315c-.248-.06-.372-.18-.372-.39 0-.046.007-.09.022-.15.247-1.29.855-2.25 1.82-2.88.976-.616 2.1-.975 3.39-1.05h.54c1.65 0 2.957.434 3.888 1.29.135.15.27.3.405.48.12.165.224.314.283.45.075.134.15.33.195.57.06.254.105.42.135.51.03.104.062.3.076.615.01.313.02.493.02.553v5.28c0 .376.06.72.165 1.036.105.313.21.54.315.674l.51.674c.09.136.136.256.136.36 0 .12-.06.226-.18.314-1.2 1.05-1.86 1.62-1.963 1.71-.165.135-.375.15-.63.045a6.062 6.062 0 01-.526-.496l-.31-.347a9.391 9.391 0 01-.317-.42l-.3-.435c-.81.886-1.603 1.44-2.4 1.665-.494.15-1.093.227-1.83.227-1.11 0-2.04-.343-2.76-1.034-.72-.69-1.08-1.665-1.08-2.94l-.05-.076zm3.753-.438c0 .566.14 1.02.425 1.364.285.34.675.512 1.155.512.045 0 .106-.007.195-.02.09-.016.134-.023.166-.023.614-.16 1.08-.553 1.424-1.178.165-.28.285-.58.36-.91.09-.32.12-.59.135-.8.015-.195.015-.54.015-1.005v-.54c-.84 0-1.484.06-1.92.18-1.275.36-1.92 1.17-1.92 2.43l-.035-.02zm9.162 7.027c.03-.06.075-.11.132-.17.362-.243.714-.41 1.05-.5a8.094 8.094 0 011.612-.24c.14-.012.28 0 .41.03.65.06 1.05.168 1.172.33.063.09.099.228.099.39v.15c0 .51-.149 1.11-.424 1.8-.278.69-.664 1.248-1.156 1.68-.073.06-.14.09-.197.09-.03 0-.06 0-.09-.012-.09-.044-.107-.12-.064-.24.54-1.26.806-2.143.806-2.64 0-.15-.03-.27-.087-.344-.145-.166-.55-.257-1.224-.257-.243 0-.533.016-.87.046-.363.045-.7.09-1 .135-.09 0-.148-.014-.18-.044-.03-.03-.036-.047-.02-.077 0-.017.006-.03.02-.063v-.06z"},AAPL:{name:"Apple",acc:"#DDE2E8",glow:"#DDE2E8",lf:"#E9EAEC",ink:.717,lvb:"2.225 -1.643 44.339 27.285",wvb:"-1.643 -1.643 27.285 27.285",d:"M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"},NVDA:{name:"NVIDIA",acc:"#76B900",glow:"#6FB300",lf:"#fff",ink:.997,lvb:"0 -0.037 39.12 24.074",wvb:"-0.037 -0.037 24.074 24.074",d:"M8.948 8.798v-1.43a6.7 6.7 0 0 1 .424-.018c3.922-.124 6.493 3.374 6.493 3.374s-2.774 3.851-5.75 3.851c-.398 0-.787-.062-1.158-.185v-4.346c1.528.185 1.837.857 2.747 2.385l2.04-1.714s-1.492-1.952-4-1.952a6.016 6.016 0 0 0-.796.035m0-4.735v2.138l.424-.027c5.45-.185 9.01 4.47 9.01 4.47s-4.08 4.964-8.33 4.964c-.37 0-.733-.035-1.095-.097v1.325c.3.035.61.062.91.062 3.957 0 6.82-2.023 9.593-4.408.459.371 2.34 1.263 2.73 1.652-2.633 2.208-8.772 3.984-12.253 3.984-.335 0-.653-.018-.971-.053v1.864H24V4.063zm0 10.326v1.131c-3.657-.654-4.673-4.46-4.673-4.46s1.758-1.944 4.673-2.262v1.237H8.94c-1.528-.186-2.73 1.245-2.73 1.245s.68 2.412 2.739 3.11M2.456 10.9s2.164-3.197 6.5-3.533V6.201C4.153 6.59 0 10.653 0 10.653s2.35 6.802 8.948 7.42v-1.237c-4.84-.6-6.492-5.936-6.492-5.936z"}};function gg(i){for(var t=2166136261,e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function xg(i){return function(){i=i+1831565813|0;var t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var eo={};function rh(i,t,e){var n=i+":"+(t||56)+":"+(e||100);if(eo[n])return eo[n];t=t||56,e=e||100;for(var s=xg(gg(i)),r=0,o=[],a=0;a<t;a++)r+=s()-.5+Math.sin(a/5+s())*.18,o.push(r);for(var c=Math.min.apply(null,o),l=Math.max.apply(null,o),u=l-c||1,h=o.map(function(p,M){return[M*250/(t-1),e*.08+(1-(p-c)/u)*e*.84]}),d="M"+h[0][0].toFixed(1)+","+h[0][1].toFixed(1),f=1;f<t;f++){var m=h[f-1],g=h[f],A=((m[0]+g[0])/2).toFixed(1);d+=" C"+A+","+m[1].toFixed(1)+" "+A+","+g[1].toFixed(1)+" "+g[0].toFixed(1)+","+g[1].toFixed(1)}return eo[n]={line:d,area:d+" L250,"+e+" L0,"+e+" Z"},eo[n]}var Ze={W:1.5,H:2.25,R:.107},no='-apple-system, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Inter, Arial, sans-serif';function vg(i){return i.split(/\s+/).map(Number)}function Us(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}function oh(i,t,e,n,s){let r=e;for(let o of t)i.fillText(o,r,n),r+=i.measureText(o).width+s;return r-e-s}function ah(i,t,e,n,s,r,o,a){let[c,l,u,h]=vg(o),d=Math.max(s/u,r/h);i.save(),i.beginPath(),i.rect(e,n,s,r),i.clip(),i.translate(e-c*d+(s-u*d)*0,n-l*d+(r-h*d)/2),i.scale(d,d),i.fillStyle=a,i.strokeStyle=a,t.initial?(i.lineWidth=1.8,i.beginPath(),i.arc(12,12,10.6,0,Math.PI*2),i.stroke(),i.fill(new Path2D(sh[t.initial]),"evenodd")):i.fill(new Path2D(t.d),"evenodd"),i.restore()}function xi(i,t){let e=parseInt(i.slice(1),16);return"rgba("+(e>>16&255)+","+(e>>8&255)+","+(e&255)+","+t+")"}var yc="#A6F357";function Fs(i,t,e=512,n={}){let s=Math.round(e*1.5),r=e/100,[o,a,c]=i,l=n.power?Object.assign({},Mc[o],{acc:yc,glow:yc}):Mc[o],u=Xe(e,s),h=u.getContext("2d"),d=e*12/168,f=t==="orm",m=t==="glow";if(h.save(),Us(h,0,0,e,s,d),h.clip(),h.fillStyle=f?"rgb(0,96,0)":"#0c0e0d",h.fillRect(0,0,e,s),m&&(h.fillStyle="#000",h.fillRect(0,0,e,s)),!f){if(!m){h.save(),h.translate(.22*e,.1*s),h.scale(1.1*e,.7*s);let w=h.createRadialGradient(0,0,0,0,0,1);w.addColorStop(0,xi(l.glow,.3)),w.addColorStop(.6,xi(l.glow,0)),h.fillStyle=w,h.fillRect(-1,-1,2,2),h.restore()}ah(h,l,e+34*r-118*r,s+8*r-118*r,118*r,118*r,l.wvb,xi(l.acc,m?.07:.13))}let g=w=>f?"rgb(0,58,235)":m?"rgba(255,255,255,"+w*.7+")":"rgba(255,255,255,"+w+")",A=rh(o),p=s-33*r-.22*s,M=.22*s;if(h.save(),h.translate(0,p),h.scale(e/250,M/100),!f){let w=h.createLinearGradient(0,0,0,100);w.addColorStop(0,xi(l.acc,m?.22:.26)),w.addColorStop(1,xi(l.acc,0)),h.fillStyle=w,h.fill(new Path2D(A.area))}h.restore(),h.save(),h.translate(0,p);let _=new Path2D,x=new DOMMatrix().scale(e/250,M/100);_.addPath(new Path2D(A.line),x),h.lineWidth=2*e/168,h.lineJoin="round",h.strokeStyle=f?"rgb(0,40,200)":m?"#fff":l.acc,h.stroke(_),h.restore();let P=10*r,b=10*r*l.ink;ah(h,l,6.4*r,6.4*r,b,P,l.lvb,f?"rgb(0,58,235)":m?"#fff":l.lf),h.fillStyle=g(1),h.textBaseline="middle",h.font="800 "+7.6*r+"px "+no,oh(h,o,6.4*r+b+2.4*r,6.4*r+P/2,-.01*7.6*r);let D="$"+a.toLocaleString("en-US"),R=(D.length>=8?18.5:22)*r;if(h.font="400 "+R+"px "+no,h.textBaseline="alphabetic",oh(h,D,6.4*r,22*r+R*.8,-.04*R),h.font="600 "+5.2*r+"px "+no,h.fillStyle=f?"rgb(0,96,0)":g(.75),h.textBaseline="top",h.fillText(l.name,6.4*r,45.6*r),h.font="400 "+5.2*r+"px "+no,h.fillStyle=f?"rgb(0,96,0)":g(.72),h.textBaseline="bottom",h.fillText(c+" shares",6.4*r,s-6.4*r),h.restore(),h.save(),Us(h,1.5,1.5,e-3,s-3,d-1.5),f)h.strokeStyle="rgb(0,30,255)";else{let w=h.createConicGradient(-34*Math.PI/180-Math.PI/2,e/2,s/2);w.addColorStop(0,"#ffffff"),w.addColorStop(.12,l.acc),w.addColorStop(.3,xi(l.acc,.35)),w.addColorStop(.5,"#ffffff"),w.addColorStop(.7,xi(l.acc,.35)),w.addColorStop(.91,l.acc),w.addColorStop(1,"#ffffff"),h.strokeStyle=w}return h.lineWidth=f?6:3,h.stroke(),h.restore(),u}function wc(i=512){let t=Math.round(i*1.5),e=Xe(i,t),n=e.getContext("2d"),s=i*12/168;Us(n,0,0,i,t,s),n.clip();let r=n.createRadialGradient(i/2,0,0,i/2,0,t*.9);r.addColorStop(0,"#20261a"),r.addColorStop(.7,"#0a0c08"),n.fillStyle=r,n.fillRect(0,0,i,t),n.save(),Us(n,i*.04,i*.04,i*.92,t-i*.08,s*.6),n.clip(),n.strokeStyle="rgba(166,243,87,0.06)",n.lineWidth=1.5;for(let c=-t;c<i+t;c+=i*.036)n.beginPath(),n.moveTo(c,0),n.lineTo(c+t,t),n.stroke();n.restore(),Us(n,i*.04,i*.04,i*.92,t-i*.08,s*.6),n.strokeStyle="rgba(166,243,87,0.35)",n.lineWidth=2,n.stroke();let o=t*.3,a=o/230;return n.save(),n.translate(i/2-63*a,t/2-115*a),n.scale(a,a),n.shadowColor="rgba(166,243,87,0.5)",n.shadowBlur=40/a,n.fillStyle="#a6f357",ss.forEach(c=>n.fill(new Path2D(c))),n.restore(),e}function _g(i,t,e,n){let s=new i.Shape,r=-t/2,o=-e/2;return s.moveTo(r+n,o),s.lineTo(r+t-n,o),s.quadraticCurveTo(r+t,o,r+t,o+n),s.lineTo(r+t,o+e-n),s.quadraticCurveTo(r+t,o+e,r+t-n,o+e),s.lineTo(r+n,o+e),s.quadraticCurveTo(r,o+e,r,o+e-n),s.lineTo(r,o+n),s.quadraticCurveTo(r,o,r+n,o),s}function ch(i,t,e,n,s){let r=new i.ShapeGeometry(t,10),o=r.attributes.position,a=r.attributes.uv;for(let c=0;c<o.count;c++)a.setXY(c,s?.5-o.getX(c)/e:o.getX(c)/e+.5,o.getY(c)/n+.5);return r}function io(i,t,e={}){let{W:n,H:s,R:r}=Ze,o=.012,a=_g(i,n,s,r),c=(j,Z)=>{let Et=new i.CanvasTexture(j);return Z&&(Et.colorSpace=i.SRGBColorSpace),Et.anisotropy=8,Et},l=c(Fs(t,"face"),!0),u=c(Fs(t,"orm")),h=e.power?c(Fs(t,"face",512,{power:!0}),!0):l,d=e.backTex||c(wc(),!0),f=new i.MeshPhysicalMaterial({map:l,roughnessMap:u,metalnessMap:u,roughness:1,metalness:1,clearcoat:1,clearcoatRoughness:.03,iridescence:.18,iridescenceIOR:1.3,iridescenceThicknessRange:[200,700],emissive:new i.Color(16777215),emissiveMap:l,emissiveIntensity:.62,envMapIntensity:.34,transparent:!0}),m=Cn(f,{amt:.1,base:.07}),g={uPow:{value:0},tFaceOn:{value:h}},A=f.onBeforeCompile;f.onBeforeCompile=(j,Z)=>{A(j,Z),Object.assign(j.uniforms,g),j.fragmentShader=j.fragmentShader.replace("#include <common>",`#include <common>
uniform float uPow;
uniform sampler2D tFaceOn;`).replace("#include <map_fragment>",`#ifdef USE_MAP
  diffuseColor *= mix(texture2D(map, vMapUv), texture2D(tFaceOn, vMapUv), uPow);
#endif`).replace("#include <emissivemap_fragment>",`#ifdef USE_EMISSIVEMAP
  totalEmissiveRadiance *= mix(texture2D(emissiveMap, vEmissiveMapUv), texture2D(tFaceOn, vEmissiveMapUv), uPow).rgb;
#endif`)},f.customProgramCacheKey=()=>"holo-card";let p=new i.MeshPhysicalMaterial({map:d,roughness:.4,metalness:.1,clearcoat:1,clearcoatRoughness:.05,emissive:new i.Color(16777215),emissiveMap:d,emissiveIntensity:.32,transparent:!0}),M=new i.MeshStandardMaterial({color:1382415,roughness:.5,metalness:.6,transparent:!0}),_=new i.Group,x=new i.Mesh(ch(i,a,n,s,!1),f);x.position.z=o/2;let P=new i.Mesh(ch(i,a,n,s,!0),p);P.position.z=-o/2,P.rotation.y=Math.PI;let b=new i.ExtrudeGeometry(a,{depth:o,bevelEnabled:!1,curveSegments:10});b.translate(0,0,-o/2);let D=new i.Mesh(b,[new i.MeshBasicMaterial({visible:!1}),M]);_.add(D,x,P);let R=.255,w=.155,y=w/2-.0115,I=new i.Group;I.position.set(n/2-.096-R/2,s/2-.171,o/2+8e-4);let H=new i.Shape;H.absarc(-R/2+w/2,0,w/2,Math.PI/2,Math.PI*1.5,!1),H.absarc(R/2-w/2,0,w/2,-Math.PI/2,Math.PI/2,!1);let N=(j,Z)=>new i.MeshBasicMaterial({color:j,transparent:!0,opacity:Z??1,toneMapped:!1,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),G=new i.Color("#3a3a3d"),J=new i.Color(yc),V=N(G.clone()),q=N(0,.28),z=N(16777215),st=new i.Mesh(new i.ShapeGeometry(H,24),V),lt=new i.Mesh(new i.CircleGeometry(y+.008,40),q);lt.position.z=3e-4;let et=new i.Mesh(new i.CircleGeometry(y,40),z);et.position.z=6e-4,I.add(st,lt,et),[st,lt,et].forEach((j,Z)=>{j.renderOrder=10+Z}),_.add(I);let vt=[V,q,z],Rt=[1,.28,1],k=j=>{let Z=-R/2+w/2+(R-w)*j,Et=Math.sin(Math.PI*Math.min(1,Math.max(0,j)));et.position.x=lt.position.x=Z,et.scale.set(1+.22*Et,1,1),lt.scale.set(1+.22*Et,1,1),lt.position.y=-.006,V.color.copy(G).lerp(J,Math.min(1,Math.max(0,j)))};k(0),_.traverse(j=>{j.isMesh&&(j.frustumCulled=!1)});let rt=[f,p,M];return{group:_,row:t,setOn(j){f.emissiveIntensity=.62+j*.5,m.uHoloAmt.value=.1+j*.14},setHolo(j){m.uHoloShift.value=j},setOpacity(j){rt.forEach(Z=>{Z.opacity=j,Z.depthWrite=j>.98}),vt.forEach((Z,Et)=>{Z.opacity=j*Rt[Et]}),_.visible=j>.003},setToggle:k,setPower(j){g.uPow.value=Math.min(1,Math.max(0,j))},textures:[l,u,d,h],dispose(){[l,u,h].forEach(j=>j.dispose()),rt.forEach(j=>j.dispose()),vt.forEach(j=>j.dispose())}}}function as(i,t){let e=new i.Scene;e.background=new i.Color(.055,.058,.05);let n=(a,c,l,u,h,d,f)=>{let m=new i.Mesh(new i.PlaneGeometry(a,c),new i.MeshBasicMaterial({color:new i.Color(f||16777215).multiplyScalar(d),side:i.DoubleSide}));return m.position.set(l,u,h),m.lookAt(0,0,0),e.add(m),m},s=(a,c,l,u,h)=>{let d=new i.Mesh(new i.SphereGeometry(a,16,12),new i.MeshBasicMaterial({color:new i.Color(16777215).multiplyScalar(h)}));d.position.set(c,l,u),e.add(d)};n(9,2.6,0,7,5.5,2.4),n(12,5,0,3,9,.62),n(12,4.5,0,-2,9,.26),n(.5,7,-2.2,.5,8.6,2.6),n(.35,7,2.6,0,8.6,1.8),n(5,2.2,-1.5,-4.5,7,1.4),n(1.6,9,-7,.8,3.5,3.2),n(1.3,8,6.5,-.5,3,2.4),n(7,1,0,5.5,-6,1.6),n(3,3,-4,-5,4,.7,15662048),n(16,16,0,-9,0,.16),n(16,9,0,0,-9,.1),n(9,6,-9,0,-2,.32),n(9,6,9,.5,-1,.28),s(.42,-2.6,3.6,5.4,14),s(.3,3.2,-2.1,5,10),s(.22,1.2,4.4,4.6,12),s(.26,-4.2,-.6,4.4,11),s(.2,4.6,2.2,4.2,12),s(.18,-.8,-3.6,5.2,9);let r=new i.PMREMGenerator(t),o=r.fromScene(e,.035);return r.dispose(),e.traverse(a=>{a.geometry&&a.geometry.dispose(),a.material&&a.material.dispose()}),o.texture}var Mg=" .'`,:;-~^\"!i|+<>=?*/\\tlfjrcxzvunoeasYJCLQ0OZmwqpdbkhaB8&%#@$";function yg(i,t,e,n){let s=Math.round(t*n),r=Math.round(e*n),o=Math.round(r*.86)+'px ui-monospace, "SF Mono", SFMono-Regular, Menlo, Consolas, "Roboto Mono", monospace',a=Xe(s,r),c=a.getContext("2d",{willReadFrequently:!0});c.font=o,c.textAlign="center",c.textBaseline="middle";let l=[];for(let A of Mg){c.clearRect(0,0,s,r),c.fillStyle="#fff",c.fillText(A,s/2,r/2+r*.04);let p=c.getImageData(0,0,s,r).data,M=0;for(let _=3;_<p.length;_+=4)M+=p[_];l.push([A,M])}l.sort((A,p)=>A[1]-p[1]);let u=l[l.length-1][1]||1,h=24,d=[" "];for(let A=1;A<h;A++){let p=Math.pow(A/(h-1),1.15)*u,M=l[1];for(let _ of l)Math.abs(_[1]-p)<Math.abs(M[1]-p)&&d.indexOf(_[0])<0&&(M=_);d.push(M[0])}let f=Xe(s*h,r),m=f.getContext("2d");m.font=o,m.textAlign="center",m.textBaseline="middle",m.fillStyle="#fff",d.forEach((A,p)=>m.fillText(A,p*s+s/2,r/2+r*.04));let g=new i.CanvasTexture(f);return g.minFilter=g.magFilter=i.NearestFilter,g.generateMipmaps=!1,{tex:g,N:h,gw:s,gh:r}}function Ns(i,t={}){let e=new i.MeshLambertMaterial({color:t.color??16777215,map:t.map||null,emissive:t.emissive??0,side:t.side??i.FrontSide}),n=t.uniforms||{uReveal:{value:0},uTint:{value:t.tint??0}},s=!!n.uFadeY;return e.userData.u=n,e.onBeforeCompile=r=>{Object.assign(r.uniforms,n),s&&(r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
varying float vWY;`).replace("#include <project_vertex>",`#include <project_vertex>
vWY = (modelMatrix * vec4(transformed, 1.0)).y;`)),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
uniform float uReveal;
uniform float uTint;`+(s?`
uniform vec2 uFadeY;
varying float vWY;`:"")).replace("#include <dithering_fragment>",["#include <dithering_fragment>","float lum = dot(gl_FragColor.rgb, vec3(0.299, 0.587, 0.114));","float rim = pow(1.0 - clamp(abs(dot(normalize(normal), normalize(vViewPosition))), 0.0, 1.0), 3.0);","lum = clamp(lum + rim * "+(t.rim??.35).toFixed(3)+", 0.0, 1.0);","float rv = uReveal"+(s?" * (1.0 - smoothstep(uFadeY.x, uFadeY.y, vWY))":"")+";","gl_FragColor = vec4(lum, rv, uTint, 1.0);"].join(`
`))},e.customProgramCacheKey=()=>"lum"+(t.rim??.35)+(s?"f":""),e}function lh(i,t){let e=new i.Scene;e.add(new i.AmbientLight(16777215,.45));let n=new i.DirectionalLight(16777215,3);n.position.set(-3,5,6),e.add(n);let s=new i.DirectionalLight(16777215,.8);s.position.set(5,-1,4),e.add(s);let r=new i.WebGLRenderTarget(64,64,{type:i.UnsignedByteType,minFilter:i.NearestFilter,magFilter:i.NearestFilter,depthBuffer:!0}),o=null,a={tWorld:{value:r.texture},tAtlas:{value:null},uN:{value:24},uGrid:{value:new i.Vector2(64,64)},uCell:{value:new i.Vector2(6,10)},uRes:{value:new i.Vector2(1,1)},uTime:{value:0},uPack:{value:new i.Vector3(.5,.5,.3)},uGlow:{value:1},uFade:{value:1}},c=new i.Mesh(new i.PlaneGeometry(2,2),new i.ShaderMaterial({uniforms:a,transparent:!0,depthTest:!1,depthWrite:!1,vertexShader:"void main(){ gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:["precision highp float;","uniform sampler2D tWorld; uniform sampler2D tAtlas; uniform float uN; uniform vec2 uGrid; uniform vec2 uCell; uniform vec2 uRes;","uniform float uTime; uniform vec3 uPack; uniform float uGlow; uniform float uFade;","float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }","void main(){","  vec2 fc = vec2(gl_FragCoord.x, uRes.y - gl_FragCoord.y);","  vec2 cell = floor(fc / uCell);","  vec2 uv = (cell + 0.5) / uGrid; uv.y = 1.0 - uv.y;","  vec4 w = texture2D(tWorld, uv);","  float n = h(cell);","  float vis = smoothstep(n - 0.04, n + 0.04, w.g * 1.06);","  float lum = w.r;","  float tick = floor(uTime * 1.6 + n * 9.0);","  float sh = h(cell + tick * 7.13);","  float j = sh > 0.93 ? 1.0 : (sh < 0.07 ? -1.0 : 0.0);","  lum = smoothstep(0.04, 0.92, lum);","  float idx = clamp(floor(pow(lum, 0.8) * (uN - 1.0) + 0.5) + (lum > 0.03 ? j : 0.0), 0.0, uN - 1.0);","  vec2 local = fract(fc / uCell);","  float a = texture2D(tAtlas, vec2((idx + local.x) / uN, 1.0 - local.y)).a;","  vec2 sp = vec2(fc.x / uRes.x, fc.y / uRes.y);","  vec2 d = (sp - uPack.xy) * vec2(uRes.x / uRes.y, 1.0);","  float near = exp(-dot(d, d) / (uPack.z * uPack.z)) * uGlow;","  float ang = atan(d.y, d.x);","  vec3 film = 0.5 + 0.5 * cos(6.28318 * (ang * 0.32 + uTime * 0.05 + vec3(0.0, 0.33, 0.67)));","  vec3 base = mix(vec3(0.43, 0.43, 0.44), vec3(0.52, 0.38, 0.33), w.b);","  vec3 col = mix(base, vec3(0.52, 0.72, 0.30), clamp(near * 0.6, 0.0, 0.5));","  col = mix(col, film * 0.6, near * 0.1);","  float alpha = a * vis * (0.13 + 0.5 * lum + near * 0.12) * uFade;","  gl_FragColor = vec4(col * alpha, alpha);","}"].join(`
`),blending:i.CustomBlending,blendSrc:i.OneFactor,blendDst:i.OneMinusSrcAlphaFactor})),l=new i.Scene;l.add(c);let u=new i.OrthographicCamera(-1,1,1,-1,0,1);return c.frustumCulled=!1,{scene:e,setSize(h,d,f,m,g){let A=Math.ceil(h/m),p=Math.ceil(d/g);r.setSize(A,p),a.uGrid.value.set(A,p),a.uCell.value.set(m*f,g*f),a.uRes.value.set(h*f,d*f),o&&o.tex.dispose(),o=yg(i,m,g,f),a.tAtlas.value=o.tex,a.uN.value=o.N},render(h,d,f){a.uTime.value=d,f&&a.uPack.value.set(f.x,f.y,f.r);let m=t.getRenderTarget();t.setRenderTarget(r),t.setClearColor(0,0),t.clear(!0,!0,!1),t.render(e,h),t.setRenderTarget(m),t.render(l,u)},uniforms:a,rt:r,dispose(){r.dispose(),o&&o.tex.dispose(),c.geometry.dispose(),c.material.dispose()}}}var hh={L:{p:"O6UT/YQOEahd9nMKPKMC/pgIpKbO9sMEg6jW7S4LAqc97RYGTaQP9iQBqqDr/H8FHKXf7M0CqqDr/H8FTaQP9iQBBZ8++yoE/KAl9AAAHKXf7M0C4aLL7DUB8J3F3o0PJ5ux4tsOEaIV5R4Ix5/h504HeJZ43WkW2pcO6z0QIpMq5gwYbZlp2XYXb5SO0zwgRJEs2GEemJqv+AMLT5zC7xEIdpb387ITSJ3//88RY5vp/AcOtJet/Bobq5ag+OkWkKTt9jwfVqHi9KcnbKZb8U0f8qNT7ownUaUw4uYd76Ng3uAX2qcD6FUW/6a85bMQEaIV5R4IA6WX5IYL8J3F3o0PGKHI3NASq5ag+OkWY5vp/AcOB4mdxvkvVo8RznMo9JKWy7Ut5IyuxWY2zoR1y7ks7ItP0rwmVo8RznMoB4mdxvkvlIGf0mkt7ohk2fwnNoel4VorlX9k2i4x/Yai5r8uG39x32Q1G39x32Q1438244I6/Yai5r8uzYd66jkzG4lP30FLwow22d5LlZDD5ZxDpJMh38BDhJGv7uEbv5Fq8ysf9Yve6Ggj8oto7R8nz5uD3RE35pnb5Gk635VK2DBBD52x1uoaNJjz0JUkb5SO0zwgbZlp2XYXdZJf95kjv5Fq8ysfEY0G8Ycs8oto7R8naX0xwtBoHHcIyNFtvnowvrNvUHNsxGR1UHgVusR1oG6qv3l9eXYhtQx7l2tRuc6DWj+MwO1mTTo9uCJvJ0FEwu13kDgus0mCCkLZtUiO7EEmuLhUBDz+sRpbWj+MwO1mTTo9uCJvXGuJpMs962QunctAx2JGrO86klslpn0/w83WRpnPRceaTLzNtspNQifZx8P7R5PXl86rRPPEIchsShjC1cLROT67Dsk3NJa+Mb8BNGjE0sUgL1bHncR1MKjTscbzOLjbz72kNQDSx785PtbZ/eFmC3XOJ9+UAIrKPuLIC3LGI+BJBb7B6t5YCXDUz9tOAo7T8MuCM2/cd8lgK2vURdVuIqe968+KGxy/99M5Lry/q88gJ5HAnMzcPP+9IsZwQuq6NNkAAMbHItvQAh/BJ9+UAIrKI+BJBb7B2Ne9APTOz9tOAo7TxcCdUmPLQL0mTszVVLlTRAvYyLdZPAzQErkGOurBvbwTQBm5C8D3SJy41sEFUOm+j+AmFPHOLOCiE7DErdynHMvOSdztG17Edth5GILWYtwSEE3WuNRuBk/G0dSJBi3PfNCHDuHFJtBXDvvQBtg6CQTYodN9EqjY4tMFEp2+a9i1FtW8BNg0CWa/et3nDfq8KbvYXlXLxLVCbOXLZ7ceWaPW+7GZZPzWXbRlT8XXErDgWnDXXbRlT8XXErDgWnDXVLSiS5rRr7AkVqfRPrY4SaLEL7NDVPfFBLkVTaG6ZrX/VnO7YbsdVOe4I7cLX1O5jLyHW0O+tbcRaGG+dMw+IwXJksznF9TGksq5KurI+MtOJJfUucy0GKvSts5UKrLbktBLHoTZsc0ZL3DAj9GZNznAPdCbPBXaLdM9QV7R09MZP1XHHNMKMXvZ79QVI9LWf9ZuNTrRoNjUJVnOtNggJtLECtexNJ7G99M5Lry/j9GZNznAts5UKrLb8MuCM2/cNa3cTF/zAanXUa7xtKniSSb8j6XiTkP6EK7eSW7pIKrKTjfn9qS+OJ/sxadLNAfuv6OWOh32zKZwNrf3prCkRnf1zqyCQ0z+brHpQ9XqR6syNyLnuqhLPKrkv7gGF0P5s7ZhDYf2W7mPFg7z6rcSERjvQbb0Ffv9pLNvECv+jqwdH8L/a6qeKF//6KndGyf4fadrJMf2CqzlQoLjQagoR5fgjaQnQBLipqr+GpHvvq1CHDrpcq01EzLxTrH6FPDqYrG+Czn0zbNADgvts7ZhDYf26rcSERjvALCEDhn7pLNvECv+UK1xFCX5zq/iFv//UKXBQVr9RaEcRiP70p/APgPz/aDTPG/pUKhuI/HtcqjMLVnupqdVLxn3/7fJHcL4UrhjHFbwybWGJXT3EbYfJFPuGLKjIx7/TbS9G0j/6rIKIL/nvLWZF/bpm6FoVaP36KT/WGDvVp33S6r4RaEcRiP7Vp33S6r43JvpREnxv51YRKXngKFHSMffiKQxTk/eKKbGVAfko6DYZS7ucJ2ZYpL3Tpr9Vvb3Tpr9Vvb3gpl8UG7xwpuoULDn3p5UVBnfn6HfWSbdbaJVYWriQK/DPY3lI6yBMMTnXLOgLgv36bNnLVrsjqhcPKb+UrICPUD2Pa7CORr/V7M7O0TsCLAvLXH+frAiKSXmXqy4JWznjrDHNUPmUam6M8L+frAiKSXmjrDHNUPm7f6DWvRv//9wTxJtg/7BWiVo9/2qU0Njof20V6V2gP26Tyt3aulfWB91Xe9yU3Z0pOs0XjV8efHOWLt7yvncSvxpVvr+TkRj//9wTxJt9/2qU0NjMfkOS/VygP26Tyt3DO+/U3BpeOmHWJ1p0vO4T+FphfX5U1BirvCuV4phJvuVYT1xt/pCYDdm2/Z8ZrFwTfY+ZZZlw/SIYd55RvmLXDN5VvR1T4FzlvanUzp7B/SyXn1eCfmyWVNfUc+af2x+HtZCfKl9E9Emh71zB9iDg4tzctGAfbNdt9cTeXFdBtA6cwlgzNX/bS5gHNK0hj9mw9jdgkRm3bCKiSWAqbXQin1+MbATlTR1I7Z0lB50ebACfTZ86bRZffF8Va6qcyZyNrS2c4JzebACfTZ86bRZffF85aztfONYa7TnewVbEa05dIhjE7THc1dluq0oi5RXRrVvigxa9rWTlKRjw61NlqhioclGhIx/WsuUjFR0IM4KddZ+oMg0eYx/7838bD92IM4KddZ+oMhfcJx2oMg0eYx/js5ebD9qZsmgbzlql8qvdmdft8tygcddPsybi4JmmOAZZBZsNeLqaVtjF+XdXuZq9eb/Y7NixeT2Xr523OtxdDJzY+VCffR0zen5bs18aeOhdnZ+4usbc3Fm0OWEe4BnSe/CZ696SvF2bPpx+vBTaw5lTO47ZB9eb+tWXQhhduk+a35flub9ZGN9EOC1ZA14MOFKbBZ/LOSGckFgssJWiG+AOcRrkTN1BMKce0Z/M8LYcut1BMKce0Z/9sL3cfNo4MNAeuBew8QPhtJdGcWTkHhmDuLuVbWdedt8Wseddd+eTmCnENk4UxCnxeIAVRSQXtzGWuqPg/wFHCOUtPomEMKQB/x0HA2MQ/ppFdKGWvpWGbWaafhlESybxeDGTOCHpd3aQtiIlNr7URKHgNcOR2SH0vTgDbGNL/axEQSGtPomEMKQQ/ppFdKGovNFDh6XafhlESybwOsgHEiZcufeJjmbVOvnG76NauetJpWPdeSQMTCdeODdN0mek+RIMaWR1uC3N4CSJO8FFSWODfLoGFyFzO16H+KEOvnyI9iK4PWUKqOKDfpxJTqWvvZjK1GWWfMIJsefFPf8H9edyO8oFVOYrfJXGN2fXO5hH+SgOPbXHUiCY/K5JduC/dPmWWyHEtHrTciGN85FZW6JKMwIWhuJELuZdG2sAbpbZ1ipa8MZcRStIsJtY9mqOurwKkujHvKaNv2YrfHDNTKL7OayNY6IWeNyPXaJhuo+PduGjeZPRmCIEO/5MVGiAOqdKtCFB+4JMQqEinSdZANvNH6xYoFxknMSYIF5H31vXoZ8VnKAXTCEsHvcW3mHSGqnYe92JGumZvJs8WE5aPlq1VgIabRogWLvbQBhtFmbbmdfzmzhWqOi8W7ZWrGYgXUmWk2m03c7WUOcvnKyWnKwaWorW5GsSWRzWzKfO2b9W2KVa2KHXo3JPmV3XOe/0mlfX83NCG0hXa3Du5whYPut3Z1XY3ilnaOaa46tvqMIbO6qrqzQe8l886wpjC2C9KpXeil/+Kuwh1GHHZOoa3fQ8JVJa37MiZOZePXRVJdleHrLbZwodZzNuZuUfFq/rKBYejHCWqvtlTN4najTmUNpuq0oi5RXh6bRklxa5aWgihhVjaV6fblW5aWgihhVJKZ+dMpgiKcFc+FvrqzQe8l89KpXeil/i6xQeNWB9KTMcUl4PKeyabZ/SJxnZRB9Q5w2bBlzUqJ4YLSw/qUMbGywL50LWRC7+6R5WA6/3qhQXiq1JZNnW6+prZVQXXqfTpk0X1rI+6FZXXXLmZpwas7ND6IwZwvSLozXYx/Uf42nZMvLo5Kfa43SHZOoa3fQMIQtXzrQX4dyX2DHTlJysmJCClofuFc99El/q19IaUIKpmRNPktuv85MnFO6xDtG8l1Tk/1GpFNZnlBFWWO0xCCCHV9NvWCKcU+vy8h4UlhR0xFttkl5zAJsFVOb0wZhvUffwX6EBVFHz9xS/UcByRJcBVFHz9xS/UcByRJcHo4k4N0fECwcqJVxHzT6rZ1y8y3apeRg1TWbqoJf/pbPjXWYWZj2kJyR0JKej4GXxZHJkpSR1nYkoUqHd3o3nByKlnzLoseAxn9zniCDTW56mKWabmiNnr2WOGiplj+k22DQnb6fynN9p/KE8G/Cn2qO2Wuwp3GLWG8hivDdqmmgjD/ckWrIgXDoiGSqg7jmBW7PjyLQwXO7jM7RE3vyisq7cXWJjQ25gnd1jG7GwHEwjyLEjXnyjKWu/36Ziq2xDX7pjRylM4OJi3CodYwelpCNOYxbkMOYoYfuks2UPm4ykrGn+XM+j1KrpnPOkwie1XhwkICha2lPk+qymW84kCW2y2svkoHBcmV/lXe+71yxkUTXpmOCj+DZYGG4lcPKAWjckojNQFd1h1rhKl6HhUrkeXQoms6RxYLqj3OckIdxjQ+g9aiY7p8RQ6gv9U8RDKZV+qIUGKBn/zgXDpuc/QQgS6JH/MQbKp69+nskr4W84ulHX43f6S1AYYKy5MVBWoo27J85a6Ek3D4n85/e13cgqZY90rw81pWczc41QZxF1yUyGJva0qIrJ5WI+Usp05gy94wuTE28tEWVWFJzwNCK2FpFs72R0X5ttRJvNYLAsf5oFIB6uXpptYLxtCpjT5MU8dY4oo8E8wMzj6XDl8x6dKackiKDC6dofFOp56iug8GbSaDMg8ykjKJfh4uaypFJfo3GxpW1f6u8XY67fozPeIs8eyPkpoYUfzzkR4a8dQfvU4FeeHjujJ1KiuFSkp1DlLtWXJ2ic/NcLJ3bfQNU3nKln9ZBFW6el4JDAYaLqgpd0oRrrqdibohaqGhlF4UnrNRowoMqrHVWLIT1sCxcCIHNru9P+YJMs9dVjH9YmZFJSIFnoPBMB4ZSly9N3IZunlFRFo0TlpRQjYwBjIZOXIQzjlFLEn2wkGxI4HX+k+1FXnnwmwVGW4H/gRxP7Ipsf9pQj3ichKdMKnDshzBK8qSw58cjZKch7E4cVI+r0jxJiZx98S0xg58S6jQw6Zbp6zs7CKGv4ngslXA3r3uEOHgnrix9NWb3sK2LA2kuy494mqdl8xoYYqh07x8XZ6YV93QZ93nyp+l+xGdijIBInDoRoVRRMDI/nTZTzEsMl7lKD0JFkotO0Tf4jh1P8laFh8BOFUr1gklRXT5xfqFRu1hGeO9WyU7kdSRYN0REbvZc13+LX+7ZoYbhX6vcn0mcZN3LpFGtY6PPNUnMbEnVl1Gta3vZh18Pa9Lg61jrag7d91+TYzDXLFlkY3XTqGbqa8/kTGf+Y9jajHwTZenl0YLHYw/o7X1ebvzueoNhbNPvkm46bofp3G9WZR/gt0qZeAverlIjd9XhwWAUdjnnDVpHdr/kJ2dgdlvpwWAUdjnnJ2dgdlvpRkD5biDRkUDIZs/G5EEMe17ZR2Lpp8OSmFg4qJGamlWFlFDTR03glkXPfE+BiZXdJkcNjDPZt0qZeAve5EEMe17ZDDikcnnNXDOia1zBlDrpfTXVwlFjpqSkWlrTnVOqJFbJnf62V0xVowayv0e7rCKgIT3NrjGZjURXmc/KNj90jqLUlDrpfTXVbychnk6chDH+olCiyilvo/2O/zP6qa+RCCY+mbunkSS9kq2xkS6EnQuuUixdlhm58Sr5jdPBriTWivq58i+Oe+LKoCvNhKvHziopdxLDkibBgRjAHzT6rZ1y0i1lqaSBECwcqJVxKDmGp4qoIUNLpx+u9zLjghjQuy8/kCjIcDI2mqC/6TW4ocu07Tobm7XFSD8oopO6oTbUkEDO529IWza63GeFW0u24HmzWfKRyHCrW5yO9X52aBtnPnU9ar9k44CdWFOgPoOIWM6V9HcrW5K+5HR3XQTIY181XsOIwV3RXDySZVfmXneGbVWeXf+OH1gbWzSv0VWEW6a4oFAtW/ur+U2SW5+0VZdtWbi4GZPZX7zFhY/xWC20bIu+Wxa/GYguYsd06Yh/ZwhqBFiIY8NyLmHwYsd0kU/+aYllUE7LYz9xH01ZXpmKO0oLXVOVrEO6X4aB7T7xXCiRpVdhYEJ9X2CnX+R+uE6RYC59WFOtXMKY4lsJXOmbxVG9W+uiA1p/W7OllUpxW1CpKUYAXKiugUutXVS+hkIaXxC5pVOlXZbCIJuWXUuHm6SPXrCL+ZjpWxeVx6KMXxydAIe4XKF/UYWaWi2LwIksddZXr3+rdx5W0XWAes5Tz2y2fVlRhGOlgexPt2KWds9XP2z+c0BZtHWlcW5bS343WZaqFntDWtC0eIz7c1XwqZB0ea/meoNhbNPvtol6ap/xWokTYtPqtol6ap/xgoxkXwvgrZCtZJLXfZRvbA3VA5FjeePYIotzf//YbKXGdji2DavbdGa6/qUMbGywSKuRaU20mZpwas7NwaNDcrbRj6e4eM7G5aHkely1SKuRaU208JVJa37MtZXUeHfpIJLocmzzYJCEaLX04JBEYDXueJN2Xifjl5bHY8zaupjcbL3Ympj9dMzdZJT7dcDaUL24k5l0Mbzvibx/i7vjfFJ+YbsodOh09bvXcp1nq7wye3Jdeb2WiHBc9b1BkydlZr1vfuGgO7VQf3GfGrO9dUeqQ7KbaKOnAbpbZ1ipQ7KbaKOnPro8XqOg6LE7XwyffbOJXUiQsrtnXMOS67WzZ5iF4L3NZcmIyLfjdBeHVb/7ceqISb+tfOKRd7cEfoeQD6IwZwvSUYfFv7k+z4KavgY3z4KavgY3D33PwgIx9Xfuyg8xpXRA1Do1E3Sh2tc6E3Sh2tc6K3VT3mlCaoUW0/5Ty4DY2EtUf3jA3zFLeYibzTlQD33q3EFRL6twa/Km6avzePmpXaZ7a1en2LAIgP2Nh7ECdhmEyLfjdBeHW62UgbCcoqvHhKWNbK7KaHmCh7ECdhmEL6twa/KmXaZ7a1enpamRX4yevatwXnSNzNEfW8KnRtTHYRuea9V6YiOQEM5cbqqgZctvZyyrEM8dbtiRsOgpUD+e2uULSZ6ni+1+RRGc1OrpP/SlTekDTyuQDe7fRNqOTs75RfSQ2tSHP7OQfc0gRrKdLtRPP/OcjMg5UoWhtckSUrCTAM/KTnun3dXHR6umbMnOWqmqAM/KTnunbMnOWqmqa+ZiNySmVuL/PjSnhuo+PduGjeZPRmCI58UBermhIsJtY9mqR8IIW2KiosN1WpqUvsUHY2qKGMekbjqKTcdneM2Si7vjfFJ+iNq2ZUdr7tlbZhp34dr2buN+pN7lgIJ0w9wOeiZ+U9+gf25mG9wMbHNh8N22daZes9NIaDx2RdSsZ11qcdTjcHx+EqtSbVzV0K4FdVPKi6myYjHV9qmCWnjOi6myYjHVoKx5VwnDr6/CXIO5aLGZZqW3hLFtcRS9v9pZPC+eVtsuPPKRYdz4QxOnVLlTRAvYLZjebWL2e5vkc4HsaZbLY0n3pJYIXArxaZbLY0n3OJmOW1Lm+ZvpX4/d4p0VaTjc4p1sb0bgOFv7XVnGVjfBYNeyWz38Wxmk6nF0YBHTUQUhp0toOA9AprdqlQc0opFalBGdoV9clgq1lkZNnxR+l0NQDg3dh05IdBfyiEVLkw40eG5MfhkqeW1OIBlRYeh33he8XcuG0wy4YE91ZwslXpeDIRomZsVoBA5eZd9mzA7oa4pYXhr+bN5ZewPQp/V2VQ3Opht5UQUhp0toOA9AprdqugqZof6S4gv3pGaGLQHmojiQOAIYpqmDdwlYlCCq4QllnNaeAAAglZGoaQAZnvqb0htfooleJRnvpWptFB+hmFFSdiJRihNNUCVzeiNPbCSJXH+Kdia+YMB6TieNZeJq+SbIbCdb7Babpcl7JRnvpWptVhVCoxGJGBS6n06VOxOYmiyh1hJHk/6r9wmyib6xURN9iV+zjyHfWEuZ5R38XHippBWqW9OVyxLEXmejhSIOphpwRiW1o4Jg9yjBmnNTYC1ZjIROmjEpfHpQITThX+V9szGUXPSNADVhZHZtgELBY3pwnTRobHBchSIOphpwCCJBpfx+ch3mnRqYSh/eoamLwBuLkhuuYxwsmYqjMhyLicu12yHmdJe6Uh5hf+q5ZCoUYAmtmy6PW1iemnOX0k1nFnvOyrplN3oh1UxeeH/izRNdWH1Jt989iYJ3uvxEPYPVyH9YWH1Jt989uXbcsJs9KXffu+4zKHD9tu41jHByxWcyAWm1wIA12GtM0FM3s2POzDw8LWuH18Y/f2JO1eNFLWuH18Y/f2JO1eNFimx+26lJ7GPV2UBR7XD5qvU8b2mXsf83dWG+vDA5UFsXyT9BOFnx0i5MOFnx0i5MfFvA18NY1G6jz21vJoBVxSlhrYMswLBbSYTxumFVzoavwzVULYa0vrxN0HqArCdF1HZFpjhDpH6cseNIGYJptslOCm+7dkLr0G9HgIDp23XtffPq6HQsiAPg+XoVhkLim3mvitnToH9eiCvWVn1tiq7IIIOLhyfLxoD1iGu+boYohg7Bg4TZiLe0G4pEho63bYjaidar5I1sh+yuSoyTi8SjcJEZieam8I/Ijcycm5RXi4ifCm+7dkLrNVJYnN/CMFrumPfGcl4rmQa7tmJDl2OvGnmmlRGVgn4NmBiNl4PtmgSG/oIqlc2Q14eSmLiJ5H1SkqqYG5UHi/5QopWClthUjJ1KiuFSx785PtbZscbzOLjbktBLHoTZnMzcPP+9odN9EqjYBtg6CQTYIsZwQuq6C8D3SJy4et3nDfq8a9i1FtW8YbsdVOe4I7cLX1O5RdVuIqe9UKXBQVr9jqwdH8L/zq/iFv//jqhcPKb+QK/DPY3lCqzlQoLjQagoR5fgvLWZF/bp6rIKIL/niKQxTk/en6HfWSbdUam6M8L+a6qeKF//B/SyXn1eTO47ZB9eefHOWLt7lvanUzp7LOSGckFg8N22daZecdTjcHx+CfmyWVNfRrVvigxactGAfbNdt8tygcddMOFKbBZ/lub9ZGN9duk+a35fpOs0XjV8Ydz4QxOn3dXHR6umXO5hH+SgrfJXGN2fxeDGTOCHOPbXHUiCY/K5JduClNr7URKH/dPmWWyHVb/7ceqIGMekbjqKVuL/PjSna+ZiNySmB+4JMQqEOurwKkujLWJmW/+oP2m5Xk+BxGsfbKhikV33W1G8vqMIbO6qxaM3e56vnaOaa46thoPet4FcrlIjd9XhDVpHdr/kzWdj2ghbQWDM14Jj7X1ebvzueKNpmadfMp35mdVbeYwFnldVFo0TlpRQ3IZunlFRy4IMp/ZQy4IMp/ZQ5IavpbFWvG3J1xtjBmck1ZVr8Sr5jdPBriTWivq5URN9iV+z8RRVfgi2MhyLicu1Fy+Xh8fLFy+Xh8fL8F9NW7Gy7mc5XYqLo5Kfa43SfZRvbA3VYJCEaLX0upjcbL3Yeb2WiHBci6xQeNWBN85FZW6Jw8QPhtJdt9cTeXFd4dr2buN+QQsAfsmz9wmyib6xTQK9fcqytwB4iYmwxl960NV0mXYjcAjtq3t9e9jsCHzVog5IqH5+qQBLfIWKhOHX9IAJg+zj0o8ugyK6K4yxgrHD2IiYg17NzpN+hMuxVZ4vjs6RZ5zgio6ZGJoTiOKhraRBijORUJq8gGm0MpcFhtupeZ0Kgt+sG5UHi/5QHZRhfgJSdHakZbzjmXYjcAjtw4xVWXiaOooYWbOk2X9ZXAXDfXyqXTfML5L3YuJ4zZLKaC1uOo/MWYKPZpEsXE2DJIePWCWvZIMmWrC54ngSYAvXspN6c9pZOaMZnHtwiZ6RnPV1eKD2mFJ9uZvtnoFvwp+unTNnzKCblQqEfYa/qG5tiYSrqkNtdoMkqAtz7oFtqyxxA5jime2BuZrTm4V7K5RunJF+vJeHnhJ3QJAOnrR6FJQ/oLdy8pxsmZV/DZyolyaEJIgtphhvaoUapYN035FunhJajJjlmq5Zeos9pUtriYhdouh0bYz4n1l3H5BEoi5vVpPUobRlHY/uouVg/IqNpMVc8IGZrsVtc5ABzcREzY8lyDo++YodyGpMR4pQwxFGWFj7yBWAuG9c3KRTkBcQc3q11BpaaK6xmSZQaoO2L0ndn3++9zLjghjQ2A+lZ5WtWA3ncYmy0HRL2gVawYECvTFjaLGZZqW34p0VaTjcGZuTnkJimpdjoC1qt1JxbgBfC0naW1uhdZ3hbnBoe5NFbYZjdIm2bR1geX9kb7Fd1qU0jvSJ4J/ykbqKWJqUlH6KKZX0lg+Jh5CWmf+FQozem3+CQ4jLnf5+mYSYoFJ8hYESpJN6HX8dqMN4on3ArNl26H0YsVxzpH6cseNICIHNru9PbpYIn1te2AnZXcWRH1FWX8aEtwB4iYmwzAdLYO2eDASLcfmwcAVlZwOrDg3dh05Ikw40eG5Mlgq1lkZNzA7oa4pYlQc0opFaBA5eZd9mUQUhp0toewPQp/V2OAIYpqmD0wy4YE91LQHmojiQZwslXpeDaQAZnvqbAAAglZGo2AnZXcWRtwB4iYmwTQK9fcqyDASLcfmwzAdLYO2ecAVlZwOr",i:"AAABAAIAAQADAAIABAAFAAEABQADAAEAAwAGAAIABgAHAAIABQAIAAMACAAGAAMACQAKAAsACgAMAAsADQAOAAoADgAMAAoADwAQABEAEAASABEAEAATABQAEwAVABQAFgAXABgAGAATABYAGQAaABsAGgAUABsAHAAdAB4AHQAfAB4AIAAhACIAIQAjACIAJAAlACYAJQAnACYAGgASABQAEgAQABQAKAApACoAKQArACoAGwAsABkALAAtABkALgAvADAAMAAxAC4AMgAzADQANAA1ADIANgA3ADMAMwAyADYAOAA3ADkANwA2ADkAOgA4ADsAOAA5ADsAPAA9AD4APQA/AD4AQABBAEIAQQBDAEIAKQAoAAUAKAAIAAUABwAdAAIAHQAcAAIACQALAC0ACwAZAC0ADQARAA4AEQASAA4AGQALABoACwAMABoAEgAaAA4AGgAMAA4ARABFABsARQAsABsAGwAUAEQAFAAVAEQAOAA6AEYAOgBHAEYASABJAEoASQBDAEoASwBMAE0ATQBOAEsATwBQAFEAUABSAFEADwAWABMAEwAQAA8AUABPAB8ATwAeAB8AKwBLAE4ATgAqACsAUwBUAFUAVABWAFUAVwBYAFkAWABaAFkAWABXAFYAVwBVAFYAWwBcAF0AXQBeAF8AYABhAGIAYQBjAGIAZABlAGYAZQBnAGYAaABpAGoAaQBrAGoAbABtAGgAbQBpAGgAbgBvAHAAbwBxAHAAcgBzAHQAcwB1AHQAcABxAHQAcQByAHQAdgB3AHgAdwB5AHgAdgB6AHcAegB7AHcAfABzAH0AcwByAH0AfgB/AIAAfwCBAIAAbwBuAIIAbgCDAIIAhACFAIYAhQCHAIYAhACGAIgAhgCJAIgAaQCKAGsAigCLAGsAdQCMAHQAjACNAHQAdACNAHAAjQCOAHAAcACOAG4AjgCPAG4AgwBuAJAAbgCPAJAAaQBtAIoAbQCRAIoAkgCTAJQAkwCVAJQAlACWAJIAlgCXAJIAmACZAJoAmQCbAJoAmQCcAJsAnACdAJsAngCfAKAAnwChAKAAngCgAJoAoACYAJoAogCjAKQAowClAKQApgCkAKcApAClAKcAqACpAKoAqQCrAKoArACqAK0AqgCrAK0ArgCsAK8ArACtAK8AsACuALEArgCvALEAsgCzAKIAswCjAKIAhwCFAKEAhQCgAKEAnACZAIkAmQCIAIkAoACFAJgAhQCEAJgAmQCYAIgAmACEAIgAdgB4AJIAeACTAJIAkgCXAHYAlwB6AHYAgQB/ALQAfwC1ALQAcQC2AHIAtgB9AHIAtwC4ALkAuAC6ALkAbwCCALsAggC8ALsAagC9AGgAvQC+AGgAbABoAL8AaAC+AL8AcQBvALYAbwC7ALYAtAC1ALcAtQC4ALcAwADBAMIAwQDDAMIAwwDEAMIAxADFAMIAvgC9AMIAvQDAAMIAxQC/AMIAvwC+AMIAtAC2AIEAtgC7AIEAtgC0AH0AtAC3AH0AfQC3AHwAtwC5AHwAvACAALsAgACBALsAxgDHAMUAxwC/AMUAyADAAMkAwAC9AMkAygDLAMwAywDNAMwAzgDPAMoAzwDLAMoA0ADRANIA0QDTANIAygDMANQAzADVANQAygDUAM4A1ADWAM4A0QDQANcA0ADYANcA2QDaANsA2gDcANsA3QDeANkA3gDaANkA3wDgAOEA4ADiAOEA4wDYAOQA2ADlAOQA5gDnAOgA5wDpAOgA6gDrAOwA6wDtAOwA6gDsAO4A7ADvAO4A6ADwAOYA8ADhAOYA4QDwAN8A8ADxAN8A8gDzANIA8wD0ANIA0gD0ANAA9AD1ANAA2ADQAOUA0AD1AOUA9gDiAPcA4gD4APcA+QD6APsA+gD8APsA+wD9APkA/QD+APkA5wD/AOkA/wAAAekAzQDLAAEBywACAQEBAwEEAQEBBAHNAAEB8wAFAfQABQEGAfQA9AAGAfUABgEHAfUA9QAHAeUABwEIAeUA5QAIAeQACAEJAeQAywDPAAIBzwAKAQIB7QDrAAAB6wDpAAAB7wDxAO4A8QDwAO4A6QDrAOgA6wDqAOgA8ADoAO4A6ADqAO4A2QDbAPkA2wD6APkA/gDdAPkA3QDZAPkAAgELAQEBCwEMAQEBAQEMAQMBDAENAQMBBQEOAQYBDgEPAQYBDwEQAQYBEAEHAQYBEAERAQcBEQEIAQcBEQESAQgBEgEJAQgBCgETAQIBEwELAQIB4wAUAdgAFAHXANgA1wAVAdEAFQH3ANEAFgH7ABcB+wD8ABcBGAHyANMA8gDSANMA1ADVABkB1QAaARkBGwHWABkB1gDUABkBFgEZARwBGQEaARwBFwEbARYBGwEZARYBHQEeAR8BHgEVAR8B4AAgAeIAIAH4AOIA9wAVAfYAFQEeAfYA0wDRAPgA0QD3APgAGAHTACAB0wD4ACABFQHXAB8B1wAUAR8BIQEiARcBIgEbARcB4QDiAOYA4gD2AOYA+wAWAf0AFgEcAf0A/wDnAB0B5wAeAR0B5gD2AOcA9gAeAecAIwEkASUBJAEmASUBIwEnASQBJwEoASQBKQEqASsBKgEsASsBLQEuAS8BLgEwAS8BLQEvATEBLwEyATEBKgEpATMBKQE0ATMBNQEzATYBMwE3ATYBOAE5AToBOQE7AToBOgE8ATgBPAE9ATgBPgEqATUBKgEzATUBPgE/ASoBPwEsASoBNwFAATYBQAFBATYBQgFDAUQBQwFFAUQBRgFHAUgBRwFJAUgBRAFFAUoBRQFLAUoBMAEuAUEBLgE2AUEBMgE/ATEBPwE+ATEBNgEuATUBLgEtATUBPgE1ATEBNQEtATEBIwElATgBJQE5ATgBPQEnATgBJwEjATgBTAFNAU4BTQFPAU4BUAFRAUwBUQFNAUwBUgFTAVQBUwFVAVQBVgFXAVgBVwFZAVgBWgFbAVYBWwFXAVYBTwFcAU4BXAFdAU4BQgFEAV4BRAFfAV4BYAFCAWEBQgFeAWEBYgFjAWQBYwFlAWQBYgFkAWYBZAFnAWYBZgFnAUgBZwFoAUgBSAFoAUYBaAFpAUYBSgFqAUQBagFfAUQBawFsAW0BbAFuAW0BNAEpAW0BKQFvAW0BcAFxAXIBcQFzAXIBdAF1AXABdQFxAXABcgF2AXABdgF3AXABcAF3AXQBdwF4AXQBeQF6AXsBegFuAXsBbwEpAXwBKQErAXwBegE0AW4BNAFtAW4BbwF9AW0BfQFrAW0BfAF+AW8BfgF9AW8BbAF/AW4BfwF7AW4BgAFeAYEBXgFfAYEBYQFeAYIBXgGAAYIBgwFkAYQBZAFlAYQBhQFnAYMBZwFkAYMBhgFoAYUBaAFnAYUBhwFpAYYBaQFoAYYBgQFfAYgBXwFqAYgBdgE8AXcBPAE6AXcBOwF4AToBeAF3AToBegF5ATcBeQFAATcBegE3ATQBNwEzATQBiQGKAYsBigGMAYsBjQGOAYkBjgGKAYkBjwGQAZEBkAGSAZEBjwGTAZABkwGUAZABlQGWAZcBlgGYAZcBmQGaAZsBmgGcAZsBmQGbAZ0BmwGeAZ0BnwGgAaEBoAGiAaEBowGkAaUBpAGmAaUBpwGhAagBoQGpAagBqgGrAawBqwGtAawBrQGuAawBrgGvAawBsAGfAacBnwGhAacBsAGxAZ8BsQGyAZ8BqAGpAbMBqQG0AbMBtQG2AbcBtgG4AbcBmgGoAZwBqAGzAZwBngGxAZ0BsQGwAZ0BqAGaAacBmgGZAacBsAGnAZ0BpwGZAZ0BrAGPAaoBjwGRAaoBrAGvAY8BrwGTAY8BuQG6AbsBugG8AbsBvQGgAbIBoAGfAbIBvgGtAb8BrQGrAb8BwAHBAcIBwQHDAcIBrgGtAcQBrQG+AcQBqQHFAbQBxQHGAbQBoQGiAakBogHFAakBxwHIAckByAHKAckByQHKAcsBygHMAcsByQHNAccBzQHOAccBzwHQAdEB0AHSAdEB0wHUAdUB1AHWAdUB1QHXAdMB1wHYAdMB2QHaAdMB2gHUAdMB2wHcAd0B3AHeAd0B3wHgAeEB4AHiAeEBUAFMAeMBTAHkAeMB5QHjAeYB4wHkAeYB5wHoAekB6AHqAekB6gHrAewB6wHtAewB7gHkAU4B5AFMAU4BXQHvAU4B7wHuAU4BXQHwAfEB8AHyAfEB8wH0AVYB9AFaAVYBWAH1AVYB9QHzAVYBUgH2AVgB9gH1AVgBVAH3AVIB9wH2AVIB+AH5AfoB+QH7AfoB+wH8AfoB/AH9AfoB3wHhAf4B4QH/Af4BAAL+AQEC/gECAgECAwIEAt8BBALgAd8BBQIGAgcCBgIIAgcCCQIKAgsCCgIMAgsCDQIOAgkCDgIKAgkCDwIQAmcAEAJmAGcAEQISAmAAEgJhAGAAEwIUAg8CFAIQAg8CZQAVAmcAFQIWAmcAZwAWAg8CFgIRAg8CDwIRAhMCEQJgABMCWAAXAloAFwIYAloAGQIaAhsCGgIcAhsCGwJdABkCXQAdAhkCHgIfAhwCHwIbAhwCFAITAiACEwIhAiACYgAhAmAAIQITAmAAXQAbAlsAGwIfAlsANwA4ACICOABGACICFwA0ADMAMwAYABcAPgA/AFIAPwBRAFIAMwA3ABgANwAiAhgATAAwAC8ALwBNAEwAFQATACICEwAYACICRQBEAEcARABGAEcAIgJGABUARgBEABUAIwIkAiUCJAImAiUCJAJjACYCYwBhACYCJwIoAikCKAIqAikCKwIsAi0CLAIuAi0CLwIwAjECMAIyAjECKwIzAjQCMwI1AjQCNgI3AjgCNwI5AjgCNwI2AjoCNgI7AjoCPAI9Aj4CPQI/Aj4CPQI8AkACPAJBAkACQAJBAkICQQJDAkICKgJEAkUCRAJGAkUCRwJIAkkCSAJKAkkCSwJMAkcCTAJIAkcCTAJLAk0CSwJOAk0CTwJQAlECUAJSAlECUwJUAk8CVAJQAk8CLAIrAlUCKwI0AlUCVgJXAkYCVwJFAkYCWAIEAFkCBAABAFkCWgJZAgAAWQIBAAAAWwJcAl0CXAJeAl0CXwJgAmECYAJiAmECAABbAloCWwJdAloCYwJkAiQAZAIlACQAZQJmAmcCZgJoAmcCXAJpAl4CaQJqAl4CHQJrAmwCawJtAmwCbgJvAnACbwJxAnACcgJzAmACcwJiAmACdAJ1Au4BdQLkAe4BdgJ3AngCdwJ5AngCegLqAXsC6gHsAXsCfALpAXoC6QHqAXoCfQJ+An8CfgKAAn8CgQKCAvIBggLxAfIB9QGDAvMBgwKEAvMBhQKGAmQAhgJlAGQAhwKIAokCiAKKAokCiwKMAocCjAKIAocCjQKOAosCjgKMAosCjwKQApECkAKSApECkwKUApEClAKVApECkQKVAo8ClQKWAo8ClwKYApYCmAKPApYCmQKVApoClQKUApoCmwKWApkClgKVApkCnAKXApsClwKWApsCIwCdAiIAnQKeAiIAQQCfAkMAnwJKAEMAoAKhAiEAoQIjACEAQgBDAKICQwBJAKICagJpAnICaQJzAnICowKhAkgAoQJJAEgAoQKjAiMAowKdAiMAWQCkAqUCpAJZAFoApAJaAKYCWgAYAqYCFwJYAKcCWABWAKcCoQKgAkkAoAKiAkkAqAIiAKkCIgCeAqkCIAAiAKoCIgCoAqoCqwKlAjMCpQKkAjMCMwKkAjUCpAKmAjUCFQJlAKwCZQCGAqwCEgKtAmEArQImAmEArQKuAiYCrgIlAiYCEgIRAq8CEQIWAq8CrQISArACEgKvArACsAKxAq0CsQKuAq0CFQKyAhYCsgKvAhYCsAKvArMCrwKyArMCswK0ArACtAKxArACtQK2ArICtgKzArICtgK3ArMCtwK0ArMCuAINArkCDQIJArkCugK7ArwCuwK9ArwCvgK/AsACvwLBAsACwgK+AsMCvgLAAsMCxALFAsYCxQLHAsYCyALCAskCwgLDAskCvAK9AsoCvQLLAsoCzALNAr4CzQK/Ar4CvgLCAswCwgLOAswCzwLQAjkC0AI4AjkCvALRAroC0QLSAroCygLTArwC0wLRArwCMALUAjIC1ALVAjIC1gLXAtgC1wLZAtgC2ALZAtoC2QLbAtoC0QLcAtIC3ALdAtIC0wLeAtEC3gLcAtEC3wLgAtUC4AIyAtUC4ALfAuEC3wLiAuEC4wJfAOQCXwDjAmsC1wLlAtkC5QLmAtkC5wLbAuYC2wLZAuYC6ALpAuoC6QLrAuoC7ALtAu4C7QLvAu4C8ALvAvEC7wLtAvEC8gLzAvQC8wL1AvQCXgD2AvcC9gL4AvcC+QL6AuQC+gLjAuQC6QL5AusC+QLkAusC8gLcAvsC3ALeAvsC8AL8Au8C/AL9Au8C/gLuAv0C7gLvAv0C/QL/Av4C/wIAA/4C/AIBA/0CAQP/Av0CAgPeAQMD3gHcAQMDBAPWAQUD1gHUAQUDyAHHAQYDxwEHAwYD1gEEAwgDBAMJAwgDCgMLAwIDCwPeAQIDDAMNAw4DDQMPAw4DEAMRAxIDEQMTAxIDFAMVAxYDFQMXAxYDFgMDAhQDAwLfARQDGAPIARkDyAEGAxkD0AHPARoDzwEbAxoDHAPQAR0D0AEaAx0DHgMfAyADHwMhAyADGgMbAyIDGwMjAyIDHQMaAyQDGgMiAyQDDwMlAx4DJQMfAx4DDQMmAw8DJgMlAw8DJwMlAygDJQMmAygDEgMTAykDEwMqAykDEwMrAyoDKwMsAyoDEQMtAxMDLQMrAxMDLgMvAzADLwMxAzAD+wEvA/wBLwMuA/wBMgPKARgDygHIARgDygEyA8wBMgMzA8wBNAM1A5oCNQOZApoCNgObAjUDmwKZAjUDNwOcAjYDnAKbAjYDsgIVAjgDFQKsAjgDsgI4A7UCOAM5A7UCNwM2AzoDNgM7AzoDPAM9A9UBPQPXAdUB1QHWATwD1gEIAzwDfwI+A30CPgM/A30CQANBA38CQQM+A38CxQJCA8cCQgNDA8cCRANCA7kCQgPFArkCRQNEAwkCRAO5AgkCCQILAkUDCwJGA0UDRwNIA30CSAN+An0CSQNKA0sDSgNMA0sDTQPrAegB6wHqAegB6wFOA+0BTgNPA+0B7QFPA0kDTwNKA0kD7AHtAVAD7QFJA1ADAAIFAhQDBQIVAxQD/gH/AQIC/wFRAwIC/gEAAt8BAAIUA98BBQIAAgYCAAIBAgYCBwJSAwUCUgMVAwUCUwM/A1QDPwM+A1QDVQNDA1YDQwNCA1YDQgNEA1YDRANXA1YDRANFA1cDRQNYA1cDRQNGA1gDRgNZA1gDWgNbA1MDWwM/A1MDTwFNAVwDTQFdA1wDXgNVAV8DVQFTAV8DXwNTAWADUwFZAWADYANZAWEDWQFXAWEDYQNXAWIDVwFbAWIDXANjA08BYwNcAU8BZANlA7kBZQNmA7kBuQFmA7oBZgNnA7oBaANpA2oDaQNrA2oDawNsA2oDbANtA2oDbANuA20DbgNvA20DbgNwA28DcANxA28DcgNzA2QDcwNlA2QD6wFNA04DTQN0A04DMQB1A3YDdgMuADEANQB3A3gDeAMyADUAMgB4A3kDeQM2ADIANgB5A3oDegM5ADYAegN7AzkAewM7ADkAfAN9AzwAfQM9ADwAQQBAAH4DQAB/A34DfQOAAz0AgANhAj0AfgOBA0EAgQOfAkEAgAOCA2ECggNfAmECgwOEA4UDhAN2AoUDhgNzA4cDcwOIA4cDiQOEA2UDhANmA2UDdwJ2AokDdgKEA4kDdwKJA4oDiQOGA4oDiQNlA4YDZQNzA4YDiwOMA24DjANwA24D+wH5AYsD+QGMA4sDjQOOA48DjgMxA48DaQONA2sDjQOPA2sDbANrA5ADawOPA5ADkAOPAy8DjwMxAy8DkAOLA2wDiwNuA2wDLwP7AZAD+wGLA5ADkQOMAZIDjAGKAZIDkgOKAZMDigGOAZMDkgOUA5EDlAOVA5EDkwOWA5IDlgOUA5IDlwOYA5kDmAOaA5kDlwOZA5sDmQOcA5sDnQOeA58DngOgA58DnQO2AZ4DtgGYAZ4DnwOhA50DoQOiA50DtgGdA7gBnQOiA7gBtgG1AZgBtQGXAZgBnwOgA6MDoAOkA6MDpQOmA5UDpgORA5UDowOnA58DpwOhA58DwAGlAcEBpQGmAcEBowGoA6QBqAOpA6QBqgOrA5wDqwObA5wDrANkA7sBZAO5AbsBaANqA60DagOuA60DrgNqA68DagNtA68DbQNvA68DbwOwA68DbwNxA7ADcQOxA7ADsgNyA6wDcgNkA6wDXQOzA4ABswOCAYABtANrAbUDawF9AbUDtQN9AbYDfQF+AbYDcQG3A3MBtwO4A3MBdQG5A3EBuQO3A3EBugNsAbQDbAFrAbQDfwFsAbsDbAG6A7sDtQO8A7QDvAO9A7QDvAO1A74DtQO2A74DQwG4A0UBuAO3A0UBRQG3A0sBtwO5A0sBvQNJAbQDSQG6A7QDugNJAbsDSQFHAbsDvQNmAUkBZgFIAUkBvgNjAbwDYwFiAbwDvANiAb0DYgFmAb0DvwOlAMADpQCjAMADpwClAMEDpQC/A8EDwgOrAMMDqwCpAMMDrQCrAMQDqwDCA8QDrwCtAMUDrQDEA8UDxQPGA68AxgOxAK8AwAOjAMcDowCzAMcDpAHIA6YByAPJA6YByAOkAcoDpAGpA8oDiQGLAZcDiwGYA5cDiQGXA40BlwObA40ByQOWAaYBlgHBAaYByQOeA5YBngOYAZYBoAPIA6QDyAPKA6QDyAOgA8kDoAOeA8kDwQGWAcMBlgGVAcMBigCiAIsAogCkAIsAiwCkAMsDpACmAMsDjACoAI0AqACqAI0AjQCqAI4AqgCsAI4ArACuAI4ArgCPAI4ArgCwAI8AsACQAI8AkQCyAIoAsgCiAIoAmgCbALUAmwC4ALUAwQCWAMMAlgCUAMMAlACVAMMAlQDEAMMAmwCdALgAnQC6ALgAnwCeAH4AngB/AH4AngCaAH8AmgC1AH8AzAMMAc0DDAELAc0DzgMNAcwDDQEMAcwDzwMPAdADDwEOAdAD0QMQAc8DEAEPAc8D0gMRAdEDEQEQAdED0wMSAdIDEgERAdIDzQMLAdQDCwETAdQD2wHdAcAC3QHDAsACwALBAtsBwQLVA9sBKwMtA7oCLQO7AroCLAMrA9ICKwO6AtIC3QLWA9IC1gMsA9ICKgMsA9cDLAPWA9cD3QHeAdgD3gELA9gD2QPaA9sD2gPcA9sD2wPcA90D3APeA90D3QPeA98D3gPgA98D3wPgA+ED4APiA+ED4wPkA+UD5APmA+UD5wPjA+gD4wPlA+gD6QPqA+gD6gPnA+gD6wPsA+0D7APuA+0D7wPwA/ED8APyA/ED8wP0A/UD9AP2A/UD9wPcA/gD3APaA/gD+QPeA/cD3gPcA/cD+gPgA/kD4APeA/kD+wPiA/oD4gPgA/oD5APjA/wD4wP9A/wD/QPjA/4D4wPnA/4D/gPnA/8D5wPqA/8D4gP7A+oD+wP/A+oD7AMABO4DAAQBBO4D8APvAwIE7wMDBAIE9APzAwQE8wMFBAQE8wMGBAUEBgQHBAUECAQJBAoECQQLBAoEDAQjAg0EIwIlAg0E+AMMBPcDDAQNBPcDDQQlAg4EJQKuAg4E9wMNBPkDDQQOBPkD+QMOBPoDDgQPBPoDDgSuAg8ErgKxAg8E+gMPBPsDDwQQBPsDDwSxAhAEsQK0AhAEIAMhAxEEIQMSBBEEEQQSBP0DEgT8A/0DEwQUBBEEFAQgAxEE/gMTBP0DEwQRBP0DFQS3AhMEtwIUBBME/wMVBP4DFQQTBP4DtwIVBLQCFQQQBLQC+wMQBP8DEAQVBP8D+AIWBPcCFgQXBPcCAAQXBAEEFwQWBAEE6ALqAhgE6gIZBBgEGAQZBAMEGQQCBAME7QLsAhoE7AIbBBoEGgQbBAUEGwQEBAUE8QLtAhwE7QIaBBwEBQQHBBoEBwQcBBoE9AL1Ah0E9QIeBB0ECQQIBB8ECAQgBB8EHwQgBNYDIATXA9YDIQQiBCMEIgQkBCMEJQR2A3UDdQMmBCUEfgN/AyQEfwMjBCQEJAQnBH4DJwSBA34DKAQpBCoEKQQrBCoEKgQrBCwEKwQtBCwELAQtBC4ELQQvBC4ELgQvBDAELwQxBDAEMgQzBDQEMwQ1BDQELAR5A3gDeAMqBCwELgR6A3kDeQMsBC4EMAR7A3oDegMuBDAENAR9A3wDfAMyBDQEKgR4A3cDdwMoBCoEKQQ2BCsENgQ3BCsEKwQ3BC0ENwQ4BC0ELQQ4BC8EOAQ5BC8ELwQ5BDEEOQQ6BDEEMwQ7BDUEOwQ8BDUEPQRUACEEVAAiBCEEIgQ+BCQEPgQnBCQEPwRABEEEQARCBEEEQwREBCkERAQ2BCkEJQQmBEUEJgRGBEUEwgLIAs4CyAJHBM4CSARJBEoESQRLBEoESgRLBEwESwRNBEwETgRPBFAETwRRBFAEUARRBFIEUQRTBFIEUgRTBFQEUwRVBFQEVgRXBFgEVwRZBFgEOAJIBDYCSARKBDYCTAQ7AkoEOwI2AkoEPgJOBDwCTgRQBDwCUgRBAlAEQQI8AlAEVARDAlIEQwJBAlIEWARZBCkCWQQnAikCVwJWBEUCVgRYBEUCSAQ4AloEOALQAloE1wLWAlsE1gJcBFsEKgJFAikCRQJYBCkC4QJdBOACXQReBOACSQIvAkcCLwIxAkcCUQJcBE8CXATWAk8CTwLWAlMC1gLYAlMCVQJfBCwCXwRgBCwCLAJgBC4CYARhBC4CMQIyAl4EMgLgAl4EXQROAl4ETgJLAl4EYARiBGEEYgRjBGEEZARWAmIEVgJGAmIEXwRkBGAEZARiBGAESAJAAkoCQAJCAkoCTAI9AkgCPQJAAkgCTQI/AkwCPwI9AkwCUAI3AlICNwI6AlICNwJQAjkCUAJUAjkCRAJjBEYCYwRiBEYCgQJlBIICZQRmBIICzQLLAr8CywK9Ar8C9AHzAWcE8wGEAmcEPgQiBFMAIgRUAFMAaARpBGsAaQRqAGsAyABqBMAAagTBAMAAvwDHAGwAxwBrBGwAlgBsBJcAbARtBJcAbABrBG0AawRuBG0AywNoBIsAaARrAIsAbQBuBJEAbgRvBJEAcARxBJMAcQSVAJMAlwBtBHoAbQR7AHoAcgRzBLIAcwSzALIAeQBwBHgAcASTAHgAaQTJAGoAyQC9AGoAxAB0BMUAdATGAMUABAF1BM0AdQTMAM0A/QB2BP4AdgR3BP4AzAB1BNUAdQR4BNUAeQR6BNYAegTOANYAegR7BM4AewTPAM4AfAR9BPoAfQT8APoA/gB3BN0AdwTeAN0AzwB7BAoBewR+BAoB3AB8BNsAfAT6ANsAfgR/BAoBfwQTAQoB1QB4BBoBeASABBoB/AB9BBcBfQQhARcBgASBBBoBgQQcARoBIgF5BBsBeQTWABsBHAGBBP0AgQR2BP0AggSDBDsBgwR4ATsBPAGEBD0BhASFBD0BdQGGBLkDhgSHBLkDQwFCAYgEQgFgAYgEiQSCBDkBggQ7ATkBPQGFBCcBhQQoAScBJgGJBCUBiQQ5ASUBXAGKBF0BigTwAV0BiwSMBEoBjARqAUoBjQSOBHMBjgRyAXMBgwSPBHgBjwR0AXgBjgSQBHIBkAR2AXIBjwSGBHQBhgR1AXQBdgGQBDwBkASEBDwBiwGMAZEEjAGSBJEErgGTBK8BkwSUBK8BqwOVBJsDlQSNAZsDlgSXBKoBlwSrAaoBrwGUBJMBlASUAZMBmASZBI4BmQSTA44BkgGWBJEBlgSqAZEBcgOyA5oEsgObBJoEnASdBJgDnQSaA5gDvwGrAZ4EqwGXBJ4ExAGfBK4BnwSTBK4BKAMmA6AEJgPZAaAEGwPNASMDzQGhBCMDzwHOARsDzgHNARsDywGhBMkBoQTNAckB0QGiBM8BogTOAc8BxwHOAQcDzgGiBAcDJgMNA9kBDQPaAdkB0wHYAdkB2AGgBNkBowTVAxED1QMtAxED1QOjBNsBowTcAdsBhQN2AqQEdgKlBKQESwOmBEkDpgRQA0kDRgRABI4CQASnBI4CUwLYAqgE2ALaAqgEqASpBFMCqQRUAlMCNQQ8BKoEPASrBKoErARAA4ACQAN/AoAC8QGCAq0EggKuBK0ErwSwBLEEkwKRApICRQRGBI0CRgSOAo0CkAKyBJICswS0BLEEmAKXAoUClwKGAoUCrAKGApwChgKXApwCtQSqBLYEqgSrBLYE8wK3BPUCtwS4BPUCuQS6BLsEugQeBLsE8wK8BLcEvQT8AvACvgSjBBADowQRAxADAwPcAb4E3AGjBL4EvwTaAQwD2gENAwwDBQPUAb8E1AHaAb8EnAI3A6wCNwM4A6wCOAM3AzkDNwM6AzkDRwNbA8AEWwPBBMAEVAM+A8IEPgNBA8IEwQRbA8MEWwNaA8MEXQNNAbMDTQFRAbMDigRcAcQEXAFjA8QEmgSIA3IDiANzA3IDhAODA2YDgwNnA2YDigOGA8UEhgOHA8UEpgOSBJEDkgSMAZEDmQTGBJMDxgSWA5MDYwOIAcQEiAHHBMQEhwTIBLkDyARLAbkDyQSNBLgDjQRzAbgDiATJBEMByQS4A0MByASLBEsBiwRKAUsBkQScBIsBnASYA4sBlQSYBI0BmASOAY0BbwRyBJEAcgSyAJEAxACVAHQElQBxBHQEwQBqBJYAagRsBJYAwQK7AtUDuwItA9UDygTLBMwEywTNBMwEywTKBLkEygS6BLkE9QK4BB4EuAS7BB4ENgRkADcEZABmADcENwRmADgEZgAQAjgEOAQQAjkEEAIUAjkEOQQUAjoEFAIgAjoEOwQeAjwEHgIcAjwEtgSrBM4EqwQaAs4EpwJWAD0EVgBUAD0EcQKMAqcEjAKOAqcERASFAjYEhQJkADYEzwRJBFoEzwTQBEkEqQTPAlQCzwI5AlQCvwK9AsECvQK7AsEC0QTSBJAC0gSyBJACRARDBNEEQwTSBNEE0QSYAkQEmAKFAkQEkAKPAtEEjwKYAtEE0wRNBNQETQRLBNQESQTQBEsE0ATUBEsE1QRTBNYEUwRRBNYETwTXBFEE1wTWBFEE2ARVBNUEVQRTBNUE2QQoAtoEKAInAtoE2gQnAtsEJwJZBNsE2gR5AtkEeQLcBNkE1QR7AtgEewLdBNgE1gR6AtUEegJ7AtUE1wR8AtYEfAJ6AtYEVwTeBFkE3gTbBFkE2wR4AtoEeAJ5AtoE0ASAAtQEgAJ+AtQE1AR+AtMEfgJIA9ME3gTfBNsE3wR4AtsEZwSEAuAEhALhBOAE4gTEAuMExALGAuMEzwSsBNAErASAAtAEyQLiBMgC4gTjBMgCBAIDAuQEAwLlBOQE5ATlBAkD5QQIAwkDDgINAuYEDQLnBOYE5gTnBAoD5wQLAwoD/AHoBP0B6ATpBP0BMwMyA+oEMgPrBOoE6wQuA+oELgMwA+oE6AT8AesE/AEuA+sEGAPoBDID6ATrBDID7ATtBDwD7QQ9AzwDPAMIA+wECAPlBOwEAwIWA+UEFgPsBOUE7gTnBLgC5wQNArgC4QSEAu8EhAKDAu8E6AQYA+kEGAMZA+kEFgMXA+wEFwPtBOwEmgLhBDQD4QTvBDQD2AMLA+4ECwPnBO4E4AThBJQC4QSaApQCRwTIAuMESQRIBFoElAKTAuAEsARmBGUE7wHwBO4B8AR0Au4B8ATxBHQC8QTyBHQC8QTwBPME8AT0BPME8gT1BHQC9QR1AnQC9gT3BPgE9wT5BPgE+gT7BPwE+wT9BPwE/AT9BP4E/QT/BP4E8gQABfUEAAUBBfUEAgX2BAMF9gT4BAMFrwQEBWYEZgSwBK8EZgQFBYICBQWuBIICLQKrAisCqwIzAisCBgUCBQcFAgUDBQcFAQUABfoEAAX7BPoECAX+BAkF/gT/BAkFiQKKAvYEigL3BPYECgULBQYFBgUJBQoF+wTxBP0E8QTzBP0E8QT7BPIE+wQABfIEBgULBYkCCwUMBYkC+QT3BA0F9wSKAg0FDgUPBWUCDwVmAmUCJgAnAFgCJwAEAFgCZwJoAmMCaAJkAmMCQQRCBBAFQgQRBRAFzgQaAhIFGgIZAhIFEgUZAmwCGQIdAmwCDwUxAGYCMQAwAGYCJQArACcAKwApACcAHAAeAFsCHgBcAlsCJwApAAQAKQAFAAQAYgI/AGECPwA9AGECAgAcAAAAHABbAgAAPAQcAqsEHAIaAqsEZgIwAGgCMABMAGgCUQBzAk8AcwJpAk8AgAN9AxMFfQM0BBMFTwBpAh4AaQJcAh4AJQBkAisAZAJLACsAXQBfAB0CXwBrAh0CJgRCBEYEQgRABEYEbwKIAnECiAKMAnECPwBiAlEAYgJzAlEATABLAGgCSwBkAmgC1AJtAtUCbQJrAtUC1QJrAt8CawLjAt8C9ALdAvIC3QLcAvICFAUVBR0EFQUWBR0E+gLiAuMC4gLfAuMC+wK8BPICvATzAvIC/wLlAgAD5QIXBQAD5QL/AuYC/wIBA+YC5gIBA+cCAQMYBecCDwUOBREFDgUQBREFDwURBXUDdQMxAA8FFQUUBRkFFAUaBRkFygQaBboEGgUUBboE3QL0AhYF9AIdBBYFugQUBR4EFAUdBB4EJgR1AxEFEQVCBCYENAQ1BBMFNQSqBBMFggOAAxsFgAMTBRsFGwUTBbUEEwWqBLUEHAWnBD8EpwRABD8E/AK9BAEDvQQYBQEDcAJxAhwFcQKnBBwFDQWKAm8CigKIAm8CWwQXBdcCFwXlAtcCXANdA4EBXQOAAYEBhAFeA4MBXgNfA4MBgwFfA4UBXwNgA4UBhQFgA4YBYANhA4YBhgFhA4cBYQNiA4cBYwNcA4gBXAOBAYgBuwGVA6wDlQOUA6wDpQOVA7wBlQO7AbwBrgOhA60DoQOnA60DrwOiA64DogOhA64DuAGiA7ADogOvA7ADsQO3AbADtwG4AbADsgOWA5sElgPGBJsElAOWA6wDlgOyA6wDwANPA78DTwNOA78DTgN0A78DdAPBA78DCAIGAsMDBgLCA8MDBgIBAsIDAQLEA8IDAQICAsQDAgLFA8QDAgJRA8UDUQPGA8UDHQVMA8cDTANKA8cDxwNKA8ADSgNPA8ADzQNTA8wDUwNUA8wDzANUA84DVAPCBM4D0ANVA88DVQNWA88DVgNXA88DVwPRA88DVwNYA9EDWAPSA9EDWANZA9IDWQPTA9IDwwRaAx4FWgPUAx4F1ANaA80DWgNTA80DiAFqAccEagGMBMcExwOzAB0FswBzBB0F1AMTAR4FEwF/BB4FHQMUBBwDFAS3AhwD7wFdAa0EXQHxAa0E9AQfBfMEHwUgBfME/QTzBP8E8wQgBf8ECgUJBSAFCQX/BCAFCAUJBQcFCQUGBQcFRwIxAksCMQJeBEsCXgBdAFwAXAD2Al4AxAGaA58EmgOdBJ8ExAG+AZoDvgGZA5oDvwGcA74BnAOZA74BngSqA78BqgOcA78BxQHAAcYBwAHCAcYBpQHAAaIBwAHFAaIBoAGjAaIBowGlAaIBowGgAagDoAG9AagDtwK2AhwDtgIhBRwDIAMUBCQDFAQdAyQD1wMiBSoDIgUpAyoD3QHYA8MC2APJAsMC4gTJAu4EyQLYA+4EuALEAu4ExALiBO4ExAK4AsUCuAK5AsUCXwBeAOQCXgDrAuQCXgD3AusC9wLqAusC9wIXBOoCFwQZBOoCAgQZBAAEGQQXBAAEAgQABPADAATsA/AD8APsA/ID7APrA/IDWAFZAVIBWQFTAVIBgwL1ASMF9QH2ASMF7wSDAiQFgwIjBSQFJAUlBe8EJQU0A+8ENQM0AyYFNAMlBSYFJgU7AzUDOwM2AzUD0gHQASEF0AEcAyEFdQInBeQBJwXmAeQBfQI/A0cDPwNbA0cD3wSlBHgCpQR2AngCigPcBHcC3AR5AncCdQL1BCcF9QQoBScF9QQBBSgFAQUpBSgFKgUpBfoEKQUBBfoEUAPdBOwB3QR7AuwBKwUqBfwEKgX6BPwELAUrBf4EKwX8BP4ELQUsBQgFLAX+BAgFLgUtBQcFLQUIBQcFBwUDBS4FAwUvBS4FAwX4BC8F+AQwBS8F+AT5BDAF+QQxBTAFMQX5BDIF+QQNBTIFbwJuAg0FbgIyBQ0FKQQoBEMEKAQzBUMENAXSBDMF0gRDBDMF0gQ0BbIEjQKLArMEhwK0BIsCtASzBIsCrwQMBQQFDAULBQQFCgUgBR8FHwU1BQoFrQT0BO8B9ATwBO8BrQSuBPQErgQfBfQENQUfBQUFHwWuBAUFNQUEBQsFCwUKBTUFZgQEBQUFBAU1BQUFtASHAgwFhwKJAgwFDAWvBLQErwSxBLQEiQL2BAYF9gQCBQYFJQMnAx8DJwMiBR8D1wMhAyIFIQMfAyIFIQPXAxIE1wMgBBIEEgQgBPwDIAQIBPwDCgTkAwgE5AP8AwgE5AMKBOYDCgQ2BeYDDgMPAzcFDwMeAzcFIAMkAx4DJAM3BR4DFgUfBN0CHwTWA90CFQUJBBYFCQQfBBYFCQQVBQsEFQUZBQsE4QPiA+kD4gPqA+kD9QM4BfMDOAUGBPMDOQU2BQsENgUKBAsEOgU7BRoFOwUZBRoFzAQ6BcoEOgUaBcoEOwU5BRkFOQULBBkFPAU9BT4FPQU/BT4FPgU/BUAFPwVBBUAFQAVBBUIFQgVBBUMFQwVBBUQFQQVFBUQFRAVFBUYFRQVHBUYFRgVHBUgFSAVHBUkFRwVKBUkFSQVKBUsFSwVKBUwFTAVKBU0FSgVOBU0FTQVOBU8F9gH3AfoB9wH4AfoB+gH9AfYB/QEjBfYB/QHpBCMF6QQkBSMF4gHgAY4D4AExA44DBAIwA+ABMAMxA+ABMAMEAuoEBALkBOoEDAIKAlIDCgIVA1IDDgIXAwoCFwMVAwoCFwMOAu0EDgLmBO0EigPFBOYBxQTlAeYB5gEnBYoDJwXcBIoDJwUoBdwEKAXZBNwEKAUpBdkEKQUoAtkEpASlBKYEpQRQA6YE3QRQA98EUAOlBN8E2ATdBN4E3QTfBN4EVQTYBFcE2ATeBFcERwPABOkBwATnAekBSANHA3wCRwPpAXwC0wRIA9cESAN8AtcETQTTBE8E0wTXBE8ECQMzA+QEMwPqBOQEBAPMAQkDzAEzAwkDCgM9A+YEPQPtBOYEAgPXAQoD1wE9AwoD6QQZAyQFGQMlBSQFGQMGAyUFBgMmBSUFBgMHAyYFBwM7AyYFBwOiBDsDogQ6AzsDOQM6A9EBOgOiBNEB0QHSATkD0gG1AjkDtgK1AiEFtQLSASEFBQPLAQQDywHMAQQDoQTLAb8EywEFA78EIwOhBAwDoQS/BAwDIgMjAw4DIwMMAw4DJAMiAzcFIgMOAzcFAwPYAQID2AHXAQIDvgSgBAMDoATYAQMDoAS+BCgDvgQQAygDEgMnAxADJwMoAxADIgUnAykDJwMSAykDTARNBE4ETQRPBE4EOwJMBD4CTAROBD4CPgI/AjsCPwI6AjsCUgI6Ak0COgI/Ak0CTQJOAlICTgJRAlICXARRAl0EUQJOAl0EWwRcBOECXARdBOEC4QLiAlsE4gIXBVsEAAMXBfoCFwXiAvoC/gIAA/kCAAP6AvkC7gL+AukC/gL5AukC7gLpAuwC6QLoAuwCGAQbBOgCGwTsAugCGwQYBAQEGAQDBAQE7wP0AwME9AMEBAME9APvA/YD7wPxA/YDRAIqAisFKgIqBSsFYwREAiwFRAIrBSwFYQRjBC0FYwQsBS0FLgJhBC4FYQQtBS4FLgUvBS4CLwUtAi4CLwUwBS0CMAWrAi0CMAUxBasCMQWlAqsCMgVZADEFWQClAjEFbgJXADIFVwBZADIFcAJVAG4CVQBXAG4CHAVTAHACUwBVAHACPwQ+BBwFPgRTABwFQQQnBD8EJwQ+BD8EJwRBBIEDQQQQBYEDDgWfAhAFnwKBAxAFZQJKAA4FSgCfAg4FSgBlAkgAZQJnAkgASABnAqMCZwJjAqMCJACdAmMCnQKjAmMCJgCeAiQAngKdAiQAngImAKkCJgBYAqkCqAKpAlkCqQJYAlkCqgKoAloCqAJZAloCWgJdAqoCXQIgAKoCXQJeAiAAXgIhACAAXgJqAiEAagKgAiEAcgKiAmoCogKgAmoCYAJCAHICQgCiAnICQgBgAkAAYAJfAkAAggN/A18CfwNAAF8CzgSnArYEpwI9BLYEbAJtAhgCbQKmAhgCMAIvAjQCLwJVAjQCVARVBFYEVQRXBFYEQwJUBFcCVARWBFcCQgJDAlYCQwJXAlYCSgJCAmQEQgJWAmQESQJKAl8ESgJkBF8ELwJJAlUCSQJfBFUCNAI1AjACNQLUAjACbQLUAqYC1AI1AqYCFwISBRgCEgVsAhgCpwLOBBcCzgQSBRcCIQS1BD0EtQS2BD0EIwQbBSEEGwW1BCEEfwOCAyMEggMbBSMEKQUqBSgCKgUqAigC",min:[-.36657,-1.18501,-1.05165],max:[3.00902,1.16681,1.05957],reach:[2.77671,-.88855,.13884]},R:{p:"vJI7HBb7mpSVIYD+D468I5r7So/nKNb+3YqWK5330otxMQP67ZCILv//U5ZfJx3/OI0INkX7U5ZfJx3/HJeXK7D+7ZCILv//CJNaNND+OI0INkX7Bo9TOYH7v45BQQ3rRI28PKrzXZI8QEfsF5CDPKT07Zd7Ofztq5QKROHjYZrJPI/l4JDIRG3iZZcSSAjbQJOYSOjYFJr0LPT3HpzjLkHvn5XkNnf2ZprOHcn3IJ4eH9nu4ZqTJS34j51tJ1rvkJFlFu7tKI5wGhXsu5P0FNbmX496GejkAIoqLAzmr4mqKQfuxonwNavniIkYMT3wRI28PKrzv45BQQ3rtYr/N0zyhIv+PTHpj51tJ1rv4ZqTJS34wpgjVADGFpLdR7XM1ZWMTNvPV5W+TODC1J1iVb7I1ZWMTNvPD5qFTKfRwpgjVADG6qJVUGHK7p7rRvvSLaNYPevTPaczR8XKFqXLNejTZKkwPzPKZKkwPzPKFqXLNejTF6qvNuzIxaWuLRHTaaGxJd+/Lp0wHr/JWJxEKAi+bJg1IsjHop6AMlzmFKDlKnPmeaG6N3HdEKM0MBzd2JBFJn/RPZQ/KR7H8JTUHQDSAY20QUrgQJOYSOjYUo+YRFDW4JDIRG3i5KDKIqjlb6NUJ7LbFKDlKnPmEKM0MBzdCKKlN2OdDaPmOJKWUqlnM9Gabau8NGKT06OtOkqQz6NmPVGK6K2qN9yKca4YPEKDOdUscgqKm9TMYeOA09b/eMp/JtDCXA1u8tYjcUNx8s96hnOSOdUscgqK8tI7jfuJ09b/eMp/baZIh1WlG7AhibGnaalYkkKeKrRqkvGf4TXwNjE/UTcRN242JT31NQlB8z5ENvE3tzS1QCxF9jt0QKRHhDzMW25DJT4eXjM6hjXYW6NAATdTXRg4Qjh8U5wwpz8IUwMyezh+Qr0vAkA5QksxGRbGdkQrIRbbe5cwbhb1h5EowBYNiF4wURikdtolpRlRgbkifzJMRVouxzIRVkUv/SYSbaE8pCqJXDFASipMd3k3yizDZo07lDQNUKpFzjsJUDdIyBvMjaMobhb1h5EoyRofjoQuwBYNiF4wBB2RiAkkpRlRgbkil0S/NFtDf0ZNNP45gUf5P2Yz6ka3T540QUVTXMU8s0NQWexFH0M+TfVKFkNLQFdKRhnHbEEupR7OZPMwvxncdHk0FR8/bTI3ZyGfZkMpBxyrbtkmSCGViScr4iZ5gsYtBCEhg5Ml5yb+eowmex7yd9ghdSS+bj0ktiScgbA0CR9miYMxoyHbeuE4IxuXglg21U1EJ8JHiE+1Jzg9hFd3F3pMclibGiBBm08MM6A3O1diJTs8m08MM6A31U5fOTs6O1diJTs8TVUdLEc+dEwLRNtBblLyM5VFGUtORmNKUVHGOL1N5kqbP+1OQ1KsMd1Su0uyM+ROclTAJJ1TnC4VZ74zYCwWeDMwyjGNXoY2GC+wXcQs+S39T4crJCxwbhMpwSnDYAYoNzDCXYw+3S6SUVhD9jCOOeY0ny+kOCk9oi4eQrZCriteR98w0ykjRtQ47CYSW70sWiT2Wyg0jyQZYmc6UiklTmQ/pCqJXDFA3S6SUVhD+S39T4crfzJMRVou1FS9LzUgQlfrLo4Y2VmhLXkiPVzKLP4aXlPyOVwlHlguOPonclf2ULwZ8ViiSEYUF1TJU5YXaFXMSi4SRlCyM+wc/lJAMxgV9U4JPqQiilEqUwMe71RRUDEhaD8kafIG0D7GbdUKdz+tdzAEHz/hd74KdUFXaPwCzUIjcAAAIEzYYNcDAk52a8cG3E81VtQHzVHhYucKi1OMR5Ml/FfyRmIooFkhUIojOk0ocgsMKEkKeTwIrUqMcz8R/0Vpeb8NEkTpfegDdz+tdzAEY0LCfgkKHz/hd74K0EVsdmwAzUIjcAAAckkGcqgDjkcEadEAQFkXOjkT8V36OJMVeF1gSB0X/lvVUJYc61DhaUgQc1KvW68UdlMRVJ4PZkHAYf8J70RkWrQN6UA1adgOfERkYvwS5kcYWUYHWkRzYToEqEZ7bdQUbUK+dF0QoWHKKMYeol9/KGImHmNcNQYZ8V36OJMVHmNcNQYZqmLkQzIa5WDnSZcglV6DSD0oQV2yQUYsX107Nd4rt2cQGqwsymk9GL4kKmm7J24eKmm7J24eC2ghNIYfGWatOH0mYWSSOFQudWMGM24yumQMJ2Uye085Ss4ioE/pWtsa7EipUHARQkg2WeUXJVXBPcsQu0y9PlsYsk+QPnAQcUsiRzUeoku3TncLlkpTZF0ZxUxEUxEfqE13aUcW11JySAYNlkpTZF0ZxUxEUxEfDhqLAfWZzxmcB7+e+RMdC6+XghabEbmeMhqlADKUpRbYBp2QCShPHdaNuilQEKCMzSHeGJKOaSNzDP2M3BVdGXiV+RMdC6+X1xY4GoGbghabEbmeGBd0E8KPpRbYBp2QPyEpIWmVGiftJQOVLhyIHUuVWxxfHVOcSCGkIX2cASAAAJyaKiUzAlibyh6vCcKgDyQPDIehByVhAt+Snh+/APOSfxwFFmePhh38CSCN/SGpGXOiWRw/FsehO0rXGjaOSkuRGZmYQkSBFbOPFkUfFKaZYkb9My6ip0OvPtObXkBFL8qiuj0uOsKbyUkfIxWhrEMIHtGhsWRzMgWH42h9L4OSFmEcLh6KtmOjK9CUx2DCQumDNV3dPQeFRV8EVmaFx2DCQumDaFqvT3WGNV3dPQeFFGMGYX2YPWC7YT2OgVy4WSOZSFqRWiqPGGeUUrGfn2ChSkegmmM7OPWe+2qQPq+dh08UHmGN3lBIHG6Y+UY6J/yIH0xVKziI1kMWNseK0kjiOveJ+UY6J/yIH0xVKziIrUJCPx6Sl0dNRIiRz0gwRJ+b2kthOLGhbk+zJtigJTKALQWUtSxAKbeUvDLzLGGcAi11KJOczC1sIFmNqTFeB+qaUTHpB/GRmTjWCbaaEDj8CmeROTD4EUWiEDfVFHqiXiv9BL2SjCuZBNCaMSp/Dz6iOigLHq+iKy7eIH+iRSeMJQOdjS/CE2KMXDOMJLGMyDXFFuuLeTR4JKWiu1WbIheMaVcxIG6X6FFpMRiHnE5MQSeJ6FFpMRiHZ01ySwCRP0+sSRSbkFIoPSChHFZbK2+gXSmlMKVsdClMM7didTB9MKNsZTA8MwRjcShrO+N0yy/GOaN1tQF0ZgNhRwJXbBtmAACAd4hd4gFYedtl1AIeZiVbUQIFcOlWuScaTM11si5mS8J2fCedWPRvEi6QWd9whwSOgMtcAACAd4hdbAQIgZpj4gFYedtlpAX3ebxWUQIFcOlWYhCBbhFZuxC3dwpgHRekY0lbHhehbHBirByvV99dgByoYPJk4SFyUsJegSFGWxpmewtcfO9dDAp3fOllmA+MeM1n0QbpZkJpeQYtXAhjmAsZYkNrBQviV5BkeAxDWWZbiAe/Xhdb7AotdNNXPwntaE5V+w5eY3JWyAdAdiJrUw3Jbw1tADdtRix4+z9eOoZ62TVUVnZyMT7wR0V1BVZDHfdlw02yGZtmdFI6LtJhVEqeKrJh0xU7V8lYOhJoTHJmaRL1V45uvhv4YC1tyBpSV4dyAiH2We1u0iClTmN0lBO1TMpdABa+bfRqSxQWZfVva4qOm2Zu6YkYmaxlxIEDkx9vdIH1jydmSIqxlJdd/4GIi9hdI5K3ofhk5ZJro41tD5uCq4JsTpy5rEp146KKtFlr2KMbtcFzl44RhfJHKYdDeydInYzMir1OvITQga5O1YlodUNB35BSfzFB05W3jpdHM5Trk31OMZnUbD8uYZMbYlou+JXRczI0xI9LaaU0kWgyTIVSoWaFOuxZiGhfToFZnmb4O8RbjmPxRtWB3mivMaaFjWQwSC9/TGhAMz6AEHWDLjA/C3mfH/tDg3JqL19CsXVmIRhJMXNrIsRTZnCRHgNIYG4jHqJSRG2jMH2PkXB3On6ZtG/2TvyeGGeUUrGfaG0EXH6eWmmraLaXaG0EXH6eD2a9adSNsGR9XliEjmPxRtWBjWQwSC9/l2ahW9J9mWLTRi19IWJLXHt2ymmIbMVy4msgbdV7EWTHRMZS2WTANRtZE2YgSY5HdF+0P1ZH+V3KPS5R6W7tXBFQPm19YPxXm2sPPMpAXm4hK69Cz2PgM9hAImeoJAxBUHj9OVo3fXVhLbw9VndXPkA9EHWDLjA/XH3rSDA1oXqQTMU7CsDCi4KgYrvYgoeoz8TRlSmXYclbnk+PcsqsfG+dG8XBdHCmEKwGnviTTLganXeWFLn2OJGGTboXPvJ81cuoSvuIpNC3WFuPv8bKQ1GW/spfUS+cN8+4UhR7AsuBYmGioNADaiCXAsuBYmGioNADaiCXtJyFQYzcYt2BlMlyv9rpobJ8odh1hkF3udUElxyCJnyMMqJxOIAkNapx8HtQM6R3CYJTN1l2Fp1jSEd6uJiERtWAeZgWSJN3qJRfRol+r6ErSudnVaYiSkRfiKgcTA1rxa7BTMVig6KGShdzsqFVRnx9gqg/SAl3Sp2lJJ04sp6DKQYt06JtKOs4UqRELvgsB6CBKiRDQJpKJ51CJJNtM7xR0ZbqLLNKppjfN75SfZz8MHNL1ZTEPDRakI8DOBBZOZEJP+5hNIxaOn9g/IVMORtvgIewO5B4morCPTBx4p++RiRdu5uiR4JlMZroQXZbWpbWQ5NjfaRSQStVXZ6IPNJTZ6I3NXZMvqjHObxNC69bMhs6cqzJM/VEw6igLLQ5A6a1LiNEkbBNOqstNqriMzwt7pytSQlwyo1eP6FpConjOt9n3op7JR/0oo2JH+72QpGoGWb29pfEFxj1LJWNFabxu5tmF0ztRJgqFE3qV6XDJ1HCo6hgLePFKaFuH5zMVqS3JLHQaovBLnHcF4uoOU7efJEzMoHHTY4VMPrRgZADPYPJrY2oOrbTeJ/LGfHjupvnFN/gA8bmRfV5hMaFTtxsqrqkRrpyupzNPnuU65zDPROakJg3RLiXGpnuRNicep5LGCLWFKIGHmLZwnLtMdWMc3AUMMSFSGlSKd5kS3EtK69o5mmEKvRwaHBLLUNxLnwEJOZMJXmLJt5UWn+9H3VG/YA0Flo3r4M7GJssSoZ0Fmg3sIhSGoMsOHSCZQ2dlnc8WPyeB21ndQWNa3DUcd+WnJ6LgiGj9p/WjR2dx5JqUS+dLZAeS92XKJUsSgWbS5SOR1SWEZXFVjihbJYVTeafGZh3W4GlFZiSUG2kFJLVd7OfEYxhcaueC5NrbDih0Y0hZnSf1IXHaUue44I7dgybZIq5fVubP5Hfg+GbTZjIiIycCJhhfQih6Igfis2SGoDqgquTEpEnkaGSIZkZl+aSQoxSIq/kjotCIfrr+pe+Lqe9yJZ5Ffrd0JE4G1PczJmWGJXTA45YJOzbE6BvQY+G7qaQQRSATbCEQxh5VLaGNA+RuI3IHMTxvIvnIOzw+I8CGSXylZz2RF6Dl6FGmy6TTs5zp0GIGNR6scKCgryEp3yNHsM6sveFk8pYvuyAH66Kqt6HYbfMuDyAqb+px1Z6tqd0stN8Pa/fvOJ3nLWAykFuSoEARfwtynuCPJwu8q/oeocnMLOcayAlBKnVcV0n5qsXYrwkNKCtUGUkLJ1iXz4nmqWZWYwktaJ9aEonnZphRpYkQpedVYInGYYSOfEnNYhNJ80meoAtMxAo7oLEIzMn3pRSOTQlqZCNSJInBbZhV04l9a7hTuEk96JMP5klk6j3RhIlxJ2nN3Qm96JMP5klxJ2nN3QmSbuFdMclIbichLAoHL5MYGwmtLD4SpJvB7lTTc9nBrb/OGw7p7f/QWYurb0VQUU8YL8nSogvBbZhV04lHL5MYGwmTsPdevsmqcSLj+spFcUKZ+InT76gTaJeZbR3Si9aIriURAdRD8JkS1hTsMhyU/NgGtIVYLpissW8SUs9tsY+UtgwFcUKZ+Int95OgrNSRN7lhPFdCdivb1FU+9f2cltied7ffx1J5NgEb8pJt91OgLc/l9j4by8/Hdc0c8A1JtsIgjw3+8zaetUpqc/0iRsrmdObd2suqdYPhSgwpNxXhQNqodh1hkF3Yt2BlMlySNNtX99U/cqAUoVU/8yZbMAq/tO9Z10049SLYcc+SdT2XspJOM5mVCA+uMy5UWlJis5SXBAzlIzgb5c6TJPNeYo6/IJhh+NVKosDkONV3IJSlEB4g4v1nF53Cn1Bd85O23pHff9V6IV6ZW46ZomdXqA0appgoQhVRaGNqTFUfJsJnRROpKIepsJNKKCxjbU5X6bGllQ5Y6IbiFUz4KghklUzCmu9T0tHT3GvWmRH83DwQrJA3XUcU5NAZnk1iApwS3ozijV57KFDs4ZiH5opqvNj4Ko8vsFqFKrRvHhgu6kisCJO57ETvk1R6avdqwtGOrU+ufZEYaHVrpVa5JmNpgxc46irtt1XP6R8oa5G+JwdmDBHcKUZnIQ/iJ7eklRAdKvtnSk5ba83nbI00qu9inotr7NOlXcuGKVAgHAtV2jTbbto1mnvZtRe12AAYXhpBGNLVJZes3iKhqhmnnlpgRhezX03iZOK/4bwkH+JIZCUmP6Iq5gtnwSJtKGApKCI1p6eqr5+DZawo8h/a40DnHKAmX8bcepHz4ISawxB9n2LEwUtG3yBEak27oLEIzMnIX3KHkMngnr9LLYnIX3KHkMnyHYvNTMu6HR6MgY3QnT6KCM9invDG0A/doKoGuw/AGm9JvtZ2WTANRtZu2OYIFxYrl+vMFRXXm4hK69CZWnrF5JGJ2g8FkZRS21JJilbrl+vMFRXg3JqL19CuXeiC0I27XhxDWks/HbSGJMmuXPDJTUnwXDDLREuwm/wK3s273A1Ilg80nP+FbM8nnfoGrI9kF1zJYGWcVsKKBKLkFdLNxuGm1S0RxSIcFO4UuGPcVUqUfqZQFk1Q6SglVwdMQagIVfQGRByO141IbxwBl26JEFlTlkRNfNgdFI6LtJhEk8PPlRjTlkRNfNgU1aoRRViK1RIUfNq/kxASYxrUlXITK92HE4+RW92LlhUPAt871BaNw58sFR0JSJ7qFv0KxJ6ImeoJAxBaZuUXDm8Lph4UWy5fqH1Yee/aZuUXDm8c6gVXr/BZK44VCPCGLHZSUDBGLHZSUDBjbFDP4i+lqDyLgu0XabjLN60aq8bNM26JJzCNPu0xqpVLk23JGD8OFZgL2TxPJNeFmQOKIhkzmG4MWN6uF0HQ2B8LlhUPAt8gGUAKORwuWe6Mfx64lu4VK92uF0HQ2B8JGD8OFZgUV0OTeZfL2TxPJNe4VppWZtqYDmALgZkLjnSLJptZjiMNet2KEOfHwJwbEPYIMFlFUJAKl555SGYMcVriBr5O9BpRSJ1NAliSRuWPH1g/yANPSp06RkrRuhx3jV1WeJnqzZMUNNfHS7zXAZnqS5nVChfED+RQLhh4D03So5qBzhUPv1dwS92QlVdI0H2LwpgBzhUPv1dI0H2LwpgphwYSWZbXCJ3QuJcyBpSV4dy0iClTmN0ZU7+FjhyVEqeKrJhUkdoOV5jwkU8Qw1so0ZyQKx2TEmeMy98ckzeIih7kFdLNxuGeTfCMxWTuTjoKtiLnTvSG/iKEz93DjKaXT67D7uQcz1/GZmiNDiYM1acXDplKsOiND4AMQyLAD3/OU6SQkGuIdSJh2EKFU9EuWAbEp5PY19jIWQ/SFw7LjRAY19jIWQ/2Fg8N9pG3ldiNvZPoFmWLNRVGV2BHRtXGyjDURBfhSfIWrtm9yh5QVxdgUf5P2YzKHLLDOspIHEuC6AzfHA6GHkkwm3UJBYlfHA6GHkkOGueKm0sLGqnKoE0dGtqIN85eW1iF+059Z5Fdq8tdL1WonAvkrYprWI4FY29VSkuNf0zv7hrbfnCzMVysvRqtQJt7PARw5h02fIf4PV2y+oR1Kh4wusP8Wh0f+Nk5F52XOW8/JlrnNx58EVuwNXC6VRKxN9W979H4tU04zc/XOBZ8GQ9PdZu7w5WDOB//AVTT+H//+peCtiI80FiPP/ttGZiNf0zv7hruvaIq8ljsvRqtQJtpfd2n8VQ///CqP1PkfeSpFha9P8erm9ZuPSbnGk82PxwpbA62PaKnPdGQf9rpXBGrOh9t9x2XezSqmFufOL9xzl7ztrF11t5MNMN5ClyFMto1m1AfcpG3JZMFsus4rNYe82E52VlX+4qoq5kXezSqmFuKu/bm/xaQO9El4dRfO5GlLtHlezrk8s95/BZoUkzEOn4ly81h8xx0dM0VdfY21w0QNEaxHgr/trN0G0souRHoMRvROEqrDx599oZvJh+ZtLUytR8h8lK1v512r6PzqROFcDfx45CUr+x1fpa6LP8xyld/8G/2sxoouRHoMRvDOUrlhpm5OasjgFScuZukvZb8OQbiwQ/a+bCi5VIt+Ejjow2ONbDmoAso9yZk04w68cFs5guocIqvwk3pK+ZMEKizKrzLgKrx6YrM0Oi/KOwMlCqqZ3JYxuzhZpvVsGxEp8LOCisqZ3JYxuzKaQqbDu5C6GMcGOua6jvdamz1qxXaTC8nLGactW1dbSPXla8L7quZTW1lLc5UQm6Mb6XVouylLc5UQm68bdZRBi2Mb6XVouyuL70R/St6aNNfGaqRKzvf+qtp7adenKvCcAtbditQ8WBXLGqQ8WBXLGqNMXlS72lyrK0MXWapqDMN1Sk5JsqPpmmTpp2PbethZnaR2yoDpkeSFuvUZyiayqpip0bd2am5ZoUYEqquJmGU9WpVpfJLvQn1pmTJWYtCZgeIEQ4C5SBIWstU5IlG+s3upSfIlZC+o7gHdVBUpEYKExKxo1iLhRRlIsEJGFJLIg3Kg1QcYqTMjNY94QVLh9XWIfVNFlfCIIcMCRei4TFNUpmG4KONbNsfH9YMfBkc33TMXNrVpfJLvQnJ7uAQNVHcLPIOWNGvq/cPjRPVavrRehWoZe2R5BtxZOARjt1W5BlRHR8I4+mQiNzGIw1QIN6mJIiRHFreHu4bdab7H5wXpWeOHSCZQ2dAkA5Qksxezh+Qr0vwSnDYAYolDQNUKpFdSS+bj0kex7yd9ghzjsJUDdIH0M+TfVKIxuXglg2oyHbeuE45kqbP+1OQ1KsMd1S/SYSbaE8QFkXOjkTIEzYYNcDjkcEadEAJVXBPcsQe085Ss4ii1OMR5Ml/FfyRmIobUK+dF0QqEZ7bdQUQV2yQUYsdWMGM24y11JySAYN3E81VtQH/SGpGXOiOigLHq+iaSNzDP2Mhh38CSCNeTR4JKWiXDplKsOiQkGuIdSJWRw/Fsehn2ChSkegYkb9My6i2kthOLGhyDXFFuuLjS/CE2KMKy7eIH+iuilQEKCM9yh5QVxdwS92QlVd+w5eY3JWPwntaE5VuScaTM11yAdAdiJrUw3Jbw1tsi5mS8J2ADdtRix471BaNw58TEmeMy98XCJ3QuJcphwYSWZbSxQWZfVv0xU7V8lYwJcpid1AOJK9nf5cApQRpXF2JJzrfb4znmb4O8RbvGuqKG9foWaFOuxZRJlDRnii9a7hTuEkk6j3RhIl2btzPGmpccFhP6qgNYhNJ80mi3TVRpid5XnETi+eE4l4Xpee0Y0hZnSf1IXHaUueEZQgYReiEZQgYReiTZB/WkifL7arMzalD7vrNbWcHdc0c8A1JtsIgjw3EOn4ly81t+Ejjow2C+QFoEAvt9F/bjIut9F/bjIuxJnZgyM6A5OmmKBVfXVhLbw9QnT6KCM9/HbSGJMm73A1Ilg8QFk1Q6SgmWLTRi19+z9eOoZ6kFIoPSChXkBFL8qinTvSG/iK+eu6qmYtVvO/swsr5/BZoUkzhfjCqvwwu78kOrCS346ALW4mao5kHQ4tJJhTcpmjOZjXZn+l2YhJGwBBWYywF303OH8zKgdWSYKqJsNOiYVNISNILnyqKwBdBnaxMDt4rnbpL2xx1HeCLllqa2+PL/B4jHW9J9hbtnkfLaFjNHNVKQ9ieHu4bdabHHjnenGVVIuWP5Un346ALW4mRHNkcIJWfnUTa0xPy3/QWbg6NINsVI00U3FBexJxjHLefF96KXEVdj5e6W8Ee3pnFHhoZqZH73sMYKVAN4fhTMUt+nSNgMeL9XVoN1CUIHrtNqWPc3dMMyyKIn3tO72TM3n2P5qZL3ZXMbKEFJJQRnmSgpRaRcqNWJQzRsiS15bARN6P5X5gNgmF44K9OfqGKX3YNq+KeYAeOqONoIaCPs6IA4TuPuSPlXo9NNuH1HpfM/+D4I85Rt6Q5ZGhRTOMy4SdVZSdCn6cU22etowfR96TY45fRcWLY4qCQnqK64cUQ62R6oTnR1mYt4g1TnCan4xeU1uc1JcRRFWTE5UEN1K+4ZOfQQvAKJgdO8G1BpeORV+3pMPsPymGw7X8OFaxGd7BqZIrvtfQtFUqqs6WpPYrxcNDSCtJ/8yZbMAqmOB6wgwpL+ZRtp8p8rC0MSWulJxqPQCgoFmWLNRVdGtqIN85TH35Roub9oAqQlWWnKnSu7Nxuqz1pL49lGtyce6DRnPFfxSDuXvfiiuCkITkkzOBoG/6L3l/3HXXMLR+WHs7Mzh+b4CANnh+HYVAOgOAX4lgPsqBSI2iQoGDOJENRTCF6ZSJRceGO5jkRN6I+ZriQpOLIJzPQK+P5ZoUYEqqGZh3W4GlRIGmTaic0+E35wg0nqb/r2xThfjCqvwwluR23FUsyu0vwHYnJen+zTMnwusP8Wh02fIf4PV2XOW8/JlrT+H//+pebfnCzMVyDOB//AVTNf0zv7hrPP/ttGZi9P8erm9ZxN9W979H///CqP1PXOBZ8GQ9Qf9rpXBG2PxwpbA60+E35wg0hfjCqvwwVvO/swsryu0vwHYnluR23FUsJen+zTMn",i:"AAABAAIAAgABAAMABAACAAUABQACAAMAAwABAAYABgABAAcABQADAAgACAADAAYACQAKAAsACwAKAAwADQALAA4ADgALAAwADwAQABEAEQAQABIAEQATABQAFAATABUAFgAXABgAFwAWABQAGQAaABsAGwAaABMAHAAdAB4AHgAdAB8AIAAhACIAIgAhACMAJAAlACYAJgAlACcAGwATABIAEgATABEAKAApACoAKgApACsAGgAZACwALAAZAC0ALgAvADAALwAuADEAMgAzADQAMwAyADUANgA0ADcANAA2ADIAOAA5ADcANwA5ADYAOgA7ADgAOAA7ADkAPAA9AD4APgA9AD8AQABBAEIAQgBBAEMAKgAFACgAKAAFAAgABwABAB4AHgABABwACQAtAAoACgAtABkADQAOABAAEAAOABIAGQAbAAoACgAbAAwAEgAOABsAGwAOAAwARAAaAEUARQAaACwAGgBEABMAEwBEABUAOABGADoAOgBGAEcASABJAEoASgBJAEMASwBMAE0ATABLAE4ATwBQAFEAUQBQAFIADwAUABYAFAAPABEAUQAfAE8ATwAfAB0AKwBOAEsATgArACkAUwBUAFUAVQBUAFYAVwBYAFkAWQBYAFoAWQBWAFcAVwBWAFQAWwBcAF0AXABeAF8AYABhAGIAYgBhAGMAZABlAGYAZgBlAGcAaABpAGoAagBpAGsAbABoAG0AbQBoAGoAbgBvAHAAcABvAHEAcgBzAHQAdABzAHUAbwBzAHEAcQBzAHIAdgB3AHgAeAB3AHkAdgB4AHoAegB4AHsAfAB9AHQAdAB9AHIAfgB/AIAAgAB/AIEAcACCAG4AbgCCAIMAhACFAIYAhgCFAIcAhACIAIUAhQCIAIkAagBrAIoAigBrAIsAdQBzAIwAjABzAI0AcwBvAI0AjQBvAI4AbwBuAI4AjgBuAI8AgwCQAG4AbgCQAI8AagCKAG0AbQCKAJEAkgCTAJQAlACTAJUAkwCSAJYAlgCSAJcAmACZAJoAmgCZAJsAmgCbAJwAnACbAJ0AngCfAKAAoACfAKEAngCZAJ8AnwCZAJgAogCjAKQApACjAKUApgCnAKMAowCnAKUAqACpAKoAqgCpAKsArACtAKkAqQCtAKsArgCvAKwArACvAK0AsACxAK4ArgCxAK8AsgCiALMAswCiAKQAhwChAIYAhgChAJ8AnACJAJoAmgCJAIgAnwCYAIYAhgCYAIQAmgCIAJgAmACIAIQAdgCSAHcAdwCSAJQAkgB2AJcAlwB2AHoAgQC0AIAAgAC0ALUAcQByALYAtgByAH0AtwC4ALkAuQC4ALoAcAC7AIIAggC7ALwAaQBoAL0AvQBoAL4AbAC/AGgAaAC/AL4AcQC2AHAAcAC2ALsAtAC3ALUAtQC3ALkAwADBAMIAwgDBAMMAwwDBAMQAxADBAMUAvgDBAL0AvQDBAMAAxQDBAL8AvwDBAL4AtACBALYAtgCBALsAtgB9ALQAtAB9ALcAfQB8ALcAtwB8ALgAvAC7AH8AfwC7AIEAxgDFAMcAxwDFAL8AyADJAMAAwADJAL0AygDLAMwAzADLAM0AzgDKAM8AzwDKAMwA0ADRANIA0gDRANMAygDUAMsAywDUANUAygDOANQA1ADOANYA0gDXANAA0ADXANgA2QDaANsA2wDaANwA3QDZAN4A3gDZANsA3wDgAOEA4QDgAOIA4wDkANgA2ADkAOUA5gDnAOgA6ADnAOkA6gDrAOwA7ADrAO0A6gDuAOsA6wDuAO8A5wDmAPAA8ADmAOAA4ADfAPAA8ADfAPEA8gDRAPMA8wDRAPQA0QDQAPQA9ADQAPUA2ADlANAA0ADlAPUA9gD3AOIA4gD3APgA+QD6APsA+wD6APwA+gD5AP0A/QD5AP4A6ADpAP8A/wDpAAABzQABAcwAzAABAQIBAwEBAQQBBAEBAc0A8wD0AAUBBQH0AAYB9AD1AAYBBgH1AAcB9QDlAAcBBwHlAAgB5QDkAAgBCAHkAAkBzAACAc8AzwACAQoB7QAAAewA7AAAAekA7wDuAPEA8QDuAPAA6QDnAOwA7ADnAOoA8ADuAOcA5wDuAOoA2QD5ANoA2gD5APsA/gD5AN0A3QD5ANkAAgEBAQsBCwEBAQwBAQEDAQwBDAEDAQ0BBQEGAQ4BDgEGAQ8BDwEGARABEAEGAQcBEAEHAREBEQEHAQgBEQEIARIBEgEIAQkBCgECARMBEwECAQsB4wDYABQBFAHYANcA1wDSABUBFQHSAPcAFgEXAfoA+gAXAfwAGAHTAPIA8gDTANEA1AAZAdUA1QAZARoBGwEZAdYA1gAZAdQAFgEcARkBGQEcARoBFwEWARsBGwEWARkBHQEeAR8BHwEeARUB4QDiACABIAHiAPgA9wD2ABUBFQH2AB8B0wD4ANIA0gD4APcAGAEgAdMA0wAgAfgAFQEeAdcA1wAeARQBIQEXASIBIgEXARsB4ADmAOIA4gDmAPYA+gD9ABYBFgH9ABwB/wAdAegA6AAdAR8B5gDoAPYA9gDoAB8BIwEkASUBJQEkASYBIwElAScBJwElASgBKQEqASsBKwEqASwBLQEuAS8BLwEuATABLQExAS4BLgExATIBKwEzASkBKQEzATQBNQE2ATMBMwE2ATcBOAE5AToBOgE5ATsBOQE4ATwBPAE4AT0BPgE1ASsBKwE1ATMBPgErAT8BPwErASwBNwE2AUABQAE2AUEBQgFDAUQBRAFDAUUBRgFHAUgBSAFHAUkBQwFKAUUBRQFKAUsBMAFBAS8BLwFBATYBMgExAT8BPwExAT4BNgE1AS8BLwE1AS0BPgExATUBNQExAS0BIwE4ASQBJAE4AToBPQE4AScBJwE4ASMBTAFNAU4BTgFNAU8BUAFMAVEBUQFMAU4BUgFTAVQBVAFTAVUBVgFXAVgBWAFXAVkBWgFWAVsBWwFWAVgBTwFNAVwBXAFNAV0BQgFeAUMBQwFeAV8BYAFhAUIBQgFhAV4BYgFjAWQBZAFjAWUBYgFmAWMBYwFmAWcBZgFHAWcBZwFHAWgBRwFGAWgBaAFGAWkBSgFDAWoBagFDAV8BawFsAW0BbQFsAW4BNAFsASkBKQFsAW8BcAFxAXIBcgFxAXMBdAFwAXUBdQFwAXIBcQFwAXYBdgFwAXcBcAF0AXcBdwF0AXgBeQF6AXsBewF6AW4BbwF8ASkBKQF8ASoBewFuATQBNAFuAWwBbwFsAX0BfQFsAWsBfAFvAX4BfgFvAX0BbQFuAX8BfwFuAXoBgAGBAV4BXgGBAV8BYQGCAV4BXgGCAYABgwGEAWMBYwGEAWUBhQGDAWcBZwGDAWMBhgGFAWgBaAGFAWcBhwGGAWkBaQGGAWgBgQGIAV8BXwGIAWoBdgF3ATwBPAF3ATkBOwE5AXgBeAE5AXcBewE3AXkBeQE3AUABewE0ATcBNwE0ATMBiQGKAYsBiwGKAYwBjQGJAY4BjgGJAYsBjwGQAZEBkQGQAZIBjwGRAZMBkwGRAZQBlQGWAZcBlwGWAZgBmQGaAZsBmwGaAZwBmQGdAZoBmgGdAZ4BnwGgAaEBoQGgAaIBowGkAaUBpQGkAaYBpwGoAaABoAGoAakBqgGrAawBrAGrAa0BrQGrAa4BrgGrAa8BsAGnAZ8BnwGnAaABsAGfAbEBsQGfAbIBqAGzAakBqQGzAbQBtQG2AbcBtwG2AbgBmwGcAagBqAGcAbMBngGdAbEBsQGdAbABqAGnAZsBmwGnAZkBsAGdAacBpwGdAZkBqwGqAY8BjwGqAZABqwGPAa8BrwGPAZMBuQG6AbsBuwG6AbwBvQGyAaEBoQGyAZ8BvgG/Aa0BrQG/AawBwAHBAcIBwgHBAcMBrgHEAa0BrQHEAb4BqQG0AcUBxQG0AcYBoAGpAaIBogGpAcUBxwHIAckByQHIAcoByAHLAcoBygHLAcwByAHHAc0BzQHHAc4BzwHQAdEB0QHQAdIB0wHUAdUB1QHUAdYB1AHTAdcB1wHTAdgB2QHTAdoB2gHTAdUB2wHcAd0B3QHcAd4B3wHgAeEB4QHgAeIBUAHjAUwBTAHjAeQB5QHmAeMB4wHmAeQB5wHoAekB6QHoAeoB6gHrAewB7AHrAe0B7gFNAeQB5AFNAUwBXQFNAe8B7wFNAe4BXQHwAfEB8QHwAfIB8wFWAfQB9AFWAVoBVwFWAfUB9QFWAfMBUgFXAfYB9gFXAfUBUwFSAfcB9wFSAfYB+AH5AfoB+gH5AfsB+wH5AfwB/AH5Af0B3wH+AeAB4AH+Af8BAAIBAv4B/gEBAgICAwLfAQQCBALfAeEBBQIGAgcCBwIGAggCCQIKAgsCCwIKAgwCDQIJAg4CDgIJAgsCDwJnABACEAJnAGUAEQJgABICEgJgAGIAEwIPAhQCFAIPAhACZgBnABUCFQJnABYCZwAPAhYCFgIPAhECDwITAhECEQITAmAAWQBaABcCFwJaABgCGQIaAhsCGwIaAhwCGgIZAlwAXAAZAh0CHgIcAh8CHwIcAhoCFAIgAhMCEwIgAiECYQBgACECIQJgABMCXABbABoCGgJbAB8CNwAiAjgAOAAiAkYAGAA0ADMANAAYABcAPQBSAD8APwBSAFAANAAXADcANwAXACICTQAwAC8AMABNAEwAFQAiAhQAFAAiAhcARQBHAEQARABHAEYAIgIVAEYARgAVAEQAIwIkAiUCJQIkAiYCJQImAmMAYwAmAmIAJwIoAikCKQIoAioCKwIsAi0CLQIsAi4CLwIwAjECMQIwAjICKwIzAjQCNAIzAjUCNgI3AjgCOAI3AjkCOAI6AjYCNgI6AjsCPAI9Aj4CPgI9Aj8CPgJAAjwCPAJAAkECQAJCAkECQQJCAkMCKgJEAkUCRQJEAkYCRwJIAkkCSQJIAkoCSwJHAkwCTAJHAkkCTAJNAksCSwJNAk4CTwJQAlECUQJQAlICUwJPAlQCVAJPAlECLQJVAisCKwJVAjMCVgJGAlcCVwJGAkQCWAJZAgQABABZAgIAWgIAAFkCWQIAAAIAWwJcAl0CXQJcAl4CXwJgAmECYQJgAmICAABaAlsCWwJaAlwCYwIkAGQCZAIkACYAZQJmAmcCZwJmAmgCXQJeAmkCaQJeAmoCHQJrAmwCbAJrAm0CbgJvAnACcAJvAnECcgJhAnMCcwJhAmICdALuAXUCdQLuAeQBdgJ3AngCeAJ3AnkCegJ7AuoB6gF7AusBfAJ6AugB6AF6AuoBfQJ+An8CfwJ+AoACgQLyAYICggLyAfAB9QHzAYMCgwLzAYQChQJkAIYChgJkAGYAhwKIAokCiQKIAooCiwKHAowCjAKHAokCjQKLAo4CjgKLAowCjwKQApECkQKQApICkwKQApQClAKQApUCkAKPApUClQKPApYClwKWApgCmAKWAo8CmQKaApUClQKaApQCmwKZApYClgKZApUCnAKbApcClwKbApYCIwAhAJ0CnQIhAJ4CQgBDAJ8CnwJDAEkAoAIiAKECoQIiACMAQQCiAkMAQwCiAkoAagJyAmkCaQJyAnMCowJIAKECoQJIAEoAoQIjAKMCowIjAJ0CWACkAqUCpQJaAFgApQKmAloAWgCmAhgCFwKnAlkAWQCnAlYAoQJKAKACoAJKAKICqAKpAiEAIQCpAp4CIACqAiEAIQCqAqgCqwI0AqQCpAI0AqUCNAI1AqUCpQI1AqYCFQKsAmYAZgCsAoYCEgJiAK0CrQJiACYCrQImAq4CrgImAiQCEgKvAhECEQKvAhYCrQKwAhICEgKwAq8CsAKtArECsQKtAq4CFQIWArICsgIWAq8CsAKzAq8CrwKzArICswKwArQCtAKwArECtQKyArYCtgKyArMCtgKzArcCtwKzArQCuAK5Ag0CDQK5AgkCugK7ArwCvAK7Ar0CvgK/AsACwAK/AsECwgLDAr4CvgLDAr8CxALFAsYCxgLFAscCyALJAsICwgLJAsMCuwLKAr0CvQLKAssCzAK+As0CzQK+AsACvgLMAsICwgLMAs4CzwI5AtAC0AI5AjcCuwK6AtEC0QK6AtICygK7AtMC0wK7AtECMQIyAtQC1AIyAtUC1gLXAtgC2ALXAtkC1wLaAtkC2QLaAtsC0QLSAtwC3ALSAt0C0wLRAt4C3gLRAtwC3wLVAuAC4ALVAjIC4ALhAt8C3wLhAuIC4wLkAl4AXgBsAuMC2ALZAuUC5QLZAuYC5wLmAtsC2wLmAtkC6ALpAuoC6gLpAusC7ALtAu4C7gLtAu8C8ALxAu8C7wLxAu4C8gLzAvQC9ALzAvUCXwD2AvcC9wL2AvgC+QLkAvoC+gLkAuMC6gLrAvkC+QLrAuQC8gL7AtwC3AL7At4C8ALvAvwC/ALvAv0C/gL9Au0C7QL9Au8C/QL+Av8C/wL+AgAD/AL9AgEDAQP9Av8CAgMDA94B3gEDA90BBAMFA9YB1gEFA9UByQEGA8cBxwEGAwcD1gEIAwQDBAMIAwkDCgMCAwsDCwMCA94BDAMNAw4DDgMNAw8DEAMRAxIDEgMRAxMDFAMVAxYDFgMVAxcDFQMUAwMCAwIUA98BGAMZA8kByQEZAwYD0QEaA88BzwEaAxsDHAMdA9EB0QEdAxoDHgMfAyADIAMfAyEDGgMiAxsDGwMiAyMDHQMkAxoDGgMkAyIDDwMeAyUDJQMeAyADDgMPAyYDJgMPAyUDJwMoAyUDJQMoAyYDEQMpAxMDEwMpAyoDEwMqAysDKwMqAywDEgMTAy0DLQMTAysDLgMvAzADMAMvAzED+wH8ATADMAP8AS4DMgMYA8oBygEYA8kBygHMATIDMgPMATMDNAOaAjUDNQOaApkCNgM1A5sCmwI1A5kCNwM2A5wCnAI2A5sCsgI4AxUCFQI4A6wCsgK1AjgDOAO1AjkDNwM6AzYDNgM6AzsDPAPUAT0DPQPUAdcB1AE8A9YB1gE8AwgDfgJ9Aj4DPgN9Aj8DQAN+AkEDQQN+Aj4DxgLHAkIDQgPHAkMDRAO5AkIDQgO5AsYCRQMJAkQDRAMJArkCCQJFAwoCCgJFA0YDRwN9AkgDSAN9An8CSQNKA0sDSwNKA0wDTQPpAewB7AHpAeoB7AHtAU4DTgPtAU8D7QFJA08DTwNJA0sD6wFQA+0B7QFQA0kDAAIUAwUCBQIUAxYD/gECAv8B/wECAlED/gHfAQACAALfARQDBQIHAgACAAIHAgECBgIFAlIDUgMFAhYDUwNUAz8DPwNUAz4DVQNWA0MDQwNWA0IDQgNWA0QDRANWA1cDRANXA0UDRQNXA1gDRQNYA0YDRgNYA1kDWgNTA1sDWwNTAz8DTwFcA04BTgFcA10DXgNfA1UBVQFfA1QBXwNgA1QBVAFgA1kBYANhA1kBWQFhA1gBYQNiA1gBWAFiA1sBXANPAWMDYwNPAVwBZAO5AWUDZQO5AWYDuQG7AWYDZgO7AWcDaANpA2oDagNpA2sDawNpA2wDbANpA20DbANtA24DbgNtA28DbgNvA3ADcANvA3EDcgNkA3MDcwNkA2UD7AFOA00DTQNOA3QDMQB1A3YDdQMxAC4ANQB3A3gDdwM1ADIAMgB5A3cDeQMyADYANgB6A3kDegM2ADkAegM5AHsDewM5ADsAfAM8AH0DfQM8AD4AQgB+A0AAQAB+A38DfQM+AIADgAM+AGACfgNCAIEDgQNCAJ8CgANgAoIDggNgAl8CgwOEA4UDhQOEA3YChgOHA3MDcwOHA4gDiQNlA4UDhQNlA2YDeAKJA3YCdgKJA4UDeAKKA4kDiQOKA4YDiQOGA2UDZQOGA3MDiwNuA4wDjANuA3AD+wGLA/oB+gGLA4wDjQOOA48DjwOOAzEDagNrA40DjQNrA44DbAOQA2sDawOQA44DkAMwA44DjgMwAzEDkANsA4sDiwNsA24DMAOQA/sB+wGQA4sDkQOSA4wBjAGSA4sBkgOTA4sBiwGTA44BkgORA5QDlAORA5UDkwOSA5YDlgOSA5QDlwOYA5kDmQOYA5oDlwObA5gDmAObA5wDnQOeA58DnwOeA6ADnQOfA7cBtwGfA5gBngOdA6EDoQOdA6IDtwG4AZ0DnQO4AaIDtwGYAbUBtQGYAZYBngOjA6ADoAOjA6QDpQOVA6YDpgOVA5EDowOeA6cDpwOeA6EDwAHCAaQBpAHCAaYBowGlAagDqAOlAakDqgOcA6sDqwOcA5sDrAO6AWQDZAO6AbkBaAOtA2kDaQOtA64DrgOvA2kDaQOvA20DbQOvA28DbwOvA7ADbwOwA3EDcQOwA7EDsgOsA3IDcgOsA2QDXQOAAbMDswOAAYIBtAO1A2sBawG1A30BtQO2A30BfQG2A34BcgFzAbcDtwNzAbgDdQFyAbkDuQNyAbcDugO0A20BbQG0A2sBfwG7A20BbQG7A7oDtQO0A7wDvAO0A70DvAO+A7UDtQO+A7YDRAFFAbgDuANFAbcDRQFLAbcDtwNLAbkDvQO0A0kBSQG0A7oDugO7A0kBSQG7A0gBvQNJAWYBZgFJAUcBvgO8A2QBZAG8A2IBvAO9A2IBYgG9A2YBvwPAA6UApQDAA6QApwDBA6UApQDBA78DwgPDA6sAqwDDA6oArQDEA6sAqwDEA8IDrwDFA60ArQDFA8QDxQOvAMYDxgOvALEAwAPHA6QApADHA7MApQGmAcgDyAOmAckDyAPKA6UBpQHKA6kDiQGXA4oBigGXA5kDiQGNAZcDlwONAZsDyQOmAZcBlwGmAcIByQOXAZ8DnwOXAZgBoAOkA8gDyAOkA8oDyAPJA6ADoAPJA58DwgHDAZcBlwHDAZUBigCLAKIAogCLAKMAiwDLA6MAowDLA6YAjACNAKgAqACNAKkAjQCOAKkAqQCOAKwArACOAK4ArgCOAI8ArgCPALAAsACPAJAAkQCKALIAsgCKAKIAmQC1AJsAmwC1ALkAwgDDAJYAlgDDAJMAkwDDAJUAlQDDAMQAmwC5AJ0AnQC5ALoAoAB+AJ4AngB+AIAAngCAAJkAmQCAALUAzAPNAwwBDAHNAwsBzgPMAw0BDQHMAwwBzwPQAw8BDwHQAw4B0QPPAxABEAHPAw8B0gPRAxEBEQHRAxAB0wPSAxIBEgHSAxEBzQPUAwsBCwHUAxMB2wG/AtwB3AG/AsMCvwLbAcECwQLbAdUDKwO6Ai0DLQO6ArwCLAPSAisDKwPSAroC3QLSAtYD1gPSAiwDKgPXAywDLAPXA9YD3AHYA94B3gHYAwsD2QPaA9sD2wPaA9wD2gPdA9wD3APdA94D3QPfA94D3gPfA+AD3wPhA+AD4APhA+ID4wPkA+UD5QPkA+YD5wPoA+MD4wPoA+QD6QPoA+oD6gPoA+cD6wPsA+0D7QPsA+4D7wPwA/ED8QPwA/ID8wP0A/UD9QP0A/YD9wP4A9wD3AP4A9sD+QP3A94D3gP3A9wD+gP5A+AD4AP5A94D+wP6A+ID4gP6A+AD5QP8A+MD4wP8A/0D/QP+A+MD4wP+A+cD/gP/A+cD5wP/A+oD4gPqA/sD+wPqA/8D7QPuAwAEAATuAwEE8QMCBO8D7wMCBAME9QMEBPMD8wMEBAUE8wMFBAYEBgQFBAcECAQJBAoECgQJBAsEDAQNBCMCIwINBCQC+AP3AwwEDAT3Aw0EDQQOBCQCJAIOBK4C9wP5Aw0EDQT5Aw4E+QP6Aw4EDgT6Aw8EDgQPBK4CrgIPBLEC+gP7Aw8EDwT7AxAEDwQQBLECsQIQBLQCHwMRBCEDIQMRBBIEEQT9AxIEEgT9A/wDEwQRBBQEFAQRBB8D/gP9AxMEEwT9AxEEFQQTBLcCtwITBBQE/wP+AxUEFQT+AxMEtwK0AhUEFQS0AhAE+wP/AxAEEAT/AxUE+AL2AhYEFgT2AhcEAAQBBBcEFwQBBBYE6AIYBOkC6QIYBBkEGAQDBBkEGQQDBAIE7gIaBOwC7AIaBBsEGgQFBBsEGwQFBAQE8QIcBO4C7gIcBBoEBQQaBAcEBwQaBBwE8wIdBPUC9QIdBB4ECgQfBAgECAQfBCAEHwTWAyAEIATWA9cDIQQiBCMEIwQiBCQEJQR2A3UDdgMlBCYEfgMkBH8DfwMkBCIEJAR+AycEJwR+A4EDKAQpBCoEKgQpBCsEKQQsBCsEKwQsBC0ELAQuBC0ELQQuBC8ELgQwBC8ELwQwBDEEMgQzBDQENAQzBDUELAR3A3kDdwMsBCkELgR5A3oDeQMuBCwEMAR6A3sDegMwBC4EMwR8A30DfAMzBDIEKQR4A3cDeAMpBCgEKgQrBDYENgQrBDcEKwQtBDcENwQtBDgELQQvBDgEOAQvBDkELwQxBDkEOQQxBDoENAQ1BDsEOwQ1BDwEPQQhBFUAVQAhBCMEIwQkBD4EPgQkBCcEPwRABEEEQQRABEIEQwQqBEQERAQqBDYEJQRFBCYEJgRFBEYEwgLOAsgCyALOAkcESARJBEoESgRJBEsESQRMBEsESwRMBE0ETgRPBFAEUARPBFEETwRSBFEEUQRSBFMEUgRUBFMEUwRUBFUEVgRXBFgEWARXBFkENwI2AkgESAQ2AkkETARJBDsCOwJJBDYCPQI8Ak4ETgQ8Ak8EUgRPBEECQQJPBDwCVARSBEMCQwJSBEECVwQoAlkEWQQoAicCVwJEAlYEVgREAlcESARaBDcCNwJaBNAC2AJbBNYC1gJbBFwEKgIoAkQCRAIoAlcE4QLgAl0EXQTgAl4ESAJHAi8CLwJHAjACUAJPAlwEXARPAtYCTwJTAtYC1gJTAtcCVQItAl8EXwQtAmAELQIuAmAEYAQuAmEEMAJeBDICMgJeBOACXQReBE4CTgJeBEsCYARhBGIEYgRhBGMEZARiBFYCVgJiBEYCXwRgBGQEZARgBGIESQJKAkACQAJKAkICTAJJAj4CPgJJAkACTQJMAj8CPwJMAj4CUQJSAjgCOAJSAjoCOAI5AlECUQI5AlQCRQJGAmMEYwRGAmIEgQKCAmUEZQSCAmYEzQLAAssCywLAAr0C9AFnBPMB8wFnBIQCPgRTACMEIwRTAFUAaARrAGkEaQRrAGkAyADAAGoEagTAAMIAvwBsAMcAxwBsAGsElgCXAGwEbASXAG0EbABtAGsEawRtAG4EywOLAGgEaASLAGsAbQCRAG4EbgSRAG8EcASUAHEEcQSUAJUAlwB6AG0EbQR6AHsAcgSyAHMEcwSyALMAeQB3AHAEcAR3AJQAaQRpAMkAyQBpAL0AxADFAHQEdATFAMYABAHNAHUEdQTNAMsA/QD+AHYEdgT+AHcEywDVAHUEdQTVAHgEeQTWAHoEegTWAM4AegTOAHsEewTOAM8AfAT7AH0EfQT7APwA/gDdAHcEdwTdAN4AzwAKAXsEewQKAX4E3ADaAHwEfATaAPsAfgQKAX8EfwQKARMB1QAaAXgEeAQaAYAE/AAXAX0EfQQXASEBgAQaAYEEgQQaARwBIgEbAXkEeQQbAdYAHAH9AIEEgQT9AHYEggQ7AYMEgwQ7AXgBPAE9AYQEhAQ9AYUEdQG5A4YEhgS5A4cERAGIBEIBQgGIBGABiQQ6AYIEggQ6ATsBPQEnAYUEhQQnASgBJgEkAYkEiQQkAToBXAFdAYoEigRdAfEBiwRKAYwEjARKAWoBjQRzAY4EjgRzAXEBgwR4AY8EjwR4AXQBjgRxAZAEkARxAXYBjwR0AYYEhgR0AXUBdgE8AZAEkAQ8AYQEigGRBIwBjAGRBJIErgGvAZMEkwSvAZQEqwObA5UElQSbA40BlgSqAZcElwSqAawBrwGTAZQElASTAZQBmASOAZkEmQSOAZMDkgGQAZYElgSQAaoBcgOaBLIDsgOaBJsEnASZA50EnQSZA5oDvwGeBKwBrAGeBJcExAGuAZ8EnwSuAZMEKAOgBCYDJgOgBNkBGwMjA80BzQEjA6EEzwEbA84BzgEbA80BywHIAaEEoQTIAc0B0AHPAaIEogTPAc4BxwEHA84BzgEHA6IEJgPZAQ4DDgPZAdoB0wHZAdgB2AHZAaAEowQSA9UD1QMSAy0D1QPbAaMEowTbAd0BhAOkBHYCdgKkBKUESgNJA6YEpgRJA1ADRgSOAkEEQQSOAqcEUwKoBNcC1wKoBNoCqARTAqkEqQRTAlQCNQSqBDwEPASqBKsErASAAkADQAOAAn4C8AGtBIICggKtBK4ErwSwBLEEkwKSApACRQSNAkYERgSNAo4CkQKSArIEswSwBLQEmAKFApcClwKFAoYCrAKcAoYChgKcApcCtQS2BKoEqgS2BKsE9AL1ArcEtwT1ArgEuQS6BLsEuwS6BB4E9AK3BLwEvQTwAvwCvgQQA6MEowQQAxIDAwO+BN0B3QG+BKMEvwQMA9oB2gEMAw4DBQO/BNUB1QG/BNoBnAKsAjcDNwOsAjgDOAM5AzcDNwM5AzoDRwPABFsDWwPABMEEVAPCBD4DPgPCBEEDwQTDBFsDWwPDBFoDXQOzA04BTgGzA1EBigTEBFwBXAHEBGMDmgRyA4gDiANyA3MDhQNmA4MDgwNmA2cDigPFBIYDhgPFBIcDpgORA5IEkgSRA4wBmQSTA8YExgSTA5YDYwPEBIgBiAHEBMcEhwS5A8gEyAS5A0sByQS4A40EjQS4A3MBiAREAckEyQREAbgDyARLAYsEiwRLAUoBkQSKAZwEnASKAZkDlQSNAZgEmASNAY4BbwSRAHIEcgSRALIAxAB0BJUAlQB0BHEEwgCWAGoEagSWAGwEwQLVA7wCvALVAy0DygTLBMwEzATLBM0EzAS5BMoEygS5BLsE9QIeBLgEuAQeBLoENgQ3BGQAZAA3BGUANwQ4BGUAZQA4BBACOAQ5BBACEAI5BBQCOQQ6BBQCFAI6BCACOwQ8BB4CHgI8BBwCtgTOBKsEqwTOBBsCpwI9BFYAVgA9BFUAcQKnBIwCjAKnBI4CRAQ2BIUChQI2BGQAzwRaBEoEzwRKBNAEqQRUAs8CzwJUAjkCwALBAr0CvQLBArwC0QSRAtIE0gSRArIERATRBEMEQwTRBNIE0QREBJgCmAJEBIUCkQLRBI8CjwLRBJgC0wTUBE0ETQTUBEsESgRLBNAE0ARLBNQE1QTWBFMEUwTWBFEEUARRBNcE1wRRBNYE2ATVBFUEVQTVBFME2QTaBCkCKQLaBCcC2gTbBCcCJwLbBFkE2gTZBHkCeQLZBNwE1QTYBHsCewLYBN0E1gTVBHoCegLVBHsC1wTWBHwCfALWBHoCWARZBN4E3gRZBNsE2wTaBHcCdwLaBHkC0ATUBIACgALUBH8C1ATTBH8CfwLTBEgD3gTbBN8E3wTbBHcCZwTgBIQChALgBOEE4gTjBMQCxALjBMUCzwTQBKwErATQBIACyQLIAuIE4gTIAuMEBALkBAMCAwLkBOUE5AQJA+UE5QQJAwgDDgLmBA0CDQLmBOcE5gQKA+cE5wQKAwsD/AH9AegE6AT9AekEMwPqBDIDMgPqBOsE6wTqBC4DLgPqBC8D6ATrBPwB/AHrBC4DGAMyA+gE6AQyA+sE7AQ8A+0E7QQ8Az0DPAPsBAgDCAPsBOUEAwLlBBUDFQPlBOwE7gS4AucE5wS4Ag0C4QTvBIQChALvBIMC6ATpBBgDGAPpBBkDFQPsBBcDFwPsBO0EmgI0A+EE4QQ0A+8E2APuBAsDCwPuBOcE4ASUAuEE4QSUApoCRwTjBMgCSgRaBEgElALgBJMCsQRlBGYE7wHuAfAE8ATuAXQC8AR0AvEE8QR0AvIE8QTzBPAE8ATzBPQE8gR0AvUE9QR0AnUC9gT3BPgE+AT3BPkE+gT7BPwE/AT7BP0E+wT+BP0E/QT+BP8E8gT1BAAFAAX1BAEFAgUDBfYE9gQDBfcErwRmBAQFZgSvBLEEZgSCAgUFBQWCAq4ELAIrAqsCqwIrAjQCBgUHBQIFAgUHBQMFAQX6BAAFAAX6BPwECAUJBf4E/gQJBf8EiAL2BIoCigL2BPgECgUGBQsFBgUKBQkF/AT9BPEE8QT9BPME8QTyBPwE/ATyBAAFBgWIAgsFCwWIAgwF+QQNBfgE+AQNBYoCDgVlAg8FDwVlAmcCJQBYAicAJwBYAgQAZgJjAmgCaAJjAmQCQAQQBUIEQgQQBREFzgQSBRsCGwISBRkCEgVrAhkCGQJrAh0CDwVnAjEAMQBnAi8AJgAnACsAKwAnACoAHABbAh0AHQBbAl0CJwAEACoAKgAEAAUAYgJgAj8APwBgAj4AAQAAABwAHAAAAFsCPASrBBwCHAKrBBsCZwJoAi8ALwBoAk0AUABPAHMCcwJPAGkCgAMTBX0DfQMTBTMETwAdAGkCaQIdAF0CJgArAGQCZAIrAEsAXAAdAl4AXgAdAmwCJgRGBEIEQgRGBEEEcAJxAokCiQJxAowCPwBQAGICYgJQAHMCTQBoAksASwBoAmQC1ALVAm0CbQLVAmwC1QLfAmwCbALfAuMC8wLyAt0C3QLyAtwCFAUdBBUFFQUdBBYF+gLjAuIC4gLjAt8C+wLyArwEvATyAvQC/wIAA+UC5QIAAxcF5QLmAv8C/wLmAgED5gLnAgEDAQPnAhgFDwURBQ4FDgURBRAFDwV2AxEFdgMPBTEAFQUZBRQFFAUZBRoFygS7BBoFGgW7BBQF3QIWBfMC8wIWBR0EuwQeBBQFFAUeBB0EJgQRBXYDEQUmBEIEMwQTBTUENQQTBaoEggMbBYADgAMbBRMFGwW1BBMFEwW1BKoEHAU/BKcEpwQ/BEEE/AIBA70EvQQBAxgFbwIcBXECcQIcBacEDQVwAooCigJwAokCWwTYAhcFFwXYAuUCXAOBAV0DXQOBAYABhAGDAV4DXgODAV8DgwGFAV8DXwOFAWADhQGGAWADYAOGAWEDhgGHAWEDYQOHAWIDYwOIAVwDXAOIAYEBugGsA5UDlQOsA5QDpQO8AZUDlQO8AboBrgOtA6EDoQOtA6cDrwOuA6IDogOuA6EDuAGwA6IDogOwA68DsQOwA7YBtgGwA7gBsgObBJYDlgObBMYElAOsA5YDlgOsA7IDwAO/A08DTwO/A04DTgO/A3QDdAO/A8EDCALDAwcCBwLDA8IDBwLCAwECAQLCA8QDAQLEAwICAgLEA8UDAgLFA1EDUQPFA8YDHQXHA0wDTAPHA0sDxwPAA0sDSwPAA08DzQPMA1MDUwPMA1QDzAPOA1QDVAPOA8IE0APPA1UDVQPPA1YDVgPPA1cDVwPPA9EDVwPRA1gDWAPRA9IDWAPSA1kDWQPSA9MDwwQeBVoDWgMeBdQD1APNA1oDWgPNA1MDiAHHBGoBagHHBIwExwMdBbMAswAdBXME1AMeBRMBEwEeBX8EHQMcAxQEFAQcA7cC7wGtBF0BXQGtBPAB9ATzBB8FHwXzBCAF/QT/BPME8wT/BCAFCgUgBQkFCQUgBf8ECAUHBQkFCQUHBQYFRwJLAjACMAJLAl4EXwBdAFwAXQBfAPcCxAGfBJoDmgOfBJ0ExAGaA74BvgGaA5gDvwG+AZwDnAO+AZgDngS/AaoDqgO/AZwDxQHGAcABwAHGAcEBpAGiAcABwAGiAcUBoQGiAaMBowGiAaQBowGoA6EBoQGoA70BtwIcA7YCtgIcAyEFHwMkAxQEFAQkAx0D1wMqAyIFIgUqAykD3AHDAtgD2APDAskC4gTuBMkCyQLuBNgDuALuBMQCxALuBOIExALGArgCuALGArkCXgDkAl8AXwDkAusCXwDrAvYC9gLrAukC9gLpAhcEFwTpAhkEAgQABBkEGQQABBcEAgTxAwAEAATxA+0D8QPyA+0D7QPyA+sDVwFSAVkBWQFSAVQBgwIjBfUB9QEjBfYB7wQkBYMCgwIkBSMFJAXvBCUFJQXvBDQDNQMmBTQDNAMmBSUFJgU1AzsDOwM1AzYD0gEhBdEB0QEhBRwDdQLkAScFJwXkAeYBfQJHAz8DPwNHA1sD3wR3AqUEpQR3AnYCigN4AtwE3AR4AnkCdQInBfUE9QQnBSgF9QQoBQEFAQUoBSkFKgX6BCkFKQX6BAEFUAPrAd0E3QTrAXsCKwX7BCoFKgX7BPoELAX+BCsFKwX+BPsELQUIBSwFLAUIBf4ELgUHBS0FLQUHBQgFBwUuBQMFAwUuBS8FAwUvBfcE9wQvBTAF9wQwBfkE+QQwBTEFMQUyBfkE+QQyBQ0FcAINBW4CbgINBTIFKgRDBCgEKARDBDMFNAUzBdIE0gQzBUME0gSyBDQFjQKzBIsChwKLArQEtASLArMErwQEBQwFDAUEBQsFCgUfBSAFHwUKBTUFrQTvAfQE9ATvAfAErQT0BK4ErgT0BB8FNQUFBR8FHwUFBa4ENQULBQQFCwU1BQoFZgQFBQQFBAUFBTUFtAQMBYcChwIMBYgCDAW0BK8ErwS0BLAEiAIGBfYE9gQGBQIFJQMgAycDJwMgAyIF1wMiBSEDIQMiBSADIQMSBNcD1wMSBCAEEgT8AyAEIAT8AwgECQQIBOUD5QMIBPwD5QPmAwkECQTmAzYFDQM3BQ8DDwM3BR4DHwMeAyQDJAMeAzcFFgXdAh8EHwTdAtYDFQUWBQoECgQWBR8ECgQLBBUFFQULBBkF4QPpA+ID4gPpA+oD9APzAzgFOAXzAwYEOQULBDYFNgULBAkEOgUaBTsFOwUaBRkFywTKBDoFOgXKBBoFOwUZBTkFOQUZBQsEPAU9BT4FPgU9BT8FPQVABT8FPwVABUEFQAVCBUEFQgVDBUEFQwVEBUEFQQVEBUUFRAVGBUUFRQVGBUcFRgVIBUcFSAVJBUcFRwVJBUoFSQVLBUoFSwVMBUoFTAVNBUoFSgVNBU4FTQVPBU4F9gH5AfcB9wH5AfgB+QH2Af0B/QH2ASMF/QEjBekE6QQjBSQF4gGPA+EB4QGPAzEDBALhAS8DLwPhATEDLwPqBAQCBALqBOQEDAJSAwsCCwJSAxYDDgILAhcDFwMLAhYDFwPtBA4CDgLtBOYEigPmAcUExQTmAeUB5gGKAycFJwWKA9wEJwXcBCgFKAXcBNkEKAXZBCkFKQXZBCkCpASmBKUEpQSmBFAD3QTfBFADUAPfBKUE2ATeBN0E3QTeBN8EVQRYBNgE2ARYBN4ERwPoAcAEwAToAecBSAN8AkcDRwN8AugB0wTXBEgDSAPXBHwCTQRQBNME0wRQBNcECQPkBDMDMwPkBOoEBAMJA8wBzAEJAzMDCgPmBD0DPQPmBO0EAgMKA9cB1wEKAz0D6QQkBRkDGQMkBSUFGQMlBQYDBgMlBSYFBgMmBQcDBwMmBTsDBwM7A6IEogQ7AzoDOQPQAToDOgPQAaIE0AE5A9IB0gE5A7UCtgIhBbUCtQIhBdIBBQMEA8sBywEEA8wBoQS/BMsBywG/BAUDIwMMA6EEoQQMA78EIgMNAyMDIwMNAwwDJAM3BSIDIgM3BQ0DAwMCA9gB2AECA9cBvgQDA6AEoAQDA9gBoAQoA74EvgQoAxADEQMQAycDJwMQAygDIgUpAycDJwMpAxEDTAROBE0ETQROBFAEOwI9AkwETAQ9Ak4EPQI7Aj8CPwI7AjoCUgJNAjoCOgJNAj8CTQJSAk4CTgJSAlACXARdBFACUAJdBE4CWwThAlwEXAThAl0E4QJbBOIC4gJbBBcFAAP6AhcFFwX6AuIC/gL5AgADAAP5AvoC7QLqAv4C/gLqAvkC7QLsAuoC6gLsAugCGAToAhsEGwToAuwCGwQEBBgEGAQEBAME7wMDBPUD9QMDBAQE9QP2A+8D7wP2A/ADRQIrBSoCKgIrBSoFYwQsBUUCRQIsBSsFYQQtBWMEYwQtBSwFLgIuBWEEYQQuBS0FLgUuAi8FLwUuAiwCLwUsAjAFMAUsAqsCMAWrAjEFMQWrAqQCMgUxBVgAWAAxBaQCbgIyBVcAVwAyBVgAbwJuAlQAVABuAlcAHAVvAlMAUwBvAlQAPwQcBT4EPgQcBVMAQAQ/BCcEJwQ/BD4EJwSBA0AEQASBAxAFDgUQBZ8CnwIQBYEDZQIOBUkASQAOBZ8CSQBIAGUCZQJIAGYCSACjAmYCZgKjAmMCJABjAp0CnQJjAqMCJQAkAJ4CngIkAJ0CngKpAiUAJQCpAlgCqAJZAqkCqQJZAlgCqgJaAqgCqAJaAlkCWgKqAlwCXAKqAiAAXAIgAF4CXgIgACIAXgIiAGoCagIiAKACcgJqAqICogJqAqACYQJyAkEAQQByAqICQQBAAGECYQJAAF8CggNfAn8DfwNfAkAAzgS2BKcCpwK2BD0EawIYAm0CbQIYAqYCMQIzAi8CLwIzAlUCVARWBFUEVQRWBFgEQwJXAlQEVARXAlYEQgJWAkMCQwJWAlcCSgJkBEICQgJkBFYCSAJfBEoCSgJfBGQELwJVAkgCSAJVAl8EMwIxAjUCNQIxAtQCbQKmAtQC1AKmAjUCFwIYAhIFEgUYAmsCpwIXAs4EzgQXAhIFIQQ9BLUEtQQ9BLYEIgQhBBsFGwUhBLUEfwMiBIIDggMiBBsFKQUpAioFKgUpAioC",min:[-3.04671,-1.19972,-.92025],max:[.46349,.39317,1.87926],reach:[-2.83733,-.51072,.14187]}};function so(){return{uReveal:{value:0},uTint:{value:0}}}function fh(i,t){let e=so();e.uFadeY={value:new i.Vector2(.95,1.7)};let n=new i.Group,s=(h,d)=>Ns(i,Object.assign({color:h,uniforms:e},d||{})),r=(h,d,f,m,g,A,p,M)=>{let _=new i.Mesh(new i.BoxGeometry(h,d,f),s(p,M));return _.position.set(m,g,A),n.add(_),_},o=2.75,a=[-2,-1,0,1,2],c=-1.95;r(16,4.6,.1,0,-.5,-1.7,2763306),r(15,.08,2,0,c,-.65,10132122),r(15,.32,.06,0,c-.12,.38,14211288),a.forEach(h=>r(.62,.2,.04,h*o-.7,c-.12,.42,4210752));let l=new i.Curve;l.getPoint=(h,d=new i.Vector3)=>{let f=h*Math.PI*2*3.5;return d.set(Math.cos(f)*1.08,Math.sin(f)*.5,-1.55+h*1.85)};let u=new i.TubeGeometry(l,140,.035,5,!1);return a.forEach(h=>{let d=new i.Mesh(u,s(15263976,{rim:.6}));d.position.set(h*o,-1.35,0),n.add(d)}),t&&a.forEach(h=>{if(h===0)return;let d=new i.Group;t.forEach(f=>d.add(new i.Mesh(f,s(12105912,{rim:.5,side:i.DoubleSide})))),d.position.set(h*o,0,-.35),d.scale.setScalar(.94),d.rotation.y=h*.04,n.add(d)}),r(16,2.6,.3,0,c-1.62,.42,9211020),r(7.2,1.25,.1,0,c-1.75,.62,2500134),r(2.2,.12,.06,0,c-1.25,.7,14737632,{rim:.6}),{group:n,u:e}}function wg(i,t){let e=Xe(i,t),n=e.getContext("2d"),s=n.createImageData(i,t),r=s.data,o=to(11),a=[];for(let c=0;c<70;c++)a.push([o(),.15+o()*.7,.008+Math.pow(o(),3)*.06]);for(let c=0;c<t;c++)for(let l=0;l<i;l++){let u=l/i,h=c/t,d=.55+.25*Ls(u*6,h*4,4,3)+.12*Ls(u*22,h*14,3,8);for(let[g,A,p]of a){let M=u-g;M-=Math.round(M);let _=(h-A)*.5,x=Math.sqrt(M*M+_*_)/p;x<1.35&&(d+=x<1?-.22*(1-x*x):.18*Math.exp(-Math.pow((x-1.08)/.12,2)))}h<.07&&(d=.95);let f=(c*i+l)*4,m=Math.max(0,Math.min(255,d*235));r[f]=r[f+1]=r[f+2]=m,r[f+3]=255}return n.putImageData(s,0,0),e}function ph(i){let t=so();t.uTint.value=1;let e=new i.CanvasTexture(wg(512,256)),n=new i.Mesh(new i.SphereGeometry(10,96,64),Ns(i,{map:e,uniforms:t,rim:.3,emissive:1579032})),s=new i.Group;return s.add(n),n.rotation.z=.35,{group:s,u:t,planet:n}}var uh=6;function Ah(i,t){let e=so(),n=new i.Group,s=(d,f)=>Ns(i,Object.assign({color:d,uniforms:e},f||{})),r=4.7,o=4.6,a=new i.Mesh(new i.BoxGeometry(r*2+.7,o+.5,.18),s(6974058,{rim:.55}));a.position.z=-.12,n.add(a);let c=[];[-1,1].forEach(d=>{let f=new i.Mesh(new i.BoxGeometry(r,o,.05),s(10132122));f.position.set(d*(r/2+.18),0,.02),n.add(f);for(let m=0;m<2;m++)for(let g=0;g<3;g++){let A=d*(r/2+.18)+(g-1)*1.5,p=(.5-m)*2.12,M=new i.Mesh(new i.BoxGeometry(1.38,2.02,.03),s(16777215,{rim:.7}));M.position.set(A,p,.06),n.add(M),c.push(new i.Vector3(A,p,.1))}}),[-1.1,1.1].forEach(d=>{let f=new i.Mesh(new i.TorusGeometry(.32,.06,8,24),s(15790320,{rim:.7}));f.position.set(0,d,.12),f.rotation.y=Math.PI/2,n.add(f)});let l=t.map(d=>{let f=new i.CanvasTexture(Fs(d,"face",256));return f.colorSpace=i.SRGBColorSpace,f}),u=new i.PlaneGeometry(1.26,1.89),h=0;return c.forEach((d,f)=>{if(f===uh)return;let m=new i.Mesh(u,s(16777215,{map:l[h++%l.length],rim:.2,emissive:5263440}));m.position.copy(d),m.position.z=.09,n.add(m)}),{group:n,u:e,pockets:c,slot:c[uh],size:new i.Vector2(r*2+.7,o+.5),textures:l}}function dh(i){let t=atob(i),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return new Uint16Array(e.buffer)}function mh(i){let t=so(),e=new i.Group,n={};return["R","L"].forEach(s=>{let r=hh[s],o=dh(r.p),a=new Float32Array(o.length);for(let h=0;h<o.length;h++){let d=h%3;a[h]=r.min[d]+o[h]/65535*(r.max[d]-r.min[d])}let c=new i.BufferGeometry;c.setAttribute("position",new i.BufferAttribute(a,3)),c.setIndex(new i.BufferAttribute(dh(r.i),1)),c.computeVertexNormals();let l=new i.Mesh(c,Ns(i,{color:15921906,uniforms:t,rim:.45,side:i.DoubleSide}));l.frustumCulled=!1;let u=new i.Group;u.add(l),e.add(u),u.userData.reach=new i.Vector3().fromArray(r.reach),n[s]=u}),{group:e,u:t,hands:n}}var cs=1,hn=.15,ls=.8;function Eg(i){let t=s=>{let r=Xe(i,i);return s(r.getContext("2d")),r},e=(s,r)=>{let o=i*.6,a=o/230;s.save(),s.translate(i/2-63*a,i/2-115*a),s.scale(a,a),s.fillStyle=r,ss.forEach(c=>s.fill(new Path2D(c))),s.restore()},n=(s,r)=>{s.beginPath(),s.arc(i/2,i/2,i*.455,0,Math.PI*2),s.lineWidth=i*.012,s.strokeStyle=r,s.stroke()};return{color:t(s=>{s.fillStyle="#b4f25e",s.fillRect(0,0,i,i),n(s,"#a6f357"),e(s,"#a6f357")}),orm:t(s=>{s.fillStyle="rgb(0,40,255)",s.fillRect(0,0,i,i),n(s,"rgb(0,200,0)"),e(s,"rgb(0,215,0)")}),emissive:t(s=>{s.fillStyle="#505050",s.fillRect(0,0,i,i),n(s,"#c8c8c8"),e(s,"#ffffff")}),coat:t(s=>{s.fillStyle="rgb(210,0,0)",s.fillRect(0,0,i,i),n(s,"rgb(30,0,0)"),e(s,"rgb(18,0,0)")})}}function Sg(i){let t=new i.RingGeometry(5e-4,ls,96,14),e=t.attributes.position;for(let n=0;n<e.count;n++){let s=Math.hypot(e.getX(n),e.getY(n))/ls;e.setZ(n,hn/2-.02+.016*(1-s*s))}return t.computeVertexNormals(),t}function gh(i,t){let e=new i.Scene;e.environment=t;let n=new i.PerspectiveCamera(16,1,.1,400),s=Eg(512),r=(b,D)=>{let R=new i.CanvasTexture(b);return D&&(R.colorSpace=i.SRGBColorSpace),R.anisotropy=8,R},o=r(s.color,!0),a=r(s.orm),c=r(s.emissive,!0),l=r(s.coat),u=new i.Color("#a6f357"),h=new i.MeshPhysicalMaterial({map:o,roughness:1,metalness:1,roughnessMap:a,metalnessMap:a,clearcoat:1,clearcoatRoughness:.06,clearcoatMap:l,iridescence:.3,iridescenceIOR:1.3,iridescenceThicknessRange:[320,520],iridescenceMap:l,emissive:u,emissiveMap:c,emissiveIntensity:.85,envMapIntensity:1.3,transparent:!0}),d=new i.MeshPhysicalMaterial({color:new i.Color("#b4f25e"),roughness:.17,metalness:1,clearcoat:1,clearcoatRoughness:.06,iridescence:.3,iridescenceIOR:1.3,iridescenceThicknessRange:[320,520],emissive:u,emissiveIntensity:.075,envMapIntensity:1.3,transparent:!0}),f=[Cn(h,{amt:.06}),Cn(d,{amt:.05})],m=[[ls-.01,hn/2-.02],[ls+.05,hn/2],[cs-.06,hn/2],[cs-.012,hn/2-.014],[cs,hn/2-.04],[cs,-hn/2+.04],[cs-.012,-hn/2+.014],[cs-.06,-hn/2],[ls+.05,-hn/2],[ls-.01,-hn/2+.02]],g=new i.LatheGeometry(m.reverse().map(([b,D])=>new i.Vector2(b,D)),128);g.rotateX(Math.PI/2);let A=Sg(i),p=A.clone();p.rotateY(Math.PI);let M=new i.Group,_=new i.Group;_.add(new i.Mesh(g,d),new i.Mesh(A,h),new i.Mesh(p,h)),M.add(_),e.add(M),M.traverse(b=>{b.isMesh&&(b.frustumCulled=!1)});let x=-1,P=0;return{scene:e,camera:n,group:M,update(b,D,R,w,y){let I=Ce(D.o,0,1);if(I<=.005)return x=-1,!1;x<0&&(x=b),P=b,n.aspect=R/w,n.fov=16;let H=w/(Math.max(4,D.size)*Math.tan(i.MathUtils.degToRad(8)));n.position.set(0,0,H),n.near=H*.5,n.far=H*2,n.lookAt(0,0,0),n.setViewOffset(R,w,R/2-D.x,w/2-D.y,R,w),n.updateProjectionMatrix();let N=4.6,G=2.5,J=b-x,V=Math.floor(J/N),q=J-V*N,z=q<G?0:mi.io((q-G)/(N-G));return _.rotation.set(Math.sin(b*.9)*.07,(V+z)*Math.PI*2+(y||0),Math.sin(b*.7)*.025),e.environmentRotation.set(0,Math.sin(b*.23)*.5+_.rotation.y*.15,0),f.forEach(st=>{st.uHoloShift.value=b*.05+_.rotation.y*.4}),h.opacity=d.opacity=I,h.depthWrite=d.depthWrite=!0,!0},textures:[o,a,c,l],dispose(){[o,a,c,l].forEach(b=>b.dispose()),[g,A,p].forEach(b=>b.dispose()),h.dispose(),d.dispose()}}}function xh(){let i={},t=n=>i[n]||(i[n]={k:{},c:{}}),e={T:i,init(n,s){let r=t(n);for(let o in s)r.c[o]=s[o],r.k[o]=[[-1,s[o],"l"]];return e},tw(n,s,r,o,a){return[].concat(n).forEach(c=>{let l=t(c);for(let u in o){let h=u in l.c?l.c[u]:0;(l.k[u]||(l.k[u]=[])).push([s,h,"l"],[r,o[u],a||"io"]),l.c[u]=o[u]}}),e},set(n,s,r){return e.tw(n,s,s+1e-4,r,"step")},done(){return Object.values(i).forEach(n=>Object.values(n.k).forEach(s=>s.sort((r,o)=>r[0]-o[0]))),e},v(n,s,r,o=0){let a=i[n],c=a&&a.k[s];if(!c)return o;if(r<=c[0][0])return c[0][1];for(let l=1;l<c.length;l++){let u=c[l];if(r<=u[0]){let h=c[l-1],d=u[0]-h[0],f=d>0?(r-h[0])/d:1,m=u[2]==="step"?f>=1?1:0:(mi[u[2]]||mi.io)(f);return h[1]+(u[1]-h[1])*m}}return c[c.length-1][1]},all(n,s){let r=i[n],o={};if(!r)return o;for(let a in r.k)o[a]=e.v(n,a,s);return o}};return e}function vh(i){if(i<=0)return 0;if(i>=1)return 1;let t=[[0,.05],[.13,.17],[.24,.26],[.36,.42],[.5,1.01]];for(let[e,n]of t)if(i>=e&&i<n)return i>.5?Math.min(1,.55+(i-.5)*2):.75;return .04}var Os={home:7,gifts:3},yh=Os.home,_h=-1.25,Mh=.55,Cg=1.38;function wh(i){let t=xh();return t.init("pack",{x:0,y:0,z:0,rx:0,ry:0,rz:0,s:i?Cg:1,o:1,tear:0,mouth:0,spin:0}),t.init("c0",{x:0,y:-.4,z:0,rz:0,ry:0,s:.92,o:0,on:0,slot:0,tog:0,pow:0}),t.init("c1",{x:0,y:-.4,z:-.02,rz:0,s:.92,o:0}),t.init("c2",{x:0,y:-.4,z:-.04,rz:0,s:.92,o:0}),t.init("machine",{r:0}),t.init("mars",{r:0,y:-.9}),t.init("hands",{r:0,spread:1}),t.init("binder",{r:0,y:-10}),t.init("glow",{k:1}),t}function bg(i){let t=wh(i),e=i?.88:.96,n=i?.8:.76;return t.tw("machine",.12,.82,{r:1},"l"),i&&t.tw("pack",.08,.8,{s:1.1},"io"),t.tw("pack",1.1,1.85,i?{z:.85,y:.2,s:1.25}:{z:.85,y:.16},"io"),t.tw("machine",1.08,1.5,{r:0},"l"),t.tw("pack",2.08,2.55,{tear:1},"l"),t.tw("pack",2.15,2.45,{mouth:1},"o"),t.set(["c0","c1","c2"],2.16,{o:1}),t.tw("pack",2.3,2.88,i?{y:-1.12,z:.55,s:.82}:{y:-.92,z:.55,s:.7},"io"),t.tw("c0",2.3,2.86,{y:1.12,z:.14,s:i?1:.9},"o"),t.tw("c1",2.34,2.9,{x:-e,y:n,z:.04,rz:.2,s:i?1:.92},"o"),t.tw("c2",2.36,2.92,{x:e,y:n,z:0,rz:-.2,s:i?1:.92},"o"),t.tw("c1",3.08,3.5,{x:-3.6,rz:.55,o:0},"i"),t.tw("c2",3.1,3.52,{x:3.6,rz:-.55,o:0},"i"),t.tw("pack",3.08,3.48,{y:-6,o:0},"i"),t.tw("c0",3.14,3.74,{y:i?.22:.26,z:1.3,s:i?1.6:1.38},"io"),t.tw("c0",3.44,3.62,{tog:1},"io"),t.tw("c0",3.58,3.88,{on:1,pow:1},"l"),t.tw("mars",3.3,3.92,{r:1},"l"),t.tw("mars",3.2,3.95,{y:0},"o"),t.tw("mars",4.06,4.5,{r:0},"l"),t.tw("binder",4.1,4.72,{y:0},"o"),t.tw("binder",4.16,4.66,{r:1},"l"),t.tw("c0",4.2,4.86,{slot:1},"io"),t.tw("c0",4.22,4.4,{tog:0},"io"),t.tw("c0",4.28,4.56,{on:0,pow:0},"l"),t.tw("binder",5.06,5.44,{r:0},"l"),t.tw("c0",5.08,5.46,{o:0},"l"),t.tw("glow",5.04,5.5,{k:0},"l"),t.done()}function Bg(i){let t=wh(i);return t.tw("hands",.1,.72,{r:1},"l"),t.tw("hands",.06,.84,{spread:0},"o"),t.tw("pack",.08,.86,{rz:-.1,y:.05,s:i?1.05:.9,z:.3,spin:1},"io"),t.tw("hands",1.04,1.4,{r:0,spread:.3},"l"),t.tw("pack",1.08,1.5,{y:-6,o:0},"i"),t.tw("glow",1.05,1.5,{k:0},"l"),t.done()}var ro=()=>({off:new L,vel:new L,q:new Le,w:new L,held:!1}),Tg=new Le;function Eh(i,t={}){let e=t.root||i.parentNode,n=!!t.reduce,s=t.page==="gifts"?"gifts":"home",r=Os[s]-1,o=Math.min(window.devicePixelRatio||1,2),a=new Hn({canvas:i,antialias:o<2,alpha:!1,powerPreference:"high-performance"});a.toneMapping=di,a.toneMappingExposure=1,a.outputColorSpace=de,a.autoClear=!1,a.setClearColor(1184274,1);let c=new Sn,l=as(_e,a);c.environment=l;let u=new pe(30,1,.1,200),h={uRes:{value:new ut(1,1)},uP:{value:new re(.5,.5,.3,.4)},uK:{value:1}},d=new Pe(new Gn(2,2),new ke({uniforms:h,depthTest:!1,depthWrite:!1,vertexShader:"void main(){ gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:["precision highp float; uniform vec2 uRes; uniform vec4 uP; uniform float uK;","void main(){","  vec2 p = gl_FragCoord.xy / uRes; p.y = 1.0 - p.y; float asp = uRes.x / uRes.y;","  vec2 d = (p - uP.xy) * vec2(asp, 1.0);","  float spill = exp(-dot(d, d) / (uP.z * uP.z * 2.2));","  vec2 e = (p - vec2(uP.x, uP.y + uP.w)) * vec2(asp * 0.55, 2.4);","  float under = exp(-dot(e, e) / (uP.z * uP.z * 0.5));","  vec3 c = vec3(0.0706) + vec3(0.36, 0.62, 0.1) * (spill * 0.055 + under * 0.05) * uK;","  float n = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);","  gl_FragColor = vec4(c + (n - 0.5) / 255.0, 1.0);","}"].join(`
`)})),f=new Sn;f.add(d),d.frustumCulled=!1;let m=new Vn(-1,1,1,-1,0,1),g=os(_e,{quality:t.quality??1});c.add(g.group);let A=new ji(wc());A.colorSpace=de;let M=[["SPCX",10130,"67.8926"],["TSLA",1583,"4.1674"],["NVDA",1452,"7.8912"]].map((B,C)=>io(_e,B,{backTex:A,power:C===0}));M.forEach(B=>c.add(B.group));let _=gh(_e,l),x=lh(_e,a),P=fh(_e,ih(_e,.3));P.group.position.set(0,0,-.4);let b=ph(_e),D=Ah(_e,[["TSLA",1583,"4.1674"],["NVDA",1452,"7.8912"],["AAPL",507,"1.8093"],["AMZN",667,"2.1361"],["META",1583,"2.4315"],["GME",3994,"157.4985"],["SPCX",405,"1.0744"]]),R=mh(_e);x.scene.add(P.group,b.group,D.group,R.group);let w=B=>s==="gifts"?Bg(B):bg(B),y=!1,I=1,H=1,N=w(!1),G=7.4,J=0,V=12,q=o,z={s:1,x:0,y:0},st=!1,lt=[],et=-11.7,vt=()=>{if(s!=="home")return;let B=N.all("c0",4),$=.5-(B.y-Ze.H/2*B.s-J)/(G*(V-B.z)/V)-(y?.03:.025);et=J+(.5-$)*(G*(V+7)/V)-10},Rt=()=>{I=Math.max(1,e.clientWidth),H=Math.max(1,e.clientHeight),a.setPixelRatio(q),a.setSize(I,H,!1);let B=I/H,C=y;y=I<760||B<.85,C!==y&&(N=w(y)),G=y?Math.max(7,4.6/B):6.5,J=((y?.53:.585)-.5)*G,V=G/2/Math.tan(pi.degToRad(15)),u.fov=30,u.aspect=B,u.near=.1,u.far=V+60,u.position.set(0,J,V),u.lookAt(0,J,0),u.updateProjectionMatrix(),h.uRes.value.set(I*q,H*q),x.setSize(I,H,q,y?5:6,y?8.5:10);let $=G*(V-_h)/V,at=y?.34:.36,dt=y?.3:.32;z.s=dt*$/2.12,z.y=J+(.5-at)*$-D.size.y/2*z.s,z.x=y?-D.slot.x*z.s:0;let Bt=y?1.1:1;P.group.scale.setScalar(Bt),P.u.uFadeY.value.set(.95*Bt,1.7*Bt),D.group.scale.setScalar(z.s),D.group.position.set(z.x,z.y,_h),vt(),st&&_i()},k=t.start??0,rt=0,j=k,Z=null,Et=0,Nt=.82,Lt=2.4,Yt=()=>{Z={m0:Ce(Math.round(j),0,r),drive:j}},nt=B=>{if(!Z)return;let{m0:C}=Z,Q=Z.drive-C,$=C;(Math.abs(Q)>.08||Math.abs(B||0)>.6)&&($=C+Math.sign(Math.abs(Q)>.08?Q:B)),j=Ce($,0,r),Z=null},ht=B=>{Z||Yt(),Z.drive=Ce(Z.drive+B,Math.max(0,Z.m0-1),Math.min(r,Z.m0+1)),j=Z.drive},T=()=>!!(t.isBlocked&&t.isBlocked()),ft=null,ot=B=>{if(B.preventDefault(),T()||ft)return;let C=B.deltaY;B.deltaMode===1?C*=32:B.deltaMode===2&&(C*=H);let Q=performance.now();Z&&Q-Et>260&&nt(0),Et=Q,ht(C/760)},mt=null,pt=B=>{if(ft||B.touches.length!==1||T())return;let C=B.touches[0].clientY;mt={y:C,y0:C,t:performance.now(),vy:0},Yt()},Pt=B=>{if(B.cancelable&&B.preventDefault(),!mt||ft)return;let C=B.touches[0].clientY,Q=performance.now(),$=mt.y-C;mt.vy=.8*mt.vy+.2*($/Math.max(1,Q-mt.t)),mt.y=C,mt.t=Q,ht($/(H*.5))},yt=()=>{if(!mt)return;let B=mt.vy*1e3/(H*.5);mt=null,nt(B)},S=B=>{let C=B.key;T()||B.target&&/^(INPUT|TEXTAREA|SELECT|BUTTON|A)$/.test(B.target.tagName)&&C===" "||(/^(ArrowDown|PageDown|ArrowRight| )$/.test(C)?(B.preventDefault(),v(Math.round(j)+1)):/^(ArrowUp|PageUp|ArrowLeft)$/.test(C)?(B.preventDefault(),v(Math.round(j)-1)):C==="Home"?v(0):C==="End"&&v(r))},v=B=>{Z=null,j=Ce(Math.round(B),0,r)},O={pack:ro(),c0:ro(),c1:ro(),c2:ro()},K=B=>B==="pack"?g.group:M[+B[1]].group,it=0,X=0,bt=!1,At=null,wt=new kn,Vt=new kn,ct=new oe,St=new L,It=new L,Ft=new qe(new L(-ge.W/2,-ge.H/2,-.4),new L(ge.W/2,ge.H/2,.4)),Ct=new qe(new L(-Ze.W/2,-Ze.H/2,-.06),new L(Ze.W/2,Ze.H/2,.06)),Ht={pack:1,c0:0,c1:0,c2:0},Qt=(B,C)=>{if(At&&At.o>.5&&Math.hypot(B-At.x,C-At.y)<At.size*.7)return"coin";wt.origin.copy(u.position),wt.direction.set(B/I*2-1,1-C/H*2,.5).unproject(u).sub(u.position).normalize();let Q=null,$=1/0;for(let at in O){if(Ht[at]<.5)continue;let dt=K(at);if(!dt.visible||(dt.updateMatrixWorld(),ct.copy(dt.matrixWorld).invert(),Vt.copy(wt).applyMatrix4(ct),!Vt.intersectBox(at==="pack"?Ft:Ct,St)))continue;let Bt=St.applyMatrix4(dt.matrixWorld).distanceTo(u.position);Bt<$&&($=Bt,Q=at)}return Q},$t=B=>{let C=e.getBoundingClientRect();return[B.clientX-C.left,B.clientY-C.top]},U=B=>B.target&&B.target.closest&&B.target.closest('button, a, input, [role="dialog"]'),gt=0,Y=0,tt=0,Mt=0,_t=B=>{if(ft||T()||U(B)||B.pointerType==="mouse"&&B.button!==0)return;let[C,Q]=$t(B),$=Qt(C,Q);if($){if(ft={key:$,id:B.pointerId,x:C,y:Q,t:performance.now()},$==="coin")bt=!0,X=0;else{let at=O[$];at.held=!0,at.vel.set(0,0,0),at.w.set(0,0,0)}Z=null,mt=null;try{e.setPointerCapture(B.pointerId)}catch{}e.style.cursor="grabbing"}},Ot=B=>{let[C,Q]=$t(B);if(ft&&B.pointerId===ft.id){let $=performance.now(),at=C-ft.x,dt=Q-ft.y,Bt=Math.max(8,$-ft.t)/1e3;if(ft.x=C,ft.y=Q,ft.t=$,ft.key==="coin"){it+=at*.012,X+=(at*.012/Bt-X)*.4;return}let Ut=O[ft.key];K(ft.key).getWorldPosition(It);let Wt=2*Math.max(1,u.position.z-It.z)*Math.tan(pi.degToRad(15))/H;It.set(at*Wt,-dt*Wt,0),Ut.off.add(It),Ut.vel.lerp(It.divideScalar(Bt),.4);let Xt=Math.hypot(at,dt);Xt>0&&(It.set(dt/Xt,at/Xt,0),Ut.q.premultiply(new Le().setFromAxisAngle(It,Xt*.0055)),Ut.w.lerp(It.multiplyScalar(Xt*.0055/Bt),.4));return}B.pointerType==="mouse"&&(tt=C/I*2-1,Mt=Q/H*2-1,T()||(e.style.cursor=!U(B)&&Qt(C,Q)?"grab":""))},ie=B=>{if(!ft||B.pointerId!==ft.id)return;let C=performance.now()-ft.t>90;if(ft.key==="coin")bt=!1,C&&(X=0);else{let Q=O[ft.key];Q.held=!1,C&&(Q.vel.set(0,0,0),Q.w.set(0,0,0))}ft=null,e.style.cursor=""};e.addEventListener("wheel",ot,{passive:!1}),e.addEventListener("pointerdown",_t),e.addEventListener("pointermove",Ot),e.addEventListener("pointerup",ie),e.addEventListener("pointercancel",ie),e.addEventListener("touchstart",pt,{passive:!0}),e.addEventListener("touchmove",Pt,{passive:!1}),e.addEventListener("touchend",yt),e.addEventListener("touchcancel",yt),window.addEventListener("keydown",S);let ue=()=>Rt();window.addEventListener("resize",ue);let jt=B=>{for(let C in O){let Q=O[C];if(Q.held)continue;Q.vel.addScaledVector(Q.off,-15*B).multiplyScalar(Math.exp(-5.8*B)),Q.off.addScaledVector(Q.vel,B);let dt=Q.w.length();dt>1e-4&&(Q.q.premultiply(new Le().setFromAxisAngle(It.copy(Q.w).divideScalar(dt),dt*B)),Q.w.multiplyScalar(Math.exp(-B*2.4))),Q.q.slerp(Tg,1-Math.exp(-B*2.2)),Q.off.lengthSq()<1e-7&&Q.vel.lengthSq()<1e-7&&(Q.off.set(0,0,0),Q.vel.set(0,0,0))}if(!bt&&(X*=Math.exp(-B*1.6),it+=X*B,Math.abs(X)<1.2)){let C=Math.round(it/(Math.PI*2))*Math.PI*2;it+=(C-it)*(1-Math.exp(-B*3))}},Ue=(B,C)=>{let Q=O[B];C.position.add(Q.off),C.quaternion.premultiply(Q.q)},be=new L,vi=new L,Wn=new L,je=(B,C,Q)=>{B.updateMatrixWorld(),be.set(0,0,0).applyMatrix4(B.matrixWorld).project(u),vi.set(C,Q,0).applyMatrix4(B.matrixWorld).project(u);let $=(be.x*.5+.5)*I,at=(.5-be.y*.5)*H;return{x:$,y:at,w:Math.abs(vi.x-be.x)*I,h:Math.abs(vi.y-be.y)*H}},Fe=0,hs=B=>{let C=N.all("pack",k),Q=Math.sin(Fe*.75)*.05,$=Math.sin(Fe*.31)*.16,at=Math.sin(Fe*.43+1)*.045,dt=ft&&ft.key==="pack",Bt=y||dt?0:gt*.22,Ut=y||dt?0:Y*.12;g.group.position.set(C.x,C.y+Q,C.z),g.group.rotation.set(C.rx+at+Ut,C.ry+$+Bt+C.spin*Math.PI*2,C.rz),g.group.scale.setScalar(C.s),g.group.visible=C.o>.01;let Tt=je(g.group,ge.W/2,ge.H/2);B||Ue("pack",g.group),g.setTear(C.tear),g.setMouth(C.mouth),g.setHolo(k*.45+Fe*.035+g.group.rotation.y*.9),c.environmentRotation.set(0,Math.sin(Fe*.11)*.45+Math.sin(k*.9)*.2,0),Ht={pack:C.o};let Wt=s==="home";M.forEach((le,Te)=>{let se=N.all("c"+Te,k),fn=se.x,te=se.y,Ne=se.z,pn=se.s,De=se.rz,ye=Te===0&&se.slot||0;if(ye>0){D.group.position.y=z.y+N.v("binder","y",k),D.group.updateMatrixWorld(),Wn.copy(D.slot).applyMatrix4(D.group.matrixWorld);let tn=(u.position.z-Mh)/(u.position.z-Wn.z),ks=u.position.x+(Wn.x-u.position.x)*tn,Ch=u.position.y+(Wn.y-u.position.y)*tn,bh=1.32*1.89*z.s*tn/Ze.H;fn+=(ks-fn)*ye,te+=(Ch-te)*ye,Ne+=(Mh-Ne)*ye,pn+=(bh-pn)*ye,De*=1-ye}let $e=Te===0&&Wt&&k>3.1&&k<5.6?1-ye*.5:0;if(le.group.position.set(fn,te+(Te===0?Q*.6:0),Ne),le.group.rotation.set($e*(at+Ut)*.8,(se.ry||0)+$e*($*.7+Bt),De),le.group.scale.setScalar(pn),B||Ue("c"+Te,le.group),le.setOpacity(se.o),Ht["c"+Te]=se.o,le.setHolo(k*.5+Fe*.04+le.group.rotation.y+Te*.3),Te===0){let tn=se.on,ks=tn>0&&tn<.6?Math.sin(tn*46)>.1?1:.45:1;le.setOn(tn*ks),le.setPower(se.pow*ks),le.setToggle(se.tog)}});let Xt=vh(N.v("machine","r",k));P.u.uReveal.value=Xt,b.u.uReveal.value=N.v("mars","r",k),b.group.position.set(0,et+N.v("mars","y",k),-7),b.planet.rotation.y=Fe*.02+k*.15;let ee=N.v("hands","r",k),Me=N.v("hands","spread",k);R.u.uReveal.value=ee,Dg(R.hands,Me,y,C),D.u.uReveal.value=N.v("binder","r",k),D.group.position.y=z.y+N.v("binder","y",k);let Jt=N.v("glow","k",k);P.group.visible=Xt>.001,b.group.visible=b.u.uReveal.value>.001,D.group.visible=D.u.uReveal.value>.001,R.group.visible=ee>.001;let Dt=Wt&&k>3&&k<5.6,Be=Dt?je(M[0].group,Ze.W/2,Ze.H/2):je(g.group,ge.W/2,ge.H/2),Kt=Dt?N.v("c0","o",k):C.o;return h.uP.value.set(Be.x/I,Be.y/H,Math.max(.12,Be.h/H*.5),Be.h/H*.55),h.uK.value=Jt*Kt,{P:C,packScreen:Tt,so:Be,vk:Kt,glowK:Jt}},us=new L,bn=(B,C,Q,$)=>{B.updateMatrixWorld(!0);let at=1/0;for(let dt=0;dt<8;dt++)us.set(dt&1?C:-C,dt&2?Q:-Q,dt&4?$:-$).applyMatrix4(B.matrixWorld).project(u),at=Math.min(at,(.5-us.y*.5)*H);return at},_i=()=>{let B=k;lt=[];for(let C=0;C<=r;C++){k=C,hs(!0);let Q=1/0;N.v("pack","o",C)>.5&&(Q=Math.min(Q,bn(g.group,ge.W/2,ge.H/2,.3))),M.forEach(($,at)=>{N.v("c"+at,"o",C)>.5&&(Q=Math.min(Q,bn($.group,Ze.W/2,Ze.H/2,.01)))}),N.v("binder","r",C)>.5&&(Q=Math.min(Q,bn(D.group,D.size.x/2,D.size.y/2,.1))),lt.push(isFinite(Q)?Math.round(Q):null)}k=B},Yn=B=>{let{P:C,packScreen:Q,so:$,vk:at,glowK:dt}=hs(!1),Bt=!B&&t.onFrame?t.onFrame(k,{phone:y,page:s,pack:Q,packVisible:C.o,target:j,W:I,H,tops:lt}):null;At=Bt&&Bt.coin?Bt.coin:B?{x:I/2,y:H/2,size:80,o:1}:null,a.setRenderTarget(null),a.clear(!0,!0,!0),a.render(f,m),x.uniforms.uGlow.value=.9*dt*at,x.render(u,Fe,{x:$.x/I,y:$.y/H,r:Math.max(.1,$.h/H*.55)}),a.clearDepth(),a.render(c,u),At&&_.update(Fe,At,I,H,it)&&(a.clearDepth(),a.render(_.scene,_.camera))},Xn=performance.now(),Mi=0,Qs=!0,yi=16.7,Jn=0,E=0,F=B=>{if(!Qs)return;Mi=requestAnimationFrame(F);let C=B-Xn,Q=Math.min(.05,C/1e3);Xn=B,Fe+=Q,E+=Q,E>2.5&&C<120&&q>1&&(yi+=(C-yi)*.05,Jn=yi>23?Jn+Q:Math.max(0,Jn-Q*.5),Jn>1.2&&(q=Math.max(1,q-.5),Jn=0,yi=16.7,Rt())),Z&&B-Et>260&&!mt&&Et&&(nt(0),Et=0);let $=j-k;if(n)k=Math.round(j),rt=0;else{let at=Math.abs($)>1.05&&!Z?Lt:Nt,dt=Ce($*3.4,-at,at);rt+=(dt-rt)*Math.min(1,Q*6.5),k+=rt*Q,Math.abs($)<8e-4&&Math.abs(rt)<.004&&(k=j,rt=0)}k=Ce(k,0,r),gt+=(tt-gt)*Math.min(1,Q*3),Y+=(Mt-Y)*Math.min(1,Q*3),jt(Q),Yn(!1)},W=()=>{let B=k;[g.textures,M.flatMap(C=>C.textures),_.textures,D.textures].flat().forEach(C=>a.initTexture(C));for(let C=0;C<=r;C++)k=C,Yn(!0);k=B};Rt();try{W()}catch{}return st=!0,_i(),Mi=requestAnimationFrame(F),{go:v,step:B=>v(Math.round(j)+B),get t(){return k},get page(){return s},setPage(B){if(B=B==="gifts"?"gifts":"home",B!==s){s=B,r=Os[B]-1,N=w(y),vt(),_i(),k=j=0,rt=0,Z=null;for(let C in O){let Q=O[C];Q.off.set(0,0,0),Q.vel.set(0,0,0),Q.q.identity(),Q.w.set(0,0,0)}W()}},renderNow(){Xn=performance.now(),F(Xn)},seek(B){k=j=B,rt=0,Z=null},resize:Rt,_dbg:{ascii:x,mars:b,binder:D,machine:P,hands:R,renderer:a,camera:u,scene:c,grabs:O,get dpr(){return q}},destroy(){Qs=!1,cancelAnimationFrame(Mi),e.removeEventListener("wheel",ot),e.removeEventListener("pointerdown",_t),e.removeEventListener("pointermove",Ot),e.removeEventListener("pointerup",ie),e.removeEventListener("pointercancel",ie),e.removeEventListener("touchstart",pt),e.removeEventListener("touchmove",Pt),e.removeEventListener("touchend",yt),e.removeEventListener("touchcancel",yt),window.removeEventListener("keydown",S),window.removeEventListener("resize",ue),g.dispose(),M.forEach(B=>B.dispose()),_.dispose(),x.dispose(),a.dispose()}}}function Dg(i,t,e,n){let s=e?.85:1,r=i.L,o=i.R,a=o.userData.reach,c=r.userData.reach,l=1*n.s;o.scale.setScalar(s),r.scale.setScalar(s),o.position.set(n.x+l-a.x*s+t*5,n.y+.5-a.y*s+t*1.4,n.z+.15),r.position.set(n.x-l-c.x*s-t*5,n.y-.45-c.y*s-t*1.4,n.z+.15)}function Sh(i,t={}){let e=new Hn({canvas:i,antialias:!0,alpha:!0,premultipliedAlpha:!0});e.toneMapping=di,e.outputColorSpace=de,e.setClearColor(0,0);let n=new Sn;n.environment=as(_e,e);let s=new pe(18,1,.1,100),r=os(_e,{quality:.8});n.add(r.group);let o=1,a=1,c=t.box||{x:195,y:441,h:416},l=-1,u=0,h=!0,d=!1,f=()=>{o=Math.max(1,i.clientWidth),a=Math.max(1,i.clientHeight),e.setPixelRatio(Math.min(2,(window.devicePixelRatio||1)*(t.scale||1))),e.setSize(o,a,!1);let g=ge.H/(c.h/a),A=g/2/Math.tan(pi.degToRad(9));s.aspect=o/a,s.position.set(0,0,A),s.updateProjectionMatrix();let p=g/a;s.setViewOffset(o,a,o/2-c.x,a/2-c.y,o,a)},m=g=>{if(!h||(u=requestAnimationFrame(m),!d))return;let A=l<0?0:g-l,p=A<650?Math.sin(A/650*Math.PI*7)*(1-A/650)*.06:0,M=is(650,1180,A),_=is(700,1050,A),x=mi.i(Ce((A-1900)/660,0,1));r.group.rotation.set(Math.sin(g/900)*.04,Math.sin(g/1400)*.12,p+x*.25),r.group.position.set(0,-x*ge.H*1.4,0),r.setTear(M),r.setMouth(_),r.setHolo(g/3e3+A/900),n.environmentRotation.set(0,g/5e3,0),e.clear(),e.render(n,s)};return f(),u=requestAnimationFrame(m),window.addEventListener("resize",f),{play(g,A){g&&(c=g),A!==void 0&&r.setLabel(A),f(),l=performance.now(),d=!0,i.style.opacity="1"},reset(){d=!1,l=-1,r.setTear(0),r.setMouth(0),e.clear(),i.style.opacity="0"},destroy(){h=!1,cancelAnimationFrame(u),window.removeEventListener("resize",f),r.dispose(),e.dispose()}}}window.SR4={THREE:_e,createHome:Eh,createRip:Sh,MILESTONES:yh,PAGES:Os,createPack:os,createCard:io,studioEnv:as,version:"4.1.0"};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
