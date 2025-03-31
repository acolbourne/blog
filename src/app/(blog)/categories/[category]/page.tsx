// -> Imports -> Libraries
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';

// -> Imports -> Components

// -> Imports -> Utils
import { getAllCategories, getPostsByCategory } from '@/utils/blog';
import { seoMetadata } from '@/utils/seoMetadata';

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const t = await getTranslations('Posts.Categories');
  const { category: categoryParams } = await params;
  const category = decodeURIComponent(categoryParams);

  return seoMetadata({
    title: t('title', { category }),
    description: t('description', { category }),
  });
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((category) => ({
    category,
  }));
}

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const t = await getTranslations('Posts.Categories');
  const { category: categoryParams } = await params;
  const category = decodeURIComponent(categoryParams);
  const posts = getPostsByCategory(category);

  if (posts.length === 0) notFound();

  return (
    <div>
      <h1>{t('title', { category })}</h1>
      {posts.map((post) => (
        <h1 key={post.title}>{post.title}</h1>
      ))}
    </div>
  );
};

export default CategoryPage;
