const CACHE_NAME = "moms-oil-change-v1"
const urlsToCache = [
  "/",
  "/index.html",
  "/styles/globals.css",
  "/styles/critical.css",
  "/styles/contact-form.css",
  "/icon-192x192.png",
  "/icon-512x512.png",
]

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache)))
})

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response
      }
      return fetch(event.request)
    }),
  )
})

self.addEventListener("push", (event) => {
  const data = event.data.json()
  const options = {
    body: data.body,
    icon: "/icon-192x192.png",
    badge: "/icon-192x192.png",
  }

  event.waitUntil(self.registration.showNotification(data.title, options))
})

