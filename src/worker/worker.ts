// This is the minified and stringified code of the array-buffer-cache-worker package.
export const worker = `!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=39)}([function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return f}));var r=n(1);const o=-32603,i=-32602,u=-32601,c=Object(r.compile)({message:'The requested method called "\${method}" is not supported.',status:u}),a=Object(r.compile)({message:'The handler of the method called "\${method}" returned no required result.',status:o}),s=Object(r.compile)({message:'The handler of the method called "\${method}" returned an unexpected result.',status:o}),f=Object(r.compile)({message:'The specified parameter called "portId" with the given value "\${portId}" does not identify a port connected to this worker.',status:i})},function(e,t,n){!function(e,t,n,r){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t,n=n&&n.hasOwnProperty("default")?n.default:n,r=r&&r.hasOwnProperty("default")?r.default:r;var o=function(e,t){return void 0===t?e:t.reduce((function(e,t){if("capitalize"===t){var o=e.charAt(0).toUpperCase(),i=e.slice(1);return"".concat(o).concat(i)}return"dashify"===t?n(e):"prependIndefiniteArticle"===t?"".concat(r(e)," ").concat(e):e}),e)},i=function(e,n){for(var r=/\\\${([^.}]+)((\\.[^(]+\\(\\))*)}/g,i=[],u=r.exec(e);null!==u;){var c={modifiers:[],name:u[1]};if(void 0!==u[3])for(var a=/\\.[^(]+\\(\\)/g,s=a.exec(u[2]);null!==s;)c.modifiers.push(s[0].slice(1,-2)),s=a.exec(u[2]);i.push(c),u=r.exec(e)}var f=i.reduce((function(e,r){return e.map((function(e){return"string"==typeof e?e.split(function(e){var t=e.name+e.modifiers.map((function(e){return"\\\\.".concat(e,"\\\\(\\\\)")})).join("");return new RegExp("\\\\$\\\\{".concat(t,"}"),"g")}(r)).reduce((function(e,i,u){return 0===u?[i]:r.name in n?[].concat(t(e),[o(n[r.name],r.modifiers),i]):[].concat(t(e),[function(e){return o(e[r.name],r.modifiers)},i])}),[]):[e]})).reduce((function(e,n){return[].concat(t(e),t(n))}),[])}),[e]);return function(e){return f.reduce((function(n,r){return[].concat(t(n),"string"==typeof r?[r]:[r(e)])}),[]).join("")}};e.compile=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=void 0===e.code?void 0:i(e.code,t),r=void 0===e.message?void 0:i(e.message,t);function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0,i=void 0===o&&(t instanceof Error||void 0!==t.code&&"Exception"===t.code.slice(-9)),u=i?{cause:t,missingParameters:{}}:{cause:o,missingParameters:t},c=u.cause,a=u.missingParameters,s=void 0===r?new Error:new Error(r(a));return null!==c&&(s.cause=c),void 0!==n&&(s.code=n(a)),void 0!==e.status&&(s.status=e.status),s}return o},Object.defineProperty(e,"__esModule",{value:!0})}(t,n(40),n(44),n(45))},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=()=>new Promise(e=>{const t=new ArrayBuffer(0),{port1:n,port2:r}=new MessageChannel;n.onmessage=({data:t})=>e(null!==t),r.postMessage(t,[t])})},function(e,t,n){"use strict";n(4),n(5),n(6),n(7),n(8),n(9),n(10),n(11),n(12),n(13),n(14),n(15),n(16),n(17)},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t,n){"use strict";n(19),n(20),n(21),n(22),n(23),n(24),n(25),n(26),n(27),n(28),n(29)},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t,n){"use strict";n.r(t);var r=n(31);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o)},function(e,t){},function(e,t,n){"use strict";n.r(t);var r=n(33);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o)},function(e,t){},function(e,t,n){"use strict";n.d(t,"createWorker",(function(){return i}));var r=n(35),o=n(36);n(2),n(3),n(18);const i=(e,t,n=(()=>!0))=>{const u=Object(o.a)(i,t,n),c=Object(r.a)(e,u);return e.addEventListener("message",c),()=>e.removeEventListener("message",c)}},function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0);const o=(e,t)=>async({data:{id:n,method:o,params:i}})=>{const u=t[o];try{if(void 0===u)throw Object(r.a)({method:o});const t=void 0===i?u():u(i);if(void 0===t)throw Object(r.b)({method:o});const c=t instanceof Promise?await t:t;if(null===n){if(void 0!==c.result)throw Object(r.c)({method:o})}else{if(void 0===c.result)throw Object(r.c)({method:o});const{result:t,transferables:i=[]}=c;e.postMessage({id:n,result:t},i)}}catch(t){const{message:r,status:o=-32603}=t;e.postMessage({error:{code:o,message:r},id:n})}}},function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(37),o=n(0),i=n(2);const u=new Map,c=(e,t,n)=>({...t,connect:({port:n})=>{n.start();const o=e(n,t),i=Object(r.generateUniqueNumber)(u);return u.set(i,()=>{o(),n.close(),u.delete(i)}),{result:i}},disconnect:({portId:e})=>{const t=u.get(e);if(void 0===t)throw Object(o.d)({portId:e.toString()});return t(),{result:null}},isSupported:async()=>{if(await Object(i.a)()){const e=n();return{result:e instanceof Promise?await e:e}}return{result:!1}}})},function(e,t,n){!function(e){"use strict";var t,n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,r=new WeakMap,o=(t=r,function(e,n){return t.set(e,n),n}),i=function(e,t){return function(r){var o=t.get(r),i=void 0===o?r.size:o>2147483646?0:o+1;if(!r.has(i))return e(r,i);if(r.size<1073741824){for(;r.has(i);)i=Math.floor(2147483648*Math.random());return e(r,i)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(i);)i=Math.floor(Math.random()*n);return e(r,i)}}(o,r),u=function(e){return function(t){var n=e(t);return t.add(n),n}}(i);e.addUniqueNumber=u,e.generateUniqueNumber=i,Object.defineProperty(e,"__esModule",{value:!0})}(t)},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));class r{constructor(){this._store=new Map}clone(e){const t=this._store.get(e);if(void 0===t)throw new Error('There is no arrayBuffer stored with an id called "'.concat(e,'".'));return t.slice(0)}purge(e){if(!this._store.delete(e))throw new Error('There is no arrayBuffer stored with an id called "'.concat(e,'".'))}slice(e,t,n){const r=this._store.get(e);if(void 0===r)throw new Error('There is no arrayBuffer stored with an id called "'.concat(e,'".'));if(t<0||t>r.byteLength)throw new Error('The given value for begin "'.concat(t,'" is out of bounds.'));if(null!==n){if(n>r.byteLength)throw new Error('The given value for end "'.concat(n,'" is out of bounds.'));if(n<t)throw new Error('The given value for end "'.concat(n,'" is below the given value for begin "').concat(t,'".'))}return r.slice(t,null===n?r.byteLength:n)}store(e,t){if(this._store.has(e))throw new Error('There is already an arrayBuffer stored with an id called "'.concat(e,'".'));this._store.set(e,t)}}},function(e,t,n){"use strict";n.r(t);var r=n(34),o=n(38),i=n(30);for(var u in i)"default"!==u&&function(e){n.d(t,e,(function(){return i[e]}))}(u);var c=n(32);for(var u in c)"default"!==u&&function(e){n.d(t,e,(function(){return c[e]}))}(u);const a=new o.a;Object(r.createWorker)(self,{clone:({arrayBufferId:e})=>{const t=a.clone(e);return{result:t,transferables:[t]}},purge:({arrayBufferId:e})=>(a.purge(e),{result:null}),slice:({arrayBufferId:e,begin:t,end:n})=>{const r=a.slice(e,t,n);return{result:r,transferables:[r]}},store:({arrayBuffer:e,arrayBufferId:t})=>(a.store(t,e),{result:null})})},function(e,t,n){var r=n(41),o=n(42),i=n(43);e.exports=function(e){return r(e)||o(e)||i()}},function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(e,t,n){"use strict";e.exports=(e,t)=>{if("string"!=typeof e)throw new TypeError("expected a string");return e.trim().replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\\W/g,e=>/[À-ž]/.test(e)?e:"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,e=>t&&t.condense?"-":e).toLowerCase()}},function(e,t,n){var r=function(e){var t,n,r=/\\w+/.exec(e);if(!r)return"an";var o=(n=r[0]).toLowerCase(),i=["honest","hour","hono"];for(t in i)if(0==o.indexOf(i[t]))return"an";if(1==o.length)return"aedhilmnorsx".indexOf(o)>=0?"an":"a";if(n.match(/(?!FJO|[HLMNS]Y.|RY[EO]|SQU|(F[LR]?|[HL]|MN?|N|RH?|S[CHKLMNPTVW]?|X(YL)?)[AEIOU])[FHLMNRSX][A-Z]/))return"an";var u=[/^e[uw]/,/^onc?e\\b/,/^uni([^nmd]|mo)/,/^u[bcfhjkqrst][aeiou]/];for(t=0;t<u.length;t++)if(o.match(u[t]))return"a";return n.match(/^U[NK][AIEO]/)?"a":n==n.toUpperCase()?"aedhilmnorsx".indexOf(o[0])>=0?"an":"a":"aeiou".indexOf(o[0])>=0||o.match(/^y(b[lor]|cl[ea]|fere|gg|p[ios]|rou|tt)/)?"an":"a"};void 0!==e.exports?e.exports=r:window.indefiniteArticle=r}]);`; // tslint:disable-line:max-line-length
