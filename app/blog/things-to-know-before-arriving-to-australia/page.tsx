import BlogPage from "@/components/BlogPage";
import RecentPosts from "@/components/RecentPosts";
import Link from "next/link";

const page = () => {
  return (
    <main className="flex items-center justify-center mb-10">
      <div className="m-4 max-w-[768px]">
        <BlogPage
          title="Things to know before arriving to Australia"
          image="/blog1.webp"
          slug=""
          preview=""
          date="October 17, 2023"
          publishedby="Pawan Awasthi"
        />
        <div className="prose">
          <p>
            There are several things to consider before coming to australia,
            including:
          </p>
          <h2 className="text-2xl font-bold mt-3">Accommodation</h2>
          <p className="mb-5">
            Research different options for accommodation, such as student
            housing, homestays, or renting an apartment.
          </p>
          <Link
            href=""
            className="p-2 rounded-lg shadow-black shadow-sm flex items-center justify-center"
          >
            Get tips on how to find accommodation
          </Link>
          <h2 className="text-2xl font-bold mt-5">Cost of living</h2>
          <p className="mb-5">
            Consider the cost of living in Australia, including expenses for
            things like food, transportation, and healthcare.
          </p>
          <Link
            href="https://costofliving.studyaustralia.gov.au/"
            target="_blank"
            className="p-2 rounded-lg shadow-black shadow-sm flex items-center justify-center"
          >
            Calculate cost of living in Australia
          </Link>
          <h2 className="text-2xl font-bold mt-5">Climate</h2>
          <p>
            Be aware of the weather in the area where you will be living, as it
            can vary greatly depending on the region.
          </p>
          <h2 className="text-2xl font-bold mt-5">Cultural differences</h2>
          <p>
            Be aware of cultural differences and customs in Australia, as well
            as any cultural or language barriers you may encounter.
          </p>
          <h2 className="text-2xl font-bold mt-5">Insurance</h2>
          <p>
            Make sure you have adequate health and travel insurance coverage
            while in Australia.
          </p>
          <h2 className="text-2xl font-bold mt-5">Employment</h2>
          <p className="mb-5">
            If you plan to work while in Australia, research the job market and
            understand the laws and regulations related to working in the
            country.
          </p>
          <Link
            href=""
            className="p-2 rounded-lg shadow-black shadow-sm flex items-center justify-center"
          >
            Get tips on how to find a job in Australia
          </Link>
          <h2 className="text-2xl font-bold mt-5">Transport</h2>
          <p>
            Research the different transportation options available in the area
            where you will be living, including the availability of public
            transport.
          </p>
          <h2 className="text-2xl font-bold mt-5">Safety</h2>
          <p>
            Research the safety of the area where you will be living, and
            familiarize yourself with emergency procedures and contact
            information.
          </p>
          <h2 className="text-2xl font-bold mt-5">Legal requirements</h2>
          <p>
            Familiarize yourself with the legal requirements for international
            students, such as visa conditions, and understand the rights and
            responsibilities of living in Australia.
          </p>
          <h2 className="text-2xl font-bold mt-5">Currency and banking</h2>
          <p>
            Learn about the currency and banking system in Australia, such as
            how to open a bank account, how to transfer money, and how to use an
            ATM. <br /> It&apos;s important to consult the official website of
            the Department of Home Affairs and relevant authorities for the most
            up-to-date and accurate information, as policies and requirements
            can change.
          </p>
        </div>
        <RecentPosts />
      </div>
    </main>
  );
};

export default page;
