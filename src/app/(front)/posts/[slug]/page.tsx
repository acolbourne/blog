// -> Imports -> Libraries
import { notFound } from 'next/navigation';

// -> Imports -> Components
import { SinglePost } from '@/components/SinglePost';

// -> Imports -> Utils
import { getAllPosts, getPostBySlug } from '@/utils/blog';
import { tryCatch } from '@/utils/tryCatch';

interface SinglePostProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: SinglePostProps) {
  const { slug } = await params;
  const { data: post, error: postError } = await tryCatch(getPostBySlug(slug));

  if (postError) notFound();

  return { title: post!.title, description: post!.excerpt };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

const SinglePostPage = async ({ params }: SinglePostProps) => {
  const { slug } = await params;
  const { data: post, error: postError } = await tryCatch(getPostBySlug(slug));

  if (postError) notFound();

  return <SinglePost key={post!.slug} post={post!} />;
};

export default SinglePostPage;
