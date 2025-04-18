// -> Imports -> Libraries
import { getLocale } from 'next-intl/server';

// -> Imports -> Providers
import { NextIntlClientProvider } from 'next-intl';

// -> Imports -> Components
import { NavigationBar } from '@/components/Navigation';
import HolyLoader from 'holy-loader';

// -> Imports -> Constants
import { currentDomain, navigationItems, websiteSettings } from '@/constants';

// -> Imports -> Utils
import { seoMetadata } from '@/utils/seoMetadata';

// -> Imports -> Types
import type { Metadata } from 'next';

// -> Imports -> Stylesheets
import '@/cssfiles/globals.css';

// -> Imports -> Fonts
import Footer from '@/components/Footer';
import { MobileNavigation } from '@/components/MobileNavigation';
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
        <NextIntlClientProvider>
          <div className="flex flex-col md:flex-row">
            <aside>
              <NavigationBar />
              <MobileNavigation
                settings={websiteSettings}
                domain={currentDomain}
                navigationLinks={navigationItems}
              />
            </aside>
            <main id="Main-Content">{children}</main>
            <div className="md:hidden bg-slate-50 dark:bg-slate-900">
              <Footer />
            </div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
