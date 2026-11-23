/* Ruta 1250 · service worker. Versión: b23ce4b66a */
const VERSION="8e9d715384";
const APP = "ruta-app-" + VERSION;   // página, manifest e iconos (se renueva en cada versión)
const IMG = "ruta-img";              // figuras: se guardan una vez y solo se bajan las nuevas
const FUENTES = "ruta-fuentes";
const BASE = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png", "icon-maskable-512.png", "apple-touch-icon.png", "assets/campus.webp"];
const FIGURAS = ["fig/23I-q16.webp", "fig/23I-q17.webp", "fig/23I-q18.webp", "fig/23I-q19.webp", "fig/23I-q20.webp", "fig/23I-q21.webp", "fig/23I-q22.webp", "fig/23I-q23.webp", "fig/23I-q24.webp", "fig/23I-q25.webp", "fig/23I-q26.webp", "fig/23I-q27.webp", "fig/23I-q28.webp", "fig/23I-q29.webp", "fig/23I-q3.webp", "fig/23I-q30.webp", "fig/23I-q31.webp", "fig/23I-q32.webp", "fig/23I-q33.webp", "fig/23I-q34.webp", "fig/23I-q35.webp", "fig/23I-q36.webp", "fig/23I-q37.webp", "fig/23I-q38.webp", "fig/23I-q39.webp", "fig/23I-q4.webp", "fig/23I-q40.webp", "fig/23I-q41.webp", "fig/23I-q42.webp", "fig/23I-q43.webp", "fig/23I-q44.webp", "fig/23I-q45.webp", "fig/23I-q47.webp", "fig/23I-q49.webp", "fig/23I-q5.webp", "fig/23I-q53.webp", "fig/23I-q75.webp", "fig/23I-q77.webp", "fig/23I-q82.webp", "fig/23I-q83.webp", "fig/23I-q84.webp", "fig/23I-q85.webp", "fig/23I-q86.webp", "fig/23I-q87.webp", "fig/23I-q88.webp", "fig/23I-q89.webp", "fig/23I-q90.webp", "fig/23I-q91.webp", "fig/23I-q92.webp", "fig/23I-q93.webp", "fig/23I-q94.webp", "fig/23I-s16.webp", "fig/23I-s17.webp", "fig/23I-s18.webp", "fig/23I-s19.webp", "fig/23I-s20.webp", "fig/23I-s21.webp", "fig/23I-s22.webp", "fig/23I-s23.webp", "fig/23I-s24.webp", "fig/23I-s25.webp", "fig/23I-s26.webp", "fig/23I-s27.webp", "fig/23I-s28.webp", "fig/23I-s29.webp", "fig/23I-s30.webp", "fig/23I-s31.webp", "fig/23I-s32.webp", "fig/23I-s33.webp", "fig/23I-s34.webp", "fig/23I-s35.webp", "fig/23I-s36.webp", "fig/23I-s37.webp", "fig/23I-s38.webp", "fig/23I-s39.webp", "fig/23I-s40.webp", "fig/23I-s41.webp", "fig/23I-s42.webp", "fig/23I-s43.webp", "fig/23I-s44.webp", "fig/23I-s45.webp", "fig/23I-s82.webp", "fig/23I-s83.webp", "fig/23I-s84.webp", "fig/23I-s85.webp", "fig/23I-s86.webp", "fig/23I-s87.webp", "fig/23I-s88.webp", "fig/23I-s89.webp", "fig/23I-s90.webp", "fig/23I-s91.webp", "fig/23I-s92.webp", "fig/23I-s93.webp", "fig/23I-s94.webp", "fig/23I-t1.webp", "fig/23II-q16.webp", "fig/23II-q17.webp", "fig/23II-q18.webp", "fig/23II-q19.webp", "fig/23II-q20.webp", "fig/23II-q21.webp", "fig/23II-q22.webp", "fig/23II-q23.webp", "fig/23II-q24.webp", "fig/23II-q25.webp", "fig/23II-q26.webp", "fig/23II-q27.webp", "fig/23II-q28.webp", "fig/23II-q29.webp", "fig/23II-q30.webp", "fig/23II-q31.webp", "fig/23II-q32.webp", "fig/23II-q33.webp", "fig/23II-q34.webp", "fig/23II-q35.webp", "fig/23II-q36.webp", "fig/23II-q37.webp", "fig/23II-q38.webp", "fig/23II-q39.webp", "fig/23II-q40.webp", "fig/23II-q41.webp", "fig/23II-q42.webp", "fig/23II-q43.webp", "fig/23II-q44.webp", "fig/23II-q45.webp", "fig/23II-q75.webp", "fig/23II-q76.webp", "fig/23II-q82.webp", "fig/23II-q83.webp", "fig/23II-q84.webp", "fig/23II-q85.webp", "fig/23II-q86.webp", "fig/23II-q87.webp", "fig/23II-q88.webp", "fig/23II-q89.webp", "fig/23II-q90.webp", "fig/23II-q91.webp", "fig/23II-q92.webp", "fig/23II-q93.webp", "fig/23II-q94.webp", "fig/23II-s16.webp", "fig/23II-s17.webp", "fig/23II-s18.webp", "fig/23II-s19.webp", "fig/23II-s20.webp", "fig/23II-s21.webp", "fig/23II-s22.webp", "fig/23II-s23.webp", "fig/23II-s24.webp", "fig/23II-s25.webp", "fig/23II-s26.webp", "fig/23II-s27.webp", "fig/23II-s28.webp", "fig/23II-s29.webp", "fig/23II-s30.webp", "fig/23II-s31.webp", "fig/23II-s32.webp", "fig/23II-s33.webp", "fig/23II-s34.webp", "fig/23II-s35.webp", "fig/23II-s36.webp", "fig/23II-s37.webp", "fig/23II-s38.webp", "fig/23II-s39.webp", "fig/23II-s40.webp", "fig/23II-s41.webp", "fig/23II-s42.webp", "fig/23II-s43.webp", "fig/23II-s44.webp", "fig/23II-s45.webp", "fig/23II-s75.webp", "fig/23II-s82.webp", "fig/23II-s83.webp", "fig/23II-s84.webp", "fig/23II-s85.webp", "fig/23II-s86.webp", "fig/23II-s87.webp", "fig/23II-s88.webp", "fig/23II-s89.webp", "fig/23II-s90.webp", "fig/23II-s91.webp", "fig/23II-s92.webp", "fig/23II-s93.webp", "fig/23II-s94.webp", "fig/23II-t1.webp", "fig/24I-q16.webp", "fig/24I-q17.webp", "fig/24I-q18.webp", "fig/24I-q19.webp", "fig/24I-q20.webp", "fig/24I-q21.webp", "fig/24I-q22.webp", "fig/24I-q23.webp", "fig/24I-q24.webp", "fig/24I-q25.webp", "fig/24I-q26.webp", "fig/24I-q27.webp", "fig/24I-q28.webp", "fig/24I-q29.webp", "fig/24I-q30.webp", "fig/24I-q31.webp", "fig/24I-q32.webp", "fig/24I-q33.webp", "fig/24I-q34.webp", "fig/24I-q35.webp", "fig/24I-q36.webp", "fig/24I-q37.webp", "fig/24I-q38.webp", "fig/24I-q39.webp", "fig/24I-q40.webp", "fig/24I-q41.webp", "fig/24I-q42.webp", "fig/24I-q43.webp", "fig/24I-q44.webp", "fig/24I-q45.webp", "fig/24I-q56.webp", "fig/24I-q82.webp", "fig/24I-q83.webp", "fig/24I-q84.webp", "fig/24I-q85.webp", "fig/24I-q86.webp", "fig/24I-q87.webp", "fig/24I-q88.webp", "fig/24I-q89.webp", "fig/24I-q90.webp", "fig/24I-q91.webp", "fig/24I-q92.webp", "fig/24I-q93.webp", "fig/24I-q94.webp", "fig/24I-s16.webp", "fig/24I-s17.webp", "fig/24I-s18.webp", "fig/24I-s19.webp", "fig/24I-s20.webp", "fig/24I-s21.webp", "fig/24I-s22.webp", "fig/24I-s23.webp", "fig/24I-s24.webp", "fig/24I-s25.webp", "fig/24I-s26.webp", "fig/24I-s27.webp", "fig/24I-s28.webp", "fig/24I-s29.webp", "fig/24I-s30.webp", "fig/24I-s31.webp", "fig/24I-s32.webp", "fig/24I-s33.webp", "fig/24I-s34.webp", "fig/24I-s35.webp", "fig/24I-s36.webp", "fig/24I-s37.webp", "fig/24I-s38.webp", "fig/24I-s39.webp", "fig/24I-s40.webp", "fig/24I-s41.webp", "fig/24I-s42.webp", "fig/24I-s43.webp", "fig/24I-s44.webp", "fig/24I-s45.webp", "fig/24I-s82.webp", "fig/24I-s83.webp", "fig/24I-s84.webp", "fig/24I-s85.webp", "fig/24I-s86.webp", "fig/24I-s87.webp", "fig/24I-s88.webp", "fig/24I-s89.webp", "fig/24I-s90.webp", "fig/24I-s91.webp", "fig/24I-s92.webp", "fig/24I-s93.webp", "fig/24I-s94.webp", "fig/24I-t1.webp", "fig/24II-q16.webp", "fig/24II-q17.webp", "fig/24II-q18.webp", "fig/24II-q19.webp", "fig/24II-q20.webp", "fig/24II-q21.webp", "fig/24II-q22.webp", "fig/24II-q23.webp", "fig/24II-q24.webp", "fig/24II-q25.webp", "fig/24II-q26.webp", "fig/24II-q27.webp", "fig/24II-q28.webp", "fig/24II-q29.webp", "fig/24II-q30.webp", "fig/24II-q31.webp", "fig/24II-q32.webp", "fig/24II-q33.webp", "fig/24II-q34.webp", "fig/24II-q35.webp", "fig/24II-q36.webp", "fig/24II-q37.webp", "fig/24II-q38.webp", "fig/24II-q39.webp", "fig/24II-q40.webp", "fig/24II-q41.webp", "fig/24II-q42.webp", "fig/24II-q43.webp", "fig/24II-q44.webp", "fig/24II-q45.webp", "fig/24II-q58.webp", "fig/24II-q82.webp", "fig/24II-q83.webp", "fig/24II-q84.webp", "fig/24II-q85.webp", "fig/24II-q86.webp", "fig/24II-q87.webp", "fig/24II-q88.webp", "fig/24II-q89.webp", "fig/24II-q90.webp", "fig/24II-q91.webp", "fig/24II-q92.webp", "fig/24II-q93.webp", "fig/24II-q94.webp", "fig/24II-q95.webp", "fig/24II-s16.webp", "fig/24II-s17.webp", "fig/24II-s18.webp", "fig/24II-s19.webp", "fig/24II-s20.webp", "fig/24II-s21.webp", "fig/24II-s22.webp", "fig/24II-s23.webp", "fig/24II-s24.webp", "fig/24II-s25.webp", "fig/24II-s26.webp", "fig/24II-s27.webp", "fig/24II-s28.webp", "fig/24II-s29.webp", "fig/24II-s30.webp", "fig/24II-s31.webp", "fig/24II-s32.webp", "fig/24II-s33.webp", "fig/24II-s34.webp", "fig/24II-s35.webp", "fig/24II-s36.webp", "fig/24II-s37.webp", "fig/24II-s38.webp", "fig/24II-s39.webp", "fig/24II-s40.webp", "fig/24II-s41.webp", "fig/24II-s42.webp", "fig/24II-s43.webp", "fig/24II-s44.webp", "fig/24II-s45.webp", "fig/24II-s82.webp", "fig/24II-s83.webp", "fig/24II-s84.webp", "fig/24II-s85.webp", "fig/24II-s86.webp", "fig/24II-s87.webp", "fig/24II-s88.webp", "fig/24II-s89.webp", "fig/24II-s90.webp", "fig/24II-s91.webp", "fig/24II-s92.webp", "fig/24II-s93.webp", "fig/24II-s94.webp", "fig/24II-t1.webp", "fig/25I-q21.webp", "fig/25I-q22.webp", "fig/25I-q23.webp", "fig/25I-q24.webp", "fig/25I-q25.webp", "fig/25I-q26.webp", "fig/25I-q27.webp", "fig/25I-q28.webp", "fig/25I-q29.webp", "fig/25I-q30.webp", "fig/25I-q31.webp", "fig/25I-q32.webp", "fig/25I-q33.webp", "fig/25I-q34.webp", "fig/25I-q35.webp", "fig/25I-q36.webp", "fig/25I-q37.webp", "fig/25I-q38.webp", "fig/25I-q39.webp", "fig/25I-q40.webp", "fig/25I-q41.webp", "fig/25I-q42.webp", "fig/25I-q43.webp", "fig/25I-q44.webp", "fig/25I-q45.webp", "fig/25I-q53.webp", "fig/25I-q57.webp", "fig/25I-q74.webp", "fig/25I-q82.webp", "fig/25I-q83.webp", "fig/25I-q84.webp", "fig/25I-q85.webp", "fig/25I-q86.webp", "fig/25I-q87.webp", "fig/25I-q88.webp", "fig/25I-q89.webp", "fig/25I-q90.webp", "fig/25I-q91.webp", "fig/25I-q92.webp", "fig/25I-q93.webp", "fig/25I-q94.webp", "fig/25I-s21.webp", "fig/25I-s22.webp", "fig/25I-s23.webp", "fig/25I-s24.webp", "fig/25I-s25.webp", "fig/25I-s26.webp", "fig/25I-s27.webp", "fig/25I-s28.webp", "fig/25I-s29.webp", "fig/25I-s30.webp", "fig/25I-s31.webp", "fig/25I-s32.webp", "fig/25I-s33.webp", "fig/25I-s34.webp", "fig/25I-s35.webp", "fig/25I-s36.webp", "fig/25I-s37.webp", "fig/25I-s38.webp", "fig/25I-s39.webp", "fig/25I-s40.webp", "fig/25I-s41.webp", "fig/25I-s42.webp", "fig/25I-s43.webp", "fig/25I-s44.webp", "fig/25I-s45.webp", "fig/25I-s82.webp", "fig/25I-s83.webp", "fig/25I-s84.webp", "fig/25I-s85.webp", "fig/25I-s86.webp", "fig/25I-s87.webp", "fig/25I-s88.webp", "fig/25I-s89.webp", "fig/25I-s90.webp", "fig/25I-s91.webp", "fig/25I-s92.webp", "fig/25I-s93.webp", "fig/25I-s94.webp", "fig/25I-t1.webp", "fig/25II-25.webp", "fig/25II-26.webp", "fig/25II-29.webp", "fig/25II-30.webp", "fig/25II-35.webp", "fig/25II-36.webp", "fig/25II-37.webp", "fig/25II-38.webp", "fig/25II-43.webp", "fig/25II-85.webp", "fig/25II-87.webp", "fig/25II-92.webp", "fig/25II-93.webp", "fig/25II-t1.webp", "fig/26I-21.webp", "fig/26I-22.webp", "fig/26I-23.webp", "fig/26I-24.webp", "fig/26I-25.webp", "fig/26I-27.webp", "fig/26I-28.webp", "fig/26I-30.webp", "fig/26I-35.webp", "fig/26I-36.webp", "fig/26I-37.webp", "fig/26I-38.webp", "fig/26I-43.webp", "fig/26I-86.webp", "fig/26I-87.webp", "fig/26I-91.webp", "fig/26I-92.webp", "fig/26I-97.webp", "fig/26I-t1.webp", "fig/26II-21.webp", "fig/26II-23.webp", "fig/26II-24.webp", "fig/26II-25.webp", "fig/26II-27.webp", "fig/26II-28.webp", "fig/26II-29.webp", "fig/26II-30.webp", "fig/26II-35.webp", "fig/26II-37.webp", "fig/26II-38.webp", "fig/26II-39.webp", "fig/26II-43.webp", "fig/26II-44.webp", "fig/26II-45.webp", "fig/26II-82.webp", "fig/26II-84.webp", "fig/26II-85.webp", "fig/26II-87.webp", "fig/26II-89.webp", "fig/26II-91.webp", "fig/26II-99.webp", "fig/26II-t1.webp", "fig/27I-q21.webp", "fig/27I-q22.webp", "fig/27I-q23.webp", "fig/27I-q24.webp", "fig/27I-q25.webp", "fig/27I-q26.webp", "fig/27I-q29.webp", "fig/27I-q30.webp", "fig/27I-q35.webp", "fig/27I-q36.webp", "fig/27I-q37.webp", "fig/27I-q38.webp", "fig/27I-q75.webp", "fig/27I-q81.webp", "fig/27I-q87.webp", "fig/27I-s22.webp", "fig/27I-s24.webp", "fig/27I-s25.webp", "fig/27I-s26.webp", "fig/27I-s29.webp", "fig/27I-s30.webp", "fig/27I-s36.webp", "fig/27I-s38.webp", "fig/27I-t1.webp"];

self.addEventListener("install", e => {
  e.waitUntil((async () => {
    const app = await caches.open(APP);
    await app.addAll(BASE);
    const img = await caches.open(IMG);
    const ya = new Set((await img.keys()).map(r => new URL(r.url).pathname.split("/").pop()));
    const faltan = FIGURAS.filter(f => !ya.has(f.split("/").pop()));
    for (let i = 0; i < faltan.length; i += 20) {
      await Promise.all(faltan.slice(i, i + 20).map(u => img.add(u).catch(() => {})));
    }
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) {
      if (k.startsWith("ruta-app-") && k !== APP) await caches.delete(k);
    }
    const img = await caches.open(IMG);
    const validas = new Set(FIGURAS.map(f => f.split("/").pop()));
    for (const r of await img.keys()) {
      if (!validas.has(new URL(r.url).pathname.split("/").pop())) await img.delete(r);
    }
    await self.clients.claim();
  })());
});

async function primeroRed(req) {
  const app = await caches.open(APP);
  try {
    const ctl = new AbortController();
    const t = setTimeout(() => ctl.abort(), 5000);
    const res = await fetch(req, { signal: ctl.signal, cache: "no-cache" });
    clearTimeout(t);
    if (res.ok) app.put("index.html", res.clone());
    return res;
  } catch (_) {
    return (await app.match("index.html")) || Response.error();
  }
}

async function primeroCache(req, nombre) {
  const hit = await caches.match(req, { ignoreSearch: true });
  if (hit) return hit;
  const res = await fetch(req);
  if (res.ok || res.type === "opaque") (await caches.open(nombre)).put(req, res.clone());
  return res;
}

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (req.mode === "navigate") { e.respondWith(primeroRed(req)); return; }
  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    e.respondWith(primeroCache(req, FUENTES)); return;
  }
  if (url.origin === location.origin) {
    e.respondWith(primeroCache(req, url.pathname.includes("/fig/") ? IMG : APP));
  }
});
