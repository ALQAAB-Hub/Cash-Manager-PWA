const CACHE_NAME = 'cash-manager-v3'; // version update kiya
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-102.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './js/chart.js',
  './js/all.min.js'
];

// Install
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
      .catch(err => console.error('Cache addAll failed:', err))
  );
});

// Activate
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch (offline‑first)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request).then(networkResponse => {
        // Cache new files dynamically (optional)
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      });
    }).catch(() => {
      // Offline fallback – only for HTML requests you might want a custom page
      if (event.request.mode === 'navigate') {
        return caches.match('./index.html');
      }
      return new Response('Offline – connect to internet and refresh.', {
        status: 503,
        statusText: 'Service Unavailable'
      });
    })
  );
});