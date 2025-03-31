export type BlogPostMetadata = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  categories: string[];
  tags: string[];
  featuredImage?: string;
};

export type BlogPost = BlogPostMetadata & {
  content: string;
};

export type ContentPageMetadata = {
  slug: string;
  title: string;
  excerpt: string;
  featuredImage?: string;
};

export type ContentPage = ContentPageMetadata & {
  content: string;
};

export type ContactFormInputs = {
  formName: string;
  subject: string;
  access_key: string;
  name: string;
  email: string;
  message: string;
};

export type Success<T> = {
  data: T;
  error: null;
};

export type Failure<E> = {
  data: null;
  error: E;
};

export type Result<T, E = Error> = Success<T> | Failure<E>;
