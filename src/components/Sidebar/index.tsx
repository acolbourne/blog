// -> Imports -> Components
import { CategoriesWidget } from '@/components/Widgets/Categories';
import { FooterWidget } from '@/components/Widgets/Footer';
import { TagsWidget } from '@/components/Widgets/Tags';

export const Sidebar: React.FC = () => {
  return (
    <aside className="column is-one-quarter">
      <div className="sidebar-sticky">
        <CategoriesWidget />
        <TagsWidget />
        <FooterWidget />
      </div>
    </aside>
  );
};
