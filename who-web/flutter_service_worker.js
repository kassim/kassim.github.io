'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "4934c2de71727ef1c40d7f0b23371e13",
"/main.dart.js": "9747dd878596da5bb9883892a496664b",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/manifest.json": "73974f27b05f20b4cb13d13177ec9f50",
"/assets/LICENSE": "81f5865c45f059fdafbdf387e7c61fdb",
"/assets/AssetManifest.json": "b6a7fc7b242b773746be8e1afdb50afc",
"/assets/FontManifest.json": "580ff1a5d08679ded8fcf5c6848cece7",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/WHO.jpg": "a74fe0938147ac90b452d730863f9184"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
