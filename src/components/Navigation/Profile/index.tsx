// -> Imports -> Constants
import { websiteSettings } from '@/constants';

// -> Imports -> Components
import Image from 'next/image';

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
    </div>
  );
};
