// -> Imports -> Components
import Image from 'next/image';
import Link from 'next/link';

interface MobileProfileProps {
  settings: Record<string, string>;
  domain: string;
}

export const MobileProfile: React.FC<MobileProfileProps> = ({ settings, domain }) => {
  return (
    <div id="Profile">
      <div className="group relative mx-auto-max-w-[100px]">
        <div className="absolute inset-0 rounded-sm bg-gradient-to-r from-purple-500 to-pink-500 dark:from-cyan-400 dark:to-blue-400 blur-[2px] group-hover:blur-[4px] transition-all duration-300 ease-in-out" />
        <Link href={domain}>
          <Image
            priority
            className="relative z-10 h-12 w-12 min-md:h-18 min-md:w-18 rounded-sm"
            width={72}
            height={72}
            quality={100}
            placeholder="blur"
            blurDataURL={settings.profileImage}
            src={settings.profileImage}
            alt={settings.fullName}
          />
        </Link>
      </div>
      <div className="min-md:text-center space-y-2">
        <p className="text-lg font-medium leading-none">{settings.fullName}</p>
        <p className="text-xs leading-none text-muted-foreground">{settings.profileDescription}</p>
      </div>
    </div>
  );
};
