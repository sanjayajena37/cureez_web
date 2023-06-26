'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "6648436d3801025b6d9c6cabf790c601",
"index.html": "b55667ad9245f0e41da624cb8ea4f476",
"/": "b55667ad9245f0e41da624cb8ea4f476",
"main.dart.js": "fba9f76d4c1bc19b8ab23696e1029bbb",
"web.config": "5016e62a6913fcf79603d8ebb18af948",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e52a6e4a2523c148ea3a61d923847685",
"assets/AssetManifest.json": "1ec86ef9c2b232133ed3efd35525a175",
"assets/NOTICES": "5dd18faec52d4bccbe8cfe5e58becc2e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/rflutter_alert/assets/images/icon_success.png": "8bb472ce3c765f567aa3f28915c1a8f4",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_success.png": "7d6abdd1b85e78df76b2837996749a43",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_error.png": "2da9704815c606109493d8af19999a65",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_warning.png": "e4606e6910d7c48132912eb818e3a55f",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_info.png": "612ea65413e042e3df408a8548cefe71",
"assets/packages/rflutter_alert/assets/images/2.0x/close.png": "abaa692ee4fa94f76ad099a7a437bd4f",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_success.png": "1c04416085cc343b99d1544a723c7e62",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_error.png": "15ca57e31f94cadd75d8e2b2098239bd",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_warning.png": "e5f369189faa13e7586459afbe4ffab9",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_info.png": "e68e8527c1eb78949351a6582469fe55",
"assets/packages/rflutter_alert/assets/images/3.0x/close.png": "98d2de9ca72dc92b1c9a2835a7464a8c",
"assets/packages/rflutter_alert/assets/images/icon_error.png": "f2b71a724964b51ac26239413e73f787",
"assets/packages/rflutter_alert/assets/images/icon_warning.png": "ccfc1396d29de3ac730da38a8ab20098",
"assets/packages/rflutter_alert/assets/images/icon_info.png": "3f71f68cae4d420cecbf996f37b0763c",
"assets/packages/rflutter_alert/assets/images/close.png": "13c168d8841fcaba94ee91e8adc3617f",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "2c15fcdb78bd29745a5bae0e9415e40a",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/Cureez/DoctorAppointment.jpg": "2ad2188313e7fbee36e770fceb57b41c",
"assets/assets/Cureez/blood%2520donet.jpg": "e36fa09d327d4c331f519f2394b4f2d9",
"assets/assets/Cureez/info.png": "928fc3b1ac52ef07d00892c2424e7e04",
"assets/assets/Cureez/DoctorAppointment2.jpg": "315488fcac9388f9431a202039ef86fd",
"assets/assets/Cureez/lab2.jpg": "ce0664f21bed04316542cebc49fd62d3",
"assets/assets/Cureez/CureEZLogo.png": "f6cf97148eda4fa97bb3c7e058a814a2",
"assets/assets/Cureez/DoctorBanner3.webp": "1e38fd1a42eb5391f3b08e08f7922904",
"assets/assets/Cureez/Doctorbanner2.png": "6f7ce78972221ed9bed7cac6536e304e",
"assets/assets/Cureez/Lab1.jpg": "192124c6b4ee7690ff7739bb7e01cbfc",
"assets/assets/Cureez/fever.png": "f46a4364d09964f7f3bb0d0831a64fdb",
"assets/assets/Cureez/premium3.png": "a570f190a299195ffe83eec6642bad45",
"assets/assets/Cureez/cureEZBanner.png": "e0172d4fa02f44e08fc4bf786796e808",
"assets/assets/Cureez/rupees.png": "5af6048ef5175a2c3f424ae8c1f54fc8",
"assets/assets/Cureez/DiabeticScreening.jpg": "42c4402569209c4e460297ab67aabc26",
"assets/assets/Cureez/CureEzTransLogo.png": "cd3b714506f17fe6697b316f0d811a59",
"assets/assets/Cureez/topdoctor_.png": "c2fd7f79f64c238717ee50811938018a",
"assets/assets/Cureez/question.png": "2cdbc8ba1ab73d608c1398b24dc77264",
"assets/assets/Cureez/top_doctor.jpg": "b5d7f8792bfa9790333949f5afd5283d",
"assets/assets/Cureez/congratulations.gif": "24e8fc6f8724923748625bc51b8b00a8",
"assets/assets/Cureez/ortho.png": "b1a7aa944e114d72bc4a7001b9b85664",
"assets/assets/Cureez/enterotp.png": "83cff2a20b46224b8cdb488214cf822c",
"assets/assets/Cureez/Slider3.png": "691bb99821661de2cc189aa4a34dc482",
"assets/assets/Cureez/Homehealthcare.jpg": "9a2fdcb50bcaceb85e7523661119c605",
"assets/assets/Cureez/lab_test.png": "6d24f155cfd24a584e1b2a1bbec84fd5",
"assets/assets/Cureez/cureezbannner.jpg": "a29fc18e15586203a382ebe0d049a8bb",
"assets/assets/Cureez/Headache%2520(2).png": "bb5a642ea4ddd279a3d4dafde03fa5fc",
"assets/assets/Cureez/Doctor.png": "ed71960d58f4d5f2491395f043aa167d",
"assets/assets/Cureez/cureEZbannernewtwo.jpg": "ca6a712c26e9a05aa145237dc96bf7e7",
"assets/assets/Cureez/Slider2.png": "f72515d1dfea042c91811223a56e52be",
"assets/assets/Cureez/CureEZLogo.jpeg": "b0f10501b026c123d0a91bedd1a9a5ea",
"assets/assets/Cureez/img.png": "babcc91b817e18c49ccceb9ff0782818",
"assets/assets/Cureez/ThyroidTest.jpg": "2f7eb8850b69b6de983937cdf3df7244",
"assets/assets/Cureez/Neuro.jpg": "1cbfef4b9a24cd274e06306cd225e6b3",
"assets/assets/Cureez/Doctorrr.png": "b832486fd5389447197da80ad1dea03d",
"assets/assets/Cureez/Payment.png": "aa63182f62ab528c7180ff0cbe9a519e",
"assets/assets/Cureez/like.png": "3e4bd6775fc7baa99e5255899c157a03",
"assets/assets/Cureez/logowithContent.png": "61c5db4d2ebe07a5266e04c93d0ef9b7",
"assets/assets/Cureez/doctbanner4.jpg": "5c1b41179b46694bf47f2965ea56d262",
"assets/assets/Cureez/Acne1.png": "f4c4c0b65a2463e3765626000760fe0e",
"assets/assets/Cureez/doctbanner5.jpg": "ea1df8868971921d34d79c6d332a01a7",
"assets/assets/Cureez/cureEZbannernewone.jpg": "2aad3b7359136fa7c383f3868cc4a152",
"assets/assets/Cureez/doctbanner2.jpg": "9770142191f14d9a0006adc08e64c6f3",
"assets/assets/Cureez/mentalhealth.png": "29bdae99e06c4cf7dc3a6c6a8cc254e9",
"assets/assets/Cureez/doctbanner3.jpg": "d1616d38d94c192285a0f3bbc2a5db36",
"assets/assets/Cureez/DoctorB.jpg": "bd113c4cf78e4dab89554a6859b652a2",
"assets/assets/Cureez/DoctorAppointment1.webp": "ec4313a26c9ef630086068dd3f8d4946",
"assets/assets/Cureez/doctbanner1.jpg": "603300e459bfeda18bb4b9a01ced239e",
"assets/assets/Cureez/Profile.png": "53e15d3797bb3ab385391e5d0f16dcae",
"assets/assets/Cureez/thankyou.png": "07f63d1fdac980253e034aeee835f189",
"assets/assets/Cureez/Newlab.png": "23d187d2bf1fecd8242346992c9f871f",
"assets/assets/Cureez/Slide33.png": "35a31616505f7fcf1f0a6b4800628db1",
"assets/assets/Cureez/DoctorBanner1.webp": "0b7b50466ec6ea7d841fb151e4cda832",
"assets/assets/Cureez/basket2.png": "d5c8d330c9d75e966914994862502e3a",
"assets/assets/Cureez/Cough.png": "16e4b049ee32122fb65e0329b8ea0e9f",
"assets/assets/Cureez/patient.png": "1141917d5c037e8d51322d9f245fbc61",
"assets/assets/Cureez/basket1.png": "df6ba98185f6f6c5bd457436b45214a4",
"assets/assets/Cureez/Profile2.png": "680358d7f4c274738f73d4c74c1f758b",
"assets/assets/Cureez/order%2520medicine.jpg": "27a87134e8c07dbaf685f1de885c287c",
"assets/assets/Cureez/sanja.png": "26758a9d534799ce36353da2b0a02552",
"assets/assets/Cureez/Slider%25201.png": "6e7627ce0aa044959db8c6ddb7ca13d3",
"assets/assets/Cureez/doctornew.png": "2a6b76671a2c9e65fd34831e8ab9122d",
"assets/assets/Cureez/Headache.png": "9fe1a22fa1819431448a12f0a4271cfb",
"assets/assets/Cureez/signature.jpg": "6e1172168b4739f6005178273ea548e4"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
