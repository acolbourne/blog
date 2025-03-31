// -> Imports -> Libraries
import RSS from 'rss';

// -> Imports -> Constants
import { currentDomain, websiteSettings } from '@/constants';

// -> Imports -> Utils
import { getAllPosts } from '@/utils/blog';

export async function GET() {
  const posts = getAllPosts();

  const feed = new RSS({
    title: websiteSettings.title,
    description: websiteSettings.description,
    generator: websiteSettings.title,
    site_url: currentDomain,
    feed_url: `${currentDomain}/feed.xml`,
    copyright: `${new Date().getFullYear()} ${websiteSettings.title}`,
    language: websiteSettings.defaultLocale,
    pubDate: new Date(),
  });

  posts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.excerpt,
      guid: `${currentDomain}/posts/${post.slug}`,
      url: `${currentDomain}/posts/${post.slug}`,
      date: new Date(post.date),
      categories: post.categories || [],
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
}
