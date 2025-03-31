// -> Imports -> Libraries
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

// -> Imports -> Types
import type { NextPage } from 'next';

// -> Imports -> Utils
import { seoMetadata } from '@/utils/seoMetadata';

export async function generateMetadata() {
  const t = await getTranslations('Errors.404');

  return seoMetadata({ title: t('title'), description: t('description') });
}

const NotFoundPage: NextPage = () => {
  const t = useTranslations('Errors.404');

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('content')}</p>
    </div>
  );
};

export default NotFoundPage;
