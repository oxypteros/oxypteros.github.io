const oxyStatic = "oxypteros-v1"
const assets = [
  "/",
  "/index.html",
  "/css/oxydize.css",
  "/css/style.css",
  "/css/styles-small.css",
  "/css/styles-medium.css",
  "/css/styles-large.css",
  "/js/main.js"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(oxyStatic).then(cache => {
      cache.addAll(assets)
    })
  )
})
self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})