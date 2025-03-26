// -> Imports -> Components
import { CategoriesWidget } from '../Widgets/Categories';
import { TagsWidget } from '../Widgets/Tags';

export const Sidebar: React.FC = () => {
  return (
    <aside>
      <CategoriesWidget />
      <TagsWidget />
    </aside>
  );
};
