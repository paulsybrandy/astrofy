import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_bJqecnWw.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>So, hello, and welcome (again) to the new location of my blog. I know that there is a little doubt there as this has happened a couple times now but I promise you, this is the last time a location change will happen.</p>\n<p>There has been quite a bit of changes going on as far as my new site which I wanted to design using Astro. However, I then started thinking about my portfolio and other related sites and how much more uniform everything would be if I redesigned them as well to match. In the end, I decided to redesign all other pages as well. It’ll look so much better, I figured.</p>\n<p>So… yeah… welcome to the new (and permanent) location of my blog. I will be porting over the last few blog posts here as well. They will arrive soon. Thanks for your patience!</p>";

				const frontmatter = {"title":"Welcome to my Blog (again)","description":"A welcome post to my blog.","pubDate":"Jan 29 2025","heroImage":"/welcome.png","tags":["general"]};
				const file = "F:/Documents/GitHub/astrofy/src/content/blog/welcome.md";
				const url = undefined;
				function rawContent() {
					return "\r\nSo, hello, and welcome (again) to the new location of my blog. I know that there is a little doubt there as this has happened a couple times now but I promise you, this is the last time a location change will happen. \r\n\r\nThere has been quite a bit of changes going on as far as my new site which I wanted to design using Astro. However, I then started thinking about my portfolio and other related sites and how much more uniform everything would be if I redesigned them as well to match. In the end, I decided to redesign all other pages as well. It'll look so much better, I figured.\r\n\r\nSo... yeah... welcome to the new (and permanent) location of my blog. I will be porting over the last few blog posts here as well. They will arrive soon. Thanks for your patience!\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
