	const staticCacheName = "site-static_v2";
	const dynamicCacheName = "site-dynamic_v1";
	
	const assets = [
		'/', /* index html page */
		'/index.html',
		'/app.js',
		'/FTApp_2022GH.js', /* my js file */
		'/picture6.png', /* image for home page */
		'/styles_2022GH.css', /* my css style file */
		'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css', /* Bootstrap css */
		'/favicon.ico/favicon.ico',
		'/favicon.svg',
		'/favicon.ico/apple-touch-icon.png',
		'/fallback.html'
	];


// 	// cache size limit function
// 	const limitCacheSize = (name, size) => {
// 		cache.open(name).then(cache => {
// 			cache.keys().then(keys => {
// 				console.log(keys.length)
// 				if(keys.length > size){
// 					cache.delete(keys[0]).then(limitCacheSize(name, size));
// 					
// 				}
// 			})
// 		})
// 	};
// 


	// install service worker and add assets. This is only fired when the service worker changed

	self.addEventListener("install", evt => {
		// 	console.log("Service Worker Has Been Installed");
		evt.waitUntil (	
			caches.open(staticCacheName).then(cache => {
// 				console.log ("caching shell assets");
				cache.addAll(assets);
			})  /* this is an asynchronous code. That's why you need to wait for it to complete as 
			service worked install taks very little time and then it this event shuts down. */ 
		);

	});


	// activate service work or listen for activation, also for deleting old caches 
	self.addEventListener("activate", evt => {
	// 	console.log("Service Worker Has been Activated"); 
		evt.waitUntil(
			caches.keys().then(keys => {
				console.log(keys); 
				return Promise.all(keys
					.filter(key => key !== staticCacheName && key !== dynamicCacheName)
					.map(key => caches.delete(key))
				)
			})
		);
	});


	// fetch event, fetch a couple of things here...
	self.addEventListener("fetch", evt => {
	// 	console.log("Fetch Event", evt);
		evt.respondWith(
			caches.match(evt.request).then(cacheRes => {
				return cacheRes || fetch(evt.request).then(fetchRes => {
					return caches.open(dynamicCacheName).then(cache => {
						cache.put(evt.request.url, fetchRes.clone());
// 						limitCacheSize(dynamicCacheName, 15);
						return fetchRes; 
					})
				});cd
				
			}).catch(() => caches.match('/fallback.html'))
				
	/* This part is for specifying fallback.html in video #20 */			
	// 				{
	// 				if(evt.request.url.indexof('.html') > -1){
	// 					return caches.match('/fallback.html');
	// 				}
	//		})
		);
	});
