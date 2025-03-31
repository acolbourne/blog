// -> Imports -> Constants
import { currentDomain, websiteSettings } from '@/constants';
import { env } from '@/env';

// -> Imports -> Types
import type { Metadata } from 'next';

interface ExtraMetadata extends Metadata {
  tags?: Record<string, string>;
  urlCanonical?: string;
}

export const seoMetadata = ({
  title,
  description,
  keywords,
  tags,
  urlCanonical,
}: ExtraMetadata = {}) => {
  return {
    title: title === undefined ? websiteSettings.name : title + ' | ' + websiteSettings.name,
    description: description || websiteSettings.description,
    keywords: keywords || websiteSettings.keywords,
    icons: {
      icon: websiteSettings.favicon,
      shortcut: websiteSettings.favicon,
      apple: websiteSettings.faviconApple,
      android: websiteSettings.faviconAndroid,
    },
    alternates: {
      types: {
        'application/rss+xml': `${currentDomain}/rss.xml`,
      },
    },
    metadataBase:
      env.NODE_ENV === 'development'
        ? new URL(websiteSettings.testDomain)
        : new URL(websiteSettings.domain),
    ...(urlCanonical && { alternates: { canonical: urlCanonical } }),
    ...tags,
  };
};
