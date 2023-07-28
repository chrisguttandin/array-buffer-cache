// This is the minified and stringified code of the array-buffer-cache-worker package.
export const worker = `(()=>{var e={881:e=>{"use strict";e.exports=(e,r)=>{if("string"!=typeof e)throw new TypeError("expected a string");return e.trim().replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\\W/g,(e=>/[À-ž]/.test(e)?e:"-")).replace(/^-+|-+$/g,"").replace(/-{2,}/g,(e=>r&&r.condense?"-":e)).toLowerCase()}},507:e=>{var r=function(e){var r,t,o=/\\w+/.exec(e);if(!o)return"an";var n=(t=o[0]).toLowerCase(),s=["honest","hour","hono"];for(r in s)if(0==n.indexOf(s[r]))return"an";if(1==n.length)return"aedhilmnorsx".indexOf(n)>=0?"an":"a";if(t.match(/(?!FJO|[HLMNS]Y.|RY[EO]|SQU|(F[LR]?|[HL]|MN?|N|RH?|S[CHKLMNPTVW]?|X(YL)?)[AEIOU])[FHLMNRSX][A-Z]/))return"an";var a=[/^e[uw]/,/^onc?e\\b/,/^uni([^nmd]|mo)/,/^u[bcfhjkqrst][aeiou]/];for(r=0;r<a.length;r++)if(n.match(a[r]))return"a";return t.match(/^U[NK][AIEO]/)?"a":t==t.toUpperCase()?"aedhilmnorsx".indexOf(n[0])>=0?"an":"a":"aeiou".indexOf(n[0])>=0||n.match(/^y(b[lor]|cl[ea]|fere|gg|p[ios]|rou|tt)/)?"an":"a"};void 0!==e.exports?e.exports=r:window.indefiniteArticle=r}},r={};function t(o){var n=r[o];if(void 0!==n)return n.exports;var s=r[o]={exports:{}};return e[o](s,s.exports,t),s.exports}t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{"use strict";var e=t(881),r=t.n(e),o=t(507),n=t.n(o);const s=(e,t)=>void 0===t?e:t.reduce(((e,t)=>{if("capitalize"===t){const r=e.charAt(0).toUpperCase(),t=e.slice(1);return"".concat(r).concat(t)}return"dashify"===t?r()(e):"prependIndefiniteArticle"===t?"".concat(n()(e)," ").concat(e):e}),e),a=(e,r)=>{const t=/\\\${([^.}]+)((\\.[^(]+\\(\\))*)}/g,o=[];let n=t.exec(e);for(;null!==n;){const r={modifiers:[],name:n[1]};if(void 0!==n[3]){const e=/\\.[^(]+\\(\\)/g;let t=e.exec(n[2]);for(;null!==t;)r.modifiers.push(t[0].slice(1,-2)),t=e.exec(n[2])}o.push(r),n=t.exec(e)}const a=o.reduce(((e,t)=>e.map((e=>"string"==typeof e?e.split((e=>{const r=e.name+e.modifiers.map((e=>"\\\\.".concat(e,"\\\\(\\\\)"))).join("");return new RegExp("\\\\$\\\\{".concat(r,"}"),"g")})(t)).reduce(((e,o,n)=>0===n?[o]:t.name in r?[...e,s(r[t.name],t.modifiers),o]:[...e,e=>s(e[t.name],t.modifiers),o]),[]):[e])).reduce(((e,r)=>[...e,...r]),[])),[e]);return e=>a.reduce(((r,t)=>"string"==typeof t?[...r,t]:[...r,t(e)]),[]).join("")},i=function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const t=void 0===e.code?void 0:a(e.code,r),o=void 0===e.message?void 0:a(e.message,r);return function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;const s=void 0===n&&(r instanceof Error||void 0!==r.code&&"Exception"===r.code.slice(-9)),{cause:a,missingParameters:i}=s?{cause:r,missingParameters:{}}:{cause:n,missingParameters:r},c=void 0===o?new Error:new Error(o(i));return null!==a&&(c.cause=a),void 0!==t&&(c.code=t(i)),void 0!==e.status&&(c.status=e.status),c}},c=-32603,d=-32602,u=i({message:'The requested method called "\${method}" is not supported.',status:-32601}),l=i({message:'The handler of the method called "\${method}" returned no required result.',status:c}),f=i({message:'The handler of the method called "\${method}" returned an unexpected result.',status:c}),h=i({message:'The specified parameter called "portId" with the given value "\${portId}" does not identify a port connected to this worker.',status:d}),m=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,g=536870912,p=1073741824,v=new WeakMap;var w;const y=((e,r)=>t=>{const o=r.get(t);let n=void 0===o?t.size:o<p?o+1:0;if(!t.has(n))return e(t,n);if(t.size<g){for(;t.has(n);)n=Math.floor(Math.random()*p);return e(t,n)}if(t.size>m)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;t.has(n);)n=Math.floor(Math.random()*m);return e(t,n)})((w=v,(e,r)=>(w.set(e,r),r)),v),E=((e=>{})(y),new Map),b=(e,r,t)=>({...r,connect:t=>{let{port:o}=t;o.start();const n=e(o,r),s=y(E);return E.set(s,(()=>{n(),o.close(),E.delete(s)})),{result:s}},disconnect:e=>{let{portId:r}=e;const t=E.get(r);if(void 0===t)throw h({portId:r.toString()});return t(),{result:null}},isSupported:async()=>{if(await new Promise((e=>{const r=new ArrayBuffer(0),{port1:t,port2:o}=new MessageChannel;t.onmessage=r=>{let{data:t}=r;return e(null!==t)},o.postMessage(r,[r])}))){const e=t();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),x=function(e,r){const t=b(x,r,arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>!0),o=((e,r)=>async t=>{let{data:{id:o,method:n,params:s}}=t;const a=r[n];try{if(void 0===a)throw u({method:n});const r=void 0===s?a():a(s);if(void 0===r)throw l({method:n});const t=r instanceof Promise?await r:r;if(null===o){if(void 0!==t.result)throw f({method:n})}else{if(void 0===t.result)throw f({method:n});const{result:r,transferables:s=[]}=t;e.postMessage({id:o,result:r},s)}}catch(r){const{message:t,status:n=-32603}=r;e.postMessage({error:{code:n,message:t},id:o})}})(e,t);return e.addEventListener("message",o),()=>e.removeEventListener("message",o)};const M=new class{constructor(){this._store=new Map}clone(e){const r=this._store.get(e);if(void 0===r)throw new Error('There is no arrayBuffer stored with an id called "'.concat(e,'".'));return r.slice(0)}purge(e){if(!this._store.delete(e))throw new Error('There is no arrayBuffer stored with an id called "'.concat(e,'".'))}slice(e,r,t){const o=this._store.get(e);if(void 0===o)throw new Error('There is no arrayBuffer stored with an id called "'.concat(e,'".'));if(r<0||r>o.byteLength)throw new Error('The given value for begin "'.concat(r,'" is out of bounds.'));if(null!==t){if(t>o.byteLength)throw new Error('The given value for end "'.concat(t,'" is out of bounds.'));if(t<r)throw new Error('The given value for end "'.concat(t,'" is below the given value for begin "').concat(r,'".'))}return o.slice(r,null===t?o.byteLength:t)}store(e,r){if(this._store.has(e))throw new Error('There is already an arrayBuffer stored with an id called "'.concat(e,'".'));this._store.set(e,r)}};x(self,{clone:e=>{let{arrayBufferId:r}=e;const t=M.clone(r);return{result:t,transferables:[t]}},purge:e=>{let{arrayBufferId:r}=e;return M.purge(r),{result:null}},slice:e=>{let{arrayBufferId:r,begin:t,end:o}=e;const n=M.slice(r,t,o);return{result:n,transferables:[n]}},store:e=>{let{arrayBuffer:r,arrayBufferId:t}=e;return M.store(t,r),{result:null}}})})()})();`; // tslint:disable-line:max-line-length
