//import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { NetworkFirst } from 'workbox-strategies';




registerRoute(
  ({ request }) => request.destination === 'style',
  new StaleWhileRevalidate({
    cacheName: 'styles',
  })
);

registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'images',
  })
);


registerRoute(
  ({ request }) => request.destination === 'script' || request.destination === 'style',
  new NetworkFirst({
    cacheName: 'api',
  })
);
