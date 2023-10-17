import Link from "next/link";
import { BlogCardProps } from "@/types";
import { FaThumbsUp, FaComment, FaShare } from "react-icons/fa";

const BlogPostCard = ({ title, date, image, slug, preview }: BlogCardProps) => {
  return (
    <main>
      <div className="bg-white p-4 rounded-lg shadow-md mx-4">
        <Link href={`/blog/${slug}`}>
          <img
            src={`/${image}`}
            alt={title}
            className="transition-all ease-in-out mb-4 w-full object-cover rounded-md hover:scale-105"
          />
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-gray-500">{date}</p>
          <p className="text-gray-500">{preview}</p>
        </Link>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md mx-4 mt-2">
        <div className="flex items-center justify-around">
          <button className="text-gray-500 hover:text-gray-400 transition-all ease-in-out duration-400">
            <FaThumbsUp size={24} />
          </button>
          <button className="text-gray-500 hover:text-gray-400 transition-all ease-in-out duration-400">
            <FaComment size={24} />
          </button>
          <button className="text-gray-500 hover:text-gray-400 transition-all ease-in-out duration-400">
            <FaShare size={24} />
          </button>
        </div>
      </div>
    </main>
  );
};

export default BlogPostCard;
