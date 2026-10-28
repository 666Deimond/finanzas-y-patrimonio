const CACHE='finanzas-patrimonio-shell-v03';
const FILES=['./','./index.html','./manifest.json'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil((async()=>{for(const k of await caches.keys())if(k!==CACHE)await caches.delete(k);await self.clients.claim()})()));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const u=new URL(e.request.url);
  // Cache only same-origin app shell. Never cache Firebase/auth/CDN requests.
  if(u.origin!==self.location.origin)return;
  e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request).then(res=>{
    if(res.ok){const copy=res.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));}
    return res;
  }).catch(()=>caches.match('./index.html'))));
});
