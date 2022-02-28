//call install event
// self.addEventListener("install", (e) => {
// 	console.log("service ");
// });

//call  activate
// self.addEventListener("activate", (e) => {
// 	console.log("service:activate ");
// });

//caching
const cacheName = "v1";

const CacheAssets = [];
self.addEventListener("install", (e) => {
	e.waitUntil(
		caches
			.open(cacheName)
			.then((caches) => {
				caches.addAll(CacheAssets);
			})
			.then(() => self.skipWaiting()),
	);
});

self.addEventListener("activate", (e) => {
	console.log("service:activate ");
	//remove unwated caches

	e.waitUntil(
		caches.keys().then((cachesName) => {
			return Promise.all(
				cachesName.map((cache) => {
					if (cache !== cacheName) {
						return caches.delete(cache);
					}
				}),
			);
		}),
	);
});

// self.addEventListener("fetch", (e) => {
// 	e.respondWith(
// 		fetch(e.request).catch(() => {
// 			caches.match(e.request);
// 		}),
// 	);
// });

self.addEventListener("fetch", (e) => {
	e.respondWith(
		fetch(e.request)
			.then((res) => {
				//make clone of response
				const resClone = res.clone();
				caches.open(cacheName).then((cache) => {
					cache.put(e.request, resClone);
				});
				return res;
			})
			.catch((err) => {
				caches.match(e.request).then((res) => res);
			}),
	);
});
