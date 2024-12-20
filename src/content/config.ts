import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
  }),
});

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
    date: z
      .string()
      .or(z.date())
      .transform((val: string | number | Date) =>
        new Date(val).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        }),
      ),
    draft: z.boolean().default(false).optional(),
    tag: z.string().optional().optional(),
    redirect: z.string().optional(),
  }),
});

export const collections = { pages, blog };
