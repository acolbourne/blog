// -> Imports -> Components
import Footer from '@/components/Footer';
import { CategoriesList } from '@/components/Navigation/CategoriesList';
import { DarkLightToggle } from '@/components/Navigation/DarkLightToggle';
import { Profile } from '@/components/Navigation/Profile';
import { TagCloud } from '@/components/Navigation/TagCloud';
import { Separator } from '@/components/ui/separator';

export const NavigationBar: React.FC = () => {
  return (
    <aside className="navigation-bar">
      <div className="flex flex-col justify-between lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:p-6">
        <nav className="space-y-2 lg:space-y-6">
          <Profile />
          <Separator />
          <div>Navigation</div>
          <Separator />
          <CategoriesList />
          <Separator />
          <TagCloud />
          <Separator />
          <DarkLightToggle />
        </nav>
        <Footer />
      </div>
    </aside>
  );
};
