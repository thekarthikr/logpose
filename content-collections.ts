import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
 

const authors = defineCollection({
  name: "authors",
  directory: "content/authors",
  include: "*.mdx",
  schema: (z) => ({
    ref: z.string(),
    displayName: z.string(),
    image: z.string(),
    link: z.string(),
    bio: z.string()
  }),
});
 
const posts = defineCollection({
  name: "posts",
  directory: "content/posts",
  include: "*.mdx",
  schema: (z) => ({
    title: z.string(),
    summary: z.string(),
    author: z.string(),
    date: z.string(),
    excerpt:z.string(),
    image: z.string(),
    tags: z.array(z.string()),
  }),
  transform: async (document, context) => {
    const body = await compileMDX(context, document);
    const author = await context
      .documents(authors)
      .find((a) => a.ref === document.author);
    return {
      ...document,
      body,
      author,
    };
  },
});
 


export default defineConfig({
  collections: [authors, posts],
});