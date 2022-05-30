let cacheData = 'dictionary'
this.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        // '/static/js/main.chunk.js',
        // '/static/js/vendors~main.chunk.js',
        '/static/js/bundle.js',
        '/static/media/searchIllustration.347d84d49db9635a90ff.png',
        '/static/media/loader.fd592f42f44445cbb8e7e12a97382c1f.svg',
        '/icon-192x192.png',
        '/manifest.json',
        '/index.html',
        '/',
      ])
    }),
  )
})

this.addEventListener('fetch', (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      (async () => {
        const cachedResponse = await caches.match(event.request)
        if (cachedResponse) {
          localStorage.setItem('appMode', 'true')
          return cachedResponse
        }
      })(),
    )
  } else {
    localStorage.setItem('appMode', 'true')
  }
})
