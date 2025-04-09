// -> Imports -> Libraries
import { useTranslations } from 'next-intl';

// -> Imports -> Constants
import { navigationItems } from '@/constants';

// -> Imports -> Components
import Link from 'next/link';

export const Navigation: React.FC = () => {
  const t = useTranslations('Navigation.Main');
  return (
    <div id="MainNavigation">
      <h2 className="navigation-bar-heading">{t('title')}</h2>
      <ul>
        {navigationItems.map((item) => (
          <li key={item.id}>
            <Link href={item.url} className="navigation-bar-link">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
