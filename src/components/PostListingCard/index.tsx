// -> Imports -> Libraries
//import { useTranslations } from 'next-intl';

// -> Imports -> Components
import Link from 'next/link';

// -> Imports -> Types
import type { BlogPostMetadata } from '@/types';

interface PostListingCardProps {
  post: BlogPostMetadata;
}

export const PostListingCard: React.FC<PostListingCardProps> = ({ post }) => {
  //const t = useTranslations();

  return <Link href={`/posts/${post.slug}`}>{post.title}</Link>;
};
