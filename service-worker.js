self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("departure-pa").then(cache =>
      cache.addAll([
        "./",
        "./index.html",
        "./manifest.json"
      ])
    )
  );
});