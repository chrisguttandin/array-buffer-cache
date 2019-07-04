// tslint:disable-next-line:max-line-length
export const worker = `!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=10)}([function(e,t,r){!function(e,t,r,n){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t,r=r&&r.hasOwnProperty("default")?r.default:r,n=n&&n.hasOwnProperty("default")?n.default:n;var o=function(e,t){return void 0===t?e:t.reduce(function(e,t){if("capitalize"===t){var o=e.charAt(0).toUpperCase(),i=e.slice(1);return"".concat(o).concat(i)}return"dashify"===t?r(e):"prependIndefiniteArticle"===t?"".concat(n(e)," ").concat(e):e},e)},i=function(e,r){for(var n=/\\\${([^.}]+)((\\.[^(]+\\(\\))*)}/g,i=[],a=n.exec(e);null!==a;){var s={modifiers:[],name:a[1]};if(void 0!==a[3])for(var u=/\\.[^(]+\\(\\)/g,c=u.exec(a[2]);null!==c;)s.modifiers.push(c[0].slice(1,-2)),c=u.exec(a[2]);i.push(s),a=n.exec(e)}var f=i.reduce(function(e,n){return e.map(function(e){return"string"==typeof e?e.split(function(e){var t=e.name+e.modifiers.map(function(e){return"\\\\.".concat(e,"\\\\(\\\\)")}).join("");return new RegExp("\\\\$\\\\{".concat(t,"}"),"g")}(n)).reduce(function(e,i,a){return 0===a?[i]:n.name in r?[].concat(t(e),[o(r[n.name],n.modifiers),i]):[].concat(t(e),[function(e){return o(e[n.name],n.modifiers)},i])},[]):[e]}).reduce(function(e,r){return[].concat(t(e),t(r))},[])},[e]);return function(e){return f.reduce(function(r,n){return[].concat(t(r),"string"==typeof n?[n]:[n(e)])},[]).join("")}};e.compile=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=void 0===e.code?void 0:i(e.code,t),n=void 0===e.message?void 0:i(e.message,t);function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0,i=void 0===o&&(t instanceof Error||void 0!==t.code&&"Exception"===t.code.slice(-9)),a=i?{cause:t,missingParameters:{}}:{cause:o,missingParameters:t},s=a.cause,u=a.missingParameters,c=void 0===n?new Error:new Error(n(u));return null!==s&&(c.cause=s),void 0!==r&&(c.code=r(u)),void 0!==e.status&&(c.status=e.status),c}return o},Object.defineProperty(e,"__esModule",{value:!0})}(t,r(3),r(7),r(8))},function(e,t,r){var n=r(9);e.exports=function(e){for(var t=1;t<arguments.length;t++)if(t%2){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),o.forEach(function(t){n(e,t,r[t])})}else Object.defineProperties(e,Object.getOwnPropertyDescriptors(arguments[t]));return e}},function(e,t,r){!function(e){"use strict";var t=new WeakMap,r=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,n=function(e,r){return t.set(e,r),r},o=function(e){var o=t.get(e),i=void 0===o?e.size:o>2147483648?0:o+1;if(!e.has(i))return n(e,i);if(e.size<1073741824){for(;e.has(i);)i=Math.floor(2147483648*Math.random());return n(e,i)}if(e.size>r)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;e.has(i);)i=Math.floor(Math.random()*r);return n(e,i)};e.addUniqueNumber=function(e){var t=o(e);return e.add(t),t},e.generateUniqueNumber=o,Object.defineProperty(e,"__esModule",{value:!0})}(t)},function(e,t,r){var n=r(4),o=r(5),i=r(6);e.exports=function(e){return n(e)||o(e)||i()}},function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}},function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(e,t,r){"use strict";e.exports=(e,t)=>{if("string"!=typeof e)throw new TypeError("expected a string");return e.trim().replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\\W/g,e=>/[À-ž]/.test(e)?e:"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,e=>t&&t.condense?"-":e).toLowerCase()}},function(e,t,r){var n=function(e){var t,r,n=/\\w+/.exec(e);if(!n)return"an";var o=(r=n[0]).toLowerCase(),i=["honest","hour","hono"];for(t in i)if(0==o.indexOf(i[t]))return"an";if(1==o.length)return"aedhilmnorsx".indexOf(o)>=0?"an":"a";if(r.match(/(?!FJO|[HLMNS]Y.|RY[EO]|SQU|(F[LR]?|[HL]|MN?|N|RH?|S[CHKLMNPTVW]?|X(YL)?)[AEIOU])[FHLMNRSX][A-Z]/))return"an";var a=[/^e[uw]/,/^onc?e\\b/,/^uni([^nmd]|mo)/,/^u[bcfhjkqrst][aeiou]/];for(t=0;t<a.length;t++)if(o.match(a[t]))return"a";return r.match(/^U[NK][AIEO]/)?"a":r==r.toUpperCase()?"aedhilmnorsx".indexOf(o[0])>=0?"an":"a":"aeiou".indexOf(o[0])>=0?"an":o.match(/^y(b[lor]|cl[ea]|fere|gg|p[ios]|rou|tt)/)?"an":"a"};void 0!==e.exports?e.exports=n:window.indefiniteArticle=n},function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},function(e,t,r){"use strict";r.r(t);var n=r(0);const o=-32603,i=-32602,a=-32601,s=Object(n.compile)({message:'The requested method called "\${method}" is not supported.',status:a}),u=Object(n.compile)({message:'The handler of the method called "\${method}" returned no required result.',status:o}),c=Object(n.compile)({message:'The handler of the method called "\${method}" returned an unexpected result.',status:o}),f=Object(n.compile)({message:'The specified parameter called "portId" with the given value "\${portId}" does not identify a port connected to this worker.',status:i}),l=(e,t)=>async r=>{let{data:{id:n,method:o,params:i}}=r;const a=t[o];try{if(void 0===a)throw s({method:o});const t=void 0===i?a():a(i);if(void 0===t)throw u({method:o});const r=t instanceof Promise?await t:t;if(null===n){if(void 0!==r.result)throw c({method:o})}else{if(void 0===r.result)throw c({method:o});const{result:t,transferables:i=[]}=r;e.postMessage({id:n,result:t},i)}}catch(t){const{message:r,status:o=-32603}=t;e.postMessage({error:{code:o,message:r},id:n})}};var d=r(1),h=r.n(d),p=r(2);const m=new Map,g=(e,t,r)=>h()({},t,{connect:r=>{let{port:n}=r;n.start();const o=e(n,t),i=Object(p.generateUniqueNumber)(m);return m.set(i,()=>{o(),n.close(),m.delete(i)}),{result:i}},disconnect:e=>{let{portId:t}=e;const r=m.get(t);if(void 0===r)throw f({portId:t.toString()});return r(),{result:null}},isSupported:async()=>{if(await(()=>new Promise(e=>{const t=new ArrayBuffer(0),{port1:r,port2:n}=new MessageChannel;r.onmessage=t=>{let{data:r}=t;return e(null!==r)},n.postMessage(t,[t])}))()){const e=r();return{result:e instanceof Promise?await e:e}}return{result:!1}}});const v=new class{constructor(){this._store=new Map}clone(e){const t=this._store.get(e);if(void 0===t)throw new Error('There is no arrayBuffer stored with an id called "'.concat(e,'".'));return t.slice(0)}purge(e){if(!this._store.delete(e))throw new Error('There is no arrayBuffer stored with an id called "'.concat(e,'".'))}slice(e,t,r){const n=this._store.get(e);if(void 0===n)throw new Error('There is no arrayBuffer stored with an id called "'.concat(e,'".'));if(t<0||t>n.byteLength)throw new Error('The given value for begin "'.concat(t,'" is out of bounds.'));if(null!==r){if(r>n.byteLength)throw new Error('The given value for end "'.concat(r,'" is out of bounds.'));if(r<t)throw new Error('The given value for end "'.concat(r,'" is below the given value for begin "').concat(t,'".'))}return n.slice(t,null===r?n.byteLength:r)}store(e,t){if(this._store.has(e))throw new Error('There is already an arrayBuffer stored with an id called "'.concat(e,'".'));this._store.set(e,t)}};!function e(t,r){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>!0;const o=g(e,r,n),i=l(t,o);return t.addEventListener("message",i),()=>t.removeEventListener("message",i)}(self,{clone:e=>{let{arrayBufferId:t}=e;const r=v.clone(t);return{result:r,transferables:[r]}},purge:e=>{let{arrayBufferId:t}=e;return v.purge(t),{result:null}},slice:e=>{let{arrayBufferId:t,begin:r,end:n}=e;const o=v.slice(t,r,n);return{result:o,transferables:[o]}},store:e=>{let{arrayBuffer:t,arrayBufferId:r}=e;return v.store(r,t),{result:null}}})}]);`;
