import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    homeTitle: z.string(),
    homeDescription: z.string(),
    order: z.number(),
    items: z.array(z.string()),
  }),
});

const sectors = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/sectors' }),
  schema: z.object({
    title: z.string(),
    capability: z.string(),
    order: z.number(),
  }),
});

const insights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { services, sectors, insights };
