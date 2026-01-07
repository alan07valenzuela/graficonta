import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BRvebGR_.mjs';
import { $ as $$Layout, a as $$LandingHeader } from '../chunks/Layout_DL5eILy0.mjs';
import { createClient } from '@supabase/supabase-js';
import { $ as $$LightGallery } from '../chunks/LightGallery_DZiZoqIn.mjs';
export { renderers } from '../renderers.mjs';

const supabaseUrl = "https://pzogasdobdwjhvphbevu.supabase.co";
const supabaseKey = "sb_publishable_zWONzZxIltdC9A8vKP5qMg_qkhqi2nx";
const supabase = createClient(supabaseUrl, supabaseKey);

const $$Astro = createAstro();
const prerender = false;
const $$Galeria = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Galeria;
  const BUCKET_NAME = "galeria";
  const imagesUrl = [];
  const { data: dbImages, error } = await supabase.storage.from(BUCKET_NAME).list();
  if (dbImages) {
    for (const dbImage of dbImages) {
      const { data } = supabase.storage.from(BUCKET_NAME).getPublicUrl(dbImage.name);
      imagesUrl.push({ src: data.publicUrl });
    }
  }
  console.log(error);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "LandingHeader", $$LandingHeader, {})} ${maybeRenderHead()}<main> <div class="mt-24 flex max-w-2xl xl:max-w-5xl"> ${renderComponent($$result2, "LightGallery", $$LightGallery, { "layout": { imgs: imagesUrl, adaptive: { zoom: 130 } }, "options": { thumbnail: true } })} </div> </main> ` })}`;
}, "C:/Users/Alan/Documents/Programacion/Proyectos/Graficonta Web/src/pages/galeria.astro", void 0);

const $$file = "C:/Users/Alan/Documents/Programacion/Proyectos/Graficonta Web/src/pages/galeria.astro";
const $$url = "/galeria";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Galeria,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
