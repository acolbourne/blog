// -> Imports -> Libraries
//import { useTranslations } from 'next-intl';

// -> Imports -> Types
import type { BlogPostMetadata } from '@/types';

interface PostListingCardProps {
  post: BlogPostMetadata;
}

export const PostListingCard: React.FC<PostListingCardProps> = ({ post }) => {
  //const t = useTranslations();

  return <h1>{post.title}</h1>;
};
