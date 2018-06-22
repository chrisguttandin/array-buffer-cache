// tslint:disable-next-line:max-line-length
export const worker = `!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=60)}([function(e,t,r){var n=r(19)("wks"),o=r(18),i=r(1).Symbol,u="function"==typeof i;(e.exports=function(e){return n[e]||(n[e]=u&&i[e]||(u?i:o)("Symbol."+e))}).store=n},function(e,t){var r=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(e,t,r){!function(e,t,r,n){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t,r=r&&r.hasOwnProperty("default")?r.default:r,n=n&&n.hasOwnProperty("default")?n.default:n;var o=function(e,t){return void 0===t?e:t.reduce(function(e,t){if("capitalize"===t){var o=e.charAt(0).toUpperCase(),i=e.slice(1);return""+o+i}return"dashify"===t?r(e):"prependIndefiniteArticle"===t?n(e)+" "+e:e},e)},i=function(e,r){for(var n=/\\\${([^.}]+)((\\.[^(]+\\(\\))*)}/g,i=[],u=n.exec(e);null!==u;){var a={modifiers:[],name:u[1]};if(void 0!==u[3])for(var c=/\\.[^(]+\\(\\)/g,f=c.exec(u[2]);null!==f;)a.modifiers.push(f[0].slice(1,-2)),f=c.exec(u[2]);i.push(a),u=n.exec(e)}var s=i.reduce(function(e,n){return e.map(function(e){return"string"==typeof e?e.split(function(e){var t=e.name+e.modifiers.map(function(e){return"\\\\."+e+"\\\\(\\\\)"}).join("");return new RegExp("\\\\$\\\\{"+t+"}","g")}(n)).reduce(function(e,i,u){return 0===u?[i]:n.name in r?[].concat(t(e),[o(r[n.name],n.modifiers),i]):[].concat(t(e),[function(e){return o(e[n.name],n.modifiers)},i])},[]):[e]}).reduce(function(e,r){return[].concat(t(e),t(r))},[])},[e]);return function(e){return s.reduce(function(r,n){return[].concat(t(r),"string"==typeof n?[n]:[n(e)])},[]).join("")}};e.compile=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=void 0===e.code?void 0:i(e.code,t),n=void 0===e.message?void 0:i(e.message,t);return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments[1],i=void 0===o&&(t instanceof Error||void 0!==t.code&&"Exception"===t.code.slice(-9))?{cause:t,missingParameters:{}}:{cause:o,missingParameters:t},u=i.cause,a=i.missingParameters,c=void 0===n?new Error:new Error(n(a));return null!==u&&(c.cause=u),void 0!==r&&(c.code=r(a)),void 0!==e.status&&(c.status=e.status),c}},Object.defineProperty(e,"__esModule",{value:!0})}(t,r(59),r(32),r(31))},function(e,t){var r={}.hasOwnProperty;e.exports=function(e,t){return r.call(e,t)}},function(e,t,r){e.exports=!r(24)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t,r){var n=r(12);e.exports=function(e){if(!n(e))throw TypeError(e+" is not an object!");return e}},function(e,t,r){var n=r(5),o=r(52),i=r(51),u=Object.defineProperty;t.f=r(4)?Object.defineProperty:function(e,t,r){if(n(e),t=i(t,!0),n(r),o)try{return u(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(e[t]=r.value),e}},function(e,t,r){var n=r(6),o=r(11);e.exports=r(4)?function(e,t,r){return n.f(e,t,o(1,r))}:function(e,t,r){return e[t]=r,e}},function(e,t){var r=e.exports={version:"2.5.7"};"number"==typeof __e&&(__e=r)},function(e,t,r){var n=r(19)("keys"),o=r(18);e.exports=function(e){return n[e]||(n[e]=o(e))}},function(e,t){e.exports={}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t){var r=Math.ceil,n=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?n:r)(e)}},function(e,t,r){var n=r(13);e.exports=function(e){return Object(n(e))}},function(e,t,r){var n=r(6).f,o=r(3),i=r(0)("toStringTag");e.exports=function(e,t,r){e&&!o(e=r?e:e.prototype,i)&&n(e,i,{configurable:!0,value:t})}},function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,t){var r=0,n=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++r+n).toString(36))}},function(e,t,r){var n=r(8),o=r(1),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:n.version,mode:r(27)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(e,t,r){var n=r(14),o=Math.min;e.exports=function(e){return e>0?o(n(e),9007199254740991):0}},function(e,t){var r={}.toString;e.exports=function(e){return r.call(e).slice(8,-1)}},function(e,t,r){var n=r(44),o=r(13);e.exports=function(e){return n(o(e))}},function(e,t,r){var n=r(12),o=r(1).document,i=n(o)&&n(o.createElement);e.exports=function(e){return i?o.createElement(e):{}}},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t,r){var n=r(53);e.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,o){return e.call(t,r,n,o)}}return function(){return e.apply(t,arguments)}}},function(e,t,r){var n=r(1),o=r(8),i=r(25),u=r(7),a=r(3),c=function(e,t,r){var f,s,l,p=e&c.F,d=e&c.G,v=e&c.S,h=e&c.P,y=e&c.B,g=e&c.W,m=d?o:o[t]||(o[t]={}),b=m.prototype,w=d?n:v?n[t]:(n[t]||{}).prototype;for(f in d&&(r=t),r)(s=!p&&w&&void 0!==w[f])&&a(m,f)||(l=s?w[f]:r[f],m[f]=d&&"function"!=typeof w[f]?r[f]:y&&s?i(l,n):g&&w[f]==l?function(e){var t=function(t,r,n){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,r)}return new e(t,r,n)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(l):h&&"function"==typeof l?i(Function.call,l):l,h&&((m.virtual||(m.virtual={}))[f]=l,e&c.R&&b&&!b[f]&&u(b,f,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,e.exports=c},function(e,t){e.exports=!0},function(e,t,r){!function(e){"use strict";var t=new WeakMap,r=Number.MAX_SAFE_INTEGER||9007199254740991,n=function(e){var n=t.get(e),o=void 0===n||n>2147483648?0:n+1;if(e.size<1073741824){for(;e.has(o);)o=Math.floor(2147483648*Math.random());return t.set(e,o),o}if(e.size>r)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;e.has(o);)o=Math.floor(Math.random()*r);return t.set(e,o),o};e.addUniqueNumber=function(e){var t=n(e);return e.add(t),t},e.generateUniqueNumber=n,Object.defineProperty(e,"__esModule",{value:!0})}(t)},function(e,t,r){"use strict";r.r(t);var n=function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function o(e,t){var r,n,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,n=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}var i=r(2),u=-32603,a=-32602,c=-32601,f=Object(i.compile)({message:'The requested method called "\${method}" is not supported.',status:c}),s=Object(i.compile)({message:'The handler of the method called "\${method}" returned no required result.',status:u}),l=Object(i.compile)({message:'The handler of the method called "\${method}" returned an unexpected result.',status:u}),p=Object(i.compile)({message:'The specified parameter called "portId" with the given value "\${portId}" does not identify a port connected to this worker.',status:a}),d=function(e,t,r){return function(n){var i=n.data,u=i.id,a=i.method,c=i.params;return function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function u(e){try{c(n.next(e))}catch(e){i(e)}}function a(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){e.done?o(e.value):new r(function(t){t(e.value)}).then(u,a)}c((n=n.apply(e,t||[])).next())})}(void 0,void 0,void 0,function(){var n,i,p,d,v,h,y,g,m,b,w,x,O,_,j,M;return o(this,function(o){switch(o.label){case 0:n=t[a],o.label=1;case 1:if(o.trys.push([1,8,,9]),void 0===n)throw f({method:a});if(void 0===(i=n(c)))throw s({method:a});return i instanceof Promise?[4,i]:[3,3];case 2:return d=o.sent(),[3,4];case 3:d=i,o.label=4;case 4:if(p=d,null!==u)return[3,5];if(void 0!==p.result)throw l({method:a});return[3,7];case 5:if(void 0===p.result)throw l({method:a});return h=(v=p).result,y=v.transferables,g=void 0===y?[]:y,b=(m=e).postMessage,w=[{id:u,result:h}],[4,r];case 6:b.apply(m,w.concat([o.sent()?g:[]])),o.label=7;case 7:return[3,9];case 8:return x=o.sent(),_=(O=x).message,j=O.status,M=void 0===j?-32603:j,e.postMessage({error:{code:M,message:_},id:u}),[3,9];case 9:return[2]}})})}},v=r(28),h=new Map,y=new Promise(function(e){var t=new ArrayBuffer(0),r=new MessageChannel,n=r.port1,o=r.port2;n.onmessage=function(t){var r=t.data;return e(null!==r)},o.postMessage(t,[t])});r.d(t,"createWorker",function(){return g});var g=function(e,t){var r=function(e,t){return n({},t,{connect:function(r){var n=r.port;n.start();var o=e(n,t),i=Object(v.generateUniqueNumber)(h);return h.set(i,function(){o(),n.close(),h.delete(i)}),{result:i}},disconnect:function(e){var t=e.portId,r=h.get(t);if(void 0===r)throw p({portId:t.toString()});return r(),{result:null}}})}(g,t),o=d(e,r,y);return e.addEventListener("message",o),function(){return e.removeEventListener("message",o)}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.ArrayBufferStore=class{constructor(){this._store=new Map}clone(e){const t=this._store.get(e);if(void 0===t)throw new Error('There is no arrayBuffer stored with an id called "'+e+'".');return t.slice(0)}purge(e){if(!this._store.delete(e))throw new Error('There is no arrayBuffer stored with an id called "'+e+'".')}slice(e,t,r){const n=this._store.get(e);if(void 0===n)throw new Error('There is no arrayBuffer stored with an id called "'+e+'".');if(t<0||t>n.byteLength)throw new Error('The given value for begin "'+t+'" is out of bounds.');if(null!==r){if(r>n.byteLength)throw new Error('The given value for end "'+r+'" is out of bounds.');if(r<t)throw new Error('The given value for end "'+r+'" is below the given value for begin "'+t+'".')}return n.slice(t,null===r?n.byteLength:r)}store(e,t){if(this._store.has(e))throw new Error('There is already an arrayBuffer stored with an id called "'+e+'".');this._store.set(e,t)}}},function(e,t){var r=function(e){var t,r,n=/\\w+/.exec(e);if(!n)return"an";var o=(r=n[0]).toLowerCase(),i=["honest","hour","hono"];for(t in i)if(0==o.indexOf(i[t]))return"an";if(1==o.length)return"aedhilmnorsx".indexOf(o)>=0?"an":"a";if(r.match(/(?!FJO|[HLMNS]Y.|RY[EO]|SQU|(F[LR]?|[HL]|MN?|N|RH?|S[CHKLMNPTVW]?|X(YL)?)[AEIOU])[FHLMNRSX][A-Z]/))return"an";var u=[/^e[uw]/,/^onc?e\\b/,/^uni([^nmd]|mo)/,/^u[bcfhjkqrst][aeiou]/];for(t=0;t<u.length;t++)if(o.match(u[t]))return"a";return r.match(/^U[NK][AIEO]/)?"a":r==r.toUpperCase()?"aedhilmnorsx".indexOf(o[0])>=0?"an":"a":"aeiou".indexOf(o[0])>=0?"an":o.match(/^y(b[lor]|cl[ea]|fere|gg|p[ios]|rou|tt)/)?"an":"a"};void 0!==e&&void 0!==e.exports?e.exports=r:window.indefiniteArticle=r},function(e,t,r){"use strict";e.exports=function(e,t){if("string"!=typeof e)throw new TypeError("expected a string");return e.trim().replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\\W/g,e=>/[À-ž]/.test(e)?e:"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,e=>t&&t.condense?"-":e).toLowerCase()}},function(e,t,r){var n=r(0)("iterator"),o=!1;try{var i=[7][n]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(e){}e.exports=function(e,t){if(!t&&!o)return!1;var r=!1;try{var i=[7],u=i[n]();u.next=function(){return{done:r=!0}},i[n]=function(){return u},e(i)}catch(e){}return r}},function(e,t,r){var n=r(21),o=r(0)("toStringTag"),i="Arguments"==n(function(){return arguments}());e.exports=function(e){var t,r,u;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),o))?r:i?n(t):"Object"==(u=n(t))&&"function"==typeof t.callee?"Arguments":u}},function(e,t,r){var n=r(34),o=r(0)("iterator"),i=r(10);e.exports=r(8).getIteratorMethod=function(e){if(void 0!=e)return e[o]||e["@@iterator"]||i[n(e)]}},function(e,t,r){"use strict";var n=r(6),o=r(11);e.exports=function(e,t,r){t in e?n.f(e,t,o(0,r)):e[t]=r}},function(e,t,r){var n=r(10),o=r(0)("iterator"),i=Array.prototype;e.exports=function(e){return void 0!==e&&(n.Array===e||i[o]===e)}},function(e,t,r){var n=r(5);e.exports=function(e,t,r,o){try{return o?t(n(r)[0],r[1]):t(r)}catch(t){var i=e.return;throw void 0!==i&&n(i.call(e)),t}}},function(e,t,r){"use strict";var n=r(25),o=r(26),i=r(15),u=r(38),a=r(37),c=r(20),f=r(36),s=r(35);o(o.S+o.F*!r(33)(function(e){Array.from(e)}),"Array",{from:function(e){var t,r,o,l,p=i(e),d="function"==typeof this?this:Array,v=arguments.length,h=v>1?arguments[1]:void 0,y=void 0!==h,g=0,m=s(p);if(y&&(h=n(h,v>2?arguments[2]:void 0,2)),void 0==m||d==Array&&a(m))for(r=new d(t=c(p.length));t>g;g++)f(r,g,y?h(p[g],g):p[g]);else for(l=m.call(p),r=new d;!(o=l.next()).done;g++)f(r,g,y?u(l,h,[o.value,g],!0):o.value);return r.length=g,r}})},function(e,t,r){var n=r(3),o=r(15),i=r(9)("IE_PROTO"),u=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=o(e),n(e,i)?e[i]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?u:null}},function(e,t,r){var n=r(1).document;e.exports=n&&n.documentElement},function(e,t,r){var n=r(14),o=Math.max,i=Math.min;e.exports=function(e,t){return(e=n(e))<0?o(e+t,0):i(e,t)}},function(e,t,r){var n=r(22),o=r(20),i=r(42);e.exports=function(e){return function(t,r,u){var a,c=n(t),f=o(c.length),s=i(u,f);if(e&&r!=r){for(;f>s;)if((a=c[s++])!=a)return!0}else for(;f>s;s++)if((e||s in c)&&c[s]===r)return e||s||0;return!e&&-1}}},function(e,t,r){var n=r(21);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==n(e)?e.split(""):Object(e)}},function(e,t,r){var n=r(3),o=r(22),i=r(43)(!1),u=r(9)("IE_PROTO");e.exports=function(e,t){var r,a=o(e),c=0,f=[];for(r in a)r!=u&&n(a,r)&&f.push(r);for(;t.length>c;)n(a,r=t[c++])&&(~i(f,r)||f.push(r));return f}},function(e,t,r){var n=r(45),o=r(17);e.exports=Object.keys||function(e){return n(e,o)}},function(e,t,r){var n=r(6),o=r(5),i=r(46);e.exports=r(4)?Object.defineProperties:function(e,t){o(e);for(var r,u=i(t),a=u.length,c=0;a>c;)n.f(e,r=u[c++],t[r]);return e}},function(e,t,r){var n=r(5),o=r(47),i=r(17),u=r(9)("IE_PROTO"),a=function(){},c=function(){var e,t=r(23)("iframe"),n=i.length;for(t.style.display="none",r(41).appendChild(t),t.src="javascript:",(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\\/script>"),e.close(),c=e.F;n--;)delete c.prototype[i[n]];return c()};e.exports=Object.create||function(e,t){var r;return null!==e?(a.prototype=n(e),r=new a,a.prototype=null,r[u]=e):r=c(),void 0===t?r:o(r,t)}},function(e,t,r){"use strict";var n=r(48),o=r(11),i=r(16),u={};r(7)(u,r(0)("iterator"),function(){return this}),e.exports=function(e,t,r){e.prototype=n(u,{next:o(1,r)}),i(e,t+" Iterator")}},function(e,t,r){e.exports=r(7)},function(e,t,r){var n=r(12);e.exports=function(e,t){if(!n(e))return e;var r,o;if(t&&"function"==typeof(r=e.toString)&&!n(o=r.call(e)))return o;if("function"==typeof(r=e.valueOf)&&!n(o=r.call(e)))return o;if(!t&&"function"==typeof(r=e.toString)&&!n(o=r.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},function(e,t,r){e.exports=!r(4)&&!r(24)(function(){return 7!=Object.defineProperty(r(23)("div"),"a",{get:function(){return 7}}).a})},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,r){"use strict";var n=r(27),o=r(26),i=r(50),u=r(7),a=r(10),c=r(49),f=r(16),s=r(40),l=r(0)("iterator"),p=!([].keys&&"next"in[].keys()),d=function(){return this};e.exports=function(e,t,r,v,h,y,g){c(r,t,v);var m,b,w,x=function(e){if(!p&&e in M)return M[e];switch(e){case"keys":case"values":return function(){return new r(this,e)}}return function(){return new r(this,e)}},O=t+" Iterator",_="values"==h,j=!1,M=e.prototype,E=M[l]||M["@@iterator"]||h&&M[h],P=E||x(h),S=h?_?x("entries"):P:void 0,A="Array"==t&&M.entries||E;if(A&&(w=s(A.call(new e)))!==Object.prototype&&w.next&&(f(w,O,!0),n||"function"==typeof w[l]||u(w,l,d)),_&&E&&"values"!==E.name&&(j=!0,P=function(){return E.call(this)}),n&&!g||!p&&!j&&M[l]||u(M,l,P),a[t]=P,a[O]=d,h)if(m={values:_?P:x("values"),keys:y?P:x("keys"),entries:S},g)for(b in m)b in M||i(M,b,m[b]);else o(o.P+o.F*(p||j),t,m);return m}},function(e,t,r){var n=r(14),o=r(13);e.exports=function(e){return function(t,r){var i,u,a=String(o(t)),c=n(r),f=a.length;return c<0||c>=f?e?"":void 0:(i=a.charCodeAt(c))<55296||i>56319||c+1===f||(u=a.charCodeAt(c+1))<56320||u>57343?e?a.charAt(c):i:e?a.slice(c,c+2):u-56320+(i-55296<<10)+65536}}},function(e,t,r){"use strict";var n=r(55)(!0);r(54)(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,r=this._i;return r>=t.length?{value:void 0,done:!0}:(e=n(t,r),this._i+=e.length,{value:e,done:!1})})},function(e,t,r){r(56),r(39),e.exports=r(8).Array.from},function(e,t,r){e.exports={default:r(57),__esModule:!0}},function(e,t,r){"use strict";t.__esModule=!0;var n=function(e){return e&&e.__esModule?e:{default:e}}(r(58));t.default=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return(0,n.default)(e)}},function(e,t,r){"use strict";var n=r(29);const o=new(r(30).ArrayBufferStore);(0,n.createWorker)(self,{clone:({arrayBufferId:e})=>{const t=o.clone(e);return{result:t,transferables:[t]}},purge:({arrayBufferId:e})=>(o.purge(e),{result:null}),slice:({arrayBufferId:e,begin:t,end:r})=>{const n=o.slice(e,t,r);return{result:n,transferables:[n]}},store:({arrayBuffer:e,arrayBufferId:t})=>(o.store(t,e),{result:null})})}]);`;
