// -> Imports -> Constants
import { websiteSettings } from '@/constants';

export const Profile: React.FC = () => {
  return (
    <div id="Profile">
      <div className="group relative mx-auto-max-w-[100px]">
        <div className="absolute inset-0 rounded-sm bg-gradient-to-r from-purple-500 to-pink-500 blur-[2px] group-hover:blur-[4px] transition-all duration-300 ease-in-out" />
        <img
          className="relative z-10 h-18 w-18 rounded-sm"
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
