// -> Imports -> Libraries
import { websiteSettings } from '@/constants';
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
  const locale = websiteSettings.defaultLocale;

  return {
    locale,
    messages: (await import(`../language/${locale}.json`)).default,
  };
});
