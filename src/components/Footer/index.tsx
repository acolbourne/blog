// -> Imports -> Libraries
import { useTranslations } from 'next-intl';

// -> Imports -> Components
import Link from 'next/link';

// -> Imports -> Constants
import { footerUrls, websiteSettings } from '@/constants';

const Footer: React.FC = () => {
  const t = useTranslations('Footer');
  return (
    <footer className="flex flex-col space-y-2">
      <p className="text-sm font-semibold tracking-wide">
        {t('copyright', { year: new Date().getFullYear(), fullName: websiteSettings.fullName })}
      </p>
      <p className="text-sm tracking-wide">{t('builtWith')}</p>
      <ul className="flex flex-row space-x-2 text-xs">
        <li>
          <Link href={footerUrls.sourceCode} className="footer-link" target="_blank">
            {t('Links.sourceCode')}
          </Link>
        </li>
        <li>&bull;</li>
        <li>
          <Link href={footerUrls.privacy} className="footer-link">
            {t('Links.privacy')}
          </Link>
        </li>
        <li>&bull;</li>
        <li>
          <Link href={footerUrls.terms} className="footer-link">
            {t('Links.terms')}
          </Link>
        </li>
        <li>&bull;</li>
        <li>
          <Link href={footerUrls.financialDisclaimer} className="footer-link">
            {t('Links.financialDisclaimer')}
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
