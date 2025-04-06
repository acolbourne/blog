import type { NextConfig } from 'next';

async function getNextConfig() {
  const { default: createNextIntlPlugin } = await import('next-intl/plugin');
  const withNextIntl = createNextIntlPlugin();

  /** @type {import('next').NextConfig} */
  const nextConfig: NextConfig = {
    images: {
      domains: ['0e803d8nw1.ufs.sh'],
    },
  };

  return withNextIntl(nextConfig);
}

export default getNextConfig();
