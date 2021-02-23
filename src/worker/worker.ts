// This is the minified and stringified code of the array-buffer-cache-worker package.
export const worker = `(()=>{var e={682:e=>{e.exports=function(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,o=new Array(r);t<r;t++)o[t]=e[t];return o},e.exports.default=e.exports,e.exports.__esModule=!0},33:(e,r,t)=>{var o=t(682);e.exports=function(e){if(Array.isArray(e))return o(e)},e.exports.default=e.exports,e.exports.__esModule=!0},487:e=>{e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},392:e=>{e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},603:(e,r,t)=>{var o=t(33),n=t(487),s=t(20),a=t(392);e.exports=function(e){return o(e)||n(e)||s(e)||a()},e.exports.default=e.exports,e.exports.__esModule=!0},20:(e,r,t)=>{var o=t(682);e.exports=function(e,r){if(e){if("string"==typeof e)return o(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(e,r):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},775:function(e,r,t){!function(e,r,t,o){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=n(r),a=n(t),i=n(o),u=function(e,r){return void 0===r?e:r.reduce((function(e,r){if("capitalize"===r){var t=e.charAt(0).toUpperCase(),o=e.slice(1);return"".concat(t).concat(o)}return"dashify"===r?a.default(e):"prependIndefiniteArticle"===r?"".concat(i.default(e)," ").concat(e):e}),e)},c=function(e){var r=e.name+e.modifiers.map((function(e){return"\\\\.".concat(e,"\\\\(\\\\)")})).join("");return new RegExp("\\\\$\\\\{".concat(r,"}"),"g")},d=function(e,r){for(var t=/\\\${([^.}]+)((\\.[^(]+\\(\\))*)}/g,o=[],n=t.exec(e);null!==n;){var a={modifiers:[],name:n[1]};if(void 0!==n[3])for(var i=/\\.[^(]+\\(\\)/g,d=i.exec(n[2]);null!==d;)a.modifiers.push(d[0].slice(1,-2)),d=i.exec(n[2]);o.push(a),n=t.exec(e)}var l=o.reduce((function(e,t){return e.map((function(e){return"string"==typeof e?e.split(c(t)).reduce((function(e,o,n){return 0===n?[o]:t.name in r?[].concat(s.default(e),[u(r[t.name],t.modifiers),o]):[].concat(s.default(e),[function(e){return u(e[t.name],t.modifiers)},o])}),[]):[e]})).reduce((function(e,r){return[].concat(s.default(e),s.default(r))}),[])}),[e]);return function(e){return l.reduce((function(r,t){return[].concat(s.default(r),"string"==typeof t?[t]:[t(e)])}),[]).join("")}},l=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=void 0===e.code?void 0:d(e.code,r),o=void 0===e.message?void 0:d(e.message,r);function n(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,s=void 0===n&&(r instanceof Error||void 0!==r.code&&"Exception"===r.code.slice(-9))?{cause:r,missingParameters:{}}:{cause:n,missingParameters:r},a=s.cause,i=s.missingParameters,u=void 0===o?new Error:new Error(o(i));return null!==a&&(u.cause=a),void 0!==t&&(u.code=t(i)),void 0!==e.status&&(u.status=e.status),u}return n};e.compile=l,Object.defineProperty(e,"__esModule",{value:!0})}(r,t(603),t(881),t(507))},881:e=>{"use strict";e.exports=(e,r)=>{if("string"!=typeof e)throw new TypeError("expected a string");return e.trim().replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\\W/g,(e=>/[À-ž]/.test(e)?e:"-")).replace(/^-+|-+$/g,"").replace(/-{2,}/g,(e=>r&&r.condense?"-":e)).toLowerCase()}},107:function(e,r){!function(e){"use strict";var r=function(e){return function(r){var t=e(r);return r.add(t),t}},t=function(e){return function(r,t){return e.set(r,t),t}},o=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,n=536870912,s=2*n,a=function(e,r){return function(t){var a=r.get(t),i=void 0===a?t.size:a<s?a+1:0;if(!t.has(i))return e(t,i);if(t.size<n){for(;t.has(i);)i=Math.floor(Math.random()*s);return e(t,i)}if(t.size>o)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;t.has(i);)i=Math.floor(Math.random()*o);return e(t,i)}},i=new WeakMap,u=t(i),c=a(u,i),d=r(c);e.addUniqueNumber=d,e.generateUniqueNumber=c,Object.defineProperty(e,"__esModule",{value:!0})}(r)},507:e=>{var r=function(e){var r,t,o=/\\w+/.exec(e);if(!o)return"an";var n=(t=o[0]).toLowerCase(),s=["honest","hour","hono"];for(r in s)if(0==n.indexOf(s[r]))return"an";if(1==n.length)return"aedhilmnorsx".indexOf(n)>=0?"an":"a";if(t.match(/(?!FJO|[HLMNS]Y.|RY[EO]|SQU|(F[LR]?|[HL]|MN?|N|RH?|S[CHKLMNPTVW]?|X(YL)?)[AEIOU])[FHLMNRSX][A-Z]/))return"an";var a=[/^e[uw]/,/^onc?e\\b/,/^uni([^nmd]|mo)/,/^u[bcfhjkqrst][aeiou]/];for(r=0;r<a.length;r++)if(n.match(a[r]))return"a";return t.match(/^U[NK][AIEO]/)?"a":t==t.toUpperCase()?"aedhilmnorsx".indexOf(n[0])>=0?"an":"a":"aeiou".indexOf(n[0])>=0||n.match(/^y(b[lor]|cl[ea]|fere|gg|p[ios]|rou|tt)/)?"an":"a"};void 0!==e.exports?e.exports=r:window.indefiniteArticle=r}},r={};function t(o){if(r[o])return r[o].exports;var n=r[o]={exports:{}};return e[o].call(n.exports,n,n.exports,t),n.exports}(()=>{"use strict";var e=t(775);const r=-32603,o=-32602,n=-32601,s=(0,e.compile)({message:'The requested method called "\${method}" is not supported.',status:n}),a=(0,e.compile)({message:'The handler of the method called "\${method}" returned no required result.',status:r}),i=(0,e.compile)({message:'The handler of the method called "\${method}" returned an unexpected result.',status:r}),u=(0,e.compile)({message:'The specified parameter called "portId" with the given value "\${portId}" does not identify a port connected to this worker.',status:o});var c=t(107);const d=new Map,l=(e,r,t)=>({...r,connect:({port:t})=>{t.start();const o=e(t,r),n=(0,c.generateUniqueNumber)(d);return d.set(n,(()=>{o(),t.close(),d.delete(n)})),{result:n}},disconnect:({portId:e})=>{const r=d.get(e);if(void 0===r)throw u({portId:e.toString()});return r(),{result:null}},isSupported:async()=>{if(await new Promise((e=>{const r=new ArrayBuffer(0),{port1:t,port2:o}=new MessageChannel;t.onmessage=({data:r})=>e(null!==r),o.postMessage(r,[r])}))){const e=t();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),f=(e,r,t=(()=>!0))=>{const o=l(f,r,t),n=((e,r)=>async({data:{id:t,method:o,params:n}})=>{const u=r[o];try{if(void 0===u)throw s({method:o});const r=void 0===n?u():u(n);if(void 0===r)throw a({method:o});const c=r instanceof Promise?await r:r;if(null===t){if(void 0!==c.result)throw i({method:o})}else{if(void 0===c.result)throw i({method:o});const{result:r,transferables:n=[]}=c;e.postMessage({id:t,result:r},n)}}catch(r){const{message:o,status:n=-32603}=r;e.postMessage({error:{code:n,message:o},id:t})}})(e,o);return e.addEventListener("message",n),()=>e.removeEventListener("message",n)};const p=new class{constructor(){this._store=new Map}clone(e){const r=this._store.get(e);if(void 0===r)throw new Error('There is no arrayBuffer stored with an id called "'.concat(e,'".'));return r.slice(0)}purge(e){if(!this._store.delete(e))throw new Error('There is no arrayBuffer stored with an id called "'.concat(e,'".'))}slice(e,r,t){const o=this._store.get(e);if(void 0===o)throw new Error('There is no arrayBuffer stored with an id called "'.concat(e,'".'));if(r<0||r>o.byteLength)throw new Error('The given value for begin "'.concat(r,'" is out of bounds.'));if(null!==t){if(t>o.byteLength)throw new Error('The given value for end "'.concat(t,'" is out of bounds.'));if(t<r)throw new Error('The given value for end "'.concat(t,'" is below the given value for begin "').concat(r,'".'))}return o.slice(r,null===t?o.byteLength:t)}store(e,r){if(this._store.has(e))throw new Error('There is already an arrayBuffer stored with an id called "'.concat(e,'".'));this._store.set(e,r)}};f(self,{clone:({arrayBufferId:e})=>{const r=p.clone(e);return{result:r,transferables:[r]}},purge:({arrayBufferId:e})=>(p.purge(e),{result:null}),slice:({arrayBufferId:e,begin:r,end:t})=>{const o=p.slice(e,r,t);return{result:o,transferables:[o]}},store:({arrayBuffer:e,arrayBufferId:r})=>(p.store(r,e),{result:null})})})()})();`; // tslint:disable-line:max-line-length
