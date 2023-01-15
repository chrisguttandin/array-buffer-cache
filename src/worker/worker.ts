// This is the minified and stringified code of the array-buffer-cache-worker package.
export const worker = `(()=>{var e={775:function(e,r,t){!function(e,r,t,n){"use strict";var o=function(e,r){return void 0===r?e:r.reduce((function(e,r){if("capitalize"===r){var o=e.charAt(0).toUpperCase(),s=e.slice(1);return"".concat(o).concat(s)}return"dashify"===r?t(e):"prependIndefiniteArticle"===r?"".concat(n(e)," ").concat(e):e}),e)},s=function(e){var r=e.name+e.modifiers.map((function(e){return"\\\\.".concat(e,"\\\\(\\\\)")})).join("");return new RegExp("\\\\$\\\\{".concat(r,"}"),"g")},a=function(e,t){for(var n=/\\\${([^.}]+)((\\.[^(]+\\(\\))*)}/g,a=[],i=n.exec(e);null!==i;){var u={modifiers:[],name:i[1]};if(void 0!==i[3])for(var c=/\\.[^(]+\\(\\)/g,l=c.exec(i[2]);null!==l;)u.modifiers.push(l[0].slice(1,-2)),l=c.exec(i[2]);a.push(u),i=n.exec(e)}var d=a.reduce((function(e,n){return e.map((function(e){return"string"==typeof e?e.split(s(n)).reduce((function(e,s,a){return 0===a?[s]:n.name in t?[].concat(r(e),[o(t[n.name],n.modifiers),s]):[].concat(r(e),[function(e){return o(e[n.name],n.modifiers)},s])}),[]):[e]})).reduce((function(e,t){return[].concat(r(e),r(t))}),[])}),[e]);return function(e){return d.reduce((function(t,n){return[].concat(r(t),"string"==typeof n?[n]:[n(e)])}),[]).join("")}},i=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=void 0===e.code?void 0:a(e.code,r),n=void 0===e.message?void 0:a(e.message,r);function o(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0,s=void 0===o&&(r instanceof Error||void 0!==r.code&&"Exception"===r.code.slice(-9))?{cause:r,missingParameters:{}}:{cause:o,missingParameters:r},a=s.cause,i=s.missingParameters,u=void 0===n?new Error:new Error(n(i));return null!==a&&(u.cause=a),void 0!==t&&(u.code=t(i)),void 0!==e.status&&(u.status=e.status),u}return o};e.compile=i}(r,t(106),t(881),t(507))},881:e=>{"use strict";e.exports=(e,r)=>{if("string"!=typeof e)throw new TypeError("expected a string");return e.trim().replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\\W/g,(e=>/[À-ž]/.test(e)?e:"-")).replace(/^-+|-+$/g,"").replace(/-{2,}/g,(e=>r&&r.condense?"-":e)).toLowerCase()}},107:function(e,r){!function(e){"use strict";var r=function(e){return function(r){var t=e(r);return r.add(t),t}},t=function(e){return function(r,t){return e.set(r,t),t}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,o=536870912,s=2*o,a=function(e,r){return function(t){var a=r.get(t),i=void 0===a?t.size:a<s?a+1:0;if(!t.has(i))return e(t,i);if(t.size<o){for(;t.has(i);)i=Math.floor(Math.random()*s);return e(t,i)}if(t.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;t.has(i);)i=Math.floor(Math.random()*n);return e(t,i)}},i=new WeakMap,u=t(i),c=a(u,i),l=r(c);e.addUniqueNumber=l,e.generateUniqueNumber=c}(r)},507:e=>{var r=function(e){var r,t,n=/\\w+/.exec(e);if(!n)return"an";var o=(t=n[0]).toLowerCase(),s=["honest","hour","hono"];for(r in s)if(0==o.indexOf(s[r]))return"an";if(1==o.length)return"aedhilmnorsx".indexOf(o)>=0?"an":"a";if(t.match(/(?!FJO|[HLMNS]Y.|RY[EO]|SQU|(F[LR]?|[HL]|MN?|N|RH?|S[CHKLMNPTVW]?|X(YL)?)[AEIOU])[FHLMNRSX][A-Z]/))return"an";var a=[/^e[uw]/,/^onc?e\\b/,/^uni([^nmd]|mo)/,/^u[bcfhjkqrst][aeiou]/];for(r=0;r<a.length;r++)if(o.match(a[r]))return"a";return t.match(/^U[NK][AIEO]/)?"a":t==t.toUpperCase()?"aedhilmnorsx".indexOf(o[0])>=0?"an":"a":"aeiou".indexOf(o[0])>=0||o.match(/^y(b[lor]|cl[ea]|fere|gg|p[ios]|rou|tt)/)?"an":"a"};void 0!==e.exports?e.exports=r:window.indefiniteArticle=r},768:e=>{e.exports=function(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n},e.exports.__esModule=!0,e.exports.default=e.exports},907:(e,r,t)=>{var n=t(768);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},642:e=>{e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},344:e=>{e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},106:(e,r,t)=>{var n=t(907),o=t(642),s=t(906),a=t(344);e.exports=function(e){return n(e)||o(e)||s(e)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},906:(e,r,t)=>{var n=t(768);e.exports=function(e,r){if(e){if("string"==typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,r):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}},r={};function t(n){var o=r[n];if(void 0!==o)return o.exports;var s=r[n]={exports:{}};return e[n].call(s.exports,s,s.exports,t),s.exports}(()=>{"use strict";var e=t(775);const r=-32603,n=-32602,o=-32601,s=(0,e.compile)({message:'The requested method called "\${method}" is not supported.',status:o}),a=(0,e.compile)({message:'The handler of the method called "\${method}" returned no required result.',status:r}),i=(0,e.compile)({message:'The handler of the method called "\${method}" returned an unexpected result.',status:r}),u=(0,e.compile)({message:'The specified parameter called "portId" with the given value "\${portId}" does not identify a port connected to this worker.',status:n}),c=(e,r)=>async t=>{let{data:{id:n,method:o,params:u}}=t;const c=r[o];try{if(void 0===c)throw s({method:o});const r=void 0===u?c():c(u);if(void 0===r)throw a({method:o});const t=r instanceof Promise?await r:r;if(null===n){if(void 0!==t.result)throw i({method:o})}else{if(void 0===t.result)throw i({method:o});const{result:r,transferables:s=[]}=t;e.postMessage({id:n,result:r},s)}}catch(r){const{message:t,status:o=-32603}=r;e.postMessage({error:{code:o,message:t},id:n})}};var l=t(107);const d=new Map,f=(e,r,t)=>({...r,connect:t=>{let{port:n}=t;n.start();const o=e(n,r),s=(0,l.generateUniqueNumber)(d);return d.set(s,(()=>{o(),n.close(),d.delete(s)})),{result:s}},disconnect:e=>{let{portId:r}=e;const t=d.get(r);if(void 0===t)throw u({portId:r.toString()});return t(),{result:null}},isSupported:async()=>{if(await new Promise((e=>{const r=new ArrayBuffer(0),{port1:t,port2:n}=new MessageChannel;t.onmessage=r=>{let{data:t}=r;return e(null!==t)},n.postMessage(r,[r])}))){const e=t();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),p=function(e,r){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>!0;const n=f(p,r,t),o=c(e,n);return e.addEventListener("message",o),()=>e.removeEventListener("message",o)};const h=new class{constructor(){this._store=new Map}clone(e){const r=this._store.get(e);if(void 0===r)throw new Error('There is no arrayBuffer stored with an id called "'.concat(e,'".'));return r.slice(0)}purge(e){if(!this._store.delete(e))throw new Error('There is no arrayBuffer stored with an id called "'.concat(e,'".'))}slice(e,r,t){const n=this._store.get(e);if(void 0===n)throw new Error('There is no arrayBuffer stored with an id called "'.concat(e,'".'));if(r<0||r>n.byteLength)throw new Error('The given value for begin "'.concat(r,'" is out of bounds.'));if(null!==t){if(t>n.byteLength)throw new Error('The given value for end "'.concat(t,'" is out of bounds.'));if(t<r)throw new Error('The given value for end "'.concat(t,'" is below the given value for begin "').concat(r,'".'))}return n.slice(r,null===t?n.byteLength:t)}store(e,r){if(this._store.has(e))throw new Error('There is already an arrayBuffer stored with an id called "'.concat(e,'".'));this._store.set(e,r)}};p(self,{clone:e=>{let{arrayBufferId:r}=e;const t=h.clone(r);return{result:t,transferables:[t]}},purge:e=>{let{arrayBufferId:r}=e;return h.purge(r),{result:null}},slice:e=>{let{arrayBufferId:r,begin:t,end:n}=e;const o=h.slice(r,t,n);return{result:o,transferables:[o]}},store:e=>{let{arrayBuffer:r,arrayBufferId:t}=e;return h.store(t,r),{result:null}}})})()})();`; // tslint:disable-line:max-line-length
