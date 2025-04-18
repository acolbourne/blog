'use client';

// -> Imports -> Libraries
import { useTranslations } from 'next-intl';
import { useState } from 'react';

// -> Imports -> Components
import { HamburgerMenu } from '@/components/MobileNavigation/HamburgerMenu';
import { MobileProfile } from '@/components/MobileNavigation/MobileProfile';
import { DarkLightToggle } from '@/components/Navigation/DarkLightToggle';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import {
  FaGithub as GitHub,
  FaLinkedin as LinkedIn,
  FaReddit as Reddit,
  FaXTwitter as Twitter,
} from 'react-icons/fa6';

interface MobileNavigationProps {
  settings: Record<string, string>;
  domain: string;
  navigationLinks: ReadonlyArray<{ id: number; title: string; url: string }>;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  settings,
  domain,
  navigationLinks,
}) => {
  const t = useTranslations('Navigation');
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  return (
    <div id="Mobile-Navigation">
      <nav>
        <div className="flex justify-between items-center">
          <MobileProfile settings={settings} domain={domain} />
          <HamburgerMenu menuIsOpen={menuIsOpen} onClick={() => setMenuIsOpen(!menuIsOpen)} />
        </div>
        <div className={`${menuIsOpen ? 'block' : 'hidden'} pt-4 space-y-4 px-4`}>
          <h2 className="navigation-bar-heading">{t('Main.title')}</h2>
          {navigationLinks && (
            <ul className="space-y-1">
              {navigationLinks.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.url}
                    className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <div className="flex items-center justify-center space-x-2 text-2xl py-2">
            {settings.twitter != '' && (
              <Link href={settings.twitter} target="_blank">
                <Twitter className="text-[#0f1419] dark:text-white" />
              </Link>
            )}
            {settings.linkedin != '' && (
              <Link href={settings.linkedin} target="_blank">
                <LinkedIn className="text-[#0077b5] dark:text-white" />
              </Link>
            )}
            {settings.reddit != '' && (
              <Link href={settings.reddit} target="_blank">
                <Reddit className="text-[#ff4500] dark:text-white" />
              </Link>
            )}
            {settings.github != '' && (
              <Link href={settings.github} target="_blank">
                <GitHub className="text-[#1f2328] dark:text-white" />
              </Link>
            )}
          </div>
          <Separator className="mb-5" />
          <DarkLightToggle />
        </div>
      </nav>
    </div>
  );
};
