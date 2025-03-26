// -> Imports -> Components
import { Footer } from '@/components/Footer';
import { NavigationBar } from '@/components/Navigation';
import { Sidebar } from '@/components/Sidebar';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="container">
      <NavigationBar />
      <Sidebar />
      {children}
      <Footer />
    </main>
  );
};

export default MainLayout;
