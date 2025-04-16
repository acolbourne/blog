# My personal blog

This is my personal blog, which I've built with Next.js, TypeScript, and Tailwind CSS.

## Features:

- 📱 **Responsive Design** - Optimised for all device sizes
- 🌙 **Dark/Light Mode** - Toggle between dark and light themes
- 🌐 **I18n** - Support for multiple languages using Next-Intl
- 📝 **Markdown Content** - Pages and posts are written using Markdown
- 🏷️ **Categories & Tags** - Content is organised using categories and tags
- 📰 **RSS Feed** - Automatically generated RSS feed based on posts

## Stack Used:

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Content**: Markdown with [gray-matter](https://github.com/jonschlinkert/gray-matter) and
  [remark](https://github.com/remarkjs/remark)
- **Forms**: [React Hook Form](https://react-hook-form.com/) with
  [Zod](https://github.com/colinhacks/zod) validation
- **I18n**: [next-intl](https://next-intl-docs.vercel.app/)
- **Code Quality**: ESLint, Prettier, Husky, lint-staged

## Want to spin it up?

### Prerequisites:

- [Node.js](https://nodejs.org/) (v18 or newer)
- [pnpm](https://pnpm.io/) (v8 or newer)

### Installation:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/blog.git
   cd blog
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Run the development server:

   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure:

```
blog/
├── content/            # Markdown content
│   ├── pages/          # Static pages
│   └── posts/          # Blog posts
├── public/             # Static assets
├── src/
│   ├── app/            # Next.js App Router
│   │   ├── (blog)/     # Blog routes
│   │   ├── (feeds)/    # RSS and other feeds
│   │   ├── (forms)/    # Form-related routes
│   │   ├── (landing)/  # Landing pages
│   │   └── (pages)/    # Static page routes
│   ├── components/     # React components
│   ├── i18n/           # I18n configuration
│   ├── language/       # Translation files
│   ├── lib/            # Utility functions
│   ├── schemas/        # Zod validation schemas
│   ├── types/          # TypeScript type definitions
│   └── utils/          # Helper utilities
└── ...
```

## Content Management

### Blog Posts:

Create new blog posts by adding Markdown files to the `content/posts/` directory. Each post should
include frontmatter with metadata:

```markdown
---
title: 'Post Title'
date: '2025-03-17'
excerpt: 'Brief description of the post'
categories: ['Category1', 'Category2']
tags: ['tag1', 'tag2', 'tag3']
featuredImage: '/images/featured.jpg'
---

# Content starts here

Your post content in Markdown...
```

### Static Pages:

Create static pages by adding Markdown files to the `content/pages/` directory with similar
frontmatter structure.

## Scripts

- `pnpm dev` - Start the development server with Turbopack
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint
- `pnpm prettier:check` - Check code formatting
- `pnpm format` - Format code with ESLint and Prettier
- `pnpm type-check` - Run TypeScript type checking

## License

This project is licensed under the MIT License - see the LICENSE file for details.
