// -> Imports -> Libraries
import { notFound } from 'next/navigation';

// -> Imports -> Components
import { SingleIdPage } from '@/components/SingleIdPage';

// -> Imports -> Utils
import { getPageBySlug } from '@/utils/blog';
import { tryCatch } from '@/utils/tryCatch';

interface SinglePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: SinglePageProps) {
  const { slug } = await params;
  const { data: page, error: pageError } = await tryCatch(getPageBySlug(slug));

  if (pageError) notFound();

  return { title: page!.title, description: page!.excerpt };
}

const SinglePage = async ({ params }: SinglePageProps) => {
  const { slug } = await params;
  const { data: page, error: postError } = await tryCatch(getPageBySlug(slug));

  if (postError) notFound();

  return <SingleIdPage key={page!.slug} page={page!} />;
};

export default SinglePage;
