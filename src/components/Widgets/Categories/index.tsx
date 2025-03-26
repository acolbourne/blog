// -> Imports -> Components
import { useTranslations } from 'next-intl';
import Link from 'next/link';

// -> Imports -> Utils
import { getAllCategories } from '@/utils/blog';

export const CategoriesWidget: React.FC = () => {
  const t = useTranslations('Sidebar.Widgets.Categories');
  const categories = getAllCategories();

  return (
    <div className="media notification">
      <article className="media-content">
        <h2 className="title is-size-4">{t('title')}</h2>
        {categories.length > 0 && (
          <ul>
            {categories.map((category) => (
              <li key={category}>
                <Link href={`/categories/${category}`} className="is-size-6">
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </article>
    </div>
  );
};
