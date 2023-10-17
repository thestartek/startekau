import React from "react";
import BlogPostCard from "@/components/BlogCard";

export default function Blog() {
  return (
    <main className="min-h-[80vh]">
      <div className="container mx-auto py-8 mb-10 max-w-[1080px]">
        <h1 className="text-3xl font-semibold mb-4 ml-4">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BlogPostCard
            title="Things to know before arriving to Australia"
            date="Oct 16, 2023"
            image="blog1.webp"
            slug="things-to-know-before-arriving-to-australia"
            preview="There are several things to consider before coming to Australia, including..."
            publishedby=""
          />
          <BlogPostCard
            title="Tips to find a rental property in Australia, for international students"
            date="Oct 16, 2023"
            image="blog2.jpg"
            slug="tips-to-find-a-rental-property-in-australia-for-international-students"
            preview="Looking for rental accommodation in Australia can be a daunting task, especially for international students. However, with the right resources and knowledge, it can be…"
            publishedby=""
          />
          <BlogPostCard
            title="How to get TFN, ABN and Superannuation in Australia 2023"
            date="Oct 16, 2023"
            image="blog3.jpeg"
            slug="how-to-get-tfn-abn-and-superannuation-in-australia"
            preview="In Australia, a Tax File Number (TFN), an Australian Business Number (ABN), and a Superannuation account are all important for individuals and businesses to have…"
            publishedby=""
          />
          <BlogPostCard
            title="How to find a job in Australia as an International student"
            date="Oct 16, 2023"
            image="blog4.jpeg"
            slug="how-to-find-a-job-in-australia-as-an-international-student"
            preview="Finding a job as an international student in Australia can be a challenging task, but with the right approach, it is definitely possible. Here are…"
            publishedby=""
          />
        </div>
      </div>
    </main>
  );
}
