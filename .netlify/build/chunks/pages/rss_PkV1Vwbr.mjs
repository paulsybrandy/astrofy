import rss from '@astrojs/rss';
import { S as SITE_TITLE, b as SITE_DESCRIPTION } from './404_MUJVpBS9.mjs';
import { g as getCollection } from './__pD-ZgBHb.mjs';

async function get(context) {
  const blog = await getCollection("blog");
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: "https://astrofy-template.netlify.app",
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
  });
}

export { get };
