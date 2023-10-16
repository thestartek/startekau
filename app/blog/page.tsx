import React from "react";
import BlogPostCard from "@/components/BlogCard";

export default function Blog() {
  return (
    <main className="min-h-[80vh]">
      <div className="container mx-auto py-8 mb-10">
        <h1 className="text-3xl font-semibold mb-4 ml-4">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BlogPostCard
            title="Blog 1"
            date="Oct 16, 2023"
            image="blog1.jpeg"
            slug="blog-post-1"
            preview="There are several things to consider before coming to Australia, including..."
          />
          <BlogPostCard
            title="Blog 1"
            date="Oct 16, 2023"
            image="blog1.jpeg"
            slug="blog-post-1"
            preview="There are several things to consider before coming to Australia, including..."
          />
          <BlogPostCard
            title="Blog 1"
            date="Oct 16, 2023"
            image="blog1.jpeg"
            slug="blog-post-1"
            preview="There are several things to consider before coming to Australia, including..."
          />
        </div>
      </div>
    </main>
  );
}
