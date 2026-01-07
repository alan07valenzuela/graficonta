import { p as decodeKey } from './chunks/astro/server_BRvebGR_.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BZ4GnlnX.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Alan/Documents/Programacion/Proyectos/Graficonta%20Web/","cacheDir":"file:///C:/Users/Alan/Documents/Programacion/Proyectos/Graficonta%20Web/node_modules/.astro/","outDir":"file:///C:/Users/Alan/Documents/Programacion/Proyectos/Graficonta%20Web/dist/","srcDir":"file:///C:/Users/Alan/Documents/Programacion/Proyectos/Graficonta%20Web/src/","publicDir":"file:///C:/Users/Alan/Documents/Programacion/Proyectos/Graficonta%20Web/public/","buildClientDir":"file:///C:/Users/Alan/Documents/Programacion/Proyectos/Graficonta%20Web/dist/client/","buildServerDir":"file:///C:/Users/Alan/Documents/Programacion/Proyectos/Graficonta%20Web/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"nosotros/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/nosotros","isIndex":false,"type":"page","pattern":"^\\/nosotros\\/?$","segments":[[{"content":"nosotros","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/nosotros.astro","pathname":"/nosotros","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.14.1_@types+node@24_4db62a7c04e8582ead0f84b25dda6e8d/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.7ZaH27ra.css"},{"type":"external","src":"/_astro/galeria.CUgI9Nq3.css"},{"type":"external","src":"/_astro/index.7ZaH27ra.css"}],"routeData":{"route":"/galeria","isIndex":false,"type":"page","pattern":"^\\/galeria\\/?$","segments":[[{"content":"galeria","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/galeria.astro","pathname":"/galeria","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Alan/Documents/Programacion/Proyectos/Graficonta Web/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/Alan/Documents/Programacion/Proyectos/Graficonta Web/src/pages/galeria.astro",{"propagation":"none","containsHead":true}],["C:/Users/Alan/Documents/Programacion/Proyectos/Graficonta Web/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Alan/Documents/Programacion/Proyectos/Graficonta Web/src/pages/nosotros.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.14.1_@types+node@24_4db62a7c04e8582ead0f84b25dda6e8d/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/galeria@_@astro":"pages/galeria.astro.mjs","\u0000@astro-page:src/pages/nosotros@_@astro":"pages/nosotros.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_Bj_qJLDa.mjs","C:/Users/Alan/Documents/Programacion/Proyectos/Graficonta Web/node_modules/.pnpm/astro@5.14.1_@types+node@24_4db62a7c04e8582ead0f84b25dda6e8d/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DWAngz6S.mjs","@astrojs/react/client.js":"_astro/client.DLz2fgu8.js","C:/Users/Alan/Documents/Programacion/Proyectos/Graficonta Web/node_modules/.pnpm/astro-lightgallery@2.0.1/node_modules/astro-lightgallery/src/components/LightGallery.astro?astro&type=script&index=0&lang.ts":"_astro/LightGallery.astro_astro_type_script_index_0_lang.DEQkJTTN.js","C:/Users/Alan/Documents/Programacion/Proyectos/Graficonta Web/node_modules/.pnpm/lightgallery@2.9.0/node_modules/lightgallery/plugins/thumbnail/lg-thumbnail.es5.js":"_astro/lg-thumbnail.es5.D0nvMFMI.js","C:/Users/Alan/Documents/Programacion/Proyectos/Graficonta Web/node_modules/.pnpm/lightgallery@2.9.0/node_modules/lightgallery/plugins/autoplay/lg-autoplay.es5.js":"_astro/lg-autoplay.es5.BWPE3dGW.js","C:/Users/Alan/Documents/Programacion/Proyectos/Graficonta Web/node_modules/.pnpm/lightgallery@2.9.0/node_modules/lightgallery/plugins/comment/lg-comment.es5.js":"_astro/lg-comment.es5.BbBE0Xe-.js","C:/Users/Alan/Documents/Programacion/Proyectos/Graficonta Web/node_modules/.pnpm/lightgallery@2.9.0/node_modules/lightgallery/plugins/fullscreen/lg-fullscreen.es5.js":"_astro/lg-fullscreen.es5.CScdSfR8.js","C:/Users/Alan/Documents/Programacion/Proyectos/Graficonta Web/node_modules/.pnpm/lightgallery@2.9.0/node_modules/lightgallery/plugins/hash/lg-hash.es5.js":"_astro/lg-hash.es5.Bsx0nKPu.js","C:/Users/Alan/Documents/Programacion/Proyectos/Graficonta Web/node_modules/.pnpm/lightgallery@2.9.0/node_modules/lightgallery/plugins/mediumZoom/lg-medium-zoom.es5.js":"_astro/lg-medium-zoom.es5.DsWxlQns.js","C:/Users/Alan/Documents/Programacion/Proyectos/Graficonta Web/node_modules/.pnpm/lightgallery@2.9.0/node_modules/lightgallery/plugins/pager/lg-pager.es5.js":"_astro/lg-pager.es5.kJL8J-AQ.js","C:/Users/Alan/Documents/Programacion/Proyectos/Graficonta Web/node_modules/.pnpm/lightgallery@2.9.0/node_modules/lightgallery/plugins/relativeCaption/lg-relative-caption.es5.js":"_astro/lg-relative-caption.es5.F7qjUxcZ.js","C:/Users/Alan/Documents/Programacion/Proyectos/Graficonta Web/node_modules/.pnpm/lightgallery@2.9.0/node_modules/lightgallery/plugins/rotate/lg-rotate.es5.js":"_astro/lg-rotate.es5.BOf0l3Ea.js","C:/Users/Alan/Documents/Programacion/Proyectos/Graficonta Web/node_modules/.pnpm/lightgallery@2.9.0/node_modules/lightgallery/plugins/share/lg-share.es5.js":"_astro/lg-share.es5.B5i2h5sv.js","C:/Users/Alan/Documents/Programacion/Proyectos/Graficonta Web/node_modules/.pnpm/lightgallery@2.9.0/node_modules/lightgallery/plugins/video/lg-video.es5.js":"_astro/lg-video.es5.lZeQlbPr.js","C:/Users/Alan/Documents/Programacion/Proyectos/Graficonta Web/node_modules/.pnpm/lightgallery@2.9.0/node_modules/lightgallery/plugins/vimeoThumbnail/lg-vimeo-thumbnail.es5.js":"_astro/lg-vimeo-thumbnail.es5.BWMi6ZGN.js","C:/Users/Alan/Documents/Programacion/Proyectos/Graficonta Web/node_modules/.pnpm/lightgallery@2.9.0/node_modules/lightgallery/plugins/zoom/lg-zoom.es5.js":"_astro/lg-zoom.es5.Bjxs86yy.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/graficonta_2011.5s_2lfts.avif","/_astro/mision.CBpR8DTM.avif","/_astro/vision.DfkFdLY-.avif","/_astro/fachada.j6Oeo1Oq.avif","/_astro/paper-plane.pfcvZOD1.png","/_astro/above_the_fold_bg.DVOL5xDN.webp","/_astro/trophy.Umvjbdma.png","/_astro/luzexterna.BrBvqCp0.png","/_astro/shield.DHjc0tBk.png","/_astro/mapa_paraguay.B3ngmI0o.png","/_astro/amandau.Cr0bPNSx.png","/_astro/graficonta_logo_bw.dKnxnvOk.svg","/_astro/banners.DW6PeU3N.png","/_astro/adhesivo.sc3ZO8S6.png","/_astro/farmacenter.NSTRdNbK.png","/_astro/ccu.bwFZVcr1.png","/_astro/ploteado.BaWu5I2S.png","/_astro/odonto_excellence.CE5p0kkY.png","/_astro/pajarito.f1Qq2Jzu.png","/_astro/corporeo.DqLYDZxX.png","/_astro/prosoil.Ej-3aLSk.png","/_astro/luzinterna.DrR0ebLU.png","/_astro/graficonta_billboard.Dedf6W_b.png","/_astro/adhesivo1.kjIrY361.jpeg","/_astro/corporeo1.Bljfnmri.jpeg","/_astro/adhesivo2.DFQbyfe2.jpeg","/_astro/carteleria_general1.DfqK1zi1.jpeg","/_astro/microperforado.BW5tJaQ0.jpeg","/_astro/carteleria1.Jn4gVz94.jpeg","/_astro/ploteadocafemartinez.BLC_RDb6.jpeg","/_astro/corporeo prosoil.B4OAvudU.jpeg","/_astro/roll up banner.md1VzrX9.jpeg","/_astro/stand.lQe0iYh9.jpeg","/_astro/stand2.g0gZyRNW.jpeg","/_astro/lona front light.CLxzoBGk.jpeg","/_astro/corporeo2.DRFeyxbC.jpeg","/_astro/pvc.Bte5t_m5.jpeg","/_astro/loading.BZOHaeKn.gif","/_astro/lg.oyjwlqP2.ttf","/_astro/lg.CosQH4Cu.woff","/_astro/lg.B0dIV2BS.svg","/_astro/cta_bg.38LAHkMf.jpeg","/_astro/galeria.CUgI9Nq3.css","/_astro/index.7ZaH27ra.css","/favicon.svg","/logo_bgwhite.svg","/logo_color.svg","/logo_white.svg","/_astro/client.DLz2fgu8.js","/_astro/lg-autoplay.es5.BWPE3dGW.js","/_astro/lg-comment.es5.BbBE0Xe-.js","/_astro/lg-fullscreen.es5.CScdSfR8.js","/_astro/lg-hash.es5.Bsx0nKPu.js","/_astro/lg-medium-zoom.es5.DsWxlQns.js","/_astro/lg-pager.es5.kJL8J-AQ.js","/_astro/lg-relative-caption.es5.F7qjUxcZ.js","/_astro/lg-rotate.es5.BOf0l3Ea.js","/_astro/lg-share.es5.B5i2h5sv.js","/_astro/lg-thumbnail.es5.D0nvMFMI.js","/_astro/lg-video.es5.lZeQlbPr.js","/_astro/lg-vimeo-thumbnail.es5.BWMi6ZGN.js","/_astro/lg-zoom.es5.Bjxs86yy.js","/_astro/LightGallery.astro_astro_type_script_index_0_lang.DEQkJTTN.js","/404.html","/nosotros/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"9GXfSt7Q5kvjpjXgiLYpDh2vvTuMM6Kyk0Rx+L90nQM="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
