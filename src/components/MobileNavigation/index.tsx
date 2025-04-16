'use client';

// -> Imports -> Libraries
import { useState } from 'react';

// -> Imports -> Components
import { HamburgerMenu } from '@/components/MobileNavigation/HamburgerMenu';
import { MobileProfile } from '@/components/MobileNavigation/MobileProfile';

interface MobileNavigationProps {
  settings: Record<string, string>;
  domain: string;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({ settings, domain }) => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  return (
    <div className="mobile-navigation">
      <nav>
        <div className="flex justify-between items-center">
          <MobileProfile settings={settings} domain={domain} />
          <HamburgerMenu menuIsOpen={menuIsOpen} onClick={() => setMenuIsOpen(!menuIsOpen)} />
        </div>
        <div className={`${menuIsOpen ? 'block' : 'hidden'} pt-4`}>Mobile Menu</div>
      </nav>
    </div>
  );
};
