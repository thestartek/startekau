import Image from "next/image";
import Link from "next/link";

import { FaCalculator, FaList, FaGlobe } from "react-icons/fa";

import AustraliaIcon from "/public/australiaIcon.svg";
import ExpenseEstimator from "/public/expenseEstimator.svg";
import PRPoints from "/public/PrPoints_logo.svg";
export default function Tools() {
  return (
    <main className="min-h-[80vh] m-auto flex items-center justify-center">
      <div className="max-w-[1080px] m-5 grid grid-cols-3">
        <Link
          href="/tools/prpointscalculator"
          className="md:w-[180px] w-[100px] flex flex-col items-center justify-center gap-2 shadow-black shadow rounded-lg py-2 active:scale-95 transition-all ease-in-out m-2"
        >
          <FaCalculator size={40} />
          <p className="text-center">
            PR Points <br />
            Calculator
          </p>
        </Link>
        <Link
          href=""
          className="md:w-[180px] w-[100px] flex flex-col items-center justify-center gap-2 shadow-black shadow rounded-lg py-2 active:scale-95 transition-all ease-in-out m-2"
        >
          <FaGlobe size={40} />
          <p className="text-center">
            Explore <br />
            Australia
          </p>
        </Link>
        <Link
          href=""
          className="md:w-[180px] w-[100px] flex flex-col items-center justify-center gap-2 shadow-black shadow rounded-lg py-2 active:scale-95 transition-all ease-in-out m-2"
        >
          <FaList size={40} />
          <p className="text-center">
            Expense <br />
            Estimator
          </p>
        </Link>
      </div>
    </main>
  );
}
