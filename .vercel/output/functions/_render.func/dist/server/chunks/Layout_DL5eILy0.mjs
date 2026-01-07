import { c as createComponent, s as spreadAttributes, u as unescapeHTML, a as renderTemplate, m as maybeRenderHead, r as renderComponent, e as renderSlot, g as renderHead } from './astro/server_BRvebGR_.mjs';
import './index_DKHmmOtR.mjs';
import { $ as $$Image } from './_astro_assets_C-KK7So1.mjs';
/* empty css                           */

function createSvgComponent({ meta, attributes, children }) {
  const Component = createComponent((_, props) => {
    const normalizedProps = normalizeProps(attributes, props);
    return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
  });
  Object.defineProperty(Component, "toJSON", {
    value: () => meta,
    enumerable: false
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const logo = createSvgComponent({"meta":{"src":"/_astro/graficonta_logo_bw.dKnxnvOk.svg","width":1960,"height":505,"format":"svg"},"attributes":{"id":"Layer_2","viewBox":"0 0 1960 504.5"},"children":"<!-- Generator: Adobe Illustrator 29.3.1, SVG Export Plug-In . SVG Version: 2.1.0 Build 151)  -->\n  <defs>\n    <style>\n      .st0 {\n        fill: #fff;\n      }\n    </style>\n  </defs>\n  <g id=\"Layer_1-2\">\n    <g>\n      <path class=\"st0\" d=\"M219.9,223.9v50.9c-33.4-16-77.2-16.1-110.6.3-64.4,31.7-74.4,111.7-14.5,154,34.7,24.5,80.2,26.3,119.3,11.7v-58l-56.6-1.4v-39.3h106.5v126.2c-56.9,38.7-142.6,38-199.8.1-84.7-56.1-86.1-164.5-2.1-222.1,45.4-31.1,105.3-37.3,157.7-22.2h0Z\" />\n      <path class=\"st0\" d=\"M1583.8,155.8c-29.8,37.2-78.6,66-127.9,57.3-34.9-6.1-68.3-54.3-92.4-79.4-30.9-32.1-71.1-71.8-119.9-63.2l-31.3,7.1c16.2-16.4,33.9-31.6,52.3-45.5,30.5-23.1,56.5-32.3,95.7-25.7,24.1,4.1,39.2,17.9,56.4,33.8,30.8,28.4,57.3,61.1,85.9,91.7,9.5,10.2,25.1,29.8,38.8,32.2,15.5,2.7,28-4.1,42.3-8.2h0Z\" />\n      <path class=\"st0\" d=\"M1309.3,152.9c2.3,1.9-26.5,25.4-28.9,27.2-32.4,24.9-79.1,45.1-117.9,21.1-37-22.8-66.1-65-96-95.9-36.7-37.9-57.8-45.8-111.5-34.7-5.3,1.1-10.8,3.6-16.1,3.1,14.9-14.9,30.9-28.8,47.5-41.7,17-13.1,30.5-23.6,52.1-28.5,62.5-14.3,90.9,16.4,129.3,58.2,25,27.2,56,70.4,85.6,91,20,14,34.9,6,56,.2h0Z\" />\n      <path class=\"st0\" d=\"M694,492.6h-58.5c-3.3-8.2-6.4-17.8-10.3-25.6-.4-.9.2-1.6-1.7-1.3-1.7.3-9.6,8.2-12.1,10-56.2,41.1-160.1,23.3-178.2-50.1-27-110.2,148.7-157.9,204.6-63.5l56.2,130.4h0ZM529.7,358.5c-33.6,3.6-57.8,41.5-36.1,71,28.7,39,106,22.1,101.5-29.5-2.8-32-37.1-44.6-65.3-41.6Z\" />\n      <path class=\"st0\" d=\"M1960,491.6h-50.9c-2.9-6.7-5.2-18.3-8.8-24.3-.6-.9-.8-1.9-2.2-1.6-1,.2-12.1,11.6-15,13.8-55.2,41.1-147.8,8.8-154.3-62.4-10.1-110.2,142.3-144.5,185.6-47.3,16.9,37.9,28.3,80,45,118.2l.7,3.7h0ZM1820.6,358.5c-69.4,5.2-50.9,110.7,19.2,91.1,53.1-14.8,40.7-95.6-19.2-91.1h0Z\" />\n      <path class=\"st0\" d=\"M1259.2,312.5c95.4-2.8,138.5,113.7,60.4,167.8-51.4,35.6-131.9,13.5-149.7-48.4-17.6-61.1,27.2-117.6,89.3-119.4h0ZM1259.2,358.5c-64.3,4.9-56.6,97.7,8.3,92.8,62.5-4.8,55.2-97.6-8.3-92.8Z\" />\n      <path class=\"st0\" d=\"M1579.9,491.6h-48v-90.7c0-22.7-26.3-42.2-47.5-42.8-20.4-.5-50.4,17.5-50.4,39.9v93.5h-48v-96.4c0-14.9,11.9-38.3,21.6-49.4,54.7-63,166.8-32.3,172.3,54.2v91.7s0,0,0,0Z\" />\n      <path class=\"st0\" d=\"M833.2,216.2v46c-20,0-43,11-51.3,29.7-.6,1.3-3.4,9.4-3.4,10.1v81.1h54.7v39.3h-54.7v68.6l-1.4,1.4h-53.3v-194.3c0-3.8,3.5-14.9,5-19,15-40.3,62.6-64.9,104.4-63.1h0Z\" />\n      <path class=\"st0\" d=\"M1653.8,218.2v94h48v39.3h-48v54.2c0,1.4,2.4,8.4,3.1,10.3,7.2,18.7,25.4,29.2,44.9,30.5v45.1c-40.2,2-81.4-26.8-92.4-65.5-1.1-3.7-3.6-13.2-3.6-16.6v-191.4h48Z\" />\n      <path class=\"st0\" d=\"M1070.1,312.5c24.2-.7,49.3,6.7,67.3,23.3l-28.2,36.8c-28.3-28.7-82.3-11.2-84,30.2-1.8,44.2,55.6,64.9,85,33.2l30.2,35.1c.3,1.5-9.3,8.5-11.2,9.8-52.2,35.5-131.6,11.6-148.6-50.7-16.5-60.4,28.2-115.8,89.5-117.7h0Z\" />\n      <path class=\"st0\" d=\"M402.3,311.2v46c-13.3,1.2-25.7,3.6-36.4,12.1-7,5.5-18.3,19.5-18.3,28.7v94.5h-54.7v-98.3c0-8,6.6-24.3,10.7-31.5,19.2-33.5,60.8-52.2,98.7-51.5h0Z\" />\n      <rect class=\"st0\" x=\"885\" y=\"313.1\" width=\"58.5\" height=\"181.3\" />\n      <path class=\"st0\" d=\"M935,128.9c1.6-.3.9,1.3,1,2.4.8,12.9,1.6,26.6,7.9,38.2,3.1,5.7,8.2,10.6,11.5,16.3,11.5,19.9,13.2,51.7-2.5,69.7-18.4,21-60.6,21.6-71.3-7.4-15.2-41.6,41-83.2,53.5-119.2h0ZM935.9,183.6c-2.5-.3-1.5,0-1.9,1.4-3.7,12.7-12.5,32.8-11.4,45,2.4,25.1,34.2,27.6,32.5,1.1-1.2-19.6-18-28.3-19.2-47.5Z\" />\n    </g>\n  </g>\n"});

const $$LandingHeader = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-qccbmzfi> <nav class="fixed start-0 top-0 z-20 w-full" data-astro-cid-qccbmzfi> <div id="graficonta-header-bg" class="bg-gradient-to-b from-blue-800 via-blue-800 to-blue-800/0" data-astro-cid-qccbmzfi> <div class="mx-auto flex max-w-screen-xl items-center justify-around gap-y-4 px-3 py-4 sm:justify-between sm:px-6" data-astro-cid-qccbmzfi> <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse" data-astro-cid-qccbmzfi> ${renderComponent($$result, "Image", $$Image, { "src": logo, "alt": "Logo de Graficonta", "height": "36", "data-astro-cid-qccbmzfi": true })} </a> <div class="inline-flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse" data-astro-cid-qccbmzfi> <button type="button" class="mx-4 box-border rounded-base border border-transparent bg-white px-3 py-2 text-sm leading-5 font-semibold shadow-xs hover:bg-gray-400 focus:ring-4 focus:ring-gray-400 focus:outline-none" data-astro-cid-qccbmzfi>
Contáctanos
</button> <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex h-9 w-9 items-center justify-center rounded-base p-2 text-sm text-white hover:bg-white hover:text-gray-400 focus:ring-2 focus:ring-neutral-tertiary focus:outline-none md:hidden" aria-controls="navbar-cta" aria-expanded="false" data-astro-cid-qccbmzfi> <span class="sr-only" data-astro-cid-qccbmzfi>Abrir menú</span> <svg class="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" data-astro-cid-qccbmzfi> <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14" data-astro-cid-qccbmzfi></path> </svg> </button> </div> <div class="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto" id="navbar-cta" data-astro-cid-qccbmzfi> <ul class="mt-4 flex flex-col p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse" data-astro-cid-qccbmzfi> <li data-astro-cid-qccbmzfi> <a href="/" class="block rounded px-3 py-2 text-white md:bg-transparent md:p-0" aria-current="page" data-astro-cid-qccbmzfi>
Inicio
</a> </li> <li data-astro-cid-qccbmzfi> <a href="/nosotros" class="hover:bg-neutral-tertiar block rounded px-3 py-2 text-white md:border-0 md:p-0 md:hover:bg-transparent" data-astro-cid-qccbmzfi>
Nosotros
</a> </li> <li data-astro-cid-qccbmzfi> <a href="/servicios" class="hover:bg-neutral-tertiar block rounded px-3 py-2 text-white md:border-0 md:p-0 md:hover:bg-transparent" data-astro-cid-qccbmzfi>
Servicios
</a> </li> <li data-astro-cid-qccbmzfi> <a href="/galeria" class="hover:bg-neutral-tertiar block rounded px-3 py-2 text-white md:border-0 md:p-0 md:hover:bg-transparent" data-astro-cid-qccbmzfi>
Galeria
</a> </li> </ul> </div> </div> </div> </nav> </header> `;
}, "C:/Users/Alan/Documents/Programacion/Proyectos/Graficonta Web/src/components/LandingHeader.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<html lang="es" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>Graficonta | Carteler\xEDa y Contabilidad</title>', '</head> <body class="bg-white text-gray-900" data-astro-cid-sckkx6r4> ', ' <script src="https://cdn.jsdelivr.net/npm/flowbite@4.0.1/dist/flowbite.min.js"><\/script> </body> </html> '])), renderHead(), renderSlot($$result, $$slots["default"]));
}, "C:/Users/Alan/Documents/Programacion/Proyectos/Graficonta Web/src/layouts/Layout.astro", void 0);

export { $$Layout as $, $$LandingHeader as a, logo as l };
