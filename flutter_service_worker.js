'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "efd121349143034a2b7d5a9239052534",
"assets/AssetManifest.bin.json": "7d7b9923576db1ee6d455c6683b3f2e7",
"assets/AssetManifest.json": "a5532e1d3543bd47a7f36e820665e2ee",
"assets/assets/fonts/Heebo-Regular.ttf": "c8de9147899637e410b0794d9b0eae37",
"assets/assets/images/6.jpg": "b9a28ef74ae03acda8cfb55c2c20fb55",
"assets/assets/images/bookly1.jpg": "680ad7a9d9f93e11bf2d5d81671a0a4c",
"assets/assets/images/bookly2.jpg": "595b52f079eb832d55959536520aac2e",
"assets/assets/images/bookly3.jpg": "c67b340c9f790a80c000782ed485a750",
"assets/assets/images/bookly4.jpg": "b9a28ef74ae03acda8cfb55c2c20fb55",
"assets/assets/images/bookly5.jpg": "3c62870984db9b65eafa0039417ba350",
"assets/assets/images/bookly7.jpg": "1244a6c74a7adba19eb666c2665aba66",
"assets/assets/images/bookly8.jpg": "07c0b737899a3994262f6d15f1504110",
"assets/assets/images/bookly9.jpg": "610d8345bfeb58d8747063497432bd46",
"assets/assets/images/dataChecker1.jpg": "49f7dfffac131f57cae4ab870673a72c",
"assets/assets/images/dataChecker2.jpg": "2f5cac75a8aa8b6cda05818f773eb54f",
"assets/assets/images/dataChecker3.jpg": "121c78787b65c06d4f7c680208736a55",
"assets/assets/images/dataChecker4.jpg": "5b75eb5136721520b5a701390221ce44",
"assets/assets/images/flexforce1.jpg": "acbd968b2ab1933172ae82abe3355040",
"assets/assets/images/flexforce2.jpg": "9ddde87d5c090d4439fead3bbf61f144",
"assets/assets/images/flexforce3.jpg": "6fadb4a732ac14efc10f1ceacb312345",
"assets/assets/images/flexforce4.jpg": "9f0f64ebed650d0267195e96c56a147e",
"assets/assets/images/flexforce5.jpg": "0cd74037a017a4d331052986e0b05019",
"assets/assets/images/flexforce6.jpg": "0d05a342e55f307484e992e5b6d5ebbc",
"assets/assets/images/myCountry1.jpg": "e5f12445253f82445f556928aaeae5ff",
"assets/assets/images/myCountry2.jpg": "022c64a230b6276659934bd467cc5b67",
"assets/assets/images/myCountry3.jpg": "b044ee81799fd66b73f01f65af3e3db9",
"assets/assets/images/myCountry4.jpg": "e23bd14392f00d3afbafdb34a00d3546",
"assets/assets/images/myCountry5.jpg": "139b59365e43dba4b6432436617c1923",
"assets/assets/images/myCountry6.jpg": "5d9a040e88c86201c280bed51a2c8d19",
"assets/assets/images/mypic.jpg": "26bf64e85064a37d0622ff82fafa9f80",
"assets/assets/images/newsApp1.jpg": "218ed528d0df90a5216fdc4d0f477d4c",
"assets/assets/images/newsApp2.jpg": "aa4b956120d4ab826b5080a7e1a7ac21",
"assets/assets/images/newsApp3.jpg": "c1d43c2533b2a3bd150c4f19ececa1c4",
"assets/assets/images/weather1.jpg": "627a92b7cd5603e6ad7a77b11b8b5c61",
"assets/assets/images/weather2.jpg": "5b3c6e7acce56161ca2d66e2685077b1",
"assets/assets/images/weather3.jpg": "367c6e40c77864fc618349e078d7b24c",
"assets/assets/images/weather4.jpg": "7cae7470b6d2ac3134aa9fe7e14a5c97",
"assets/assets/images/weather5.jpg": "d87e28adc7017cea9827b95ae338ac3f",
"assets/FontManifest.json": "7d66dc886c25b8ebf4b7fafc5adea6e3",
"assets/fonts/MaterialIcons-Regular.otf": "dd6ff7e8292e86b6a03b856bad9cd50e",
"assets/NOTICES": "ab0c41ee9fc658417f4dc3e088752e87",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "ab8db72f69d90e751ae40c5c5429c2f0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f3a3172c295b62e098417d6708083352",
"/": "f3a3172c295b62e098417d6708083352",
"main.dart.js": "53800a7f3228645fef4898e7ca4cdc20",
"manifest.json": "9583ebe54188295a4768ae1aa040030b",
"version.json": "cc1fa9cce5af273c0909d105387fee89"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
