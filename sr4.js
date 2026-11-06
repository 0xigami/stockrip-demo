(()=>{var bh=Object.defineProperty;var Bh=(i,t)=>{for(var e in t)bh(i,e,{get:t[e],enumerable:!0})};var ve={};Bh(ve,{AmbientLight:()=>Wr,BackSide:()=>Ee,Box3:()=>qe,BoxGeometry:()=>ci,BufferAttribute:()=>Oe,BufferGeometry:()=>Se,CanvasTexture:()=>ji,Color:()=>Gt,Curve:()=>ze,CustomBlending:()=>oc,DirectionalLight:()=>Hr,DoubleSide:()=>rn,Euler:()=>Ye,ExtrudeGeometry:()=>Lr,FrontSide:()=>dn,Group:()=>Un,LatheGeometry:()=>Pr,LinearFilter:()=>Ke,MathUtils:()=>pi,Matrix4:()=>re,Mesh:()=>Pe,MeshBasicMaterial:()=>Ki,MeshLambertMaterial:()=>zr,MeshPhysicalMaterial:()=>kr,MeshStandardMaterial:()=>Rs,NearestFilter:()=>He,NeutralToneMapping:()=>di,OneFactor:()=>ac,OneMinusSrcAlphaFactor:()=>ws,OrthographicCamera:()=>Vn,PMREMGenerator:()=>Zi,PerspectiveCamera:()=>pe,PlaneGeometry:()=>Gn,Quaternion:()=>Le,Ray:()=>kn,RingGeometry:()=>Ur,SRGBColorSpace:()=>de,Scene:()=>Sn,ShaderMaterial:()=>ke,Shape:()=>$i,ShapeGeometry:()=>Fr,SphereGeometry:()=>Nr,TorusGeometry:()=>Or,TubeGeometry:()=>Qr,UnsignedByteType:()=>an,Vector2:()=>ht,Vector3:()=>L,Vector4:()=>se,WebGLRenderTarget:()=>cn,WebGLRenderer:()=>Hn});var rc="170";var Th=0,yc=1,Dh=2;var Tl=1,Ih=2,_n=3,dn=0,Ee=1,rn=2,Fn=0,ki=1,wc=2,Ec=3,Sc=4,oc=5,ni=100,Rh=101,Ph=102,Lh=103,Uh=104,Fh=200,ac=201,Nh=202,Oh=203,Qo=204,ws=205,Qh=206,kh=207,zh=208,Gh=209,Vh=210,Hh=211,Wh=212,Yh=213,Xh=214,ko=0,zo=1,Go=2,Hi=3,Vo=4,Ho=5,Wo=6,Yo=7,cc=0,Jh=1,Kh=2,Nn=0,qh=1,Zh=2,jh=3,$h=4,tu=5,eu=6,di=7;var Dl=300,Wi=301,Yi=302,Xo=303,Jo=304,Yr=306,Ko=1e3,ri=1001,qo=1002,He=1003,nu=1004;var Qs=1005;var Ke=1006,oo=1007;var oi=1008;var an=1009,Il=1010,Rl=1011,Es=1012,lc=1013,ai=1014,yn=1015,Ps=1016,hc=1017,uc=1018,Xi=1020,Pl=35902,Ll=1021,Ul=1022,on=1023,Fl=1024,Nl=1025,zi=1026,Ji=1027,Ol=1028,dc=1029,Ql=1030,fc=1031;var pc=1033,hr=33776,ur=33777,dr=33778,fr=33779,Zo=35840,jo=35841,$o=35842,ta=35843,ea=36196,na=37492,ia=37496,sa=37808,ra=37809,oa=37810,aa=37811,ca=37812,la=37813,ha=37814,ua=37815,da=37816,fa=37817,pa=37818,Aa=37819,ma=37820,ga=37821,pr=36492,xa=36494,va=36495,kl=36283,_a=36284,Ma=36285,ya=36286;var Ar=2300,wa=2301,ao=2302,Cc=2400,bc=2401,Bc=2402;var iu=3200,su=3201;var Ac=0,ru=1,Ln="",de="srgb",es="srgb-linear",Xr="linear",ne="srgb";var wi=7680;var Tc=519,ou=512,au=513,cu=514,zl=515,lu=516,hu=517,uu=518,du=519,Dc=35044;var Ic="300 es",wn=2e3,mr=2001,Qn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rc=1234567,xs=Math.PI/180,Ss=180/Math.PI;function fi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ye[i&255]+ye[i>>8&255]+ye[i>>16&255]+ye[i>>24&255]+"-"+ye[t&255]+ye[t>>8&255]+"-"+ye[t>>16&15|64]+ye[t>>24&255]+"-"+ye[e&63|128]+ye[e>>8&255]+"-"+ye[e>>16&255]+ye[e>>24&255]+ye[n&255]+ye[n>>8&255]+ye[n>>16&255]+ye[n>>24&255]).toLowerCase()}function fe(i,t,e){return Math.max(t,Math.min(e,i))}function mc(i,t){return(i%t+t)%t}function fu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function pu(i,t,e){return i!==t?(e-i)/(t-i):0}function vs(i,t,e){return(1-e)*i+e*t}function Au(i,t,e,n){return vs(i,t,1-Math.exp(-e*n))}function mu(i,t=1){return t-Math.abs(mc(i,t*2)-t)}function gu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function xu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function vu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function _u(i,t){return i+Math.random()*(t-i)}function Mu(i){return i*(.5-Math.random())}function yu(i){i!==void 0&&(Rc=i);let t=Rc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function wu(i){return i*xs}function Eu(i){return i*Ss}function Su(i){return(i&i-1)===0&&i!==0}function Cu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function bu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Bu(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),p=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*d,c*u,a*l);break;case"YZY":i.set(c*u,a*h,c*d,a*l);break;case"ZXZ":i.set(c*d,c*u,a*h,a*l);break;case"XZX":i.set(a*h,c*m,c*p,a*l);break;case"YXY":i.set(c*p,a*h,c*m,a*l);break;case"ZYZ":i.set(c*m,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ni(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ie(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var pi={DEG2RAD:xs,RAD2DEG:Ss,generateUUID:fi,clamp:fe,euclideanModulo:mc,mapLinear:fu,inverseLerp:pu,lerp:vs,damp:Au,pingpong:mu,smoothstep:gu,smootherstep:xu,randInt:vu,randFloat:_u,randFloatSpread:Mu,seededRandom:yu,degToRad:wu,radToDeg:Eu,isPowerOfTwo:Su,ceilPowerOfTwo:Cu,floorPowerOfTwo:bu,setQuaternionFromProperEuler:Bu,normalize:Ie,denormalize:Ni},ht=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},kt=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],p=n[5],m=n[8],g=s[0],A=s[3],f=s[6],_=s[1],M=s[4],x=s[7],P=s[2],S=s[5],T=s[8];return r[0]=o*g+a*_+c*P,r[3]=o*A+a*M+c*S,r[6]=o*f+a*x+c*T,r[1]=l*g+h*_+d*P,r[4]=l*A+h*M+d*S,r[7]=l*f+h*x+d*T,r[2]=u*g+p*_+m*P,r[5]=u*A+p*M+m*S,r[8]=u*f+p*x+m*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,u=a*c-h*r,p=l*r-o*c,m=e*d+n*u+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/m;return t[0]=d*g,t[1]=(s*l-h*n)*g,t[2]=(a*n-s*o)*g,t[3]=u*g,t[4]=(h*e-s*c)*g,t[5]=(s*r-a*e)*g,t[6]=p*g,t[7]=(n*c-l*e)*g,t[8]=(o*e-n*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(co.makeScale(t,e)),this}rotate(t){return this.premultiply(co.makeRotation(-t)),this}translate(t,e){return this.premultiply(co.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},co=new kt;function Gl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function gr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Tu(){let i=gr("canvas");return i.style.display="block",i}var Pc={};function ms(i){i in Pc||(Pc[i]=!0,console.warn(i))}function Du(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Iu(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ru(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var qt={enabled:!0,workingColorSpace:es,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ne&&(i.r=En(i.r),i.g=En(i.g),i.b=En(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ne&&(i.r=Gi(i.r),i.g=Gi(i.g),i.b=Gi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ln?Xr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function En(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Gi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Lc=[.64,.33,.3,.6,.15,.06],Uc=[.2126,.7152,.0722],Fc=[.3127,.329],Nc=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Oc=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);qt.define({[es]:{primaries:Lc,whitePoint:Fc,transfer:Xr,toXYZ:Nc,fromXYZ:Oc,luminanceCoefficients:Uc,workingColorSpaceConfig:{unpackColorSpace:de},outputColorSpaceConfig:{drawingBufferColorSpace:de}},[de]:{primaries:Lc,whitePoint:Fc,transfer:ne,toXYZ:Nc,fromXYZ:Oc,luminanceCoefficients:Uc,outputColorSpaceConfig:{drawingBufferColorSpace:de}}});var Ei,Ea=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ei===void 0&&(Ei=gr("canvas")),Ei.width=t.width,Ei.height=t.height;let n=Ei.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ei}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=gr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=En(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(En(e[n]/255)*255):e[n]=En(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Pu=0,xr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=fi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(lo(s[o].image)):r.push(lo(s[o]))}else r=lo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function lo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ea.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Lu=0,We=class i extends Qn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ri,s=ri,r=Ke,o=oi,a=on,c=an,l=i.DEFAULT_ANISOTROPY,h=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=fi(),this.name="",this.source=new xr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Dl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ko:t.x=t.x-Math.floor(t.x);break;case ri:t.x=t.x<0?0:1;break;case qo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ko:t.y=t.y-Math.floor(t.y);break;case ri:t.y=t.y<0?0:1;break;case qo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=Dl;We.DEFAULT_ANISOTROPY=1;var se=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],p=c[5],m=c[9],g=c[2],A=c[6],f=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-g)<.01&&Math.abs(m-A)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+g)<.1&&Math.abs(m+A)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(l+1)/2,x=(p+1)/2,P=(f+1)/2,S=(h+u)/4,T=(d+g)/4,I=(m+A)/4;return M>x&&M>P?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=S/n,r=T/n):x>P?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=S/s,r=I/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=T/r,s=I/r),this.set(n,s,r,e),this}let _=Math.sqrt((A-m)*(A-m)+(d-g)*(d-g)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(A-m)/_,this.y=(d-g)/_,this.z=(u-h)/_,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Sa=class extends Qn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ke,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new We(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new xr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},cn=class extends Sa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},vr=class extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=He,this.minFilter=He,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ca=class extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=He,this.minFilter=He,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Le=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],p=r[o+1],m=r[o+2],g=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=p,t[e+2]=m,t[e+3]=g;return}if(d!==g||c!==u||l!==p||h!==m){let A=1-a,f=c*u+l*p+h*m+d*g,_=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){let P=Math.sqrt(M),S=Math.atan2(P,f*_);A=Math.sin(A*S)/P,a=Math.sin(a*S)/P}let x=a*_;if(c=c*A+u*x,l=l*A+p*x,h=h*A+m*x,d=d*A+g*x,A===1-a){let P=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=P,l*=P,h*=P,d*=P}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[o],u=r[o+1],p=r[o+2],m=r[o+3];return t[e]=a*m+h*d+c*p-l*u,t[e+1]=c*m+h*u+l*d-a*p,t[e+2]=l*m+h*p+a*u-c*d,t[e+3]=h*m-a*d-c*u-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),d=a(r/2),u=c(n/2),p=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=u*h*d+l*p*m,this._y=l*p*d-u*h*m,this._z=l*h*m+u*p*d,this._w=l*h*d-u*p*m;break;case"YXZ":this._x=u*h*d+l*p*m,this._y=l*p*d-u*h*m,this._z=l*h*m-u*p*d,this._w=l*h*d+u*p*m;break;case"ZXY":this._x=u*h*d-l*p*m,this._y=l*p*d+u*h*m,this._z=l*h*m+u*p*d,this._w=l*h*d-u*p*m;break;case"ZYX":this._x=u*h*d-l*p*m,this._y=l*p*d+u*h*m,this._z=l*h*m-u*p*d,this._w=l*h*d+u*p*m;break;case"YZX":this._x=u*h*d+l*p*m,this._y=l*p*d+u*h*m,this._z=l*h*m-u*p*d,this._w=l*h*d-u*p*m;break;case"XZY":this._x=u*h*d-l*p*m,this._y=l*p*d-u*h*m,this._z=l*h*m+u*p*d,this._w=l*h*d+u*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>d){let p=2*Math.sqrt(1+n-a-d);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>d){let p=2*Math.sqrt(1+a-n-d);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+d-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Qc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Qc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=s+c*d+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ho.copy(this).projectOnVector(t),this.sub(ho)}reflect(t){return this.sub(ho.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ho=new L,Qc=new Le,qe=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(en.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(en.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=en.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,en):en.fromBufferAttribute(r,o),en.applyMatrix4(t.matrixWorld),this.expandByPoint(en);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ks.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ks.copy(n.boundingBox)),ks.applyMatrix4(t.matrixWorld),this.union(ks)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,en),en.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ds),zs.subVectors(this.max,ds),Si.subVectors(t.a,ds),Ci.subVectors(t.b,ds),bi.subVectors(t.c,ds),Bn.subVectors(Ci,Si),Tn.subVectors(bi,Ci),Kn.subVectors(Si,bi);let e=[0,-Bn.z,Bn.y,0,-Tn.z,Tn.y,0,-Kn.z,Kn.y,Bn.z,0,-Bn.x,Tn.z,0,-Tn.x,Kn.z,0,-Kn.x,-Bn.y,Bn.x,0,-Tn.y,Tn.x,0,-Kn.y,Kn.x,0];return!uo(e,Si,Ci,bi,zs)||(e=[1,0,0,0,1,0,0,0,1],!uo(e,Si,Ci,bi,zs))?!1:(Gs.crossVectors(Bn,Tn),e=[Gs.x,Gs.y,Gs.z],uo(e,Si,Ci,bi,zs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,en).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(en).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(An),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},An=[new L,new L,new L,new L,new L,new L,new L,new L],en=new L,ks=new qe,Si=new L,Ci=new L,bi=new L,Bn=new L,Tn=new L,Kn=new L,ds=new L,zs=new L,Gs=new L,qn=new L;function uo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){qn.fromArray(i,r);let a=s.x*Math.abs(qn.x)+s.y*Math.abs(qn.y)+s.z*Math.abs(qn.z),c=t.dot(qn),l=e.dot(qn),h=n.dot(qn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Uu=new qe,fs=new L,fo=new L,Cs=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Uu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fs.subVectors(t,this.center);let e=fs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(fs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fs.copy(t.center).add(fo)),this.expandByPoint(fs.copy(t.center).sub(fo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},mn=new L,po=new L,Vs=new L,Dn=new L,Ao=new L,Hs=new L,mo=new L,kn=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mn.copy(this.origin).addScaledVector(this.direction,e),mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){po.copy(t).add(e).multiplyScalar(.5),Vs.copy(e).sub(t).normalize(),Dn.copy(this.origin).sub(po);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Vs),a=Dn.dot(this.direction),c=-Dn.dot(Vs),l=Dn.lengthSq(),h=Math.abs(1-o*o),d,u,p,m;if(h>0)if(d=o*c-a,u=o*a-c,m=r*h,d>=0)if(u>=-m)if(u<=m){let g=1/h;d*=g,u*=g,p=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*c)+l;else u<=-m?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+u*(u+2*c)+l):u<=m?(d=0,u=Math.min(Math.max(-r,-c),r),p=u*(u+2*c)+l):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+u*(u+2*c)+l);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(po).addScaledVector(Vs,u),p}intersectSphere(t,e){mn.subVectors(t.center,this.origin);let n=mn.dot(this.direction),s=mn.dot(mn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,mn)!==null}intersectTriangle(t,e,n,s,r){Ao.subVectors(e,t),Hs.subVectors(n,t),mo.crossVectors(Ao,Hs);let o=this.direction.dot(mo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Dn.subVectors(this.origin,t);let c=a*this.direction.dot(Hs.crossVectors(Dn,Hs));if(c<0)return null;let l=a*this.direction.dot(Ao.cross(Dn));if(l<0||c+l>o)return null;let h=-a*Dn.dot(mo);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},re=class i{constructor(t,e,n,s,r,o,a,c,l,h,d,u,p,m,g,A){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,d,u,p,m,g,A)}set(t,e,n,s,r,o,a,c,l,h,d,u,p,m,g,A){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=m,f[11]=g,f[15]=A,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Bi.setFromMatrixColumn(t,0).length(),r=1/Bi.setFromMatrixColumn(t,1).length(),o=1/Bi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,p=o*d,m=a*h,g=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=p+m*l,e[5]=u-g*l,e[9]=-a*c,e[2]=g-u*l,e[6]=m+p*l,e[10]=o*c}else if(t.order==="YXZ"){let u=c*h,p=c*d,m=l*h,g=l*d;e[0]=u+g*a,e[4]=m*a-p,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=p*a-m,e[6]=g+u*a,e[10]=o*c}else if(t.order==="ZXY"){let u=c*h,p=c*d,m=l*h,g=l*d;e[0]=u-g*a,e[4]=-o*d,e[8]=m+p*a,e[1]=p+m*a,e[5]=o*h,e[9]=g-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let u=o*h,p=o*d,m=a*h,g=a*d;e[0]=c*h,e[4]=m*l-p,e[8]=u*l+g,e[1]=c*d,e[5]=g*l+u,e[9]=p*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let u=o*c,p=o*l,m=a*c,g=a*l;e[0]=c*h,e[4]=g-u*d,e[8]=m*d+p,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*d+m,e[10]=u-g*d}else if(t.order==="XZY"){let u=o*c,p=o*l,m=a*c,g=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+g,e[5]=o*h,e[9]=p*d-m,e[2]=m*d-p,e[6]=a*h,e[10]=g*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fu,t,Nu)}lookAt(t,e,n){let s=this.elements;return Ge.subVectors(t,e),Ge.lengthSq()===0&&(Ge.z=1),Ge.normalize(),In.crossVectors(n,Ge),In.lengthSq()===0&&(Math.abs(n.z)===1?Ge.x+=1e-4:Ge.z+=1e-4,Ge.normalize(),In.crossVectors(n,Ge)),In.normalize(),Ws.crossVectors(Ge,In),s[0]=In.x,s[4]=Ws.x,s[8]=Ge.x,s[1]=In.y,s[5]=Ws.y,s[9]=Ge.y,s[2]=In.z,s[6]=Ws.z,s[10]=Ge.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],p=n[13],m=n[2],g=n[6],A=n[10],f=n[14],_=n[3],M=n[7],x=n[11],P=n[15],S=s[0],T=s[4],I=s[8],E=s[12],y=s[1],R=s[5],H=s[9],N=s[13],G=s[2],J=s[6],V=s[10],q=s[14],z=s[3],it=s[7],ut=s[11],nt=s[15];return r[0]=o*S+a*y+c*G+l*z,r[4]=o*T+a*R+c*J+l*it,r[8]=o*I+a*H+c*V+l*ut,r[12]=o*E+a*N+c*q+l*nt,r[1]=h*S+d*y+u*G+p*z,r[5]=h*T+d*R+u*J+p*it,r[9]=h*I+d*H+u*V+p*ut,r[13]=h*E+d*N+u*q+p*nt,r[2]=m*S+g*y+A*G+f*z,r[6]=m*T+g*R+A*J+f*it,r[10]=m*I+g*H+A*V+f*ut,r[14]=m*E+g*N+A*q+f*nt,r[3]=_*S+M*y+x*G+P*z,r[7]=_*T+M*R+x*J+P*it,r[11]=_*I+M*H+x*V+P*ut,r[15]=_*E+M*N+x*q+P*nt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],p=t[14],m=t[3],g=t[7],A=t[11],f=t[15];return m*(+r*c*d-s*l*d-r*a*u+n*l*u+s*a*p-n*c*p)+g*(+e*c*p-e*l*u+r*o*u-s*o*p+s*l*h-r*c*h)+A*(+e*l*d-e*a*p-r*o*d+n*o*p+r*a*h-n*l*h)+f*(-s*a*h-e*c*d+e*a*u+s*o*d-n*o*u+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],p=t[11],m=t[12],g=t[13],A=t[14],f=t[15],_=d*A*l-g*u*l+g*c*p-a*A*p-d*c*f+a*u*f,M=m*u*l-h*A*l-m*c*p+o*A*p+h*c*f-o*u*f,x=h*g*l-m*d*l+m*a*p-o*g*p-h*a*f+o*d*f,P=m*d*c-h*g*c-m*a*u+o*g*u+h*a*A-o*d*A,S=e*_+n*M+s*x+r*P;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/S;return t[0]=_*T,t[1]=(g*u*r-d*A*r-g*s*p+n*A*p+d*s*f-n*u*f)*T,t[2]=(a*A*r-g*c*r+g*s*l-n*A*l-a*s*f+n*c*f)*T,t[3]=(d*c*r-a*u*r-d*s*l+n*u*l+a*s*p-n*c*p)*T,t[4]=M*T,t[5]=(h*A*r-m*u*r+m*s*p-e*A*p-h*s*f+e*u*f)*T,t[6]=(m*c*r-o*A*r-m*s*l+e*A*l+o*s*f-e*c*f)*T,t[7]=(o*u*r-h*c*r+h*s*l-e*u*l-o*s*p+e*c*p)*T,t[8]=x*T,t[9]=(m*d*r-h*g*r-m*n*p+e*g*p+h*n*f-e*d*f)*T,t[10]=(o*g*r-m*a*r+m*n*l-e*g*l-o*n*f+e*a*f)*T,t[11]=(h*a*r-o*d*r-h*n*l+e*d*l+o*n*p-e*a*p)*T,t[12]=P*T,t[13]=(h*g*s-m*d*s+m*n*u-e*g*u-h*n*A+e*d*A)*T,t[14]=(m*a*s-o*g*s-m*n*c+e*g*c+o*n*A-e*a*A)*T,t[15]=(o*d*s-h*a*s+h*n*c-e*d*c-o*n*u+e*a*u)*T,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,d=a+a,u=r*l,p=r*h,m=r*d,g=o*h,A=o*d,f=a*d,_=c*l,M=c*h,x=c*d,P=n.x,S=n.y,T=n.z;return s[0]=(1-(g+f))*P,s[1]=(p+x)*P,s[2]=(m-M)*P,s[3]=0,s[4]=(p-x)*S,s[5]=(1-(u+f))*S,s[6]=(A+_)*S,s[7]=0,s[8]=(m+M)*T,s[9]=(A-_)*T,s[10]=(1-(u+g))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Bi.set(s[0],s[1],s[2]).length(),o=Bi.set(s[4],s[5],s[6]).length(),a=Bi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],nn.copy(this);let l=1/r,h=1/o,d=1/a;return nn.elements[0]*=l,nn.elements[1]*=l,nn.elements[2]*=l,nn.elements[4]*=h,nn.elements[5]*=h,nn.elements[6]*=h,nn.elements[8]*=d,nn.elements[9]*=d,nn.elements[10]*=d,e.setFromRotationMatrix(nn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=wn){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s),p,m;if(a===wn)p=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===mr)p=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=wn){let c=this.elements,l=1/(e-t),h=1/(n-s),d=1/(o-r),u=(e+t)*l,p=(n+s)*h,m,g;if(a===wn)m=(o+r)*d,g=-2*d;else if(a===mr)m=r*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=g,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Bi=new L,nn=new re,Fu=new L(0,0,0),Nu=new L(1,1,1),In=new L,Ws=new L,Ge=new L,kc=new re,zc=new Le,Ye=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(fe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-fe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(fe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return kc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(kc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zc.setFromEuler(this),this.setFromQuaternion(zc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ye.DEFAULT_ORDER="XYZ";var _r=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ou=0,Gc=new L,Ti=new Le,gn=new re,Ys=new L,ps=new L,Qu=new L,ku=new Le,Vc=new L(1,0,0),Hc=new L(0,1,0),Wc=new L(0,0,1),Yc={type:"added"},zu={type:"removed"},Di={type:"childadded",child:null},go={type:"childremoved",child:null},Qe=class i extends Qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new L,e=new Ye,n=new Le,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new re},normalMatrix:{value:new kt}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _r,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ti.setFromAxisAngle(t,e),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(t,e){return Ti.setFromAxisAngle(t,e),this.quaternion.premultiply(Ti),this}rotateX(t){return this.rotateOnAxis(Vc,t)}rotateY(t){return this.rotateOnAxis(Hc,t)}rotateZ(t){return this.rotateOnAxis(Wc,t)}translateOnAxis(t,e){return Gc.copy(t).applyQuaternion(this.quaternion),this.position.add(Gc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vc,t)}translateY(t){return this.translateOnAxis(Hc,t)}translateZ(t){return this.translateOnAxis(Wc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ys.copy(t):Ys.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(ps,Ys,this.up):gn.lookAt(Ys,ps,this.up),this.quaternion.setFromRotationMatrix(gn),s&&(gn.extractRotation(s.matrixWorld),Ti.setFromRotationMatrix(gn),this.quaternion.premultiply(Ti.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yc),Di.child=t,this.dispatchEvent(Di),Di.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(zu),go.child=t,this.dispatchEvent(go),go.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yc),Di.child=t,this.dispatchEvent(Di),Di.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,t,Qu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,ku,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),p=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Qe.DEFAULT_UP=new L(0,1,0);Qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var sn=new L,xn=new L,xo=new L,vn=new L,Ii=new L,Ri=new L,Xc=new L,vo=new L,_o=new L,Mo=new L,yo=new se,wo=new se,Eo=new se,ii=class i{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),sn.subVectors(t,e),s.cross(sn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){sn.subVectors(s,e),xn.subVectors(n,e),xo.subVectors(t,e);let o=sn.dot(sn),a=sn.dot(xn),c=sn.dot(xo),l=xn.dot(xn),h=xn.dot(xo),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,p=(l*c-a*h)*u,m=(o*h-a*c)*u;return r.set(1-p-m,m,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,vn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,vn.x),c.addScaledVector(o,vn.y),c.addScaledVector(a,vn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return yo.setScalar(0),wo.setScalar(0),Eo.setScalar(0),yo.fromBufferAttribute(t,e),wo.fromBufferAttribute(t,n),Eo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(yo,r.x),o.addScaledVector(wo,r.y),o.addScaledVector(Eo,r.z),o}static isFrontFacing(t,e,n,s){return sn.subVectors(n,e),xn.subVectors(t,e),sn.cross(xn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return sn.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),sn.cross(xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Ii.subVectors(s,n),Ri.subVectors(r,n),vo.subVectors(t,n);let c=Ii.dot(vo),l=Ri.dot(vo);if(c<=0&&l<=0)return e.copy(n);_o.subVectors(t,s);let h=Ii.dot(_o),d=Ri.dot(_o);if(h>=0&&d<=h)return e.copy(s);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Ii,o);Mo.subVectors(t,r);let p=Ii.dot(Mo),m=Ri.dot(Mo);if(m>=0&&p<=m)return e.copy(r);let g=p*l-c*m;if(g<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(Ri,a);let A=h*m-p*d;if(A<=0&&d-h>=0&&p-m>=0)return Xc.subVectors(r,s),a=(d-h)/(d-h+(p-m)),e.copy(s).addScaledVector(Xc,a);let f=1/(A+g+u);return o=g*f,a=u*f,e.copy(n).addScaledVector(Ii,o).addScaledVector(Ri,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Vl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},Xs={h:0,s:0,l:0};function So(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Gt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=de){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=qt.workingColorSpace){if(t=mc(t,1),e=fe(e,0,1),n=fe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=So(o,r,t+1/3),this.g=So(o,r,t),this.b=So(o,r,t-1/3)}return qt.toWorkingColorSpace(this,s),this}setStyle(t,e=de){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=de){let n=Vl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=En(t.r),this.g=En(t.g),this.b=En(t.b),this}copyLinearToSRGB(t){return this.r=Gi(t.r),this.g=Gi(t.g),this.b=Gi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=de){return qt.fromWorkingColorSpace(we.copy(this),t),Math.round(fe(we.r*255,0,255))*65536+Math.round(fe(we.g*255,0,255))*256+Math.round(fe(we.b*255,0,255))}getHexString(t=de){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(we.copy(this),e);let n=we.r,s=we.g,r=we.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(we.copy(this),e),t.r=we.r,t.g=we.g,t.b=we.b,t}getStyle(t=de){qt.fromWorkingColorSpace(we.copy(this),t);let e=we.r,n=we.g,s=we.b;return t!==de?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Rn),this.setHSL(Rn.h+t,Rn.s+e,Rn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Rn),t.getHSL(Xs);let n=vs(Rn.h,Xs.h,e),s=vs(Rn.s,Xs.s,e),r=vs(Rn.l,Xs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},we=new Gt;Gt.NAMES=Vl;var Gu=0,zn=class extends Qn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gu++}),this.uuid=fi(),this.name="",this.blending=ki,this.side=dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qo,this.blendDst=ws,this.blendEquation=ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=Hi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wi,this.stencilZFail=wi,this.stencilZPass=wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ki&&(n.blending=this.blending),this.side!==dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Qo&&(n.blendSrc=this.blendSrc),this.blendDst!==ws&&(n.blendDst=this.blendDst),this.blendEquation!==ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Hi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ki=class extends zn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ye,this.combine=cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var he=new L,Js=new ht,Oe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Dc,this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Js.fromBufferAttribute(this,e),Js.applyMatrix3(t),this.setXY(e,Js.x,Js.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.applyMatrix3(t),this.setXYZ(e,he.x,he.y,he.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.applyMatrix4(t),this.setXYZ(e,he.x,he.y,he.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.applyNormalMatrix(t),this.setXYZ(e,he.x,he.y,he.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.transformDirection(t),this.setXYZ(e,he.x,he.y,he.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ni(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ie(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ni(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ni(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ni(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ni(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),s=Ie(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),s=Ie(s,this.array),r=Ie(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Dc&&(t.usage=this.usage),t}};var Mr=class extends Oe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var yr=class extends Oe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var te=class extends Oe{constructor(t,e,n){super(new Float32Array(t),e,n)}},Vu=0,Je=new re,Co=new Qe,Pi=new L,Ve=new qe,As=new qe,xe=new L,Se=class i extends Qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gl(t)?yr:Mr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Je.makeRotationFromQuaternion(t),this.applyMatrix4(Je),this}rotateX(t){return Je.makeRotationX(t),this.applyMatrix4(Je),this}rotateY(t){return Je.makeRotationY(t),this.applyMatrix4(Je),this}rotateZ(t){return Je.makeRotationZ(t),this.applyMatrix4(Je),this}translate(t,e,n){return Je.makeTranslation(t,e,n),this.applyMatrix4(Je),this}scale(t,e,n){return Je.makeScale(t,e,n),this.applyMatrix4(Je),this}lookAt(t){return Co.lookAt(t),Co.updateMatrix(),this.applyMatrix4(Co.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pi).negate(),this.translate(Pi.x,Pi.y,Pi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new te(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qe);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ve.setFromBufferAttribute(r),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,Ve.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,Ve.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(Ve.min),this.boundingBox.expandByPoint(Ve.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(Ve.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];As.setFromBufferAttribute(a),this.morphTargetsRelative?(xe.addVectors(Ve.min,As.min),Ve.expandByPoint(xe),xe.addVectors(Ve.max,As.max),Ve.expandByPoint(xe)):(Ve.expandByPoint(As.min),Ve.expandByPoint(As.max))}Ve.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)xe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(xe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)xe.fromBufferAttribute(a,l),c&&(Pi.fromBufferAttribute(t,l),xe.add(Pi)),s=Math.max(s,n.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oe(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new L,c[I]=new L;let l=new L,h=new L,d=new L,u=new ht,p=new ht,m=new ht,g=new L,A=new L;function f(I,E,y){l.fromBufferAttribute(n,I),h.fromBufferAttribute(n,E),d.fromBufferAttribute(n,y),u.fromBufferAttribute(r,I),p.fromBufferAttribute(r,E),m.fromBufferAttribute(r,y),h.sub(l),d.sub(l),p.sub(u),m.sub(u);let R=1/(p.x*m.y-m.x*p.y);isFinite(R)&&(g.copy(h).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(R),A.copy(d).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(R),a[I].add(g),a[E].add(g),a[y].add(g),c[I].add(A),c[E].add(A),c[y].add(A))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let I=0,E=_.length;I<E;++I){let y=_[I],R=y.start,H=y.count;for(let N=R,G=R+H;N<G;N+=3)f(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let M=new L,x=new L,P=new L,S=new L;function T(I){P.fromBufferAttribute(s,I),S.copy(P);let E=a[I];M.copy(E),M.sub(P.multiplyScalar(P.dot(E))).normalize(),x.crossVectors(S,E);let R=x.dot(c[I])<0?-1:1;o.setXYZW(I,M.x,M.y,M.z,R)}for(let I=0,E=_.length;I<E;++I){let y=_[I],R=y.start,H=y.count;for(let N=R,G=R+H;N<G;N+=3)T(t.getX(N+0)),T(t.getX(N+1)),T(t.getX(N+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Oe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,d=new L;if(t)for(let u=0,p=t.count;u<p;u+=3){let m=t.getX(u+0),g=t.getX(u+1),A=t.getX(u+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,A),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,A),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(A,l.x,l.y,l.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h),p=0,m=0;for(let g=0,A=c.length;g<A;g++){a.isInterleavedBufferAttribute?p=c[g]*a.data.stride+a.offset:p=c[g]*h;for(let f=0;f<h;f++)u[m++]=l[p++]}return new Oe(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){let u=l[h],p=t(u,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let p=l[d];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jc=new re,Zn=new kn,Ks=new Cs,Kc=new L,qs=new L,Zs=new L,js=new L,bo=new L,$s=new L,qc=new L,tr=new L,Pe=class extends Qe{constructor(t=new Se,e=new Ki){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){$s.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],d=r[c];h!==0&&(bo.fromBufferAttribute(d,t),o?$s.addScaledVector(bo,h):$s.addScaledVector(bo.sub(e),h))}e.add($s)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ks.copy(n.boundingSphere),Ks.applyMatrix4(r),Zn.copy(t.ray).recast(t.near),!(Ks.containsPoint(Zn.origin)===!1&&(Zn.intersectSphere(Ks,Kc)===null||Zn.origin.distanceToSquared(Kc)>(t.far-t.near)**2))&&(Jc.copy(r).invert(),Zn.copy(t.ray).applyMatrix4(Jc),!(n.boundingBox!==null&&Zn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Zn)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,g=u.length;m<g;m++){let A=u[m],f=o[A.materialIndex],_=Math.max(A.start,p.start),M=Math.min(a.count,Math.min(A.start+A.count,p.start+p.count));for(let x=_,P=M;x<P;x+=3){let S=a.getX(x),T=a.getX(x+1),I=a.getX(x+2);s=er(this,f,t,n,l,h,d,S,T,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=A.materialIndex,e.push(s))}}else{let m=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let A=m,f=g;A<f;A+=3){let _=a.getX(A),M=a.getX(A+1),x=a.getX(A+2);s=er(this,o,t,n,l,h,d,_,M,x),s&&(s.faceIndex=Math.floor(A/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,g=u.length;m<g;m++){let A=u[m],f=o[A.materialIndex],_=Math.max(A.start,p.start),M=Math.min(c.count,Math.min(A.start+A.count,p.start+p.count));for(let x=_,P=M;x<P;x+=3){let S=x,T=x+1,I=x+2;s=er(this,f,t,n,l,h,d,S,T,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=A.materialIndex,e.push(s))}}else{let m=Math.max(0,p.start),g=Math.min(c.count,p.start+p.count);for(let A=m,f=g;A<f;A+=3){let _=A,M=A+1,x=A+2;s=er(this,o,t,n,l,h,d,_,M,x),s&&(s.faceIndex=Math.floor(A/3),e.push(s))}}}};function Hu(i,t,e,n,s,r,o,a){let c;if(t.side===Ee?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===dn,a),c===null)return null;tr.copy(a),tr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(tr);return l<e.near||l>e.far?null:{distance:l,point:tr.clone(),object:i}}function er(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,qs),i.getVertexPosition(c,Zs),i.getVertexPosition(l,js);let h=Hu(i,t,e,n,qs,Zs,js,qc);if(h){let d=new L;ii.getBarycoord(qc,qs,Zs,js,d),s&&(h.uv=ii.getInterpolatedAttribute(s,a,c,l,d,new ht)),r&&(h.uv1=ii.getInterpolatedAttribute(r,a,c,l,d,new ht)),o&&(h.normal=ii.getInterpolatedAttribute(o,a,c,l,d,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new L,materialIndex:0};ii.getNormal(qs,Zs,js,u.normal),h.face=u,h.barycoord=d}return h}var ci=class i extends Se{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],d=[],u=0,p=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new te(l,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(d,2));function m(g,A,f,_,M,x,P,S,T,I,E){let y=x/T,R=P/I,H=x/2,N=P/2,G=S/2,J=T+1,V=I+1,q=0,z=0,it=new L;for(let ut=0;ut<V;ut++){let nt=ut*R-N;for(let wt=0;wt<J;wt++){let Rt=wt*y-H;it[g]=Rt*_,it[A]=nt*M,it[f]=G,l.push(it.x,it.y,it.z),it[g]=0,it[A]=0,it[f]=S>0?1:-1,h.push(it.x,it.y,it.z),d.push(wt/T),d.push(1-ut/I),q+=1}}for(let ut=0;ut<I;ut++)for(let nt=0;nt<T;nt++){let wt=u+nt+J*ut,Rt=u+nt+J*(ut+1),k=u+(nt+1)+J*(ut+1),rt=u+(nt+1)+J*ut;c.push(wt,Rt,rt),c.push(Rt,k,rt),z+=6}a.addGroup(p,z,E),p+=z,u+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function qi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Re(i){let t={};for(let e=0;e<i.length;e++){let n=qi(i[e]);for(let s in n)t[s]=n[s]}return t}function Wu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Hl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}var Yu={clone:qi,merge:Re},Xu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ju=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ke=class extends zn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xu,this.fragmentShader=Ju,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qi(t.uniforms),this.uniformsGroups=Wu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},wr=class extends Qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=wn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Pn=new L,Zc=new ht,jc=new ht,pe=class extends wr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ss*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(xs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ss*2*Math.atan(Math.tan(xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Pn.x,Pn.y).multiplyScalar(-t/Pn.z),Pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pn.x,Pn.y).multiplyScalar(-t/Pn.z)}getViewSize(t,e){return this.getViewBounds(t,Zc,jc),e.subVectors(jc,Zc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(xs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Li=-90,Ui=1,ba=class extends Qe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new pe(Li,Ui,t,e);s.layers=this.layers,this.add(s);let r=new pe(Li,Ui,t,e);r.layers=this.layers,this.add(r);let o=new pe(Li,Ui,t,e);o.layers=this.layers,this.add(o);let a=new pe(Li,Ui,t,e);a.layers=this.layers,this.add(a);let c=new pe(Li,Ui,t,e);c.layers=this.layers,this.add(c);let l=new pe(Li,Ui,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===wn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===mr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Er=class extends We{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Wi,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ba=class extends cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Er(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ke}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ci(5,5,5),r=new ke({name:"CubemapFromEquirect",uniforms:qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ee,blending:Fn});r.uniforms.tEquirect.value=e;let o=new Pe(s,r),a=e.minFilter;return e.minFilter===oi&&(e.minFilter=Ke),new ba(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Bo=new L,Ku=new L,qu=new kt,Mn=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Bo.subVectors(n,e).cross(Ku.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Bo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||qu.getNormalMatrix(t),s=this.coplanarPoint(Bo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},jn=new Cs,nr=new L,bs=class{constructor(t=new Mn,e=new Mn,n=new Mn,s=new Mn,r=new Mn,o=new Mn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=wn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],d=s[6],u=s[7],p=s[8],m=s[9],g=s[10],A=s[11],f=s[12],_=s[13],M=s[14],x=s[15];if(n[0].setComponents(c-r,u-l,A-p,x-f).normalize(),n[1].setComponents(c+r,u+l,A+p,x+f).normalize(),n[2].setComponents(c+o,u+h,A+m,x+_).normalize(),n[3].setComponents(c-o,u-h,A-m,x-_).normalize(),n[4].setComponents(c-a,u-d,A-g,x-M).normalize(),e===wn)n[5].setComponents(c+a,u+d,A+g,x+M).normalize();else if(e===mr)n[5].setComponents(a,d,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),jn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),jn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(jn)}intersectsSprite(t){return jn.center.set(0,0,0),jn.radius=.7071067811865476,jn.applyMatrix4(t.matrixWorld),this.intersectsSphere(jn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(nr.x=s.normal.x>0?t.max.x:t.min.x,nr.y=s.normal.y>0?t.max.y:t.min.y,nr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(nr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Wl(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Zu(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,h);else{d.sort((p,m)=>p.start-m.start);let u=0;for(let p=1;p<d.length;p++){let m=d[u],g=d[p];g.start<=m.start+m.count+1?m.count=Math.max(m.count,g.start+g.count-m.start):(++u,d[u]=g)}d.length=u+1;for(let p=0,m=d.length;p<m;p++){let g=d[p];i.bufferSubData(l,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Gn=class i extends Se{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,d=t/a,u=e/c,p=[],m=[],g=[],A=[];for(let f=0;f<h;f++){let _=f*u-o;for(let M=0;M<l;M++){let x=M*d-r;m.push(x,-_,0),g.push(0,0,1),A.push(M/a),A.push(1-f/c)}}for(let f=0;f<c;f++)for(let _=0;_<a;_++){let M=_+l*f,x=_+l*(f+1),P=_+1+l*(f+1),S=_+1+l*f;p.push(M,x,S),p.push(x,P,S)}this.setIndex(p),this.setAttribute("position",new te(m,3)),this.setAttribute("normal",new te(g,3)),this.setAttribute("uv",new te(A,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},ju=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$u=`#ifdef USE_ALPHAHASH
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
#endif`,td=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ed=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,id=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sd=`#ifdef USE_AOMAP
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
#endif`,rd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,od=`#ifdef USE_BATCHING
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
#endif`,ad=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ld=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ud=`#ifdef USE_IRIDESCENCE
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
#endif`,dd=`#ifdef USE_BUMPMAP
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
#endif`,fd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ad=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,md=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_d=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Md=`#define PI 3.141592653589793
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
} // validated`,yd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ed=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Td=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dd=`#ifdef USE_ENVMAP
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
#endif`,Id=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rd=`#ifdef USE_ENVMAP
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
#endif`,Pd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ld=`#ifdef USE_ENVMAP
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
#endif`,Ud=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Od=`#ifdef USE_FOG
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
}`,kd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vd=`uniform bool receiveShadow;
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
#endif`,Hd=`#ifdef USE_ENVMAP
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
#endif`,Wd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kd=`PhysicalMaterial material;
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
#endif`,qd=`struct PhysicalMaterial {
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
}`,Zd=`
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
#endif`,jd=`#if defined( RE_IndirectDiffuse )
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
#endif`,$d=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ef=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,of=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,af=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cf=`#if defined( USE_POINTS_UV )
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
#endif`,lf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,df=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ff=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pf=`#ifdef USE_MORPHTARGETS
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
#endif`,Af=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_f=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mf=`#ifdef USE_NORMALMAP
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
#endif`,yf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ef=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Df=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,If=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Uf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ff=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Nf=`float getShadowMask() {
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
}`,Of=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qf=`#ifdef USE_SKINNING
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
#endif`,kf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zf=`#ifdef USE_SKINNING
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
#endif`,Gf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yf=`#ifdef USE_TRANSMISSION
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
#endif`,Xf=`#ifdef USE_TRANSMISSION
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
#endif`,Jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,jf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$f=`uniform sampler2D t2D;
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
}`,tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ep=`#ifdef ENVMAP_TYPE_CUBE
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
}`,np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ip=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sp=`#include <common>
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
}`,rp=`#if DEPTH_PACKING == 3200
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
}`,op=`#define DISTANCE
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
}`,ap=`#define DISTANCE
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
}`,cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hp=`uniform float scale;
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
}`,up=`uniform vec3 diffuse;
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
}`,dp=`#include <common>
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
}`,fp=`uniform vec3 diffuse;
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
}`,pp=`#define LAMBERT
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
}`,Ap=`#define LAMBERT
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
}`,mp=`#define MATCAP
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
}`,gp=`#define MATCAP
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
}`,xp=`#define NORMAL
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
}`,vp=`#define NORMAL
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
}`,_p=`#define PHONG
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
}`,Mp=`#define PHONG
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
}`,yp=`#define STANDARD
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
}`,wp=`#define STANDARD
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
}`,Ep=`#define TOON
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
}`,Sp=`#define TOON
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
}`,Cp=`uniform float size;
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
}`,bp=`uniform vec3 diffuse;
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
}`,Bp=`#include <common>
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
}`,Tp=`uniform vec3 color;
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
}`,Dp=`uniform float rotation;
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
}`,Ip=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:ju,alphahash_pars_fragment:$u,alphamap_fragment:td,alphamap_pars_fragment:ed,alphatest_fragment:nd,alphatest_pars_fragment:id,aomap_fragment:sd,aomap_pars_fragment:rd,batching_pars_vertex:od,batching_vertex:ad,begin_vertex:cd,beginnormal_vertex:ld,bsdfs:hd,iridescence_fragment:ud,bumpmap_pars_fragment:dd,clipping_planes_fragment:fd,clipping_planes_pars_fragment:pd,clipping_planes_pars_vertex:Ad,clipping_planes_vertex:md,color_fragment:gd,color_pars_fragment:xd,color_pars_vertex:vd,color_vertex:_d,common:Md,cube_uv_reflection_fragment:yd,defaultnormal_vertex:wd,displacementmap_pars_vertex:Ed,displacementmap_vertex:Sd,emissivemap_fragment:Cd,emissivemap_pars_fragment:bd,colorspace_fragment:Bd,colorspace_pars_fragment:Td,envmap_fragment:Dd,envmap_common_pars_fragment:Id,envmap_pars_fragment:Rd,envmap_pars_vertex:Pd,envmap_physical_pars_fragment:Hd,envmap_vertex:Ld,fog_vertex:Ud,fog_pars_vertex:Fd,fog_fragment:Nd,fog_pars_fragment:Od,gradientmap_pars_fragment:Qd,lightmap_pars_fragment:kd,lights_lambert_fragment:zd,lights_lambert_pars_fragment:Gd,lights_pars_begin:Vd,lights_toon_fragment:Wd,lights_toon_pars_fragment:Yd,lights_phong_fragment:Xd,lights_phong_pars_fragment:Jd,lights_physical_fragment:Kd,lights_physical_pars_fragment:qd,lights_fragment_begin:Zd,lights_fragment_maps:jd,lights_fragment_end:$d,logdepthbuf_fragment:tf,logdepthbuf_pars_fragment:ef,logdepthbuf_pars_vertex:nf,logdepthbuf_vertex:sf,map_fragment:rf,map_pars_fragment:of,map_particle_fragment:af,map_particle_pars_fragment:cf,metalnessmap_fragment:lf,metalnessmap_pars_fragment:hf,morphinstance_vertex:uf,morphcolor_vertex:df,morphnormal_vertex:ff,morphtarget_pars_vertex:pf,morphtarget_vertex:Af,normal_fragment_begin:mf,normal_fragment_maps:gf,normal_pars_fragment:xf,normal_pars_vertex:vf,normal_vertex:_f,normalmap_pars_fragment:Mf,clearcoat_normal_fragment_begin:yf,clearcoat_normal_fragment_maps:wf,clearcoat_pars_fragment:Ef,iridescence_pars_fragment:Sf,opaque_fragment:Cf,packing:bf,premultiplied_alpha_fragment:Bf,project_vertex:Tf,dithering_fragment:Df,dithering_pars_fragment:If,roughnessmap_fragment:Rf,roughnessmap_pars_fragment:Pf,shadowmap_pars_fragment:Lf,shadowmap_pars_vertex:Uf,shadowmap_vertex:Ff,shadowmask_pars_fragment:Nf,skinbase_vertex:Of,skinning_pars_vertex:Qf,skinning_vertex:kf,skinnormal_vertex:zf,specularmap_fragment:Gf,specularmap_pars_fragment:Vf,tonemapping_fragment:Hf,tonemapping_pars_fragment:Wf,transmission_fragment:Yf,transmission_pars_fragment:Xf,uv_pars_fragment:Jf,uv_pars_vertex:Kf,uv_vertex:qf,worldpos_vertex:Zf,background_vert:jf,background_frag:$f,backgroundCube_vert:tp,backgroundCube_frag:ep,cube_vert:np,cube_frag:ip,depth_vert:sp,depth_frag:rp,distanceRGBA_vert:op,distanceRGBA_frag:ap,equirect_vert:cp,equirect_frag:lp,linedashed_vert:hp,linedashed_frag:up,meshbasic_vert:dp,meshbasic_frag:fp,meshlambert_vert:pp,meshlambert_frag:Ap,meshmatcap_vert:mp,meshmatcap_frag:gp,meshnormal_vert:xp,meshnormal_frag:vp,meshphong_vert:_p,meshphong_frag:Mp,meshphysical_vert:yp,meshphysical_frag:wp,meshtoon_vert:Ep,meshtoon_frag:Sp,points_vert:Cp,points_frag:bp,shadow_vert:Bp,shadow_frag:Tp,sprite_vert:Dp,sprite_frag:Ip},xt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},un={basic:{uniforms:Re([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Re([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Re([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Re([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Re([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Re([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Re([xt.points,xt.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Re([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Re([xt.common,xt.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Re([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Re([xt.sprite,xt.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:Re([xt.common,xt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:Re([xt.lights,xt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};un.physical={uniforms:Re([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};var ir={r:0,b:0,g:0},$n=new Ye,Rp=new re;function Pp(i,t,e,n,s,r,o){let a=new Gt(0),c=r===!0?0:1,l,h,d=null,u=0,p=null;function m(_){let M=_.isScene===!0?_.background:null;return M&&M.isTexture&&(M=(_.backgroundBlurriness>0?e:t).get(M)),M}function g(_){let M=!1,x=m(_);x===null?f(a,c):x&&x.isColor&&(f(x,1),M=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function A(_,M){let x=m(M);x&&(x.isCubeTexture||x.mapping===Yr)?(h===void 0&&(h=new Pe(new ci(1,1,1),new ke({name:"BackgroundCubeMaterial",uniforms:qi(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:Ee,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,S,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),$n.copy(M.backgroundRotation),$n.x*=-1,$n.y*=-1,$n.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&($n.y*=-1,$n.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Rp.makeRotationFromEuler($n)),h.material.toneMapped=qt.getTransfer(x.colorSpace)!==ne,(d!==x||u!==x.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=x,u=x.version,p=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Pe(new Gn(2,2),new ke({name:"BackgroundMaterial",uniforms:qi(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=qt.getTransfer(x.colorSpace)!==ne,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||u!==x.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,d=x,u=x.version,p=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function f(_,M){_.getRGB(ir,Hl(i)),n.buffers.color.setClear(ir.r,ir.g,ir.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(_,M=1){a.set(_),c=M,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,f(a,c)},render:g,addToRenderList:A}}function Lp(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(y,R,H,N,G){let J=!1,V=d(N,H,R);r!==V&&(r=V,l(r.object)),J=p(y,N,H,G),J&&m(y,N,H,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,x(y,R,H,N),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function d(y,R,H){let N=H.wireframe===!0,G=n[y.id];G===void 0&&(G={},n[y.id]=G);let J=G[R.id];J===void 0&&(J={},G[R.id]=J);let V=J[N];return V===void 0&&(V=u(c()),J[N]=V),V}function u(y){let R=[],H=[],N=[];for(let G=0;G<e;G++)R[G]=0,H[G]=0,N[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:H,attributeDivisors:N,object:y,attributes:{},index:null}}function p(y,R,H,N){let G=r.attributes,J=R.attributes,V=0,q=H.getAttributes();for(let z in q)if(q[z].location>=0){let ut=G[z],nt=J[z];if(nt===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(nt=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(nt=y.instanceColor)),ut===void 0||ut.attribute!==nt||nt&&ut.data!==nt.data)return!0;V++}return r.attributesNum!==V||r.index!==N}function m(y,R,H,N){let G={},J=R.attributes,V=0,q=H.getAttributes();for(let z in q)if(q[z].location>=0){let ut=J[z];ut===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(ut=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(ut=y.instanceColor));let nt={};nt.attribute=ut,ut&&ut.data&&(nt.data=ut.data),G[z]=nt,V++}r.attributes=G,r.attributesNum=V,r.index=N}function g(){let y=r.newAttributes;for(let R=0,H=y.length;R<H;R++)y[R]=0}function A(y){f(y,0)}function f(y,R){let H=r.newAttributes,N=r.enabledAttributes,G=r.attributeDivisors;H[y]=1,N[y]===0&&(i.enableVertexAttribArray(y),N[y]=1),G[y]!==R&&(i.vertexAttribDivisor(y,R),G[y]=R)}function _(){let y=r.newAttributes,R=r.enabledAttributes;for(let H=0,N=R.length;H<N;H++)R[H]!==y[H]&&(i.disableVertexAttribArray(H),R[H]=0)}function M(y,R,H,N,G,J,V){V===!0?i.vertexAttribIPointer(y,R,H,G,J):i.vertexAttribPointer(y,R,H,N,G,J)}function x(y,R,H,N){g();let G=N.attributes,J=H.getAttributes(),V=R.defaultAttributeValues;for(let q in J){let z=J[q];if(z.location>=0){let it=G[q];if(it===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(it=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(it=y.instanceColor)),it!==void 0){let ut=it.normalized,nt=it.itemSize,wt=t.get(it);if(wt===void 0)continue;let Rt=wt.buffer,k=wt.type,rt=wt.bytesPerElement,gt=k===i.INT||k===i.UNSIGNED_INT||it.gpuType===lc;if(it.isInterleavedBufferAttribute){let et=it.data,Dt=et.stride,Nt=it.offset;if(et.isInstancedInterleavedBuffer){for(let Lt=0;Lt<z.locationSize;Lt++)f(z.location+Lt,et.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Lt=0;Lt<z.locationSize;Lt++)A(z.location+Lt);i.bindBuffer(i.ARRAY_BUFFER,Rt);for(let Lt=0;Lt<z.locationSize;Lt++)M(z.location+Lt,nt/z.locationSize,k,ut,Dt*rt,(Nt+nt/z.locationSize*Lt)*rt,gt)}else{if(it.isInstancedBufferAttribute){for(let et=0;et<z.locationSize;et++)f(z.location+et,it.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let et=0;et<z.locationSize;et++)A(z.location+et);i.bindBuffer(i.ARRAY_BUFFER,Rt);for(let et=0;et<z.locationSize;et++)M(z.location+et,nt/z.locationSize,k,ut,nt*rt,nt/z.locationSize*et*rt,gt)}}else if(V!==void 0){let ut=V[q];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(z.location,ut);break;case 3:i.vertexAttrib3fv(z.location,ut);break;case 4:i.vertexAttrib4fv(z.location,ut);break;default:i.vertexAttrib1fv(z.location,ut)}}}}_()}function P(){I();for(let y in n){let R=n[y];for(let H in R){let N=R[H];for(let G in N)h(N[G].object),delete N[G];delete R[H]}delete n[y]}}function S(y){if(n[y.id]===void 0)return;let R=n[y.id];for(let H in R){let N=R[H];for(let G in N)h(N[G].object),delete N[G];delete R[H]}delete n[y.id]}function T(y){for(let R in n){let H=n[R];if(H[y.id]===void 0)continue;let N=H[y.id];for(let G in N)h(N[G].object),delete N[G];delete H[y.id]}}function I(){E(),o=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:E,dispose:P,releaseStatesOfGeometry:S,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:A,disableUnusedAttributes:_}}function Up(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function a(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let p=0;for(let m=0;m<d;m++)p+=h[m];e.update(p,n,1)}function c(l,h,d,u){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<l.length;m++)o(l[m],h[m],u[m]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,d);let m=0;for(let g=0;g<d;g++)m+=h[g]*u[g];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Fp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==on&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let I=T===Ps&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==an&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==yn&&!I)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),A=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=m>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:A,maxAttributes:f,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:P,maxSamples:S}}function Np(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Mn,a=new kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||n!==0||s;return s=u,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){let m=d.clippingPlanes,g=d.clipIntersection,A=d.clipShadows,f=i.get(d);if(!s||m===null||m.length===0||r&&!A)r?h(null):l();else{let _=r?0:n,M=_*4,x=f.clippingState||null;c.value=x,x=h(m,u,M,p);for(let P=0;P!==M;++P)x[P]=e[P];f.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,p,m){let g=d!==null?d.length:0,A=null;if(g!==0){if(A=c.value,m!==!0||A===null){let f=p+g*4,_=u.matrixWorldInverse;a.getNormalMatrix(_),(A===null||A.length<f)&&(A=new Float32Array(f));for(let M=0,x=p;M!==g;++M,x+=4)o.copy(d[M]).applyMatrix4(_,a),o.normal.toArray(A,x),A[x+3]=o.constant}c.value=A,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,A}}function Op(i){let t=new WeakMap;function e(o,a){return a===Xo?o.mapping=Wi:a===Jo&&(o.mapping=Yi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Xo||a===Jo)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Ba(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Vn=class extends wr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Oi=4,$c=[.125,.215,.35,.446,.526,.582],si=20,To=new Vn,tl=new Gt,Do=null,Io=0,Ro=0,Po=!1,ei=(1+Math.sqrt(5))/2,Fi=1/ei,el=[new L(-ei,Fi,0),new L(ei,Fi,0),new L(-Fi,0,ei),new L(Fi,0,ei),new L(0,ei,-Fi),new L(0,ei,Fi),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Zi=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Do=this._renderer.getRenderTarget(),Io=this._renderer.getActiveCubeFace(),Ro=this._renderer.getActiveMipmapLevel(),Po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=il(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Do,Io,Ro),this._renderer.xr.enabled=Po,t.scissorTest=!1,sr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Wi||t.mapping===Yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Do=this._renderer.getRenderTarget(),Io=this._renderer.getActiveCubeFace(),Ro=this._renderer.getActiveMipmapLevel(),Po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:Ps,format:on,colorSpace:es,depthBuffer:!1},s=nl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nl(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qp(r)),this._blurMaterial=kp(r,t,e)}return s}_compileMaterial(t){let e=new Pe(this._lodPlanes[0],t);this._renderer.compile(e,To)}_sceneToCubeUV(t,e,n,s){let a=new pe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(tl),h.toneMapping=Nn,h.autoClear=!1;let p=new Ki({name:"PMREM.Background",side:Ee,depthWrite:!1,depthTest:!1}),m=new Pe(new ci,p),g=!1,A=t.background;A?A.isColor&&(p.color.copy(A),t.background=null,g=!0):(p.color.copy(tl),g=!0);for(let f=0;f<6;f++){let _=f%3;_===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):_===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));let M=this._cubeSize;sr(s,_*M,f>2?M:0,M,M),h.setRenderTarget(s),g&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=A}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Wi||t.mapping===Yi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=sl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=il());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Pe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;sr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,To)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=el[(s-r-1)%el.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Pe(this._lodPlanes[s],l),u=l.uniforms,p=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*si-1),g=r/m,A=isFinite(r)?1+Math.floor(h*g):si;A>si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${A} samples when the maximum is set to ${si}`);let f=[],_=0;for(let T=0;T<si;++T){let I=T/g,E=Math.exp(-I*I/2);f.push(E),T===0?_+=E:T<A&&(_+=2*E)}for(let T=0;T<f.length;T++)f[T]=f[T]/_;u.envMap.value=t.texture,u.samples.value=A,u.weights.value=f,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:M}=this;u.dTheta.value=m,u.mipInt.value=M-n;let x=this._sizeLods[s],P=3*x*(s>M-Oi?s-M+Oi:0),S=4*(this._cubeSize-x);sr(e,P,S,3*x,2*x),c.setRenderTarget(e),c.render(d,To)}};function Qp(i){let t=[],e=[],n=[],s=i,r=i-Oi+1+$c.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Oi?c=$c[o-i+Oi-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,m=6,g=3,A=2,f=1,_=new Float32Array(g*m*p),M=new Float32Array(A*m*p),x=new Float32Array(f*m*p);for(let S=0;S<p;S++){let T=S%3*2/3-1,I=S>2?0:-1,E=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];_.set(E,g*m*S),M.set(u,A*m*S);let y=[S,S,S,S,S,S];x.set(y,f*m*S)}let P=new Se;P.setAttribute("position",new Oe(_,g)),P.setAttribute("uv",new Oe(M,A)),P.setAttribute("faceIndex",new Oe(x,f)),t.push(P),s>Oi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function nl(i,t,e){let n=new cn(i,t,e);return n.texture.mapping=Yr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function sr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function kp(i,t,e){let n=new Float32Array(si),s=new L(0,1,0);return new ke({name:"SphericalGaussianBlur",defines:{n:si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:gc(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function il(){return new ke({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gc(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function sl(){return new ke({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gc(),fragmentShader:`

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
	`}function zp(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Xo||c===Jo,h=c===Wi||c===Yi;if(l||h){let d=t.get(a),u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Zi(i)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Zi(i)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Gp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ms("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Vp(i,t,e,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let m in u.attributes)t.remove(u.attributes[m]);for(let m in u.morphAttributes){let g=u.morphAttributes[m];for(let A=0,f=g.length;A<f;A++)t.remove(g[A])}u.removeEventListener("dispose",o),delete s[u.id];let p=r.get(u);p&&(t.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function c(d){let u=d.attributes;for(let m in u)t.update(u[m],i.ARRAY_BUFFER);let p=d.morphAttributes;for(let m in p){let g=p[m];for(let A=0,f=g.length;A<f;A++)t.update(g[A],i.ARRAY_BUFFER)}}function l(d){let u=[],p=d.index,m=d.attributes.position,g=0;if(p!==null){let _=p.array;g=p.version;for(let M=0,x=_.length;M<x;M+=3){let P=_[M+0],S=_[M+1],T=_[M+2];u.push(P,S,S,T,T,P)}}else if(m!==void 0){let _=m.array;g=m.version;for(let M=0,x=_.length/3-1;M<x;M+=3){let P=M+0,S=M+1,T=M+2;u.push(P,S,S,T,T,P)}}else return;let A=new(Gl(u)?yr:Mr)(u,1);A.version=g;let f=r.get(d);f&&t.remove(f),r.set(d,A)}function h(d){let u=r.get(d);if(u){let p=d.index;p!==null&&u.version<p.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function Hp(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,p){i.drawElements(n,p,r,u*o),e.update(p,n,1)}function l(u,p,m){m!==0&&(i.drawElementsInstanced(n,p,r,u*o,m),e.update(p,n,m))}function h(u,p,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,u,0,m);let A=0;for(let f=0;f<m;f++)A+=p[f];e.update(A,n,1)}function d(u,p,m,g){if(m===0)return;let A=t.get("WEBGL_multi_draw");if(A===null)for(let f=0;f<u.length;f++)l(u[f]/o,p[f],g[f]);else{A.multiDrawElementsInstancedWEBGL(n,p,0,r,u,0,g,0,m);let f=0;for(let _=0;_<m;_++)f+=p[_]*g[_];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Wp(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Yp(i,t,e){let n=new WeakMap,s=new se;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let E=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();let p=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,A=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],M=0;p===!0&&(M=1),m===!0&&(M=2),g===!0&&(M=3);let x=a.attributes.position.count*M,P=1;x>t.maxTextureSize&&(P=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let S=new Float32Array(x*P*4*d),T=new vr(S,x,P,d);T.type=yn,T.needsUpdate=!0;let I=M*4;for(let y=0;y<d;y++){let R=A[y],H=f[y],N=_[y],G=x*P*4*y;for(let J=0;J<R.count;J++){let V=J*I;p===!0&&(s.fromBufferAttribute(R,J),S[G+V+0]=s.x,S[G+V+1]=s.y,S[G+V+2]=s.z,S[G+V+3]=0),m===!0&&(s.fromBufferAttribute(H,J),S[G+V+4]=s.x,S[G+V+5]=s.y,S[G+V+6]=s.z,S[G+V+7]=0),g===!0&&(s.fromBufferAttribute(N,J),S[G+V+8]=s.x,S[G+V+9]=s.y,S[G+V+10]=s.z,S[G+V+11]=N.itemSize===4?s.w:1)}}u={count:d,texture:T,size:new ht(x,P)},n.set(a,u),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let g=0;g<l.length;g++)p+=l[g];let m=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Xp(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,d=t.get(c,h);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return d}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var Sr=class extends We{constructor(t,e,n,s,r,o,a,c,l,h=zi){if(h!==zi&&h!==Ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===zi&&(n=ai),n===void 0&&h===Ji&&(n=Xi),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:He,this.minFilter=c!==void 0?c:He,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Yl=new We,rl=new Sr(1,1),Xl=new vr,Jl=new Ca,Kl=new Er,ol=[],al=[],cl=new Float32Array(16),ll=new Float32Array(9),hl=new Float32Array(4);function ns(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=ol[s];if(r===void 0&&(r=new Float32Array(s),ol[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ae(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Jr(i,t){let e=al[t];e===void 0&&(e=new Int32Array(t),al[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Jp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Kp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2fv(this.addr,t),me(e,t)}}function qp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;i.uniform3fv(this.addr,t),me(e,t)}}function Zp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4fv(this.addr,t),me(e,t)}}function jp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(Ae(e,n))return;hl.set(n),i.uniformMatrix2fv(this.addr,!1,hl),me(e,n)}}function $p(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(Ae(e,n))return;ll.set(n),i.uniformMatrix3fv(this.addr,!1,ll),me(e,n)}}function tA(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(Ae(e,n))return;cl.set(n),i.uniformMatrix4fv(this.addr,!1,cl),me(e,n)}}function eA(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function nA(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2iv(this.addr,t),me(e,t)}}function iA(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3iv(this.addr,t),me(e,t)}}function sA(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4iv(this.addr,t),me(e,t)}}function rA(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function oA(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2uiv(this.addr,t),me(e,t)}}function aA(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3uiv(this.addr,t),me(e,t)}}function cA(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4uiv(this.addr,t),me(e,t)}}function lA(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(rl.compareFunction=zl,r=rl):r=Yl,e.setTexture2D(t||r,s)}function hA(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Jl,s)}function uA(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Kl,s)}function dA(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Xl,s)}function fA(i){switch(i){case 5126:return Jp;case 35664:return Kp;case 35665:return qp;case 35666:return Zp;case 35674:return jp;case 35675:return $p;case 35676:return tA;case 5124:case 35670:return eA;case 35667:case 35671:return nA;case 35668:case 35672:return iA;case 35669:case 35673:return sA;case 5125:return rA;case 36294:return oA;case 36295:return aA;case 36296:return cA;case 35678:case 36198:case 36298:case 36306:case 35682:return lA;case 35679:case 36299:case 36307:return hA;case 35680:case 36300:case 36308:case 36293:return uA;case 36289:case 36303:case 36311:case 36292:return dA}}function pA(i,t){i.uniform1fv(this.addr,t)}function AA(i,t){let e=ns(t,this.size,2);i.uniform2fv(this.addr,e)}function mA(i,t){let e=ns(t,this.size,3);i.uniform3fv(this.addr,e)}function gA(i,t){let e=ns(t,this.size,4);i.uniform4fv(this.addr,e)}function xA(i,t){let e=ns(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function vA(i,t){let e=ns(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function _A(i,t){let e=ns(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function MA(i,t){i.uniform1iv(this.addr,t)}function yA(i,t){i.uniform2iv(this.addr,t)}function wA(i,t){i.uniform3iv(this.addr,t)}function EA(i,t){i.uniform4iv(this.addr,t)}function SA(i,t){i.uniform1uiv(this.addr,t)}function CA(i,t){i.uniform2uiv(this.addr,t)}function bA(i,t){i.uniform3uiv(this.addr,t)}function BA(i,t){i.uniform4uiv(this.addr,t)}function TA(i,t,e){let n=this.cache,s=t.length,r=Jr(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Yl,r[o])}function DA(i,t,e){let n=this.cache,s=t.length,r=Jr(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Jl,r[o])}function IA(i,t,e){let n=this.cache,s=t.length,r=Jr(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Kl,r[o])}function RA(i,t,e){let n=this.cache,s=t.length,r=Jr(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Xl,r[o])}function PA(i){switch(i){case 5126:return pA;case 35664:return AA;case 35665:return mA;case 35666:return gA;case 35674:return xA;case 35675:return vA;case 35676:return _A;case 5124:case 35670:return MA;case 35667:case 35671:return yA;case 35668:case 35672:return wA;case 35669:case 35673:return EA;case 5125:return SA;case 36294:return CA;case 36295:return bA;case 36296:return BA;case 35678:case 36198:case 36298:case 36306:case 35682:return TA;case 35679:case 36299:case 36307:return DA;case 35680:case 36300:case 36308:case 36293:return IA;case 36289:case 36303:case 36311:case 36292:return RA}}var Ta=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=fA(e.type)}},Da=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=PA(e.type)}},Ia=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Lo=/(\w+)(\])?(\[|\.)?/g;function ul(i,t){i.seq.push(t),i.map[t.id]=t}function LA(i,t,e){let n=i.name,s=n.length;for(Lo.lastIndex=0;;){let r=Lo.exec(n),o=Lo.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){ul(e,l===void 0?new Ta(a,i,t):new Da(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Ia(a),ul(e,d)),e=d}}}var Vi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);LA(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function dl(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var UA=37297,FA=0;function NA(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var fl=new kt;function OA(i){qt._getMatrix(fl,qt.workingColorSpace,i);let t=`mat3( ${fl.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(i)){case Xr:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function pl(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+NA(i.getShaderSource(t),o)}else return s}function QA(i,t){let e=OA(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function kA(i,t){let e;switch(t){case qh:e="Linear";break;case Zh:e="Reinhard";break;case jh:e="Cineon";break;case $h:e="ACESFilmic";break;case eu:e="AgX";break;case di:e="Neutral";break;case tu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var rr=new L;function zA(){qt.getLuminanceCoefficients(rr);let i=rr.x.toFixed(4),t=rr.y.toFixed(4),e=rr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function GA(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gs).join(`
`)}function VA(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function HA(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function gs(i){return i!==""}function Al(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ml(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var WA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ra(i){return i.replace(WA,XA)}var YA=new Map;function XA(i,t){let e=zt[t];if(e===void 0){let n=YA.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ra(e)}var JA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gl(i){return i.replace(JA,KA)}function KA(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function qA(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Tl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ih?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===_n&&(t="SHADOWMAP_TYPE_VSM"),t}function ZA(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Wi:case Yi:t="ENVMAP_TYPE_CUBE";break;case Yr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function jA(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Yi:t="ENVMAP_MODE_REFRACTION";break}return t}function $A(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case cc:t="ENVMAP_BLENDING_MULTIPLY";break;case Jh:t="ENVMAP_BLENDING_MIX";break;case Kh:t="ENVMAP_BLENDING_ADD";break}return t}function tm(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function em(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=qA(e),l=ZA(e),h=jA(e),d=$A(e),u=tm(e),p=GA(e),m=VA(r),g=s.createProgram(),A,f,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(A=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(gs).join(`
`),A.length>0&&(A+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(gs).join(`
`),f.length>0&&(f+=`
`)):(A=[xl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gs).join(`
`),f=[xl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Nn?"#define TONE_MAPPING":"",e.toneMapping!==Nn?zt.tonemapping_pars_fragment:"",e.toneMapping!==Nn?kA("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,QA("linearToOutputTexel",e.outputColorSpace),zA(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(gs).join(`
`)),o=Ra(o),o=Al(o,e),o=ml(o,e),a=Ra(a),a=Al(a,e),a=ml(a,e),o=gl(o),a=gl(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,A=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+A,f=["#define varying in",e.glslVersion===Ic?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ic?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let M=_+A+o,x=_+f+a,P=dl(s,s.VERTEX_SHADER,M),S=dl(s,s.FRAGMENT_SHADER,x);s.attachShader(g,P),s.attachShader(g,S),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function T(R){if(i.debug.checkShaderErrors){let H=s.getProgramInfoLog(g).trim(),N=s.getShaderInfoLog(P).trim(),G=s.getShaderInfoLog(S).trim(),J=!0,V=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,P,S);else{let q=pl(s,P,"vertex"),z=pl(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+H+`
`+q+`
`+z)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(N===""||G==="")&&(V=!1);V&&(R.diagnostics={runnable:J,programLog:H,vertexShader:{log:N,prefix:A},fragmentShader:{log:G,prefix:f}})}s.deleteShader(P),s.deleteShader(S),I=new Vi(s,g),E=HA(s,g)}let I;this.getUniforms=function(){return I===void 0&&T(this),I};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(g,UA)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=FA++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=P,this.fragmentShader=S,this}var nm=0,Pa=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new La(t),e.set(t,n)),n}},La=class{constructor(t){this.id=nm++,this.code=t,this.usedTimes=0}};function im(i,t,e,n,s,r,o){let a=new _r,c=new Pa,l=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures,p=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return l.add(E),E===0?"uv":`uv${E}`}function A(E,y,R,H,N){let G=H.fog,J=N.geometry,V=E.isMeshStandardMaterial?H.environment:null,q=(E.isMeshStandardMaterial?e:t).get(E.envMap||V),z=q&&q.mapping===Yr?q.image.height:null,it=m[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));let ut=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,nt=ut!==void 0?ut.length:0,wt=0;J.morphAttributes.position!==void 0&&(wt=1),J.morphAttributes.normal!==void 0&&(wt=2),J.morphAttributes.color!==void 0&&(wt=3);let Rt,k,rt,gt;if(it){let Zt=un[it];Rt=Zt.vertexShader,k=Zt.fragmentShader}else Rt=E.vertexShader,k=E.fragmentShader,c.update(E),rt=c.getVertexShaderID(E),gt=c.getFragmentShaderID(E);let et=i.getRenderTarget(),Dt=i.state.buffers.depth.getReversed(),Nt=N.isInstancedMesh===!0,Lt=N.isBatchedMesh===!0,Yt=!!E.map,$=!!E.matcap,ct=!!q,D=!!E.aoMap,dt=!!E.lightMap,st=!!E.bumpMap,At=!!E.normalMap,ft=!!E.displacementMap,Pt=!!E.emissiveMap,Mt=!!E.metalnessMap,C=!!E.roughnessMap,v=E.anisotropy>0,O=E.clearcoat>0,K=E.dispersion>0,tt=E.iridescence>0,X=E.sheen>0,Ct=E.transmission>0,pt=v&&!!E.anisotropyMap,yt=O&&!!E.clearcoatMap,Vt=O&&!!E.clearcoatNormalMap,at=O&&!!E.clearcoatRoughnessMap,Et=tt&&!!E.iridescenceMap,It=tt&&!!E.iridescenceThicknessMap,Ft=X&&!!E.sheenColorMap,St=X&&!!E.sheenRoughnessMap,Ht=!!E.specularMap,Qt=!!E.specularColorMap,jt=!!E.specularIntensityMap,U=Ct&&!!E.transmissionMap,mt=Ct&&!!E.thicknessMap,Y=!!E.gradientMap,j=!!E.alphaMap,_t=E.alphaTest>0,vt=!!E.alphaHash,Ot=!!E.extensions,ie=Nn;E.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(ie=i.toneMapping);let ue={shaderID:it,shaderType:E.type,shaderName:E.name,vertexShader:Rt,fragmentShader:k,defines:E.defines,customVertexShaderID:rt,customFragmentShaderID:gt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Lt,batchingColor:Lt&&N._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&N.instanceColor!==null,instancingMorph:Nt&&N.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:es,alphaToCoverage:!!E.alphaToCoverage,map:Yt,matcap:$,envMap:ct,envMapMode:ct&&q.mapping,envMapCubeUVHeight:z,aoMap:D,lightMap:dt,bumpMap:st,normalMap:At,displacementMap:u&&ft,emissiveMap:Pt,normalMapObjectSpace:At&&E.normalMapType===ru,normalMapTangentSpace:At&&E.normalMapType===Ac,metalnessMap:Mt,roughnessMap:C,anisotropy:v,anisotropyMap:pt,clearcoat:O,clearcoatMap:yt,clearcoatNormalMap:Vt,clearcoatRoughnessMap:at,dispersion:K,iridescence:tt,iridescenceMap:Et,iridescenceThicknessMap:It,sheen:X,sheenColorMap:Ft,sheenRoughnessMap:St,specularMap:Ht,specularColorMap:Qt,specularIntensityMap:jt,transmission:Ct,transmissionMap:U,thicknessMap:mt,gradientMap:Y,opaque:E.transparent===!1&&E.blending===ki&&E.alphaToCoverage===!1,alphaMap:j,alphaTest:_t,alphaHash:vt,combine:E.combine,mapUv:Yt&&g(E.map.channel),aoMapUv:D&&g(E.aoMap.channel),lightMapUv:dt&&g(E.lightMap.channel),bumpMapUv:st&&g(E.bumpMap.channel),normalMapUv:At&&g(E.normalMap.channel),displacementMapUv:ft&&g(E.displacementMap.channel),emissiveMapUv:Pt&&g(E.emissiveMap.channel),metalnessMapUv:Mt&&g(E.metalnessMap.channel),roughnessMapUv:C&&g(E.roughnessMap.channel),anisotropyMapUv:pt&&g(E.anisotropyMap.channel),clearcoatMapUv:yt&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:Vt&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:It&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:St&&g(E.sheenRoughnessMap.channel),specularMapUv:Ht&&g(E.specularMap.channel),specularColorMapUv:Qt&&g(E.specularColorMap.channel),specularIntensityMapUv:jt&&g(E.specularIntensityMap.channel),transmissionMapUv:U&&g(E.transmissionMap.channel),thicknessMapUv:mt&&g(E.thicknessMap.channel),alphaMapUv:j&&g(E.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(At||v),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!J.attributes.uv&&(Yt||j),fog:!!G,useFog:E.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Dt,skinning:N.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:wt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:ie,decodeVideoTexture:Yt&&E.map.isVideoTexture===!0&&qt.getTransfer(E.map.colorSpace)===ne,decodeVideoTextureEmissive:Pt&&E.emissiveMap.isVideoTexture===!0&&qt.getTransfer(E.emissiveMap.colorSpace)===ne,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===rn,flipSided:E.side===Ee,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ot&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&E.extensions.multiDraw===!0||Lt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ue.vertexUv1s=l.has(1),ue.vertexUv2s=l.has(2),ue.vertexUv3s=l.has(3),l.clear(),ue}function f(E){let y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(let R in E.defines)y.push(R),y.push(E.defines[R]);return E.isRawShaderMaterial===!1&&(_(y,E),M(y,E),y.push(i.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function _(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function M(E,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),E.push(a.mask)}function x(E){let y=m[E.type],R;if(y){let H=un[y];R=Yu.clone(H.uniforms)}else R=E.uniforms;return R}function P(E,y){let R;for(let H=0,N=h.length;H<N;H++){let G=h[H];if(G.cacheKey===y){R=G,++R.usedTimes;break}}return R===void 0&&(R=new em(i,y,E,r),h.push(R)),R}function S(E){if(--E.usedTimes===0){let y=h.indexOf(E);h[y]=h[h.length-1],h.pop(),E.destroy()}}function T(E){c.remove(E)}function I(){c.dispose()}return{getParameters:A,getProgramCacheKey:f,getUniforms:x,acquireProgram:P,releaseProgram:S,releaseShaderCache:T,programs:h,dispose:I}}function sm(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function rm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function vl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function _l(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,u,p,m,g,A){let f=i[t];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:m,renderOrder:d.renderOrder,z:g,group:A},i[t]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=m,f.renderOrder=d.renderOrder,f.z=g,f.group=A),t++,f}function a(d,u,p,m,g,A){let f=o(d,u,p,m,g,A);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function c(d,u,p,m,g,A){let f=o(d,u,p,m,g,A);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function l(d,u){e.length>1&&e.sort(d||rm),n.length>1&&n.sort(u||vl),s.length>1&&s.sort(u||vl)}function h(){for(let d=t,u=i.length;d<u;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function om(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new _l,i.set(n,[o])):s>=r.length?(o=new _l,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function am(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Gt};break;case"SpotLight":e={position:new L,direction:new L,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function cm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var lm=0;function hm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function um(i){let t=new am,e=cm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);let s=new L,r=new re,o=new re;function a(l){let h=0,d=0,u=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let p=0,m=0,g=0,A=0,f=0,_=0,M=0,x=0,P=0,S=0,T=0;l.sort(hm);for(let E=0,y=l.length;E<y;E++){let R=l[E],H=R.color,N=R.intensity,G=R.distance,J=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=H.r*N,d+=H.g*N,u+=H.b*N;else if(R.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(R.sh.coefficients[V],N);T++}else if(R.isDirectionalLight){let V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let q=R.shadow,z=e.get(R);z.shadowIntensity=q.intensity,z.shadowBias=q.bias,z.shadowNormalBias=q.normalBias,z.shadowRadius=q.radius,z.shadowMapSize=q.mapSize,n.directionalShadow[p]=z,n.directionalShadowMap[p]=J,n.directionalShadowMatrix[p]=R.shadow.matrix,_++}n.directional[p]=V,p++}else if(R.isSpotLight){let V=t.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(H).multiplyScalar(N),V.distance=G,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,n.spot[g]=V;let q=R.shadow;if(R.map&&(n.spotLightMap[P]=R.map,P++,q.updateMatrices(R),R.castShadow&&S++),n.spotLightMatrix[g]=q.matrix,R.castShadow){let z=e.get(R);z.shadowIntensity=q.intensity,z.shadowBias=q.bias,z.shadowNormalBias=q.normalBias,z.shadowRadius=q.radius,z.shadowMapSize=q.mapSize,n.spotShadow[g]=z,n.spotShadowMap[g]=J,x++}g++}else if(R.isRectAreaLight){let V=t.get(R);V.color.copy(H).multiplyScalar(N),V.halfWidth.set(R.width*.5,0,0),V.halfHeight.set(0,R.height*.5,0),n.rectArea[A]=V,A++}else if(R.isPointLight){let V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),V.distance=R.distance,V.decay=R.decay,R.castShadow){let q=R.shadow,z=e.get(R);z.shadowIntensity=q.intensity,z.shadowBias=q.bias,z.shadowNormalBias=q.normalBias,z.shadowRadius=q.radius,z.shadowMapSize=q.mapSize,z.shadowCameraNear=q.camera.near,z.shadowCameraFar=q.camera.far,n.pointShadow[m]=z,n.pointShadowMap[m]=J,n.pointShadowMatrix[m]=R.shadow.matrix,M++}n.point[m]=V,m++}else if(R.isHemisphereLight){let V=t.get(R);V.skyColor.copy(R.color).multiplyScalar(N),V.groundColor.copy(R.groundColor).multiplyScalar(N),n.hemi[f]=V,f++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let I=n.hash;(I.directionalLength!==p||I.pointLength!==m||I.spotLength!==g||I.rectAreaLength!==A||I.hemiLength!==f||I.numDirectionalShadows!==_||I.numPointShadows!==M||I.numSpotShadows!==x||I.numSpotMaps!==P||I.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=A,n.point.length=m,n.hemi.length=f,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+P-S,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=T,I.directionalLength=p,I.pointLength=m,I.spotLength=g,I.rectAreaLength=A,I.hemiLength=f,I.numDirectionalShadows=_,I.numPointShadows=M,I.numSpotShadows=x,I.numSpotMaps=P,I.numLightProbes=T,n.version=lm++)}function c(l,h){let d=0,u=0,p=0,m=0,g=0,A=h.matrixWorldInverse;for(let f=0,_=l.length;f<_;f++){let M=l[f];if(M.isDirectionalLight){let x=n.directional[d];x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(A),d++}else if(M.isSpotLight){let x=n.spot[p];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(A),x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(A),p++}else if(M.isRectAreaLight){let x=n.rectArea[m];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(A),o.identity(),r.copy(M.matrixWorld),r.premultiply(A),o.extractRotation(r),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(M.isPointLight){let x=n.point[u];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(A),u++}else if(M.isHemisphereLight){let x=n.hemi[g];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(A),g++}}}return{setup:a,setupView:c,state:n}}function Ml(i){let t=new um(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function dm(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Ml(i),t.set(s,[a])):r>=o.length?(a=new Ml(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Ua=class extends zn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=iu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Fa=class extends zn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},fm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pm=`uniform sampler2D shadow_pass;
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
}`;function Am(i,t,e){let n=new bs,s=new ht,r=new ht,o=new se,a=new Ua({depthPacking:su}),c=new Fa,l={},h=e.maxTextureSize,d={[dn]:Ee,[Ee]:dn,[rn]:rn},u=new ke({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:fm,fragmentShader:pm}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let m=new Se;m.setAttribute("position",new Oe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Pe(m,u),A=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tl;let f=this.type;this.render=function(S,T,I){if(A.enabled===!1||A.autoUpdate===!1&&A.needsUpdate===!1||S.length===0)return;let E=i.getRenderTarget(),y=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),H=i.state;H.setBlending(Fn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let N=f!==_n&&this.type===_n,G=f===_n&&this.type!==_n;for(let J=0,V=S.length;J<V;J++){let q=S[J],z=q.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let it=z.getFrameExtents();if(s.multiply(it),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/it.x),s.x=r.x*it.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/it.y),s.y=r.y*it.y,z.mapSize.y=r.y)),z.map===null||N===!0||G===!0){let nt=this.type!==_n?{minFilter:He,magFilter:He}:{};z.map!==null&&z.map.dispose(),z.map=new cn(s.x,s.y,nt),z.map.texture.name=q.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();let ut=z.getViewportCount();for(let nt=0;nt<ut;nt++){let wt=z.getViewport(nt);o.set(r.x*wt.x,r.y*wt.y,r.x*wt.z,r.y*wt.w),H.viewport(o),z.updateMatrices(q,nt),n=z.getFrustum(),x(T,I,z.camera,q,this.type)}z.isPointLightShadow!==!0&&this.type===_n&&_(z,I),z.needsUpdate=!1}f=this.type,A.needsUpdate=!1,i.setRenderTarget(E,y,R)};function _(S,T){let I=t.update(g);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new cn(s.x,s.y)),u.uniforms.shadow_pass.value=S.map.texture,u.uniforms.resolution.value=S.mapSize,u.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(T,null,I,u,g,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(T,null,I,p,g,null)}function M(S,T,I,E){let y=null,R=I.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(R!==void 0)y=R;else if(y=I.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let H=y.uuid,N=T.uuid,G=l[H];G===void 0&&(G={},l[H]=G);let J=G[N];J===void 0&&(J=y.clone(),G[N]=J,T.addEventListener("dispose",P)),y=J}if(y.visible=T.visible,y.wireframe=T.wireframe,E===_n?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:d[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let H=i.properties.get(y);H.light=I}return y}function x(S,T,I,E,y){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&y===_n)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,S.matrixWorld);let N=t.update(S),G=S.material;if(Array.isArray(G)){let J=N.groups;for(let V=0,q=J.length;V<q;V++){let z=J[V],it=G[z.materialIndex];if(it&&it.visible){let ut=M(S,it,E,y);S.onBeforeShadow(i,S,T,I,N,ut,z),i.renderBufferDirect(I,null,N,ut,S,z),S.onAfterShadow(i,S,T,I,N,ut,z)}}}else if(G.visible){let J=M(S,G,E,y);S.onBeforeShadow(i,S,T,I,N,J,null),i.renderBufferDirect(I,null,N,J,S,null),S.onAfterShadow(i,S,T,I,N,J,null)}}let H=S.children;for(let N=0,G=H.length;N<G;N++)x(H[N],T,I,E,y)}function P(S){S.target.removeEventListener("dispose",P);for(let I in l){let E=l[I],y=S.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}var mm={[ko]:zo,[Go]:Wo,[Vo]:Yo,[Hi]:Ho,[zo]:ko,[Wo]:Go,[Yo]:Vo,[Ho]:Hi};function gm(i,t){function e(){let U=!1,mt=new se,Y=null,j=new se(0,0,0,0);return{setMask:function(_t){Y!==_t&&!U&&(i.colorMask(_t,_t,_t,_t),Y=_t)},setLocked:function(_t){U=_t},setClear:function(_t,vt,Ot,ie,ue){ue===!0&&(_t*=ie,vt*=ie,Ot*=ie),mt.set(_t,vt,Ot,ie),j.equals(mt)===!1&&(i.clearColor(_t,vt,Ot,ie),j.copy(mt))},reset:function(){U=!1,Y=null,j.set(-1,0,0,0)}}}function n(){let U=!1,mt=!1,Y=null,j=null,_t=null;return{setReversed:function(vt){if(mt!==vt){let Ot=t.get("EXT_clip_control");mt?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT);let ie=_t;_t=null,this.setClear(ie)}mt=vt},getReversed:function(){return mt},setTest:function(vt){vt?et(i.DEPTH_TEST):Dt(i.DEPTH_TEST)},setMask:function(vt){Y!==vt&&!U&&(i.depthMask(vt),Y=vt)},setFunc:function(vt){if(mt&&(vt=mm[vt]),j!==vt){switch(vt){case ko:i.depthFunc(i.NEVER);break;case zo:i.depthFunc(i.ALWAYS);break;case Go:i.depthFunc(i.LESS);break;case Hi:i.depthFunc(i.LEQUAL);break;case Vo:i.depthFunc(i.EQUAL);break;case Ho:i.depthFunc(i.GEQUAL);break;case Wo:i.depthFunc(i.GREATER);break;case Yo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=vt}},setLocked:function(vt){U=vt},setClear:function(vt){_t!==vt&&(mt&&(vt=1-vt),i.clearDepth(vt),_t=vt)},reset:function(){U=!1,Y=null,j=null,_t=null,mt=!1}}}function s(){let U=!1,mt=null,Y=null,j=null,_t=null,vt=null,Ot=null,ie=null,ue=null;return{setTest:function(Zt){U||(Zt?et(i.STENCIL_TEST):Dt(i.STENCIL_TEST))},setMask:function(Zt){mt!==Zt&&!U&&(i.stencilMask(Zt),mt=Zt)},setFunc:function(Zt,Ue,be){(Y!==Zt||j!==Ue||_t!==be)&&(i.stencilFunc(Zt,Ue,be),Y=Zt,j=Ue,_t=be)},setOp:function(Zt,Ue,be){(vt!==Zt||Ot!==Ue||ie!==be)&&(i.stencilOp(Zt,Ue,be),vt=Zt,Ot=Ue,ie=be)},setLocked:function(Zt){U=Zt},setClear:function(Zt){ue!==Zt&&(i.clearStencil(Zt),ue=Zt)},reset:function(){U=!1,mt=null,Y=null,j=null,_t=null,vt=null,Ot=null,ie=null,ue=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},d={},u=new WeakMap,p=[],m=null,g=!1,A=null,f=null,_=null,M=null,x=null,P=null,S=null,T=new Gt(0,0,0),I=0,E=!1,y=null,R=null,H=null,N=null,G=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,q=0,z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(z)[1]),V=q>=1):z.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),V=q>=2);let it=null,ut={},nt=i.getParameter(i.SCISSOR_BOX),wt=i.getParameter(i.VIEWPORT),Rt=new se().fromArray(nt),k=new se().fromArray(wt);function rt(U,mt,Y,j){let _t=new Uint8Array(4),vt=i.createTexture();i.bindTexture(U,vt),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ot=0;Ot<Y;Ot++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(mt,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,_t):i.texImage2D(mt+Ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_t);return vt}let gt={};gt[i.TEXTURE_2D]=rt(i.TEXTURE_2D,i.TEXTURE_2D,1),gt[i.TEXTURE_CUBE_MAP]=rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[i.TEXTURE_2D_ARRAY]=rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),gt[i.TEXTURE_3D]=rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),et(i.DEPTH_TEST),o.setFunc(Hi),st(!1),At(yc),et(i.CULL_FACE),D(Fn);function et(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function Dt(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Nt(U,mt){return d[U]!==mt?(i.bindFramebuffer(U,mt),d[U]=mt,U===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=mt),U===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=mt),!0):!1}function Lt(U,mt){let Y=p,j=!1;if(U){Y=u.get(mt),Y===void 0&&(Y=[],u.set(mt,Y));let _t=U.textures;if(Y.length!==_t.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let vt=0,Ot=_t.length;vt<Ot;vt++)Y[vt]=i.COLOR_ATTACHMENT0+vt;Y.length=_t.length,j=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,j=!0);j&&i.drawBuffers(Y)}function Yt(U){return m!==U?(i.useProgram(U),m=U,!0):!1}let $={[ni]:i.FUNC_ADD,[Rh]:i.FUNC_SUBTRACT,[Ph]:i.FUNC_REVERSE_SUBTRACT};$[Lh]=i.MIN,$[Uh]=i.MAX;let ct={[Fh]:i.ZERO,[ac]:i.ONE,[Nh]:i.SRC_COLOR,[Qo]:i.SRC_ALPHA,[Vh]:i.SRC_ALPHA_SATURATE,[zh]:i.DST_COLOR,[Qh]:i.DST_ALPHA,[Oh]:i.ONE_MINUS_SRC_COLOR,[ws]:i.ONE_MINUS_SRC_ALPHA,[Gh]:i.ONE_MINUS_DST_COLOR,[kh]:i.ONE_MINUS_DST_ALPHA,[Hh]:i.CONSTANT_COLOR,[Wh]:i.ONE_MINUS_CONSTANT_COLOR,[Yh]:i.CONSTANT_ALPHA,[Xh]:i.ONE_MINUS_CONSTANT_ALPHA};function D(U,mt,Y,j,_t,vt,Ot,ie,ue,Zt){if(U===Fn){g===!0&&(Dt(i.BLEND),g=!1);return}if(g===!1&&(et(i.BLEND),g=!0),U!==oc){if(U!==A||Zt!==E){if((f!==ni||x!==ni)&&(i.blendEquation(i.FUNC_ADD),f=ni,x=ni),Zt)switch(U){case ki:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wc:i.blendFunc(i.ONE,i.ONE);break;case Ec:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ki:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ec:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}_=null,M=null,P=null,S=null,T.set(0,0,0),I=0,A=U,E=Zt}return}_t=_t||mt,vt=vt||Y,Ot=Ot||j,(mt!==f||_t!==x)&&(i.blendEquationSeparate($[mt],$[_t]),f=mt,x=_t),(Y!==_||j!==M||vt!==P||Ot!==S)&&(i.blendFuncSeparate(ct[Y],ct[j],ct[vt],ct[Ot]),_=Y,M=j,P=vt,S=Ot),(ie.equals(T)===!1||ue!==I)&&(i.blendColor(ie.r,ie.g,ie.b,ue),T.copy(ie),I=ue),A=U,E=!1}function dt(U,mt){U.side===rn?Dt(i.CULL_FACE):et(i.CULL_FACE);let Y=U.side===Ee;mt&&(Y=!Y),st(Y),U.blending===ki&&U.transparent===!1?D(Fn):D(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let j=U.stencilWrite;a.setTest(j),j&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Pt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):Dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function st(U){y!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),y=U)}function At(U){U!==Th?(et(i.CULL_FACE),U!==R&&(U===yc?i.cullFace(i.BACK):U===Dh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Dt(i.CULL_FACE),R=U}function ft(U){U!==H&&(V&&i.lineWidth(U),H=U)}function Pt(U,mt,Y){U?(et(i.POLYGON_OFFSET_FILL),(N!==mt||G!==Y)&&(i.polygonOffset(mt,Y),N=mt,G=Y)):Dt(i.POLYGON_OFFSET_FILL)}function Mt(U){U?et(i.SCISSOR_TEST):Dt(i.SCISSOR_TEST)}function C(U){U===void 0&&(U=i.TEXTURE0+J-1),it!==U&&(i.activeTexture(U),it=U)}function v(U,mt,Y){Y===void 0&&(it===null?Y=i.TEXTURE0+J-1:Y=it);let j=ut[Y];j===void 0&&(j={type:void 0,texture:void 0},ut[Y]=j),(j.type!==U||j.texture!==mt)&&(it!==Y&&(i.activeTexture(Y),it=Y),i.bindTexture(U,mt||gt[U]),j.type=U,j.texture=mt)}function O(){let U=ut[it];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function X(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ct(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function yt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Vt(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function at(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Et(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function It(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ft(U){Rt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Rt.copy(U))}function St(U){k.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),k.copy(U))}function Ht(U,mt){let Y=l.get(mt);Y===void 0&&(Y=new WeakMap,l.set(mt,Y));let j=Y.get(U);j===void 0&&(j=i.getUniformBlockIndex(mt,U.name),Y.set(U,j))}function Qt(U,mt){let j=l.get(mt).get(U);c.get(mt)!==j&&(i.uniformBlockBinding(mt,j,U.__bindingPointIndex),c.set(mt,j))}function jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},it=null,ut={},d={},u=new WeakMap,p=[],m=null,g=!1,A=null,f=null,_=null,M=null,x=null,P=null,S=null,T=new Gt(0,0,0),I=0,E=!1,y=null,R=null,H=null,N=null,G=null,Rt.set(0,0,i.canvas.width,i.canvas.height),k.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:et,disable:Dt,bindFramebuffer:Nt,drawBuffers:Lt,useProgram:Yt,setBlending:D,setMaterial:dt,setFlipSided:st,setCullFace:At,setLineWidth:ft,setPolygonOffset:Pt,setScissorTest:Mt,activeTexture:C,bindTexture:v,unbindTexture:O,compressedTexImage2D:K,compressedTexImage3D:tt,texImage2D:Et,texImage3D:It,updateUBOMapping:Ht,uniformBlockBinding:Qt,texStorage2D:Vt,texStorage3D:at,texSubImage2D:X,texSubImage3D:Ct,compressedTexSubImage2D:pt,compressedTexSubImage3D:yt,scissor:Ft,viewport:St,reset:jt}}function yl(i,t,e,n){let s=xm(n);switch(e){case Ll:return i*t;case Fl:return i*t;case Nl:return i*t*2;case Ol:return i*t/s.components*s.byteLength;case dc:return i*t/s.components*s.byteLength;case Ql:return i*t*2/s.components*s.byteLength;case fc:return i*t*2/s.components*s.byteLength;case Ul:return i*t*3/s.components*s.byteLength;case on:return i*t*4/s.components*s.byteLength;case pc:return i*t*4/s.components*s.byteLength;case hr:case ur:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case dr:case fr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case jo:case ta:return Math.max(i,16)*Math.max(t,8)/4;case Zo:case $o:return Math.max(i,8)*Math.max(t,8)/2;case ea:case na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ra:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case oa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case aa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ca:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case la:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ha:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ua:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case da:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case fa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case pa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Aa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ma:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ga:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case pr:case xa:case va:return Math.ceil(i/4)*Math.ceil(t/4)*16;case kl:case _a:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ma:case ya:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function xm(i){switch(i){case an:case Il:return{byteLength:1,components:1};case Es:case Rl:case Ps:return{byteLength:2,components:1};case hc:case uc:return{byteLength:2,components:4};case ai:case lc:case yn:return{byteLength:4,components:1};case Pl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function vm(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ht,h=new WeakMap,d,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,v){return p?new OffscreenCanvas(C,v):gr("canvas")}function g(C,v,O){let K=1,tt=Mt(C);if((tt.width>O||tt.height>O)&&(K=O/Math.max(tt.width,tt.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let X=Math.floor(K*tt.width),Ct=Math.floor(K*tt.height);d===void 0&&(d=m(X,Ct));let pt=v?m(X,Ct):d;return pt.width=X,pt.height=Ct,pt.getContext("2d").drawImage(C,0,0,X,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+X+"x"+Ct+")."),pt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),C;return C}function A(C){return C.generateMipmaps}function f(C){i.generateMipmap(C)}function _(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(C,v,O,K,tt=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let X=v;if(v===i.RED&&(O===i.FLOAT&&(X=i.R32F),O===i.HALF_FLOAT&&(X=i.R16F),O===i.UNSIGNED_BYTE&&(X=i.R8)),v===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.R8UI),O===i.UNSIGNED_SHORT&&(X=i.R16UI),O===i.UNSIGNED_INT&&(X=i.R32UI),O===i.BYTE&&(X=i.R8I),O===i.SHORT&&(X=i.R16I),O===i.INT&&(X=i.R32I)),v===i.RG&&(O===i.FLOAT&&(X=i.RG32F),O===i.HALF_FLOAT&&(X=i.RG16F),O===i.UNSIGNED_BYTE&&(X=i.RG8)),v===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RG8UI),O===i.UNSIGNED_SHORT&&(X=i.RG16UI),O===i.UNSIGNED_INT&&(X=i.RG32UI),O===i.BYTE&&(X=i.RG8I),O===i.SHORT&&(X=i.RG16I),O===i.INT&&(X=i.RG32I)),v===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RGB8UI),O===i.UNSIGNED_SHORT&&(X=i.RGB16UI),O===i.UNSIGNED_INT&&(X=i.RGB32UI),O===i.BYTE&&(X=i.RGB8I),O===i.SHORT&&(X=i.RGB16I),O===i.INT&&(X=i.RGB32I)),v===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),O===i.UNSIGNED_INT&&(X=i.RGBA32UI),O===i.BYTE&&(X=i.RGBA8I),O===i.SHORT&&(X=i.RGBA16I),O===i.INT&&(X=i.RGBA32I)),v===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),v===i.RGBA){let Ct=tt?Xr:qt.getTransfer(K);O===i.FLOAT&&(X=i.RGBA32F),O===i.HALF_FLOAT&&(X=i.RGBA16F),O===i.UNSIGNED_BYTE&&(X=Ct===ne?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function x(C,v){let O;return C?v===null||v===ai||v===Xi?O=i.DEPTH24_STENCIL8:v===yn?O=i.DEPTH32F_STENCIL8:v===Es&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ai||v===Xi?O=i.DEPTH_COMPONENT24:v===yn?O=i.DEPTH_COMPONENT32F:v===Es&&(O=i.DEPTH_COMPONENT16),O}function P(C,v){return A(C)===!0||C.isFramebufferTexture&&C.minFilter!==He&&C.minFilter!==Ke?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function S(C){let v=C.target;v.removeEventListener("dispose",S),I(v),v.isVideoTexture&&h.delete(v)}function T(C){let v=C.target;v.removeEventListener("dispose",T),y(v)}function I(C){let v=n.get(C);if(v.__webglInit===void 0)return;let O=C.source,K=u.get(O);if(K){let tt=K[v.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&E(C),Object.keys(K).length===0&&u.delete(O)}n.remove(C)}function E(C){let v=n.get(C);i.deleteTexture(v.__webglTexture);let O=C.source,K=u.get(O);delete K[v.__cacheKey],o.memory.textures--}function y(C){let v=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(v.__webglFramebuffer[K]))for(let tt=0;tt<v.__webglFramebuffer[K].length;tt++)i.deleteFramebuffer(v.__webglFramebuffer[K][tt]);else i.deleteFramebuffer(v.__webglFramebuffer[K]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[K])}else{if(Array.isArray(v.__webglFramebuffer))for(let K=0;K<v.__webglFramebuffer.length;K++)i.deleteFramebuffer(v.__webglFramebuffer[K]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let K=0;K<v.__webglColorRenderbuffer.length;K++)v.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[K]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let O=C.textures;for(let K=0,tt=O.length;K<tt;K++){let X=n.get(O[K]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),o.memory.textures--),n.remove(O[K])}n.remove(C)}let R=0;function H(){R=0}function N(){let C=R;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),R+=1,C}function G(C){let v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function J(C,v){let O=n.get(C);if(C.isVideoTexture&&ft(C),C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){let K=C.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{k(O,C,v);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+v)}function V(C,v){let O=n.get(C);if(C.version>0&&O.__version!==C.version){k(O,C,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+v)}function q(C,v){let O=n.get(C);if(C.version>0&&O.__version!==C.version){k(O,C,v);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+v)}function z(C,v){let O=n.get(C);if(C.version>0&&O.__version!==C.version){rt(O,C,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+v)}let it={[Ko]:i.REPEAT,[ri]:i.CLAMP_TO_EDGE,[qo]:i.MIRRORED_REPEAT},ut={[He]:i.NEAREST,[nu]:i.NEAREST_MIPMAP_NEAREST,[Qs]:i.NEAREST_MIPMAP_LINEAR,[Ke]:i.LINEAR,[oo]:i.LINEAR_MIPMAP_NEAREST,[oi]:i.LINEAR_MIPMAP_LINEAR},nt={[ou]:i.NEVER,[du]:i.ALWAYS,[au]:i.LESS,[zl]:i.LEQUAL,[cu]:i.EQUAL,[uu]:i.GEQUAL,[lu]:i.GREATER,[hu]:i.NOTEQUAL};function wt(C,v){if(v.type===yn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Ke||v.magFilter===oo||v.magFilter===Qs||v.magFilter===oi||v.minFilter===Ke||v.minFilter===oo||v.minFilter===Qs||v.minFilter===oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,it[v.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,it[v.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,it[v.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ut[v.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ut[v.minFilter]),v.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,nt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===He||v.minFilter!==Qs&&v.minFilter!==oi||v.type===yn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Rt(C,v){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",S));let K=v.source,tt=u.get(K);tt===void 0&&(tt={},u.set(K,tt));let X=G(v);if(X!==C.__cacheKey){tt[X]===void 0&&(tt[X]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),tt[X].usedTimes++;let Ct=tt[C.__cacheKey];Ct!==void 0&&(tt[C.__cacheKey].usedTimes--,Ct.usedTimes===0&&E(v)),C.__cacheKey=X,C.__webglTexture=tt[X].texture}return O}function k(C,v,O){let K=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(K=i.TEXTURE_3D);let tt=Rt(C,v),X=v.source;e.bindTexture(K,C.__webglTexture,i.TEXTURE0+O);let Ct=n.get(X);if(X.version!==Ct.__version||tt===!0){e.activeTexture(i.TEXTURE0+O);let pt=qt.getPrimaries(qt.workingColorSpace),yt=v.colorSpace===Ln?null:qt.getPrimaries(v.colorSpace),Vt=v.colorSpace===Ln||pt===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let at=g(v.image,!1,s.maxTextureSize);at=Pt(v,at);let Et=r.convert(v.format,v.colorSpace),It=r.convert(v.type),Ft=M(v.internalFormat,Et,It,v.colorSpace,v.isVideoTexture);wt(K,v);let St,Ht=v.mipmaps,Qt=v.isVideoTexture!==!0,jt=Ct.__version===void 0||tt===!0,U=X.dataReady,mt=P(v,at);if(v.isDepthTexture)Ft=x(v.format===Ji,v.type),jt&&(Qt?e.texStorage2D(i.TEXTURE_2D,1,Ft,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,Ft,at.width,at.height,0,Et,It,null));else if(v.isDataTexture)if(Ht.length>0){Qt&&jt&&e.texStorage2D(i.TEXTURE_2D,mt,Ft,Ht[0].width,Ht[0].height);for(let Y=0,j=Ht.length;Y<j;Y++)St=Ht[Y],Qt?U&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,St.width,St.height,Et,It,St.data):e.texImage2D(i.TEXTURE_2D,Y,Ft,St.width,St.height,0,Et,It,St.data);v.generateMipmaps=!1}else Qt?(jt&&e.texStorage2D(i.TEXTURE_2D,mt,Ft,at.width,at.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,at.width,at.height,Et,It,at.data)):e.texImage2D(i.TEXTURE_2D,0,Ft,at.width,at.height,0,Et,It,at.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Qt&&jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,Ft,Ht[0].width,Ht[0].height,at.depth);for(let Y=0,j=Ht.length;Y<j;Y++)if(St=Ht[Y],v.format!==on)if(Et!==null)if(Qt){if(U)if(v.layerUpdates.size>0){let _t=yl(St.width,St.height,v.format,v.type);for(let vt of v.layerUpdates){let Ot=St.data.subarray(vt*_t/St.data.BYTES_PER_ELEMENT,(vt+1)*_t/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,vt,St.width,St.height,1,Et,Ot)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,St.width,St.height,at.depth,Et,St.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,Ft,St.width,St.height,at.depth,0,St.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qt?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,St.width,St.height,at.depth,Et,It,St.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Y,Ft,St.width,St.height,at.depth,0,Et,It,St.data)}else{Qt&&jt&&e.texStorage2D(i.TEXTURE_2D,mt,Ft,Ht[0].width,Ht[0].height);for(let Y=0,j=Ht.length;Y<j;Y++)St=Ht[Y],v.format!==on?Et!==null?Qt?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,St.width,St.height,Et,St.data):e.compressedTexImage2D(i.TEXTURE_2D,Y,Ft,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?U&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,St.width,St.height,Et,It,St.data):e.texImage2D(i.TEXTURE_2D,Y,Ft,St.width,St.height,0,Et,It,St.data)}else if(v.isDataArrayTexture)if(Qt){if(jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,Ft,at.width,at.height,at.depth),U)if(v.layerUpdates.size>0){let Y=yl(at.width,at.height,v.format,v.type);for(let j of v.layerUpdates){let _t=at.data.subarray(j*Y/at.data.BYTES_PER_ELEMENT,(j+1)*Y/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,at.width,at.height,1,Et,It,_t)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,Et,It,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ft,at.width,at.height,at.depth,0,Et,It,at.data);else if(v.isData3DTexture)Qt?(jt&&e.texStorage3D(i.TEXTURE_3D,mt,Ft,at.width,at.height,at.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,Et,It,at.data)):e.texImage3D(i.TEXTURE_3D,0,Ft,at.width,at.height,at.depth,0,Et,It,at.data);else if(v.isFramebufferTexture){if(jt)if(Qt)e.texStorage2D(i.TEXTURE_2D,mt,Ft,at.width,at.height);else{let Y=at.width,j=at.height;for(let _t=0;_t<mt;_t++)e.texImage2D(i.TEXTURE_2D,_t,Ft,Y,j,0,Et,It,null),Y>>=1,j>>=1}}else if(Ht.length>0){if(Qt&&jt){let Y=Mt(Ht[0]);e.texStorage2D(i.TEXTURE_2D,mt,Ft,Y.width,Y.height)}for(let Y=0,j=Ht.length;Y<j;Y++)St=Ht[Y],Qt?U&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,Et,It,St):e.texImage2D(i.TEXTURE_2D,Y,Ft,Et,It,St);v.generateMipmaps=!1}else if(Qt){if(jt){let Y=Mt(at);e.texStorage2D(i.TEXTURE_2D,mt,Ft,Y.width,Y.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Et,It,at)}else e.texImage2D(i.TEXTURE_2D,0,Ft,Et,It,at);A(v)&&f(K),Ct.__version=X.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function rt(C,v,O){if(v.image.length!==6)return;let K=Rt(C,v),tt=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+O);let X=n.get(tt);if(tt.version!==X.__version||K===!0){e.activeTexture(i.TEXTURE0+O);let Ct=qt.getPrimaries(qt.workingColorSpace),pt=v.colorSpace===Ln?null:qt.getPrimaries(v.colorSpace),yt=v.colorSpace===Ln||Ct===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let Vt=v.isCompressedTexture||v.image[0].isCompressedTexture,at=v.image[0]&&v.image[0].isDataTexture,Et=[];for(let j=0;j<6;j++)!Vt&&!at?Et[j]=g(v.image[j],!0,s.maxCubemapSize):Et[j]=at?v.image[j].image:v.image[j],Et[j]=Pt(v,Et[j]);let It=Et[0],Ft=r.convert(v.format,v.colorSpace),St=r.convert(v.type),Ht=M(v.internalFormat,Ft,St,v.colorSpace),Qt=v.isVideoTexture!==!0,jt=X.__version===void 0||K===!0,U=tt.dataReady,mt=P(v,It);wt(i.TEXTURE_CUBE_MAP,v);let Y;if(Vt){Qt&&jt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,Ht,It.width,It.height);for(let j=0;j<6;j++){Y=Et[j].mipmaps;for(let _t=0;_t<Y.length;_t++){let vt=Y[_t];v.format!==on?Ft!==null?Qt?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t,0,0,vt.width,vt.height,Ft,vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t,Ht,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t,0,0,vt.width,vt.height,Ft,St,vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t,Ht,vt.width,vt.height,0,Ft,St,vt.data)}}}else{if(Y=v.mipmaps,Qt&&jt){Y.length>0&&mt++;let j=Mt(Et[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,Ht,j.width,j.height)}for(let j=0;j<6;j++)if(at){Qt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Et[j].width,Et[j].height,Ft,St,Et[j].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ht,Et[j].width,Et[j].height,0,Ft,St,Et[j].data);for(let _t=0;_t<Y.length;_t++){let Ot=Y[_t].image[j].image;Qt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t+1,0,0,Ot.width,Ot.height,Ft,St,Ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t+1,Ht,Ot.width,Ot.height,0,Ft,St,Ot.data)}}else{Qt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ft,St,Et[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ht,Ft,St,Et[j]);for(let _t=0;_t<Y.length;_t++){let vt=Y[_t];Qt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t+1,0,0,Ft,St,vt.image[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,_t+1,Ht,Ft,St,vt.image[j])}}}A(v)&&f(i.TEXTURE_CUBE_MAP),X.__version=tt.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function gt(C,v,O,K,tt,X){let Ct=r.convert(O.format,O.colorSpace),pt=r.convert(O.type),yt=M(O.internalFormat,Ct,pt,O.colorSpace),Vt=n.get(v),at=n.get(O);if(at.__renderTarget=v,!Vt.__hasExternalTextures){let Et=Math.max(1,v.width>>X),It=Math.max(1,v.height>>X);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,X,yt,Et,It,v.depth,0,Ct,pt,null):e.texImage2D(tt,X,yt,Et,It,0,Ct,pt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),At(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,tt,at.__webglTexture,0,st(v)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,tt,at.__webglTexture,X),e.bindFramebuffer(i.FRAMEBUFFER,null)}function et(C,v,O){if(i.bindRenderbuffer(i.RENDERBUFFER,C),v.depthBuffer){let K=v.depthTexture,tt=K&&K.isDepthTexture?K.type:null,X=x(v.stencilBuffer,tt),Ct=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=st(v);At(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt,X,v.width,v.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,X,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,X,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ct,i.RENDERBUFFER,C)}else{let K=v.textures;for(let tt=0;tt<K.length;tt++){let X=K[tt],Ct=r.convert(X.format,X.colorSpace),pt=r.convert(X.type),yt=M(X.internalFormat,Ct,pt,X.colorSpace),Vt=st(v);O&&At(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,yt,v.width,v.height):At(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Vt,yt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,yt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Dt(C,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=n.get(v.depthTexture);K.__renderTarget=v,(!K.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),J(v.depthTexture,0);let tt=K.__webglTexture,X=st(v);if(v.depthTexture.format===zi)At(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(v.depthTexture.format===Ji)At(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Nt(C){let v=n.get(C),O=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){let K=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),K){let tt=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,K.removeEventListener("dispose",tt)};K.addEventListener("dispose",tt),v.__depthDisposeCallback=tt}v.__boundDepthTexture=K}if(C.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Dt(v.__webglFramebuffer,C)}else if(O){v.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[K]),v.__webglDepthbuffer[K]===void 0)v.__webglDepthbuffer[K]=i.createRenderbuffer(),et(v.__webglDepthbuffer[K],C,!1);else{let tt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,X)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),et(v.__webglDepthbuffer,C,!1);else{let K=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,tt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(C,v,O){let K=n.get(C);v!==void 0&&gt(K.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Nt(C)}function Yt(C){let v=C.texture,O=n.get(C),K=n.get(v);C.addEventListener("dispose",T);let tt=C.textures,X=C.isWebGLCubeRenderTarget===!0,Ct=tt.length>1;if(Ct||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=v.version,o.memory.textures++),X){O.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[pt]=[];for(let yt=0;yt<v.mipmaps.length;yt++)O.__webglFramebuffer[pt][yt]=i.createFramebuffer()}else O.__webglFramebuffer[pt]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let pt=0;pt<v.mipmaps.length;pt++)O.__webglFramebuffer[pt]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Ct)for(let pt=0,yt=tt.length;pt<yt;pt++){let Vt=n.get(tt[pt]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&At(C)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let pt=0;pt<tt.length;pt++){let yt=tt[pt];O.__webglColorRenderbuffer[pt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[pt]);let Vt=r.convert(yt.format,yt.colorSpace),at=r.convert(yt.type),Et=M(yt.internalFormat,Vt,at,yt.colorSpace,C.isXRRenderTarget===!0),It=st(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,It,Et,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,O.__webglColorRenderbuffer[pt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),et(O.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),wt(i.TEXTURE_CUBE_MAP,v);for(let pt=0;pt<6;pt++)if(v.mipmaps&&v.mipmaps.length>0)for(let yt=0;yt<v.mipmaps.length;yt++)gt(O.__webglFramebuffer[pt][yt],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,yt);else gt(O.__webglFramebuffer[pt],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);A(v)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let pt=0,yt=tt.length;pt<yt;pt++){let Vt=tt[pt],at=n.get(Vt);e.bindTexture(i.TEXTURE_2D,at.__webglTexture),wt(i.TEXTURE_2D,Vt),gt(O.__webglFramebuffer,C,Vt,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,0),A(Vt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let pt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(pt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,K.__webglTexture),wt(pt,v),v.mipmaps&&v.mipmaps.length>0)for(let yt=0;yt<v.mipmaps.length;yt++)gt(O.__webglFramebuffer[yt],C,v,i.COLOR_ATTACHMENT0,pt,yt);else gt(O.__webglFramebuffer,C,v,i.COLOR_ATTACHMENT0,pt,0);A(v)&&f(pt),e.unbindTexture()}C.depthBuffer&&Nt(C)}function $(C){let v=C.textures;for(let O=0,K=v.length;O<K;O++){let tt=v[O];if(A(tt)){let X=_(C),Ct=n.get(tt).__webglTexture;e.bindTexture(X,Ct),f(X),e.unbindTexture()}}}let ct=[],D=[];function dt(C){if(C.samples>0){if(At(C)===!1){let v=C.textures,O=C.width,K=C.height,tt=i.COLOR_BUFFER_BIT,X=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=n.get(C),pt=v.length>1;if(pt)for(let yt=0;yt<v.length;yt++)e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let yt=0;yt<v.length;yt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),pt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[yt]);let Vt=n.get(v[yt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Vt,0)}i.blitFramebuffer(0,0,O,K,0,0,O,K,tt,i.NEAREST),c===!0&&(ct.length=0,D.length=0,ct.push(i.COLOR_ATTACHMENT0+yt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ct.push(X),D.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ct))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pt)for(let yt=0;yt<v.length;yt++){e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[yt]);let Vt=n.get(v[yt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,Vt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){let v=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function st(C){return Math.min(s.maxSamples,C.samples)}function At(C){let v=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ft(C){let v=o.render.frame;h.get(C)!==v&&(h.set(C,v),C.update())}function Pt(C,v){let O=C.colorSpace,K=C.format,tt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||O!==es&&O!==Ln&&(qt.getTransfer(O)===ne?(K!==on||tt!==an)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function Mt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=H,this.setTexture2D=J,this.setTexture2DArray=V,this.setTexture3D=q,this.setTextureCube=z,this.rebindTextures=Lt,this.setupRenderTarget=Yt,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=At}function _m(i,t){function e(n,s=Ln){let r,o=qt.getTransfer(s);if(n===an)return i.UNSIGNED_BYTE;if(n===hc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===uc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Pl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Il)return i.BYTE;if(n===Rl)return i.SHORT;if(n===Es)return i.UNSIGNED_SHORT;if(n===lc)return i.INT;if(n===ai)return i.UNSIGNED_INT;if(n===yn)return i.FLOAT;if(n===Ps)return i.HALF_FLOAT;if(n===Ll)return i.ALPHA;if(n===Ul)return i.RGB;if(n===on)return i.RGBA;if(n===Fl)return i.LUMINANCE;if(n===Nl)return i.LUMINANCE_ALPHA;if(n===zi)return i.DEPTH_COMPONENT;if(n===Ji)return i.DEPTH_STENCIL;if(n===Ol)return i.RED;if(n===dc)return i.RED_INTEGER;if(n===Ql)return i.RG;if(n===fc)return i.RG_INTEGER;if(n===pc)return i.RGBA_INTEGER;if(n===hr||n===ur||n===dr||n===fr)if(o===ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===hr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===hr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Zo||n===jo||n===$o||n===ta)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Zo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===jo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$o)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ta)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ea||n===na||n===ia)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ea||n===na)return o===ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ia)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===sa||n===ra||n===oa||n===aa||n===ca||n===la||n===ha||n===ua||n===da||n===fa||n===pa||n===Aa||n===ma||n===ga)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===sa)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ra)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===oa)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===aa)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ca)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===la)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ha)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ua)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===da)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===fa)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===pa)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Aa)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ma)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ga)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===pr||n===xa||n===va)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===pr)return o===ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===va)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===kl||n===_a||n===Ma||n===ya)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===pr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===_a)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ma)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ya)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Na=class extends pe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Un=class extends Qe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Mm={type:"move"},_s=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let g of t.hand.values()){let A=e.getJointPose(g,n),f=this._getHandJoint(l,g);A!==null&&(f.matrix.fromArray(A.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=A.radius),f.visible=A!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,m=.005;l.inputState.pinching&&u>p+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=p-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Mm)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Un;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ym=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wm=`
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

}`,Oa=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new We,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ke({vertexShader:ym,fragmentShader:wm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pe(new Gn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Qa=class extends Qn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,p=null,m=null,g=new Oa,A=e.getContextAttributes(),f=null,_=null,M=[],x=[],P=new ht,S=null,T=new pe;T.viewport=new se;let I=new pe;I.viewport=new se;let E=[T,I],y=new Na,R=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let rt=M[k];return rt===void 0&&(rt=new _s,M[k]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(k){let rt=M[k];return rt===void 0&&(rt=new _s,M[k]=rt),rt.getGripSpace()},this.getHand=function(k){let rt=M[k];return rt===void 0&&(rt=new _s,M[k]=rt),rt.getHandSpace()};function N(k){let rt=x.indexOf(k.inputSource);if(rt===-1)return;let gt=M[rt];gt!==void 0&&(gt.update(k.inputSource,k.frame,l||o),gt.dispatchEvent({type:k.type,data:k.inputSource}))}function G(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",J);for(let k=0;k<M.length;k++){let rt=x[k];rt!==null&&(x[k]=null,M[k].disconnect(rt))}R=null,H=null,g.reset(),t.setRenderTarget(f),p=null,u=null,d=null,s=null,_=null,Rt.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",G),s.addEventListener("inputsourceschange",J),A.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){let rt={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,rt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new cn(p.framebufferWidth,p.framebufferHeight,{format:on,type:an,colorSpace:t.outputColorSpace,stencilBuffer:A.stencil})}else{let rt=null,gt=null,et=null;A.depth&&(et=A.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=A.stencil?Ji:zi,gt=A.stencil?Xi:ai);let Dt={colorFormat:e.RGBA8,depthFormat:et,scaleFactor:r};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(Dt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new cn(u.textureWidth,u.textureHeight,{format:on,type:an,depthTexture:new Sr(u.textureWidth,u.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:A.stencil,colorSpace:t.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Rt.setContext(s),Rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function J(k){for(let rt=0;rt<k.removed.length;rt++){let gt=k.removed[rt],et=x.indexOf(gt);et>=0&&(x[et]=null,M[et].disconnect(gt))}for(let rt=0;rt<k.added.length;rt++){let gt=k.added[rt],et=x.indexOf(gt);if(et===-1){for(let Nt=0;Nt<M.length;Nt++)if(Nt>=x.length){x.push(gt),et=Nt;break}else if(x[Nt]===null){x[Nt]=gt,et=Nt;break}if(et===-1)break}let Dt=M[et];Dt&&Dt.connect(gt)}}let V=new L,q=new L;function z(k,rt,gt){V.setFromMatrixPosition(rt.matrixWorld),q.setFromMatrixPosition(gt.matrixWorld);let et=V.distanceTo(q),Dt=rt.projectionMatrix.elements,Nt=gt.projectionMatrix.elements,Lt=Dt[14]/(Dt[10]-1),Yt=Dt[14]/(Dt[10]+1),$=(Dt[9]+1)/Dt[5],ct=(Dt[9]-1)/Dt[5],D=(Dt[8]-1)/Dt[0],dt=(Nt[8]+1)/Nt[0],st=Lt*D,At=Lt*dt,ft=et/(-D+dt),Pt=ft*-D;if(rt.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Pt),k.translateZ(ft),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),Dt[10]===-1)k.projectionMatrix.copy(rt.projectionMatrix),k.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{let Mt=Lt+ft,C=Yt+ft,v=st-Pt,O=At+(et-Pt),K=$*Yt/C*Mt,tt=ct*Yt/C*Mt;k.projectionMatrix.makePerspective(v,O,K,tt,Mt,C),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function it(k,rt){rt===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(rt.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;let rt=k.near,gt=k.far;g.texture!==null&&(g.depthNear>0&&(rt=g.depthNear),g.depthFar>0&&(gt=g.depthFar)),y.near=I.near=T.near=rt,y.far=I.far=T.far=gt,(R!==y.near||H!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),R=y.near,H=y.far),T.layers.mask=k.layers.mask|2,I.layers.mask=k.layers.mask|4,y.layers.mask=T.layers.mask|I.layers.mask;let et=k.parent,Dt=y.cameras;it(y,et);for(let Nt=0;Nt<Dt.length;Nt++)it(Dt[Nt],et);Dt.length===2?z(y,T,I):y.projectionMatrix.copy(T.projectionMatrix),ut(k,y,et)};function ut(k,rt,gt){gt===null?k.matrix.copy(rt.matrixWorld):(k.matrix.copy(gt.matrixWorld),k.matrix.invert(),k.matrix.multiply(rt.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(rt.projectionMatrix),k.projectionMatrixInverse.copy(rt.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Ss*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(k){c=k,u!==null&&(u.fixedFoveation=k),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=k)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(y)};let nt=null;function wt(k,rt){if(h=rt.getViewerPose(l||o),m=rt,h!==null){let gt=h.views;p!==null&&(t.setRenderTargetFramebuffer(_,p.framebuffer),t.setRenderTarget(_));let et=!1;gt.length!==y.cameras.length&&(y.cameras.length=0,et=!0);for(let Nt=0;Nt<gt.length;Nt++){let Lt=gt[Nt],Yt=null;if(p!==null)Yt=p.getViewport(Lt);else{let ct=d.getViewSubImage(u,Lt);Yt=ct.viewport,Nt===0&&(t.setRenderTargetTextures(_,ct.colorTexture,u.ignoreDepthValues?void 0:ct.depthStencilTexture),t.setRenderTarget(_))}let $=E[Nt];$===void 0&&($=new pe,$.layers.enable(Nt),$.viewport=new se,E[Nt]=$),$.matrix.fromArray(Lt.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(Lt.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(Yt.x,Yt.y,Yt.width,Yt.height),Nt===0&&(y.matrix.copy($.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),et===!0&&y.cameras.push($)}let Dt=s.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")){let Nt=d.getDepthInformation(gt[0]);Nt&&Nt.isValid&&Nt.texture&&g.init(t,Nt,s.renderState)}}for(let gt=0;gt<M.length;gt++){let et=x[gt],Dt=M[gt];et!==null&&Dt!==void 0&&Dt.update(et,rt,l||o)}nt&&nt(k,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),m=null}let Rt=new Wl;Rt.setAnimationLoop(wt),this.setAnimationLoop=function(k){nt=k},this.dispose=function(){}}},ti=new Ye,Em=new re;function Sm(i,t){function e(A,f){A.matrixAutoUpdate===!0&&A.updateMatrix(),f.value.copy(A.matrix)}function n(A,f){f.color.getRGB(A.fogColor.value,Hl(i)),f.isFog?(A.fogNear.value=f.near,A.fogFar.value=f.far):f.isFogExp2&&(A.fogDensity.value=f.density)}function s(A,f,_,M,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(A,f):f.isMeshToonMaterial?(r(A,f),d(A,f)):f.isMeshPhongMaterial?(r(A,f),h(A,f)):f.isMeshStandardMaterial?(r(A,f),u(A,f),f.isMeshPhysicalMaterial&&p(A,f,x)):f.isMeshMatcapMaterial?(r(A,f),m(A,f)):f.isMeshDepthMaterial?r(A,f):f.isMeshDistanceMaterial?(r(A,f),g(A,f)):f.isMeshNormalMaterial?r(A,f):f.isLineBasicMaterial?(o(A,f),f.isLineDashedMaterial&&a(A,f)):f.isPointsMaterial?c(A,f,_,M):f.isSpriteMaterial?l(A,f):f.isShadowMaterial?(A.color.value.copy(f.color),A.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(A,f){A.opacity.value=f.opacity,f.color&&A.diffuse.value.copy(f.color),f.emissive&&A.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(A.map.value=f.map,e(f.map,A.mapTransform)),f.alphaMap&&(A.alphaMap.value=f.alphaMap,e(f.alphaMap,A.alphaMapTransform)),f.bumpMap&&(A.bumpMap.value=f.bumpMap,e(f.bumpMap,A.bumpMapTransform),A.bumpScale.value=f.bumpScale,f.side===Ee&&(A.bumpScale.value*=-1)),f.normalMap&&(A.normalMap.value=f.normalMap,e(f.normalMap,A.normalMapTransform),A.normalScale.value.copy(f.normalScale),f.side===Ee&&A.normalScale.value.negate()),f.displacementMap&&(A.displacementMap.value=f.displacementMap,e(f.displacementMap,A.displacementMapTransform),A.displacementScale.value=f.displacementScale,A.displacementBias.value=f.displacementBias),f.emissiveMap&&(A.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,A.emissiveMapTransform)),f.specularMap&&(A.specularMap.value=f.specularMap,e(f.specularMap,A.specularMapTransform)),f.alphaTest>0&&(A.alphaTest.value=f.alphaTest);let _=t.get(f),M=_.envMap,x=_.envMapRotation;M&&(A.envMap.value=M,ti.copy(x),ti.x*=-1,ti.y*=-1,ti.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),A.envMapRotation.value.setFromMatrix4(Em.makeRotationFromEuler(ti)),A.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,A.reflectivity.value=f.reflectivity,A.ior.value=f.ior,A.refractionRatio.value=f.refractionRatio),f.lightMap&&(A.lightMap.value=f.lightMap,A.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,A.lightMapTransform)),f.aoMap&&(A.aoMap.value=f.aoMap,A.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,A.aoMapTransform))}function o(A,f){A.diffuse.value.copy(f.color),A.opacity.value=f.opacity,f.map&&(A.map.value=f.map,e(f.map,A.mapTransform))}function a(A,f){A.dashSize.value=f.dashSize,A.totalSize.value=f.dashSize+f.gapSize,A.scale.value=f.scale}function c(A,f,_,M){A.diffuse.value.copy(f.color),A.opacity.value=f.opacity,A.size.value=f.size*_,A.scale.value=M*.5,f.map&&(A.map.value=f.map,e(f.map,A.uvTransform)),f.alphaMap&&(A.alphaMap.value=f.alphaMap,e(f.alphaMap,A.alphaMapTransform)),f.alphaTest>0&&(A.alphaTest.value=f.alphaTest)}function l(A,f){A.diffuse.value.copy(f.color),A.opacity.value=f.opacity,A.rotation.value=f.rotation,f.map&&(A.map.value=f.map,e(f.map,A.mapTransform)),f.alphaMap&&(A.alphaMap.value=f.alphaMap,e(f.alphaMap,A.alphaMapTransform)),f.alphaTest>0&&(A.alphaTest.value=f.alphaTest)}function h(A,f){A.specular.value.copy(f.specular),A.shininess.value=Math.max(f.shininess,1e-4)}function d(A,f){f.gradientMap&&(A.gradientMap.value=f.gradientMap)}function u(A,f){A.metalness.value=f.metalness,f.metalnessMap&&(A.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,A.metalnessMapTransform)),A.roughness.value=f.roughness,f.roughnessMap&&(A.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,A.roughnessMapTransform)),f.envMap&&(A.envMapIntensity.value=f.envMapIntensity)}function p(A,f,_){A.ior.value=f.ior,f.sheen>0&&(A.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),A.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(A.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,A.sheenColorMapTransform)),f.sheenRoughnessMap&&(A.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,A.sheenRoughnessMapTransform))),f.clearcoat>0&&(A.clearcoat.value=f.clearcoat,A.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(A.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,A.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(A.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,A.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(A.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,A.clearcoatNormalMapTransform),A.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ee&&A.clearcoatNormalScale.value.negate())),f.dispersion>0&&(A.dispersion.value=f.dispersion),f.iridescence>0&&(A.iridescence.value=f.iridescence,A.iridescenceIOR.value=f.iridescenceIOR,A.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],A.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(A.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,A.iridescenceMapTransform)),f.iridescenceThicknessMap&&(A.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,A.iridescenceThicknessMapTransform))),f.transmission>0&&(A.transmission.value=f.transmission,A.transmissionSamplerMap.value=_.texture,A.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(A.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,A.transmissionMapTransform)),A.thickness.value=f.thickness,f.thicknessMap&&(A.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,A.thicknessMapTransform)),A.attenuationDistance.value=f.attenuationDistance,A.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(A.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(A.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,A.anisotropyMapTransform))),A.specularIntensity.value=f.specularIntensity,A.specularColor.value.copy(f.specularColor),f.specularColorMap&&(A.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,A.specularColorMapTransform)),f.specularIntensityMap&&(A.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,A.specularIntensityMapTransform))}function m(A,f){f.matcap&&(A.matcap.value=f.matcap)}function g(A,f){let _=t.get(f).light;A.referencePosition.value.setFromMatrixPosition(_.matrixWorld),A.nearDistance.value=_.shadow.camera.near,A.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Cm(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,M){let x=M.program;n.uniformBlockBinding(_,x)}function l(_,M){let x=s[_.id];x===void 0&&(m(_),x=h(_),s[_.id]=x,_.addEventListener("dispose",A));let P=M.program;n.updateUBOMapping(_,P);let S=t.render.frame;r[_.id]!==S&&(u(_),r[_.id]=S)}function h(_){let M=d();_.__bindingPointIndex=M;let x=i.createBuffer(),P=_.__size,S=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,P,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,x),x}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let M=s[_.id],x=_.uniforms,P=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let S=0,T=x.length;S<T;S++){let I=Array.isArray(x[S])?x[S]:[x[S]];for(let E=0,y=I.length;E<y;E++){let R=I[E];if(p(R,S,E,P)===!0){let H=R.__offset,N=Array.isArray(R.value)?R.value:[R.value],G=0;for(let J=0;J<N.length;J++){let V=N[J],q=g(V);typeof V=="number"||typeof V=="boolean"?(R.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,H+G,R.__data)):V.isMatrix3?(R.__data[0]=V.elements[0],R.__data[1]=V.elements[1],R.__data[2]=V.elements[2],R.__data[3]=0,R.__data[4]=V.elements[3],R.__data[5]=V.elements[4],R.__data[6]=V.elements[5],R.__data[7]=0,R.__data[8]=V.elements[6],R.__data[9]=V.elements[7],R.__data[10]=V.elements[8],R.__data[11]=0):(V.toArray(R.__data,G),G+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(_,M,x,P){let S=_.value,T=M+"_"+x;if(P[T]===void 0)return typeof S=="number"||typeof S=="boolean"?P[T]=S:P[T]=S.clone(),!0;{let I=P[T];if(typeof S=="number"||typeof S=="boolean"){if(I!==S)return P[T]=S,!0}else if(I.equals(S)===!1)return I.copy(S),!0}return!1}function m(_){let M=_.uniforms,x=0,P=16;for(let T=0,I=M.length;T<I;T++){let E=Array.isArray(M[T])?M[T]:[M[T]];for(let y=0,R=E.length;y<R;y++){let H=E[y],N=Array.isArray(H.value)?H.value:[H.value];for(let G=0,J=N.length;G<J;G++){let V=N[G],q=g(V),z=x%P,it=z%q.boundary,ut=z+it;x+=it,ut!==0&&P-ut<q.storage&&(x+=P-ut),H.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=x,x+=q.storage}}}let S=x%P;return S>0&&(x+=P-S),_.__size=x,_.__cache={},this}function g(_){let M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=48,M.storage=48):_.isMatrix4?(M.boundary=64,M.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),M}function A(_){let M=_.target;M.removeEventListener("dispose",A);let x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function f(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}var Hn=class{constructor(t={}){let{canvas:e=Tu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let m=new Uint32Array(4),g=new Int32Array(4),A=null,f=null,_=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=de,this.toneMapping=Nn,this.toneMappingExposure=1;let x=this,P=!1,S=0,T=0,I=null,E=-1,y=null,R=new se,H=new se,N=null,G=new Gt(0),J=0,V=e.width,q=e.height,z=1,it=null,ut=null,nt=new se(0,0,V,q),wt=new se(0,0,V,q),Rt=!1,k=new bs,rt=!1,gt=!1,et=new re,Dt=new re,Nt=new L,Lt=new se,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$=!1;function ct(){return I===null?z:1}let D=n;function dt(w,F){return e.getContext(w,F)}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${rc}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",vt,!1),D===null){let F="webgl2";if(D=dt(F,w),D===null)throw dt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let st,At,ft,Pt,Mt,C,v,O,K,tt,X,Ct,pt,yt,Vt,at,Et,It,Ft,St,Ht,Qt,jt,U;function mt(){st=new Gp(D),st.init(),Qt=new _m(D,st),At=new Fp(D,st,t,Qt),ft=new gm(D,st),At.reverseDepthBuffer&&u&&ft.buffers.depth.setReversed(!0),Pt=new Wp(D),Mt=new sm,C=new vm(D,st,ft,Mt,At,Qt,Pt),v=new Op(x),O=new zp(x),K=new Zu(D),jt=new Lp(D,K),tt=new Vp(D,K,Pt,jt),X=new Xp(D,tt,K,Pt),Ft=new Yp(D,At,C),at=new Np(Mt),Ct=new im(x,v,O,st,At,jt,at),pt=new Sm(x,Mt),yt=new om,Vt=new dm(st),It=new Pp(x,v,O,ft,X,p,c),Et=new Am(x,X,At),U=new Cm(D,Pt,At,ft),St=new Up(D,st,Pt),Ht=new Hp(D,st,Pt),Pt.programs=Ct.programs,x.capabilities=At,x.extensions=st,x.properties=Mt,x.renderLists=yt,x.shadowMap=Et,x.state=ft,x.info=Pt}mt();let Y=new Qa(x,D);this.xr=Y,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let w=st.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=st.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(w){w!==void 0&&(z=w,this.setSize(V,q,!1))},this.getSize=function(w){return w.set(V,q)},this.setSize=function(w,F,W=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=w,q=F,e.width=Math.floor(w*z),e.height=Math.floor(F*z),W===!0&&(e.style.width=w+"px",e.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(V*z,q*z).floor()},this.setDrawingBufferSize=function(w,F,W){V=w,q=F,z=W,e.width=Math.floor(w*W),e.height=Math.floor(F*W),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(R)},this.getViewport=function(w){return w.copy(nt)},this.setViewport=function(w,F,W,B){w.isVector4?nt.set(w.x,w.y,w.z,w.w):nt.set(w,F,W,B),ft.viewport(R.copy(nt).multiplyScalar(z).round())},this.getScissor=function(w){return w.copy(wt)},this.setScissor=function(w,F,W,B){w.isVector4?wt.set(w.x,w.y,w.z,w.w):wt.set(w,F,W,B),ft.scissor(H.copy(wt).multiplyScalar(z).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(w){ft.setScissorTest(Rt=w)},this.setOpaqueSort=function(w){it=w},this.setTransparentSort=function(w){ut=w},this.getClearColor=function(w){return w.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor.apply(It,arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha.apply(It,arguments)},this.clear=function(w=!0,F=!0,W=!0){let B=0;if(w){let b=!1;if(I!==null){let Q=I.texture.format;b=Q===pc||Q===fc||Q===dc}if(b){let Q=I.texture.type,Z=Q===an||Q===ai||Q===Es||Q===Xi||Q===hc||Q===uc,ot=It.getClearColor(),lt=It.getClearAlpha(),bt=ot.r,Ut=ot.g,Bt=ot.b;Z?(m[0]=bt,m[1]=Ut,m[2]=Bt,m[3]=lt,D.clearBufferuiv(D.COLOR,0,m)):(g[0]=bt,g[1]=Ut,g[2]=Bt,g[3]=lt,D.clearBufferiv(D.COLOR,0,g))}else B|=D.COLOR_BUFFER_BIT}F&&(B|=D.DEPTH_BUFFER_BIT),W&&(B|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),yt.dispose(),Vt.dispose(),Mt.dispose(),v.dispose(),O.dispose(),X.dispose(),jt.dispose(),U.dispose(),Ct.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",vi),Y.removeEventListener("sessionend",Wn),je.stop()};function j(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let w=Pt.autoReset,F=Et.enabled,W=Et.autoUpdate,B=Et.needsUpdate,b=Et.type;mt(),Pt.autoReset=w,Et.enabled=F,Et.autoUpdate=W,Et.needsUpdate=B,Et.type=b}function vt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ot(w){let F=w.target;F.removeEventListener("dispose",Ot),ie(F)}function ie(w){ue(w),Mt.remove(w)}function ue(w){let F=Mt.get(w).programs;F!==void 0&&(F.forEach(function(W){Ct.releaseProgram(W)}),w.isShaderMaterial&&Ct.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,W,B,b,Q){F===null&&(F=Yt);let Z=b.isMesh&&b.matrixWorld.determinant()<0,ot=Os(w,F,W,B,b);ft.setMaterial(B,Z);let lt=W.index,bt=1;if(B.wireframe===!0){if(lt=tt.getWireframeAttribute(W),lt===void 0)return;bt=2}let Ut=W.drawRange,Bt=W.attributes.position,Wt=Ut.start*bt,Xt=(Ut.start+Ut.count)*bt;Q!==null&&(Wt=Math.max(Wt,Q.start*bt),Xt=Math.min(Xt,(Q.start+Q.count)*bt)),lt!==null?(Wt=Math.max(Wt,0),Xt=Math.min(Xt,lt.count)):Bt!=null&&(Wt=Math.max(Wt,0),Xt=Math.min(Xt,Bt.count));let ee=Xt-Wt;if(ee<0||ee===1/0)return;jt.setup(b,B,ot,W,lt);let _e,Jt=St;if(lt!==null&&(_e=K.get(lt),Jt=Ht,Jt.setIndex(_e)),b.isMesh)B.wireframe===!0?(ft.setLineWidth(B.wireframeLinewidth*ct()),Jt.setMode(D.LINES)):Jt.setMode(D.TRIANGLES);else if(b.isLine){let Tt=B.linewidth;Tt===void 0&&(Tt=1),ft.setLineWidth(Tt*ct()),b.isLineSegments?Jt.setMode(D.LINES):b.isLineLoop?Jt.setMode(D.LINE_LOOP):Jt.setMode(D.LINE_STRIP)}else b.isPoints?Jt.setMode(D.POINTS):b.isSprite&&Jt.setMode(D.TRIANGLES);if(b.isBatchedMesh)if(b._multiDrawInstances!==null)Jt.renderMultiDrawInstances(b._multiDrawStarts,b._multiDrawCounts,b._multiDrawCount,b._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))Jt.renderMultiDraw(b._multiDrawStarts,b._multiDrawCounts,b._multiDrawCount);else{let Tt=b._multiDrawStarts,Be=b._multiDrawCounts,Kt=b._multiDrawCount,le=lt?K.get(lt).bytesPerElement:1,Te=Mt.get(B).currentProgram.getUniforms();for(let oe=0;oe<Kt;oe++)Te.setValue(D,"_gl_DrawID",oe),Jt.render(Tt[oe]/le,Be[oe])}else if(b.isInstancedMesh)Jt.renderInstances(Wt,ee,b.count);else if(W.isInstancedBufferGeometry){let Tt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Be=Math.min(W.instanceCount,Tt);Jt.renderInstances(Wt,ee,Be)}else Jt.render(Wt,ee)};function Zt(w,F,W){w.transparent===!0&&w.side===rn&&w.forceSinglePass===!1?(w.side=Ee,w.needsUpdate=!0,Yn(w,F,W),w.side=dn,w.needsUpdate=!0,Yn(w,F,W),w.side=rn):Yn(w,F,W)}this.compile=function(w,F,W=null){W===null&&(W=w),f=Vt.get(W),f.init(F),M.push(f),W.traverseVisible(function(b){b.isLight&&b.layers.test(F.layers)&&(f.pushLight(b),b.castShadow&&f.pushShadow(b))}),w!==W&&w.traverseVisible(function(b){b.isLight&&b.layers.test(F.layers)&&(f.pushLight(b),b.castShadow&&f.pushShadow(b))}),f.setupLights();let B=new Set;return w.traverse(function(b){if(!(b.isMesh||b.isPoints||b.isLine||b.isSprite))return;let Q=b.material;if(Q)if(Array.isArray(Q))for(let Z=0;Z<Q.length;Z++){let ot=Q[Z];Zt(ot,W,b),B.add(ot)}else Zt(Q,W,b),B.add(Q)}),M.pop(),f=null,B},this.compileAsync=function(w,F,W=null){let B=this.compile(w,F,W);return new Promise(b=>{function Q(){if(B.forEach(function(Z){Mt.get(Z).currentProgram.isReady()&&B.delete(Z)}),B.size===0){b(w);return}setTimeout(Q,10)}st.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Ue=null;function be(w){Ue&&Ue(w)}function vi(){je.stop()}function Wn(){je.start()}let je=new Wl;je.setAnimationLoop(be),typeof self<"u"&&je.setContext(self),this.setAnimationLoop=function(w){Ue=w,Y.setAnimationLoop(w),w===null?je.stop():je.start()},Y.addEventListener("sessionstart",vi),Y.addEventListener("sessionend",Wn),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(F),F=Y.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,F,I),f=Vt.get(w,M.length),f.init(F),M.push(f),Dt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),k.setFromProjectionMatrix(Dt),gt=this.localClippingEnabled,rt=at.init(this.clippingPlanes,gt),A=yt.get(w,_.length),A.init(),_.push(A),Y.enabled===!0&&Y.isPresenting===!0){let Q=x.xr.getDepthSensingMesh();Q!==null&&Fe(Q,F,-1/0,x.sortObjects)}Fe(w,F,0,x.sortObjects),A.finish(),x.sortObjects===!0&&A.sort(it,ut),$=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,$&&It.addToRenderList(A,w),this.info.render.frame++,rt===!0&&at.beginShadows();let W=f.state.shadowsArray;Et.render(W,w,F),rt===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();let B=A.opaque,b=A.transmissive;if(f.setupLights(),F.isArrayCamera){let Q=F.cameras;if(b.length>0)for(let Z=0,ot=Q.length;Z<ot;Z++){let lt=Q[Z];us(B,b,w,lt)}$&&It.render(w);for(let Z=0,ot=Q.length;Z<ot;Z++){let lt=Q[Z];hs(A,w,lt,lt.viewport)}}else b.length>0&&us(B,b,w,F),$&&It.render(w),hs(A,w,F);I!==null&&(C.updateMultisampleRenderTarget(I),C.updateRenderTargetMipmap(I)),w.isScene===!0&&w.onAfterRender(x,w,F),jt.resetDefaultState(),E=-1,y=null,M.pop(),M.length>0?(f=M[M.length-1],rt===!0&&at.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,_.pop(),_.length>0?A=_[_.length-1]:A=null};function Fe(w,F,W,B){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||k.intersectsSprite(w)){B&&Lt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Dt);let Z=X.update(w),ot=w.material;ot.visible&&A.push(w,Z,ot,W,Lt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||k.intersectsObject(w))){let Z=X.update(w),ot=w.material;if(B&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Lt.copy(w.boundingSphere.center)):(Z.boundingSphere===null&&Z.computeBoundingSphere(),Lt.copy(Z.boundingSphere.center)),Lt.applyMatrix4(w.matrixWorld).applyMatrix4(Dt)),Array.isArray(ot)){let lt=Z.groups;for(let bt=0,Ut=lt.length;bt<Ut;bt++){let Bt=lt[bt],Wt=ot[Bt.materialIndex];Wt&&Wt.visible&&A.push(w,Z,Wt,W,Lt.z,Bt)}}else ot.visible&&A.push(w,Z,ot,W,Lt.z,null)}}let Q=w.children;for(let Z=0,ot=Q.length;Z<ot;Z++)Fe(Q[Z],F,W,B)}function hs(w,F,W,B){let b=w.opaque,Q=w.transmissive,Z=w.transparent;f.setupLightsView(W),rt===!0&&at.setGlobalState(x.clippingPlanes,W),B&&ft.viewport(R.copy(B)),b.length>0&&bn(b,F,W),Q.length>0&&bn(Q,F,W),Z.length>0&&bn(Z,F,W),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function us(w,F,W,B){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[B.id]===void 0&&(f.state.transmissionRenderTarget[B.id]=new cn(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?Ps:an,minFilter:oi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));let Q=f.state.transmissionRenderTarget[B.id],Z=B.viewport||R;Q.setSize(Z.z,Z.w);let ot=x.getRenderTarget();x.setRenderTarget(Q),x.getClearColor(G),J=x.getClearAlpha(),J<1&&x.setClearColor(16777215,.5),x.clear(),$&&It.render(W);let lt=x.toneMapping;x.toneMapping=Nn;let bt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),f.setupLightsView(B),rt===!0&&at.setGlobalState(x.clippingPlanes,B),bn(w,W,B),C.updateMultisampleRenderTarget(Q),C.updateRenderTargetMipmap(Q),st.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let Bt=0,Wt=F.length;Bt<Wt;Bt++){let Xt=F[Bt],ee=Xt.object,_e=Xt.geometry,Jt=Xt.material,Tt=Xt.group;if(Jt.side===rn&&ee.layers.test(B.layers)){let Be=Jt.side;Jt.side=Ee,Jt.needsUpdate=!0,_i(ee,W,B,_e,Jt,Tt),Jt.side=Be,Jt.needsUpdate=!0,Ut=!0}}Ut===!0&&(C.updateMultisampleRenderTarget(Q),C.updateRenderTargetMipmap(Q))}x.setRenderTarget(ot),x.setClearColor(G,J),bt!==void 0&&(B.viewport=bt),x.toneMapping=lt}function bn(w,F,W){let B=F.isScene===!0?F.overrideMaterial:null;for(let b=0,Q=w.length;b<Q;b++){let Z=w[b],ot=Z.object,lt=Z.geometry,bt=B===null?Z.material:B,Ut=Z.group;ot.layers.test(W.layers)&&_i(ot,F,W,lt,bt,Ut)}}function _i(w,F,W,B,b,Q){w.onBeforeRender(x,F,W,B,b,Q),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),b.onBeforeRender(x,F,W,B,w,Q),b.transparent===!0&&b.side===rn&&b.forceSinglePass===!1?(b.side=Ee,b.needsUpdate=!0,x.renderBufferDirect(W,F,B,b,w,Q),b.side=dn,b.needsUpdate=!0,x.renderBufferDirect(W,F,B,b,w,Q),b.side=rn):x.renderBufferDirect(W,F,B,b,w,Q),w.onAfterRender(x,F,W,B,b,Q)}function Yn(w,F,W){F.isScene!==!0&&(F=Yt);let B=Mt.get(w),b=f.state.lights,Q=f.state.shadowsArray,Z=b.state.version,ot=Ct.getParameters(w,b.state,Q,F,W),lt=Ct.getProgramCacheKey(ot),bt=B.programs;B.environment=w.isMeshStandardMaterial?F.environment:null,B.fog=F.fog,B.envMap=(w.isMeshStandardMaterial?O:v).get(w.envMap||B.environment),B.envMapRotation=B.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,bt===void 0&&(w.addEventListener("dispose",Ot),bt=new Map,B.programs=bt);let Ut=bt.get(lt);if(Ut!==void 0){if(B.currentProgram===Ut&&B.lightsStateVersion===Z)return Mi(w,ot),Ut}else ot.uniforms=Ct.getUniforms(w),w.onBeforeCompile(ot,x),Ut=Ct.acquireProgram(ot,lt),bt.set(lt,Ut),B.uniforms=ot.uniforms;let Bt=B.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Bt.clippingPlanes=at.uniform),Mi(w,ot),B.needsLights=Jn(w),B.lightsStateVersion=Z,B.needsLights&&(Bt.ambientLightColor.value=b.state.ambient,Bt.lightProbe.value=b.state.probe,Bt.directionalLights.value=b.state.directional,Bt.directionalLightShadows.value=b.state.directionalShadow,Bt.spotLights.value=b.state.spot,Bt.spotLightShadows.value=b.state.spotShadow,Bt.rectAreaLights.value=b.state.rectArea,Bt.ltc_1.value=b.state.rectAreaLTC1,Bt.ltc_2.value=b.state.rectAreaLTC2,Bt.pointLights.value=b.state.point,Bt.pointLightShadows.value=b.state.pointShadow,Bt.hemisphereLights.value=b.state.hemi,Bt.directionalShadowMap.value=b.state.directionalShadowMap,Bt.directionalShadowMatrix.value=b.state.directionalShadowMatrix,Bt.spotShadowMap.value=b.state.spotShadowMap,Bt.spotLightMatrix.value=b.state.spotLightMatrix,Bt.spotLightMap.value=b.state.spotLightMap,Bt.pointShadowMap.value=b.state.pointShadowMap,Bt.pointShadowMatrix.value=b.state.pointShadowMatrix),B.currentProgram=Ut,B.uniformsList=null,Ut}function Xn(w){if(w.uniformsList===null){let F=w.currentProgram.getUniforms();w.uniformsList=Vi.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function Mi(w,F){let W=Mt.get(w);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function Os(w,F,W,B,b){F.isScene!==!0&&(F=Yt),C.resetTextureUnits();let Q=F.fog,Z=B.isMeshStandardMaterial?F.environment:null,ot=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:es,lt=(B.isMeshStandardMaterial?O:v).get(B.envMap||Z),bt=B.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ut=!!W.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Bt=!!W.morphAttributes.position,Wt=!!W.morphAttributes.normal,Xt=!!W.morphAttributes.color,ee=Nn;B.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ee=x.toneMapping);let _e=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Jt=_e!==void 0?_e.length:0,Tt=Mt.get(B),Be=f.state.lights;if(rt===!0&&(gt===!0||w!==y)){let De=w===y&&B.id===E;at.setState(B,w,De)}let Kt=!1;B.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==Be.state.version||Tt.outputColorSpace!==ot||b.isBatchedMesh&&Tt.batching===!1||!b.isBatchedMesh&&Tt.batching===!0||b.isBatchedMesh&&Tt.batchingColor===!0&&b.colorTexture===null||b.isBatchedMesh&&Tt.batchingColor===!1&&b.colorTexture!==null||b.isInstancedMesh&&Tt.instancing===!1||!b.isInstancedMesh&&Tt.instancing===!0||b.isSkinnedMesh&&Tt.skinning===!1||!b.isSkinnedMesh&&Tt.skinning===!0||b.isInstancedMesh&&Tt.instancingColor===!0&&b.instanceColor===null||b.isInstancedMesh&&Tt.instancingColor===!1&&b.instanceColor!==null||b.isInstancedMesh&&Tt.instancingMorph===!0&&b.morphTexture===null||b.isInstancedMesh&&Tt.instancingMorph===!1&&b.morphTexture!==null||Tt.envMap!==lt||B.fog===!0&&Tt.fog!==Q||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==at.numPlanes||Tt.numIntersection!==at.numIntersection)||Tt.vertexAlphas!==bt||Tt.vertexTangents!==Ut||Tt.morphTargets!==Bt||Tt.morphNormals!==Wt||Tt.morphColors!==Xt||Tt.toneMapping!==ee||Tt.morphTargetsCount!==Jt)&&(Kt=!0):(Kt=!0,Tt.__version=B.version);let le=Tt.currentProgram;Kt===!0&&(le=Yn(B,F,b));let Te=!1,oe=!1,fn=!1,$t=le.getUniforms(),Ne=Tt.uniforms;if(ft.useProgram(le.program)&&(Te=!0,oe=!0,fn=!0),B.id!==E&&(E=B.id,oe=!0),Te||y!==w){ft.buffers.depth.getReversed()?(et.copy(w.projectionMatrix),Iu(et),Ru(et),$t.setValue(D,"projectionMatrix",et)):$t.setValue(D,"projectionMatrix",w.projectionMatrix),$t.setValue(D,"viewMatrix",w.matrixWorldInverse);let Me=$t.map.cameraPosition;Me!==void 0&&Me.setValue(D,Nt.setFromMatrixPosition(w.matrixWorld)),At.logarithmicDepthBuffer&&$t.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&$t.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,oe=!0,fn=!0)}if(b.isSkinnedMesh){$t.setOptional(D,b,"bindMatrix"),$t.setOptional(D,b,"bindMatrixInverse");let De=b.skeleton;De&&(De.boneTexture===null&&De.computeBoneTexture(),$t.setValue(D,"boneTexture",De.boneTexture,C))}b.isBatchedMesh&&($t.setOptional(D,b,"batchingTexture"),$t.setValue(D,"batchingTexture",b._matricesTexture,C),$t.setOptional(D,b,"batchingIdTexture"),$t.setValue(D,"batchingIdTexture",b._indirectTexture,C),$t.setOptional(D,b,"batchingColorTexture"),b._colorsTexture!==null&&$t.setValue(D,"batchingColorTexture",b._colorsTexture,C));let pn=W.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&Ft.update(b,W,le),(oe||Tt.receiveShadow!==b.receiveShadow)&&(Tt.receiveShadow=b.receiveShadow,$t.setValue(D,"receiveShadow",b.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Ne.envMap.value=lt,Ne.flipEnvMap.value=lt.isCubeTexture&&lt.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&F.environment!==null&&(Ne.envMapIntensity.value=F.environmentIntensity),oe&&($t.setValue(D,"toneMappingExposure",x.toneMappingExposure),Tt.needsLights&&yi(Ne,fn),Q&&B.fog===!0&&pt.refreshFogUniforms(Ne,Q),pt.refreshMaterialUniforms(Ne,B,z,q,f.state.transmissionRenderTarget[w.id]),Vi.upload(D,Xn(Tt),Ne,C)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Vi.upload(D,Xn(Tt),Ne,C),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&$t.setValue(D,"center",b.center),$t.setValue(D,"modelViewMatrix",b.modelViewMatrix),$t.setValue(D,"normalMatrix",b.normalMatrix),$t.setValue(D,"modelMatrix",b.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let De=B.uniformsGroups;for(let Me=0,$e=De.length;Me<$e;Me++){let tn=De[Me];U.update(tn,le),U.bind(tn,le)}}return le}function yi(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function Jn(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(w,F,W){Mt.get(w.texture).__webglTexture=F,Mt.get(w.depthTexture).__webglTexture=W;let B=Mt.get(w);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=W===void 0,B.__autoAllocateDepthBuffer||st.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,F){let W=Mt.get(w);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,W=0){I=w,S=F,T=W;let B=!0,b=null,Q=!1,Z=!1;if(w){let lt=Mt.get(w);if(lt.__useDefaultFramebuffer!==void 0)ft.bindFramebuffer(D.FRAMEBUFFER,null),B=!1;else if(lt.__webglFramebuffer===void 0)C.setupRenderTarget(w);else if(lt.__hasExternalTextures)C.rebindTextures(w,Mt.get(w.texture).__webglTexture,Mt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Bt=w.depthTexture;if(lt.__boundDepthTexture!==Bt){if(Bt!==null&&Mt.has(Bt)&&(w.width!==Bt.image.width||w.height!==Bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(w)}}let bt=w.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(Z=!0);let Ut=Mt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ut[F])?b=Ut[F][W]:b=Ut[F],Q=!0):w.samples>0&&C.useMultisampledRTT(w)===!1?b=Mt.get(w).__webglMultisampledFramebuffer:Array.isArray(Ut)?b=Ut[W]:b=Ut,R.copy(w.viewport),H.copy(w.scissor),N=w.scissorTest}else R.copy(nt).multiplyScalar(z).floor(),H.copy(wt).multiplyScalar(z).floor(),N=Rt;if(ft.bindFramebuffer(D.FRAMEBUFFER,b)&&B&&ft.drawBuffers(w,b),ft.viewport(R),ft.scissor(H),ft.setScissorTest(N),Q){let lt=Mt.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,lt.__webglTexture,W)}else if(Z){let lt=Mt.get(w.texture),bt=F||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,lt.__webglTexture,W||0,bt)}E=-1},this.readRenderTargetPixels=function(w,F,W,B,b,Q,Z){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ot=Mt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Z!==void 0&&(ot=ot[Z]),ot){ft.bindFramebuffer(D.FRAMEBUFFER,ot);try{let lt=w.texture,bt=lt.format,Ut=lt.type;if(!At.textureFormatReadable(bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!At.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-B&&W>=0&&W<=w.height-b&&D.readPixels(F,W,B,b,Qt.convert(bt),Qt.convert(Ut),Q)}finally{let lt=I!==null?Mt.get(I).__webglFramebuffer:null;ft.bindFramebuffer(D.FRAMEBUFFER,lt)}}},this.readRenderTargetPixelsAsync=async function(w,F,W,B,b,Q,Z){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ot=Mt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Z!==void 0&&(ot=ot[Z]),ot){let lt=w.texture,bt=lt.format,Ut=lt.type;if(!At.textureFormatReadable(bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!At.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=w.width-B&&W>=0&&W<=w.height-b){ft.bindFramebuffer(D.FRAMEBUFFER,ot);let Bt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Bt),D.bufferData(D.PIXEL_PACK_BUFFER,Q.byteLength,D.STREAM_READ),D.readPixels(F,W,B,b,Qt.convert(bt),Qt.convert(Ut),0);let Wt=I!==null?Mt.get(I).__webglFramebuffer:null;ft.bindFramebuffer(D.FRAMEBUFFER,Wt);let Xt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Du(D,Xt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Bt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Q),D.deleteBuffer(Bt),D.deleteSync(Xt),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,F=null,W=0){w.isTexture!==!0&&(ms("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,w=arguments[1]);let B=Math.pow(2,-W),b=Math.floor(w.image.width*B),Q=Math.floor(w.image.height*B),Z=F!==null?F.x:0,ot=F!==null?F.y:0;C.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,Z,ot,b,Q),ft.unbindTexture()},this.copyTextureToTexture=function(w,F,W=null,B=null,b=0){w.isTexture!==!0&&(ms("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,w=arguments[1],F=arguments[2],b=arguments[3]||0,W=null);let Q,Z,ot,lt,bt,Ut,Bt,Wt,Xt,ee=w.isCompressedTexture?w.mipmaps[b]:w.image;W!==null?(Q=W.max.x-W.min.x,Z=W.max.y-W.min.y,ot=W.isBox3?W.max.z-W.min.z:1,lt=W.min.x,bt=W.min.y,Ut=W.isBox3?W.min.z:0):(Q=ee.width,Z=ee.height,ot=ee.depth||1,lt=0,bt=0,Ut=0),B!==null?(Bt=B.x,Wt=B.y,Xt=B.z):(Bt=0,Wt=0,Xt=0);let _e=Qt.convert(F.format),Jt=Qt.convert(F.type),Tt;F.isData3DTexture?(C.setTexture3D(F,0),Tt=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(C.setTexture2DArray(F,0),Tt=D.TEXTURE_2D_ARRAY):(C.setTexture2D(F,0),Tt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);let Be=D.getParameter(D.UNPACK_ROW_LENGTH),Kt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),le=D.getParameter(D.UNPACK_SKIP_PIXELS),Te=D.getParameter(D.UNPACK_SKIP_ROWS),oe=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ee.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ee.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,lt),D.pixelStorei(D.UNPACK_SKIP_ROWS,bt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ut);let fn=w.isDataArrayTexture||w.isData3DTexture,$t=F.isDataArrayTexture||F.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let Ne=Mt.get(w),pn=Mt.get(F),De=Mt.get(Ne.__renderTarget),Me=Mt.get(pn.__renderTarget);ft.bindFramebuffer(D.READ_FRAMEBUFFER,De.__webglFramebuffer),ft.bindFramebuffer(D.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let $e=0;$e<ot;$e++)fn&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Mt.get(w).__webglTexture,b,Ut+$e),w.isDepthTexture?($t&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Mt.get(F).__webglTexture,b,Xt+$e),D.blitFramebuffer(lt,bt,Q,Z,Bt,Wt,Q,Z,D.DEPTH_BUFFER_BIT,D.NEAREST)):$t?D.copyTexSubImage3D(Tt,b,Bt,Wt,Xt+$e,lt,bt,Q,Z):D.copyTexSubImage2D(Tt,b,Bt,Wt,Xt+$e,lt,bt,Q,Z);ft.bindFramebuffer(D.READ_FRAMEBUFFER,null),ft.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else $t?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(Tt,b,Bt,Wt,Xt,Q,Z,ot,_e,Jt,ee.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(Tt,b,Bt,Wt,Xt,Q,Z,ot,_e,ee.data):D.texSubImage3D(Tt,b,Bt,Wt,Xt,Q,Z,ot,_e,Jt,ee):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,b,Bt,Wt,Q,Z,_e,Jt,ee.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,b,Bt,Wt,ee.width,ee.height,_e,ee.data):D.texSubImage2D(D.TEXTURE_2D,b,Bt,Wt,Q,Z,_e,Jt,ee);D.pixelStorei(D.UNPACK_ROW_LENGTH,Be),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Kt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,le),D.pixelStorei(D.UNPACK_SKIP_ROWS,Te),D.pixelStorei(D.UNPACK_SKIP_IMAGES,oe),b===0&&F.generateMipmaps&&D.generateMipmap(Tt),ft.unbindTexture()},this.copyTextureToTexture3D=function(w,F,W=null,B=null,b=0){return w.isTexture!==!0&&(ms("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,B=arguments[1]||null,w=arguments[2],F=arguments[3],b=arguments[4]||0),ms('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,F,W,B,b)},this.initRenderTarget=function(w){Mt.get(w).__webglFramebuffer===void 0&&C.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),ft.unbindTexture()},this.resetState=function(){S=0,T=0,I=null,ft.reset(),jt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}};var Sn=class extends Qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ye,this.environmentIntensity=1,this.environmentRotation=new Ye,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var ji=class extends We{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},ze=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,p=(o-h)/u;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new ht:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new L,s=[],r=[],o=[],a=new L,c=new re;for(let p=0;p<=t;p++){let m=p/t;s[p]=this.getTangentAt(m,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(fe(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,m))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(fe(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],p*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Bs=class extends ze{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ht){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,p=l-this.aY;c=u*h-p*d+this.aX,l=u*d+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ka=class extends Bs{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function xc(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,d){let u=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+d)+(c-a)/d;u*=h,p*=h,s(o,a,u,p)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var or=new L,Uo=new xc,Fo=new xc,No=new xc,za=class extends ze{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(or.subVectors(s[0],s[1]).add(s[0]),l=or);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(or.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=or),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(u),p),A=Math.pow(u.distanceToSquared(h),p);g<1e-4&&(g=1),m<1e-4&&(m=g),A<1e-4&&(A=g),Uo.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,m,g,A),Fo.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,m,g,A),No.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,m,g,A)}else this.curveType==="catmullrom"&&(Uo.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),Fo.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),No.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(Uo.calc(c),Fo.calc(c),No.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function wl(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function bm(i,t){let e=1-i;return e*e*t}function Bm(i,t){return 2*(1-i)*i*t}function Tm(i,t){return i*i*t}function Ms(i,t,e,n){return bm(i,t)+Bm(i,e)+Tm(i,n)}function Dm(i,t){let e=1-i;return e*e*e*t}function Im(i,t){let e=1-i;return 3*e*e*i*t}function Rm(i,t){return 3*(1-i)*i*i*t}function Pm(i,t){return i*i*i*t}function ys(i,t,e,n,s){return Dm(i,t)+Im(i,e)+Rm(i,n)+Pm(i,s)}var Cr=class extends ze{constructor(t=new ht,e=new ht,n=new ht,s=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ht){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ys(t,s.x,r.x,o.x,a.x),ys(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ga=class extends ze{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ys(t,s.x,r.x,o.x,a.x),ys(t,s.y,r.y,o.y,a.y),ys(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},br=class extends ze{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Va=class extends ze{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Br=class extends ze{constructor(t=new ht,e=new ht,n=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ht){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ms(t,s.x,r.x,o.x),Ms(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Tr=class extends ze{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ms(t,s.x,r.x,o.x),Ms(t,s.y,r.y,o.y),Ms(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Dr=class extends ze{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(wl(a,c.x,l.x,h.x,d.x),wl(a,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ht().fromArray(s))}return this}},Ir=Object.freeze({__proto__:null,ArcCurve:ka,CatmullRomCurve3:za,CubicBezierCurve:Cr,CubicBezierCurve3:Ga,EllipseCurve:Bs,LineCurve:br,LineCurve3:Va,QuadraticBezierCurve:Br,QuadraticBezierCurve3:Tr,SplineCurve:Dr}),Ha=class extends ze{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ir[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Ir[s.type]().fromJSON(s))}return this}},Rr=class extends Ha{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new br(this.currentPoint.clone(),new ht(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Br(this.currentPoint.clone(),new ht(t,e),new ht(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Cr(this.currentPoint.clone(),new ht(t,e),new ht(n,s),new ht(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Dr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new Bs(t,e,n,s,r,o,a,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Pr=class i extends Se{constructor(t=[new ht(0,-.5),new ht(.5,0),new ht(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=fe(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/e,d=new L,u=new ht,p=new L,m=new L,g=new L,A=0,f=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:A=t[_+1].x-t[_].x,f=t[_+1].y-t[_].y,p.x=f*1,p.y=-A,p.z=f*0,g.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case t.length-1:c.push(g.x,g.y,g.z);break;default:A=t[_+1].x-t[_].x,f=t[_+1].y-t[_].y,p.x=f*1,p.y=-A,p.z=f*0,m.copy(p),p.x+=g.x,p.y+=g.y,p.z+=g.z,p.normalize(),c.push(p.x,p.y,p.z),g.copy(m)}for(let _=0;_<=e;_++){let M=n+_*h*s,x=Math.sin(M),P=Math.cos(M);for(let S=0;S<=t.length-1;S++){d.x=t[S].x*x,d.y=t[S].y,d.z=t[S].x*P,o.push(d.x,d.y,d.z),u.x=_/e,u.y=S/(t.length-1),a.push(u.x,u.y);let T=c[3*S+0]*x,I=c[3*S+1],E=c[3*S+0]*P;l.push(T,I,E)}}for(let _=0;_<e;_++)for(let M=0;M<t.length-1;M++){let x=M+_*t.length,P=x,S=x+t.length,T=x+t.length+1,I=x+1;r.push(P,S,I),r.push(T,I,S)}this.setIndex(r),this.setAttribute("position",new te(o,3)),this.setAttribute("uv",new te(a,2)),this.setAttribute("normal",new te(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var $i=class extends Rr{constructor(t){super(t),this.uuid=fi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Rr().fromJSON(s))}return this}},Lm={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=ql(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,d,u,p;if(n&&(r=Qm(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let m=e;m<s;m+=e)d=i[m],u=i[m+1],d<a&&(a=d),u<c&&(c=u),d>l&&(l=d),u>h&&(h=u);p=Math.max(l-a,h-c),p=p!==0?32767/p:0}return Ts(r,o,e,a,c,p,0),o}};function ql(i,t,e,n,s){let r,o;if(s===qm(i,t,e,n)>0)for(r=t;r<e;r+=n)o=El(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=El(r,i[r],i[r+1],o);return o&&Kr(o,o.next)&&(Is(o),o=o.next),o}function li(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Kr(e,e.next)||ce(e.prev,e,e.next)===0)){if(Is(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ts(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Hm(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?Fm(i,n,s,r):Um(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Is(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Nm(li(i),t,e),Ts(i,t,e,n,s,r,2)):o===2&&Om(i,t,e,n,s,r):Ts(li(i),t,e,n,s,r,1);break}}}function Um(i){let t=i.prev,e=i,n=i.next;if(ce(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,d=a<c?a<l?a:l:c<l?c:l,u=s>r?s>o?s:o:r>o?r:o,p=a>c?a>l?a:l:c>l?c:l,m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=u&&m.y>=d&&m.y<=p&&Qi(s,a,r,c,o,l,m.x,m.y)&&ce(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Fm(i,t,e,n){let s=i.prev,r=i,o=i.next;if(ce(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,d=r.y,u=o.y,p=a<c?a<l?a:l:c<l?c:l,m=h<d?h<u?h:u:d<u?d:u,g=a>c?a>l?a:l:c>l?c:l,A=h>d?h>u?h:u:d>u?d:u,f=Wa(p,m,t,e,n),_=Wa(g,A,t,e,n),M=i.prevZ,x=i.nextZ;for(;M&&M.z>=f&&x&&x.z<=_;){if(M.x>=p&&M.x<=g&&M.y>=m&&M.y<=A&&M!==s&&M!==o&&Qi(a,h,c,d,l,u,M.x,M.y)&&ce(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=p&&x.x<=g&&x.y>=m&&x.y<=A&&x!==s&&x!==o&&Qi(a,h,c,d,l,u,x.x,x.y)&&ce(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=f;){if(M.x>=p&&M.x<=g&&M.y>=m&&M.y<=A&&M!==s&&M!==o&&Qi(a,h,c,d,l,u,M.x,M.y)&&ce(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=_;){if(x.x>=p&&x.x<=g&&x.y>=m&&x.y<=A&&x!==s&&x!==o&&Qi(a,h,c,d,l,u,x.x,x.y)&&ce(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Nm(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Kr(s,r)&&Zl(s,n,n.next,r)&&Ds(s,r)&&Ds(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Is(n),Is(n.next),n=i=r),n=n.next}while(n!==i);return li(n)}function Om(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Xm(o,a)){let c=jl(o,a);o=li(o,o.next),c=li(c,c.next),Ts(o,t,e,n,s,r,0),Ts(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Qm(i,t,e,n){let s=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=ql(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(Ym(l));for(s.sort(km),r=0;r<s.length;r++)e=zm(s[r],e);return e}function km(i,t){return i.x-t.x}function zm(i,t){let e=Gm(i,t);if(!e)return t;let n=jl(e,i);return li(n,n.next),li(e,e.next)}function Gm(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>n&&(n=u,s=e.x<e.next.x?e:e.next,u===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,d;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Qi(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(r-e.x),Ds(e,i)&&(d<h||d===h&&(e.x>s.x||e.x===s.x&&Vm(s,e)))&&(s=e,h=d)),e=e.next;while(e!==a);return s}function Vm(i,t){return ce(i.prev,i,t.prev)<0&&ce(t.next,i,i.next)<0}function Hm(i,t,e,n){let s=i;do s.z===0&&(s.z=Wa(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Wm(s)}function Wm(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function Wa(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Ym(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Qi(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Xm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Jm(i,t)&&(Ds(i,t)&&Ds(t,i)&&Km(i,t)&&(ce(i.prev,i,t.prev)||ce(i,t.prev,t))||Kr(i,t)&&ce(i.prev,i,i.next)>0&&ce(t.prev,t,t.next)>0)}function ce(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Kr(i,t){return i.x===t.x&&i.y===t.y}function Zl(i,t,e,n){let s=cr(ce(i,t,e)),r=cr(ce(i,t,n)),o=cr(ce(e,n,i)),a=cr(ce(e,n,t));return!!(s!==r&&o!==a||s===0&&ar(i,e,t)||r===0&&ar(i,n,t)||o===0&&ar(e,i,n)||a===0&&ar(e,t,n))}function ar(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function cr(i){return i>0?1:i<0?-1:0}function Jm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Zl(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ds(i,t){return ce(i.prev,i,i.next)<0?ce(i,t,i.next)>=0&&ce(i,i.prev,t)>=0:ce(i,t,i.prev)<0||ce(i,i.next,t)<0}function Km(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function jl(i,t){let e=new Ya(i.i,i.x,i.y),n=new Ya(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function El(i,t,e,n){let s=new Ya(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Is(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ya(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function qm(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var On=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Sl(t),Cl(n,t);let o=t.length;e.forEach(Sl);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Cl(n,e[c]);let a=Lm.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Sl(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Cl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Lr=class i extends Se{constructor(t=new $i([new ht(.5,.5),new ht(-.5,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new te(s,3)),this.setAttribute("uv",new te(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:p-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,A=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:Zm,M,x=!1,P,S,T,I;f&&(M=f.getSpacedPoints(h),x=!0,u=!1,P=f.computeFrenetFrames(h,!1),S=new L,T=new L,I=new L),u||(A=0,p=0,m=0,g=0);let E=a.extractPoints(l),y=E.shape,R=E.holes;if(!On.isClockWise(y)){y=y.reverse();for(let $=0,ct=R.length;$<ct;$++){let D=R[$];On.isClockWise(D)&&(R[$]=D.reverse())}}let N=On.triangulateShape(y,R),G=y;for(let $=0,ct=R.length;$<ct;$++){let D=R[$];y=y.concat(D)}function J($,ct,D){return ct||console.error("THREE.ExtrudeGeometry: vec does not exist"),$.clone().addScaledVector(ct,D)}let V=y.length,q=N.length;function z($,ct,D){let dt,st,At,ft=$.x-ct.x,Pt=$.y-ct.y,Mt=D.x-$.x,C=D.y-$.y,v=ft*ft+Pt*Pt,O=ft*C-Pt*Mt;if(Math.abs(O)>Number.EPSILON){let K=Math.sqrt(v),tt=Math.sqrt(Mt*Mt+C*C),X=ct.x-Pt/K,Ct=ct.y+ft/K,pt=D.x-C/tt,yt=D.y+Mt/tt,Vt=((pt-X)*C-(yt-Ct)*Mt)/(ft*C-Pt*Mt);dt=X+ft*Vt-$.x,st=Ct+Pt*Vt-$.y;let at=dt*dt+st*st;if(at<=2)return new ht(dt,st);At=Math.sqrt(at/2)}else{let K=!1;ft>Number.EPSILON?Mt>Number.EPSILON&&(K=!0):ft<-Number.EPSILON?Mt<-Number.EPSILON&&(K=!0):Math.sign(Pt)===Math.sign(C)&&(K=!0),K?(dt=-Pt,st=ft,At=Math.sqrt(v)):(dt=ft,st=Pt,At=Math.sqrt(v/2))}return new ht(dt/At,st/At)}let it=[];for(let $=0,ct=G.length,D=ct-1,dt=$+1;$<ct;$++,D++,dt++)D===ct&&(D=0),dt===ct&&(dt=0),it[$]=z(G[$],G[D],G[dt]);let ut=[],nt,wt=it.concat();for(let $=0,ct=R.length;$<ct;$++){let D=R[$];nt=[];for(let dt=0,st=D.length,At=st-1,ft=dt+1;dt<st;dt++,At++,ft++)At===st&&(At=0),ft===st&&(ft=0),nt[dt]=z(D[dt],D[At],D[ft]);ut.push(nt),wt=wt.concat(nt)}for(let $=0;$<A;$++){let ct=$/A,D=p*Math.cos(ct*Math.PI/2),dt=m*Math.sin(ct*Math.PI/2)+g;for(let st=0,At=G.length;st<At;st++){let ft=J(G[st],it[st],dt);et(ft.x,ft.y,-D)}for(let st=0,At=R.length;st<At;st++){let ft=R[st];nt=ut[st];for(let Pt=0,Mt=ft.length;Pt<Mt;Pt++){let C=J(ft[Pt],nt[Pt],dt);et(C.x,C.y,-D)}}}let Rt=m+g;for(let $=0;$<V;$++){let ct=u?J(y[$],wt[$],Rt):y[$];x?(T.copy(P.normals[0]).multiplyScalar(ct.x),S.copy(P.binormals[0]).multiplyScalar(ct.y),I.copy(M[0]).add(T).add(S),et(I.x,I.y,I.z)):et(ct.x,ct.y,0)}for(let $=1;$<=h;$++)for(let ct=0;ct<V;ct++){let D=u?J(y[ct],wt[ct],Rt):y[ct];x?(T.copy(P.normals[$]).multiplyScalar(D.x),S.copy(P.binormals[$]).multiplyScalar(D.y),I.copy(M[$]).add(T).add(S),et(I.x,I.y,I.z)):et(D.x,D.y,d/h*$)}for(let $=A-1;$>=0;$--){let ct=$/A,D=p*Math.cos(ct*Math.PI/2),dt=m*Math.sin(ct*Math.PI/2)+g;for(let st=0,At=G.length;st<At;st++){let ft=J(G[st],it[st],dt);et(ft.x,ft.y,d+D)}for(let st=0,At=R.length;st<At;st++){let ft=R[st];nt=ut[st];for(let Pt=0,Mt=ft.length;Pt<Mt;Pt++){let C=J(ft[Pt],nt[Pt],dt);x?et(C.x,C.y+M[h-1].y,M[h-1].x+D):et(C.x,C.y,d+D)}}}k(),rt();function k(){let $=s.length/3;if(u){let ct=0,D=V*ct;for(let dt=0;dt<q;dt++){let st=N[dt];Dt(st[2]+D,st[1]+D,st[0]+D)}ct=h+A*2,D=V*ct;for(let dt=0;dt<q;dt++){let st=N[dt];Dt(st[0]+D,st[1]+D,st[2]+D)}}else{for(let ct=0;ct<q;ct++){let D=N[ct];Dt(D[2],D[1],D[0])}for(let ct=0;ct<q;ct++){let D=N[ct];Dt(D[0]+V*h,D[1]+V*h,D[2]+V*h)}}n.addGroup($,s.length/3-$,0)}function rt(){let $=s.length/3,ct=0;gt(G,ct),ct+=G.length;for(let D=0,dt=R.length;D<dt;D++){let st=R[D];gt(st,ct),ct+=st.length}n.addGroup($,s.length/3-$,1)}function gt($,ct){let D=$.length;for(;--D>=0;){let dt=D,st=D-1;st<0&&(st=$.length-1);for(let At=0,ft=h+A*2;At<ft;At++){let Pt=V*At,Mt=V*(At+1),C=ct+dt+Pt,v=ct+st+Pt,O=ct+st+Mt,K=ct+dt+Mt;Nt(C,v,O,K)}}}function et($,ct,D){c.push($),c.push(ct),c.push(D)}function Dt($,ct,D){Lt($),Lt(ct),Lt(D);let dt=s.length/3,st=_.generateTopUV(n,s,dt-3,dt-2,dt-1);Yt(st[0]),Yt(st[1]),Yt(st[2])}function Nt($,ct,D,dt){Lt($),Lt(ct),Lt(dt),Lt(ct),Lt(D),Lt(dt);let st=s.length/3,At=_.generateSideWallUV(n,s,st-6,st-3,st-2,st-1);Yt(At[0]),Yt(At[1]),Yt(At[3]),Yt(At[1]),Yt(At[2]),Yt(At[3])}function Lt($){s.push(c[$*3+0]),s.push(c[$*3+1]),s.push(c[$*3+2])}function Yt($){r.push($.x),r.push($.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return jm(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ir[s.type]().fromJSON(s)),new i(n,t.options)}},Zm={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new ht(r,o),new ht(a,c),new ht(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[s*3],p=t[s*3+1],m=t[s*3+2],g=t[r*3],A=t[r*3+1],f=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ht(o,1-c),new ht(l,1-d),new ht(u,1-m),new ht(g,1-f)]:[new ht(a,1-c),new ht(h,1-d),new ht(p,1-m),new ht(A,1-f)]}};function jm(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ur=class i extends Se{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],d=t,u=(e-t)/s,p=new L,m=new ht;for(let g=0;g<=s;g++){for(let A=0;A<=n;A++){let f=r+A/n*o;p.x=d*Math.cos(f),p.y=d*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),m.x=(p.x/e+1)/2,m.y=(p.y/e+1)/2,h.push(m.x,m.y)}d+=u}for(let g=0;g<s;g++){let A=g*(n+1);for(let f=0;f<n;f++){let _=f+A,M=_,x=_+n+1,P=_+n+2,S=_+1;a.push(M,x,S),a.push(x,P,S)}}this.setIndex(a),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(l,3)),this.setAttribute("uv",new te(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Fr=class i extends Se{constructor(t=new $i([new ht(0,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new te(s,3)),this.setAttribute("normal",new te(r,3)),this.setAttribute("uv",new te(o,2));function l(h){let d=s.length/3,u=h.extractPoints(e),p=u.shape,m=u.holes;On.isClockWise(p)===!1&&(p=p.reverse());for(let A=0,f=m.length;A<f;A++){let _=m[A];On.isClockWise(_)===!0&&(m[A]=_.reverse())}let g=On.triangulateShape(p,m);for(let A=0,f=m.length;A<f;A++){let _=m[A];p=p.concat(_)}for(let A=0,f=p.length;A<f;A++){let _=p[A];s.push(_.x,_.y,0),r.push(0,0,1),o.push(_.x,_.y)}for(let A=0,f=g.length;A<f;A++){let _=g[A],M=_[0]+d,x=_[1]+d,P=_[2]+d;n.push(M,x,P),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return $m(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function $m(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Nr=class i extends Se{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],d=new L,u=new L,p=[],m=[],g=[],A=[];for(let f=0;f<=n;f++){let _=[],M=f/n,x=0;f===0&&o===0?x=.5/e:f===n&&c===Math.PI&&(x=-.5/e);for(let P=0;P<=e;P++){let S=P/e;d.x=-t*Math.cos(s+S*r)*Math.sin(o+M*a),d.y=t*Math.cos(o+M*a),d.z=t*Math.sin(s+S*r)*Math.sin(o+M*a),m.push(d.x,d.y,d.z),u.copy(d).normalize(),g.push(u.x,u.y,u.z),A.push(S+x,1-M),_.push(l++)}h.push(_)}for(let f=0;f<n;f++)for(let _=0;_<e;_++){let M=h[f][_+1],x=h[f][_],P=h[f+1][_],S=h[f+1][_+1];(f!==0||o>0)&&p.push(M,x,S),(f!==n-1||c<Math.PI)&&p.push(x,P,S)}this.setIndex(p),this.setAttribute("position",new te(m,3)),this.setAttribute("normal",new te(g,3)),this.setAttribute("uv",new te(A,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Or=class i extends Se{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new L,d=new L,u=new L;for(let p=0;p<=n;p++)for(let m=0;m<=s;m++){let g=m/s*r,A=p/n*Math.PI*2;d.x=(t+e*Math.cos(A))*Math.cos(g),d.y=(t+e*Math.cos(A))*Math.sin(g),d.z=e*Math.sin(A),a.push(d.x,d.y,d.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(m/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let m=1;m<=s;m++){let g=(s+1)*p+m-1,A=(s+1)*(p-1)+m-1,f=(s+1)*(p-1)+m,_=(s+1)*p+m;o.push(g,A,_),o.push(A,f,_)}this.setIndex(o),this.setAttribute("position",new te(a,3)),this.setAttribute("normal",new te(c,3)),this.setAttribute("uv",new te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Qr=class i extends Se{constructor(t=new Tr(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new L,c=new L,l=new ht,h=new L,d=[],u=[],p=[],m=[];g(),this.setIndex(m),this.setAttribute("position",new te(d,3)),this.setAttribute("normal",new te(u,3)),this.setAttribute("uv",new te(p,2));function g(){for(let M=0;M<e;M++)A(M);A(r===!1?e:0),_(),f()}function A(M){h=t.getPointAt(M/e,h);let x=o.normals[M],P=o.binormals[M];for(let S=0;S<=s;S++){let T=S/s*Math.PI*2,I=Math.sin(T),E=-Math.cos(T);c.x=E*x.x+I*P.x,c.y=E*x.y+I*P.y,c.z=E*x.z+I*P.z,c.normalize(),u.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,d.push(a.x,a.y,a.z)}}function f(){for(let M=1;M<=e;M++)for(let x=1;x<=s;x++){let P=(s+1)*(M-1)+(x-1),S=(s+1)*M+(x-1),T=(s+1)*M+x,I=(s+1)*(M-1)+x;m.push(P,S,I),m.push(S,T,I)}}function _(){for(let M=0;M<=e;M++)for(let x=0;x<=s;x++)l.x=M/e,l.y=x/s,p.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Ir[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Rs=class extends zn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ac,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ye,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},kr=class extends Rs{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ht(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return fe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Gt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Gt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Gt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var zr=class extends zn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ac,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ye,this.combine=cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function lr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function tg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ts=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Xa=class extends ts{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cc,endingEnd:Cc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case bc:r=t,a=2*e-n;break;case Bc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case bc:o=t,c=2*n-e;break;case Bc:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,m=(n-e)/(s-e),g=m*m,A=g*m,f=-u*A+2*u*g-u*m,_=(1+u)*A+(-1.5-2*u)*g+(-.5+u)*m+1,M=(-1-p)*A+(1.5+p)*g+.5*m,x=p*A-p*g;for(let P=0;P!==a;++P)r[P]=f*o[h+P]+_*o[l+P]+M*o[c+P]+x*o[d+P];return r}},Ja=class extends ts{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[l+u]*d+o[c+u]*h;return r}},Ka=class extends ts{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ln=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=lr(e,this.TimeBufferType),this.values=lr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:lr(t.times,Array),values:lr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ka(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ja(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Xa(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ar:e=this.InterpolantFactoryMethodDiscrete;break;case wa:e=this.InterpolantFactoryMethodLinear;break;case ao:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ar;case this.InterpolantFactoryMethodLinear:return wa;case this.InterpolantFactoryMethodSmooth:return ao}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&tg(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ao,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let d=a*n,u=d-n,p=d+n;for(let m=0;m!==n;++m){let g=e[d+m];if(g!==e[u+m]||g!==e[p+m]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let p=0;p!==n;++p)e[u+p]=e[d+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};ln.prototype.TimeBufferType=Float32Array;ln.prototype.ValueBufferType=Float32Array;ln.prototype.DefaultInterpolation=wa;var hi=class extends ln{constructor(t,e,n){super(t,e,n)}};hi.prototype.ValueTypeName="bool";hi.prototype.ValueBufferType=Array;hi.prototype.DefaultInterpolation=Ar;hi.prototype.InterpolantFactoryMethodLinear=void 0;hi.prototype.InterpolantFactoryMethodSmooth=void 0;var qa=class extends ln{};qa.prototype.ValueTypeName="color";var Za=class extends ln{};Za.prototype.ValueTypeName="number";var ja=class extends ts{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)Le.slerpFlat(r,0,o,l-a,o,l,c);return r}},Gr=class extends ln{InterpolantFactoryMethodLinear(t){return new ja(this.times,this.values,this.getValueSize(),t)}};Gr.prototype.ValueTypeName="quaternion";Gr.prototype.InterpolantFactoryMethodSmooth=void 0;var ui=class extends ln{constructor(t,e,n){super(t,e,n)}};ui.prototype.ValueTypeName="string";ui.prototype.ValueBufferType=Array;ui.prototype.DefaultInterpolation=Ar;ui.prototype.InterpolantFactoryMethodLinear=void 0;ui.prototype.InterpolantFactoryMethodSmooth=void 0;var $a=class extends ln{};$a.prototype.ValueTypeName="vector";var tc=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let p=l[d],m=l[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null}}},eg=new tc,ec=class{constructor(t){this.manager=t!==void 0?t:eg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};ec.DEFAULT_MATERIAL_NAME="__DEFAULT";var Vr=class extends Qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}};var Oo=new re,bl=new L,Bl=new L,nc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bs,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;bl.setFromMatrixPosition(t.matrixWorld),e.position.copy(bl),Bl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Bl),e.updateMatrixWorld(),Oo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Oo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var ic=class extends nc{constructor(){super(new Vn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Hr=class extends Vr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.target=new Qe,this.shadow=new ic}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Wr=class extends Vr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var vc="\\[\\]\\.:\\/",ng=new RegExp("["+vc+"]","g"),_c="[^"+vc+"]",ig="[^"+vc.replace("\\.","")+"]",sg=/((?:WC+[\/:])*)/.source.replace("WC",_c),rg=/(WCOD+)?/.source.replace("WCOD",ig),og=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_c),ag=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_c),cg=new RegExp("^"+sg+rg+og+ag+"$"),lg=["material","materials","bones","map"],sc=class{constructor(t,e,n){let s=n||ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ae=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ng,"")}static parseTrackName(t){let e=cg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);lg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ae.Composite=sc;ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ae.prototype.GetterByBindingType=[ae.prototype._getValue_direct,ae.prototype._getValue_array,ae.prototype._getValue_arrayElement,ae.prototype._getValue_toArray];ae.prototype.SetterByBindingTypeAndVersioning=[[ae.prototype._setValue_direct,ae.prototype._setValue_direct_setNeedsUpdate,ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_array,ae.prototype._setValue_array_setNeedsUpdate,ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_arrayElement,ae.prototype._setValue_arrayElement_setNeedsUpdate,ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_fromArray,ae.prototype._setValue_fromArray_setNeedsUpdate,ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Bg=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rc);function Zr(i){let t=i>>>0||1;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function qr(i,t,e){let n=Math.imul(i|0,374761393)+Math.imul(t|0,668265263)+Math.imul(e|0,2147483647)|0;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}var $l=i=>i*i*(3-2*i);function Ai(i,t,e=0){let n=Math.floor(i),s=Math.floor(t),r=i-n,o=t-s,a=qr(n,s,e),c=qr(n+1,s,e),l=qr(n,s+1,e),h=qr(n+1,s+1,e),d=$l(r),u=$l(o);return(a+(c-a)*d+(l-a)*u+(a-c-l+h)*d*u)*2-1}function Ls(i,t,e=4,n=0){let s=0,r=1,o=.5,a=0;for(let c=0;c<e;c++)s+=o*Ai(i*r,t*r,n+c*17),a+=o,r*=2.03,o*=.5;return s/a}var Ce=(i,t,e)=>Math.max(t,Math.min(e,i)),is=(i,t,e)=>{let n=Ce((e-i)/(t-i),0,1);return n*n*(3-2*n)};var mi={l:i=>i,io:i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,o:i=>1-Math.pow(1-i,3),i:i=>i*i*i,o5:i=>1-Math.pow(1-i,5),back:i=>1+(1.5+1)*Math.pow(i-1,3)+1.5*Math.pow(i-1,2)},ss=["M52 0h22v30h-22z","M52 200h22v30h-22z","M0 141V38A10 10 0 0 1 10 28H116A10 10 0 0 1 126 38V62L68 121L46 101Z","M0 169L45 129L68 150L126 90V192A10 10 0 0 1 116 202H10A10 10 0 0 1 0 192Z"];function Xe(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,e}var ge={W:2,H:3.06,CB:.075,CT:.083,A:.25,SEAL:.0055,LOGO_V:.514,LOGO_H:.262};function th(i){let{W:t,H:e,CB:n,CT:s,A:r,SEAL:o}=ge,a=Zr(i),c=[],l=(A,f,_,M,x,P)=>c.push({x0:(A-.5)*t,y0:(f-.5)*e,dx:Math.cos(_),dy:Math.sin(_),len:M,amp:x,wid:P});for(let A=0;A<15;A++){let f=.06+a()*.88;l(f,1-s,-Math.PI/2+(f-.5)*1.4+(a()-.5)*.5,.25+a()*.55,(a()<.5?-1:1)*(.008+a()*.016),.03+a()*.05)}for(let A=0;A<13;A++){let f=.06+a()*.88;l(f,n,Math.PI/2-(f-.5)*1.3+(a()-.5)*.5,.22+a()*.5,(a()<.5?-1:1)*(.008+a()*.015),.03+a()*.05)}[[.04,1-s,-.9],[.96,1-s,-2.24],[.04,n,.85],[.96,n,2.3]].forEach(([A,f,_])=>{l(A,f,_+(a()-.5)*.2,.7+a()*.5,-.02,.07),l(A+(A<.5?.05:-.05),f,_+(A<.5?.25:-.25),.45,.014,.05)});for(let A=0;A<8;A++){let f=A%2===0;l(f?.015:.985,n+.08+a()*(1-n-s-.16),(f?0:Math.PI)+(a()-.5)*1.2,.18+a()*.25,(a()<.5?-1:1)*.012,.035)}let h=a()*10,d=A=>(A-n)/(1-s-n),u=A=>Math.pow(Math.max(0,1-Math.pow(Math.abs(2*A-1),2.3)),.52),p=A=>Math.pow(Math.max(0,1-Math.pow(Math.abs(2*A-1),5.5)),.4);function m(A,f,_){if(f<=n||f>=1-s)return 0;let M=d(f),x=u(A),P=p(M),S=r*x*P,T=(A-.5)*t,I=(f-.5)*e,E=Math.exp(-(1-s-f)/.03),y=Math.exp(-(f-n)/.027),R=Math.sin(2*Math.PI*(A*8.5+.22*Math.sin(A*6.3+h)))*.7+Math.sin(2*Math.PI*(A*3.2+h))*.3;if(S+=.03*(E+y)*R*Math.min(1,x*1.4),!_)for(let N=0;N<c.length;N++){let G=c[N],J=T-G.x0,V=I-G.y0,q=J*G.dx+V*G.dy,z=Ce(q,0,G.len),it=J-G.dx*z,ut=V-G.dy*z,nt=it*it+ut*ut,wt=G.wid*G.wid;if(nt>wt*9)continue;let Rt=Math.pow(1-z/G.len,1.4);S+=G.amp*Rt*Math.exp(-nt/wt)*Math.min(1,x*2)*Math.min(1,P*3)}let H=Math.exp(-Math.min(A,1-A)/.05);return S+=.01*H*Math.sin(f*Math.PI*9+h+(_?1.3:0))*P,S*=1+.1*Ls(A*2+(_?7:0),f*2.4,2,i),S+=.018*Math.sin(A*5.2+f*3.1+h)*Math.sin(f*4.4-A*1.7)*x*P,S}function g(A,f,_){let M=Ce(d(f),0,1),x=f>n&&f<1-s,S=1-.05*(x?Math.exp(-(f-n)/.07)+Math.exp(-(1-s-f)/.07):0)*Math.pow(Math.abs(2*A-1),3)-(x?.006:0),T=(A-.5)*t*S,I=(f-.5)*e,E=Math.min(1,Math.min(A,1-A)/.006),y=_*(o*E+m(A,f,_<0));return[T,I,y]}return{P:g,pu:u,ps:p,bodyS:d}}function gi(i){let{CT:t}=ge,e=n=>Math.abs((n%1+1)%1-.5)*2;return 1-t-.018+.006*(e(i*31)-.5)+.003*Ai(i*40,3.7)}function rs(i,t,e,n,s,r,o,a){let c=new Float32Array((n+1)*(s+1)*3),l=new Float32Array(c.length),h=new Float32Array((n+1)*(s+1)*2),d=new Float32Array((n+1)*(s+1)),u=1e-4,p=0;for(let A=0;A<=s;A++)for(let f=0;f<=n;f++){let _=f/n,M=r(_),x=o(_),P=M+(x-M)*(A/s),S=t.P(_,P,e),T=t.P(Math.min(1,_+u),P,e),I=t.P(Math.max(0,_-u),P,e),E=t.P(_,Math.min(1,P+u),e),y=t.P(_,Math.max(0,P-u),e),R=T[0]-I[0],H=T[1]-I[1],N=T[2]-I[2],G=E[0]-y[0],J=E[1]-y[1],V=E[2]-y[2],q=H*V-N*J,z=N*G-R*V,it=R*J-H*G,ut=Math.hypot(q,z,it)||1;q/=ut,z/=ut,it/=ut,e<0&&(q=-q,z=-z,it=-it),c.set(S,p*3),l.set([q,z,it],p*3),h[p*2]=e>0?_:1-_,h[p*2+1]=P,d[p]=a?e*a(_,P):0,p++}let m=[];for(let A=0;A<s;A++)for(let f=0;f<n;f++){let _=A*(n+1)+f,M=_+1,x=_+n+1,P=x+1;e>0?m.push(_,M,P,_,P,x):m.push(_,P,M,_,x,P)}let g=new i.BufferGeometry;return g.setAttribute("position",new i.BufferAttribute(c,3)),g.setAttribute("normal",new i.BufferAttribute(l,3)),g.setAttribute("uv",new i.BufferAttribute(h,2)),g.setAttribute("aMouth",new i.BufferAttribute(d,1)),g.setIndex(m),g}function hg(i,t,e){let{CB:n,CT:s}=ge,r=new Float32Array(i*t);for(let o=0;o<t;o++){let a=1-(o+.5)/t;for(let c=0;c<i;c++){let l=(c+.5)/i,h;if(a<n||a>1-s){let d=Math.pow(.5+.5*Math.cos(l*Math.PI*2*24),1.6),u=a<n?n-a:a-(1-s),p=a<n?a:1-a;h=.3*d*(.85+.15*Ai(l*6,a*9,e))-.2*Math.exp(-u/.006)-.12*Math.exp(-p/.005)}else{let d=1+1.8*(Math.exp(-(a-n)/.12)+Math.exp(-(1-s-a)/.12)),u=1-Math.abs(Ai(l*14,a*22/d,e+5)),p=1-Math.abs(Ai(l*37+3.1,a*55/d,e+9));h=.012*u*u+.006*p*p+.018*Ai(l*4.5,a*6.5/d,e+13)}r[o*i+c]=h}}return r}function ug(i,t,e,n){let s=Xe(t,e),r=s.getContext("2d"),o=r.createImageData(t,e),a=o.data;for(let c=0;c<e;c++)for(let l=0;l<t;l++){let h=i[c*t+Math.max(0,l-1)],d=i[c*t+Math.min(t-1,l+1)],u=i[Math.max(0,c-1)*t+l],p=i[Math.min(e-1,c+1)*t+l],m=(h-d)*n,g=(p-u)*n,A=1,f=Math.hypot(m,g,A);m/=f,g/=f,A/=f;let _=(c*t+l)*4;a[_]=(m*.5+.5)*255,a[_+1]=(g*.5+.5)*255,a[_+2]=(A*.5+.5)*255,a[_+3]=255}return r.putImageData(o,0,0),s}function jr(i,t,e,n){let s=n/230;i.save(),i.translate(t-63*s,e-115*s),i.scale(s,s),ss.forEach(r=>i.fill(new Path2D(r))),i.restore()}function dg(i,t,e){let{LOGO_V:n,LOGO_H:s,CB:r,CT:o}=ge,a=i/2,c=(1-n)*t,l=s*t,h=u=>{let p=Xe(i,t);return u(p.getContext("2d")),p},d=(u,p)=>{u.fillStyle=p,u.fillRect(0,0,i,o*t),u.fillRect(0,(1-r)*t,i,r*t)};return{color:h(u=>{u.fillStyle=e,u.fillRect(0,0,i,t),u.fillStyle="#a6f357",jr(u,a,c,l)}),orm:h(u=>{u.fillStyle="rgb(0,56,255)",u.fillRect(0,0,i,t),d(u,"rgb(0,84,255)"),u.fillStyle="rgb(0,215,0)",jr(u,a,c,l)}),emissive:h(u=>{u.fillStyle="#505050",u.fillRect(0,0,i,t),d(u,"#7a7a7a"),u.fillStyle="#fff",jr(u,a,c,l)}),coat:h(u=>{u.fillStyle="rgb(200,0,0)",u.fillRect(0,0,i,t),d(u,"rgb(255,0,0)"),u.fillStyle="rgb(18,0,0)",jr(u,a,c,l)})}}function Cn(i,t={}){let e={uHoloAmt:{value:t.amt??.1},uHoloShift:{value:0},uMouth:{value:0},uHoloBase:{value:t.base??0}};return i.userData.holo=e,i.onBeforeCompile=n=>{Object.assign(n.uniforms,e),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float aMouth;
uniform float uMouth;
varying vec2 vHUv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
`+(t.mouth?`transformed.z += uMouth * aMouth;
`:"")+"vHUv = uv;"),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
uniform float uHoloAmt;
uniform float uHoloShift;
uniform float uHoloBase;
varying vec2 vHUv;`).replace("#include <opaque_fragment>",["{","  vec3 vdir = normalize(vViewPosition);","  float ndv = clamp(abs(dot(normal, vdir)), 0.0, 1.0);","  float ph = uHoloShift + normal.x * 1.7 - normal.y * 1.2 + vHUv.x * 2.6 + vHUv.y * 3.4;","  vec3 spec = 0.5 + 0.5 * cos(6.28318 * (ph + vec3(0.0, 0.33, 0.67)));","  float lum = dot(outgoingLight, vec3(0.299, 0.587, 0.114));","  float m = uHoloAmt * (0.3 + 0.7 * pow(1.0 - ndv, 1.6)) * (0.2 + smoothstep(0.04, 0.7, lum)) * max(metalnessFactor, uHoloBase);","  outgoingLight += spec * m;","}","#include <opaque_fragment>"].join(`
`))},i.customProgramCacheKey=()=>"holo"+(t.mouth?"m":""),e}function eh(i,t=.3){let e=th(7),n=Math.round(110*t),s=Math.round(170*t),r=()=>0,o=()=>1;return[rs(i,e,1,n,s,r,o,null),rs(i,e,-1,n,s,r,o,null)]}function os(i,t={}){let{W:e,H:n}=ge,s=t.quality??1,r=th(t.seed??7),o=Math.round(110*s),a=Math.round(170*s),c=Math.round(18*s),l=(nt,wt)=>{let Rt=gi(nt),k=Ce((wt-(Rt-.26))/.26,0,1);return .15*Math.pow(r.pu(nt),.8)*k*k},h=rs(i,r,1,o,a,()=>0,gi,l),d=rs(i,r,-1,o,a,()=>0,gi,l),u=rs(i,r,1,o,c,gi,()=>1,null),p=rs(i,r,-1,o,c,gi,()=>1,null),m=Math.round(384*s),g=Math.round(576*s),A=new i.CanvasTexture(ug(hg(m,g,5),m,g,2.8));A.anisotropy=8;let f=dg(512,768,t.metal||"#b4f25e"),_=(nt,wt)=>{let Rt=new i.CanvasTexture(nt);return wt&&(Rt.colorSpace=i.SRGBColorSpace),Rt.anisotropy=4,Rt},M=_(f.color,!0),x=_(f.orm),P=_(f.emissive,!0),S=_(f.coat),T=nt=>{let wt=new i.MeshPhysicalMaterial({color:16777215,map:nt?M:null,metalness:1,roughness:1,roughnessMap:x,metalnessMap:x,normalMap:A,normalScale:new i.Vector2(.85,.85),clearcoat:1,clearcoatRoughness:.07,clearcoatMap:S,iridescence:.32,iridescenceIOR:1.3,iridescenceThicknessRange:[320,520],iridescenceMap:S,emissive:new i.Color("#a6f357"),emissiveMap:nt?P:null,emissiveIntensity:nt?.85:.075,envMapIntensity:1.25,side:i.DoubleSide});return nt||(wt.color=new i.Color(t.metal||"#b4f25e"),wt.metalnessMap=null,wt.roughnessMap=null,wt.roughness=.24,wt.clearcoatMap=null,wt.iridescenceMap=null),wt},I=T(!0),E=T(!1),y=I.clone(),R=E.clone(),H=[Cn(I,{mouth:!0,amt:.08}),Cn(E,{mouth:!0,amt:.06}),Cn(y,{amt:.08}),Cn(R,{amt:.06})],N=new i.Group,G=new i.Group,J=new i.Group,V=new i.Group;G.add(new i.Mesh(h,I),new i.Mesh(d,E));let q=new i.Mesh(u,y),z=new i.Mesh(p,R),it=new i.Vector3(e/2,(gi(1)-.5)*n,0);V.position.copy(it),q.position.sub(it),z.position.sub(it),J.add(q,z),V.add(J),N.add(G,V),N.traverse(nt=>{nt.isMesh&&(nt.castShadow=!1,nt.frustumCulled=!1)});let ut={group:N,body:G,top:V,dims:{W:e,H:n,tearY:(gi(.5)-.5)*n},materials:[I,E,y,R],setTear(nt){let wt=is(0,.35,nt),Rt=is(.25,1,nt);V.rotation.z=wt*.22+Rt*.9,V.position.set(it.x+Rt*1.6,it.y+wt*.05+Rt*2.6,Rt*.6),V.visible=nt<.995,q.material.opacity=z.material.opacity=1},setMouth(nt){H.forEach(wt=>{wt.uMouth.value=nt})},setHolo(nt,wt){H.forEach((Rt,k)=>{Rt.uHoloShift.value=nt,wt!=null&&(Rt.uHoloAmt.value=wt*(k%2?.8:1))})},textures:[M,x,P,S,A],setEmissive(nt){I.emissiveIntensity=y.emissiveIntensity=nt},dispose(){N.traverse(nt=>{nt.geometry&&nt.geometry.dispose()}),[M,x,P,S,A].forEach(nt=>nt.dispose()),ut.materials.forEach(nt=>nt.dispose())}};return ut.setTear(0),ut}var nh={G:"M12.17 16.44C14.41 16.44 16.02 15.04 16.02 12.71V11.56H12.27V13.08H14.02C14 14.03 13.34 14.62 12.19 14.62C10.87 14.62 10.1 13.64 10.1 11.94C10.1 10.26 10.91 9.29 12.18 9.29C13.05 9.29 13.63 9.72 13.83 10.44H15.92C15.71 8.7 14.15 7.47 12.15 7.47C9.82 7.47 7.98 9.12 7.98 11.97C7.98 14.73 9.68 16.44 12.17 16.44Z"},ih={TSLA:{name:"Tesla",acc:"#E3343F",glow:"#E3343F",lf:"#fff",ink:1,lvb:"0 -0.005 39.017 24.01",wvb:"-0.005 -0.005 24.01 24.01",d:"M12 5.362l2.475-3.026s4.245.09 8.471 2.054c-1.082 1.636-3.231 2.438-3.231 2.438-.146-1.439-1.154-1.79-4.354-1.79L12 24 8.619 5.034c-3.18 0-4.188.354-4.335 1.792 0 0-2.146-.795-3.229-2.43C5.28 2.431 9.525 2.34 9.525 2.34L12 5.362l-.004.002H12v-.002zm0-3.899c3.415-.03 7.326.528 11.328 2.28.535-.968.672-1.395.672-1.395C19.625.612 15.528.015 12 0 8.472.015 4.375.61 0 2.349c0 0 .195.525.672 1.396C4.674 1.989 8.585 1.435 12 1.46v.003z"},SPCX:{name:"SpaceX",acc:"#8EBBFF",glow:"#8EBBFF",lf:"#fff",ink:1.625,lvb:"0 4.615 24 14.769",wvb:"0 0 24 24",d:"M24 7.417C8.882 8.287 1.89 14.75.321 16.28L0 16.583h2.797C10.356 9.005 21.222 7.663 24 7.417zm-17.046 6.35c-.472.321-.945.68-1.398 1.02l2.457 1.796h2.778zM2.948 10.8H.189l3.25 2.381c.473-.321 1.02-.661 1.512-.945Z"},GME:{name:"GameStop",acc:"#E5489B",glow:"#D63A8A",lf:"#fff",ink:1,lvb:"0 0 24 24",wvb:"0 0 24 24",initial:"G"},META:{name:"Meta Platforms",acc:"#1E8BF5",glow:"#1E8BF5",lf:"#fff",ink:1.06,lvb:"0 0.675 36.806 22.65",wvb:"0 0 24 24",d:"M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z"},AMZN:{name:"Amazon",acc:"#FF9900",glow:"#3B4D63",lf:"#FF9900",ink:1.012,lvb:"0 0.148 38.519 23.704",wvb:"0 0.001 24 24",d:"M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726a17.617 17.617 0 01-10.951-.577 17.88 17.88 0 01-5.43-3.35c-.1-.074-.151-.15-.151-.22 0-.047.021-.09.051-.13zm6.565-6.218c0-1.005.247-1.863.743-2.577.495-.71 1.17-1.25 2.04-1.615.796-.335 1.756-.575 2.912-.72.39-.046 1.033-.103 1.92-.174v-.37c0-.93-.105-1.558-.3-1.875-.302-.43-.78-.65-1.44-.65h-.182c-.48.046-.896.196-1.246.46-.35.27-.575.63-.675 1.096-.06.3-.206.465-.435.51l-2.52-.315c-.248-.06-.372-.18-.372-.39 0-.046.007-.09.022-.15.247-1.29.855-2.25 1.82-2.88.976-.616 2.1-.975 3.39-1.05h.54c1.65 0 2.957.434 3.888 1.29.135.15.27.3.405.48.12.165.224.314.283.45.075.134.15.33.195.57.06.254.105.42.135.51.03.104.062.3.076.615.01.313.02.493.02.553v5.28c0 .376.06.72.165 1.036.105.313.21.54.315.674l.51.674c.09.136.136.256.136.36 0 .12-.06.226-.18.314-1.2 1.05-1.86 1.62-1.963 1.71-.165.135-.375.15-.63.045a6.062 6.062 0 01-.526-.496l-.31-.347a9.391 9.391 0 01-.317-.42l-.3-.435c-.81.886-1.603 1.44-2.4 1.665-.494.15-1.093.227-1.83.227-1.11 0-2.04-.343-2.76-1.034-.72-.69-1.08-1.665-1.08-2.94l-.05-.076zm3.753-.438c0 .566.14 1.02.425 1.364.285.34.675.512 1.155.512.045 0 .106-.007.195-.02.09-.016.134-.023.166-.023.614-.16 1.08-.553 1.424-1.178.165-.28.285-.58.36-.91.09-.32.12-.59.135-.8.015-.195.015-.54.015-1.005v-.54c-.84 0-1.484.06-1.92.18-1.275.36-1.92 1.17-1.92 2.43l-.035-.02zm9.162 7.027c.03-.06.075-.11.132-.17.362-.243.714-.41 1.05-.5a8.094 8.094 0 011.612-.24c.14-.012.28 0 .41.03.65.06 1.05.168 1.172.33.063.09.099.228.099.39v.15c0 .51-.149 1.11-.424 1.8-.278.69-.664 1.248-1.156 1.68-.073.06-.14.09-.197.09-.03 0-.06 0-.09-.012-.09-.044-.107-.12-.064-.24.54-1.26.806-2.143.806-2.64 0-.15-.03-.27-.087-.344-.145-.166-.55-.257-1.224-.257-.243 0-.533.016-.87.046-.363.045-.7.09-1 .135-.09 0-.148-.014-.18-.044-.03-.03-.036-.047-.02-.077 0-.017.006-.03.02-.063v-.06z"},AAPL:{name:"Apple",acc:"#DDE2E8",glow:"#DDE2E8",lf:"#E9EAEC",ink:.717,lvb:"2.225 -1.643 44.339 27.285",wvb:"-1.643 -1.643 27.285 27.285",d:"M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"},NVDA:{name:"NVIDIA",acc:"#76B900",glow:"#6FB300",lf:"#fff",ink:.997,lvb:"0 -0.037 39.12 24.074",wvb:"-0.037 -0.037 24.074 24.074",d:"M8.948 8.798v-1.43a6.7 6.7 0 0 1 .424-.018c3.922-.124 6.493 3.374 6.493 3.374s-2.774 3.851-5.75 3.851c-.398 0-.787-.062-1.158-.185v-4.346c1.528.185 1.837.857 2.747 2.385l2.04-1.714s-1.492-1.952-4-1.952a6.016 6.016 0 0 0-.796.035m0-4.735v2.138l.424-.027c5.45-.185 9.01 4.47 9.01 4.47s-4.08 4.964-8.33 4.964c-.37 0-.733-.035-1.095-.097v1.325c.3.035.61.062.91.062 3.957 0 6.82-2.023 9.593-4.408.459.371 2.34 1.263 2.73 1.652-2.633 2.208-8.772 3.984-12.253 3.984-.335 0-.653-.018-.971-.053v1.864H24V4.063zm0 10.326v1.131c-3.657-.654-4.673-4.46-4.673-4.46s1.758-1.944 4.673-2.262v1.237H8.94c-1.528-.186-2.73 1.245-2.73 1.245s.68 2.412 2.739 3.11M2.456 10.9s2.164-3.197 6.5-3.533V6.201C4.153 6.59 0 10.653 0 10.653s2.35 6.802 8.948 7.42v-1.237c-4.84-.6-6.492-5.936-6.492-5.936z"}};function fg(i){for(var t=2166136261,e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function pg(i){return function(){i=i+1831565813|0;var t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var $r={};function sh(i,t,e){var n=i+":"+(t||56)+":"+(e||100);if($r[n])return $r[n];t=t||56,e=e||100;for(var s=pg(fg(i)),r=0,o=[],a=0;a<t;a++)r+=s()-.5+Math.sin(a/5+s())*.18,o.push(r);for(var c=Math.min.apply(null,o),l=Math.max.apply(null,o),h=l-c||1,d=o.map(function(f,_){return[_*250/(t-1),e*.08+(1-(f-c)/h)*e*.84]}),u="M"+d[0][0].toFixed(1)+","+d[0][1].toFixed(1),p=1;p<t;p++){var m=d[p-1],g=d[p],A=((m[0]+g[0])/2).toFixed(1);u+=" C"+A+","+m[1].toFixed(1)+" "+A+","+g[1].toFixed(1)+" "+g[0].toFixed(1)+","+g[1].toFixed(1)}return $r[n]={line:u,area:u+" L250,"+e+" L0,"+e+" Z"},$r[n]}var Ze={W:1.5,H:2.25,R:.107},to='-apple-system, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Inter, Arial, sans-serif';function Ag(i){return i.split(/\s+/).map(Number)}function Us(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}function rh(i,t,e,n,s){let r=e;for(let o of t)i.fillText(o,r,n),r+=i.measureText(o).width+s;return r-e-s}function oh(i,t,e,n,s,r,o,a){let[c,l,h,d]=Ag(o),u=Math.max(s/h,r/d);i.save(),i.beginPath(),i.rect(e,n,s,r),i.clip(),i.translate(e-c*u+(s-h*u)*0,n-l*u+(r-d*u)/2),i.scale(u,u),i.fillStyle=a,i.strokeStyle=a,t.initial?(i.lineWidth=1.8,i.beginPath(),i.arc(12,12,10.6,0,Math.PI*2),i.stroke(),i.fill(new Path2D(nh[t.initial]),"evenodd")):i.fill(new Path2D(t.d),"evenodd"),i.restore()}function xi(i,t){let e=parseInt(i.slice(1),16);return"rgba("+(e>>16&255)+","+(e>>8&255)+","+(e&255)+","+t+")"}function eo(i,t,e=512){let n=Math.round(e*1.5),s=e/100,[r,o,a]=i,c=ih[r],l=Xe(e,n),h=l.getContext("2d"),d=e*12/168,u=t==="orm",p=t==="glow";if(h.save(),Us(h,0,0,e,n,d),h.clip(),h.fillStyle=u?"rgb(0,96,0)":"#0c0e0d",h.fillRect(0,0,e,n),p&&(h.fillStyle="#000",h.fillRect(0,0,e,n)),!u){if(!p){h.save(),h.translate(.22*e,.1*n),h.scale(1.1*e,.7*n);let I=h.createRadialGradient(0,0,0,0,0,1);I.addColorStop(0,xi(c.glow,.3)),I.addColorStop(.6,xi(c.glow,0)),h.fillStyle=I,h.fillRect(-1,-1,2,2),h.restore()}oh(h,c,e+34*s-118*s,n+8*s-118*s,118*s,118*s,c.wvb,xi(c.acc,p?.07:.13))}let m=I=>u?"rgb(0,58,235)":p?"rgba(255,255,255,"+I*.7+")":"rgba(255,255,255,"+I+")",g=sh(r),A=n-33*s-.22*n,f=.22*n;if(h.save(),h.translate(0,A),h.scale(e/250,f/100),!u){let I=h.createLinearGradient(0,0,0,100);I.addColorStop(0,xi(c.acc,p?.22:.26)),I.addColorStop(1,xi(c.acc,0)),h.fillStyle=I,h.fill(new Path2D(g.area))}h.restore(),h.save(),h.translate(0,A);let _=new Path2D,M=new DOMMatrix().scale(e/250,f/100);_.addPath(new Path2D(g.line),M),h.lineWidth=2*e/168,h.lineJoin="round",h.strokeStyle=u?"rgb(0,40,200)":p?"#fff":c.acc,h.stroke(_),h.restore();let x=10*s,P=10*s*c.ink;oh(h,c,6.4*s,6.4*s,P,x,c.lvb,u?"rgb(0,58,235)":p?"#fff":c.lf),h.fillStyle=m(1),h.textBaseline="middle",h.font="800 "+7.6*s+"px "+to,rh(h,r,6.4*s+P+2.4*s,6.4*s+x/2,-.01*7.6*s);let S="$"+o.toLocaleString("en-US"),T=(S.length>=8?18.5:22)*s;if(h.font="400 "+T+"px "+to,h.textBaseline="alphabetic",rh(h,S,6.4*s,22*s+T*.8,-.04*T),h.font="600 "+5.2*s+"px "+to,h.fillStyle=u?"rgb(0,96,0)":m(.75),h.textBaseline="top",h.fillText(c.name,6.4*s,45.6*s),h.font="400 "+5.2*s+"px "+to,h.fillStyle=u?"rgb(0,96,0)":m(.72),h.textBaseline="bottom",h.fillText(a+" shares",6.4*s,n-6.4*s),h.restore(),h.save(),Us(h,1.5,1.5,e-3,n-3,d-1.5),u)h.strokeStyle="rgb(0,30,255)";else{let I=h.createConicGradient(-34*Math.PI/180-Math.PI/2,e/2,n/2);I.addColorStop(0,"#ffffff"),I.addColorStop(.12,c.acc),I.addColorStop(.3,xi(c.acc,.35)),I.addColorStop(.5,"#ffffff"),I.addColorStop(.7,xi(c.acc,.35)),I.addColorStop(.91,c.acc),I.addColorStop(1,"#ffffff"),h.strokeStyle=I}return h.lineWidth=u?6:3,h.stroke(),h.restore(),l}function Mc(i=512){let t=Math.round(i*1.5),e=Xe(i,t),n=e.getContext("2d"),s=i*12/168;Us(n,0,0,i,t,s),n.clip();let r=n.createRadialGradient(i/2,0,0,i/2,0,t*.9);r.addColorStop(0,"#20261a"),r.addColorStop(.7,"#0a0c08"),n.fillStyle=r,n.fillRect(0,0,i,t),n.save(),Us(n,i*.04,i*.04,i*.92,t-i*.08,s*.6),n.clip(),n.strokeStyle="rgba(166,243,87,0.06)",n.lineWidth=1.5;for(let c=-t;c<i+t;c+=i*.036)n.beginPath(),n.moveTo(c,0),n.lineTo(c+t,t),n.stroke();n.restore(),Us(n,i*.04,i*.04,i*.92,t-i*.08,s*.6),n.strokeStyle="rgba(166,243,87,0.35)",n.lineWidth=2,n.stroke();let o=t*.3,a=o/230;return n.save(),n.translate(i/2-63*a,t/2-115*a),n.scale(a,a),n.shadowColor="rgba(166,243,87,0.5)",n.shadowBlur=40/a,n.fillStyle="#a6f357",ss.forEach(c=>n.fill(new Path2D(c))),n.restore(),e}function mg(i,t,e,n){let s=new i.Shape,r=-t/2,o=-e/2;return s.moveTo(r+n,o),s.lineTo(r+t-n,o),s.quadraticCurveTo(r+t,o,r+t,o+n),s.lineTo(r+t,o+e-n),s.quadraticCurveTo(r+t,o+e,r+t-n,o+e),s.lineTo(r+n,o+e),s.quadraticCurveTo(r,o+e,r,o+e-n),s.lineTo(r,o+n),s.quadraticCurveTo(r,o,r+n,o),s}function ah(i,t,e,n,s){let r=new i.ShapeGeometry(t,10),o=r.attributes.position,a=r.attributes.uv;for(let c=0;c<o.count;c++)a.setXY(c,s?.5-o.getX(c)/e:o.getX(c)/e+.5,o.getY(c)/n+.5);return r}function no(i,t,e={}){let{W:n,H:s,R:r}=Ze,o=.012,a=mg(i,n,s,r),c=(S,T)=>{let I=new i.CanvasTexture(S);return T&&(I.colorSpace=i.SRGBColorSpace),I.anisotropy=8,I},l=c(eo(t,"face"),!0),h=c(eo(t,"orm")),d=e.backTex||c(Mc(),!0),u=new i.MeshPhysicalMaterial({map:l,roughnessMap:h,metalnessMap:h,roughness:1,metalness:1,clearcoat:1,clearcoatRoughness:.03,iridescence:.18,iridescenceIOR:1.3,iridescenceThicknessRange:[200,700],emissive:new i.Color(16777215),emissiveMap:l,emissiveIntensity:.62,envMapIntensity:.34,transparent:!0}),p=Cn(u,{amt:.1,base:.07}),m=new i.MeshPhysicalMaterial({map:d,roughness:.4,metalness:.1,clearcoat:1,clearcoatRoughness:.05,emissive:new i.Color(16777215),emissiveMap:d,emissiveIntensity:.32,transparent:!0}),g=new i.MeshStandardMaterial({color:1382415,roughness:.5,metalness:.6,transparent:!0}),A=new i.Group,f=new i.Mesh(ah(i,a,n,s,!1),u);f.position.z=o/2;let _=new i.Mesh(ah(i,a,n,s,!0),m);_.position.z=-o/2,_.rotation.y=Math.PI;let M=new i.ExtrudeGeometry(a,{depth:o,bevelEnabled:!1,curveSegments:10});M.translate(0,0,-o/2);let x=new i.Mesh(M,[new i.MeshBasicMaterial({visible:!1}),g]);A.add(x,f,_),A.traverse(S=>{S.isMesh&&(S.frustumCulled=!1)});let P=[u,m,g];return{group:A,row:t,setOn(S){u.emissiveIntensity=.62+S*.5,p.uHoloAmt.value=.1+S*.14},setHolo(S){p.uHoloShift.value=S},setOpacity(S){P.forEach(T=>{T.opacity=S,T.depthWrite=S>.98}),A.visible=S>.003},textures:[l,h,d],dispose(){[l,h].forEach(S=>S.dispose()),P.forEach(S=>S.dispose())}}}function as(i,t){let e=new i.Scene;e.background=new i.Color(.055,.058,.05);let n=(a,c,l,h,d,u,p)=>{let m=new i.Mesh(new i.PlaneGeometry(a,c),new i.MeshBasicMaterial({color:new i.Color(p||16777215).multiplyScalar(u),side:i.DoubleSide}));return m.position.set(l,h,d),m.lookAt(0,0,0),e.add(m),m},s=(a,c,l,h,d)=>{let u=new i.Mesh(new i.SphereGeometry(a,16,12),new i.MeshBasicMaterial({color:new i.Color(16777215).multiplyScalar(d)}));u.position.set(c,l,h),e.add(u)};n(9,2.6,0,7,5.5,2.4),n(12,5,0,3,9,.62),n(12,4.5,0,-2,9,.26),n(.5,7,-2.2,.5,8.6,2.6),n(.35,7,2.6,0,8.6,1.8),n(5,2.2,-1.5,-4.5,7,1.4),n(1.6,9,-7,.8,3.5,3.2),n(1.3,8,6.5,-.5,3,2.4),n(7,1,0,5.5,-6,1.6),n(3,3,-4,-5,4,.7,15662048),n(16,16,0,-9,0,.16),n(16,9,0,0,-9,.1),n(9,6,-9,0,-2,.32),n(9,6,9,.5,-1,.28),s(.42,-2.6,3.6,5.4,14),s(.3,3.2,-2.1,5,10),s(.22,1.2,4.4,4.6,12),s(.26,-4.2,-.6,4.4,11),s(.2,4.6,2.2,4.2,12),s(.18,-.8,-3.6,5.2,9);let r=new i.PMREMGenerator(t),o=r.fromScene(e,.035);return r.dispose(),e.traverse(a=>{a.geometry&&a.geometry.dispose(),a.material&&a.material.dispose()}),o.texture}var gg=" .'`,:;-~^\"!i|+<>=?*/\\tlfjrcxzvunoeasYJCLQ0OZmwqpdbkhaB8&%#@$";function xg(i,t,e,n){let s=Math.round(t*n),r=Math.round(e*n),o=Math.round(r*.86)+'px ui-monospace, "SF Mono", SFMono-Regular, Menlo, Consolas, "Roboto Mono", monospace',a=Xe(s,r),c=a.getContext("2d",{willReadFrequently:!0});c.font=o,c.textAlign="center",c.textBaseline="middle";let l=[];for(let A of gg){c.clearRect(0,0,s,r),c.fillStyle="#fff",c.fillText(A,s/2,r/2+r*.04);let f=c.getImageData(0,0,s,r).data,_=0;for(let M=3;M<f.length;M+=4)_+=f[M];l.push([A,_])}l.sort((A,f)=>A[1]-f[1]);let h=l[l.length-1][1]||1,d=24,u=[" "];for(let A=1;A<d;A++){let f=Math.pow(A/(d-1),1.15)*h,_=l[1];for(let M of l)Math.abs(M[1]-f)<Math.abs(_[1]-f)&&u.indexOf(M[0])<0&&(_=M);u.push(_[0])}let p=Xe(s*d,r),m=p.getContext("2d");m.font=o,m.textAlign="center",m.textBaseline="middle",m.fillStyle="#fff",u.forEach((A,f)=>m.fillText(A,f*s+s/2,r/2+r*.04));let g=new i.CanvasTexture(p);return g.minFilter=g.magFilter=i.NearestFilter,g.generateMipmaps=!1,{tex:g,N:d,gw:s,gh:r}}function Fs(i,t={}){let e=new i.MeshLambertMaterial({color:t.color??16777215,map:t.map||null,emissive:t.emissive??0,side:t.side??i.FrontSide}),n=t.uniforms||{uReveal:{value:0},uTint:{value:t.tint??0}},s=!!n.uFadeY;return e.userData.u=n,e.onBeforeCompile=r=>{Object.assign(r.uniforms,n),s&&(r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
varying float vWY;`).replace("#include <project_vertex>",`#include <project_vertex>
vWY = (modelMatrix * vec4(transformed, 1.0)).y;`)),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
uniform float uReveal;
uniform float uTint;`+(s?`
uniform vec2 uFadeY;
varying float vWY;`:"")).replace("#include <dithering_fragment>",["#include <dithering_fragment>","float lum = dot(gl_FragColor.rgb, vec3(0.299, 0.587, 0.114));","float rim = pow(1.0 - clamp(abs(dot(normalize(normal), normalize(vViewPosition))), 0.0, 1.0), 3.0);","lum = clamp(lum + rim * "+(t.rim??.35).toFixed(3)+", 0.0, 1.0);","float rv = uReveal"+(s?" * (1.0 - smoothstep(uFadeY.x, uFadeY.y, vWY))":"")+";","gl_FragColor = vec4(lum, rv, uTint, 1.0);"].join(`
`))},e.customProgramCacheKey=()=>"lum"+(t.rim??.35)+(s?"f":""),e}function ch(i,t){let e=new i.Scene;e.add(new i.AmbientLight(16777215,.45));let n=new i.DirectionalLight(16777215,3);n.position.set(-3,5,6),e.add(n);let s=new i.DirectionalLight(16777215,.8);s.position.set(5,-1,4),e.add(s);let r=new i.WebGLRenderTarget(64,64,{type:i.UnsignedByteType,minFilter:i.NearestFilter,magFilter:i.NearestFilter,depthBuffer:!0}),o=null,a={tWorld:{value:r.texture},tAtlas:{value:null},uN:{value:24},uGrid:{value:new i.Vector2(64,64)},uCell:{value:new i.Vector2(6,10)},uRes:{value:new i.Vector2(1,1)},uTime:{value:0},uPack:{value:new i.Vector3(.5,.5,.3)},uGlow:{value:1},uFade:{value:1}},c=new i.Mesh(new i.PlaneGeometry(2,2),new i.ShaderMaterial({uniforms:a,transparent:!0,depthTest:!1,depthWrite:!1,vertexShader:"void main(){ gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:["precision highp float;","uniform sampler2D tWorld; uniform sampler2D tAtlas; uniform float uN; uniform vec2 uGrid; uniform vec2 uCell; uniform vec2 uRes;","uniform float uTime; uniform vec3 uPack; uniform float uGlow; uniform float uFade;","float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }","void main(){","  vec2 fc = vec2(gl_FragCoord.x, uRes.y - gl_FragCoord.y);","  vec2 cell = floor(fc / uCell);","  vec2 uv = (cell + 0.5) / uGrid; uv.y = 1.0 - uv.y;","  vec4 w = texture2D(tWorld, uv);","  float n = h(cell);","  float vis = smoothstep(n - 0.04, n + 0.04, w.g * 1.06);","  float lum = w.r;","  float tick = floor(uTime * 1.6 + n * 9.0);","  float sh = h(cell + tick * 7.13);","  float j = sh > 0.93 ? 1.0 : (sh < 0.07 ? -1.0 : 0.0);","  lum = smoothstep(0.04, 0.92, lum);","  float idx = clamp(floor(pow(lum, 0.8) * (uN - 1.0) + 0.5) + (lum > 0.03 ? j : 0.0), 0.0, uN - 1.0);","  vec2 local = fract(fc / uCell);","  float a = texture2D(tAtlas, vec2((idx + local.x) / uN, 1.0 - local.y)).a;","  vec2 sp = vec2(fc.x / uRes.x, fc.y / uRes.y);","  vec2 d = (sp - uPack.xy) * vec2(uRes.x / uRes.y, 1.0);","  float near = exp(-dot(d, d) / (uPack.z * uPack.z)) * uGlow;","  float ang = atan(d.y, d.x);","  vec3 film = 0.5 + 0.5 * cos(6.28318 * (ang * 0.32 + uTime * 0.05 + vec3(0.0, 0.33, 0.67)));","  vec3 base = mix(vec3(0.43, 0.43, 0.44), vec3(0.52, 0.38, 0.33), w.b);","  vec3 col = mix(base, vec3(0.52, 0.72, 0.30), clamp(near * 0.6, 0.0, 0.5));","  col = mix(col, film * 0.6, near * 0.1);","  float alpha = a * vis * (0.13 + 0.5 * lum + near * 0.12) * uFade;","  gl_FragColor = vec4(col * alpha, alpha);","}"].join(`
`),blending:i.CustomBlending,blendSrc:i.OneFactor,blendDst:i.OneMinusSrcAlphaFactor})),l=new i.Scene;l.add(c);let h=new i.OrthographicCamera(-1,1,1,-1,0,1);return c.frustumCulled=!1,{scene:e,setSize(d,u,p,m,g){let A=Math.ceil(d/m),f=Math.ceil(u/g);r.setSize(A,f),a.uGrid.value.set(A,f),a.uCell.value.set(m*p,g*p),a.uRes.value.set(d*p,u*p),o&&o.tex.dispose(),o=xg(i,m,g,p),a.tAtlas.value=o.tex,a.uN.value=o.N},render(d,u,p){a.uTime.value=u,p&&a.uPack.value.set(p.x,p.y,p.r);let m=t.getRenderTarget();t.setRenderTarget(r),t.setClearColor(0,0),t.clear(!0,!0,!1),t.render(e,d),t.setRenderTarget(m),t.render(l,h)},uniforms:a,rt:r,dispose(){r.dispose(),o&&o.tex.dispose(),c.geometry.dispose(),c.material.dispose()}}}var lh={L:{p:"O6UT/YQOEahd9nMKPKMC/pgIpKbO9sMEg6jW7S4LAqc97RYGTaQP9iQBqqDr/H8FHKXf7M0CqqDr/H8FTaQP9iQBBZ8++yoE/KAl9AAAHKXf7M0C4aLL7DUB8J3F3o0PJ5ux4tsOEaIV5R4Ix5/h504HeJZ43WkW2pcO6z0QIpMq5gwYbZlp2XYXb5SO0zwgRJEs2GEemJqv+AMLT5zC7xEIdpb387ITSJ3//88RY5vp/AcOtJet/Bobq5ag+OkWkKTt9jwfVqHi9KcnbKZb8U0f8qNT7ownUaUw4uYd76Ng3uAX2qcD6FUW/6a85bMQEaIV5R4IA6WX5IYL8J3F3o0PGKHI3NASq5ag+OkWY5vp/AcOB4mdxvkvVo8RznMo9JKWy7Ut5IyuxWY2zoR1y7ks7ItP0rwmVo8RznMoB4mdxvkvlIGf0mkt7ohk2fwnNoel4VorlX9k2i4x/Yai5r8uG39x32Q1G39x32Q1438244I6/Yai5r8uzYd66jkzG4lP30FLwow22d5LlZDD5ZxDpJMh38BDhJGv7uEbv5Fq8ysf9Yve6Ggj8oto7R8nz5uD3RE35pnb5Gk635VK2DBBD52x1uoaNJjz0JUkb5SO0zwgbZlp2XYXdZJf95kjv5Fq8ysfEY0G8Ycs8oto7R8naX0xwtBoHHcIyNFtvnowvrNvUHNsxGR1UHgVusR1oG6qv3l9eXYhtQx7l2tRuc6DWj+MwO1mTTo9uCJvJ0FEwu13kDgus0mCCkLZtUiO7EEmuLhUBDz+sRpbWj+MwO1mTTo9uCJvXGuJpMs962QunctAx2JGrO86klslpn0/w83WRpnPRceaTLzNtspNQifZx8P7R5PXl86rRPPEIchsShjC1cLROT67Dsk3NJa+Mb8BNGjE0sUgL1bHncR1MKjTscbzOLjbz72kNQDSx785PtbZ/eFmC3XOJ9+UAIrKPuLIC3LGI+BJBb7B6t5YCXDUz9tOAo7T8MuCM2/cd8lgK2vURdVuIqe968+KGxy/99M5Lry/q88gJ5HAnMzcPP+9IsZwQuq6NNkAAMbHItvQAh/BJ9+UAIrKI+BJBb7B2Ne9APTOz9tOAo7TxcCdUmPLQL0mTszVVLlTRAvYyLdZPAzQErkGOurBvbwTQBm5C8D3SJy41sEFUOm+j+AmFPHOLOCiE7DErdynHMvOSdztG17Edth5GILWYtwSEE3WuNRuBk/G0dSJBi3PfNCHDuHFJtBXDvvQBtg6CQTYodN9EqjY4tMFEp2+a9i1FtW8BNg0CWa/et3nDfq8KbvYXlXLxLVCbOXLZ7ceWaPW+7GZZPzWXbRlT8XXErDgWnDXXbRlT8XXErDgWnDXVLSiS5rRr7AkVqfRPrY4SaLEL7NDVPfFBLkVTaG6ZrX/VnO7YbsdVOe4I7cLX1O5jLyHW0O+tbcRaGG+dMw+IwXJksznF9TGksq5KurI+MtOJJfUucy0GKvSts5UKrLbktBLHoTZsc0ZL3DAj9GZNznAPdCbPBXaLdM9QV7R09MZP1XHHNMKMXvZ79QVI9LWf9ZuNTrRoNjUJVnOtNggJtLECtexNJ7G99M5Lry/j9GZNznAts5UKrLb8MuCM2/cNa3cTF/zAanXUa7xtKniSSb8j6XiTkP6EK7eSW7pIKrKTjfn9qS+OJ/sxadLNAfuv6OWOh32zKZwNrf3prCkRnf1zqyCQ0z+brHpQ9XqR6syNyLnuqhLPKrkv7gGF0P5s7ZhDYf2W7mPFg7z6rcSERjvQbb0Ffv9pLNvECv+jqwdH8L/a6qeKF//6KndGyf4fadrJMf2CqzlQoLjQagoR5fgjaQnQBLipqr+GpHvvq1CHDrpcq01EzLxTrH6FPDqYrG+Czn0zbNADgvts7ZhDYf26rcSERjvALCEDhn7pLNvECv+UK1xFCX5zq/iFv//UKXBQVr9RaEcRiP70p/APgPz/aDTPG/pUKhuI/HtcqjMLVnupqdVLxn3/7fJHcL4UrhjHFbwybWGJXT3EbYfJFPuGLKjIx7/TbS9G0j/6rIKIL/nvLWZF/bpm6FoVaP36KT/WGDvVp33S6r4RaEcRiP7Vp33S6r43JvpREnxv51YRKXngKFHSMffiKQxTk/eKKbGVAfko6DYZS7ucJ2ZYpL3Tpr9Vvb3Tpr9Vvb3gpl8UG7xwpuoULDn3p5UVBnfn6HfWSbdbaJVYWriQK/DPY3lI6yBMMTnXLOgLgv36bNnLVrsjqhcPKb+UrICPUD2Pa7CORr/V7M7O0TsCLAvLXH+frAiKSXmXqy4JWznjrDHNUPmUam6M8L+frAiKSXmjrDHNUPm7f6DWvRv//9wTxJtg/7BWiVo9/2qU0Njof20V6V2gP26Tyt3aulfWB91Xe9yU3Z0pOs0XjV8efHOWLt7yvncSvxpVvr+TkRj//9wTxJt9/2qU0NjMfkOS/VygP26Tyt3DO+/U3BpeOmHWJ1p0vO4T+FphfX5U1BirvCuV4phJvuVYT1xt/pCYDdm2/Z8ZrFwTfY+ZZZlw/SIYd55RvmLXDN5VvR1T4FzlvanUzp7B/SyXn1eCfmyWVNfUc+af2x+HtZCfKl9E9Emh71zB9iDg4tzctGAfbNdt9cTeXFdBtA6cwlgzNX/bS5gHNK0hj9mw9jdgkRm3bCKiSWAqbXQin1+MbATlTR1I7Z0lB50ebACfTZ86bRZffF8Va6qcyZyNrS2c4JzebACfTZ86bRZffF85aztfONYa7TnewVbEa05dIhjE7THc1dluq0oi5RXRrVvigxa9rWTlKRjw61NlqhioclGhIx/WsuUjFR0IM4KddZ+oMg0eYx/7838bD92IM4KddZ+oMhfcJx2oMg0eYx/js5ebD9qZsmgbzlql8qvdmdft8tygcddPsybi4JmmOAZZBZsNeLqaVtjF+XdXuZq9eb/Y7NixeT2Xr523OtxdDJzY+VCffR0zen5bs18aeOhdnZ+4usbc3Fm0OWEe4BnSe/CZ696SvF2bPpx+vBTaw5lTO47ZB9eb+tWXQhhduk+a35flub9ZGN9EOC1ZA14MOFKbBZ/LOSGckFgssJWiG+AOcRrkTN1BMKce0Z/M8LYcut1BMKce0Z/9sL3cfNo4MNAeuBew8QPhtJdGcWTkHhmDuLuVbWdedt8Wseddd+eTmCnENk4UxCnxeIAVRSQXtzGWuqPg/wFHCOUtPomEMKQB/x0HA2MQ/ppFdKGWvpWGbWaafhlESybxeDGTOCHpd3aQtiIlNr7URKHgNcOR2SH0vTgDbGNL/axEQSGtPomEMKQQ/ppFdKGovNFDh6XafhlESybwOsgHEiZcufeJjmbVOvnG76NauetJpWPdeSQMTCdeODdN0mek+RIMaWR1uC3N4CSJO8FFSWODfLoGFyFzO16H+KEOvnyI9iK4PWUKqOKDfpxJTqWvvZjK1GWWfMIJsefFPf8H9edyO8oFVOYrfJXGN2fXO5hH+SgOPbXHUiCY/K5JduC/dPmWWyHEtHrTciGN85FZW6JKMwIWhuJELuZdG2sAbpbZ1ipa8MZcRStIsJtY9mqOurwKkujHvKaNv2YrfHDNTKL7OayNY6IWeNyPXaJhuo+PduGjeZPRmCIEO/5MVGiAOqdKtCFB+4JMQqEinSdZANvNH6xYoFxknMSYIF5H31vXoZ8VnKAXTCEsHvcW3mHSGqnYe92JGumZvJs8WE5aPlq1VgIabRogWLvbQBhtFmbbmdfzmzhWqOi8W7ZWrGYgXUmWk2m03c7WUOcvnKyWnKwaWorW5GsSWRzWzKfO2b9W2KVa2KHXo3JPmV3XOe/0mlfX83NCG0hXa3Du5whYPut3Z1XY3ilnaOaa46tvqMIbO6qrqzQe8l886wpjC2C9KpXeil/+Kuwh1GHHZOoa3fQ8JVJa37MiZOZePXRVJdleHrLbZwodZzNuZuUfFq/rKBYejHCWqvtlTN4najTmUNpuq0oi5RXh6bRklxa5aWgihhVjaV6fblW5aWgihhVJKZ+dMpgiKcFc+FvrqzQe8l89KpXeil/i6xQeNWB9KTMcUl4PKeyabZ/SJxnZRB9Q5w2bBlzUqJ4YLSw/qUMbGywL50LWRC7+6R5WA6/3qhQXiq1JZNnW6+prZVQXXqfTpk0X1rI+6FZXXXLmZpwas7ND6IwZwvSLozXYx/Uf42nZMvLo5Kfa43SHZOoa3fQMIQtXzrQX4dyX2DHTlJysmJCClofuFc99El/q19IaUIKpmRNPktuv85MnFO6xDtG8l1Tk/1GpFNZnlBFWWO0xCCCHV9NvWCKcU+vy8h4UlhR0xFttkl5zAJsFVOb0wZhvUffwX6EBVFHz9xS/UcByRJcBVFHz9xS/UcByRJcHo4k4N0fECwcqJVxHzT6rZ1y8y3apeRg1TWbqoJf/pbPjXWYWZj2kJyR0JKej4GXxZHJkpSR1nYkoUqHd3o3nByKlnzLoseAxn9zniCDTW56mKWabmiNnr2WOGiplj+k22DQnb6fynN9p/KE8G/Cn2qO2Wuwp3GLWG8hivDdqmmgjD/ckWrIgXDoiGSqg7jmBW7PjyLQwXO7jM7RE3vyisq7cXWJjQ25gnd1jG7GwHEwjyLEjXnyjKWu/36Ziq2xDX7pjRylM4OJi3CodYwelpCNOYxbkMOYoYfuks2UPm4ykrGn+XM+j1KrpnPOkwie1XhwkICha2lPk+qymW84kCW2y2svkoHBcmV/lXe+71yxkUTXpmOCj+DZYGG4lcPKAWjckojNQFd1h1rhKl6HhUrkeXQoms6RxYLqj3OckIdxjQ+g9aiY7p8RQ6gv9U8RDKZV+qIUGKBn/zgXDpuc/QQgS6JH/MQbKp69+nskr4W84ulHX43f6S1AYYKy5MVBWoo27J85a6Ek3D4n85/e13cgqZY90rw81pWczc41QZxF1yUyGJva0qIrJ5WI+Usp05gy94wuTE28tEWVWFJzwNCK2FpFs72R0X5ttRJvNYLAsf5oFIB6uXpptYLxtCpjT5MU8dY4oo8E8wMzj6XDl8x6dKackiKDC6dofFOp56iug8GbSaDMg8ykjKJfh4uaypFJfo3GxpW1f6u8XY67fozPeIs8eyPkpoYUfzzkR4a8dQfvU4FeeHjujJ1KiuFSkp1DlLtWXJ2ic/NcLJ3bfQNU3nKln9ZBFW6el4JDAYaLqgpd0oRrrqdibohaqGhlF4UnrNRowoMqrHVWLIT1sCxcCIHNru9P+YJMs9dVjH9YmZFJSIFnoPBMB4ZSly9N3IZunlFRFo0TlpRQjYwBjIZOXIQzjlFLEn2wkGxI4HX+k+1FXnnwmwVGW4H/gRxP7Ipsf9pQj3ichKdMKnDshzBK8qSw58cjZKch7E4cVI+r0jxJiZx98S0xg58S6jQw6Zbp6zs7CKGv4ngslXA3r3uEOHgnrix9NWb3sK2LA2kuy494mqdl8xoYYqh07x8XZ6YV93QZ93nyp+l+xGdijIBInDoRoVRRMDI/nTZTzEsMl7lKD0JFkotO0Tf4jh1P8laFh8BOFUr1gklRXT5xfqFRu1hGeO9WyU7kdSRYN0REbvZc13+LX+7ZoYbhX6vcn0mcZN3LpFGtY6PPNUnMbEnVl1Gta3vZh18Pa9Lg61jrag7d91+TYzDXLFlkY3XTqGbqa8/kTGf+Y9jajHwTZenl0YLHYw/o7X1ebvzueoNhbNPvkm46bofp3G9WZR/gt0qZeAverlIjd9XhwWAUdjnnDVpHdr/kJ2dgdlvpwWAUdjnnJ2dgdlvpRkD5biDRkUDIZs/G5EEMe17ZR2Lpp8OSmFg4qJGamlWFlFDTR03glkXPfE+BiZXdJkcNjDPZt0qZeAve5EEMe17ZDDikcnnNXDOia1zBlDrpfTXVwlFjpqSkWlrTnVOqJFbJnf62V0xVowayv0e7rCKgIT3NrjGZjURXmc/KNj90jqLUlDrpfTXVbychnk6chDH+olCiyilvo/2O/zP6qa+RCCY+mbunkSS9kq2xkS6EnQuuUixdlhm58Sr5jdPBriTWivq58i+Oe+LKoCvNhKvHziopdxLDkibBgRjAHzT6rZ1y0i1lqaSBECwcqJVxKDmGp4qoIUNLpx+u9zLjghjQuy8/kCjIcDI2mqC/6TW4ocu07Tobm7XFSD8oopO6oTbUkEDO529IWza63GeFW0u24HmzWfKRyHCrW5yO9X52aBtnPnU9ar9k44CdWFOgPoOIWM6V9HcrW5K+5HR3XQTIY181XsOIwV3RXDySZVfmXneGbVWeXf+OH1gbWzSv0VWEW6a4oFAtW/ur+U2SW5+0VZdtWbi4GZPZX7zFhY/xWC20bIu+Wxa/GYguYsd06Yh/ZwhqBFiIY8NyLmHwYsd0kU/+aYllUE7LYz9xH01ZXpmKO0oLXVOVrEO6X4aB7T7xXCiRpVdhYEJ9X2CnX+R+uE6RYC59WFOtXMKY4lsJXOmbxVG9W+uiA1p/W7OllUpxW1CpKUYAXKiugUutXVS+hkIaXxC5pVOlXZbCIJuWXUuHm6SPXrCL+ZjpWxeVx6KMXxydAIe4XKF/UYWaWi2LwIksddZXr3+rdx5W0XWAes5Tz2y2fVlRhGOlgexPt2KWds9XP2z+c0BZtHWlcW5bS343WZaqFntDWtC0eIz7c1XwqZB0ea/meoNhbNPvtol6ap/xWokTYtPqtol6ap/xgoxkXwvgrZCtZJLXfZRvbA3VA5FjeePYIotzf//YbKXGdji2DavbdGa6/qUMbGywSKuRaU20mZpwas7NwaNDcrbRj6e4eM7G5aHkely1SKuRaU208JVJa37MtZXUeHfpIJLocmzzYJCEaLX04JBEYDXueJN2Xifjl5bHY8zaupjcbL3Ympj9dMzdZJT7dcDaUL24k5l0Mbzvibx/i7vjfFJ+YbsodOh09bvXcp1nq7wye3Jdeb2WiHBc9b1BkydlZr1vfuGgO7VQf3GfGrO9dUeqQ7KbaKOnAbpbZ1ipQ7KbaKOnPro8XqOg6LE7XwyffbOJXUiQsrtnXMOS67WzZ5iF4L3NZcmIyLfjdBeHVb/7ceqISb+tfOKRd7cEfoeQD6IwZwvSUYfFv7k+z4KavgY3z4KavgY3D33PwgIx9Xfuyg8xpXRA1Do1E3Sh2tc6E3Sh2tc6K3VT3mlCaoUW0/5Ty4DY2EtUf3jA3zFLeYibzTlQD33q3EFRL6twa/Km6avzePmpXaZ7a1en2LAIgP2Nh7ECdhmEyLfjdBeHW62UgbCcoqvHhKWNbK7KaHmCh7ECdhmEL6twa/KmXaZ7a1enpamRX4yevatwXnSNzNEfW8KnRtTHYRuea9V6YiOQEM5cbqqgZctvZyyrEM8dbtiRsOgpUD+e2uULSZ6ni+1+RRGc1OrpP/SlTekDTyuQDe7fRNqOTs75RfSQ2tSHP7OQfc0gRrKdLtRPP/OcjMg5UoWhtckSUrCTAM/KTnun3dXHR6umbMnOWqmqAM/KTnunbMnOWqmqa+ZiNySmVuL/PjSnhuo+PduGjeZPRmCI58UBermhIsJtY9mqR8IIW2KiosN1WpqUvsUHY2qKGMekbjqKTcdneM2Si7vjfFJ+iNq2ZUdr7tlbZhp34dr2buN+pN7lgIJ0w9wOeiZ+U9+gf25mG9wMbHNh8N22daZes9NIaDx2RdSsZ11qcdTjcHx+EqtSbVzV0K4FdVPKi6myYjHV9qmCWnjOi6myYjHVoKx5VwnDr6/CXIO5aLGZZqW3hLFtcRS9v9pZPC+eVtsuPPKRYdz4QxOnVLlTRAvYLZjebWL2e5vkc4HsaZbLY0n3pJYIXArxaZbLY0n3OJmOW1Lm+ZvpX4/d4p0VaTjc4p1sb0bgOFv7XVnGVjfBYNeyWz38Wxmk6nF0YBHTUQUhp0toOA9AprdqlQc0opFalBGdoV9clgq1lkZNnxR+l0NQDg3dh05IdBfyiEVLkw40eG5MfhkqeW1OIBlRYeh33he8XcuG0wy4YE91ZwslXpeDIRomZsVoBA5eZd9mzA7oa4pYXhr+bN5ZewPQp/V2VQ3Opht5UQUhp0toOA9AprdqugqZof6S4gv3pGaGLQHmojiQOAIYpqmDdwlYlCCq4QllnNaeAAAglZGoaQAZnvqb0htfooleJRnvpWptFB+hmFFSdiJRihNNUCVzeiNPbCSJXH+Kdia+YMB6TieNZeJq+SbIbCdb7Babpcl7JRnvpWptVhVCoxGJGBS6n06VOxOYmiyh1hJHk/6r9wmyib6xURN9iV+zjyHfWEuZ5R38XHippBWqW9OVyxLEXmejhSIOphpwRiW1o4Jg9yjBmnNTYC1ZjIROmjEpfHpQITThX+V9szGUXPSNADVhZHZtgELBY3pwnTRobHBchSIOphpwCCJBpfx+ch3mnRqYSh/eoamLwBuLkhuuYxwsmYqjMhyLicu12yHmdJe6Uh5hf+q5ZCoUYAmtmy6PW1iemnOX0k1nFnvOyrplN3oh1UxeeH/izRNdWH1Jt989iYJ3uvxEPYPVyH9YWH1Jt989uXbcsJs9KXffu+4zKHD9tu41jHByxWcyAWm1wIA12GtM0FM3s2POzDw8LWuH18Y/f2JO1eNFLWuH18Y/f2JO1eNFimx+26lJ7GPV2UBR7XD5qvU8b2mXsf83dWG+vDA5UFsXyT9BOFnx0i5MOFnx0i5MfFvA18NY1G6jz21vJoBVxSlhrYMswLBbSYTxumFVzoavwzVULYa0vrxN0HqArCdF1HZFpjhDpH6cseNIGYJptslOCm+7dkLr0G9HgIDp23XtffPq6HQsiAPg+XoVhkLim3mvitnToH9eiCvWVn1tiq7IIIOLhyfLxoD1iGu+boYohg7Bg4TZiLe0G4pEho63bYjaidar5I1sh+yuSoyTi8SjcJEZieam8I/Ijcycm5RXi4ifCm+7dkLrNVJYnN/CMFrumPfGcl4rmQa7tmJDl2OvGnmmlRGVgn4NmBiNl4PtmgSG/oIqlc2Q14eSmLiJ5H1SkqqYG5UHi/5QopWClthUjJ1KiuFSx785PtbZscbzOLjbktBLHoTZnMzcPP+9odN9EqjYBtg6CQTYIsZwQuq6C8D3SJy4et3nDfq8a9i1FtW8YbsdVOe4I7cLX1O5RdVuIqe9UKXBQVr9jqwdH8L/zq/iFv//jqhcPKb+QK/DPY3lCqzlQoLjQagoR5fgvLWZF/bp6rIKIL/niKQxTk/en6HfWSbdUam6M8L+a6qeKF//B/SyXn1eTO47ZB9eefHOWLt7lvanUzp7LOSGckFg8N22daZecdTjcHx+CfmyWVNfRrVvigxactGAfbNdt8tygcddMOFKbBZ/lub9ZGN9duk+a35fpOs0XjV8Ydz4QxOn3dXHR6umXO5hH+SgrfJXGN2fxeDGTOCHOPbXHUiCY/K5JduClNr7URKH/dPmWWyHVb/7ceqIGMekbjqKVuL/PjSna+ZiNySmB+4JMQqEOurwKkujLWJmW/+oP2m5Xk+BxGsfbKhikV33W1G8vqMIbO6qxaM3e56vnaOaa46thoPet4FcrlIjd9XhDVpHdr/kzWdj2ghbQWDM14Jj7X1ebvzueKNpmadfMp35mdVbeYwFnldVFo0TlpRQ3IZunlFRy4IMp/ZQy4IMp/ZQ5IavpbFWvG3J1xtjBmck1ZVr8Sr5jdPBriTWivq5URN9iV+z8RRVfgi2MhyLicu1Fy+Xh8fLFy+Xh8fL8F9NW7Gy7mc5XYqLo5Kfa43SfZRvbA3VYJCEaLX0upjcbL3Yeb2WiHBci6xQeNWBN85FZW6Jw8QPhtJdt9cTeXFd4dr2buN+QQsAfsmz9wmyib6xTQK9fcqytwB4iYmwxl960NV0mXYjcAjtq3t9e9jsCHzVog5IqH5+qQBLfIWKhOHX9IAJg+zj0o8ugyK6K4yxgrHD2IiYg17NzpN+hMuxVZ4vjs6RZ5zgio6ZGJoTiOKhraRBijORUJq8gGm0MpcFhtupeZ0Kgt+sG5UHi/5QHZRhfgJSdHakZbzjmXYjcAjtw4xVWXiaOooYWbOk2X9ZXAXDfXyqXTfML5L3YuJ4zZLKaC1uOo/MWYKPZpEsXE2DJIePWCWvZIMmWrC54ngSYAvXspN6c9pZOaMZnHtwiZ6RnPV1eKD2mFJ9uZvtnoFvwp+unTNnzKCblQqEfYa/qG5tiYSrqkNtdoMkqAtz7oFtqyxxA5jime2BuZrTm4V7K5RunJF+vJeHnhJ3QJAOnrR6FJQ/oLdy8pxsmZV/DZyolyaEJIgtphhvaoUapYN035FunhJajJjlmq5Zeos9pUtriYhdouh0bYz4n1l3H5BEoi5vVpPUobRlHY/uouVg/IqNpMVc8IGZrsVtc5ABzcREzY8lyDo++YodyGpMR4pQwxFGWFj7yBWAuG9c3KRTkBcQc3q11BpaaK6xmSZQaoO2L0ndn3++9zLjghjQ2A+lZ5WtWA3ncYmy0HRL2gVawYECvTFjaLGZZqW34p0VaTjcGZuTnkJimpdjoC1qt1JxbgBfC0naW1uhdZ3hbnBoe5NFbYZjdIm2bR1geX9kb7Fd1qU0jvSJ4J/ykbqKWJqUlH6KKZX0lg+Jh5CWmf+FQozem3+CQ4jLnf5+mYSYoFJ8hYESpJN6HX8dqMN4on3ArNl26H0YsVxzpH6cseNICIHNru9PbpYIn1te2AnZXcWRH1FWX8aEtwB4iYmwzAdLYO2eDASLcfmwcAVlZwOrDg3dh05Ikw40eG5Mlgq1lkZNzA7oa4pYlQc0opFaBA5eZd9mUQUhp0toewPQp/V2OAIYpqmD0wy4YE91LQHmojiQZwslXpeDaQAZnvqbAAAglZGo2AnZXcWRtwB4iYmwTQK9fcqyDASLcfmwzAdLYO2ecAVlZwOr",i:"AAABAAIAAQADAAIABAAFAAEABQADAAEAAwAGAAIABgAHAAIABQAIAAMACAAGAAMACQAKAAsACgAMAAsADQAOAAoADgAMAAoADwAQABEAEAASABEAEAATABQAEwAVABQAFgAXABgAGAATABYAGQAaABsAGgAUABsAHAAdAB4AHQAfAB4AIAAhACIAIQAjACIAJAAlACYAJQAnACYAGgASABQAEgAQABQAKAApACoAKQArACoAGwAsABkALAAtABkALgAvADAAMAAxAC4AMgAzADQANAA1ADIANgA3ADMAMwAyADYAOAA3ADkANwA2ADkAOgA4ADsAOAA5ADsAPAA9AD4APQA/AD4AQABBAEIAQQBDAEIAKQAoAAUAKAAIAAUABwAdAAIAHQAcAAIACQALAC0ACwAZAC0ADQARAA4AEQASAA4AGQALABoACwAMABoAEgAaAA4AGgAMAA4ARABFABsARQAsABsAGwAUAEQAFAAVAEQAOAA6AEYAOgBHAEYASABJAEoASQBDAEoASwBMAE0ATQBOAEsATwBQAFEAUABSAFEADwAWABMAEwAQAA8AUABPAB8ATwAeAB8AKwBLAE4ATgAqACsAUwBUAFUAVABWAFUAVwBYAFkAWABaAFkAWABXAFYAVwBVAFYAWwBcAF0AXQBeAF8AYABhAGIAYQBjAGIAZABlAGYAZQBnAGYAaABpAGoAaQBrAGoAbABtAGgAbQBpAGgAbgBvAHAAbwBxAHAAcgBzAHQAcwB1AHQAcABxAHQAcQByAHQAdgB3AHgAdwB5AHgAdgB6AHcAegB7AHcAfABzAH0AcwByAH0AfgB/AIAAfwCBAIAAbwBuAIIAbgCDAIIAhACFAIYAhQCHAIYAhACGAIgAhgCJAIgAaQCKAGsAigCLAGsAdQCMAHQAjACNAHQAdACNAHAAjQCOAHAAcACOAG4AjgCPAG4AgwBuAJAAbgCPAJAAaQBtAIoAbQCRAIoAkgCTAJQAkwCVAJQAlACWAJIAlgCXAJIAmACZAJoAmQCbAJoAmQCcAJsAnACdAJsAngCfAKAAnwChAKAAngCgAJoAoACYAJoAogCjAKQAowClAKQApgCkAKcApAClAKcAqACpAKoAqQCrAKoArACqAK0AqgCrAK0ArgCsAK8ArACtAK8AsACuALEArgCvALEAsgCzAKIAswCjAKIAhwCFAKEAhQCgAKEAnACZAIkAmQCIAIkAoACFAJgAhQCEAJgAmQCYAIgAmACEAIgAdgB4AJIAeACTAJIAkgCXAHYAlwB6AHYAgQB/ALQAfwC1ALQAcQC2AHIAtgB9AHIAtwC4ALkAuAC6ALkAbwCCALsAggC8ALsAagC9AGgAvQC+AGgAbABoAL8AaAC+AL8AcQBvALYAbwC7ALYAtAC1ALcAtQC4ALcAwADBAMIAwQDDAMIAwwDEAMIAxADFAMIAvgC9AMIAvQDAAMIAxQC/AMIAvwC+AMIAtAC2AIEAtgC7AIEAtgC0AH0AtAC3AH0AfQC3AHwAtwC5AHwAvACAALsAgACBALsAxgDHAMUAxwC/AMUAyADAAMkAwAC9AMkAygDLAMwAywDNAMwAzgDPAMoAzwDLAMoA0ADRANIA0QDTANIAygDMANQAzADVANQAygDUAM4A1ADWAM4A0QDQANcA0ADYANcA2QDaANsA2gDcANsA3QDeANkA3gDaANkA3wDgAOEA4ADiAOEA4wDYAOQA2ADlAOQA5gDnAOgA5wDpAOgA6gDrAOwA6wDtAOwA6gDsAO4A7ADvAO4A6ADwAOYA8ADhAOYA4QDwAN8A8ADxAN8A8gDzANIA8wD0ANIA0gD0ANAA9AD1ANAA2ADQAOUA0AD1AOUA9gDiAPcA4gD4APcA+QD6APsA+gD8APsA+wD9APkA/QD+APkA5wD/AOkA/wAAAekAzQDLAAEBywACAQEBAwEEAQEBBAHNAAEB8wAFAfQABQEGAfQA9AAGAfUABgEHAfUA9QAHAeUABwEIAeUA5QAIAeQACAEJAeQAywDPAAIBzwAKAQIB7QDrAAAB6wDpAAAB7wDxAO4A8QDwAO4A6QDrAOgA6wDqAOgA8ADoAO4A6ADqAO4A2QDbAPkA2wD6APkA/gDdAPkA3QDZAPkAAgELAQEBCwEMAQEBAQEMAQMBDAENAQMBBQEOAQYBDgEPAQYBDwEQAQYBEAEHAQYBEAERAQcBEQEIAQcBEQESAQgBEgEJAQgBCgETAQIBEwELAQIB4wAUAdgAFAHXANgA1wAVAdEAFQH3ANEAFgH7ABcB+wD8ABcBGAHyANMA8gDSANMA1ADVABkB1QAaARkBGwHWABkB1gDUABkBFgEZARwBGQEaARwBFwEbARYBGwEZARYBHQEeAR8BHgEVAR8B4AAgAeIAIAH4AOIA9wAVAfYAFQEeAfYA0wDRAPgA0QD3APgAGAHTACAB0wD4ACABFQHXAB8B1wAUAR8BIQEiARcBIgEbARcB4QDiAOYA4gD2AOYA+wAWAf0AFgEcAf0A/wDnAB0B5wAeAR0B5gD2AOcA9gAeAecAIwEkASUBJAEmASUBIwEnASQBJwEoASQBKQEqASsBKgEsASsBLQEuAS8BLgEwAS8BLQEvATEBLwEyATEBKgEpATMBKQE0ATMBNQEzATYBMwE3ATYBOAE5AToBOQE7AToBOgE8ATgBPAE9ATgBPgEqATUBKgEzATUBPgE/ASoBPwEsASoBNwFAATYBQAFBATYBQgFDAUQBQwFFAUQBRgFHAUgBRwFJAUgBRAFFAUoBRQFLAUoBMAEuAUEBLgE2AUEBMgE/ATEBPwE+ATEBNgEuATUBLgEtATUBPgE1ATEBNQEtATEBIwElATgBJQE5ATgBPQEnATgBJwEjATgBTAFNAU4BTQFPAU4BUAFRAUwBUQFNAUwBUgFTAVQBUwFVAVQBVgFXAVgBVwFZAVgBWgFbAVYBWwFXAVYBTwFcAU4BXAFdAU4BQgFEAV4BRAFfAV4BYAFCAWEBQgFeAWEBYgFjAWQBYwFlAWQBYgFkAWYBZAFnAWYBZgFnAUgBZwFoAUgBSAFoAUYBaAFpAUYBSgFqAUQBagFfAUQBawFsAW0BbAFuAW0BNAEpAW0BKQFvAW0BcAFxAXIBcQFzAXIBdAF1AXABdQFxAXABcgF2AXABdgF3AXABcAF3AXQBdwF4AXQBeQF6AXsBegFuAXsBbwEpAXwBKQErAXwBegE0AW4BNAFtAW4BbwF9AW0BfQFrAW0BfAF+AW8BfgF9AW8BbAF/AW4BfwF7AW4BgAFeAYEBXgFfAYEBYQFeAYIBXgGAAYIBgwFkAYQBZAFlAYQBhQFnAYMBZwFkAYMBhgFoAYUBaAFnAYUBhwFpAYYBaQFoAYYBgQFfAYgBXwFqAYgBdgE8AXcBPAE6AXcBOwF4AToBeAF3AToBegF5ATcBeQFAATcBegE3ATQBNwEzATQBiQGKAYsBigGMAYsBjQGOAYkBjgGKAYkBjwGQAZEBkAGSAZEBjwGTAZABkwGUAZABlQGWAZcBlgGYAZcBmQGaAZsBmgGcAZsBmQGbAZ0BmwGeAZ0BnwGgAaEBoAGiAaEBowGkAaUBpAGmAaUBpwGhAagBoQGpAagBqgGrAawBqwGtAawBrQGuAawBrgGvAawBsAGfAacBnwGhAacBsAGxAZ8BsQGyAZ8BqAGpAbMBqQG0AbMBtQG2AbcBtgG4AbcBmgGoAZwBqAGzAZwBngGxAZ0BsQGwAZ0BqAGaAacBmgGZAacBsAGnAZ0BpwGZAZ0BrAGPAaoBjwGRAaoBrAGvAY8BrwGTAY8BuQG6AbsBugG8AbsBvQGgAbIBoAGfAbIBvgGtAb8BrQGrAb8BwAHBAcIBwQHDAcIBrgGtAcQBrQG+AcQBqQHFAbQBxQHGAbQBoQGiAakBogHFAakBxwHIAckByAHKAckByQHKAcsBygHMAcsByQHNAccBzQHOAccBzwHQAdEB0AHSAdEB0wHUAdUB1AHWAdUB1QHXAdMB1wHYAdMB2QHaAdMB2gHUAdMB2wHcAd0B3AHeAd0B3wHgAeEB4AHiAeEBUAFMAeMBTAHkAeMB5QHjAeYB4wHkAeYB5wHoAekB6AHqAekB6gHrAewB6wHtAewB7gHkAU4B5AFMAU4BXQHvAU4B7wHuAU4BXQHwAfEB8AHyAfEB8wH0AVYB9AFaAVYBWAH1AVYB9QHzAVYBUgH2AVgB9gH1AVgBVAH3AVIB9wH2AVIB+AH5AfoB+QH7AfoB+wH8AfoB/AH9AfoB3wHhAf4B4QH/Af4BAAL+AQEC/gECAgECAwIEAt8BBALgAd8BBQIGAgcCBgIIAgcCCQIKAgsCCgIMAgsCDQIOAgkCDgIKAgkCDwIQAmcAEAJmAGcAEQISAmAAEgJhAGAAEwIUAg8CFAIQAg8CZQAVAmcAFQIWAmcAZwAWAg8CFgIRAg8CDwIRAhMCEQJgABMCWAAXAloAFwIYAloAGQIaAhsCGgIcAhsCGwJdABkCXQAdAhkCHgIfAhwCHwIbAhwCFAITAiACEwIhAiACYgAhAmAAIQITAmAAXQAbAlsAGwIfAlsANwA4ACICOABGACICFwA0ADMAMwAYABcAPgA/AFIAPwBRAFIAMwA3ABgANwAiAhgATAAwAC8ALwBNAEwAFQATACICEwAYACICRQBEAEcARABGAEcAIgJGABUARgBEABUAIwIkAiUCJAImAiUCJAJjACYCYwBhACYCJwIoAikCKAIqAikCKwIsAi0CLAIuAi0CLwIwAjECMAIyAjECKwIzAjQCMwI1AjQCNgI3AjgCNwI5AjgCNwI2AjoCNgI7AjoCPAI9Aj4CPQI/Aj4CPQI8AkACPAJBAkACQAJBAkICQQJDAkICKgJEAkUCRAJGAkUCRwJIAkkCSAJKAkkCSwJMAkcCTAJIAkcCTAJLAk0CSwJOAk0CTwJQAlECUAJSAlECUwJUAk8CVAJQAk8CLAIrAlUCKwI0AlUCVgJXAkYCVwJFAkYCWAIEAFkCBAABAFkCWgJZAgAAWQIBAAAAWwJcAl0CXAJeAl0CXwJgAmECYAJiAmECAABbAloCWwJdAloCYwJkAiQAZAIlACQAZQJmAmcCZgJoAmcCXAJpAl4CaQJqAl4CHQJrAmwCawJtAmwCbgJvAnACbwJxAnACcgJzAmACcwJiAmACdAJ1Au4BdQLkAe4BdgJ3AngCdwJ5AngCegLqAXsC6gHsAXsCfALpAXoC6QHqAXoCfQJ+An8CfgKAAn8CgQKCAvIBggLxAfIB9QGDAvMBgwKEAvMBhQKGAmQAhgJlAGQAhwKIAokCiAKKAokCiwKMAocCjAKIAocCjQKOAosCjgKMAosCjwKQApECkAKSApECkwKUApEClAKVApECkQKVAo8ClQKWAo8ClwKYApYCmAKPApYCmQKVApoClQKUApoCmwKWApkClgKVApkCnAKXApsClwKWApsCIwCdAiIAnQKeAiIAQQCfAkMAnwJKAEMAoAKhAiEAoQIjACEAQgBDAKICQwBJAKICagJpAnICaQJzAnICowKhAkgAoQJJAEgAoQKjAiMAowKdAiMAWQCkAqUCpAJZAFoApAJaAKYCWgAYAqYCFwJYAKcCWABWAKcCoQKgAkkAoAKiAkkAqAIiAKkCIgCeAqkCIAAiAKoCIgCoAqoCqwKlAjMCpQKkAjMCMwKkAjUCpAKmAjUCFQJlAKwCZQCGAqwCEgKtAmEArQImAmEArQKuAiYCrgIlAiYCEgIRAq8CEQIWAq8CrQISArACEgKvArACsAKxAq0CsQKuAq0CFQKyAhYCsgKvAhYCsAKvArMCrwKyArMCswK0ArACtAKxArACtQK2ArICtgKzArICtgK3ArMCtwK0ArMCuAINArkCDQIJArkCugK7ArwCuwK9ArwCvgK/AsACvwLBAsACwgK+AsMCvgLAAsMCxALFAsYCxQLHAsYCyALCAskCwgLDAskCvAK9AsoCvQLLAsoCzALNAr4CzQK/Ar4CvgLCAswCwgLOAswCzwLQAjkC0AI4AjkCvALRAroC0QLSAroCygLTArwC0wLRArwCMALUAjIC1ALVAjIC1gLXAtgC1wLZAtgC2ALZAtoC2QLbAtoC0QLcAtIC3ALdAtIC0wLeAtEC3gLcAtEC3wLgAtUC4AIyAtUC4ALfAuEC3wLiAuEC4wJfAOQCXwDjAmsC1wLlAtkC5QLmAtkC5wLbAuYC2wLZAuYC6ALpAuoC6QLrAuoC7ALtAu4C7QLvAu4C8ALvAvEC7wLtAvEC8gLzAvQC8wL1AvQCXgD2AvcC9gL4AvcC+QL6AuQC+gLjAuQC6QL5AusC+QLkAusC8gLcAvsC3ALeAvsC8AL8Au8C/AL9Au8C/gLuAv0C7gLvAv0C/QL/Av4C/wIAA/4C/AIBA/0CAQP/Av0CAgPeAQMD3gHcAQMDBAPWAQUD1gHUAQUDyAHHAQYDxwEHAwYD1gEEAwgDBAMJAwgDCgMLAwIDCwPeAQIDDAMNAw4DDQMPAw4DEAMRAxIDEQMTAxIDFAMVAxYDFQMXAxYDFgMDAhQDAwLfARQDGAPIARkDyAEGAxkD0AHPARoDzwEbAxoDHAPQAR0D0AEaAx0DHgMfAyADHwMhAyADGgMbAyIDGwMjAyIDHQMaAyQDGgMiAyQDDwMlAx4DJQMfAx4DDQMmAw8DJgMlAw8DJwMlAygDJQMmAygDEgMTAykDEwMqAykDEwMrAyoDKwMsAyoDEQMtAxMDLQMrAxMDLgMvAzADLwMxAzAD+wEvA/wBLwMuA/wBMgPKARgDygHIARgDygEyA8wBMgMzA8wBNAM1A5oCNQOZApoCNgObAjUDmwKZAjUDNwOcAjYDnAKbAjYDsgIVAjgDFQKsAjgDsgI4A7UCOAM5A7UCNwM2AzoDNgM7AzoDPAM9A9UBPQPXAdUB1QHWATwD1gEIAzwDfwI+A30CPgM/A30CQANBA38CQQM+A38CxQJCA8cCQgNDA8cCRANCA7kCQgPFArkCRQNEAwkCRAO5AgkCCQILAkUDCwJGA0UDRwNIA30CSAN+An0CSQNKA0sDSgNMA0sDTQPrAegB6wHqAegB6wFOA+0BTgNPA+0B7QFPA0kDTwNKA0kD7AHtAVAD7QFJA1ADAAIFAhQDBQIVAxQD/gH/AQIC/wFRAwIC/gEAAt8BAAIUA98BBQIAAgYCAAIBAgYCBwJSAwUCUgMVAwUCUwM/A1QDPwM+A1QDVQNDA1YDQwNCA1YDQgNEA1YDRANXA1YDRANFA1cDRQNYA1cDRQNGA1gDRgNZA1gDWgNbA1MDWwM/A1MDTwFNAVwDTQFdA1wDXgNVAV8DVQFTAV8DXwNTAWADUwFZAWADYANZAWEDWQFXAWEDYQNXAWIDVwFbAWIDXANjA08BYwNcAU8BZANlA7kBZQNmA7kBuQFmA7oBZgNnA7oBaANpA2oDaQNrA2oDawNsA2oDbANtA2oDbANuA20DbgNvA20DbgNwA28DcANxA28DcgNzA2QDcwNlA2QD6wFNA04DTQN0A04DMQB1A3YDdgMuADEANQB3A3gDeAMyADUAMgB4A3kDeQM2ADIANgB5A3oDegM5ADYAegN7AzkAewM7ADkAfAN9AzwAfQM9ADwAQQBAAH4DQAB/A34DfQOAAz0AgANhAj0AfgOBA0EAgQOfAkEAgAOCA2ECggNfAmECgwOEA4UDhAN2AoUDhgNzA4cDcwOIA4cDiQOEA2UDhANmA2UDdwJ2AokDdgKEA4kDdwKJA4oDiQOGA4oDiQNlA4YDZQNzA4YDiwOMA24DjANwA24D+wH5AYsD+QGMA4sDjQOOA48DjgMxA48DaQONA2sDjQOPA2sDbANrA5ADawOPA5ADkAOPAy8DjwMxAy8DkAOLA2wDiwNuA2wDLwP7AZAD+wGLA5ADkQOMAZIDjAGKAZIDkgOKAZMDigGOAZMDkgOUA5EDlAOVA5EDkwOWA5IDlgOUA5IDlwOYA5kDmAOaA5kDlwOZA5sDmQOcA5sDnQOeA58DngOgA58DnQO2AZ4DtgGYAZ4DnwOhA50DoQOiA50DtgGdA7gBnQOiA7gBtgG1AZgBtQGXAZgBnwOgA6MDoAOkA6MDpQOmA5UDpgORA5UDowOnA58DpwOhA58DwAGlAcEBpQGmAcEBowGoA6QBqAOpA6QBqgOrA5wDqwObA5wDrANkA7sBZAO5AbsBaANqA60DagOuA60DrgNqA68DagNtA68DbQNvA68DbwOwA68DbwNxA7ADcQOxA7ADsgNyA6wDcgNkA6wDXQOzA4ABswOCAYABtANrAbUDawF9AbUDtQN9AbYDfQF+AbYDcQG3A3MBtwO4A3MBdQG5A3EBuQO3A3EBugNsAbQDbAFrAbQDfwFsAbsDbAG6A7sDtQO8A7QDvAO9A7QDvAO1A74DtQO2A74DQwG4A0UBuAO3A0UBRQG3A0sBtwO5A0sBvQNJAbQDSQG6A7QDugNJAbsDSQFHAbsDvQNmAUkBZgFIAUkBvgNjAbwDYwFiAbwDvANiAb0DYgFmAb0DvwOlAMADpQCjAMADpwClAMEDpQC/A8EDwgOrAMMDqwCpAMMDrQCrAMQDqwDCA8QDrwCtAMUDrQDEA8UDxQPGA68AxgOxAK8AwAOjAMcDowCzAMcDpAHIA6YByAPJA6YByAOkAcoDpAGpA8oDiQGLAZcDiwGYA5cDiQGXA40BlwObA40ByQOWAaYBlgHBAaYByQOeA5YBngOYAZYBoAPIA6QDyAPKA6QDyAOgA8kDoAOeA8kDwQGWAcMBlgGVAcMBigCiAIsAogCkAIsAiwCkAMsDpACmAMsDjACoAI0AqACqAI0AjQCqAI4AqgCsAI4ArACuAI4ArgCPAI4ArgCwAI8AsACQAI8AkQCyAIoAsgCiAIoAmgCbALUAmwC4ALUAwQCWAMMAlgCUAMMAlACVAMMAlQDEAMMAmwCdALgAnQC6ALgAnwCeAH4AngB/AH4AngCaAH8AmgC1AH8AzAMMAc0DDAELAc0DzgMNAcwDDQEMAcwDzwMPAdADDwEOAdAD0QMQAc8DEAEPAc8D0gMRAdEDEQEQAdED0wMSAdIDEgERAdIDzQMLAdQDCwETAdQD2wHdAcAC3QHDAsACwALBAtsBwQLVA9sBKwMtA7oCLQO7AroCLAMrA9ICKwO6AtIC3QLWA9IC1gMsA9ICKgMsA9cDLAPWA9cD3QHeAdgD3gELA9gD2QPaA9sD2gPcA9sD2wPcA90D3APeA90D3QPeA98D3gPgA98D3wPgA+ED4APiA+ED4wPkA+UD5APmA+UD5wPjA+gD4wPlA+gD6QPqA+gD6gPnA+gD6wPsA+0D7APuA+0D7wPwA/ED8APyA/ED8wP0A/UD9AP2A/UD9wPcA/gD3APaA/gD+QPeA/cD3gPcA/cD+gPgA/kD4APeA/kD+wPiA/oD4gPgA/oD5APjA/wD4wP9A/wD/QPjA/4D4wPnA/4D/gPnA/8D5wPqA/8D4gP7A+oD+wP/A+oD7AMABO4DAAQBBO4D8APvAwIE7wMDBAIE9APzAwQE8wMFBAQE8wMGBAUEBgQHBAUECAQJBAoECQQLBAoEDAQjAg0EIwIlAg0E+AMMBPcDDAQNBPcDDQQlAg4EJQKuAg4E9wMNBPkDDQQOBPkD+QMOBPoDDgQPBPoDDgSuAg8ErgKxAg8E+gMPBPsDDwQQBPsDDwSxAhAEsQK0AhAEIAMhAxEEIQMSBBEEEQQSBP0DEgT8A/0DEwQUBBEEFAQgAxEE/gMTBP0DEwQRBP0DFQS3AhMEtwIUBBME/wMVBP4DFQQTBP4DtwIVBLQCFQQQBLQC+wMQBP8DEAQVBP8D+AIWBPcCFgQXBPcCAAQXBAEEFwQWBAEE6ALqAhgE6gIZBBgEGAQZBAMEGQQCBAME7QLsAhoE7AIbBBoEGgQbBAUEGwQEBAUE8QLtAhwE7QIaBBwEBQQHBBoEBwQcBBoE9AL1Ah0E9QIeBB0ECQQIBB8ECAQgBB8EHwQgBNYDIATXA9YDIQQiBCMEIgQkBCMEJQR2A3UDdQMmBCUEfgN/AyQEfwMjBCQEJAQnBH4DJwSBA34DKAQpBCoEKQQrBCoEKgQrBCwEKwQtBCwELAQtBC4ELQQvBC4ELgQvBDAELwQxBDAEMgQzBDQEMwQ1BDQELAR5A3gDeAMqBCwELgR6A3kDeQMsBC4EMAR7A3oDegMuBDAENAR9A3wDfAMyBDQEKgR4A3cDdwMoBCoEKQQ2BCsENgQ3BCsEKwQ3BC0ENwQ4BC0ELQQ4BC8EOAQ5BC8ELwQ5BDEEOQQ6BDEEMwQ7BDUEOwQ8BDUEPQRUACEEVAAiBCEEIgQ+BCQEPgQnBCQEPwRABEEEQARCBEEEQwREBCkERAQ2BCkEJQQmBEUEJgRGBEUEwgLIAs4CyAJHBM4CSARJBEoESQRLBEoESgRLBEwESwRNBEwETgRPBFAETwRRBFAEUARRBFIEUQRTBFIEUgRTBFQEUwRVBFQEVgRXBFgEVwRZBFgEOAJIBDYCSARKBDYCTAQ7AkoEOwI2AkoEPgJOBDwCTgRQBDwCUgRBAlAEQQI8AlAEVARDAlIEQwJBAlIEWARZBCkCWQQnAikCVwJWBEUCVgRYBEUCSAQ4AloEOALQAloE1wLWAlsE1gJcBFsEKgJFAikCRQJYBCkC4QJdBOACXQReBOACSQIvAkcCLwIxAkcCUQJcBE8CXATWAk8CTwLWAlMC1gLYAlMCVQJfBCwCXwRgBCwCLAJgBC4CYARhBC4CMQIyAl4EMgLgAl4EXQROAl4ETgJLAl4EYARiBGEEYgRjBGEEZARWAmIEVgJGAmIEXwRkBGAEZARiBGAESAJAAkoCQAJCAkoCTAI9AkgCPQJAAkgCTQI/AkwCPwI9AkwCUAI3AlICNwI6AlICNwJQAjkCUAJUAjkCRAJjBEYCYwRiBEYCgQJlBIICZQRmBIICzQLLAr8CywK9Ar8C9AHzAWcE8wGEAmcEPgQiBFMAIgRUAFMAaARpBGsAaQRqAGsAyABqBMAAagTBAMAAvwDHAGwAxwBrBGwAlgBsBJcAbARtBJcAbABrBG0AawRuBG0AywNoBIsAaARrAIsAbQBuBJEAbgRvBJEAcARxBJMAcQSVAJMAlwBtBHoAbQR7AHoAcgRzBLIAcwSzALIAeQBwBHgAcASTAHgAaQTJAGoAyQC9AGoAxAB0BMUAdATGAMUABAF1BM0AdQTMAM0A/QB2BP4AdgR3BP4AzAB1BNUAdQR4BNUAeQR6BNYAegTOANYAegR7BM4AewTPAM4AfAR9BPoAfQT8APoA/gB3BN0AdwTeAN0AzwB7BAoBewR+BAoB3AB8BNsAfAT6ANsAfgR/BAoBfwQTAQoB1QB4BBoBeASABBoB/AB9BBcBfQQhARcBgASBBBoBgQQcARoBIgF5BBsBeQTWABsBHAGBBP0AgQR2BP0AggSDBDsBgwR4ATsBPAGEBD0BhASFBD0BdQGGBLkDhgSHBLkDQwFCAYgEQgFgAYgEiQSCBDkBggQ7ATkBPQGFBCcBhQQoAScBJgGJBCUBiQQ5ASUBXAGKBF0BigTwAV0BiwSMBEoBjARqAUoBjQSOBHMBjgRyAXMBgwSPBHgBjwR0AXgBjgSQBHIBkAR2AXIBjwSGBHQBhgR1AXQBdgGQBDwBkASEBDwBiwGMAZEEjAGSBJEErgGTBK8BkwSUBK8BqwOVBJsDlQSNAZsDlgSXBKoBlwSrAaoBrwGUBJMBlASUAZMBmASZBI4BmQSTA44BkgGWBJEBlgSqAZEBcgOyA5oEsgObBJoEnASdBJgDnQSaA5gDvwGrAZ4EqwGXBJ4ExAGfBK4BnwSTBK4BKAMmA6AEJgPZAaAEGwPNASMDzQGhBCMDzwHOARsDzgHNARsDywGhBMkBoQTNAckB0QGiBM8BogTOAc8BxwHOAQcDzgGiBAcDJgMNA9kBDQPaAdkB0wHYAdkB2AGgBNkBowTVAxED1QMtAxED1QOjBNsBowTcAdsBhQN2AqQEdgKlBKQESwOmBEkDpgRQA0kDRgRABI4CQASnBI4CUwLYAqgE2ALaAqgEqASpBFMCqQRUAlMCNQQ8BKoEPASrBKoErARAA4ACQAN/AoAC8QGCAq0EggKuBK0ErwSwBLEEkwKRApICRQRGBI0CRgSOAo0CkAKyBJICswS0BLEEmAKXAoUClwKGAoUCrAKGApwChgKXApwCtQSqBLYEqgSrBLYE8wK3BPUCtwS4BPUCuQS6BLsEugQeBLsE8wK8BLcEvQT8AvACvgSjBBADowQRAxADAwPcAb4E3AGjBL4EvwTaAQwD2gENAwwDBQPUAb8E1AHaAb8EnAI3A6wCNwM4A6wCOAM3AzkDNwM6AzkDRwNbA8AEWwPBBMAEVAM+A8IEPgNBA8IEwQRbA8MEWwNaA8MEXQNNAbMDTQFRAbMDigRcAcQEXAFjA8QEmgSIA3IDiANzA3IDhAODA2YDgwNnA2YDigOGA8UEhgOHA8UEpgOSBJEDkgSMAZEDmQTGBJMDxgSWA5MDYwOIAcQEiAHHBMQEhwTIBLkDyARLAbkDyQSNBLgDjQRzAbgDiATJBEMByQS4A0MByASLBEsBiwRKAUsBkQScBIsBnASYA4sBlQSYBI0BmASOAY0BbwRyBJEAcgSyAJEAxACVAHQElQBxBHQEwQBqBJYAagRsBJYAwQK7AtUDuwItA9UDygTLBMwEywTNBMwEywTKBLkEygS6BLkE9QK4BB4EuAS7BB4ENgRkADcEZABmADcENwRmADgEZgAQAjgEOAQQAjkEEAIUAjkEOQQUAjoEFAIgAjoEOwQeAjwEHgIcAjwEtgSrBM4EqwQaAs4EpwJWAD0EVgBUAD0EcQKMAqcEjAKOAqcERASFAjYEhQJkADYEzwRJBFoEzwTQBEkEqQTPAlQCzwI5AlQCvwK9AsECvQK7AsEC0QTSBJAC0gSyBJACRARDBNEEQwTSBNEE0QSYAkQEmAKFAkQEkAKPAtEEjwKYAtEE0wRNBNQETQRLBNQESQTQBEsE0ATUBEsE1QRTBNYEUwRRBNYETwTXBFEE1wTWBFEE2ARVBNUEVQRTBNUE2QQoAtoEKAInAtoE2gQnAtsEJwJZBNsE2gR5AtkEeQLcBNkE1QR7AtgEewLdBNgE1gR6AtUEegJ7AtUE1wR8AtYEfAJ6AtYEVwTeBFkE3gTbBFkE2wR4AtoEeAJ5AtoE0ASAAtQEgAJ+AtQE1AR+AtMEfgJIA9ME3gTfBNsE3wR4AtsEZwSEAuAEhALhBOAE4gTEAuMExALGAuMEzwSsBNAErASAAtAEyQLiBMgC4gTjBMgCBAIDAuQEAwLlBOQE5ATlBAkD5QQIAwkDDgINAuYEDQLnBOYE5gTnBAoD5wQLAwoD/AHoBP0B6ATpBP0BMwMyA+oEMgPrBOoE6wQuA+oELgMwA+oE6AT8AesE/AEuA+sEGAPoBDID6ATrBDID7ATtBDwD7QQ9AzwDPAMIA+wECAPlBOwEAwIWA+UEFgPsBOUE7gTnBLgC5wQNArgC4QSEAu8EhAKDAu8E6AQYA+kEGAMZA+kEFgMXA+wEFwPtBOwEmgLhBDQD4QTvBDQD2AMLA+4ECwPnBO4E4AThBJQC4QSaApQCRwTIAuMESQRIBFoElAKTAuAEsARmBGUE7wHwBO4B8AR0Au4B8ATxBHQC8QTyBHQC8QTwBPME8AT0BPME8gT1BHQC9QR1AnQC9gT3BPgE9wT5BPgE+gT7BPwE+wT9BPwE/AT9BP4E/QT/BP4E8gQABfUEAAUBBfUEAgX2BAMF9gT4BAMFrwQEBWYEZgSwBK8EZgQFBYICBQWuBIICLQKrAisCqwIzAisCBgUCBQcFAgUDBQcFAQUABfoEAAX7BPoECAX+BAkF/gT/BAkFiQKKAvYEigL3BPYECgULBQYFBgUJBQoF+wTxBP0E8QTzBP0E8QT7BPIE+wQABfIEBgULBYkCCwUMBYkC+QT3BA0F9wSKAg0FDgUPBWUCDwVmAmUCJgAnAFgCJwAEAFgCZwJoAmMCaAJkAmMCQQRCBBAFQgQRBRAFzgQaAhIFGgIZAhIFEgUZAmwCGQIdAmwCDwUxAGYCMQAwAGYCJQArACcAKwApACcAHAAeAFsCHgBcAlsCJwApAAQAKQAFAAQAYgI/AGECPwA9AGECAgAcAAAAHABbAgAAPAQcAqsEHAIaAqsEZgIwAGgCMABMAGgCUQBzAk8AcwJpAk8AgAN9AxMFfQM0BBMFTwBpAh4AaQJcAh4AJQBkAisAZAJLACsAXQBfAB0CXwBrAh0CJgRCBEYEQgRABEYEbwKIAnECiAKMAnECPwBiAlEAYgJzAlEATABLAGgCSwBkAmgC1AJtAtUCbQJrAtUC1QJrAt8CawLjAt8C9ALdAvIC3QLcAvICFAUVBR0EFQUWBR0E+gLiAuMC4gLfAuMC+wK8BPICvATzAvIC/wLlAgAD5QIXBQAD5QL/AuYC/wIBA+YC5gIBA+cCAQMYBecCDwUOBREFDgUQBREFDwURBXUDdQMxAA8FFQUUBRkFFAUaBRkFygQaBboEGgUUBboE3QL0AhYF9AIdBBYFugQUBR4EFAUdBB4EJgR1AxEFEQVCBCYENAQ1BBMFNQSqBBMFggOAAxsFgAMTBRsFGwUTBbUEEwWqBLUEHAWnBD8EpwRABD8E/AK9BAEDvQQYBQEDcAJxAhwFcQKnBBwFDQWKAm8CigKIAm8CWwQXBdcCFwXlAtcCXANdA4EBXQOAAYEBhAFeA4MBXgNfA4MBgwFfA4UBXwNgA4UBhQFgA4YBYANhA4YBhgFhA4cBYQNiA4cBYwNcA4gBXAOBAYgBuwGVA6wDlQOUA6wDpQOVA7wBlQO7AbwBrgOhA60DoQOnA60DrwOiA64DogOhA64DuAGiA7ADogOvA7ADsQO3AbADtwG4AbADsgOWA5sElgPGBJsElAOWA6wDlgOyA6wDwANPA78DTwNOA78DTgN0A78DdAPBA78DCAIGAsMDBgLCA8MDBgIBAsIDAQLEA8IDAQICAsQDAgLFA8QDAgJRA8UDUQPGA8UDHQVMA8cDTANKA8cDxwNKA8ADSgNPA8ADzQNTA8wDUwNUA8wDzANUA84DVAPCBM4D0ANVA88DVQNWA88DVgNXA88DVwPRA88DVwNYA9EDWAPSA9EDWANZA9IDWQPTA9IDwwRaAx4FWgPUAx4F1ANaA80DWgNTA80DiAFqAccEagGMBMcExwOzAB0FswBzBB0F1AMTAR4FEwF/BB4FHQMUBBwDFAS3AhwD7wFdAa0EXQHxAa0E9AQfBfMEHwUgBfME/QTzBP8E8wQgBf8ECgUJBSAFCQX/BCAFCAUJBQcFCQUGBQcFRwIxAksCMQJeBEsCXgBdAFwAXAD2Al4AxAGaA58EmgOdBJ8ExAG+AZoDvgGZA5oDvwGcA74BnAOZA74BngSqA78BqgOcA78BxQHAAcYBwAHCAcYBpQHAAaIBwAHFAaIBoAGjAaIBowGlAaIBowGgAagDoAG9AagDtwK2AhwDtgIhBRwDIAMUBCQDFAQdAyQD1wMiBSoDIgUpAyoD3QHYA8MC2APJAsMC4gTJAu4EyQLYA+4EuALEAu4ExALiBO4ExAK4AsUCuAK5AsUCXwBeAOQCXgDrAuQCXgD3AusC9wLqAusC9wIXBOoCFwQZBOoCAgQZBAAEGQQXBAAEAgQABPADAATsA/AD8APsA/ID7APrA/IDWAFZAVIBWQFTAVIBgwL1ASMF9QH2ASMF7wSDAiQFgwIjBSQFJAUlBe8EJQU0A+8ENQM0AyYFNAMlBSYFJgU7AzUDOwM2AzUD0gHQASEF0AEcAyEFdQInBeQBJwXmAeQBfQI/A0cDPwNbA0cD3wSlBHgCpQR2AngCigPcBHcC3AR5AncCdQL1BCcF9QQoBScF9QQBBSgFAQUpBSgFKgUpBfoEKQUBBfoEUAPdBOwB3QR7AuwBKwUqBfwEKgX6BPwELAUrBf4EKwX8BP4ELQUsBQgFLAX+BAgFLgUtBQcFLQUIBQcFBwUDBS4FAwUvBS4FAwX4BC8F+AQwBS8F+AT5BDAF+QQxBTAFMQX5BDIF+QQNBTIFbwJuAg0FbgIyBQ0FKQQoBEMEKAQzBUMENAXSBDMF0gRDBDMF0gQ0BbIEjQKLArMEhwK0BIsCtASzBIsCrwQMBQQFDAULBQQFCgUgBR8FHwU1BQoFrQT0BO8B9ATwBO8BrQSuBPQErgQfBfQENQUfBQUFHwWuBAUFNQUEBQsFCwUKBTUFZgQEBQUFBAU1BQUFtASHAgwFhwKJAgwFDAWvBLQErwSxBLQEiQL2BAYF9gQCBQYFJQMnAx8DJwMiBR8D1wMhAyIFIQMfAyIFIQPXAxIE1wMgBBIEEgQgBPwDIAQIBPwDCgTkAwgE5AP8AwgE5AMKBOYDCgQ2BeYDDgMPAzcFDwMeAzcFIAMkAx4DJAM3BR4DFgUfBN0CHwTWA90CFQUJBBYFCQQfBBYFCQQVBQsEFQUZBQsE4QPiA+kD4gPqA+kD9QM4BfMDOAUGBPMDOQU2BQsENgUKBAsEOgU7BRoFOwUZBRoFzAQ6BcoEOgUaBcoEOwU5BRkFOQULBBkFPAU9BT4FPQU/BT4FPgU/BUAFPwVBBUAFQAVBBUIFQgVBBUMFQwVBBUQFQQVFBUQFRAVFBUYFRQVHBUYFRgVHBUgFSAVHBUkFRwVKBUkFSQVKBUsFSwVKBUwFTAVKBU0FSgVOBU0FTQVOBU8F9gH3AfoB9wH4AfoB+gH9AfYB/QEjBfYB/QHpBCMF6QQkBSMF4gHgAY4D4AExA44DBAIwA+ABMAMxA+ABMAMEAuoEBALkBOoEDAIKAlIDCgIVA1IDDgIXAwoCFwMVAwoCFwMOAu0EDgLmBO0EigPFBOYBxQTlAeYB5gEnBYoDJwXcBIoDJwUoBdwEKAXZBNwEKAUpBdkEKQUoAtkEpASlBKYEpQRQA6YE3QRQA98EUAOlBN8E2ATdBN4E3QTfBN4EVQTYBFcE2ATeBFcERwPABOkBwATnAekBSANHA3wCRwPpAXwC0wRIA9cESAN8AtcETQTTBE8E0wTXBE8ECQMzA+QEMwPqBOQEBAPMAQkDzAEzAwkDCgM9A+YEPQPtBOYEAgPXAQoD1wE9AwoD6QQZAyQFGQMlBSQFGQMGAyUFBgMmBSUFBgMHAyYFBwM7AyYFBwOiBDsDogQ6AzsDOQM6A9EBOgOiBNEB0QHSATkD0gG1AjkDtgK1AiEFtQLSASEFBQPLAQQDywHMAQQDoQTLAb8EywEFA78EIwOhBAwDoQS/BAwDIgMjAw4DIwMMAw4DJAMiAzcFIgMOAzcFAwPYAQID2AHXAQIDvgSgBAMDoATYAQMDoAS+BCgDvgQQAygDEgMnAxADJwMoAxADIgUnAykDJwMSAykDTARNBE4ETQRPBE4EOwJMBD4CTAROBD4CPgI/AjsCPwI6AjsCUgI6Ak0COgI/Ak0CTQJOAlICTgJRAlICXARRAl0EUQJOAl0EWwRcBOECXARdBOEC4QLiAlsE4gIXBVsEAAMXBfoCFwXiAvoC/gIAA/kCAAP6AvkC7gL+AukC/gL5AukC7gLpAuwC6QLoAuwCGAQbBOgCGwTsAugCGwQYBAQEGAQDBAQE7wP0AwME9AMEBAME9APvA/YD7wPxA/YDRAIqAisFKgIqBSsFYwREAiwFRAIrBSwFYQRjBC0FYwQsBS0FLgJhBC4FYQQtBS4FLgUvBS4CLwUtAi4CLwUwBS0CMAWrAi0CMAUxBasCMQWlAqsCMgVZADEFWQClAjEFbgJXADIFVwBZADIFcAJVAG4CVQBXAG4CHAVTAHACUwBVAHACPwQ+BBwFPgRTABwFQQQnBD8EJwQ+BD8EJwRBBIEDQQQQBYEDDgWfAhAFnwKBAxAFZQJKAA4FSgCfAg4FSgBlAkgAZQJnAkgASABnAqMCZwJjAqMCJACdAmMCnQKjAmMCJgCeAiQAngKdAiQAngImAKkCJgBYAqkCqAKpAlkCqQJYAlkCqgKoAloCqAJZAloCWgJdAqoCXQIgAKoCXQJeAiAAXgIhACAAXgJqAiEAagKgAiEAcgKiAmoCogKgAmoCYAJCAHICQgCiAnICQgBgAkAAYAJfAkAAggN/A18CfwNAAF8CzgSnArYEpwI9BLYEbAJtAhgCbQKmAhgCMAIvAjQCLwJVAjQCVARVBFYEVQRXBFYEQwJUBFcCVARWBFcCQgJDAlYCQwJXAlYCSgJCAmQEQgJWAmQESQJKAl8ESgJkBF8ELwJJAlUCSQJfBFUCNAI1AjACNQLUAjACbQLUAqYC1AI1AqYCFwISBRgCEgVsAhgCpwLOBBcCzgQSBRcCIQS1BD0EtQS2BD0EIwQbBSEEGwW1BCEEfwOCAyMEggMbBSMEKQUqBSgCKgUqAigC",min:[-.36657,-1.18501,-1.05165],max:[3.00902,1.16681,1.05957],reach:[2.77671,-.88855,.13884]},R:{p:"vJI7HBb7mpSVIYD+D468I5r7So/nKNb+3YqWK5330otxMQP67ZCILv//U5ZfJx3/OI0INkX7U5ZfJx3/HJeXK7D+7ZCILv//CJNaNND+OI0INkX7Bo9TOYH7v45BQQ3rRI28PKrzXZI8QEfsF5CDPKT07Zd7Ofztq5QKROHjYZrJPI/l4JDIRG3iZZcSSAjbQJOYSOjYFJr0LPT3HpzjLkHvn5XkNnf2ZprOHcn3IJ4eH9nu4ZqTJS34j51tJ1rvkJFlFu7tKI5wGhXsu5P0FNbmX496GejkAIoqLAzmr4mqKQfuxonwNavniIkYMT3wRI28PKrzv45BQQ3rtYr/N0zyhIv+PTHpj51tJ1rv4ZqTJS34wpgjVADGFpLdR7XM1ZWMTNvPV5W+TODC1J1iVb7I1ZWMTNvPD5qFTKfRwpgjVADG6qJVUGHK7p7rRvvSLaNYPevTPaczR8XKFqXLNejTZKkwPzPKZKkwPzPKFqXLNejTF6qvNuzIxaWuLRHTaaGxJd+/Lp0wHr/JWJxEKAi+bJg1IsjHop6AMlzmFKDlKnPmeaG6N3HdEKM0MBzd2JBFJn/RPZQ/KR7H8JTUHQDSAY20QUrgQJOYSOjYUo+YRFDW4JDIRG3i5KDKIqjlb6NUJ7LbFKDlKnPmEKM0MBzdCKKlN2OdDaPmOJKWUqlnM9Gabau8NGKT06OtOkqQz6NmPVGK6K2qN9yKca4YPEKDOdUscgqKm9TMYeOA09b/eMp/JtDCXA1u8tYjcUNx8s96hnOSOdUscgqK8tI7jfuJ09b/eMp/baZIh1WlG7AhibGnaalYkkKeKrRqkvGf4TXwNjE/UTcRN242JT31NQlB8z5ENvE3tzS1QCxF9jt0QKRHhDzMW25DJT4eXjM6hjXYW6NAATdTXRg4Qjh8U5wwpz8IUwMyezh+Qr0vAkA5QksxGRbGdkQrIRbbe5cwbhb1h5EowBYNiF4wURikdtolpRlRgbkifzJMRVouxzIRVkUv/SYSbaE8pCqJXDFASipMd3k3yizDZo07lDQNUKpFzjsJUDdIyBvMjaMobhb1h5EoyRofjoQuwBYNiF4wBB2RiAkkpRlRgbkil0S/NFtDf0ZNNP45gUf5P2Yz6ka3T540QUVTXMU8s0NQWexFH0M+TfVKFkNLQFdKRhnHbEEupR7OZPMwvxncdHk0FR8/bTI3ZyGfZkMpBxyrbtkmSCGViScr4iZ5gsYtBCEhg5Ml5yb+eowmex7yd9ghdSS+bj0ktiScgbA0CR9miYMxoyHbeuE4IxuXglg21U1EJ8JHiE+1Jzg9hFd3F3pMclibGiBBm08MM6A3O1diJTs8m08MM6A31U5fOTs6O1diJTs8TVUdLEc+dEwLRNtBblLyM5VFGUtORmNKUVHGOL1N5kqbP+1OQ1KsMd1Su0uyM+ROclTAJJ1TnC4VZ74zYCwWeDMwyjGNXoY2GC+wXcQs+S39T4crJCxwbhMpwSnDYAYoNzDCXYw+3S6SUVhD9jCOOeY0ny+kOCk9oi4eQrZCriteR98w0ykjRtQ47CYSW70sWiT2Wyg0jyQZYmc6UiklTmQ/pCqJXDFA3S6SUVhD+S39T4crfzJMRVou1FS9LzUgQlfrLo4Y2VmhLXkiPVzKLP4aXlPyOVwlHlguOPonclf2ULwZ8ViiSEYUF1TJU5YXaFXMSi4SRlCyM+wc/lJAMxgV9U4JPqQiilEqUwMe71RRUDEhaD8kafIG0D7GbdUKdz+tdzAEHz/hd74KdUFXaPwCzUIjcAAAIEzYYNcDAk52a8cG3E81VtQHzVHhYucKi1OMR5Ml/FfyRmIooFkhUIojOk0ocgsMKEkKeTwIrUqMcz8R/0Vpeb8NEkTpfegDdz+tdzAEY0LCfgkKHz/hd74K0EVsdmwAzUIjcAAAckkGcqgDjkcEadEAQFkXOjkT8V36OJMVeF1gSB0X/lvVUJYc61DhaUgQc1KvW68UdlMRVJ4PZkHAYf8J70RkWrQN6UA1adgOfERkYvwS5kcYWUYHWkRzYToEqEZ7bdQUbUK+dF0QoWHKKMYeol9/KGImHmNcNQYZ8V36OJMVHmNcNQYZqmLkQzIa5WDnSZcglV6DSD0oQV2yQUYsX107Nd4rt2cQGqwsymk9GL4kKmm7J24eKmm7J24eC2ghNIYfGWatOH0mYWSSOFQudWMGM24yumQMJ2Uye085Ss4ioE/pWtsa7EipUHARQkg2WeUXJVXBPcsQu0y9PlsYsk+QPnAQcUsiRzUeoku3TncLlkpTZF0ZxUxEUxEfqE13aUcW11JySAYNlkpTZF0ZxUxEUxEfDhqLAfWZzxmcB7+e+RMdC6+XghabEbmeMhqlADKUpRbYBp2QCShPHdaNuilQEKCMzSHeGJKOaSNzDP2M3BVdGXiV+RMdC6+X1xY4GoGbghabEbmeGBd0E8KPpRbYBp2QPyEpIWmVGiftJQOVLhyIHUuVWxxfHVOcSCGkIX2cASAAAJyaKiUzAlibyh6vCcKgDyQPDIehByVhAt+Snh+/APOSfxwFFmePhh38CSCN/SGpGXOiWRw/FsehO0rXGjaOSkuRGZmYQkSBFbOPFkUfFKaZYkb9My6ip0OvPtObXkBFL8qiuj0uOsKbyUkfIxWhrEMIHtGhsWRzMgWH42h9L4OSFmEcLh6KtmOjK9CUx2DCQumDNV3dPQeFRV8EVmaFx2DCQumDaFqvT3WGNV3dPQeFFGMGYX2YPWC7YT2OgVy4WSOZSFqRWiqPGGeUUrGfn2ChSkegmmM7OPWe+2qQPq+dh08UHmGN3lBIHG6Y+UY6J/yIH0xVKziI1kMWNseK0kjiOveJ+UY6J/yIH0xVKziIrUJCPx6Sl0dNRIiRz0gwRJ+b2kthOLGhbk+zJtigJTKALQWUtSxAKbeUvDLzLGGcAi11KJOczC1sIFmNqTFeB+qaUTHpB/GRmTjWCbaaEDj8CmeROTD4EUWiEDfVFHqiXiv9BL2SjCuZBNCaMSp/Dz6iOigLHq+iKy7eIH+iRSeMJQOdjS/CE2KMXDOMJLGMyDXFFuuLeTR4JKWiu1WbIheMaVcxIG6X6FFpMRiHnE5MQSeJ6FFpMRiHZ01ySwCRP0+sSRSbkFIoPSChHFZbK2+gXSmlMKVsdClMM7didTB9MKNsZTA8MwRjcShrO+N0yy/GOaN1tQF0ZgNhRwJXbBtmAACAd4hd4gFYedtl1AIeZiVbUQIFcOlWuScaTM11si5mS8J2fCedWPRvEi6QWd9whwSOgMtcAACAd4hdbAQIgZpj4gFYedtlpAX3ebxWUQIFcOlWYhCBbhFZuxC3dwpgHRekY0lbHhehbHBirByvV99dgByoYPJk4SFyUsJegSFGWxpmewtcfO9dDAp3fOllmA+MeM1n0QbpZkJpeQYtXAhjmAsZYkNrBQviV5BkeAxDWWZbiAe/Xhdb7AotdNNXPwntaE5V+w5eY3JWyAdAdiJrUw3Jbw1tADdtRix4+z9eOoZ62TVUVnZyMT7wR0V1BVZDHfdlw02yGZtmdFI6LtJhVEqeKrJh0xU7V8lYOhJoTHJmaRL1V45uvhv4YC1tyBpSV4dyAiH2We1u0iClTmN0lBO1TMpdABa+bfRqSxQWZfVva4qOm2Zu6YkYmaxlxIEDkx9vdIH1jydmSIqxlJdd/4GIi9hdI5K3ofhk5ZJro41tD5uCq4JsTpy5rEp146KKtFlr2KMbtcFzl44RhfJHKYdDeydInYzMir1OvITQga5O1YlodUNB35BSfzFB05W3jpdHM5Trk31OMZnUbD8uYZMbYlou+JXRczI0xI9LaaU0kWgyTIVSoWaFOuxZiGhfToFZnmb4O8RbjmPxRtWB3mivMaaFjWQwSC9/TGhAMz6AEHWDLjA/C3mfH/tDg3JqL19CsXVmIRhJMXNrIsRTZnCRHgNIYG4jHqJSRG2jMH2PkXB3On6ZtG/2TvyeGGeUUrGfaG0EXH6eWmmraLaXaG0EXH6eD2a9adSNsGR9XliEjmPxRtWBjWQwSC9/l2ahW9J9mWLTRi19IWJLXHt2ymmIbMVy4msgbdV7EWTHRMZS2WTANRtZE2YgSY5HdF+0P1ZH+V3KPS5R6W7tXBFQPm19YPxXm2sPPMpAXm4hK69Cz2PgM9hAImeoJAxBUHj9OVo3fXVhLbw9VndXPkA9EHWDLjA/XH3rSDA1oXqQTMU7CsDCi4KgYrvYgoeoz8TRlSmXYclbnk+PcsqsfG+dG8XBdHCmEKwGnviTTLganXeWFLn2OJGGTboXPvJ81cuoSvuIpNC3WFuPv8bKQ1GW/spfUS+cN8+4UhR7AsuBYmGioNADaiCXAsuBYmGioNADaiCXtJyFQYzcYt2BlMlyv9rpobJ8odh1hkF3udUElxyCJnyMMqJxOIAkNapx8HtQM6R3CYJTN1l2Fp1jSEd6uJiERtWAeZgWSJN3qJRfRol+r6ErSudnVaYiSkRfiKgcTA1rxa7BTMVig6KGShdzsqFVRnx9gqg/SAl3Sp2lJJ04sp6DKQYt06JtKOs4UqRELvgsB6CBKiRDQJpKJ51CJJNtM7xR0ZbqLLNKppjfN75SfZz8MHNL1ZTEPDRakI8DOBBZOZEJP+5hNIxaOn9g/IVMORtvgIewO5B4morCPTBx4p++RiRdu5uiR4JlMZroQXZbWpbWQ5NjfaRSQStVXZ6IPNJTZ6I3NXZMvqjHObxNC69bMhs6cqzJM/VEw6igLLQ5A6a1LiNEkbBNOqstNqriMzwt7pytSQlwyo1eP6FpConjOt9n3op7JR/0oo2JH+72QpGoGWb29pfEFxj1LJWNFabxu5tmF0ztRJgqFE3qV6XDJ1HCo6hgLePFKaFuH5zMVqS3JLHQaovBLnHcF4uoOU7efJEzMoHHTY4VMPrRgZADPYPJrY2oOrbTeJ/LGfHjupvnFN/gA8bmRfV5hMaFTtxsqrqkRrpyupzNPnuU65zDPROakJg3RLiXGpnuRNicep5LGCLWFKIGHmLZwnLtMdWMc3AUMMSFSGlSKd5kS3EtK69o5mmEKvRwaHBLLUNxLnwEJOZMJXmLJt5UWn+9H3VG/YA0Flo3r4M7GJssSoZ0Fmg3sIhSGoMsOHSCZQ2dlnc8WPyeB21ndQWNa3DUcd+WnJ6LgiGj9p/WjR2dx5JqUS+dLZAeS92XKJUsSgWbS5SOR1SWEZXFVjihbJYVTeafGZh3W4GlFZiSUG2kFJLVd7OfEYxhcaueC5NrbDih0Y0hZnSf1IXHaUue44I7dgybZIq5fVubP5Hfg+GbTZjIiIycCJhhfQih6Igfis2SGoDqgquTEpEnkaGSIZkZl+aSQoxSIq/kjotCIfrr+pe+Lqe9yJZ5Ffrd0JE4G1PczJmWGJXTA45YJOzbE6BvQY+G7qaQQRSATbCEQxh5VLaGNA+RuI3IHMTxvIvnIOzw+I8CGSXylZz2RF6Dl6FGmy6TTs5zp0GIGNR6scKCgryEp3yNHsM6sveFk8pYvuyAH66Kqt6HYbfMuDyAqb+px1Z6tqd0stN8Pa/fvOJ3nLWAykFuSoEARfwtynuCPJwu8q/oeocnMLOcayAlBKnVcV0n5qsXYrwkNKCtUGUkLJ1iXz4nmqWZWYwktaJ9aEonnZphRpYkQpedVYInGYYSOfEnNYhNJ80meoAtMxAo7oLEIzMn3pRSOTQlqZCNSJInBbZhV04l9a7hTuEk96JMP5klk6j3RhIlxJ2nN3Qm96JMP5klxJ2nN3QmSbuFdMclIbichLAoHL5MYGwmtLD4SpJvB7lTTc9nBrb/OGw7p7f/QWYurb0VQUU8YL8nSogvBbZhV04lHL5MYGwmTsPdevsmqcSLj+spFcUKZ+InT76gTaJeZbR3Si9aIriURAdRD8JkS1hTsMhyU/NgGtIVYLpissW8SUs9tsY+UtgwFcUKZ+Int95OgrNSRN7lhPFdCdivb1FU+9f2cltied7ffx1J5NgEb8pJt91OgLc/l9j4by8/Hdc0c8A1JtsIgjw3+8zaetUpqc/0iRsrmdObd2suqdYPhSgwpNxXhQNqodh1hkF3Yt2BlMlySNNtX99U/cqAUoVU/8yZbMAq/tO9Z10049SLYcc+SdT2XspJOM5mVCA+uMy5UWlJis5SXBAzlIzgb5c6TJPNeYo6/IJhh+NVKosDkONV3IJSlEB4g4v1nF53Cn1Bd85O23pHff9V6IV6ZW46ZomdXqA0appgoQhVRaGNqTFUfJsJnRROpKIepsJNKKCxjbU5X6bGllQ5Y6IbiFUz4KghklUzCmu9T0tHT3GvWmRH83DwQrJA3XUcU5NAZnk1iApwS3ozijV57KFDs4ZiH5opqvNj4Ko8vsFqFKrRvHhgu6kisCJO57ETvk1R6avdqwtGOrU+ufZEYaHVrpVa5JmNpgxc46irtt1XP6R8oa5G+JwdmDBHcKUZnIQ/iJ7eklRAdKvtnSk5ba83nbI00qu9inotr7NOlXcuGKVAgHAtV2jTbbto1mnvZtRe12AAYXhpBGNLVJZes3iKhqhmnnlpgRhezX03iZOK/4bwkH+JIZCUmP6Iq5gtnwSJtKGApKCI1p6eqr5+DZawo8h/a40DnHKAmX8bcepHz4ISawxB9n2LEwUtG3yBEak27oLEIzMnIX3KHkMngnr9LLYnIX3KHkMnyHYvNTMu6HR6MgY3QnT6KCM9invDG0A/doKoGuw/AGm9JvtZ2WTANRtZu2OYIFxYrl+vMFRXXm4hK69CZWnrF5JGJ2g8FkZRS21JJilbrl+vMFRXg3JqL19CuXeiC0I27XhxDWks/HbSGJMmuXPDJTUnwXDDLREuwm/wK3s273A1Ilg80nP+FbM8nnfoGrI9kF1zJYGWcVsKKBKLkFdLNxuGm1S0RxSIcFO4UuGPcVUqUfqZQFk1Q6SglVwdMQagIVfQGRByO141IbxwBl26JEFlTlkRNfNgdFI6LtJhEk8PPlRjTlkRNfNgU1aoRRViK1RIUfNq/kxASYxrUlXITK92HE4+RW92LlhUPAt871BaNw58sFR0JSJ7qFv0KxJ6ImeoJAxBaZuUXDm8Lph4UWy5fqH1Yee/aZuUXDm8c6gVXr/BZK44VCPCGLHZSUDBGLHZSUDBjbFDP4i+lqDyLgu0XabjLN60aq8bNM26JJzCNPu0xqpVLk23JGD8OFZgL2TxPJNeFmQOKIhkzmG4MWN6uF0HQ2B8LlhUPAt8gGUAKORwuWe6Mfx64lu4VK92uF0HQ2B8JGD8OFZgUV0OTeZfL2TxPJNe4VppWZtqYDmALgZkLjnSLJptZjiMNet2KEOfHwJwbEPYIMFlFUJAKl555SGYMcVriBr5O9BpRSJ1NAliSRuWPH1g/yANPSp06RkrRuhx3jV1WeJnqzZMUNNfHS7zXAZnqS5nVChfED+RQLhh4D03So5qBzhUPv1dwS92QlVdI0H2LwpgBzhUPv1dI0H2LwpgphwYSWZbXCJ3QuJcyBpSV4dy0iClTmN0ZU7+FjhyVEqeKrJhUkdoOV5jwkU8Qw1so0ZyQKx2TEmeMy98ckzeIih7kFdLNxuGeTfCMxWTuTjoKtiLnTvSG/iKEz93DjKaXT67D7uQcz1/GZmiNDiYM1acXDplKsOiND4AMQyLAD3/OU6SQkGuIdSJh2EKFU9EuWAbEp5PY19jIWQ/SFw7LjRAY19jIWQ/2Fg8N9pG3ldiNvZPoFmWLNRVGV2BHRtXGyjDURBfhSfIWrtm9yh5QVxdgUf5P2YzKHLLDOspIHEuC6AzfHA6GHkkwm3UJBYlfHA6GHkkOGueKm0sLGqnKoE0dGtqIN85eW1iF+059Z5Fdq8tdL1WonAvkrYprWI4FY29VSkuNf0zv7hrbfnCzMVysvRqtQJt7PARw5h02fIf4PV2y+oR1Kh4wusP8Wh0f+Nk5F52XOW8/JlrnNx58EVuwNXC6VRKxN9W979H4tU04zc/XOBZ8GQ9PdZu7w5WDOB//AVTT+H//+peCtiI80FiPP/ttGZiNf0zv7hruvaIq8ljsvRqtQJtpfd2n8VQ///CqP1PkfeSpFha9P8erm9ZuPSbnGk82PxwpbA62PaKnPdGQf9rpXBGrOh9t9x2XezSqmFufOL9xzl7ztrF11t5MNMN5ClyFMto1m1AfcpG3JZMFsus4rNYe82E52VlX+4qoq5kXezSqmFuKu/bm/xaQO9El4dRfO5GlLtHlezrk8s95/BZoUkzEOn4ly81h8xx0dM0VdfY21w0QNEaxHgr/trN0G0souRHoMRvROEqrDx599oZvJh+ZtLUytR8h8lK1v512r6PzqROFcDfx45CUr+x1fpa6LP8xyld/8G/2sxoouRHoMRvDOUrlhpm5OasjgFScuZukvZb8OQbiwQ/a+bCi5VIt+Ejjow2ONbDmoAso9yZk04w68cFs5guocIqvwk3pK+ZMEKizKrzLgKrx6YrM0Oi/KOwMlCqqZ3JYxuzhZpvVsGxEp8LOCisqZ3JYxuzKaQqbDu5C6GMcGOua6jvdamz1qxXaTC8nLGactW1dbSPXla8L7quZTW1lLc5UQm6Mb6XVouylLc5UQm68bdZRBi2Mb6XVouyuL70R/St6aNNfGaqRKzvf+qtp7adenKvCcAtbditQ8WBXLGqQ8WBXLGqNMXlS72lyrK0MXWapqDMN1Sk5JsqPpmmTpp2PbethZnaR2yoDpkeSFuvUZyiayqpip0bd2am5ZoUYEqquJmGU9WpVpfJLvQn1pmTJWYtCZgeIEQ4C5SBIWstU5IlG+s3upSfIlZC+o7gHdVBUpEYKExKxo1iLhRRlIsEJGFJLIg3Kg1QcYqTMjNY94QVLh9XWIfVNFlfCIIcMCRei4TFNUpmG4KONbNsfH9YMfBkc33TMXNrVpfJLvQnJ7uAQNVHcLPIOWNGvq/cPjRPVavrRehWoZe2R5BtxZOARjt1W5BlRHR8I4+mQiNzGIw1QIN6mJIiRHFreHu4bdab7H5wXpWeOHSCZQ2dAkA5Qksxezh+Qr0vwSnDYAYolDQNUKpFdSS+bj0kex7yd9ghzjsJUDdIH0M+TfVKIxuXglg2oyHbeuE45kqbP+1OQ1KsMd1S/SYSbaE8QFkXOjkTIEzYYNcDjkcEadEAJVXBPcsQe085Ss4ii1OMR5Ml/FfyRmIobUK+dF0QqEZ7bdQUQV2yQUYsdWMGM24y11JySAYN3E81VtQH/SGpGXOiOigLHq+iaSNzDP2Mhh38CSCNeTR4JKWiXDplKsOiQkGuIdSJWRw/Fsehn2ChSkegYkb9My6i2kthOLGhyDXFFuuLjS/CE2KMKy7eIH+iuilQEKCM9yh5QVxdwS92QlVd+w5eY3JWPwntaE5VuScaTM11yAdAdiJrUw3Jbw1tsi5mS8J2ADdtRix471BaNw58TEmeMy98XCJ3QuJcphwYSWZbSxQWZfVv0xU7V8lYwJcpid1AOJK9nf5cApQRpXF2JJzrfb4znmb4O8RbvGuqKG9foWaFOuxZRJlDRnii9a7hTuEkk6j3RhIl2btzPGmpccFhP6qgNYhNJ80mi3TVRpid5XnETi+eE4l4Xpee0Y0hZnSf1IXHaUueEZQgYReiEZQgYReiTZB/WkifL7arMzalD7vrNbWcHdc0c8A1JtsIgjw3EOn4ly81t+Ejjow2C+QFoEAvt9F/bjIut9F/bjIuxJnZgyM6A5OmmKBVfXVhLbw9QnT6KCM9/HbSGJMm73A1Ilg8QFk1Q6SgmWLTRi19+z9eOoZ6kFIoPSChXkBFL8qinTvSG/iK+eu6qmYtVvO/swsr5/BZoUkzhfjCqvwwu78kOrCS346ALW4mao5kHQ4tJJhTcpmjOZjXZn+l2YhJGwBBWYywF303OH8zKgdWSYKqJsNOiYVNISNILnyqKwBdBnaxMDt4rnbpL2xx1HeCLllqa2+PL/B4jHW9J9hbtnkfLaFjNHNVKQ9ieHu4bdabHHjnenGVVIuWP5Un346ALW4mRHNkcIJWfnUTa0xPy3/QWbg6NINsVI00U3FBexJxjHLefF96KXEVdj5e6W8Ee3pnFHhoZqZH73sMYKVAN4fhTMUt+nSNgMeL9XVoN1CUIHrtNqWPc3dMMyyKIn3tO72TM3n2P5qZL3ZXMbKEFJJQRnmSgpRaRcqNWJQzRsiS15bARN6P5X5gNgmF44K9OfqGKX3YNq+KeYAeOqONoIaCPs6IA4TuPuSPlXo9NNuH1HpfM/+D4I85Rt6Q5ZGhRTOMy4SdVZSdCn6cU22etowfR96TY45fRcWLY4qCQnqK64cUQ62R6oTnR1mYt4g1TnCan4xeU1uc1JcRRFWTE5UEN1K+4ZOfQQvAKJgdO8G1BpeORV+3pMPsPymGw7X8OFaxGd7BqZIrvtfQtFUqqs6WpPYrxcNDSCtJ/8yZbMAqmOB6wgwpL+ZRtp8p8rC0MSWulJxqPQCgoFmWLNRVdGtqIN85TH35Roub9oAqQlWWnKnSu7Nxuqz1pL49lGtyce6DRnPFfxSDuXvfiiuCkITkkzOBoG/6L3l/3HXXMLR+WHs7Mzh+b4CANnh+HYVAOgOAX4lgPsqBSI2iQoGDOJENRTCF6ZSJRceGO5jkRN6I+ZriQpOLIJzPQK+P5ZoUYEqqGZh3W4GlRIGmTaic0+E35wg0nqb/r2xThfjCqvwwluR23FUsyu0vwHYnJen+zTMnwusP8Wh02fIf4PV2XOW8/JlrT+H//+pebfnCzMVyDOB//AVTNf0zv7hrPP/ttGZi9P8erm9ZxN9W979H///CqP1PXOBZ8GQ9Qf9rpXBG2PxwpbA60+E35wg0hfjCqvwwVvO/swsryu0vwHYnluR23FUsJen+zTMn",i:"AAABAAIAAgABAAMABAACAAUABQACAAMAAwABAAYABgABAAcABQADAAgACAADAAYACQAKAAsACwAKAAwADQALAA4ADgALAAwADwAQABEAEQAQABIAEQATABQAFAATABUAFgAXABgAFwAWABQAGQAaABsAGwAaABMAHAAdAB4AHgAdAB8AIAAhACIAIgAhACMAJAAlACYAJgAlACcAGwATABIAEgATABEAKAApACoAKgApACsAGgAZACwALAAZAC0ALgAvADAALwAuADEAMgAzADQAMwAyADUANgA0ADcANAA2ADIAOAA5ADcANwA5ADYAOgA7ADgAOAA7ADkAPAA9AD4APgA9AD8AQABBAEIAQgBBAEMAKgAFACgAKAAFAAgABwABAB4AHgABABwACQAtAAoACgAtABkADQAOABAAEAAOABIAGQAbAAoACgAbAAwAEgAOABsAGwAOAAwARAAaAEUARQAaACwAGgBEABMAEwBEABUAOABGADoAOgBGAEcASABJAEoASgBJAEMASwBMAE0ATABLAE4ATwBQAFEAUQBQAFIADwAUABYAFAAPABEAUQAfAE8ATwAfAB0AKwBOAEsATgArACkAUwBUAFUAVQBUAFYAVwBYAFkAWQBYAFoAWQBWAFcAVwBWAFQAWwBcAF0AXABeAF8AYABhAGIAYgBhAGMAZABlAGYAZgBlAGcAaABpAGoAagBpAGsAbABoAG0AbQBoAGoAbgBvAHAAcABvAHEAcgBzAHQAdABzAHUAbwBzAHEAcQBzAHIAdgB3AHgAeAB3AHkAdgB4AHoAegB4AHsAfAB9AHQAdAB9AHIAfgB/AIAAgAB/AIEAcACCAG4AbgCCAIMAhACFAIYAhgCFAIcAhACIAIUAhQCIAIkAagBrAIoAigBrAIsAdQBzAIwAjABzAI0AcwBvAI0AjQBvAI4AbwBuAI4AjgBuAI8AgwCQAG4AbgCQAI8AagCKAG0AbQCKAJEAkgCTAJQAlACTAJUAkwCSAJYAlgCSAJcAmACZAJoAmgCZAJsAmgCbAJwAnACbAJ0AngCfAKAAoACfAKEAngCZAJ8AnwCZAJgAogCjAKQApACjAKUApgCnAKMAowCnAKUAqACpAKoAqgCpAKsArACtAKkAqQCtAKsArgCvAKwArACvAK0AsACxAK4ArgCxAK8AsgCiALMAswCiAKQAhwChAIYAhgChAJ8AnACJAJoAmgCJAIgAnwCYAIYAhgCYAIQAmgCIAJgAmACIAIQAdgCSAHcAdwCSAJQAkgB2AJcAlwB2AHoAgQC0AIAAgAC0ALUAcQByALYAtgByAH0AtwC4ALkAuQC4ALoAcAC7AIIAggC7ALwAaQBoAL0AvQBoAL4AbAC/AGgAaAC/AL4AcQC2AHAAcAC2ALsAtAC3ALUAtQC3ALkAwADBAMIAwgDBAMMAwwDBAMQAxADBAMUAvgDBAL0AvQDBAMAAxQDBAL8AvwDBAL4AtACBALYAtgCBALsAtgB9ALQAtAB9ALcAfQB8ALcAtwB8ALgAvAC7AH8AfwC7AIEAxgDFAMcAxwDFAL8AyADJAMAAwADJAL0AygDLAMwAzADLAM0AzgDKAM8AzwDKAMwA0ADRANIA0gDRANMAygDUAMsAywDUANUAygDOANQA1ADOANYA0gDXANAA0ADXANgA2QDaANsA2wDaANwA3QDZAN4A3gDZANsA3wDgAOEA4QDgAOIA4wDkANgA2ADkAOUA5gDnAOgA6ADnAOkA6gDrAOwA7ADrAO0A6gDuAOsA6wDuAO8A5wDmAPAA8ADmAOAA4ADfAPAA8ADfAPEA8gDRAPMA8wDRAPQA0QDQAPQA9ADQAPUA2ADlANAA0ADlAPUA9gD3AOIA4gD3APgA+QD6APsA+wD6APwA+gD5AP0A/QD5AP4A6ADpAP8A/wDpAAABzQABAcwAzAABAQIBAwEBAQQBBAEBAc0A8wD0AAUBBQH0AAYB9AD1AAYBBgH1AAcB9QDlAAcBBwHlAAgB5QDkAAgBCAHkAAkBzAACAc8AzwACAQoB7QAAAewA7AAAAekA7wDuAPEA8QDuAPAA6QDnAOwA7ADnAOoA8ADuAOcA5wDuAOoA2QD5ANoA2gD5APsA/gD5AN0A3QD5ANkAAgEBAQsBCwEBAQwBAQEDAQwBDAEDAQ0BBQEGAQ4BDgEGAQ8BDwEGARABEAEGAQcBEAEHAREBEQEHAQgBEQEIARIBEgEIAQkBCgECARMBEwECAQsB4wDYABQBFAHYANcA1wDSABUBFQHSAPcAFgEXAfoA+gAXAfwAGAHTAPIA8gDTANEA1AAZAdUA1QAZARoBGwEZAdYA1gAZAdQAFgEcARkBGQEcARoBFwEWARsBGwEWARkBHQEeAR8BHwEeARUB4QDiACABIAHiAPgA9wD2ABUBFQH2AB8B0wD4ANIA0gD4APcAGAEgAdMA0wAgAfgAFQEeAdcA1wAeARQBIQEXASIBIgEXARsB4ADmAOIA4gDmAPYA+gD9ABYBFgH9ABwB/wAdAegA6AAdAR8B5gDoAPYA9gDoAB8BIwEkASUBJQEkASYBIwElAScBJwElASgBKQEqASsBKwEqASwBLQEuAS8BLwEuATABLQExAS4BLgExATIBKwEzASkBKQEzATQBNQE2ATMBMwE2ATcBOAE5AToBOgE5ATsBOQE4ATwBPAE4AT0BPgE1ASsBKwE1ATMBPgErAT8BPwErASwBNwE2AUABQAE2AUEBQgFDAUQBRAFDAUUBRgFHAUgBSAFHAUkBQwFKAUUBRQFKAUsBMAFBAS8BLwFBATYBMgExAT8BPwExAT4BNgE1AS8BLwE1AS0BPgExATUBNQExAS0BIwE4ASQBJAE4AToBPQE4AScBJwE4ASMBTAFNAU4BTgFNAU8BUAFMAVEBUQFMAU4BUgFTAVQBVAFTAVUBVgFXAVgBWAFXAVkBWgFWAVsBWwFWAVgBTwFNAVwBXAFNAV0BQgFeAUMBQwFeAV8BYAFhAUIBQgFhAV4BYgFjAWQBZAFjAWUBYgFmAWMBYwFmAWcBZgFHAWcBZwFHAWgBRwFGAWgBaAFGAWkBSgFDAWoBagFDAV8BawFsAW0BbQFsAW4BNAFsASkBKQFsAW8BcAFxAXIBcgFxAXMBdAFwAXUBdQFwAXIBcQFwAXYBdgFwAXcBcAF0AXcBdwF0AXgBeQF6AXsBewF6AW4BbwF8ASkBKQF8ASoBewFuATQBNAFuAWwBbwFsAX0BfQFsAWsBfAFvAX4BfgFvAX0BbQFuAX8BfwFuAXoBgAGBAV4BXgGBAV8BYQGCAV4BXgGCAYABgwGEAWMBYwGEAWUBhQGDAWcBZwGDAWMBhgGFAWgBaAGFAWcBhwGGAWkBaQGGAWgBgQGIAV8BXwGIAWoBdgF3ATwBPAF3ATkBOwE5AXgBeAE5AXcBewE3AXkBeQE3AUABewE0ATcBNwE0ATMBiQGKAYsBiwGKAYwBjQGJAY4BjgGJAYsBjwGQAZEBkQGQAZIBjwGRAZMBkwGRAZQBlQGWAZcBlwGWAZgBmQGaAZsBmwGaAZwBmQGdAZoBmgGdAZ4BnwGgAaEBoQGgAaIBowGkAaUBpQGkAaYBpwGoAaABoAGoAakBqgGrAawBrAGrAa0BrQGrAa4BrgGrAa8BsAGnAZ8BnwGnAaABsAGfAbEBsQGfAbIBqAGzAakBqQGzAbQBtQG2AbcBtwG2AbgBmwGcAagBqAGcAbMBngGdAbEBsQGdAbABqAGnAZsBmwGnAZkBsAGdAacBpwGdAZkBqwGqAY8BjwGqAZABqwGPAa8BrwGPAZMBuQG6AbsBuwG6AbwBvQGyAaEBoQGyAZ8BvgG/Aa0BrQG/AawBwAHBAcIBwgHBAcMBrgHEAa0BrQHEAb4BqQG0AcUBxQG0AcYBoAGpAaIBogGpAcUBxwHIAckByQHIAcoByAHLAcoBygHLAcwByAHHAc0BzQHHAc4BzwHQAdEB0QHQAdIB0wHUAdUB1QHUAdYB1AHTAdcB1wHTAdgB2QHTAdoB2gHTAdUB2wHcAd0B3QHcAd4B3wHgAeEB4QHgAeIBUAHjAUwBTAHjAeQB5QHmAeMB4wHmAeQB5wHoAekB6QHoAeoB6gHrAewB7AHrAe0B7gFNAeQB5AFNAUwBXQFNAe8B7wFNAe4BXQHwAfEB8QHwAfIB8wFWAfQB9AFWAVoBVwFWAfUB9QFWAfMBUgFXAfYB9gFXAfUBUwFSAfcB9wFSAfYB+AH5AfoB+gH5AfsB+wH5AfwB/AH5Af0B3wH+AeAB4AH+Af8BAAIBAv4B/gEBAgICAwLfAQQCBALfAeEBBQIGAgcCBwIGAggCCQIKAgsCCwIKAgwCDQIJAg4CDgIJAgsCDwJnABACEAJnAGUAEQJgABICEgJgAGIAEwIPAhQCFAIPAhACZgBnABUCFQJnABYCZwAPAhYCFgIPAhECDwITAhECEQITAmAAWQBaABcCFwJaABgCGQIaAhsCGwIaAhwCGgIZAlwAXAAZAh0CHgIcAh8CHwIcAhoCFAIgAhMCEwIgAiECYQBgACECIQJgABMCXABbABoCGgJbAB8CNwAiAjgAOAAiAkYAGAA0ADMANAAYABcAPQBSAD8APwBSAFAANAAXADcANwAXACICTQAwAC8AMABNAEwAFQAiAhQAFAAiAhcARQBHAEQARABHAEYAIgIVAEYARgAVAEQAIwIkAiUCJQIkAiYCJQImAmMAYwAmAmIAJwIoAikCKQIoAioCKwIsAi0CLQIsAi4CLwIwAjECMQIwAjICKwIzAjQCNAIzAjUCNgI3AjgCOAI3AjkCOAI6AjYCNgI6AjsCPAI9Aj4CPgI9Aj8CPgJAAjwCPAJAAkECQAJCAkECQQJCAkMCKgJEAkUCRQJEAkYCRwJIAkkCSQJIAkoCSwJHAkwCTAJHAkkCTAJNAksCSwJNAk4CTwJQAlECUQJQAlICUwJPAlQCVAJPAlECLQJVAisCKwJVAjMCVgJGAlcCVwJGAkQCWAJZAgQABABZAgIAWgIAAFkCWQIAAAIAWwJcAl0CXQJcAl4CXwJgAmECYQJgAmICAABaAlsCWwJaAlwCYwIkAGQCZAIkACYAZQJmAmcCZwJmAmgCXQJeAmkCaQJeAmoCHQJrAmwCbAJrAm0CbgJvAnACcAJvAnECcgJhAnMCcwJhAmICdALuAXUCdQLuAeQBdgJ3AngCeAJ3AnkCegJ7AuoB6gF7AusBfAJ6AugB6AF6AuoBfQJ+An8CfwJ+AoACgQLyAYICggLyAfAB9QHzAYMCgwLzAYQChQJkAIYChgJkAGYAhwKIAokCiQKIAooCiwKHAowCjAKHAokCjQKLAo4CjgKLAowCjwKQApECkQKQApICkwKQApQClAKQApUCkAKPApUClQKPApYClwKWApgCmAKWAo8CmQKaApUClQKaApQCmwKZApYClgKZApUCnAKbApcClwKbApYCIwAhAJ0CnQIhAJ4CQgBDAJ8CnwJDAEkAoAIiAKECoQIiACMAQQCiAkMAQwCiAkoAagJyAmkCaQJyAnMCowJIAKECoQJIAEoAoQIjAKMCowIjAJ0CWACkAqUCpQJaAFgApQKmAloAWgCmAhgCFwKnAlkAWQCnAlYAoQJKAKACoAJKAKICqAKpAiEAIQCpAp4CIACqAiEAIQCqAqgCqwI0AqQCpAI0AqUCNAI1AqUCpQI1AqYCFQKsAmYAZgCsAoYCEgJiAK0CrQJiACYCrQImAq4CrgImAiQCEgKvAhECEQKvAhYCrQKwAhICEgKwAq8CsAKtArECsQKtAq4CFQIWArICsgIWAq8CsAKzAq8CrwKzArICswKwArQCtAKwArECtQKyArYCtgKyArMCtgKzArcCtwKzArQCuAK5Ag0CDQK5AgkCugK7ArwCvAK7Ar0CvgK/AsACwAK/AsECwgLDAr4CvgLDAr8CxALFAsYCxgLFAscCyALJAsICwgLJAsMCuwLKAr0CvQLKAssCzAK+As0CzQK+AsACvgLMAsICwgLMAs4CzwI5AtAC0AI5AjcCuwK6AtEC0QK6AtICygK7AtMC0wK7AtECMQIyAtQC1AIyAtUC1gLXAtgC2ALXAtkC1wLaAtkC2QLaAtsC0QLSAtwC3ALSAt0C0wLRAt4C3gLRAtwC3wLVAuAC4ALVAjIC4ALhAt8C3wLhAuIC4wLkAl4AXgBsAuMC2ALZAuUC5QLZAuYC5wLmAtsC2wLmAtkC6ALpAuoC6gLpAusC7ALtAu4C7gLtAu8C8ALxAu8C7wLxAu4C8gLzAvQC9ALzAvUCXwD2AvcC9wL2AvgC+QLkAvoC+gLkAuMC6gLrAvkC+QLrAuQC8gL7AtwC3AL7At4C8ALvAvwC/ALvAv0C/gL9Au0C7QL9Au8C/QL+Av8C/wL+AgAD/AL9AgEDAQP9Av8CAgMDA94B3gEDA90BBAMFA9YB1gEFA9UByQEGA8cBxwEGAwcD1gEIAwQDBAMIAwkDCgMCAwsDCwMCA94BDAMNAw4DDgMNAw8DEAMRAxIDEgMRAxMDFAMVAxYDFgMVAxcDFQMUAwMCAwIUA98BGAMZA8kByQEZAwYD0QEaA88BzwEaAxsDHAMdA9EB0QEdAxoDHgMfAyADIAMfAyEDGgMiAxsDGwMiAyMDHQMkAxoDGgMkAyIDDwMeAyUDJQMeAyADDgMPAyYDJgMPAyUDJwMoAyUDJQMoAyYDEQMpAxMDEwMpAyoDEwMqAysDKwMqAywDEgMTAy0DLQMTAysDLgMvAzADMAMvAzED+wH8ATADMAP8AS4DMgMYA8oBygEYA8kBygHMATIDMgPMATMDNAOaAjUDNQOaApkCNgM1A5sCmwI1A5kCNwM2A5wCnAI2A5sCsgI4AxUCFQI4A6wCsgK1AjgDOAO1AjkDNwM6AzYDNgM6AzsDPAPUAT0DPQPUAdcB1AE8A9YB1gE8AwgDfgJ9Aj4DPgN9Aj8DQAN+AkEDQQN+Aj4DxgLHAkIDQgPHAkMDRAO5AkIDQgO5AsYCRQMJAkQDRAMJArkCCQJFAwoCCgJFA0YDRwN9AkgDSAN9An8CSQNKA0sDSwNKA0wDTQPpAewB7AHpAeoB7AHtAU4DTgPtAU8D7QFJA08DTwNJA0sD6wFQA+0B7QFQA0kDAAIUAwUCBQIUAxYD/gECAv8B/wECAlED/gHfAQACAALfARQDBQIHAgACAAIHAgECBgIFAlIDUgMFAhYDUwNUAz8DPwNUAz4DVQNWA0MDQwNWA0IDQgNWA0QDRANWA1cDRANXA0UDRQNXA1gDRQNYA0YDRgNYA1kDWgNTA1sDWwNTAz8DTwFcA04BTgFcA10DXgNfA1UBVQFfA1QBXwNgA1QBVAFgA1kBYANhA1kBWQFhA1gBYQNiA1gBWAFiA1sBXANPAWMDYwNPAVwBZAO5AWUDZQO5AWYDuQG7AWYDZgO7AWcDaANpA2oDagNpA2sDawNpA2wDbANpA20DbANtA24DbgNtA28DbgNvA3ADcANvA3EDcgNkA3MDcwNkA2UD7AFOA00DTQNOA3QDMQB1A3YDdQMxAC4ANQB3A3gDdwM1ADIAMgB5A3cDeQMyADYANgB6A3kDegM2ADkAegM5AHsDewM5ADsAfAM8AH0DfQM8AD4AQgB+A0AAQAB+A38DfQM+AIADgAM+AGACfgNCAIEDgQNCAJ8CgANgAoIDggNgAl8CgwOEA4UDhQOEA3YChgOHA3MDcwOHA4gDiQNlA4UDhQNlA2YDeAKJA3YCdgKJA4UDeAKKA4kDiQOKA4YDiQOGA2UDZQOGA3MDiwNuA4wDjANuA3AD+wGLA/oB+gGLA4wDjQOOA48DjwOOAzEDagNrA40DjQNrA44DbAOQA2sDawOQA44DkAMwA44DjgMwAzEDkANsA4sDiwNsA24DMAOQA/sB+wGQA4sDkQOSA4wBjAGSA4sBkgOTA4sBiwGTA44BkgORA5QDlAORA5UDkwOSA5YDlgOSA5QDlwOYA5kDmQOYA5oDlwObA5gDmAObA5wDnQOeA58DnwOeA6ADnQOfA7cBtwGfA5gBngOdA6EDoQOdA6IDtwG4AZ0DnQO4AaIDtwGYAbUBtQGYAZYBngOjA6ADoAOjA6QDpQOVA6YDpgOVA5EDowOeA6cDpwOeA6EDwAHCAaQBpAHCAaYBowGlAagDqAOlAakDqgOcA6sDqwOcA5sDrAO6AWQDZAO6AbkBaAOtA2kDaQOtA64DrgOvA2kDaQOvA20DbQOvA28DbwOvA7ADbwOwA3EDcQOwA7EDsgOsA3IDcgOsA2QDXQOAAbMDswOAAYIBtAO1A2sBawG1A30BtQO2A30BfQG2A34BcgFzAbcDtwNzAbgDdQFyAbkDuQNyAbcDugO0A20BbQG0A2sBfwG7A20BbQG7A7oDtQO0A7wDvAO0A70DvAO+A7UDtQO+A7YDRAFFAbgDuANFAbcDRQFLAbcDtwNLAbkDvQO0A0kBSQG0A7oDugO7A0kBSQG7A0gBvQNJAWYBZgFJAUcBvgO8A2QBZAG8A2IBvAO9A2IBYgG9A2YBvwPAA6UApQDAA6QApwDBA6UApQDBA78DwgPDA6sAqwDDA6oArQDEA6sAqwDEA8IDrwDFA60ArQDFA8QDxQOvAMYDxgOvALEAwAPHA6QApADHA7MApQGmAcgDyAOmAckDyAPKA6UBpQHKA6kDiQGXA4oBigGXA5kDiQGNAZcDlwONAZsDyQOmAZcBlwGmAcIByQOXAZ8DnwOXAZgBoAOkA8gDyAOkA8oDyAPJA6ADoAPJA58DwgHDAZcBlwHDAZUBigCLAKIAogCLAKMAiwDLA6MAowDLA6YAjACNAKgAqACNAKkAjQCOAKkAqQCOAKwArACOAK4ArgCOAI8ArgCPALAAsACPAJAAkQCKALIAsgCKAKIAmQC1AJsAmwC1ALkAwgDDAJYAlgDDAJMAkwDDAJUAlQDDAMQAmwC5AJ0AnQC5ALoAoAB+AJ4AngB+AIAAngCAAJkAmQCAALUAzAPNAwwBDAHNAwsBzgPMAw0BDQHMAwwBzwPQAw8BDwHQAw4B0QPPAxABEAHPAw8B0gPRAxEBEQHRAxAB0wPSAxIBEgHSAxEBzQPUAwsBCwHUAxMB2wG/AtwB3AG/AsMCvwLbAcECwQLbAdUDKwO6Ai0DLQO6ArwCLAPSAisDKwPSAroC3QLSAtYD1gPSAiwDKgPXAywDLAPXA9YD3AHYA94B3gHYAwsD2QPaA9sD2wPaA9wD2gPdA9wD3APdA94D3QPfA94D3gPfA+AD3wPhA+AD4APhA+ID4wPkA+UD5QPkA+YD5wPoA+MD4wPoA+QD6QPoA+oD6gPoA+cD6wPsA+0D7QPsA+4D7wPwA/ED8QPwA/ID8wP0A/UD9QP0A/YD9wP4A9wD3AP4A9sD+QP3A94D3gP3A9wD+gP5A+AD4AP5A94D+wP6A+ID4gP6A+AD5QP8A+MD4wP8A/0D/QP+A+MD4wP+A+cD/gP/A+cD5wP/A+oD4gPqA/sD+wPqA/8D7QPuAwAEAATuAwEE8QMCBO8D7wMCBAME9QMEBPMD8wMEBAUE8wMFBAYEBgQFBAcECAQJBAoECgQJBAsEDAQNBCMCIwINBCQC+AP3AwwEDAT3Aw0EDQQOBCQCJAIOBK4C9wP5Aw0EDQT5Aw4E+QP6Aw4EDgT6Aw8EDgQPBK4CrgIPBLEC+gP7Aw8EDwT7AxAEDwQQBLECsQIQBLQCHwMRBCEDIQMRBBIEEQT9AxIEEgT9A/wDEwQRBBQEFAQRBB8D/gP9AxMEEwT9AxEEFQQTBLcCtwITBBQE/wP+AxUEFQT+AxMEtwK0AhUEFQS0AhAE+wP/AxAEEAT/AxUE+AL2AhYEFgT2AhcEAAQBBBcEFwQBBBYE6AIYBOkC6QIYBBkEGAQDBBkEGQQDBAIE7gIaBOwC7AIaBBsEGgQFBBsEGwQFBAQE8QIcBO4C7gIcBBoEBQQaBAcEBwQaBBwE8wIdBPUC9QIdBB4ECgQfBAgECAQfBCAEHwTWAyAEIATWA9cDIQQiBCMEIwQiBCQEJQR2A3UDdgMlBCYEfgMkBH8DfwMkBCIEJAR+AycEJwR+A4EDKAQpBCoEKgQpBCsEKQQsBCsEKwQsBC0ELAQuBC0ELQQuBC8ELgQwBC8ELwQwBDEEMgQzBDQENAQzBDUELAR3A3kDdwMsBCkELgR5A3oDeQMuBCwEMAR6A3sDegMwBC4EMwR8A30DfAMzBDIEKQR4A3cDeAMpBCgEKgQrBDYENgQrBDcEKwQtBDcENwQtBDgELQQvBDgEOAQvBDkELwQxBDkEOQQxBDoENAQ1BDsEOwQ1BDwEPQQhBFUAVQAhBCMEIwQkBD4EPgQkBCcEPwRABEEEQQRABEIEQwQqBEQERAQqBDYEJQRFBCYEJgRFBEYEwgLOAsgCyALOAkcESARJBEoESgRJBEsESQRMBEsESwRMBE0ETgRPBFAEUARPBFEETwRSBFEEUQRSBFMEUgRUBFMEUwRUBFUEVgRXBFgEWARXBFkENwI2AkgESAQ2AkkETARJBDsCOwJJBDYCPQI8Ak4ETgQ8Ak8EUgRPBEECQQJPBDwCVARSBEMCQwJSBEECVwQoAlkEWQQoAicCVwJEAlYEVgREAlcESARaBDcCNwJaBNAC2AJbBNYC1gJbBFwEKgIoAkQCRAIoAlcE4QLgAl0EXQTgAl4ESAJHAi8CLwJHAjACUAJPAlwEXARPAtYCTwJTAtYC1gJTAtcCVQItAl8EXwQtAmAELQIuAmAEYAQuAmEEMAJeBDICMgJeBOACXQReBE4CTgJeBEsCYARhBGIEYgRhBGMEZARiBFYCVgJiBEYCXwRgBGQEZARgBGIESQJKAkACQAJKAkICTAJJAj4CPgJJAkACTQJMAj8CPwJMAj4CUQJSAjgCOAJSAjoCOAI5AlECUQI5AlQCRQJGAmMEYwRGAmIEgQKCAmUEZQSCAmYEzQLAAssCywLAAr0C9AFnBPMB8wFnBIQCPgRTACMEIwRTAFUAaARrAGkEaQRrAGkAyADAAGoEagTAAMIAvwBsAMcAxwBsAGsElgCXAGwEbASXAG0EbABtAGsEawRtAG4EywOLAGgEaASLAGsAbQCRAG4EbgSRAG8EcASUAHEEcQSUAJUAlwB6AG0EbQR6AHsAcgSyAHMEcwSyALMAeQB3AHAEcAR3AJQAaQRpAMkAyQBpAL0AxADFAHQEdATFAMYABAHNAHUEdQTNAMsA/QD+AHYEdgT+AHcEywDVAHUEdQTVAHgEeQTWAHoEegTWAM4AegTOAHsEewTOAM8AfAT7AH0EfQT7APwA/gDdAHcEdwTdAN4AzwAKAXsEewQKAX4E3ADaAHwEfATaAPsAfgQKAX8EfwQKARMB1QAaAXgEeAQaAYAE/AAXAX0EfQQXASEBgAQaAYEEgQQaARwBIgEbAXkEeQQbAdYAHAH9AIEEgQT9AHYEggQ7AYMEgwQ7AXgBPAE9AYQEhAQ9AYUEdQG5A4YEhgS5A4cERAGIBEIBQgGIBGABiQQ6AYIEggQ6ATsBPQEnAYUEhQQnASgBJgEkAYkEiQQkAToBXAFdAYoEigRdAfEBiwRKAYwEjARKAWoBjQRzAY4EjgRzAXEBgwR4AY8EjwR4AXQBjgRxAZAEkARxAXYBjwR0AYYEhgR0AXUBdgE8AZAEkAQ8AYQEigGRBIwBjAGRBJIErgGvAZMEkwSvAZQEqwObA5UElQSbA40BlgSqAZcElwSqAawBrwGTAZQElASTAZQBmASOAZkEmQSOAZMDkgGQAZYElgSQAaoBcgOaBLIDsgOaBJsEnASZA50EnQSZA5oDvwGeBKwBrAGeBJcExAGuAZ8EnwSuAZMEKAOgBCYDJgOgBNkBGwMjA80BzQEjA6EEzwEbA84BzgEbA80BywHIAaEEoQTIAc0B0AHPAaIEogTPAc4BxwEHA84BzgEHA6IEJgPZAQ4DDgPZAdoB0wHZAdgB2AHZAaAEowQSA9UD1QMSAy0D1QPbAaMEowTbAd0BhAOkBHYCdgKkBKUESgNJA6YEpgRJA1ADRgSOAkEEQQSOAqcEUwKoBNcC1wKoBNoCqARTAqkEqQRTAlQCNQSqBDwEPASqBKsErASAAkADQAOAAn4C8AGtBIICggKtBK4ErwSwBLEEkwKSApACRQSNAkYERgSNAo4CkQKSArIEswSwBLQEmAKFApcClwKFAoYCrAKcAoYChgKcApcCtQS2BKoEqgS2BKsE9AL1ArcEtwT1ArgEuQS6BLsEuwS6BB4E9AK3BLwEvQTwAvwCvgQQA6MEowQQAxIDAwO+BN0B3QG+BKMEvwQMA9oB2gEMAw4DBQO/BNUB1QG/BNoBnAKsAjcDNwOsAjgDOAM5AzcDNwM5AzoDRwPABFsDWwPABMEEVAPCBD4DPgPCBEEDwQTDBFsDWwPDBFoDXQOzA04BTgGzA1EBigTEBFwBXAHEBGMDmgRyA4gDiANyA3MDhQNmA4MDgwNmA2cDigPFBIYDhgPFBIcDpgORA5IEkgSRA4wBmQSTA8YExgSTA5YDYwPEBIgBiAHEBMcEhwS5A8gEyAS5A0sByQS4A40EjQS4A3MBiAREAckEyQREAbgDyARLAYsEiwRLAUoBkQSKAZwEnASKAZkDlQSNAZgEmASNAY4BbwSRAHIEcgSRALIAxAB0BJUAlQB0BHEEwgCWAGoEagSWAGwEwQLVA7wCvALVAy0DygTLBMwEzATLBM0EzAS5BMoEygS5BLsE9QIeBLgEuAQeBLoENgQ3BGQAZAA3BGUANwQ4BGUAZQA4BBACOAQ5BBACEAI5BBQCOQQ6BBQCFAI6BCACOwQ8BB4CHgI8BBwCtgTOBKsEqwTOBBsCpwI9BFYAVgA9BFUAcQKnBIwCjAKnBI4CRAQ2BIUChQI2BGQAzwRaBEoEzwRKBNAEqQRUAs8CzwJUAjkCwALBAr0CvQLBArwC0QSRAtIE0gSRArIERATRBEMEQwTRBNIE0QREBJgCmAJEBIUCkQLRBI8CjwLRBJgC0wTUBE0ETQTUBEsESgRLBNAE0ARLBNQE1QTWBFMEUwTWBFEEUARRBNcE1wRRBNYE2ATVBFUEVQTVBFME2QTaBCkCKQLaBCcC2gTbBCcCJwLbBFkE2gTZBHkCeQLZBNwE1QTYBHsCewLYBN0E1gTVBHoCegLVBHsC1wTWBHwCfALWBHoCWARZBN4E3gRZBNsE2wTaBHcCdwLaBHkC0ATUBIACgALUBH8C1ATTBH8CfwLTBEgD3gTbBN8E3wTbBHcCZwTgBIQChALgBOEE4gTjBMQCxALjBMUCzwTQBKwErATQBIACyQLIAuIE4gTIAuMEBALkBAMCAwLkBOUE5AQJA+UE5QQJAwgDDgLmBA0CDQLmBOcE5gQKA+cE5wQKAwsD/AH9AegE6AT9AekEMwPqBDIDMgPqBOsE6wTqBC4DLgPqBC8D6ATrBPwB/AHrBC4DGAMyA+gE6AQyA+sE7AQ8A+0E7QQ8Az0DPAPsBAgDCAPsBOUEAwLlBBUDFQPlBOwE7gS4AucE5wS4Ag0C4QTvBIQChALvBIMC6ATpBBgDGAPpBBkDFQPsBBcDFwPsBO0EmgI0A+EE4QQ0A+8E2APuBAsDCwPuBOcE4ASUAuEE4QSUApoCRwTjBMgCSgRaBEgElALgBJMCsQRlBGYE7wHuAfAE8ATuAXQC8AR0AvEE8QR0AvIE8QTzBPAE8ATzBPQE8gR0AvUE9QR0AnUC9gT3BPgE+AT3BPkE+gT7BPwE/AT7BP0E+wT+BP0E/QT+BP8E8gT1BAAFAAX1BAEFAgUDBfYE9gQDBfcErwRmBAQFZgSvBLEEZgSCAgUFBQWCAq4ELAIrAqsCqwIrAjQCBgUHBQIFAgUHBQMFAQX6BAAFAAX6BPwECAUJBf4E/gQJBf8EiAL2BIoCigL2BPgECgUGBQsFBgUKBQkF/AT9BPEE8QT9BPME8QTyBPwE/ATyBAAFBgWIAgsFCwWIAgwF+QQNBfgE+AQNBYoCDgVlAg8FDwVlAmcCJQBYAicAJwBYAgQAZgJjAmgCaAJjAmQCQAQQBUIEQgQQBREFzgQSBRsCGwISBRkCEgVrAhkCGQJrAh0CDwVnAjEAMQBnAi8AJgAnACsAKwAnACoAHABbAh0AHQBbAl0CJwAEACoAKgAEAAUAYgJgAj8APwBgAj4AAQAAABwAHAAAAFsCPASrBBwCHAKrBBsCZwJoAi8ALwBoAk0AUABPAHMCcwJPAGkCgAMTBX0DfQMTBTMETwAdAGkCaQIdAF0CJgArAGQCZAIrAEsAXAAdAl4AXgAdAmwCJgRGBEIEQgRGBEEEcAJxAokCiQJxAowCPwBQAGICYgJQAHMCTQBoAksASwBoAmQC1ALVAm0CbQLVAmwC1QLfAmwCbALfAuMC8wLyAt0C3QLyAtwCFAUdBBUFFQUdBBYF+gLjAuIC4gLjAt8C+wLyArwEvATyAvQC/wIAA+UC5QIAAxcF5QLmAv8C/wLmAgED5gLnAgEDAQPnAhgFDwURBQ4FDgURBRAFDwV2AxEFdgMPBTEAFQUZBRQFFAUZBRoFygS7BBoFGgW7BBQF3QIWBfMC8wIWBR0EuwQeBBQFFAUeBB0EJgQRBXYDEQUmBEIEMwQTBTUENQQTBaoEggMbBYADgAMbBRMFGwW1BBMFEwW1BKoEHAU/BKcEpwQ/BEEE/AIBA70EvQQBAxgFbwIcBXECcQIcBacEDQVwAooCigJwAokCWwTYAhcFFwXYAuUCXAOBAV0DXQOBAYABhAGDAV4DXgODAV8DgwGFAV8DXwOFAWADhQGGAWADYAOGAWEDhgGHAWEDYQOHAWIDYwOIAVwDXAOIAYEBugGsA5UDlQOsA5QDpQO8AZUDlQO8AboBrgOtA6EDoQOtA6cDrwOuA6IDogOuA6EDuAGwA6IDogOwA68DsQOwA7YBtgGwA7gBsgObBJYDlgObBMYElAOsA5YDlgOsA7IDwAO/A08DTwO/A04DTgO/A3QDdAO/A8EDCALDAwcCBwLDA8IDBwLCAwECAQLCA8QDAQLEAwICAgLEA8UDAgLFA1EDUQPFA8YDHQXHA0wDTAPHA0sDxwPAA0sDSwPAA08DzQPMA1MDUwPMA1QDzAPOA1QDVAPOA8IE0APPA1UDVQPPA1YDVgPPA1cDVwPPA9EDVwPRA1gDWAPRA9IDWAPSA1kDWQPSA9MDwwQeBVoDWgMeBdQD1APNA1oDWgPNA1MDiAHHBGoBagHHBIwExwMdBbMAswAdBXME1AMeBRMBEwEeBX8EHQMcAxQEFAQcA7cC7wGtBF0BXQGtBPAB9ATzBB8FHwXzBCAF/QT/BPME8wT/BCAFCgUgBQkFCQUgBf8ECAUHBQkFCQUHBQYFRwJLAjACMAJLAl4EXwBdAFwAXQBfAPcCxAGfBJoDmgOfBJ0ExAGaA74BvgGaA5gDvwG+AZwDnAO+AZgDngS/AaoDqgO/AZwDxQHGAcABwAHGAcEBpAGiAcABwAGiAcUBoQGiAaMBowGiAaQBowGoA6EBoQGoA70BtwIcA7YCtgIcAyEFHwMkAxQEFAQkAx0D1wMqAyIFIgUqAykD3AHDAtgD2APDAskC4gTuBMkCyQLuBNgDuALuBMQCxALuBOIExALGArgCuALGArkCXgDkAl8AXwDkAusCXwDrAvYC9gLrAukC9gLpAhcEFwTpAhkEAgQABBkEGQQABBcEAgTxAwAEAATxA+0D8QPyA+0D7QPyA+sDVwFSAVkBWQFSAVQBgwIjBfUB9QEjBfYB7wQkBYMCgwIkBSMFJAXvBCUFJQXvBDQDNQMmBTQDNAMmBSUFJgU1AzsDOwM1AzYD0gEhBdEB0QEhBRwDdQLkAScFJwXkAeYBfQJHAz8DPwNHA1sD3wR3AqUEpQR3AnYCigN4AtwE3AR4AnkCdQInBfUE9QQnBSgF9QQoBQEFAQUoBSkFKgX6BCkFKQX6BAEFUAPrAd0E3QTrAXsCKwX7BCoFKgX7BPoELAX+BCsFKwX+BPsELQUIBSwFLAUIBf4ELgUHBS0FLQUHBQgFBwUuBQMFAwUuBS8FAwUvBfcE9wQvBTAF9wQwBfkE+QQwBTEFMQUyBfkE+QQyBQ0FcAINBW4CbgINBTIFKgRDBCgEKARDBDMFNAUzBdIE0gQzBUME0gSyBDQFjQKzBIsChwKLArQEtASLArMErwQEBQwFDAUEBQsFCgUfBSAFHwUKBTUFrQTvAfQE9ATvAfAErQT0BK4ErgT0BB8FNQUFBR8FHwUFBa4ENQULBQQFCwU1BQoFZgQFBQQFBAUFBTUFtAQMBYcChwIMBYgCDAW0BK8ErwS0BLAEiAIGBfYE9gQGBQIFJQMgAycDJwMgAyIF1wMiBSEDIQMiBSADIQMSBNcD1wMSBCAEEgT8AyAEIAT8AwgECQQIBOUD5QMIBPwD5QPmAwkECQTmAzYFDQM3BQ8DDwM3BR4DHwMeAyQDJAMeAzcFFgXdAh8EHwTdAtYDFQUWBQoECgQWBR8ECgQLBBUFFQULBBkF4QPpA+ID4gPpA+oD9APzAzgFOAXzAwYEOQULBDYFNgULBAkEOgUaBTsFOwUaBRkFywTKBDoFOgXKBBoFOwUZBTkFOQUZBQsEPAU9BT4FPgU9BT8FPQVABT8FPwVABUEFQAVCBUEFQgVDBUEFQwVEBUEFQQVEBUUFRAVGBUUFRQVGBUcFRgVIBUcFSAVJBUcFRwVJBUoFSQVLBUoFSwVMBUoFTAVNBUoFSgVNBU4FTQVPBU4F9gH5AfcB9wH5AfgB+QH2Af0B/QH2ASMF/QEjBekE6QQjBSQF4gGPA+EB4QGPAzEDBALhAS8DLwPhATEDLwPqBAQCBALqBOQEDAJSAwsCCwJSAxYDDgILAhcDFwMLAhYDFwPtBA4CDgLtBOYEigPmAcUExQTmAeUB5gGKAycFJwWKA9wEJwXcBCgFKAXcBNkEKAXZBCkFKQXZBCkCpASmBKUEpQSmBFAD3QTfBFADUAPfBKUE2ATeBN0E3QTeBN8EVQRYBNgE2ARYBN4ERwPoAcAEwAToAecBSAN8AkcDRwN8AugB0wTXBEgDSAPXBHwCTQRQBNME0wRQBNcECQPkBDMDMwPkBOoEBAMJA8wBzAEJAzMDCgPmBD0DPQPmBO0EAgMKA9cB1wEKAz0D6QQkBRkDGQMkBSUFGQMlBQYDBgMlBSYFBgMmBQcDBwMmBTsDBwM7A6IEogQ7AzoDOQPQAToDOgPQAaIE0AE5A9IB0gE5A7UCtgIhBbUCtQIhBdIBBQMEA8sBywEEA8wBoQS/BMsBywG/BAUDIwMMA6EEoQQMA78EIgMNAyMDIwMNAwwDJAM3BSIDIgM3BQ0DAwMCA9gB2AECA9cBvgQDA6AEoAQDA9gBoAQoA74EvgQoAxADEQMQAycDJwMQAygDIgUpAycDJwMpAxEDTAROBE0ETQROBFAEOwI9AkwETAQ9Ak4EPQI7Aj8CPwI7AjoCUgJNAjoCOgJNAj8CTQJSAk4CTgJSAlACXARdBFACUAJdBE4CWwThAlwEXAThAl0E4QJbBOIC4gJbBBcFAAP6AhcFFwX6AuIC/gL5AgADAAP5AvoC7QLqAv4C/gLqAvkC7QLsAuoC6gLsAugCGAToAhsEGwToAuwCGwQEBBgEGAQEBAME7wMDBPUD9QMDBAQE9QP2A+8D7wP2A/ADRQIrBSoCKgIrBSoFYwQsBUUCRQIsBSsFYQQtBWMEYwQtBSwFLgIuBWEEYQQuBS0FLgUuAi8FLwUuAiwCLwUsAjAFMAUsAqsCMAWrAjEFMQWrAqQCMgUxBVgAWAAxBaQCbgIyBVcAVwAyBVgAbwJuAlQAVABuAlcAHAVvAlMAUwBvAlQAPwQcBT4EPgQcBVMAQAQ/BCcEJwQ/BD4EJwSBA0AEQASBAxAFDgUQBZ8CnwIQBYEDZQIOBUkASQAOBZ8CSQBIAGUCZQJIAGYCSACjAmYCZgKjAmMCJABjAp0CnQJjAqMCJQAkAJ4CngIkAJ0CngKpAiUAJQCpAlgCqAJZAqkCqQJZAlgCqgJaAqgCqAJaAlkCWgKqAlwCXAKqAiAAXAIgAF4CXgIgACIAXgIiAGoCagIiAKACcgJqAqICogJqAqACYQJyAkEAQQByAqICQQBAAGECYQJAAF8CggNfAn8DfwNfAkAAzgS2BKcCpwK2BD0EawIYAm0CbQIYAqYCMQIzAi8CLwIzAlUCVARWBFUEVQRWBFgEQwJXAlQEVARXAlYEQgJWAkMCQwJWAlcCSgJkBEICQgJkBFYCSAJfBEoCSgJfBGQELwJVAkgCSAJVAl8EMwIxAjUCNQIxAtQCbQKmAtQC1AKmAjUCFwIYAhIFEgUYAmsCpwIXAs4EzgQXAhIFIQQ9BLUEtQQ9BLYEIgQhBBsFGwUhBLUEfwMiBIIDggMiBBsFKQUpAioFKgUpAioC",min:[-3.04671,-1.19972,-.92025],max:[.46349,.39317,1.87926],reach:[-2.83733,-.51072,.14187]}};function io(){return{uReveal:{value:0},uTint:{value:0}}}function dh(i,t){let e=io();e.uFadeY={value:new i.Vector2(.95,1.7)};let n=new i.Group,s=(d,u)=>Fs(i,Object.assign({color:d,uniforms:e},u||{})),r=(d,u,p,m,g,A,f,_)=>{let M=new i.Mesh(new i.BoxGeometry(d,u,p),s(f,_));return M.position.set(m,g,A),n.add(M),M},o=2.75,a=[-2,-1,0,1,2],c=-1.95;r(16,4.6,.1,0,-.5,-1.7,2763306),r(15,.08,2,0,c,-.65,10132122),r(15,.32,.06,0,c-.12,.38,14211288),a.forEach(d=>r(.62,.2,.04,d*o-.7,c-.12,.42,4210752));let l=new i.Curve;l.getPoint=(d,u=new i.Vector3)=>{let p=d*Math.PI*2*3.5;return u.set(Math.cos(p)*1.08,Math.sin(p)*.5,-1.55+d*1.85)};let h=new i.TubeGeometry(l,140,.035,5,!1);return a.forEach(d=>{let u=new i.Mesh(h,s(15263976,{rim:.6}));u.position.set(d*o,-1.35,0),n.add(u)}),t&&a.forEach(d=>{if(d===0)return;let u=new i.Group;t.forEach(p=>u.add(new i.Mesh(p,s(12105912,{rim:.5,side:i.DoubleSide})))),u.position.set(d*o,0,-.35),u.scale.setScalar(.94),u.rotation.y=d*.04,n.add(u)}),r(16,2.6,.3,0,c-1.62,.42,9211020),r(7.2,1.25,.1,0,c-1.75,.62,2500134),r(2.2,.12,.06,0,c-1.25,.7,14737632,{rim:.6}),{group:n,u:e}}function vg(i,t){let e=Xe(i,t),n=e.getContext("2d"),s=n.createImageData(i,t),r=s.data,o=Zr(11),a=[];for(let c=0;c<70;c++)a.push([o(),.15+o()*.7,.008+Math.pow(o(),3)*.06]);for(let c=0;c<t;c++)for(let l=0;l<i;l++){let h=l/i,d=c/t,u=.55+.25*Ls(h*6,d*4,4,3)+.12*Ls(h*22,d*14,3,8);for(let[g,A,f]of a){let _=h-g;_-=Math.round(_);let M=(d-A)*.5,x=Math.sqrt(_*_+M*M)/f;x<1.35&&(u+=x<1?-.22*(1-x*x):.18*Math.exp(-Math.pow((x-1.08)/.12,2)))}d<.07&&(u=.95);let p=(c*i+l)*4,m=Math.max(0,Math.min(255,u*235));r[p]=r[p+1]=r[p+2]=m,r[p+3]=255}return n.putImageData(s,0,0),e}function fh(i){let t=io();t.uTint.value=1;let e=new i.CanvasTexture(vg(512,256)),n=new i.Mesh(new i.SphereGeometry(10,96,64),Fs(i,{map:e,uniforms:t,rim:.3,emissive:1579032})),s=new i.Group;return s.add(n),n.rotation.z=.35,{group:s,u:t,planet:n}}var hh=6;function ph(i,t){let e=io(),n=new i.Group,s=(u,p)=>Fs(i,Object.assign({color:u,uniforms:e},p||{})),r=4.7,o=4.6,a=new i.Mesh(new i.BoxGeometry(r*2+.7,o+.5,.18),s(6974058,{rim:.55}));a.position.z=-.12,n.add(a);let c=[];[-1,1].forEach(u=>{let p=new i.Mesh(new i.BoxGeometry(r,o,.05),s(10132122));p.position.set(u*(r/2+.18),0,.02),n.add(p);for(let m=0;m<2;m++)for(let g=0;g<3;g++){let A=u*(r/2+.18)+(g-1)*1.5,f=(.5-m)*2.12,_=new i.Mesh(new i.BoxGeometry(1.38,2.02,.03),s(16777215,{rim:.7}));_.position.set(A,f,.06),n.add(_),c.push(new i.Vector3(A,f,.1))}}),[-1.1,1.1].forEach(u=>{let p=new i.Mesh(new i.TorusGeometry(.32,.06,8,24),s(15790320,{rim:.7}));p.position.set(0,u,.12),p.rotation.y=Math.PI/2,n.add(p)});let l=t.map(u=>{let p=new i.CanvasTexture(eo(u,"face",256));return p.colorSpace=i.SRGBColorSpace,p}),h=new i.PlaneGeometry(1.26,1.89),d=0;return c.forEach((u,p)=>{if(p===hh)return;let m=new i.Mesh(h,s(16777215,{map:l[d++%l.length],rim:.2,emissive:5263440}));m.position.copy(u),m.position.z=.09,n.add(m)}),{group:n,u:e,pockets:c,slot:c[hh],size:new i.Vector2(r*2+.7,o+.5),textures:l}}function uh(i){let t=atob(i),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return new Uint16Array(e.buffer)}function Ah(i){let t=io(),e=new i.Group,n={};return["R","L"].forEach(s=>{let r=lh[s],o=uh(r.p),a=new Float32Array(o.length);for(let d=0;d<o.length;d++){let u=d%3;a[d]=r.min[u]+o[d]/65535*(r.max[u]-r.min[u])}let c=new i.BufferGeometry;c.setAttribute("position",new i.BufferAttribute(a,3)),c.setIndex(new i.BufferAttribute(uh(r.i),1)),c.computeVertexNormals();let l=new i.Mesh(c,Fs(i,{color:15921906,uniforms:t,rim:.45,side:i.DoubleSide}));l.frustumCulled=!1;let h=new i.Group;h.add(l),e.add(h),h.userData.reach=new i.Vector3().fromArray(r.reach),n[s]=h}),{group:e,u:t,hands:n}}var cs=1,hn=.15,ls=.8;function _g(i){let t=s=>{let r=Xe(i,i);return s(r.getContext("2d")),r},e=(s,r)=>{let o=i*.6,a=o/230;s.save(),s.translate(i/2-63*a,i/2-115*a),s.scale(a,a),s.fillStyle=r,ss.forEach(c=>s.fill(new Path2D(c))),s.restore()},n=(s,r)=>{s.beginPath(),s.arc(i/2,i/2,i*.455,0,Math.PI*2),s.lineWidth=i*.012,s.strokeStyle=r,s.stroke()};return{color:t(s=>{s.fillStyle="#b4f25e",s.fillRect(0,0,i,i),n(s,"#a6f357"),e(s,"#a6f357")}),orm:t(s=>{s.fillStyle="rgb(0,40,255)",s.fillRect(0,0,i,i),n(s,"rgb(0,200,0)"),e(s,"rgb(0,215,0)")}),emissive:t(s=>{s.fillStyle="#505050",s.fillRect(0,0,i,i),n(s,"#c8c8c8"),e(s,"#ffffff")}),coat:t(s=>{s.fillStyle="rgb(210,0,0)",s.fillRect(0,0,i,i),n(s,"rgb(30,0,0)"),e(s,"rgb(18,0,0)")})}}function Mg(i){let t=new i.RingGeometry(5e-4,ls,96,14),e=t.attributes.position;for(let n=0;n<e.count;n++){let s=Math.hypot(e.getX(n),e.getY(n))/ls;e.setZ(n,hn/2-.02+.016*(1-s*s))}return t.computeVertexNormals(),t}function mh(i,t){let e=new i.Scene;e.environment=t;let n=new i.PerspectiveCamera(16,1,.1,400),s=_g(512),r=(S,T)=>{let I=new i.CanvasTexture(S);return T&&(I.colorSpace=i.SRGBColorSpace),I.anisotropy=8,I},o=r(s.color,!0),a=r(s.orm),c=r(s.emissive,!0),l=r(s.coat),h=new i.Color("#a6f357"),d=new i.MeshPhysicalMaterial({map:o,roughness:1,metalness:1,roughnessMap:a,metalnessMap:a,clearcoat:1,clearcoatRoughness:.06,clearcoatMap:l,iridescence:.3,iridescenceIOR:1.3,iridescenceThicknessRange:[320,520],iridescenceMap:l,emissive:h,emissiveMap:c,emissiveIntensity:.85,envMapIntensity:1.3,transparent:!0}),u=new i.MeshPhysicalMaterial({color:new i.Color("#b4f25e"),roughness:.17,metalness:1,clearcoat:1,clearcoatRoughness:.06,iridescence:.3,iridescenceIOR:1.3,iridescenceThicknessRange:[320,520],emissive:h,emissiveIntensity:.075,envMapIntensity:1.3,transparent:!0}),p=[Cn(d,{amt:.06}),Cn(u,{amt:.05})],m=[[ls-.01,hn/2-.02],[ls+.05,hn/2],[cs-.06,hn/2],[cs-.012,hn/2-.014],[cs,hn/2-.04],[cs,-hn/2+.04],[cs-.012,-hn/2+.014],[cs-.06,-hn/2],[ls+.05,-hn/2],[ls-.01,-hn/2+.02]],g=new i.LatheGeometry(m.reverse().map(([S,T])=>new i.Vector2(S,T)),128);g.rotateX(Math.PI/2);let A=Mg(i),f=A.clone();f.rotateY(Math.PI);let _=new i.Group,M=new i.Group;M.add(new i.Mesh(g,u),new i.Mesh(A,d),new i.Mesh(f,d)),_.add(M),e.add(_),_.traverse(S=>{S.isMesh&&(S.frustumCulled=!1)});let x=-1,P=0;return{scene:e,camera:n,group:_,update(S,T,I,E,y){let R=Ce(T.o,0,1);if(R<=.005)return x=-1,!1;x<0&&(x=S),P=S,n.aspect=I/E,n.fov=16;let H=E/(Math.max(4,T.size)*Math.tan(i.MathUtils.degToRad(8)));n.position.set(0,0,H),n.near=H*.5,n.far=H*2,n.lookAt(0,0,0),n.setViewOffset(I,E,I/2-T.x,E/2-T.y,I,E),n.updateProjectionMatrix();let N=4.6,G=2.5,J=S-x,V=Math.floor(J/N),q=J-V*N,z=q<G?0:mi.io((q-G)/(N-G));return M.rotation.set(Math.sin(S*.9)*.07,(V+z)*Math.PI*2+(y||0),Math.sin(S*.7)*.025),e.environmentRotation.set(0,Math.sin(S*.23)*.5+M.rotation.y*.15,0),p.forEach(it=>{it.uHoloShift.value=S*.05+M.rotation.y*.4}),d.opacity=u.opacity=R,d.depthWrite=u.depthWrite=!0,!0},textures:[o,a,c,l],dispose(){[o,a,c,l].forEach(S=>S.dispose()),[g,A,f].forEach(S=>S.dispose()),d.dispose(),u.dispose()}}}function gh(){let i={},t=n=>i[n]||(i[n]={k:{},c:{}}),e={T:i,init(n,s){let r=t(n);for(let o in s)r.c[o]=s[o],r.k[o]=[[-1,s[o],"l"]];return e},tw(n,s,r,o,a){return[].concat(n).forEach(c=>{let l=t(c);for(let h in o){let d=h in l.c?l.c[h]:0;(l.k[h]||(l.k[h]=[])).push([s,d,"l"],[r,o[h],a||"io"]),l.c[h]=o[h]}}),e},set(n,s,r){return e.tw(n,s,s+1e-4,r,"step")},done(){return Object.values(i).forEach(n=>Object.values(n.k).forEach(s=>s.sort((r,o)=>r[0]-o[0]))),e},v(n,s,r,o=0){let a=i[n],c=a&&a.k[s];if(!c)return o;if(r<=c[0][0])return c[0][1];for(let l=1;l<c.length;l++){let h=c[l];if(r<=h[0]){let d=c[l-1],u=h[0]-d[0],p=u>0?(r-d[0])/u:1,m=h[2]==="step"?p>=1?1:0:(mi[h[2]]||mi.io)(p);return d[1]+(h[1]-d[1])*m}}return c[c.length-1][1]},all(n,s){let r=i[n],o={};if(!r)return o;for(let a in r.k)o[a]=e.v(n,a,s);return o}};return e}function xh(i){if(i<=0)return 0;if(i>=1)return 1;let t=[[0,.05],[.13,.17],[.24,.26],[.36,.42],[.5,1.01]];for(let[e,n]of t)if(i>=e&&i<n)return i>.5?Math.min(1,.55+(i-.5)*2):.75;return .04}var Ns={home:7,gifts:3},Mh=Ns.home,vh=-1.25,_h=.55,yg=1.38;function yh(i){let t=gh();return t.init("pack",{x:0,y:0,z:0,rx:0,ry:0,rz:0,s:i?yg:1,o:1,tear:0,mouth:0,spin:0}),t.init("c0",{x:0,y:-.4,z:0,rz:0,ry:0,s:.92,o:0,on:0,slot:0}),t.init("c1",{x:0,y:-.4,z:-.02,rz:0,s:.92,o:0}),t.init("c2",{x:0,y:-.4,z:-.04,rz:0,s:.92,o:0}),t.init("machine",{r:0}),t.init("mars",{r:0,y:-.9}),t.init("hands",{r:0,spread:1}),t.init("binder",{r:0,y:-10}),t.init("glow",{k:1}),t}function wg(i){let t=yh(i),e=i?.88:.96,n=i?.8:.76;return t.tw("machine",.12,.82,{r:1},"l"),i&&t.tw("pack",.08,.8,{s:1.1},"io"),t.tw("pack",1.1,1.85,i?{z:.85,y:.2,s:1.25}:{z:.85,y:.16},"io"),t.tw("machine",1.08,1.5,{r:0},"l"),t.tw("pack",2.08,2.55,{tear:1},"l"),t.tw("pack",2.15,2.45,{mouth:1},"o"),t.set(["c0","c1","c2"],2.16,{o:1}),t.tw("pack",2.3,2.88,i?{y:-1.12,z:.55,s:.82}:{y:-.92,z:.55,s:.7},"io"),t.tw("c0",2.3,2.86,{y:1.12,z:.14,s:i?1:.9},"o"),t.tw("c1",2.34,2.9,{x:-e,y:n,z:.04,rz:.2,s:i?1:.92},"o"),t.tw("c2",2.36,2.92,{x:e,y:n,z:0,rz:-.2,s:i?1:.92},"o"),t.tw("c1",3.08,3.5,{x:-3.6,rz:.55,o:0},"i"),t.tw("c2",3.1,3.52,{x:3.6,rz:-.55,o:0},"i"),t.tw("pack",3.08,3.48,{y:-6,o:0},"i"),t.tw("c0",3.14,3.74,{y:i?.22:.26,z:1.3,s:i?1.6:1.38},"io"),t.tw("c0",3.52,3.84,{on:1},"l"),t.tw("mars",3.3,3.92,{r:1},"l"),t.tw("mars",3.2,3.95,{y:0},"o"),t.tw("mars",4.06,4.5,{r:0},"l"),t.tw("binder",4.1,4.72,{y:0},"o"),t.tw("binder",4.16,4.66,{r:1},"l"),t.tw("c0",4.2,4.86,{slot:1},"io"),t.tw("binder",5.06,5.44,{r:0},"l"),t.tw("c0",5.08,5.46,{o:0},"l"),t.tw("glow",5.04,5.5,{k:0},"l"),t.done()}function Eg(i){let t=yh(i);return t.tw("hands",.1,.72,{r:1},"l"),t.tw("hands",.06,.84,{spread:0},"o"),t.tw("pack",.08,.86,{rz:-.1,y:.05,s:i?1.05:.9,z:.3,spin:1},"io"),t.tw("hands",1.04,1.4,{r:0,spread:.3},"l"),t.tw("pack",1.08,1.5,{y:-6,o:0},"i"),t.tw("glow",1.05,1.5,{k:0},"l"),t.done()}var so=()=>({off:new L,vel:new L,q:new Le,w:new L,held:!1}),Sg=new Le;function wh(i,t={}){let e=t.root||i.parentNode,n=!!t.reduce,s=t.page==="gifts"?"gifts":"home",r=Ns[s]-1,o=Math.min(window.devicePixelRatio||1,2),a=new Hn({canvas:i,antialias:o<2,alpha:!1,powerPreference:"high-performance"});a.toneMapping=di,a.toneMappingExposure=1,a.outputColorSpace=de,a.autoClear=!1,a.setClearColor(1184274,1);let c=new Sn,l=as(ve,a);c.environment=l;let h=new pe(30,1,.1,200),d={uRes:{value:new ht(1,1)},uP:{value:new se(.5,.5,.3,.4)},uK:{value:1}},u=new Pe(new Gn(2,2),new ke({uniforms:d,depthTest:!1,depthWrite:!1,vertexShader:"void main(){ gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:["precision highp float; uniform vec2 uRes; uniform vec4 uP; uniform float uK;","void main(){","  vec2 p = gl_FragCoord.xy / uRes; p.y = 1.0 - p.y; float asp = uRes.x / uRes.y;","  vec2 d = (p - uP.xy) * vec2(asp, 1.0);","  float spill = exp(-dot(d, d) / (uP.z * uP.z * 2.2));","  vec2 e = (p - vec2(uP.x, uP.y + uP.w)) * vec2(asp * 0.55, 2.4);","  float under = exp(-dot(e, e) / (uP.z * uP.z * 0.5));","  vec3 c = vec3(0.0706) + vec3(0.36, 0.62, 0.1) * (spill * 0.055 + under * 0.05) * uK;","  float n = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);","  gl_FragColor = vec4(c + (n - 0.5) / 255.0, 1.0);","}"].join(`
`)})),p=new Sn;p.add(u),u.frustumCulled=!1;let m=new Vn(-1,1,1,-1,0,1),g=os(ve,{quality:t.quality??1});c.add(g.group);let A=new ji(Mc());A.colorSpace=de;let _=[["SPCX",10130,"67.8926"],["TSLA",1583,"4.1674"],["NVDA",1452,"7.8912"]].map(B=>no(ve,B,{backTex:A}));_.forEach(B=>c.add(B.group));let M=mh(ve,l),x=ch(ve,a),P=dh(ve,eh(ve,.3));P.group.position.set(0,0,-.4);let S=fh(ve),T=ph(ve,[["TSLA",1583,"4.1674"],["NVDA",1452,"7.8912"],["AAPL",507,"1.8093"],["AMZN",667,"2.1361"],["META",1583,"2.4315"],["GME",3994,"157.4985"],["SPCX",405,"1.0744"]]),I=Ah(ve);x.scene.add(P.group,S.group,T.group,I.group);let E=B=>s==="gifts"?Eg(B):wg(B),y=!1,R=1,H=1,N=E(!1),G=7.4,J=0,V=12,q=o,z={s:1,x:0,y:0},it=!1,ut=[],nt=-11.7,wt=()=>{if(s!=="home")return;let B=N.all("c0",4),Z=.5-(B.y-Ze.H/2*B.s-J)/(G*(V-B.z)/V)-(y?.03:.025);nt=J+(.5-Z)*(G*(V+7)/V)-10},Rt=()=>{R=Math.max(1,e.clientWidth),H=Math.max(1,e.clientHeight),a.setPixelRatio(q),a.setSize(R,H,!1);let B=R/H,b=y;y=R<760||B<.85,b!==y&&(N=E(y)),G=y?Math.max(7,4.6/B):6.5,J=((y?.53:.585)-.5)*G,V=G/2/Math.tan(pi.degToRad(15)),h.fov=30,h.aspect=B,h.near=.1,h.far=V+60,h.position.set(0,J,V),h.lookAt(0,J,0),h.updateProjectionMatrix(),d.uRes.value.set(R*q,H*q),x.setSize(R,H,q,y?5:6,y?8.5:10);let Z=G*(V-vh)/V,ot=y?.34:.36,lt=y?.3:.32;z.s=lt*Z/2.12,z.y=J+(.5-ot)*Z-T.size.y/2*z.s,z.x=y?-T.slot.x*z.s:0;let bt=y?1.1:1;P.group.scale.setScalar(bt),P.u.uFadeY.value.set(.95*bt,1.7*bt),T.group.scale.setScalar(z.s),T.group.position.set(z.x,z.y,vh),wt(),it&&_i()},k=t.start??0,rt=0,gt=k,et=null,Dt=0,Nt=.82,Lt=2.4,Yt=()=>{et={m0:Ce(Math.round(gt),0,r),drive:gt}},$=B=>{if(!et)return;let{m0:b}=et,Q=et.drive-b,Z=b;(Math.abs(Q)>.08||Math.abs(B||0)>.6)&&(Z=b+Math.sign(Math.abs(Q)>.08?Q:B)),gt=Ce(Z,0,r),et=null},ct=B=>{et||Yt(),et.drive=Ce(et.drive+B,Math.max(0,et.m0-1),Math.min(r,et.m0+1)),gt=et.drive},D=()=>!!(t.isBlocked&&t.isBlocked()),dt=null,st=B=>{if(B.preventDefault(),D()||dt)return;let b=B.deltaY;B.deltaMode===1?b*=32:B.deltaMode===2&&(b*=H);let Q=performance.now();et&&Q-Dt>260&&$(0),Dt=Q,ct(b/760)},At=null,ft=B=>{if(dt||B.touches.length!==1||D())return;let b=B.touches[0].clientY;At={y:b,y0:b,t:performance.now(),vy:0},Yt()},Pt=B=>{if(B.cancelable&&B.preventDefault(),!At||dt)return;let b=B.touches[0].clientY,Q=performance.now(),Z=At.y-b;At.vy=.8*At.vy+.2*(Z/Math.max(1,Q-At.t)),At.y=b,At.t=Q,ct(Z/(H*.5))},Mt=()=>{if(!At)return;let B=At.vy*1e3/(H*.5);At=null,$(B)},C=B=>{let b=B.key;D()||B.target&&/^(INPUT|TEXTAREA|SELECT|BUTTON|A)$/.test(B.target.tagName)&&b===" "||(/^(ArrowDown|PageDown|ArrowRight| )$/.test(b)?(B.preventDefault(),v(Math.round(gt)+1)):/^(ArrowUp|PageUp|ArrowLeft)$/.test(b)?(B.preventDefault(),v(Math.round(gt)-1)):b==="Home"?v(0):b==="End"&&v(r))},v=B=>{et=null,gt=Ce(Math.round(B),0,r)},O={pack:so(),c0:so(),c1:so(),c2:so()},K=B=>B==="pack"?g.group:_[+B[1]].group,tt=0,X=0,Ct=!1,pt=null,yt=new kn,Vt=new kn,at=new re,Et=new L,It=new L,Ft=new qe(new L(-ge.W/2,-ge.H/2,-.4),new L(ge.W/2,ge.H/2,.4)),St=new qe(new L(-Ze.W/2,-Ze.H/2,-.06),new L(Ze.W/2,Ze.H/2,.06)),Ht={pack:1,c0:0,c1:0,c2:0},Qt=(B,b)=>{if(pt&&pt.o>.5&&Math.hypot(B-pt.x,b-pt.y)<pt.size*.7)return"coin";yt.origin.copy(h.position),yt.direction.set(B/R*2-1,1-b/H*2,.5).unproject(h).sub(h.position).normalize();let Q=null,Z=1/0;for(let ot in O){if(Ht[ot]<.5)continue;let lt=K(ot);if(!lt.visible||(lt.updateMatrixWorld(),at.copy(lt.matrixWorld).invert(),Vt.copy(yt).applyMatrix4(at),!Vt.intersectBox(ot==="pack"?Ft:St,Et)))continue;let bt=Et.applyMatrix4(lt.matrixWorld).distanceTo(h.position);bt<Z&&(Z=bt,Q=ot)}return Q},jt=B=>{let b=e.getBoundingClientRect();return[B.clientX-b.left,B.clientY-b.top]},U=B=>B.target&&B.target.closest&&B.target.closest('button, a, input, [role="dialog"]'),mt=0,Y=0,j=0,_t=0,vt=B=>{if(dt||D()||U(B)||B.pointerType==="mouse"&&B.button!==0)return;let[b,Q]=jt(B),Z=Qt(b,Q);if(Z){if(dt={key:Z,id:B.pointerId,x:b,y:Q,t:performance.now()},Z==="coin")Ct=!0,X=0;else{let ot=O[Z];ot.held=!0,ot.vel.set(0,0,0),ot.w.set(0,0,0)}et=null,At=null;try{e.setPointerCapture(B.pointerId)}catch{}e.style.cursor="grabbing"}},Ot=B=>{let[b,Q]=jt(B);if(dt&&B.pointerId===dt.id){let Z=performance.now(),ot=b-dt.x,lt=Q-dt.y,bt=Math.max(8,Z-dt.t)/1e3;if(dt.x=b,dt.y=Q,dt.t=Z,dt.key==="coin"){tt+=ot*.012,X+=(ot*.012/bt-X)*.4;return}let Ut=O[dt.key];K(dt.key).getWorldPosition(It);let Wt=2*Math.max(1,h.position.z-It.z)*Math.tan(pi.degToRad(15))/H;It.set(ot*Wt,-lt*Wt,0),Ut.off.add(It),Ut.vel.lerp(It.divideScalar(bt),.4);let Xt=Math.hypot(ot,lt);Xt>0&&(It.set(lt/Xt,ot/Xt,0),Ut.q.premultiply(new Le().setFromAxisAngle(It,Xt*.0055)),Ut.w.lerp(It.multiplyScalar(Xt*.0055/bt),.4));return}B.pointerType==="mouse"&&(j=b/R*2-1,_t=Q/H*2-1,D()||(e.style.cursor=!U(B)&&Qt(b,Q)?"grab":""))},ie=B=>{if(!dt||B.pointerId!==dt.id)return;let b=performance.now()-dt.t>90;if(dt.key==="coin")Ct=!1,b&&(X=0);else{let Q=O[dt.key];Q.held=!1,b&&(Q.vel.set(0,0,0),Q.w.set(0,0,0))}dt=null,e.style.cursor=""};e.addEventListener("wheel",st,{passive:!1}),e.addEventListener("pointerdown",vt),e.addEventListener("pointermove",Ot),e.addEventListener("pointerup",ie),e.addEventListener("pointercancel",ie),e.addEventListener("touchstart",ft,{passive:!0}),e.addEventListener("touchmove",Pt,{passive:!1}),e.addEventListener("touchend",Mt),e.addEventListener("touchcancel",Mt),window.addEventListener("keydown",C);let ue=()=>Rt();window.addEventListener("resize",ue);let Zt=B=>{for(let b in O){let Q=O[b];if(Q.held)continue;Q.vel.addScaledVector(Q.off,-15*B).multiplyScalar(Math.exp(-5.8*B)),Q.off.addScaledVector(Q.vel,B);let lt=Q.w.length();lt>1e-4&&(Q.q.premultiply(new Le().setFromAxisAngle(It.copy(Q.w).divideScalar(lt),lt*B)),Q.w.multiplyScalar(Math.exp(-B*2.4))),Q.q.slerp(Sg,1-Math.exp(-B*2.2)),Q.off.lengthSq()<1e-7&&Q.vel.lengthSq()<1e-7&&(Q.off.set(0,0,0),Q.vel.set(0,0,0))}if(!Ct&&(X*=Math.exp(-B*1.6),tt+=X*B,Math.abs(X)<1.2)){let b=Math.round(tt/(Math.PI*2))*Math.PI*2;tt+=(b-tt)*(1-Math.exp(-B*3))}},Ue=(B,b)=>{let Q=O[B];b.position.add(Q.off),b.quaternion.premultiply(Q.q)},be=new L,vi=new L,Wn=new L,je=(B,b,Q)=>{B.updateMatrixWorld(),be.set(0,0,0).applyMatrix4(B.matrixWorld).project(h),vi.set(b,Q,0).applyMatrix4(B.matrixWorld).project(h);let Z=(be.x*.5+.5)*R,ot=(.5-be.y*.5)*H;return{x:Z,y:ot,w:Math.abs(vi.x-be.x)*R,h:Math.abs(vi.y-be.y)*H}},Fe=0,hs=B=>{let b=N.all("pack",k),Q=Math.sin(Fe*.75)*.05,Z=Math.sin(Fe*.31)*.16,ot=Math.sin(Fe*.43+1)*.045,lt=dt&&dt.key==="pack",bt=y||lt?0:mt*.22,Ut=y||lt?0:Y*.12;g.group.position.set(b.x,b.y+Q,b.z),g.group.rotation.set(b.rx+ot+Ut,b.ry+Z+bt+b.spin*Math.PI*2,b.rz),g.group.scale.setScalar(b.s),g.group.visible=b.o>.01;let Bt=je(g.group,ge.W/2,ge.H/2);B||Ue("pack",g.group),g.setTear(b.tear),g.setMouth(b.mouth),g.setHolo(k*.45+Fe*.035+g.group.rotation.y*.9),c.environmentRotation.set(0,Math.sin(Fe*.11)*.45+Math.sin(k*.9)*.2,0),Ht={pack:b.o};let Wt=s==="home";_.forEach((le,Te)=>{let oe=N.all("c"+Te,k),fn=oe.x,$t=oe.y,Ne=oe.z,pn=oe.s,De=oe.rz,Me=Te===0&&oe.slot||0;if(Me>0){T.group.position.y=z.y+N.v("binder","y",k),T.group.updateMatrixWorld(),Wn.copy(T.slot).applyMatrix4(T.group.matrixWorld);let tn=(h.position.z-_h)/(h.position.z-Wn.z),ro=h.position.x+(Wn.x-h.position.x)*tn,Sh=h.position.y+(Wn.y-h.position.y)*tn,Ch=1.32*1.89*z.s*tn/Ze.H;fn+=(ro-fn)*Me,$t+=(Sh-$t)*Me,Ne+=(_h-Ne)*Me,pn+=(Ch-pn)*Me,De*=1-Me}let $e=Te===0&&Wt&&k>3.1&&k<5.6?1-Me*.5:0;if(le.group.position.set(fn,$t+(Te===0?Q*.6:0),Ne),le.group.rotation.set($e*(ot+Ut)*.8,(oe.ry||0)+$e*(Z*.7+bt),De),le.group.scale.setScalar(pn),B||Ue("c"+Te,le.group),le.setOpacity(oe.o),Ht["c"+Te]=oe.o,le.setHolo(k*.5+Fe*.04+le.group.rotation.y+Te*.3),Te===0){let tn=oe.on,ro=tn>0&&tn<1?Math.sin(tn*40)>.2?1:.35:1;le.setOn(tn*ro)}});let Xt=xh(N.v("machine","r",k));P.u.uReveal.value=Xt,S.u.uReveal.value=N.v("mars","r",k),S.group.position.set(0,nt+N.v("mars","y",k),-7),S.planet.rotation.y=Fe*.02+k*.15;let ee=N.v("hands","r",k),_e=N.v("hands","spread",k);I.u.uReveal.value=ee,Cg(I.hands,_e,y,b),T.u.uReveal.value=N.v("binder","r",k),T.group.position.y=z.y+N.v("binder","y",k);let Jt=N.v("glow","k",k);P.group.visible=Xt>.001,S.group.visible=S.u.uReveal.value>.001,T.group.visible=T.u.uReveal.value>.001,I.group.visible=ee>.001;let Tt=Wt&&k>3&&k<5.6,Be=Tt?je(_[0].group,Ze.W/2,Ze.H/2):je(g.group,ge.W/2,ge.H/2),Kt=Tt?N.v("c0","o",k):b.o;return d.uP.value.set(Be.x/R,Be.y/H,Math.max(.12,Be.h/H*.5),Be.h/H*.55),d.uK.value=Jt*Kt,{P:b,packScreen:Bt,so:Be,vk:Kt,glowK:Jt}},us=new L,bn=(B,b,Q,Z)=>{B.updateMatrixWorld(!0);let ot=1/0;for(let lt=0;lt<8;lt++)us.set(lt&1?b:-b,lt&2?Q:-Q,lt&4?Z:-Z).applyMatrix4(B.matrixWorld).project(h),ot=Math.min(ot,(.5-us.y*.5)*H);return ot},_i=()=>{let B=k;ut=[];for(let b=0;b<=r;b++){k=b,hs(!0);let Q=1/0;N.v("pack","o",b)>.5&&(Q=Math.min(Q,bn(g.group,ge.W/2,ge.H/2,.3))),_.forEach((Z,ot)=>{N.v("c"+ot,"o",b)>.5&&(Q=Math.min(Q,bn(Z.group,Ze.W/2,Ze.H/2,.01)))}),N.v("binder","r",b)>.5&&(Q=Math.min(Q,bn(T.group,T.size.x/2,T.size.y/2,.1))),ut.push(isFinite(Q)?Math.round(Q):null)}k=B},Yn=B=>{let{P:b,packScreen:Q,so:Z,vk:ot,glowK:lt}=hs(!1),bt=!B&&t.onFrame?t.onFrame(k,{phone:y,page:s,pack:Q,packVisible:b.o,target:gt,W:R,H,tops:ut}):null;pt=bt&&bt.coin?bt.coin:B?{x:R/2,y:H/2,size:80,o:1}:null,a.setRenderTarget(null),a.clear(!0,!0,!0),a.render(p,m),x.uniforms.uGlow.value=.9*lt*ot,x.render(h,Fe,{x:Z.x/R,y:Z.y/H,r:Math.max(.1,Z.h/H*.55)}),a.clearDepth(),a.render(c,h),pt&&M.update(Fe,pt,R,H,tt)&&(a.clearDepth(),a.render(M.scene,M.camera))},Xn=performance.now(),Mi=0,Os=!0,yi=16.7,Jn=0,w=0,F=B=>{if(!Os)return;Mi=requestAnimationFrame(F);let b=B-Xn,Q=Math.min(.05,b/1e3);Xn=B,Fe+=Q,w+=Q,w>2.5&&b<120&&q>1&&(yi+=(b-yi)*.05,Jn=yi>23?Jn+Q:Math.max(0,Jn-Q*.5),Jn>1.2&&(q=Math.max(1,q-.5),Jn=0,yi=16.7,Rt())),et&&B-Dt>260&&!At&&Dt&&($(0),Dt=0);let Z=gt-k;if(n)k=Math.round(gt),rt=0;else{let ot=Math.abs(Z)>1.05&&!et?Lt:Nt,lt=Ce(Z*3.4,-ot,ot);rt+=(lt-rt)*Math.min(1,Q*6.5),k+=rt*Q,Math.abs(Z)<8e-4&&Math.abs(rt)<.004&&(k=gt,rt=0)}k=Ce(k,0,r),mt+=(j-mt)*Math.min(1,Q*3),Y+=(_t-Y)*Math.min(1,Q*3),Zt(Q),Yn(!1)},W=()=>{let B=k;[g.textures,_.flatMap(b=>b.textures),M.textures,T.textures].flat().forEach(b=>a.initTexture(b));for(let b=0;b<=r;b++)k=b,Yn(!0);k=B};Rt();try{W()}catch{}return it=!0,_i(),Mi=requestAnimationFrame(F),{go:v,step:B=>v(Math.round(gt)+B),get t(){return k},get page(){return s},setPage(B){if(B=B==="gifts"?"gifts":"home",B!==s){s=B,r=Ns[B]-1,N=E(y),wt(),_i(),k=gt=0,rt=0,et=null;for(let b in O){let Q=O[b];Q.off.set(0,0,0),Q.vel.set(0,0,0),Q.q.identity(),Q.w.set(0,0,0)}W()}},renderNow(){Xn=performance.now(),F(Xn)},seek(B){k=gt=B,rt=0,et=null},resize:Rt,_dbg:{ascii:x,mars:S,binder:T,machine:P,hands:I,renderer:a,camera:h,scene:c,grabs:O,get dpr(){return q}},destroy(){Os=!1,cancelAnimationFrame(Mi),e.removeEventListener("wheel",st),e.removeEventListener("pointerdown",vt),e.removeEventListener("pointermove",Ot),e.removeEventListener("pointerup",ie),e.removeEventListener("pointercancel",ie),e.removeEventListener("touchstart",ft),e.removeEventListener("touchmove",Pt),e.removeEventListener("touchend",Mt),e.removeEventListener("touchcancel",Mt),window.removeEventListener("keydown",C),window.removeEventListener("resize",ue),g.dispose(),_.forEach(B=>B.dispose()),M.dispose(),x.dispose(),a.dispose()}}}function Cg(i,t,e,n){let s=e?.85:1,r=i.L,o=i.R,a=o.userData.reach,c=r.userData.reach,l=1*n.s;o.scale.setScalar(s),r.scale.setScalar(s),o.position.set(n.x+l-a.x*s+t*5,n.y+.5-a.y*s+t*1.4,n.z+.15),r.position.set(n.x-l-c.x*s-t*5,n.y-.45-c.y*s-t*1.4,n.z+.15)}function Eh(i,t={}){let e=new Hn({canvas:i,antialias:!0,alpha:!0,premultipliedAlpha:!0});e.toneMapping=di,e.outputColorSpace=de,e.setClearColor(0,0);let n=new Sn;n.environment=as(ve,e);let s=new pe(18,1,.1,100),r=os(ve,{quality:.8});n.add(r.group);let o=1,a=1,c=t.box||{x:195,y:441,h:416},l=-1,h=0,d=!0,u=!1,p=()=>{o=Math.max(1,i.clientWidth),a=Math.max(1,i.clientHeight),e.setPixelRatio(Math.min(2,(window.devicePixelRatio||1)*(t.scale||1))),e.setSize(o,a,!1);let g=ge.H/(c.h/a),A=g/2/Math.tan(pi.degToRad(9));s.aspect=o/a,s.position.set(0,0,A),s.updateProjectionMatrix();let f=g/a;s.setViewOffset(o,a,o/2-c.x,a/2-c.y,o,a)},m=g=>{if(!d||(h=requestAnimationFrame(m),!u))return;let A=l<0?0:g-l,f=A<650?Math.sin(A/650*Math.PI*7)*(1-A/650)*.06:0,_=is(650,1180,A),M=is(700,1050,A),x=mi.i(Ce((A-1900)/660,0,1));r.group.rotation.set(Math.sin(g/900)*.04,Math.sin(g/1400)*.12,f+x*.25),r.group.position.set(0,-x*ge.H*1.4,0),r.setTear(_),r.setMouth(M),r.setHolo(g/3e3+A/900),n.environmentRotation.set(0,g/5e3,0),e.clear(),e.render(n,s)};return p(),h=requestAnimationFrame(m),window.addEventListener("resize",p),{play(g){g&&(c=g),p(),l=performance.now(),u=!0,i.style.opacity="1"},reset(){u=!1,l=-1,r.setTear(0),r.setMouth(0),e.clear(),i.style.opacity="0"},destroy(){d=!1,cancelAnimationFrame(h),window.removeEventListener("resize",p),r.dispose(),e.dispose()}}}window.SR4={THREE:ve,createHome:wh,createRip:Eh,MILESTONES:Mh,PAGES:Ns,createPack:os,createCard:no,studioEnv:as,version:"4.1.0"};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
