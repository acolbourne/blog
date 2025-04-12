// -> Imports -> Constants
import { websiteSettings } from '@/constants';

// -> Imports -> Components
import Image from 'next/image';
import Link from 'next/link';
import {
  FaGithub as GitHub,
  FaLinkedin as LinkedIn,
  FaReddit as Reddit,
  FaXTwitter as Twitter,
} from 'react-icons/fa6';

export const Profile: React.FC = () => {
  return (
    <div id="Profile">
      <div className="group relative mx-auto-max-w-[100px]">
        <div className="absolute inset-0 rounded-sm bg-gradient-to-r from-purple-500 to-pink-500 dark:from-cyan-400 dark:to-blue-400 blur-[2px] group-hover:blur-[4px] transition-all duration-300 ease-in-out" />
        <Image
          priority
          className="relative z-10 h-18 w-18 rounded-sm"
          width={72}
          height={72}
          quality={100}
          placeholder="blur"
          blurDataURL={websiteSettings.profileImage}
          src={websiteSettings.profileImage}
          alt={websiteSettings.fullName}
        />
      </div>
      <div className="text-center space-y-2">
        <p className="text-lg font-medium leading-none">{websiteSettings.fullName}</p>
        <p className="text-xs leading-none text-muted-foreground">
          {websiteSettings.profileDescription}
        </p>
      </div>
      <div className="flex items-center justify-center space-x-2 text-2xl">
        {websiteSettings.twitter != '' && (
          <Link href={websiteSettings.twitter} target="_blank">
            <Twitter className="text-[#0f1419] dark:text-white" />
          </Link>
        )}
        {websiteSettings.linkedin != '' && (
          <Link href={websiteSettings.linkedin} target="_blank">
            <LinkedIn className="text-[#0077b5] dark:text-white" />
          </Link>
        )}
        {websiteSettings.reddit != '' && (
          <Link href={websiteSettings.reddit} target="_blank">
            <Reddit className="text-[#ff4500] dark:text-white" />
          </Link>
        )}
        {websiteSettings.github != '' && (
          <Link href={websiteSettings.github} target="_blank">
            <GitHub className="text-[#1f2328] dark:text-white" />
          </Link>
        )}
      </div>
    </div>
  );
};
