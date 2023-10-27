"use client";
import { useState } from "react";

import {
  Age,
  AusStudy,
  AustralianEmployment,
  Education,
  EnglishLanguage,
  Naati,
  Nomination,
  OverseasEmployment,
  PartnerSkills,
  ProfYear,
  RegionalStudy,
  SpecEdu,
  Result190,
} from "@/components/tools/PointsTable";

const SubClass190 = () => {
  const [pointsAge, setPointsAge] = useState(0);
  const [pointsEng, setPointsEng] = useState(0);
  const [pointsOVemp, setPointsOVemp] = useState(0);
  const [pointsAUemp, setPointsAUemp] = useState(0);
  const [pointsEdu, setPointsEdu] = useState(0);
  const [pointsSepcEdu, setPointsSpecEdu] = useState(0);
  const [pointsAusStudy, setPointsAusStudy] = useState(0);
  const [pointsRegStudy, setPointsRegStudy] = useState(0);
  const [pointsProfYear, setPointsProfYear] = useState(0);
  const [pointsNaati, setPointsNaati] = useState(0);
  const [pointsPartner, setPointsPartner] = useState(0);
  const [pointsNomination, setPointsNomination] = useState(0);

  return (
    <div>
      <section className="w-[80vw] max-w-[768px] p-4 rounded-lg shadow-lg hover:shadow-xl hover:shadow-gray-500 shadow-gray-500 transition-all ease-in-out">
        <Age setPointsAge={setPointsAge} />
      </section>
      <section className="w-[80vw] max-w-[768px] p-4 rounded-lg shadow-lg hover:shadow-xl hover:shadow-gray-500 shadow-gray-500 transition-all ease-in-out">
        <EnglishLanguage setPointsEng={setPointsEng} />
        <div className="flex flex-col gap-2 mt-4">
          Need Help?
          <p>
            Competent English: At least 6 in IELTS (50 in PTE) or equivalent in
            other approved tests.
          </p>
          <p>
            Proficient English: At least 7 in IELTS (65 in PTE) or equivalent in
            other approved tests.
          </p>
          <p>
            Superior English: At least 8 in IELTS (79 in PTE) or equivalent in
            other approved tests.
          </p>
        </div>
      </section>
      <section className="w-[80vw] max-w-[768px] p-4 rounded-lg shadow-lg hover:shadow-xl hover:shadow-gray-500 shadow-gray-500 transition-all ease-in-out">
        <OverseasEmployment setPointsOVemp={setPointsOVemp} />
      </section>
      <section className="w-[80vw] max-w-[768px] p-4 rounded-lg shadow-lg hover:shadow-xl hover:shadow-gray-500 shadow-gray-500 transition-all ease-in-out">
        <AustralianEmployment setPointsAUemp={setPointsAUemp} />
      </section>
      <section className="w-[80vw] max-w-[768px] p-4 rounded-lg shadow-lg hover:shadow-xl hover:shadow-gray-500 shadow-gray-500 transition-all ease-in-out">
        <Education setPointsEdu={setPointsEdu} />
      </section>
      <section className="w-[80vw] max-w-[768px] p-4 rounded-lg shadow-lg hover:shadow-xl hover:shadow-gray-500 shadow-gray-500 transition-all ease-in-out">
        <SpecEdu setPointsSpecEdu={setPointsSpecEdu} />
      </section>
      <section className="w-[80vw] max-w-[768px] p-4 rounded-lg shadow-lg hover:shadow-xl hover:shadow-gray-500 shadow-gray-500 transition-all ease-in-out">
        <AusStudy setPointsAusStudy={setPointsAusStudy} />
      </section>
      <section className="w-[80vw] max-w-[768px] p-4 rounded-lg shadow-lg hover:shadow-xl hover:shadow-gray-500 shadow-gray-500 transition-all ease-in-out">
        <RegionalStudy setPointsRegStudy={setPointsRegStudy} />
      </section>
      <section className="w-[80vw] max-w-[768px] p-4 rounded-lg shadow-lg hover:shadow-xl hover:shadow-gray-500 shadow-gray-500 transition-all ease-in-out">
        <ProfYear setPointsProfYear={setPointsProfYear} />
      </section>
      <section className="w-[80vw] max-w-[768px] p-4 rounded-lg shadow-lg hover:shadow-xl hover:shadow-gray-500 shadow-gray-500 transition-all ease-in-out">
        <Naati setPointsNaati={setPointsNaati} />
      </section>
      <section className="w-[80vw] max-w-[768px] p-4 rounded-lg shadow-lg hover:shadow-xl hover:shadow-gray-500 shadow-gray-500 transition-all ease-in-out">
        <PartnerSkills setPointsPartner={setPointsPartner} />
      </section>
      <section className="w-[80vw] max-w-[768px] p-4 rounded-lg shadow-lg hover:shadow-xl hover:shadow-gray-500 shadow-gray-500 transition-all ease-in-out">
        <Nomination setPointsNomination={setPointsNomination} />
      </section>
      <Result190
        pointsAge={pointsAge}
        pointsEng={pointsEng}
        pointsOVemp={pointsOVemp}
        pointsAUemp={pointsAUemp}
        pointsEdu={pointsEdu}
        pointsSepcEdu={pointsSepcEdu}
        pointsAusStudy={pointsAusStudy}
        pointsRegStudy={pointsRegStudy}
        pointsProfYear={pointsProfYear}
        pointsNaati={pointsNaati}
        pointsPartner={pointsPartner}
        pointsNomination={pointsNomination}
      />
    </div>
  );
};

export default SubClass190;
