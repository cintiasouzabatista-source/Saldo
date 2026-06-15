// Service Worker simples apenas para permitir a instalação do PWA
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // Deixa as requisições passarem normalmente
  e.respondWith(fetch(e.request));
});
