/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead } from '../astro_bJqecnWw.mjs';
import 'kleur/colors';
import 'clsx';
import { a as $$BaseLayout } from './404_MUJVpBS9.mjs';
import { $ as $$HorizontalCard } from './__pD-ZgBHb.mjs';

const $$Astro = createAstro("https://astrofy-template.netlify.app");
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Projects", "sideBarActiveItemID": "projects" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div> <div class="text-3xl w-full font-bold mb-5">Coming Soon</div> </div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "Coming Soon", "img": "/post_img.webp", "desc": "Coming Soon", "url": "#", "badge": "NEW" })} <div class="divider my-0"></div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "Coming Soon", "img": "/post_img.webp", "desc": "Coming Soon", "url": "#" })} <div> <div class="text-3xl w-full font-bold mb-5 mt-10">Coming Soon</div> </div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "Coming Soon", "img": "/post_img.webp", "desc": "Coming Soon", "url": "#", "badge": "FOSS" })} <div class="divider my-0"></div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "Coming Soon", "img": "/post_img.webp", "desc": "Coming Soon", "url": "#" })} <div class="divider my-0"></div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "Coming Soon", "img": "/post_img.webp", "desc": "Coming Soon", "url": "#" })} ` })}`;
}, "F:/Documents/GitHub/astrofy/src/pages/projects.astro", void 0);
const $$file = "F:/Documents/GitHub/astrofy/src/pages/projects.astro";
const $$url = "/projects";

export { $$Projects as default, $$file as file, $$url as url };
