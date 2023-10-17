import Link from "next/link";

const RecentPosts = () => {
  return (
    <div className="my-10">
      <h1 className="text-2xl font-bold text-gray-900 my-5">Recent Posts</h1>
      <Link
        href="/blog/things-to-know-before-arriving-to-australia"
        className="p-2 rounded-lg shadow-black shadow-sm flex items-center justify-center mb-5"
      >
        Things to know before arriving to Australia
      </Link>
      <Link
        href="/blog/tips-to-find-a-rental-property-in-australia-for-international-students"
        className="p-2 rounded-lg shadow-black shadow-sm flex items-center justify-center mb-5"
      >
        Tips to find a rental property in Australia, for international students
      </Link>
      <Link
        href="/blog/how-to-get-tfn-abn-and-superannuation-in-australia"
        className="p-2 rounded-lg shadow-black shadow-sm flex items-center justify-center mb-5"
      >
        How to get TFN, ABN and Superannuation in Australia 2023
      </Link>
      <Link
        href="/blog/how-to-find-a-job-in-australia-as-an-international-student"
        className="p-2 rounded-lg shadow-black shadow-sm flex items-center justify-center"
      >
        How to find a job in Australia as an International student
      </Link>
    </div>
  );
};

export default RecentPosts;
