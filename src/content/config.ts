import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    byline: z.string().optional(),
    briefDescription: z.string(),
    category: z.enum([
      'frontier-ai',          // Thrive AI Health, Cato Green AI, Destiny 2 Ghost, Terminal Tours
      'venture-strategy',     // Coinbase Cloud, PwC, Patents, HEC Paris MSIE
      'experiential-spatial', // Disney, Nike/Jordan, Eyegroove, JUXT
      'creative-tech',        // Software as Art, Zero1, Eyebeam, Generative Art
    ]),
    client: z.string().optional(),
    employer: z.string().optional(),
    role: z.string(),
    collaborators: z.array(z.string()).optional(),
    industries: z.array(z.string()).optional(),
    achievements: z.array(z.string()).optional(),
    tags: z.array(z.string()),
    year: z.union([z.number(), z.string()]),
    featured: z.boolean().default(false),
    archive: z.boolean().default(true),
    unlisted: z.boolean().default(false),
    showOnTimeline: z.boolean().default(true),
    heroImage: z.string().optional(),
    gallery: z.array(z.string()).optional(),
    cloudinaryVideo: z.string().optional(),
    vimeoId: z.string().optional(),
    youtubeId: z.string().optional(),
    primaryLink: z.string().url().optional(),
    metrics: z.array(z.string()).optional(),
  }),
});

const roles = defineCollection({
  type: 'content',
  schema: z.object({
    company: z.string(),
    title: z.string(),
    period: z.string(),
    startYear: z.number(),
    endYear: z.union([z.number(), z.string()]),
    location: z.string(),
    category: z.enum(['frontier-ai', 'venture-strategy', 'experiential-spatial', 'creative-tech']),
    summary: z.string(),
    highlights: z.array(z.string()),
    associatedProjects: z.array(z.string()).optional(),
    featured: z.boolean().default(true),
    showOnTimeline: z.boolean().default(true),
    order: z.number(),
  }),
});

const achievements = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    type: z.enum(['patent', 'award', 'speaking', 'fellowship']),
    year: z.union([z.number(), z.string()]),
    organization: z.string(),
    category: z.enum(['frontier-ai', 'venture-strategy', 'experiential-spatial', 'creative-tech']),
    description: z.string(),
    patentNumber: z.string().optional(),
    link: z.string().url().optional(),
    associatedProject: z.string().optional(),
    featured: z.boolean().default(false),
    showOnTimeline: z.boolean().default(true),
  }),
});

export const collections = { projects, roles, achievements };
