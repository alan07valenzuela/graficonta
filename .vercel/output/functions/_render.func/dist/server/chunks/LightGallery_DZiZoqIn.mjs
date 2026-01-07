import { c as createComponent, b as createAstro, f as renderScript, r as renderComponent, a as renderTemplate, e as renderSlot, m as maybeRenderHead, d as addAttribute } from './astro/server_BRvebGR_.mjs';
/* empty css                         */

const $$Astro = createAstro();
const $$LightGallery = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LightGallery;
  const {
    options = {},
    // https://www.lightgalleryjs.com/docs/settings/
    addPlugins = [],
    id = "astro-lightgallery-" + Math.random().toString(36).slice(2, 11),
    class: className = "",
    layout,
    ...props
  } = Astro2.props;
  const paramLayout = layout ? (({ imgs, ...o }) => o)(layout) : {};
  const classContainer = layout && layout.classContainer ? layout.classContainer : "";
  const classItem = layout && layout.classItem ? layout.classItem : "";
  if (layout) {
    layout.imgs.forEach((img) => {
      if (!img.srcThumb) {
        img.srcThumb = img.src;
      }
      if (!img.alt) {
        img.alt = "";
      }
    });
  }
  return renderTemplate`<!-- slot is provided, that means that the user is using his gallery layout
     only provide lightgallery setup
  -->${Astro2.slots.has("default") && renderTemplate`${renderComponent($$result, "astro-lightgallery", "astro-lightgallery", { "id": id, "class": className, ...props, "data-options": JSON.stringify(options), "data-id": id, "data-addplugins": JSON.stringify(addPlugins), "data-param-layout": JSON.stringify(paramLayout) }, { "default": () => renderTemplate`${renderSlot($$result, $$slots["default"])}` })}`}<!-- slot is not provided, that means that the user is using the gallery layout of astro-gallery
     the description of this layout is provided in layout, including the images
  -->${!Astro2.slots.has("default") && layout !== void 0 && renderTemplate`${renderComponent($$result, "astro-lightgallery", "astro-lightgallery", { "id": id, "class": `astro-lightgallery-adaptive-container ${className} ${classContainer}`, ...props, "data-options": JSON.stringify(options), "data-id": id, "data-addplugins": JSON.stringify(addPlugins), "data-param-layout": JSON.stringify(paramLayout) }, { "default": () => renderTemplate`${// TODO: also use Image from astro if this is possible
  layout.imgs.map((img) => renderTemplate`${maybeRenderHead()}<a${addAttribute(`astro-lightgallery-adaptive-item ${classItem}`, "class")}${addAttribute(img.src, "href")}${addAttribute(img.subHtml ? img.subHtml : "", "data-sub-html")}><img${addAttribute(img.srcThumb, "src")}${addAttribute(img.alt, "alt")}></a>`)}` })}`}${renderScript($$result, "C:/Users/Alan/Documents/Programacion/Proyectos/Graficonta Web/node_modules/.pnpm/astro-lightgallery@2.0.1/node_modules/astro-lightgallery/src/components/LightGallery.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Alan/Documents/Programacion/Proyectos/Graficonta Web/node_modules/.pnpm/astro-lightgallery@2.0.1/node_modules/astro-lightgallery/src/components/LightGallery.astro", void 0);

export { $$LightGallery as $ };
