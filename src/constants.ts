// -> Imports -> Libraries
import { env } from '@/env';

export const websiteSettings: Record<string, string> = {
  // -> Settings -> General
  name: 'Andrew C.',
  fullName: 'Andrew Colbourne',
  profileImage: 'https://0e803d8nw1.ufs.sh/f/jzSosASW07FkCPSp3oj7sSNqFhwlWTgXMOaedPR06zIUZ3AY',
  profileDescription: "Once wore a friend's hat for a photo.",
  // -> Settings -> SEO
  title: 'Blog',
  description: 'My personal blog',
  domain: 'http://www.andrew-c.me',
  testDomain: 'http://localhost:3000',
  // -> Settings -> i18n
  defaultLocale: 'en-GB',
} as const;

export const navigationItems = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },

  {
    id: 2,
    title: 'Uses',
    url: '/pages/uses',
  },

  {
    id: 3,
    title: 'Contact Me',
    url: '/contact',
  },
] as const;

export const currentDomain =
  env.NODE_ENV === 'development' ? websiteSettings.testDomain : websiteSettings.domain;

export const footerUrls: Record<string, string> = {
  sourceCode: 'https://www.github.com/acolbourne/blog',
  privacy: '/pages/privacy',
  terms: '/pages/terms',
  financialDisclaimer: '/pages/financial-disclaimer',
} as const;
