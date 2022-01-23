let cacheData = "appV1"
this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        '/static/js/main.chunk.js',
        '/static/js/vendors~main.chunk.js',
        '/static/js/bundle.js',
        'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css',
        '/static/media/searchBookIllustration.1a70c7b088d54389a5619d062add1e3d.svg',
        '/icon-192x192.png',
        '/manifest.json',
        '/index.html',
        '/',
      ])
    })
  )
})

this.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.respondWith((async () => {
      const cachedResponse = await caches.match(event.request)
      if (cachedResponse) {
        return cachedResponse
      }
    })())
  }
})
