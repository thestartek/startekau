import Link from "next/link";

const PrPointsCalc = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col align-center justify-center h-[80vh] max-w-[1080px]">
      <h1 className="text-2xl text-center font-bold mb-8">
        Calculate your points for Permanent Residency application
      </h1>
      <div className="mb-4 md:grid md:grid-cols-2 flex flex-col gap-4 items-center justify-center">
        <Link
          href="/tools/subclass-189"
          className="flex items-center justify-center"
        >
          <p className="border p-2 rounded-lg bg-blue-500 text-center text-white mb-2 w-[22rem]">
            Skilled Independent Visa (Subclass 189)
          </p>
        </Link>
        <Link
          href="/tools/subclass-190"
          className="flex items-center justify-center"
        >
          <p className="border p-2 rounded-lg bg-blue-500 text-center text-white mb-2 w-[22rem]">
            Skilled Nominated Visa (Subclass 190)
          </p>
        </Link>
        <Link
          href="/tools/subclass-491"
          className="flex items-center justify-center"
        >
          <p className="border p-2 rounded-lg bg-blue-500 text-center text-white mb-2 w-[22rem]">
            Skilled Work Regional Visa (Subclass 491)
          </p>
        </Link>
        <Link
          href="/tools/subclass-489"
          className="flex items-center justify-center"
        >
          <p className="border p-2 rounded-lg bg-blue-500 text-white text-center w-[22rem]">
            Skilled Regional Visa (Subclass 489)
          </p>
        </Link>
      </div>
    </div>
  );
};

export default PrPointsCalc;
