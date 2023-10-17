import BlogPage from "@/components/BlogPage";
import RecentPosts from "@/components/RecentPosts";
import Link from "next/link";

const page = () => {
  return (
    <main className="flex items-center justify-center mb-10">
      <div className="m-4 max-w-[768px]">
        <BlogPage
          title="Tips to find a rental property in Australia, for international students"
          image="blog2.jpg"
          slug=""
          preview=""
          date="October 17, 2023"
          publishedby="Pawan Awasthi"
        />
        <div className="prose">
          <p>
            Looking for rental accommodation in Australia can be a daunting
            task, especially for international students. However, with the right
            resources and knowledge, it can be a smooth process. There are
            several options available, including on-campus housing, homestays,
            student hostels and apartments, share accommodation, and rental
            accommodation. To find the best option for you, start searching well
            in advance and utilize resources such as rental sites and Facebook
            groups. In this guide, we&apos;ll explore the different options
            available for finding a rental place in Australia, along with some
            tips and tricks to make the process easier.
          </p>
          <h2 className="text-2xl font-bold mt-5">On-campus housing</h2>
          <p className="mt-3">
            Many universities and colleges in Australia offer on-campus housing
            for international students. This is usually a convenient option, as
            it is close to classes and other campus facilities. You can find
            more about on-campus accommodation on the respective
            universities&apos; websites or you can directly contact student
            services on campus.
          </p>
          <h2 className="text-2xl font-bold mt-5">Homestay</h2>
          <p className="mt-3">
            Homestay is a great option for international students who want to
            live with a local family and experience Australian culture. You will
            have your own room, and meals are usually included.
          </p>
          <h2 className="text-2xl font-bold mt-5">
            Student hostels and apartments
          </h2>
          <p className="mt-3">
            Many student hostels and apartments are available in Australia, and
            they are typically more affordable than traditional apartments or
            houses. They can be a good option for students who want more
            independence.
          </p>
          <h2 className="text-2xl font-bold mt-5">Share accommodation</h2>
          <p className="mt-3">
            You can share a house or apartment with other students. Websites
            such as{" "}
            <Link
              href="https://www.flatmatefinders.com.au/"
              className="px-2 py-1 rounded-lg shadow-black shadow-sm"
            >
              flatmatefinders.com.au
            </Link>{" "}
            <Link
              href="https://flatmates.com.au/"
              className="px-2 py-1 rounded-lg shadow-black shadow-sm"
            >
              flatmates.com.au
            </Link>{" "}
            <Link
              href="https://www.gumtree.com.au/"
              className="px-2 py-1 rounded-lg shadow-black shadow-sm"
            >
              gumtree.com.au
            </Link>{" "}
            and many more can help you find share accommodation. Many Facebook
            pages and groups are also dedicated to help search for
            accommodation.
          </p>
          <h2 className="text-2xl font-bold mt-5">Rental accommodation</h2>
          <p className="mt-3">
            You can also find rental accommodation like apartments, houses, or
            granny flats on the above-mentioned websites. It&apos;s important to
            make sure you are aware of the lease agreement and the cost
            associated with it. You can apply for rental through agencies&apos;
            websites or through rental sites such as:{" "}
            <Link
              href="https://www.realestate.com.au/"
              className="px-2 py-1 rounded-lg shadow-black shadow-sm"
            >
              Real Estate
            </Link>{" "}
            <Link
              href="https://www.domain.com.au/"
              className="px-2 py-1 rounded-lg shadow-black shadow-sm"
            >
              Domain
            </Link>{" "}
            <Link
              href="http://rent.com.au/"
              className="px-2 py-1 rounded-lg shadow-black shadow-sm"
            >
              rent.com.au
            </Link>{" "}
            <Link
              href="http://property.com.au/"
              className="px-2 py-1 rounded-lg shadow-black shadow-sm"
            >
              property.com.au
            </Link>{" "}
            <br /> <br /> It&apos;s important to start searching for
            accommodation well in advance, as it can take some time to find a
            place that meets your needs and budget. <br /> <br /> In case you
            need accommodation in last minute and want to stay temporarily then{" "}
            <Link
              href="https://www.airbnb.com.au/"
              className="px-2 py-1 rounded-lg shadow-black shadow-sm"
            >
              Airbnb
            </Link>{" "}
            and{" "}
            <Link
              href="http://booking.com/"
              className="px-2 py-1 rounded-lg shadow-black shadow-sm"
            >
              booking.com
            </Link>{" "}
            are great places to look at.
          </p>
        </div>
        <RecentPosts />
      </div>
    </main>
  );
};

export default page;
