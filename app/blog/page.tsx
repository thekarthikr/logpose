import Blog from "@/components/blog-list";

import React from "react";

const BlogListPage = () => {
  return (
    <div>
      <h1 className="my-8 text-center text-2xl md:text-3xl"> All Blogs</h1>
      <Blog />
    </div>
  );
};

export default BlogListPage;
