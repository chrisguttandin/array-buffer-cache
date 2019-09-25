// tslint:disable-next-line:max-line-length
export const worker = `!function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=9)}([function(e,r,t){!function(e,r,t,n){"use strict";r=r&&r.hasOwnProperty("default")?r.default:r,t=t&&t.hasOwnProperty("default")?t.default:t,n=n&&n.hasOwnProperty("default")?n.default:n;var o=function(e,r){return void 0===r?e:r.reduce((function(e,r){if("capitalize"===r){var o=e.charAt(0).toUpperCase(),i=e.slice(1);return"".concat(o).concat(i)}return"dashify"===r?t(e):"prependIndefiniteArticle"===r?"".concat(n(e)," ").concat(e):e}),e)},i=function(e,t){for(var n=/\\\${([^.}]+)((\\.[^(]+\\(\\))*)}/g,i=[],a=n.exec(e);null!==a;){var s={modifiers:[],name:a[1]};if(void 0!==a[3])for(var u=/\\.[^(]+\\(\\)/g,c=u.exec(a[2]);null!==c;)s.modifiers.push(c[0].slice(1,-2)),c=u.exec(a[2]);i.push(s),a=n.exec(e)}var f=i.reduce((function(e,n){return e.map((function(e){return"string"==typeof e?e.split(function(e){var r=e.name+e.modifiers.map((function(e){return"\\\\.".concat(e,"\\\\(\\\\)")})).join("");return new RegExp("\\\\$\\\\{".concat(r,"}"),"g")}(n)).reduce((function(e,i,a){return 0===a?[i]:n.name in t?[].concat(r(e),[o(t[n.name],n.modifiers),i]):[].concat(r(e),[function(e){return o(e[n.name],n.modifiers)},i])}),[]):[e]})).reduce((function(e,t){return[].concat(r(e),r(t))}),[])}),[e]);return function(e){return f.reduce((function(t,n){return[].concat(r(t),"string"==typeof n?[n]:[n(e)])}),[]).join("")}};e.compile=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=void 0===e.code?void 0:i(e.code,r),n=void 0===e.message?void 0:i(e.message,r);function o(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0,i=void 0===o&&(r instanceof Error||void 0!==r.code&&"Exception"===r.code.slice(-9))?{cause:r,missingParameters:{}}:{cause:o,missingParameters:r},a=i.cause,s=i.missingParameters,u=void 0===n?new Error:new Error(n(s));return null!==a&&(u.cause=a),void 0!==t&&(u.code=t(s)),void 0!==e.status&&(u.status=e.status),u}return o},Object.defineProperty(e,"__esModule",{value:!0})}(r,t(3),t(7),t(8))},function(e,r){e.exports=function(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}},function(e,r,t){!function(e){"use strict";var r,t=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,n=new WeakMap,o=(r=n,function(e,t){return r.set(e,t),t}),i=function(e,r){return function(n){var o=r.get(n),i=void 0===o?n.size:o>2147483646?0:o+1;if(!n.has(i))return e(n,i);if(n.size<1073741824){for(;n.has(i);)i=Math.floor(2147483648*Math.random());return e(n,i)}if(n.size>t)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;n.has(i);)i=Math.floor(Math.random()*t);return e(n,i)}}(o,n),a=function(e){return function(r){var t=e(r);return r.add(t),t}}(i);e.addUniqueNumber=a,e.generateUniqueNumber=i,Object.defineProperty(e,"__esModule",{value:!0})}(r)},function(e,r,t){var n=t(4),o=t(5),i=t(6);e.exports=function(e){return n(e)||o(e)||i()}},function(e,r){e.exports=function(e){if(Array.isArray(e)){for(var r=0,t=new Array(e.length);r<e.length;r++)t[r]=e[r];return t}}},function(e,r){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},function(e,r){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(e,r,t){"use strict";e.exports=(e,r)=>{if("string"!=typeof e)throw new TypeError("expected a string");return e.trim().replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\\W/g,e=>/[À-ž]/.test(e)?e:"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,e=>r&&r.condense?"-":e).toLowerCase()}},function(e,r,t){var n=function(e){var r,t,n=/\\w+/.exec(e);if(!n)return"an";var o=(t=n[0]).toLowerCase(),i=["honest","hour","hono"];for(r in i)if(0==o.indexOf(i[r]))return"an";if(1==o.length)return"aedhilmnorsx".indexOf(o)>=0?"an":"a";if(t.match(/(?!FJO|[HLMNS]Y.|RY[EO]|SQU|(F[LR]?|[HL]|MN?|N|RH?|S[CHKLMNPTVW]?|X(YL)?)[AEIOU])[FHLMNRSX][A-Z]/))return"an";var a=[/^e[uw]/,/^onc?e\\b/,/^uni([^nmd]|mo)/,/^u[bcfhjkqrst][aeiou]/];for(r=0;r<a.length;r++)if(o.match(a[r]))return"a";return t.match(/^U[NK][AIEO]/)?"a":t==t.toUpperCase()?"aedhilmnorsx".indexOf(o[0])>=0?"an":"a":"aeiou".indexOf(o[0])>=0?"an":o.match(/^y(b[lor]|cl[ea]|fere|gg|p[ios]|rou|tt)/)?"an":"a"};void 0!==e.exports?e.exports=n:window.indefiniteArticle=n},function(e,r,t){"use strict";t.r(r);var n=t(0);const o=-32603,i=-32602,a=-32601,s=Object(n.compile)({message:'The requested method called "\${method}" is not supported.',status:a}),u=Object(n.compile)({message:'The handler of the method called "\${method}" returned no required result.',status:o}),c=Object(n.compile)({message:'The handler of the method called "\${method}" returned an unexpected result.',status:o}),f=Object(n.compile)({message:'The specified parameter called "portId" with the given value "\${portId}" does not identify a port connected to this worker.',status:i}),l=(e,r)=>async t=>{let{data:{id:n,method:o,params:i}}=t;const a=r[o];try{if(void 0===a)throw s({method:o});const r=void 0===i?a():a(i);if(void 0===r)throw u({method:o});const t=r instanceof Promise?await r:r;if(null===n){if(void 0!==t.result)throw c({method:o})}else{if(void 0===t.result)throw c({method:o});const{result:r,transferables:i=[]}=t;e.postMessage({id:n,result:r},i)}}catch(r){const{message:t,status:o=-32603}=r;e.postMessage({error:{code:o,message:t},id:n})}};var d=t(1),p=t.n(d),h=t(2);function m(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}const g=new Map,v=(e,r,t)=>(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?m(t,!0).forEach((function(r){p()(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(t).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e})({},r,{connect:t=>{let{port:n}=t;n.start();const o=e(n,r),i=Object(h.generateUniqueNumber)(g);return g.set(i,()=>{o(),n.close(),g.delete(i)}),{result:i}},disconnect:e=>{let{portId:r}=e;const t=g.get(r);if(void 0===t)throw f({portId:r.toString()});return t(),{result:null}},isSupported:async()=>{if(await(()=>new Promise(e=>{const r=new ArrayBuffer(0),{port1:t,port2:n}=new MessageChannel;t.onmessage=r=>{let{data:t}=r;return e(null!==t)},n.postMessage(r,[r])}))()){const e=t();return{result:e instanceof Promise?await e:e}}return{result:!1}}});const w=new class{constructor(){this._store=new Map}clone(e){const r=this._store.get(e);if(void 0===r)throw new Error('There is no arrayBuffer stored with an id called "'.concat(e,'".'));return r.slice(0)}purge(e){if(!this._store.delete(e))throw new Error('There is no arrayBuffer stored with an id called "'.concat(e,'".'))}slice(e,r,t){const n=this._store.get(e);if(void 0===n)throw new Error('There is no arrayBuffer stored with an id called "'.concat(e,'".'));if(r<0||r>n.byteLength)throw new Error('The given value for begin "'.concat(r,'" is out of bounds.'));if(null!==t){if(t>n.byteLength)throw new Error('The given value for end "'.concat(t,'" is out of bounds.'));if(t<r)throw new Error('The given value for end "'.concat(t,'" is below the given value for begin "').concat(r,'".'))}return n.slice(r,null===t?n.byteLength:t)}store(e,r){if(this._store.has(e))throw new Error('There is already an arrayBuffer stored with an id called "'.concat(e,'".'));this._store.set(e,r)}};!function e(r,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>!0;const o=v(e,t,n),i=l(r,o);return r.addEventListener("message",i),()=>r.removeEventListener("message",i)}(self,{clone:e=>{let{arrayBufferId:r}=e;const t=w.clone(r);return{result:t,transferables:[t]}},purge:e=>{let{arrayBufferId:r}=e;return w.purge(r),{result:null}},slice:e=>{let{arrayBufferId:r,begin:t,end:n}=e;const o=w.slice(r,t,n);return{result:o,transferables:[o]}},store:e=>{let{arrayBuffer:r,arrayBufferId:t}=e;return w.store(t,r),{result:null}}})}]);`;
