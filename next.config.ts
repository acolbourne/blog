import type { NextConfig } from 'next';

async function getNextConfig() {
  const { default: createNextIntlPlugin } = await import('next-intl/plugin');
  const withNextIntl = createNextIntlPlugin();

  /** @type {import('next').NextConfig} */
  const nextConfig: NextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '0e803d8nw1.ufs.sh',
          port: '',
          pathname: '/**',
        },
      ],
    },
  };

  return withNextIntl(nextConfig);
}

export default getNextConfig();
