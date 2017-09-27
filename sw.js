var urlsToCache = [
  '/',
  './',
  '/index.html',
  '/manifest.json',
  '/style.css',
  '/scripts/main.js',
  '/scripts/jquery-3.2.1.min.js',
  '/sw.js',
  '/page.html',
  '/offline.html',
];

var cacheName = "test-webapp-v1";

self.addEventListener("install", function(event) {
  event.waitUntil(caches.open(cacheName).then(function(cache) {
    console.log('opened cache');
    return cache.addAll(urlsToCache);
  }, function(err) {
    console.log(err);
  }));
});

self.addEventListener("fetch", function(event) {
  event.respondWith(caches.match(event.request).then(function(response) {
    if (response) {
      return response;
    }
    return fetch(event.request).catch(function(error) {
      console.log("Responding with offline page for request of " + event.request.url + " because of error: \"" + error + "\"");
      return caches.match("/offline.html");
    });
  }));
});

self.addEventListener("activate", function(event) {
  event.waitUntil(caches.keys().then(function(cacheNames) {
    console.log(cacheNames);
    Promise.all(cacheNames.filter(function(cN) {
      if (cN === cacheName) {
        return false;
      }
      return true;
    }).map(function(cN) {
      return caches.delete(cN);
    }));
  }));
});
