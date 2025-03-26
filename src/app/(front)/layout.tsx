// -> Imports -> Components
import { NavigationBar } from '@/components/Navigation';
import { Sidebar } from '@/components/Sidebar';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="container py-6 px-3 my-3">
      <NavigationBar />
      <div className="columns">
        <Sidebar />
        <div className="column">{children}</div>
      </div>
    </main>
  );
};

export default MainLayout;
