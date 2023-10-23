"use client";
import { useState } from "react";
import DropDown from "../DropDown";
import RadioOptions from "../RadioOptions";

const PointsTable = () => {
  return (
    <main>
      <div className="flex flex-col gap-4 items-center justify-center my-6">
        <section className="w-[80vw] max-w-[768px] p-4 rounded-lg shadow-lg hover:shadow-xl hover:shadow-gray-500 shadow-gray-500 transition-all ease-in-out">
          <DropDown
            title="Select your age band"
            option1="At least 18 but less than 25 years"
            option2="At least 25 but less than 33 years"
            option3="At least 33 but less than 40 years"
            option4="At least 40 but less than 45 years"
            option5="None"
          />
        </section>

        {/* Select your English language ability */}
        <section className="w-[80vw] max-w-[768px] p-4 rounded-lg shadow-lg hover:shadow-xl hover:shadow-gray-500 shadow-gray-500 transition-all ease-in-out">
          <RadioOptions
            title="Select your English language ability"
            option1="Competent English"
            option2="Proficient English"
            option3="Superior English"
            option4="None"
            option5="None"
          />
          <div className="flex flex-col gap-2 mt-4">
            Need Help?
            <p>
              Competent English: At least 6 in IELTS (50 in PTE) or equivalent
              in other approved tests.
            </p>
            <p>
              Proficient English: At least 7 in IELTS (65 in PTE) or equivalent
              in other approved tests.
            </p>
            <p>
              Superior English: At least 8 in IELTS (79 in PTE) or equivalent in
              other approved tests.
            </p>
          </div>
        </section>

        <section className="w-[80vw] max-w-[768px] p-4 rounded-lg shadow-lg hover:shadow-xl hover:shadow-gray-500 shadow-gray-500 transition-all ease-in-out">
          <RadioOptions
            title="Select your work experience outside Australia"
            option1="Less than 3 years"
            option2="At least 3 but less than 5 years"
            option3="At least 5 but less than 8 years"
            option4="At least 8 years"
            option5="None"
          />
        </section>
        <section className="w-[80vw] max-w-[768px] p-4 rounded-lg shadow-lg hover:shadow-xl hover:shadow-gray-500 shadow-gray-500 transition-all ease-in-out">
          <RadioOptions
            title="Select your work experience inside Australia"
            option1="Less than 1 year"
            option2="At least 1 but less than 3 years"
            option3="At least 3 but less than 5 years"
            option4="At least 5 but less than 8 years"
            option5="At least 8 years"
          />
        </section>
        <section className="w-[80vw] max-w-[768px] p-4 rounded-lg shadow-lg hover:shadow-xl hover:shadow-gray-500 shadow-gray-500 transition-all ease-in-out">
          <RadioOptions
            title="Select your educational qualification"
            option1="A Doctorate from an Australian educational institution or a Doctorate
            from another educational institution, that is of a recognised
            standard."
            option2="At least a Bachelor degree from an Australian educational institution
            or at least a Bachelor qualification, from another educational
            institution, that is of a recognised standard."
            option3="A diploma or trade qualification from an Australian educational
            institution."
            option4="Attained a qualification or award recognised by the relevant assessing
            authority for your nominated skilled occupation as being suitable for
            that occupation"
            option5="None"
          />
        </section>
        <section className="w-[80vw] max-w-[768px] p-4 rounded-lg shadow-lg hover:shadow-xl hover:shadow-gray-500 shadow-gray-500 transition-all ease-in-out">
          <RadioOptions
            title="Specialist education qualification. Do you have a Masters degree by research or a Doctorate degree from an
            Australian educational institution that included at least 2 academic
            years to in a relevant field?"
            option1="Yes"
            option2="No"
            option3="None"
            option4="None"
            option5="None"
          />
        </section>
        <section className="w-[80vw] max-w-[768px] p-4 rounded-lg shadow-lg hover:shadow-xl hover:shadow-gray-500 shadow-gray-500 transition-all ease-in-out">
          <RadioOptions
            title="Australian study requirement. Do you have at least 1 degree, diploma or trade qualification from an
            Australian educational institution that meets the Australian study
            requirement?"
            option1="Yes"
            option2="No"
            option3="None"
            option4="None"
            option5="None"
          />
        </section>
        <section className="w-[80vw] max-w-[768px] p-4 rounded-lg shadow-lg hover:shadow-xl hover:shadow-gray-500 shadow-gray-500 transition-all ease-in-out">
          <RadioOptions
            title="Study in regional Australia. Do you have at least 1 degree, diploma or trade qualification from an
            Australian educational institution that satisfies the Australian study
            requirement obtained while living and studying in an eligible area of
            regional Australia?"
            option1="Yes"
            option2="No"
            option3="None"
            option4="None"
            option5="None"
          />
        </section>
        <section className="w-[80vw] max-w-[768px] p-4 rounded-lg shadow-lg hover:shadow-xl hover:shadow-gray-500 shadow-gray-500 transition-all ease-in-out">
          <RadioOptions
            title="Professional year in Australia. Did you complete a professional year in Australia?"
            option1="Yes"
            option2="No"
            option3="None"
            option4="None"
            option5="None"
          />
        </section>
        <section className="w-[80vw] max-w-[768px] p-4 rounded-lg shadow-lg hover:shadow-xl hover:shadow-gray-500 shadow-gray-500 transition-all ease-in-out">
          <RadioOptions
            title="Credentialled community language (NAATI). Have you been accredited at the paraprofessional level or above,
            certified at the certified provisional level or above, or have a
            community language credential for interpreting or translating by the
            National Accreditation Authority for Translators and Interpreters?"
            option1="Yes"
            option2="No"
            option3="None"
            option4="None"
            option5="None"
          />
        </section>
        <section className="w-[80vw] max-w-[768px] p-4 rounded-lg shadow-lg hover:shadow-xl hover:shadow-gray-500 shadow-gray-500 transition-all ease-in-out">
          <RadioOptions
            title="Select the relevant partner skills qualifications."
            option1="Your spouse or de facto partner must also be an applicant for this
            visa and meet age, English and skill criteria"
            option2="Your spouse or de facto partner must also be an applicant for this
            visa and has competent English"
            option3="You are single or your partner is an Australian citizen or permanent
            resident"
            option4="None"
            option5="None"
          />
        </section>
        {/* Nomination */}
        <section className="w-[80vw] max-w-[768px] p-4 rounded-lg shadow-lg hover:shadow-xl hover:shadow-gray-500 shadow-gray-500 transition-all ease-in-out">
          <RadioOptions
            title="Have you been invited to apply for a Skilled Nominated visa (subclass 190) 
            and the nominating State or Territory government agency has not withdrawn the nomination?"
            option1="Yes"
            option2="No"
            option3="None"
            option4="None"
            option5="None"
          />
        </section>
        {/* Nomination or Sponsorship */}
        <section className="w-[80vw] max-w-[768px] p-4 rounded-lg shadow-lg hover:shadow-xl hover:shadow-gray-500 shadow-gray-500 transition-all ease-in-out">
          <RadioOptions
            title="Have you been nominated or sponsored to apply for this visa?"
            option1="You were invited to apply for a Skilled Work Regional (Provisional) visa 
            because you were nominated and the nominating State or Territory government agency has not withdrawn that nomination"
            option2="You are being sponsored for a Skilled Work Regional (Provisional) visa 
            by a family member and the Minister has accepted that sponsorship"
            option3="None"
            option4="None"
            option5="None"
          />
        </section>
      </div>
    </main>
  );
};

export default PointsTable;
