// -> Imports -> Libraries
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import html from 'remark-html';

// -> Imports -> Types
import type { BlogPost, BlogPostMetadata, ContentPage } from '@/types';

const postsDirectory = path.join(process.cwd(), 'content/posts');
const pagesDirectory = path.join(process.cwd(), 'content/pages');

// -> Get individual post by slug.
export async function getPostBySlug(slug: string): Promise<BlogPost> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).use(remarkGfm).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    content: contentHtml,
    title: data.title || '',
    date: data.date || '',
    excerpt: data.excerpt || '',
    categories: data.categories || [],
    tags: data.tags || [],
    featuredImage: data.featuredImage || '',
  };
}

// -> Get individual page by slug.
// !!! Note: I've put this here because there wasn't enough difference between handling posts and pages to justify a separate util file.
export async function getPageBySlug(slug: string): Promise<ContentPage> {
  const fullPath = path.join(pagesDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).use(remarkGfm).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    content: contentHtml,
    title: data.title || '',
    excerpt: data.excerpt || '',
  };
}

// -> Get a list of all posts.
export function getAllPosts(): BlogPostMetadata[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf-8');

      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || '',
        date: data.date || '',
        excerpt: data.excerpt || '',
        categories: data.categories || [],
        tags: data.tags || [],
        featuredImage: data.featuredImage || '',
      };
    });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// -> Get a list of all categories.
export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categoriesSet = new Set<string>();

  posts.forEach((post) => {
    post.categories.forEach((category) => {
      categoriesSet.add(category);
    });
  });

  return Array.from(categoriesSet);
}

// -> Get a list of all tags.
export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tagsSet = new Set<string>();

  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      tagsSet.add(tag);
    });
  });

  return Array.from(tagsSet);
}

// -> Get a list of posts by category.
export function getPostsByCategory(category: string): BlogPostMetadata[] {
  const posts = getAllPosts();
  return posts.filter((post) => post.categories.includes(category));
}

// -> Get a list of posts by tag.
export function getPostsByTag(tag: string): BlogPostMetadata[] {
  const posts = getAllPosts();
  return posts.filter((post) => post.tags.includes(tag));
}
