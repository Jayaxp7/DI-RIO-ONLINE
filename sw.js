// Organizador de Aulas - funciona offline
const CACHE='aulas-v1';
const BASE=['/','/index.html','/bncc.json','/bncc-temas.json','/manifest.webmanifest','/icon-192.png','/icon-512.png'];
const DOCX='https://cdn.jsdelivr.net/npm/docx@9.16.1/dist/index.iife.js';
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(BASE).then(()=>c.add(DOCX).catch(()=>{}))));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);
  if(u.origin!==location.origin&&r.url!==DOCX)return;
  // páginas e dados: tenta a internet primeiro (pega a versão nova do GitHub), se não tiver usa a cópia salva
  if(r.mode==='navigate'||u.pathname.endsWith('.json')){e.respondWith(fetch(r).then(res=>{const c=res.clone();caches.open(CACHE).then(k=>k.put(r.mode==='navigate'?'/':r,c));return res}).catch(()=>caches.match(r.mode==='navigate'?'/':r).then(x=>x||caches.match('/index.html'))));return}
  e.respondWith(caches.match(r).then(x=>x||fetch(r).then(res=>{const c=res.clone();caches.open(CACHE).then(k=>k.put(r,c));return res})))});
