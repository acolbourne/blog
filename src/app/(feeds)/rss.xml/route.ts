// -> Imports -> Libraries
import { getTranslations } from 'next-intl/server';
import RSS from 'rss';

// -> Imports -> Constants
import { currentDomain, websiteSettings } from '@/constants';

// -> Imports -> Utils
import { getAllPosts } from '@/utils/blog';

export async function GET(req: Request) {
  const t = await getTranslations('RSSFeed');
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

  const htmlOutputForBrowsers = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <title>${t('title', { siteName: websiteSettings.name })}</title>
          <link rel="stylesheet" href="${currentDomain}/styles/rss.css" />
        </head>
        <body>
          <div class="item">
						<h1>${t('description', { siteName: websiteSettings.name })}</h1>
						<p>${t('subheading')}</p>
						<a href="${currentDomain}" class="small">&laquo; ${t('homeLink')}</a>
          </div>
					${posts
            .map(
              (post) => `
              <div class="item">
                <a href="${currentDomain}/posts/${post.slug}">${post.title}</a>
                <div class="date">${new Date(post.date).toDateString()}</div>
                <p>${post.excerpt}</p>
              </div>
            `,
            )
            .join('')}
        </body>
      </html>
    `;

  return new Response(isWebBrowser ? htmlOutputForBrowsers : xmlContent, {
    headers: {
      'Content-Type': isWebBrowser
        ? 'text/html; charset=utf-8'
        : 'application/rss+xml; charset=utf-8',
    },
  });
}
