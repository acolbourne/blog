// -> Imports -> Libraries
import { getTranslations } from 'next-intl/server';

// -> Imports -> Components
import { ContactForm } from '@/components/ContactForm';

// -> Imports -> Types
import type { NextPage } from 'next';

export async function generateMetadata() {
  const t = await getTranslations('Contact');
  return { title: t('title') };
}

const ContactPage: NextPage = () => <ContactForm />;

export default ContactPage;
