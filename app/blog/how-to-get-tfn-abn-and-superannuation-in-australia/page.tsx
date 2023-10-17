import BlogPage from "@/components/BlogPage";
import RecentPosts from "@/components/RecentPosts";
import Link from "next/link";

const page = () => {
  return (
    <main className="flex items-center justify-center mb-10">
      <div className="m-4 max-w-[768px]">
        <BlogPage
          title="How to get TFN, ABN and Superannuation in Australia 2023"
          image="/blog3.jpeg"
          slug=""
          preview=""
          date="October 17, 2023"
          publishedby="Pawan Awasthi"
        />
        <div className="prose">
          <p>
            In Australia, a Tax File Number (TFN), an Australian Business Number
            (ABN), and a Superannuation account are all important for
            individuals and businesses to have. You must at least have TFN and
            Superannuation ready before starting work, and you will also need
            ABN if you want to operate a business or work as a sole trader (some
            employers also prefer to pay in ABN). Here are the steps for
            obtaining each:
          </p>
          <h2 className="text-2xl font-bold mt-5">Tax File Number (TFN)</h2>
          <p className="mb-5">
            To apply for a TFN, you can visit the Australian Taxation Office
            (ATO) website and fill out an application form. You will need to
            provide proof of identity and your visa status, and you can submit
            the form either online or by mail.
          </p>
          <Link
            href=""
            className="p-2 rounded-lg shadow-black shadow-sm flex items-center justify-center"
          >
            Apply TFN Now
          </Link>
          <h2 className="text-2xl font-bold mt-5">
            Australian Business Number (ABN)
          </h2>
          <p className="mb-5">
            To apply for an ABN, you can visit the Australian Business Register
            (ABR) website and fill out an application form. You will need to
            provide information about your business, such as the type of
            business, the name of the business, and the names of the directors.
            You can submit the form either online or by mail.
          </p>
          <Link
            href=""
            className="p-2 rounded-lg shadow-black shadow-sm flex items-center justify-center"
          >
            Apply ABN Now
          </Link>
          <h2 className="text-2xl font-bold mt-5">Superannuation</h2>
          <p className="mt-3">
            Superannuation is a retirement savings account that is mandatory for
            most employees in Australia. Your employer will usually arrange for
            contributions to be made to your superannuation account on your
            behalf. There are various superannuation providers you can choose
            from{" "}
            <Link
              href="https://www.australiansuper.com/"
              className="px-2 py-1 rounded-lg shadow-black shadow-sm"
            >
              AustralianSuper
            </Link>{" "}
            <Link
              href="https://hostplus.com.au/"
              className="px-2 py-1 rounded-lg shadow-black shadow-sm"
            >
              HostPlus
            </Link>{" "}
            <Link
              href="https://www.unisuper.com.au/"
              className="px-2 py-1 rounded-lg shadow-black shadow-sm"
            >
              UniSuper
            </Link>{" "}
            <Link
              href="https://www.amp.com.au/"
              className="px-2 py-1 rounded-lg shadow-black shadow-sm"
            >
              AMP
            </Link>{" "}
            <Link
              href="https://www.onepath.com.au/"
              className="px-2 py-1 rounded-lg shadow-black shadow-sm"
            >
              OnePath
            </Link>{" "}
            <Link
              href="https://www.visionsuper.com.au/"
              className="px-2 py-1 rounded-lg shadow-black shadow-sm"
            >
              VisionSuper
            </Link>{" "}
            <Link
              href="https://www.industrysuper.com/sunsuper/"
              className="px-2 py-1 rounded-lg shadow-black shadow-sm"
            >
              SunSuper
            </Link>{" "}
            and many banks and financial institutions also manage super funds.
            <br />
            <br />
            It&apos;s always a good idea to check with the relevant authorities
            to ensure that you are eligible and understand the requirements.
          </p>
        </div>
        <RecentPosts />
      </div>
    </main>
  );
};

export default page;
