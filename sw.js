// 粉粉打卡 PWA Service Worker - 离线缓存
const CACHE_NAME = 'pinkcheck-v2';
const FILES = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-180.png',
  '/icon-192.png',
  '/icon-512.png'
];

// 安装：预缓存核心文件
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES).catch(() => {}))
  );
  self.skipWaiting();
});

// 激活：清理旧缓存
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// 请求拦截：缓存优先
self.addEventListener('fetch', e => {
  // 跳过非 GET 请求
  if (e.request.method !== 'GET') return;

  e.respondWith(
    caches.match(e.request).then(cached => {
      // 命中缓存直接返回
      if (cached) return cached;

      // 网络请求并缓存
      return fetch(e.request).then(response => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(e.request, clone);
        });
        return response;
      }).catch(() => {
        // 离线且未缓存：返回首页（SPA 兜底）
        return caches.match('/');
      });
    })
  );
});
