import BlogPage from "@/components/BlogPage";
import RecentPosts from "@/components/RecentPosts";
import Link from "next/link";

const page = () => {
  return (
    <main className="flex items-center justify-center mb-10">
      <div className="m-4 max-w-[768px]">
        <BlogPage
          title="How to find a job in Australia as an International student"
          image="/blog4.jpeg"
          slug=""
          preview=""
          date="October 17, 2023"
          publishedby="Pawan Awasthi"
        />
        <div className="prose">
          <p>
            Finding a job as an international student in Australia can be a
            challenging task, but with the right approach, it is definitely
            possible. Here are some tips to help you navigate the job market and
            increase your chances of finding employment:
          </p>
          <h2 className="text-2xl font-bold mt-5">
            1. Research the job market
          </h2>
          <p className="mb-5">
            Before you even start applying for jobs, it is important to research
            the job market in the area where you will be studying. This will
            give you an idea of the types of jobs that are available, the
            qualifications required, and the average salary for different
            positions.
          </p>
          <h2 className="text-2xl font-bold mt-5">2. Network</h2>
          <p className="mb-5">
            Networking is a key aspect of finding a job, and this is especially
            true for international students. Attend career fairs, join student
            groups, and talk to other international students to learn about job
            opportunities and get advice on how to apply. <br />
            You can get networking opportunities through{" "}
            <Link
              href="https://www.linkedin.com/"
              className="px-2 py-1 rounded-lg shadow-black shadow-sm"
            >
              LinkedIn
            </Link>{" "}
            <Link
              href="https://www.meetup.com/"
              className="px-2 py-1 rounded-lg shadow-black shadow-sm"
            >
              Meetup
            </Link>{" "}
            <Link
              href="https://www.eventbrite.com.au/"
              className="px-2 py-1 rounded-lg shadow-black shadow-sm"
            >
              Eventbrite
            </Link>{" "}
            <Link
              href="https://www.meetings.com/"
              className="px-2 py-1 rounded-lg shadow-black shadow-sm"
            >
              meetings.com
            </Link>{" "}
          </p>
          <h2 className="text-2xl font-bold mt-5">3. Be open to any jobs</h2>
          <p className="mb-5">
            Be open-minded about the types of jobs you apply for. Many
            international students work in hospitality or retail while they
            study, which can be a great way to gain work experience and make
            connections.
          </p>
          <h2 className="text-2xl font-bold mt-5">4. Tailor you Resume</h2>
          <p className="mb-5">
            Tailor your resume to the Australian job market by highlighting your
            relevant skills and experience. Make sure to include any work
            experience you have, even if it was in a different field or country.
          </p>
          <h2 className="text-2xl font-bold mt-5">
            5. Submit your application
          </h2>
          <p className="mb-5">
            Once your resume and cover letter are ready, you can submit your
            application online through the employer&apos;s website or through a
            job search website. <br /> <br />
            Some of the top job seeking sites in Australia are:{" "}
            <Link
              href="https://www.seek.com.au/"
              className="px-2 py-1 rounded-lg shadow-black shadow-sm"
            >
              Seek
            </Link>{" "}
            <Link
              href="https://au.indeed.com/"
              className="px-2 py-1 rounded-lg shadow-black shadow-sm"
            >
              Indeed
            </Link>{" "}
            <Link
              href="https://au.jora.com/"
              className="px-2 py-1 rounded-lg shadow-black shadow-sm"
            >
              Jora
            </Link>{" "}
            <Link
              href="https://au.linkedin.com/jobs"
              className="px-2 py-1 rounded-lg shadow-black shadow-sm"
            >
              LinkedIn
            </Link>{" "}
            <Link
              href="https://www.glassdoor.com.au/"
              className="px-2 py-1 rounded-lg shadow-black shadow-sm"
            >
              Glassdoor
            </Link>{" "}
            <Link
              href="https://www.careerone.com.au/"
              className="px-2 py-1 rounded-lg shadow-black shadow-sm"
            >
              CareerOne
            </Link>{" "}
            <Link
              href="https://www.gumtree.com.au/jobs"
              className="px-2 py-1 rounded-lg shadow-black shadow-sm"
            >
              Gumtree
            </Link>{" "}
            . Apart from the sites some Facebook pages and groups also list
            available jobs.
            <br />
            <br />
            Lastly, be patient, and don&apos;t get discouraged if you don&apos;t
            find a job right away. It can take time to find the right
            opportunity, but with persistence and a positive attitude, you will
            be able to find a job in Australia as an international student.
          </p>
        </div>
        <RecentPosts />
      </div>
    </main>
  );
};

export default page;
