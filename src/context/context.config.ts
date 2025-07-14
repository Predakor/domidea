import { defineCollection } from "astro:content";
import { pageSchema } from "./schemas/pageSchema";

const pages = defineCollection({
  type: "data",
  schema: pageSchema,
});

export default { pages };
