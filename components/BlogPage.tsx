import { BlogCardProps } from "@/types";
import Image from "next/image";

const BlogPage = ({ image, title, date, publishedby }: BlogCardProps) => {
  return (
    <div className="container mx-auto py-8">
      <article className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold mb-4">{title}</h1>
        <p className="text-gray-500">
          Published on {date} by {publishedby}
        </p>
        <img
          src={image}
          alt="Blog 1"
          className="mt-4 mb-6 w-full h-96 object-cover rounded-md"
        />
      </article>
    </div>
  );
};

export default BlogPage;
