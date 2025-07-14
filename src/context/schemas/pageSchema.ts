import { z } from "astro/zod";

export const metadataSchema = z.object({
  title: z.string(),
  description: z.string(),
  canonicalLink: z.string(),
  icon: z.string().optional(),
});

export const sectionSchema = z.object({
  name: z.string(),
  title: z.string(),
  description: z.string().optional(),
  data: z.any().optional(),
});

export const pageSchema = z.object({
  metadata: metadataSchema,
  sections: z.array(sectionSchema),
});
