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
        <div className={`${menuIsOpen ? 'block' : 'hidden'} pt-4 space-y-2 px-4`}>
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
          <Separator className="mb-5" />
          <DarkLightToggle />
        </div>
      </nav>
    </div>
  );
};
