// -> Imports -> Types
import type { BlogPost } from '@/types';

interface PostContentProps {
  post: BlogPost;
}

export const SinglePost: React.FC<PostContentProps> = ({ post }) => {
  return (
    <div className="container">
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};
