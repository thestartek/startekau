import Link from "next/link";
import Head from "next/head";

const PrPointsCalc = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>PR Points Calculator</title>
      </Head>
      <h1 className="text-2xl font-bold mb-4">
        Calculate your points for Permanent Residency application
      </h1>
      <div className="mb-4">
        <Link href="/tools/subclass-189">
          <p className="border p-2 rounded-lg bg-blue-500 text-white inline-flex items-center justify-between mb-2">
            Skilled Independent Visa (Subclass 189)
          </p>
        </Link>
        <Link href="/tools/subclass-190">
          <p className="border p-2 rounded-lg bg-blue-500 text-white inline-flex items-center justify-between mb-2">
            Skilled Nominated Visa (Subclass 190)
          </p>
        </Link>
        <Link href="/tools/subclass-491">
          <p className="border p-2 rounded-lg bg-blue-500 text-white inline-flex items-center justify-between mb-2">
            Skilled Work Regional Visa (Subclass 491)
          </p>
        </Link>
        <Link href="/tools/subclass-489">
          <p className="border p-2 rounded-lg bg-blue-500 text-white inline-flex items-justify-between">
            Skilled Regional Visa (Subclass 489)
          </p>
        </Link>
      </div>
    </div>
  );
};

export default PrPointsCalc;
