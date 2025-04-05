// -> Imports -> Libraries
import { useTranslations } from 'next-intl';

// -> Imports -> Components
import Link from 'next/link';

// -> Imports -> Utils
import { getAllCategories } from '@/utils/blog';

export const CategoriesList: React.FC = () => {
  const t = useTranslations('Navigation.Categories');
  const categories = getAllCategories();
  return (
    <div id="CategoriesList">
      <h2 className="navigation-bar-heading">{t('title')}</h2>
      <div className="navigation-bar-categories-container">
        <ul className="p-2 list-inside list-disc text-sm">
          {categories.map((category) => (
            <li key={category}>
              <Link href={`/categories/${category}`} className="navigation-bar-category">
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
