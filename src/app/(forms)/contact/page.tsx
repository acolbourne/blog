// -> Imports -> Libraries
import { getTranslations } from 'next-intl/server';

// -> Imports -> Components
import { ContactForm } from '@/components/ContactForm';

// -> Imports -> Types
import type { NextPage } from 'next';

// -> Imports -> Utils
import { seoMetadata } from '@/utils/seoMetadata';

export async function generateMetadata() {
  const t = await getTranslations('Forms.Contact');

  return seoMetadata({ title: t('title'), description: t('description') });
}

const ContactPage: NextPage = () => {
  return <ContactForm />;
};

export default ContactPage;
