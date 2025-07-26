// sw.js - 서비스워커: PWA 캐싱 기능
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('alarm-cache-v1').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './icon.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});