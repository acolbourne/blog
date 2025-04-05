// -> Imports -> Components
import Footer from '@/components/Footer';
import { TagCloud } from '@/components/Navigation//TagCloud';
import { CategoriesList } from '@/components/Navigation/CategoriesList';
import { DarkLightToggle } from '@/components/Navigation/DarkLightToggle';

export const NavigationBar: React.FC = () => {
  return (
    <aside className="navigation-bar">
      <div className="flex flex-col justify-between lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:p-6">
        <nav className="space-y-2 lg:space-y-4">
          <div>Profile</div>
          <div>Navigation</div>
          <CategoriesList />
          <TagCloud />
          <DarkLightToggle />
        </nav>
        <Footer />
      </div>
    </aside>
  );
};
