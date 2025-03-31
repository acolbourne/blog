// -> Imports -> Libraries
import { getLocale } from 'next-intl/server';

// -> Imports -> Providers
import { NextIntlClientProvider } from 'next-intl';

// -> Imports -> Components
import HolyLoader from 'holy-loader';

// -> Imports -> Constants
import { websiteSettings } from '@/constants';

// -> Imports -> Utils
import { seoMetadata } from '@/utils/seoMetadata';

// -> Imports -> Types
import type { Metadata } from 'next';

// -> Imports -> Stylesheets
import '@/cssfiles/globals.css';

// -> Imports -> Fonts
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = seoMetadata({
  title: websiteSettings.title,
  description: websiteSettings.description,
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <HolyLoader
          color="linear-gradient(to right, #7928ca, #ff0080)"
          height="2px"
          easing="linear"
          showSpinner={false}
        />
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
