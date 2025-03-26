// -> Imports -> Components
import { useTranslations } from 'next-intl';
import Link from 'next/link';

// -> Imports -> Utils
import { getAllTags } from '@/utils/blog';

export const TagsWidget: React.FC = () => {
  const t = useTranslations('Sidebar.Widgets.Tags');
  const tags = getAllTags();

  return (
    <div>
      {tags.length > 0 && (
        <div>
          <h2>{t('title')}</h2>
          <div>
            {tags.map((tag) => (
              <Link key={tag} href={`/tags/${tag}`} className="px-2 py-1">
                #{tag}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
