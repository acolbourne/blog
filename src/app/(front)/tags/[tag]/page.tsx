// -> Imports -> Libraries
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';

// -> Imports -> Components
import { PostListingCard } from '@/components/PostListingCard';

// -> Imports -> Utils
import { getAllTags, getPostsByTag } from '@/utils/blog';

interface TagPageProps {
  params: Promise<{ tag: string }>;
}

export async function generateMetadata({ params }: TagPageProps) {
  const t = await getTranslations('Posts.Tags');
  const { tag: tagParams } = await params;
  const tag = decodeURIComponent(tagParams);

  return {
    title: t('title', { tag: tag }),
    description: t('description', { tag: tag }),
  };
}

export async function generateStaticParams() {
  const tags = getAllTags();
  return tags.map((tag) => ({
    tag,
  }));
}

const TagPage = async ({ params }: TagPageProps) => {
  const t = await getTranslations('Posts.Tags');
  const { tag: tagParams } = await params;
  const tag = decodeURIComponent(tagParams);
  const posts = getPostsByTag(tag);

  if (posts.length === 0) notFound();

  return (
    <div>
      <h1>{t('title', { tag: tag })}</h1>
      {posts.map((post) => (
        <PostListingCard key={post.slug} post={post} />
      ))}
    </div>
  );
};

export default TagPage;
