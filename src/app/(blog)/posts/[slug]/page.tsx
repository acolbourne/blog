// -> Imports -> Libraries
import { notFound } from 'next/navigation';

// -> Imports -> Components

// -> Imports -> Utils
import { getAllPosts, getPostBySlug } from '@/utils/blog';
import { seoMetadata } from '@/utils/seoMetadata';
import { tryCatch } from '@/utils/tryCatch';

interface SinglePostProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: SinglePostProps) {
  const { slug } = await params;
  const { data: post, error: postError } = await tryCatch(getPostBySlug(slug));

  if (postError) notFound();

  return seoMetadata({ title: post!.title, description: post!.excerpt });
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

  return <h1>{post.title}</h1>;
};

export default SinglePostPage;
