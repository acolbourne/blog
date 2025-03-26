// -> Imports -> Components
import { useTranslations } from 'next-intl';
import Link from 'next/link';

// -> Imports -> Utils
import { getAllCategories } from '@/utils/blog';

export const CategoriesWidget: React.FC = () => {
  const t = useTranslations('Sidebar.Widgets.Categories');
  const categories = getAllCategories();

  return (
    <div>
      {categories.length > 0 && (
        <div>
          <h2>{t('title')}</h2>
          <div>
            {categories.map((category) => (
              <div key={category}>
                <Link href={`/categories/${category}`} className="text-blue-600 hover:underline">
                  {category}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
