/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead } from '../astro_bJqecnWw.mjs';
import 'kleur/colors';
import 'clsx';
import { a as $$BaseLayout } from './404_MUJVpBS9.mjs';
import { $ as $$HorizontalCard } from './__pD-ZgBHb.mjs';

const $$Astro = createAstro("https://astrofy-template.netlify.app");
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Services;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Projects", "sideBarActiveItemID": "services" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div> <div class="text-3xl w-full font-bold mb-5">Services Header</div> </div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "Service 1", "img": "/post_img.webp", "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "badge": "NEW", "url": "#" })} <div class="divider my-0"></div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "Service 2", "img": "/post_img.webp", "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "url": "#" })} <div class="divider my-0"></div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "Service 3", "img": "/post_img.webp", "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "url": "#", "badge": "NEW" })} <div class="divider my-0"></div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "Service 4", "img": "/post_img.webp", "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "url": "#" })} ` })}`;
}, "F:/Documents/GitHub/astrofy/src/pages/services.astro", void 0);
const $$file = "F:/Documents/GitHub/astrofy/src/pages/services.astro";
const $$url = "/services";

export { $$Services as default, $$file as file, $$url as url };
