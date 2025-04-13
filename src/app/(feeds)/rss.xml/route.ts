// -> Imports -> Libraries
import RSS from 'rss';

// -> Imports -> Constants
import { currentDomain, websiteSettings } from '@/constants';

// -> Imports -> Utils
import { getAllPosts } from '@/utils/blog';

export async function GET(req: Request) {
  const posts = getAllPosts();

  const feed = new RSS({
    title: websiteSettings.title,
    description: websiteSettings.description,
    generator: websiteSettings.title,
    site_url: currentDomain,
    feed_url: `${currentDomain}/rss.xml`,
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

  const xmlContent = feed.xml({ indent: true });

  const acceptHeader = req.headers.get('accept') || '';
  const isWebBrowser = acceptHeader.includes('text/html');

  return new Response(isWebBrowser ? 'RETURN HTML OUTPUT HERE' : xmlContent, {
    headers: {
      'Content-Type': isWebBrowser
        ? 'text/html; charset=utf-8'
        : 'application/rss+xml; charset=utf-8',
    },
  });
}
