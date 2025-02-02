import '@astrojs/internal-helpers/path';
/* empty css                           */
import { e as createAstro, f as createComponent, A as AstroError, g as ImageMissingAlt, r as renderTemplate, m as maybeRenderHead, h as addAttribute, s as spreadAttributes, i as defineScriptVars, j as renderComponent, k as renderHead, l as renderSlot } from '../astro_bJqecnWw.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                           */
import { i as isESMImportedImage, g as getImage$1 } from '../astro/assets-service__hZXrFCB.mjs';

const $$Astro$a = createAstro("https://astrofy-template.netlify.app");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "F:/Documents/GitHub/astrofy/node_modules/.pnpm/astro@4.0.2/node_modules/astro/components/Image.astro", void 0);

const $$Astro$9 = createAstro("https://astrofy-template.netlify.app");
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({ ...props, format, widths: props.widths, densities: props.densities })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(props.src) && specialFormatsFallback.includes(props.src.format)) {
    resultFallbackFormat = props.src.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionaAttributes = {};
  if (props.sizes) {
    sourceAdditionaAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute("image/" + image.options.format, "type")}${spreadAttributes(sourceAdditionaAttributes)}>`;
  })} <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(imgAdditionalAttributes)}${spreadAttributes(fallbackImage.attributes)}> </picture>`;
}, "F:/Documents/GitHub/astrofy/node_modules/.pnpm/astro@4.0.2/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[]};
					new URL("file:///F:/Documents/GitHub/astrofy/dist/");
					const getImage = async (options) => await getImage$1(options, imageConfig);

const $$Astro$8 = createAstro("https://astrofy-template.netlify.app");
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const { title, description, image = "/social_img.webp", ogType = "website" } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type"${addAttribute(ogType, "content")}><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}>`;
}, "F:/Documents/GitHub/astrofy/src/components/BaseHead.astro", void 0);

const $$Astro$7 = createAstro("https://astrofy-template.netlify.app");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<div class="sticky lg:hidden top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100 bg-base-100 text-base-content shadow-sm"> <div class="navbar"> <div class="navbar-start"> <label for="my-drawer" class="btn btn-square btn-ghost"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </label> </div> <div class="navbar-center"> <a class="btn btn-ghost normal-case text-xl" href="/">Paul Sybrandy ⚡️</a> </div> <div class="navbar-end"></div> </div> </div>`;
}, "F:/Documents/GitHub/astrofy/src/components/Header.astro", void 0);

const $$Astro$6 = createAstro("https://astrofy-template.netlify.app");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Footer;
  const today = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead()}<footer class="footer footer-center block mb-5 pt-10"> <div class="pb-2">
&copy; ${today.getFullYear()} Paul Sybrandy
</div> <div class="inline opacity-75">
Developed by <a href="https://paulsybrandy.com" target="_blank" class="font-bold">Paul Sybrandy</a> using
<!-- Thanks for using this template. You can keep this line to support my work :) -->
Astrofy Template ⚡️
</div> </footer> `;
}, "F:/Documents/GitHub/astrofy/src/components/Footer.astro", void 0);

const $$Astro$5 = createAstro("https://astrofy-template.netlify.app");
const $$SideBarFooter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SideBarFooter;
  return renderTemplate`${maybeRenderHead()}<div class="block sticky pointer-events-none bottom-10 bg-base-200 justify-center h-12 [mask-image:linear-gradient(transparent,#000000)]"></div> <div class="social-icons px-4 pb-5 pt-1 flex self-center justify-center sticky bottom-0 bg-base-200"> <a href="https://paulsybrandy.com/" target="_blank" class="mx-3" aria-label="Website" title="Website"> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm88,104a87.61,87.61,0,0,1-3.33,24H174.16a157.44,157.44,0,0,0,0-48h38.51A87.61,87.61,0,0,1,216,128ZM102,168H154a115.11,115.11,0,0,1-26,45A115.27,115.27,0,0,1,102,168Zm-3.9-16a140.84,140.84,0,0,1,0-48h59.88a140.84,140.84,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.84a157.44,157.44,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154,88H102a115.11,115.11,0,0,1,26-45A115.27,115.27,0,0,1,154,88Zm52.33,0H170.71a135.28,135.28,0,0,0-22.3-45.6A88.29,88.29,0,0,1,206.37,88ZM107.59,42.4A135.28,135.28,0,0,0,85.29,88H49.63A88.29,88.29,0,0,1,107.59,42.4ZM49.63,168H85.29a135.28,135.28,0,0,0,22.3,45.6A88.29,88.29,0,0,1,49.63,168Zm98.78,45.6a135.28,135.28,0,0,0,22.3-45.6h35.66A88.29,88.29,0,0,1,148.41,213.6Z"></path></svg> </a> <a href="https://github.com/paulsybrandy" target="_blank" class="mx-3" aria-label="Github" title="Github"> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path></svg> </a> <a href="https://codepen.io/paulsybrandy" target="_blank" class="mx-3" aria-label="Codepen" title="Codepen"> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M235.79,89l-104-56a8,8,0,0,0-7.58,0l-104,56A8,8,0,0,0,16,96v64a8,8,0,0,0,4.21,7.05l104,56a8,8,0,0,0,7.58,0l104-56A8,8,0,0,0,240,160V96A8,8,0,0,0,235.79,89ZM224,146.61,189.45,128,224,109.39Zm-51.43-27.7L136,99.22V53.39L215.13,96Zm-44.57,24L100.3,128,128,113.09,155.7,128Zm-8-89.52V99.22L83.43,118.91,40.87,96Zm-88,56L66.55,128,32,146.61Zm51.43,27.7L120,156.78v45.83L40.87,160ZM136,202.61V156.78l36.57-19.69L215.13,160Z"></path></svg> </a> <a href="https://linkedin.com/in/paulgsybrandy" target="_blank" class="mx-3" aria-label="Linkedin" title="Linkedin"> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path></svg> </a> <a href="https://discord.com/users/1080950833950244936l/" target="_blank" class="mx-3" aria-label="Discord" title="Discord"> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M104,140a12,12,0,1,1-12-12A12,12,0,0,1,104,140Zm60-12a12,12,0,1,0,12,12A12,12,0,0,0,164,128Zm74.45,64.9-67,29.71a16.17,16.17,0,0,1-21.71-9.1l-8.11-22q-6.72.45-13.63.46t-13.63-.46l-8.11,22a16.18,16.18,0,0,1-21.71,9.1l-67-29.71a15.93,15.93,0,0,1-9.06-18.51L38,58A16.07,16.07,0,0,1,51,46.14l36.06-5.93a16.22,16.22,0,0,1,18.26,11.88l3.26,12.84Q118.11,64,128,64t19.4.93l3.26-12.84a16.21,16.21,0,0,1,18.26-11.88L205,46.14A16.07,16.07,0,0,1,218,58l29.53,116.38A15.93,15.93,0,0,1,238.45,192.9ZM232,178.28,202.47,62s0,0-.08,0L166.33,56a.17.17,0,0,0-.17,0l-2.83,11.14c5,.94,10,2.06,14.83,3.42A8,8,0,0,1,176,86.31a8.09,8.09,0,0,1-2.16-.3A172.25,172.25,0,0,0,128,80a172.25,172.25,0,0,0-45.84,6,8,8,0,1,1-4.32-15.4c4.82-1.36,9.78-2.48,14.82-3.42L89.83,56s0,0-.12,0h0L53.61,61.93a.17.17,0,0,0-.09,0L24,178.33,91,208a.23.23,0,0,0,.22,0L98,189.72a173.2,173.2,0,0,1-20.14-4.32A8,8,0,0,1,82.16,170,171.85,171.85,0,0,0,128,176a171.85,171.85,0,0,0,45.84-6,8,8,0,0,1,4.32,15.41A173.2,173.2,0,0,1,158,189.72L164.75,208a.22.22,0,0,0,.21,0Z"></path></svg> </a> </div>`;
}, "F:/Documents/GitHub/astrofy/src/components/SideBarFooter.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$4 = createAstro("https://astrofy-template.netlify.app");
const $$SideBarMenu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SideBarMenu;
  const { sideBarActiveItemID } = Astro2.props;
  const activeClass = "bg-base-300";
  return renderTemplate(_a || (_a = __template(["", '<ul class="menu grow shrink menu-md overflow-y-auto"> <li><a class="py-3 text-base" id="home" href="/">Home</a></li> <li><a class="py-3 text-base" id="projects" href="/projects">Projects</a></li> <li><a class="py-3 text-base" ids="[REMOVED]" href="#">[REMOVED]</a></li> <li><a class="py-3 text-base" id="blog" href="https://neo-astrofy.netlify.app/blog/" target="_blank">Blog</a></li> <li><a class="py-3 text-base" id="cv" href="/cv">Professional CV</a></li> <li><a class="py-3 text-base" id="link-in-bio" href="https://paulsybrandy..com/linkinbio/">Link-in-Bio</a></li> <li> <a class="py-3 text-base" href="mailto:paulsybrandy@fastmail.com" target="_blank" referrerpolicy="no-referrer-when-downgrade">Contact</a> </li> </ul> <script>(function(){', '\nconst activeItemElem = document.getElementById(sideBarActiveItemID);\nactiveItemElem && activeItemElem.classList.add(activeClass);\n})();</script> <a href="https://discord.com/users/1080950833950244936"><img src="https://lanyard.cnrad.dev/api/1080950833950244936"></a>'])), maybeRenderHead(), defineScriptVars({ sideBarActiveItemID, activeClass }));
}, "F:/Documents/GitHub/astrofy/src/components/SideBarMenu.astro", void 0);

const $$Astro$3 = createAstro("https://astrofy-template.netlify.app");
const $$SideBar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SideBar;
  const { sideBarActiveItemID } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="drawer-side z-40"> <label for="my-drawer" class="drawer-overlay"></label> <aside class="px-2 pt-2 h-auto min-h-full w-[19rem] bg-base-200 text-base-content flex flex-col"> <div class="w-fit mx-auto mt-5 mb-6"> <a href="/"> <div class="avatar transition ease-in-out hover:scale-[102%] block m-auto"> <div class="w-[8.5rem]"> ${renderComponent($$result, "Image", $$Image, { "class": "mask mask-circle", "format": "webp", "width": 300, "height": 300, "src": "/profile.webp", "alt": "Profile image" })} </div> </div> </a> </div> ${renderComponent($$result, "SideBarMenu", $$SideBarMenu, { "sideBarActiveItemID": sideBarActiveItemID })} ${renderComponent($$result, "SideBarFooter", $$SideBarFooter, {})} </aside> </div>`;
}, "F:/Documents/GitHub/astrofy/src/components/SideBar.astro", void 0);

const $$Astro$2 = createAstro("https://astrofy-template.netlify.app");
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "F:/Documents/GitHub/astrofy/node_modules/.pnpm/astro@4.0.2/node_modules/astro/components/ViewTransitions.astro", void 0);

const SITE_TITLE = "Astrofy | Personal Portfolio Website Template";
const SITE_DESCRIPTION = "Astrofy is a free and open-source template for your Personal Portfolio Website built with Astro and TailwindCSS. Create in minutes a website with Blog, CV, Project Section, Store and RSS Feed.";

const $$Astro$1 = createAstro("https://astrofy-template.netlify.app");
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    image,
    title = SITE_TITLE,
    description = SITE_DESCRIPTION,
    includeSidebar = true,
    sideBarActiveItemID,
    ogType
  } = Astro2.props;
  return renderTemplate`<html lang="en" data-theme="black"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "image": image, ",": true, "ogType": ogType })}${renderTemplate`${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}`}${renderHead()}</head> <body> <div class="bg-base-100 drawer lg:drawer-open"> <input id="my-drawer" type="checkbox" class="drawer-toggle"> <div class="drawer-content bg-base-100"> ${renderComponent($$result, "Header", $$Header, { "title": SITE_TITLE })} <div class="md:flex md:justify-center"> <main class="p-6 pt-10 lg:max-w-[900px] max-w-[100vw]"> ${renderSlot($$result, $$slots["default"])} </main> </div> ${renderComponent($$result, "Footer", $$Footer, {})} </div> ${includeSidebar && renderTemplate`${renderComponent($$result, "SideBar", $$SideBar, { "sideBarActiveItemID": sideBarActiveItemID })}`} </div> </body> </html>`;
}, "F:/Documents/GitHub/astrofy/src/layouts/BaseLayout.astro", void 0);

const $$Astro = createAstro("https://astrofy-template.netlify.app");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "404: Not Found", "includeSidebar": false }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="text-center"> <h1 class="text-9xl font-bold mb-4">🏝</h1> <h1 class="text-9xl font-bold mb-2">404</h1> <h3 class="text-2xl">The page you're looking for couldn't be found.</h3> <a class="btn btn-accent mt-9" href="/">Home</a> </div> ` })}`;
}, "F:/Documents/GitHub/astrofy/src/pages/404.astro", void 0);
const $$file = "F:/Documents/GitHub/astrofy/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Image as $, SITE_TITLE as S, _404 as _, $$BaseLayout as a, SITE_DESCRIPTION as b, imageConfig as i };
