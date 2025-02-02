import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_jWkdf65b.mjs';

const _page0  = () => import('./chunks/generic_etc8Dah6.mjs');
const _page1  = () => import('./chunks/index_R2ahmmv3.mjs');
const _page2  = () => import('./chunks/projects_6Uk1gR0b.mjs');
const _page3  = () => import('./chunks/services___TyXR8l.mjs');
const _page4  = () => import('./chunks/rss_A2G0p2mY.mjs');
const _page5  = () => import('./chunks/_slug__LdIYf542.mjs');
const _page6  = () => import('./chunks/_.._aYk_Zswl.mjs');
const _page7  = () => import('./chunks/_.._j2D2H5fy.mjs');
const _page8  = () => import('./chunks/_slug__mYxxMA-c.mjs');
const _page9  = () => import('./chunks/_.._GAH35bNU.mjs');
const _page10  = () => import('./chunks/404_-3YQYLZX.mjs');
const _page11  = () => import('./chunks/cv_RJ8mXucy.mjs');const pageMap = new Map([["node_modules/.pnpm/astro@4.0.2/node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/projects.astro", _page2],["src/pages/services.astro", _page3],["src/pages/rss.xml.js", _page4],["src/pages/store/[slug].astro", _page5],["src/pages/store/[...page].astro", _page6],["src/pages/blog/tag/[tag]/[...page].astro", _page7],["src/pages/blog/[slug].astro", _page8],["src/pages/blog/[...page].astro", _page9],["src/pages/404.astro", _page10],["src/pages/cv.astro", _page11]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {"middlewareSecret":"024e6075-ee21-4fba-94e9-454ed22e0b23"};

const _exports = adapter.createExports(_manifest, _args);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap };
