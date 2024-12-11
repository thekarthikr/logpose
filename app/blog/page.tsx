import { Metadata } from "next";
import { allPosts } from "@/.content-collections/generated";
import Blog from "@/components/blog-list";

export const metadata: Metadata = {
  title: "Blog | Logpose",
  description:
    "Explore the latest posts and creative insights on the Logpose blog.",
};

const BlogListPage = () => {
  return (
    <div>
      <h1 className="my-8 text-center text-2xl md:text-3xl"> All Blogs</h1>
      <Blog blogPosts={allPosts} />
    </div>
  );
};

export default BlogListPage;
