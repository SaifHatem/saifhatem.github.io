'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "2c33554038344d7111eb20fa4e1fb867",
".git/config": "1049204c4d26710a1712db357ea26d27",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7d4d848c911c224a05537b60631c4ba0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "29fae91ec36c727fbecd2f933f2a80f7",
".git/logs/refs/heads/main": "689873248db9b91fb9d285f3558ab711",
".git/logs/refs/remotes/origin/main": "982774b650e355fdc3c90616afae269f",
".git/objects/00/fa8ca051c1f099f2091141ba574f7c36787048": "f55d8fad6b260944d91896d3da5a0b53",
".git/objects/04/e06c05c40fbcf8a2009dc6735f21ff469b8a4c": "485bbdcaed04a3371ebf4e7c8cbb141f",
".git/objects/07/30521dc997541679cb3b1230036b43abec4238": "0c0fe6afcd06e74b2f5f431448266b6b",
".git/objects/07/77b983763fad96951f21c3e2c78ec808304aba": "8728634968e281ad42fe556f382fcce6",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/09/0e37c5c738d9d57eacf0f163e8c9808864c4bd": "b4b86a64aabc0d5a138b4e52a0f2b443",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/25/4ac3994aec8db2f827916a191ab8802dba0e98": "3bd65c3101dfea9b8726aa878ff3d535",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/31/ae6186a726289f2331a0b6a45a86ef0e5412b7": "a0c4e26949c8575d2479e42bdf7bdf84",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/34/cf801c3899b144a09a99e28d3fa1317eec70ca": "ea5ce094a3d997de85d2e6ff0873d76c",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3c/586cfa83a6b1d81fe3fe7b00561d2c85953fd3": "a8be03100dafe1261d348ce4ff63091f",
".git/objects/3c/8d31afef07eaf2f35ed1c1663f9477c3f57c94": "dfc8235159dd9bc3519b7cf765557d6a",
".git/objects/3e/5b460291b1425d006479822973d304d532989d": "1d777b70de5f560a184bc6dc4385e26a",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/41/0a4ba3ab408c0923f32bf93ddc8f063001d362": "fe96e8725287b61e183b2794be34b923",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/44/ba72ba4e33bbc583cdb8310a4263506c7a7955": "eef1575fe81ba86b7d7f865a28fe54dd",
".git/objects/44/e4b2392137d14759722747f3b506c1ac03db6c": "a4a0a81cdb6b9e2bba4ad16e20ebccfb",
".git/objects/51/74a305bbe64cbd7e392c70a016b5e78ac497c4": "0441f94761a4c3da596f01b87964e783",
".git/objects/52/89134ebf448b9b0765a895239bd0fcb0c58e93": "cdce361c2a5bed436dc8bf3d5f93dfc1",
".git/objects/58/4b67cd8e24ab57ae6ffeb2ac59fe4e7a4d4402": "496be87669e543a4e4bd771e3f38cd88",
".git/objects/58/fbd723c09f1e34e66fa14e41e982f3f3b4b135": "58fe98aeaab0986b56a39425540467bb",
".git/objects/63/163c233124e547a40b3376250573ec982c9abd": "6fe8ca0cd45f60ebabc332382cb15a7d",
".git/objects/66/6f1ba6940e353afab52e44f7f3b51ae0933029": "8cca6141a58c07963d653cf77f428819",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6e/200d69dc833520c83b524b6e780571dc0eeabd": "3186ebf4674e569c912f910d0801eba8",
".git/objects/6e/6f0dc38c423fc5834461c0ae7cff519a0affcc": "0c67725b4b03e5ed96f8478d13832e20",
".git/objects/75/97aa8a657e51fa763bf60b43622a66bf0c2b97": "61782ddaf65ba5ed9e1f812b2da7c0ac",
".git/objects/78/e4d6f9a3586db20a1ebf971ad46c93439004b7": "097f37ea025d94458ccf903d67e6a50a",
".git/objects/7a/e3ac2bed48e0979fa309dfb154185265d607c2": "2dc0e7b77a0dc98bb03a2efde1bf430d",
".git/objects/82/34b4901611ca8f1dd5c3d9e531ad85e8e34096": "614f23ff20ec6e6646df1b221a5c9636",
".git/objects/83/61e0d32704ddcdfb22b962e1f28042cd86eabf": "1a5c603ed61ee4913163b4b3e9a32a26",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/6c1ab3d92b714927a2a286717d34c72eb6b48b": "fc7f06a2d8d02c1ad60c25b6760b2cbf",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9c/43e27cfa366936d67a305ebb38f965cfbb0434": "242bf9a422a69f281cc134ce4bfd71c3",
".git/objects/9e/a010c267adb50896d22885ca8a276be3cc0c24": "53c329503870f8b8f74748fbd3207744",
".git/objects/9f/a1b1c42fc6475d3d66bf1eb5120cd3f8796250": "80381d98f053315ce5dac20dd74ea88e",
".git/objects/a0/b90b8be9889e8f420f1a5fe6761c12cba918df": "a0773a5e1cc2b4d480dc4b1ea1bd059b",
".git/objects/a1/66fe66deb6d9cdaaecb77ba72d9e6cb19bb374": "6d4978a4dc5efd73f0a2c161de2940bb",
".git/objects/a6/a7d9c335b2312896f1803d460e152c7d2de90c": "0ba9b512e7cf9c2c10c8cff40722b199",
".git/objects/ab/b3d88b127d7115e77239b250821d9b57d04651": "b9f8c8c6e8cba401f0ace1ff278ec81b",
".git/objects/af/94332c46068ae4b07e5aa29b79fbad3efd7175": "6f9d125b6de60a06e7f274ec489a2143",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bf/9cda8c10b8941e0cb3ce16441f18ac4f8a7256": "9b3511ee935d9c3daa4d0b788ddfd8bb",
".git/objects/c0/8c87792d7a68ffd71898fa598b9b983f7e7ef9": "f455d63cfccab304798020f3d589d259",
".git/objects/c4/777765db93c8b3be089b01542c78c1ec3b1fd4": "e8d3fc3e6412bc6abd306ba53698fd47",
".git/objects/c7/2b37073c2f533cabfb768f49e8ec174c7efb4c": "594621b8da8e156c652a2d277be73570",
".git/objects/c8/4298db4c0642252f850c7b6cb09a49298ca514": "2ef82424eaa01653f8641f9ad2681a97",
".git/objects/cb/aa1ecaba374c87c32c5914e03cc7983a2817a2": "de60afcdeae68baa5675290091f6ccd9",
".git/objects/cc/319961b8bbeeb4988dbdf870c5eb2e41035128": "10ab6b7701392f2cbd80f55329cf1b7d",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d1/f94f56409c8d91c0fada935df98641621705d9": "d861b72f0e6cbedf58340ef680c26eb8",
".git/objects/d3/b93f59f226d64e45e6533680c0445ae9efd2f6": "148ae18844a2720e4c3e0a58a4f5239f",
".git/objects/d3/d1c24ffc12386ccd7cc92029ec3c50e518dee1": "358eba5fa5ca5230e3b6714872575b9e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dd/bd7bf794c0f854a61dc7769628f0742e8e8cf6": "b340b04a3e35ee3d5192c220c424c330",
".git/objects/e0/0caeb0ace89f122a5145fa5d01bd747a92b1f7": "5e313fc13a82c1717d9dff4433013a8f",
".git/objects/e4/3b82459542bec234159166b35eb0f1ac6ded74": "fa3f51a10e25cce084d16e5f19e79b07",
".git/objects/e8/b0af5cb80ac3fa32759d591c59437b559e6854": "6a486fc755e139fd3b5787dd1942b9bf",
".git/objects/ea/2a8e8879c5a64bdb9130655ad580b067ff39ce": "c34c2e9736ec5658db9bcd090c03a155",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/2847046804f04a9e8de87e1a4646446bcb8894": "673cddf7b3261e6e2cb4d576c78c8a68",
".git/objects/fe/4356c6b46323bee08116c06b9ccfe8de27ce6a": "97aa9e1c95f2a40de004f9af2a199a68",
".git/objects/fe/85cd2f8af038e2ad2fdaf5f5507eef609fde09": "eaf80e5ff86bafd717e7778f8f547f54",
".git/refs/heads/main": "e2cb5497fecfec75692457897d941a2e",
".git/refs/remotes/origin/main": "e2cb5497fecfec75692457897d941a2e",
"assets/AssetManifest.bin": "efd121349143034a2b7d5a9239052534",
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
"flutter_bootstrap.js": "ce4e1bb566965317fc1f638b7448281b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f3a3172c295b62e098417d6708083352",
"/": "f3a3172c295b62e098417d6708083352",
"main.dart.js": "1252af41d9b7033a06df4e20671a408d",
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
