"use client";

import React from "react";
import Link from "next/link";
import { useScramble } from "use-scramble";
import { Post } from "@/.content-collections/generated";

const useScrambledText = (text: string) => {
  const { ref } = useScramble({
    text,
    speed: 1000,
  });
  return ref;
};

const BlogCard = ({ title, summary, date, _meta }: Post) => {
  const titleRef = useScrambledText(title);
  const summaryRef = useScrambledText(summary);

  return (
    <Link
      href={`/blog/${_meta.path}`}
      className="relative flex w-full cursor-pointer items-center gap-2 overflow-hidden rounded-lg p-4 hover:bg-neutral-100 hover:dark:bg-neutral-900"
    >
      <div className="flex-shrink-0">
        <p ref={titleRef}>{title}</p>
      </div>
      <div className="flex-shrink-0">
        <p className="text-foreground/40" ref={summaryRef}>
          {summary}
        </p>
      </div>
      <div className="ml-2 mr-2 h-[1px] flex-grow bg-border" />
      <div className="flex-shrink">
        <p className="text-foreground/70">{date}</p>
      </div>
    </Link>
  );
};

interface BlogPostProps {
  blogPosts: Post[];
}

const Blog = ({ blogPosts }: BlogPostProps) => {
  return (
    <div className="mx-auto my-8 max-w-3xl">
      {blogPosts.map((post, index) => (
        <BlogCard key={index} {...post} />
      ))}
    </div>
  );
};

export default Blog;
