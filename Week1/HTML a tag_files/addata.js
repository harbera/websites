(function(){var l=this,aa=function(){var a=p,b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b},q=function(a){return"string"==typeof a},ba=function(a,b,c){return a.call.apply(a.bind,arguments)},ca=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},r=function(a,b,c){r=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?
ba:ca;return r.apply(null,arguments)},da=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}},t=Date.now||function(){return+new Date},ea=function(){var a=u,b=v;function c(){}c.prototype=b.prototype;a.ha=b.prototype;a.prototype=new c;a.ga=function(a,c,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[c].apply(a,g)}};var w=function(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c};var v=function(a,b){this.ea=a;this.D=b;var c=document.documentMode;this.P=c&&10>c;this.g={};this.v=!1},z=function(a){a.v=!0;for(var b in a.g)a.g[b].G&&x(a,b),y(a,b)},B=function(a,b){var c=b.n;switch(b.t){case 1:var d=b.d,c=A(a,c);c.G(d);break;case 2:var d=a,e=A(d,c);e.H=!0;y(d,c)}},A=function(a,b){a.g[b]||(a.g[b]={H:!1,A:[],G:null});return a.g[b]},y=function(a,b){var c=A(a,b);if(c.H){for(var d=c.A.length,e=0;e<d;e++)a.sendMessage(b,c.A[e]);c.A=[]}},x=function(a,b){if(a.v){var c={t:2};c.s=a.D;c.n=
b;a.send(c)}};v.prototype.B=function(a,b){var c=A(this,a);c.G=b;x(this,a)};v.prototype.sendMessage=function(a,b){var c=A(this,a);this.v&&c.H?(c={t:1},c.s=this.D,c.n=a,c.d=b,this.send(c)):c.A.push(b)};v.prototype.$=function(){return this.v};var u=function(a,b,c,d,e){var f;try{f=!!document.cookie}catch(g){f=!1}if(f&&(f=window.location.origin||window.location.protocol+"//"+window.location.host,!0!==window.secureChannel_allowAnyParent&&b!==f&&-1===c.indexOf(b)&&!C(d,function(a){return a.test(b)})))throw Error();window.postMessage&&(v.call(this,a,e),this.R=!!window.MessageChannel,this.C=b,this.b=this.w=null,window.addEventListener("message",r(this.X,this),!1),window.addEventListener("load",r(this.Z,this),!1))};ea();
u.prototype.send=function(a){this.R?this.w&&this.w.postMessage(a):(a=this.P?JSON.stringify(a):a,this.b.contentWindow.postMessage(a,"*"))};
u.prototype.Z=function(){var a={t:0};a.s=this.D;if(this.R){var b=new MessageChannel;this.w=b.port1;this.w.onmessage=r(function(a){B(this,a.data)},this);this.ea.postMessage(a,this.C,[b.port2]);z(this)}else this.b=document.createElement("iframe"),this.b.style.display="none",b='<!doctype html><html><head><script>window.addEventListener("message",function(e){e.source.parent.postMessage(e.data,'+JSON.stringify(this.C)+");},false);\x3c/script></head><body></body></html>",this.b.srcdoc=b,this.b.src="javascript:'"+
encodeURI(b)+"'",this.b.onload=r(function(){this.send(a);z(this)},this),document.body.appendChild(this.b)};u.prototype.X=function(a){var b;b=a.data;b=this.P?JSON.parse(b):b;b.s!==this.D||a.source!==window.parent||"*"!==this.C&&a.origin!==this.C||B(this,b)};var D=window;var E=Array.prototype,F=E.indexOf?function(a,b,c){return E.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(q(a))return q(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},fa=E.forEach?function(a,b,c){E.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},C=E.some?function(a,b,c){return E.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):
a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1};var ga=function(a,b){var c,d;for(d in a)b.call(c,a[d],d,a)},ha=function(a,b){var c,d={},e;for(e in a)b.call(c,a[e],e,a)&&(d[e]=a[e]);return d},ia=function(a,b){var c,d;for(d in a)if(b.call(c,a[d],d,a))return d};var H;a:{var I=l.navigator;if(I){var J=I.userAgent;if(J){H=J;break a}}H=""}var K=function(a){var b=H;return-1!=b.indexOf(a)};var ja=function(){return K("Opera")||K("OPR")},ka=function(){return K("Trident")||K("MSIE")},la=ja,ma=ka;var na=la();ma();var oa,pa="WebKit",qa=H,ra=(oa=-1!=qa.toLowerCase().indexOf(pa.toLowerCase()))&&!K("Edge");if(na&&l.opera){var p=l.opera.version;"function"==aa()&&p()};var sa=function(a,b,c,d){var e=null,f=null,g=null,h="";a&&(h+=a+":");c&&(h+="//",b&&(h+=b+"@"),h+=c,d&&(h+=":"+d));e&&(h+=e);f&&(h+="?"+f);g&&(h+="#"+g);return h},ta=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/,N=function(a){if(L){L=!1;var b=l.location;if(b){var c=b.href;if(c&&(c=M(N(c)[3]||null))&&c!=b.hostname)throw L=!0,Error();}}return a.match(ta)},L=ra,M=function(a){var b=!0;return a?b?decodeURI(a):decodeURIComponent(a):a};var O=function(a,b,c){var d;a.addEventListener?a.addEventListener(b,c,d||!1):a.attachEvent&&a.attachEvent("on"+b,c)},ua=function(a,b,c){var d;a.removeEventListener?a.removeEventListener(b,c,d||!1):a.detachEvent&&a.detachEvent("on"+b,c)};var va=function(a,b,c){a.google_image_requests||(a.google_image_requests=[]);var d=a.document.createElement("img");if(c){var e=function(a){c(a);ua(d,"load",e);ua(d,"error",e)};O(d,"load",e);O(d,"error",e)}d.src=b;a.google_image_requests.push(d)};var wa=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(null,a[c],c,a)};function xa(a,b){var c,d;d=d||document;var e=d.createElement("script");e.type="text/javascript";b&&(void 0!==e.onreadystatechange?e.onreadystatechange=function(){if("complete"==e.readyState||"loaded"==e.readyState)try{b()}catch(a){}}:e.onload=b);c&&(e.id=c);e.src=a;var f=d.getElementsByTagName("head")[0];if(f)try{window.setTimeout(function(){f.appendChild(e)},0)}catch(g){}}
var ya=function(){var a;a=a||D;return"http:"==a.location.protocol};var P=function(a,b){this.S=b;this.J=null;this.h="";this.a="1";xa(a,r(this.Y,this))};P.prototype.Y=function(){this.a=null;if(window.botguard)if(window.botguard.bg)try{this.J=new window.botguard.bg(this.S)}catch(a){this.a="5"}else this.a="3";else this.a="2"};var za=function(a){if(a.a)return"";if(!a.J.invoke)return a.a="4","";var b;try{b=a.J.invoke()}catch(c){return a.a="6",""}return b&&b.length?b:(a.a="6","")};
P.prototype.getError=function(){return this.a?this.a:this.h.length?3>this.h.length?"7":750<this.h.length?"8":null:null};var Aa={CLOSE:"c",IN_APP_PURCHASE:"p",LOCATION:"l",TELEPHONE:"t"};var Q=function(a,b){this.F=a;this.j=b;this.K=[];this.I=Infinity;this.l=null;var c=this.j.bg;c&&(this.l=new P(c.u,c.c));this.F.B("event",r(this.W,this));window.addEventListener("click",r(this.ba,this),!0);window.addEventListener("touchstart",r(this.ca,this),!0);Ba(this);this.exit=this.U;this.exitNonCharging=this.V;this.RedirectType=Aa},Ba=function(a){a.F.B("exit-pmcfg",r(function(a){this.M=a},a))};Q.prototype.U=function(a,b){Ca(this,a,void 0,b)};Q.prototype.V=function(a){Ca(this,a,38)};
var Ca=function(a,b,c,d){var e;if(1!=a.j.exit_strategy||d)e=!1;else{var f;if(f=b)f=(f=(f=a.j.google_template_data)&&f.adData)&&f[0]&&f[0][b];f=f||a.j.redirect_url;e=q(f)&&(N(f)[1]||null);e=q(e)&&0==e.toLowerCase().indexOf("http")?null!=D.open(f,"_blank"):!1}f={};f.f=b;f.c=c;f.r=d;f.d=a.K;f.o=e;a.l&&(b=a.l,b.h=za(b),b=b.h,f.br=b,f.be=a.l.getError());a.M&&D.parent.postMessage?(b={},b.n=a.M,b.er=f,D.parent.postMessage(b,"*")):a.F.sendMessage("exit",f)},Da=function(a,b,c,d){var e={};e.x=b;e.y=c;e.e=d;
e.t=Date.now()-a.I;a.K.push(e)};Q.prototype.ba=function(a){Da(this,a.clientX,a.clientY,0)};Q.prototype.ca=function(a){a.changedTouches&&0<a.changedTouches.length&&Da(this,a.changedTouches[0].clientX,a.changedTouches[0].clientY,1)};Q.prototype.W=function(a){switch(a.e){case "onshow":this.I=t()}};var Ea="jserror",Fa=.01,Ga=Math.random(),Ha=function(a){var b="";wa(a,function(a,d){if(0===a||a){var e;e=String(a);e="function"==typeof encodeURIComponent?encodeURIComponent(e):escape(e);b+="&"+d+"="+e}});return b};var Ia=["googleads.g.doubleclick.net","adclick.g.doubleclick.net","www.googleadservices.com","adclick.googleadservices.com"];var Ja=["destinationUrl","displayUrl"],Ka="googlesyndication.com googleadservices.com googleusercontent.com doubleclick.net youtube.com googleapis.com gstatic.com google-analytics.com".split(" "),La=function(a,b,c,d){d=d||{};d.i=a.T;d.t=a.fa;d.c=b;d.m=c;d.lp=a.aa;a.L&&(d.e=a.L);a.da(d)},Ma=function(a,b){return function(c,d,e){var f={};e&&(f.jsl=e);d&&(f.jsf=d);La(a,"j",c,f);b&&b(c,d,e)}},Na=function(a){var b=N(a),c=function(a){return w(b[3],a)};return C(Ka,c)?a:sa(b[1],b[2],b[3],b[4])},Pa=function(a,
b,c){var d={},e=0,f=function(a,b,c,f){d["a"+e]=a;null!=b&&(d["f"+e]=b);null!=c&&null!=f&&(d["s"+e]=c,d["d"+e]=f);e++};0!=b&&f("layout","layout",0,b.toFixed(4));if(b=window.performance&&window.performance.timing)b=b.responseEnd-b.navigationStart,f("http"+(ya()?"":"s"),"layout_html",0,b.toFixed(4));window.performance&&window.performance.getEntries&&(fa(window.performance.getEntries(),function(b){var d=ia(c,function(a){return b.name&&w(b.name,a)});d&&d in c&&delete c[d];if(Oa(b.name)&&a.O){var e=0<b.startTime?
b.startTime.toFixed(4):null,k=0<b.responseEnd?(b.responseEnd-b.startTime).toFixed(4):null;f(Na(b.name),d,e,k)}}),(a.O||a.N)&&ga(c,function(a,b){f(a,b,-1,-1)}));0<e&&La(a,"p","",d)},Qa=function(a){return ha(a,function(a,c){return q(a)&&Oa(a)&&!(0<=F(Ja,c))})},Oa=function(a){var b;if(b=/^(https?:)?\/\//.test(a))(b=a)?(a=M(N(b)[5]||null))?(b=b?(b=M(N(b)[3]||null))?0<=F(Ia,b):!1:!1,a=b&&-1!=a.indexOf("/aclk")):a=!1:a=!1,b=!a;return b},Ra=function(a,b,c,d,e){var f=r(Function.prototype.apply,b,c,Array.prototype.slice.call(arguments,
3));if(d&&d.monitoring){var g;g=d.monitoring;g={T:g.creativeId||-1,fa:g.templateId||-1,L:g.experimentId,N:g.reportErrors||!1,O:g.reportPerf||!1,da:a,aa:g.layoutPath};var h=d.monitoring.loadTime?t()-d.monitoring.loadTime:0,n=d.google_template_data.adData[0],k=g,n=Qa(n),k=da(Pa,k,h,n);window.setTimeout(k,1E4);if(g.N){k=window.onerror;window.onerror=Ma(g,k);try{f()}catch(m){var f=Ma(g,k),G;g=m.toString();m.name&&-1==g.indexOf(m.name)&&(g+=": "+m.name);m.message&&-1==g.indexOf(m.message)&&(g+=": "+m.message);
if(m.stack){k=m.stack;n=g;try{for(-1==k.indexOf(n)&&(k=n+"\n"+k);k!=G;)G=k,k=k.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");g=k.replace(/\n */g,"\n")}catch(mb){g=n}}G=g;f(G,m.lineNumber,m.fileName)}}else f()}else f()},Sa=function(a){var b,c="html5-mon",d=1;try{var e,d=d||Fa,f=c==Ea?Math.random():Ga;if(e=f<d){var g="/pagead/gen_204?id="+c+Ha(a),h="http"+(ya()?"":"s")+"://pagead2.googlesyndication.com"+g,h=h.substring(0,2E3);"undefined"===typeof b?(b=D,va(b,h,void 0)):(a=D,va(a,h,b))}}catch(n){}};for(var R,Ta=window.location.hash.substring(1),Ua={},Va=Ta.split("&"),S=0;S<Va.length;S++){var Wa=Va[S].split("=");Ua[Wa[0]]=decodeURIComponent(Wa[1])}R=Ua;var T=R.p;0!=T.indexOf("http")&&(T="*");var U;
var Xa=window.parent,Ya=T,Za="http://googleads.g.doubleclick.net https://googleads.g.doubleclick.net https://adwords-displayads.googleusercontent.com http://bid.g.doubleclick.net https://bid.g.doubleclick.net http://ad.doubleclick.net https://ad.doubleclick.net http://s0.2mdn.net https://s0.2mdn.net http://s1.2mdn.net https://s1.2mdn.net".split(" "),$a=[/https:\/\/doc-[0-9a-z]{2}-[0-9a-z]{2}-adspreview\.googleusercontent\.com/,/https:\/\/doc-[0-9a-z]{2}-[0-9a-z]{2}-adsdynamic\.googleusercontent\.com/,
/https?:\/\/doc-[0-9a-z]{2}-[0-9a-z]{2}-adspreview-qalive\..{4}\.googleusercontent\.com/],ab=R.t;try{U=new u(Xa,Ya,Za,$a,ab)}catch(bb){U=null}
if(U){U.B("adData",function(a){if(window.onAdData){var b=new Q(U,a),c=Date.now();b.I=c;Ra(Sa,window.onAdData,window,a,b)}});var cb,V=U,db=cb||"secureChannel",eb=V,fb,gb=db,hb=eb,ib=fb,W=gb.split("."),X=ib||l;W[0]in X||!X.execScript||X.execScript("var "+W[0]);for(var Y;W.length&&(Y=W.shift());){var Z;if(Z=!W.length){var jb=hb;Z=void 0!==jb}Z?X[Y]=hb:X=X[Y]?X[Y]:X[Y]={}}var kb=V;kb.registerApplicationHandler=V.B;var lb=V;lb.sendMessage=V.sendMessage;var nb=V;nb.isInitialized=V.$};})()
