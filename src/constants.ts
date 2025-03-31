// -> Imports -> Libraries
import { env } from '@/env';

export const websiteSettings: Record<string, string> = {
  // -> Settings -> General
  name: 'Andrew C.',
  title: 'Blog',
  description: 'My personal blog',
  domain: 'http://www.andrew-c.me',
  testDomain: 'http://localhost:3000',
  // -> Settings -> i18n
  defaultLocale: 'en-GB',
} as const;

export const currentDomain =
  env.NODE_ENV === 'development' ? websiteSettings.testDomain : websiteSettings.domain;
