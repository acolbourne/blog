// -> Imports -> Components
import Footer from '@/components/Footer';
import { CategoriesList } from '@/components/Navigation/CategoriesList';
import { DarkLightToggle } from '@/components/Navigation/DarkLightToggle';
import { Navigation } from '@/components/Navigation/Navigation';
import { Profile } from '@/components/Navigation/Profile';
import { TagCloud } from '@/components/Navigation/TagCloud';
import { Separator } from '@/components/ui/separator';

export const NavigationBar: React.FC = () => {
  return (
    <div className="navigation-bar">
      <div className="flex flex-col justify-between md:fixed md:top-0 md:left-0 md:h-screen md:p-6">
        <nav className="space-y-6 overflow-y-hidden hover:overflow-y-auto max-h-screen">
          <Profile />
          <Separator />
          <Navigation />
          <Separator />
          <CategoriesList />
          <Separator />
          <TagCloud />
          <Separator />
          <DarkLightToggle />
        </nav>
        <Footer />
      </div>
    </div>
  );
};
