import { Mdx } from "@/components/mdx-components";

import { Button } from "@/components/ui/button";
import { allPosts } from "content-collections";
import { CalendarIcon, ChevronLeft, ClockIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

type Props = {
  params: {
    slug: string;
  };
};

const PostPage = ({ params }: Props) => {
  const post = allPosts.find((p) => p._meta.path === params.slug);
  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto my-12 max-w-3xl">
      <Link href="/blog" passHref>
        <Button variant="ghost" className="mb-4">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to all posts
        </Button>
      </Link>
      <div className="flex items-center space-x-4">
        <Avatar>
          <AvatarImage
            src={post?.author?.image}
            alt={post?.author?.displayName}
          />
          <AvatarFallback>
            {post?.author?.displayName
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div>
          <span className="text-sm font-medium">
            {post?.author?.displayName}
          </span>

          <div className="flex items-center text-xs text-muted-foreground">
            <CalendarIcon className="mr-1 h-3 w-3" />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString()}
            </time>
            <span className="mx-1">•</span>
            <ClockIcon className="mr-1 h-3 w-3" />
            <span>{post.excerpt}</span>
          </div>
        </div>
      </div>
      <div className="my-6 flex flex-wrap gap-2">
        {post?.tags.map((category, index) => (
          <Badge key={index} variant="outline">
            {category}
          </Badge>
        ))}
      </div>

      <Mdx code={post?.body} />
    </article>
  );
};

export const generateStaticParams = async () => {
  return allPosts.map((post) => ({
    slug: post._meta.path,
  }));
};

export const generateMetadata = async ({ params }: Props) => {
  const post = allPosts.find((p) => p._meta.path === params.slug);
  if (!post) {
    return;
  }

  return {
    title: post.title,
  };
};

export const dynamicParams = false;

export default PostPage;
