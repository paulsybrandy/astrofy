/* empty css                           */
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead, F as Fragment } from '../astro_bJqecnWw.mjs';
import 'kleur/colors';
import 'clsx';
import { a as $$BaseLayout } from './404_MUJVpBS9.mjs';
import { g as getCollection, $ as $$HorizontalCard, c as createSlug } from './__pD-ZgBHb.mjs';

const $$Astro = createAstro("https://astrofy-template.netlify.app");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = (await getCollection("blog")).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  const last_posts = posts.slice(0, 3);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "sideBarActiveItemID": "home" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="pb-12 mt-5"> <div class="text-xl py-1">Hey there 👋</div> <div class="text-5xl font-bold">I'm Paul Sybrandy</div> <div class="text-3xl py-3 font-bold">Technophile, Developer & Designer</div> <div class="py-2"> <text class="text-lg">
Welcome to the personal website of <b>Paul Sybrandy</b>. This site is built with Astro and TailwindCSS.
        On this site you will find my blog, my CV (resume), project area, link-in-bio, RSS feed and <b><i>more</i></b> soon. I hope you find
        it useful!
</text> </div> <div class="mt-8"> <a href="https://paulsybrandy.com/linkinbio/" target="_blank" class="btn btn-outline ml-5">
Let's Connect!
</a> </div> </div> <div> <div class="text-3xl w-full font-bold mb-2">My last projects ${"</>"}</div> </div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "Coming Soon", "img": "/post_img.webp", "desc": "Coming Soon", "url": "#", "badge": "NEW" })} <div class="divider my-0"></div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "Coming Soon", "img": "/post_img.webp", "desc": "Coming Soon", "url": "#" })} <div class="divider my-0"></div> ${renderComponent($$result2, "HorizontalCard", $$HorizontalCard, { "title": "Coming Soon", "img": "/post_img.webp", "desc": "Coming Soon", "url": "#", "badge": "FOSS" })} <div> <div class="text-3xl w-full font-bold mb-5 mt-10">Latest from blog</div> </div> ${last_posts.map((post) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "HorizontalCard", $$HorizontalCard, { "title": post.data.title, "img": post.data.heroImage, "desc": post.data.description, "url": "/blog/" + createSlug(post.data.title, post.slug), "target": "_self", "badge": post.data.badge })} <div class="divider my-0"></div> ` })}`)}` })}`;
}, "F:/Documents/GitHub/astrofy/src/pages/index.astro", void 0);
const $$file = "F:/Documents/GitHub/astrofy/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
