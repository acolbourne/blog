import type { NextConfig } from 'next';

async function getNextConfig() {
  const { default: createNextIntlPlugin } = await import('next-intl/plugin');
  const withNextIntl = createNextIntlPlugin();

  /** @type {import('next').NextConfig} */
  const nextConfig: NextConfig = {};

  return withNextIntl(nextConfig);
}

export default getNextConfig();
