// -> Imports -> Libraries
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

// -> Imports -> Types
import type { NextPage } from 'next';

export async function generateMetadata() {
  const t = await getTranslations('Homepage');
  return { title: t('title') };
}

const Homepage: NextPage = () => {
  const t = useTranslations();

  return <h1>{t('testKey')}</h1>;
};

export default Homepage;
