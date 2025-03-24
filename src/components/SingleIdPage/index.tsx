// -> Imports -> Types
import type { ContentPage } from '@/types';

interface SingleIdPageProps {
  page: ContentPage;
}

export const SingleIdPage: React.FC<SingleIdPageProps> = ({ page }) => {
  return (
    <div className="container">
      <h1>{page.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.content }} />
    </div>
  );
};
