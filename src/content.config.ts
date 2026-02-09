import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    slug: z.string(),
    description: z.string(),
    categories: z.array(z.string()),
    tags: z.array(z.string()),
    aliases: z.array(z.string()).optional(),
  }),
});

export const collections = { posts };
