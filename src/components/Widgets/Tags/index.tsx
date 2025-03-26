// -> Imports -> Components
import { useTranslations } from 'next-intl';
import Link from 'next/link';

// -> Imports -> Utils
import { getAllTags } from '@/utils/blog';

export const TagsWidget: React.FC = () => {
  const t = useTranslations('Sidebar.Widgets.Tags');
  const tags = getAllTags();

  return (
    <div className="media notification">
      <article className="media-content">
        <h2 className="title is-size-5">{t('title')}</h2>
        {tags.length > 0 && (
          <div className="tags">
            {tags.map((tag) => (
              <div key={tag} className="tag is-link">
                <Link href={`/tags/${tag}`}>#{tag}</Link>
              </div>
            ))}
          </div>
        )}
      </article>
    </div>
  );
};
