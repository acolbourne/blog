// -> Imports -> Libraries
import { useTranslations } from 'next-intl';

// -> Imports -> Types
import type { NextPage } from 'next';

const Homepage: NextPage = () => {
	const t = useTranslations();

	return <h1>{t('testKey')}</h1>;
};

export default Homepage;
