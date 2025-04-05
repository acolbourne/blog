// -> Imports -> Components
import Footer from '@/components/Footer';

export const NavigationBar: React.FC = () => {
  return (
    <aside className="navigation-bar">
      <div className="flex flex-col justify-between lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:p-6">
        <nav>Navigation</nav>
        <Footer />
      </div>
    </aside>
  );
};
