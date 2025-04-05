// -> Imports -> Libraries
import { useTranslations } from 'next-intl';

// -> Imports -> Components
import Link from 'next/link';

// -> Imports -> Utils
import { getAllTags } from '@/utils/blog';

export const TagCloud: React.FC = () => {
  const t = useTranslations('Navigation.Tags');
  const tags = getAllTags();
  return (
    <div id="TagCloud">
      <h2 className="navigation-bar-heading">{t('title')}</h2>
      <div className="navigation-bar-tags-container">
        {tags.map((tag) => (
          <Link key={tag} href={`/tags/${tag}`} className="navigation-bar-tag">
            #{tag}
          </Link>
        ))}
      </div>
    </div>
  );
};
