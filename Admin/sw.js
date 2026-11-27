// Painel da Gestão - abre sem internet (os dados precisam de internet)
const CACHE='gestao-v5';
const BASE=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png'];
const HOME=new URL('./',self.location).href;
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(BASE)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('gestao-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);if(u.origin!==location.origin)return;
  if(r.mode==='navigate'){e.respondWith(fetch(r).then(res=>{if(res.ok){const c=res.clone();caches.open(CACHE).then(x=>x.put(HOME,c))}return res}).catch(()=>caches.match(HOME)));return}
  e.respondWith(caches.match(r).then(m=>m||fetch(r)))});
