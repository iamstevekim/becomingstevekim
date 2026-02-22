import { defineCollection, z } from 'astro:content';

// Blog collection schema - ready for future blog posts
// To use: Create src/content/blog/ directory and add markdown files
// Then create src/pages/blog/index.astro and src/pages/blog/[...slug].astro
const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { blog };
