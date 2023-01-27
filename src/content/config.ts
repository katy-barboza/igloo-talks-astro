// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// 2. Define your collection(s)
const talksCollention = defineCollection({
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    date: z.string().optional(),
    video: z.string(),
  }),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  talks: talksCollention,
};
