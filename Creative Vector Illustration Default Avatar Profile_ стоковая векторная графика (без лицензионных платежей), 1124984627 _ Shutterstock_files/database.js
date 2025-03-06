(()=>{function e(){return window.unifiedSDK}function n(n){return e().useSync(n)}function t(...n){return e().runSync(...n)}const r=0,a=1,o=2;function i({name:e,upgrades:t=[]}){const i={},c=new Set;let u=r,l=null,g=null;if("string"!=typeof e)throw new Error("databaseName has to be a string");if(!function(e){if(!Array.isArray(e))return!1;const n=e.some((e=>"function"!=typeof e));return!n}(t))throw new Error("no valid upgrades provided");return i.connectModule=async n=>(c.add(n),u!==r?l:(u=a,l=s(e,t),g=await l,u=o,g)),i.disconnectModule=async e=>{c.delete(e),0===c.size&&await i.closeDatabase()},i.closeDatabase=async()=>{u===o&&(c.clear(),g.close(),l=null,g=null,u=r)},i.isConnected=()=>!!g,i.getConnection=()=>g,i.getConnectionStatus=()=>u,i.deleteDatabase=async()=>(i.isConnected()&&await i.closeDatabase(),d(window.indexedDB.deleteDatabase(e))),i.getObjectStore=e=>function(e,t){const r={};return r.getDatabase=()=>e,r.getStoreName=()=>t,r.runTransaction=(r,a,o={})=>{const i=e.getConnection();if(!i)throw new Error("Can't run transaction. IndexedDB is not connected");try{const e=i.transaction(t,r,o);return a(e.objectStore(t),e)}catch(e){if("InvalidStateError"===e.name){return n("logger").warn(`IndexedDB transaction failed: ${e.message}`),new Promise((()=>{}))}return Promise.reject(e)}},r.add=(e,n=null)=>r.runTransaction("readwrite",(t=>d(t.add(e,n)))),r.clear=()=>r.runTransaction("readwrite",(e=>d(e.clear()))),r.count=e=>r.runTransaction("readonly",(n=>d(n.count(e)))),r.delete=e=>r.runTransaction("readwrite",(n=>d(n.delete(e)))),r.get=e=>r.runTransaction("readonly",(n=>d(n.get(e)))),r.getAll=(e,n)=>r.runTransaction("readonly",(t=>d(t.getAll(e,n)))),r.openCursor=(e,n,{query:t=null,direction:a="next"}={})=>r.runTransaction(e,(e=>function(e,n){return new Promise(((t,r)=>{e.onsuccess=({target:e})=>{const r=e.result;r?n(r):t()},e.onerror=e=>r(e.error)}))}(e.openCursor(t,a),n))),r.put=(e,n)=>r.runTransaction("readwrite",(t=>d(t.put(e,n)))),r}(i,e),i}function s(e,r,a=!1){const o=n("logger"),i=window.indexedDB.open(e,r.length);return new Promise(((n,c)=>{i.onupgradeneeded=async n=>{o.info(`indexedDB "${e}" v${n.oldVersion} needs upgrade to v${n.newVersion}`),await async function({target:e,oldVersion:n,newVersion:t},r){for(const a in r){const o=Number(a)+1,i=r[a];o>n&&o<=t&&await i(e.result)}}(n,r),o.info(`indexedDB "${e}" upgraded to v${n.newVersion}`)},i.onsuccess=({target:t})=>{o.debug(`indexedDB "${e}" opened`),n(t.result)},i.onerror=async i=>{if(a)return o.error(`indexedDB "${e}" open failed again`,i),t("sdk.stop"),c(i);o.warn(`indexedDB "${e}" open failed, dropping the database and retry once`,i),await d(window.indexedDB.deleteDatabase(e)),o.info(`indexedDB "${e}" deleted`);try{n(await s(e,r,!0))}catch(i){c(i)}},i.onclose=()=>o.debug(`indexedDB "${e}" closed`)}))}function d(e){return new Promise(((n,t)=>{e.onsuccess=e=>n(e.target.result),e.onerror=e=>t(e.error)}))}!async function(e,n){t("loader.registerModule",e,n="function"==typeof n?await n():n)}("database",(()=>i({name:"uws-database",upgrades:function(){const e=[];return e.push((e=>{e.createObjectStore("pages",{keyPath:"pageId"}).createIndex("siteId","siteId",{unique:!1}),e.createObjectStore("scoring",{keyPath:"indicator"})})),e.push((e=>{e.createObjectStore("storage",{keyPath:"key"})})),e}()})))})();