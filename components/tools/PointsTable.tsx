"use client";
import { useState } from "react";

export const Age = ({ setPointsAge }: any) => {
  const title = "Select your age band";
  const option1 = "At least 18 but less than 25 years";
  const option2 = "At least 25 but less than 33 years";
  const option3 = "At least 33 but less than 40 years";
  const option4 = "At least 40 but less than 45 years";

  const [checkAge1825, setCheckAge1825] = useState(false);
  const [checkAge2533, setCheckAge2533] = useState(false);
  const [checkAge3340, setCheckAge3340] = useState(false);
  const [checkAge4045, setCheckAge4045] = useState(false);

  const [selected, setSelected] = useState("Select an option"); // Set an initial value
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleChange = (option: string) => {
    setSelected(option);
    setIsDropdownOpen(false);
  };

  const isOptionSelected = (option: string) => selected === option;

  if (isOptionSelected(option1)) {
    setCheckAge1825(true);
    setCheckAge2533(false);
    setCheckAge3340(false);
    setCheckAge4045(false);
  }
  if (isOptionSelected(option2)) {
    setCheckAge1825(false);
    setCheckAge2533(true);
    setCheckAge3340(false);
    setCheckAge4045(false);
  }
  if (isOptionSelected(option3)) {
    setCheckAge1825(false);
    setCheckAge2533(false);
    setCheckAge3340(true);
    setCheckAge4045(false);
  }
  if (isOptionSelected(option4)) {
    setCheckAge1825(false);
    setCheckAge2533(false);
    setCheckAge3340(false);
    setCheckAge4045(true);
  }

  if (checkAge1825) {
    setPointsAge(25);
  }

  if (checkAge2533) {
    setPointsAge(30);
  }

  if (checkAge3340) {
    setPointsAge(25);
  }

  if (checkAge4045) {
    setPointsAge(15);
  }
  return (
    <div className="relative">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="bg-white border border-gray-300 rounded-full px-4 py-2 flex items-center justify-between focus:outline-none"
      >
        {selected}
        <svg
          className={`h-6 ml-2 transition-transform ${
            isDropdownOpen ? "transform rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isDropdownOpen && (
        <div className="absolute mt-2 rounded-md bg-white border border-gray-300 shadow-lg">
          <button
            onClick={() => handleChange(option1)}
            className={`block w-full px-4 py-2 text-left hover:bg-blue-100 focus:outline-none ${
              isOptionSelected(option1) ? "text-blue-500" : "text-gray-700"
            }`}
          >
            {isOptionSelected(option1) && (
              <svg
                className="w-5 h-5 inline-block mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
            {option1}
          </button>
          <button
            onClick={() => handleChange(option2)}
            className={`block w-full px-4 py-2 text-left hover:bg-pink-100 focus:outline-none ${
              isOptionSelected(option2) ? "text-pink-500" : "text-gray-700"
            }`}
          >
            {isOptionSelected(option2) && (
              <svg
                className="w-5 h-5 inline-block mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
            {option2}
          </button>
          <button
            onClick={() => handleChange(option3)}
            className={`block w-full px-4 py-2 text-left hover:bg-green-100 focus:outline-none ${
              isOptionSelected(option3) ? "text-green-500" : "text-gray-700"
            }`}
          >
            {isOptionSelected(option3) && (
              <svg
                className="w-5 h-5 inline-block mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
            {option3}
          </button>
          <button
            onClick={() => handleChange(option4)}
            className={`block w-full px-4 py-2 text-left hover:bg-green-100 focus:outline-none ${
              isOptionSelected(option4) ? "text-green-500" : "text-gray-700"
            }`}
          >
            {isOptionSelected(option4) && (
              <svg
                className="w-5 h-5 inline-block mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
            {option4}
          </button>
        </div>
      )}
      <p className="text-gray-500 mt-2">
        Selected Option: {selected === "Select an option" ? "" : selected}
      </p>
    </div>
  );
};

export const EnglishLanguage = ({ setPointsEng }: any) => {
  const title = "Select your English language ability";
  const option1 = "Competent English";
  const option2 = "Proficient English";
  const option3 = "Superior English";

  const [selected, setSelected] = useState("None"); // Set an initial value

  const handleChange = (event: any) => {
    setSelected(event.target.value);
  };

  const [competentEng, setCompetentEng] = useState(false);
  const [proficientEng, setProficientEng] = useState(false);
  const [superiorEng, setSuperiorEng] = useState(false);

  if (selected === option1) {
    setCompetentEng(true);
    setProficientEng(false);
    setSuperiorEng(false);
  }
  if (selected === option2) {
    setCompetentEng(false);
    setProficientEng(true);
    setSuperiorEng(false);
  }
  if (selected === option3) {
    setCompetentEng(false);
    setProficientEng(false);
    setSuperiorEng(true);
  }

  if (competentEng) {
    setPointsEng(0);
  }
  if (proficientEng) {
    setPointsEng(10);
  }
  if (superiorEng) {
    setPointsEng(20);
  }

  return (
    <div>
      <label className="block text-gray-700 text-xl font-bold mb-4">
        {title}
      </label>
      <div className="flex flex-col gap-2">
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="option"
            value={option1}
            checked={selected === option1}
            onChange={handleChange}
            className="hidden"
          />
          <div className="w-6 h-6 border border-gray-400 rounded-full flex items-center justify-center mr-2">
            {selected === option1 && (
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            )}
          </div>
          {option1}
        </label>
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="option"
            value={option2}
            checked={selected === option2}
            onChange={handleChange}
            className="hidden"
          />
          <div className="w-6 h-6 border border-gray-400 rounded-full flex items-center justify-center mr-2">
            {selected === option2 && (
              <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
            )}
          </div>
          {option2}
        </label>
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="option"
            value={option3}
            checked={selected === option3}
            onChange={handleChange}
            className="hidden"
          />
          <div className="w-6 h-6 border border-gray-400 rounded-full flex items-center justify-center mr-2">
            {selected === option3 && (
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            )}
          </div>
          {option3}
        </label>
      </div>
      <p className="text-gray-500 mt-2">Selected Option: {selected}</p>
    </div>
  );
};

export const OverseasEmployment = ({ setPointsOVemp }: any) => {
  const title = "Select your work experience outside Australia";
  const option1 = "Less than 3 years";
  const option2 = "At least 3 but less than 5 years";
  const option3 = "At least 5 but less than 8 years";
  const option4 = "At least 8 years";

  const [selected, setSelected] = useState("None"); // Set an initial value

  const handleChange = (event: any) => {
    setSelected(event.target.value);
  };

  const [checkOVemp03, setCheckOVemp03] = useState(false);
  const [checkOVemp35, setCheckOVemp35] = useState(false);
  const [checkOVemp58, setCheckOVemp58] = useState(false);
  const [checkOVemp80, setCheckOVemp80] = useState(false);

  if (selected === option1) {
    setCheckOVemp03(true);
    setCheckOVemp35(false);
    setCheckOVemp58(false);
    setCheckOVemp80(false);
  }
  if (selected === option2) {
    setCheckOVemp03(false);
    setCheckOVemp35(true);
    setCheckOVemp58(false);
    setCheckOVemp80(false);
  }
  if (selected === option3) {
    setCheckOVemp03(false);
    setCheckOVemp35(false);
    setCheckOVemp58(true);
    setCheckOVemp80(false);
  }
  if (selected === option4) {
    setCheckOVemp03(false);
    setCheckOVemp35(false);
    setCheckOVemp58(false);
    setCheckOVemp80(true);
  }

  if (checkOVemp03) {
    setPointsOVemp(0);
  }
  if (checkOVemp35) {
    setPointsOVemp(5);
  }
  if (checkOVemp58) {
    setPointsOVemp(10);
  }
  if (checkOVemp80) {
    setPointsOVemp(15);
  }

  return (
    <div>
      <label className="block text-gray-700 text-xl font-bold mb-4">
        {title}
      </label>
      <div className="flex flex-col gap-2">
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="option"
            value={option1}
            checked={selected === option1}
            onChange={handleChange}
            className="hidden"
          />
          <div className="w-6 h-6 border border-gray-400 rounded-full flex items-center justify-center mr-2">
            {selected === option1 && (
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            )}
          </div>
          {option1}
        </label>
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="option"
            value={option2}
            checked={selected === option2}
            onChange={handleChange}
            className="hidden"
          />
          <div className="w-6 h-6 border border-gray-400 rounded-full flex items-center justify-center mr-2">
            {selected === option2 && (
              <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
            )}
          </div>
          {option2}
        </label>
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="option"
            value={option3}
            checked={selected === option3}
            onChange={handleChange}
            className="hidden"
          />
          <div className="w-6 h-6 border border-gray-400 rounded-full flex items-center justify-center mr-2">
            {selected === option3 && (
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            )}
          </div>
          {option3}
        </label>
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="option"
            value={option4}
            checked={selected === option4}
            onChange={handleChange}
            className="hidden"
          />
          <div className="w-6 h-6 border border-gray-400 rounded-full flex items-center justify-center mr-2">
            {selected === option4 && (
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            )}
          </div>
          {option4}
        </label>
      </div>
      <p className="text-gray-500 mt-2">Selected Option: {selected}</p>
    </div>
  );
};

export const AustralianEmployment = ({ setPointsAUemp }: any) => {
  const title = "Select your work experience inside Australia";
  const option1 = "Less than 1 year";
  const option2 = "At least 1 but less than 3 years";
  const option3 = "At least 3 but less than 5 years";
  const option4 = "At least 5 but less than 8 years";
  const option5 = "At least 8 years";

  const [selected, setSelected] = useState("None"); // Set an initial value

  const handleChange = (event: any) => {
    setSelected(event.target.value);
  };

  const [checkAUemp01, setCheckAUemp01] = useState(false);
  const [checkAUemp13, setCheckAUemp13] = useState(false);
  const [checkAUemp35, setCheckAUemp35] = useState(false);
  const [checkAUemp58, setCheckAUemp58] = useState(false);
  const [checkAUemp80, setCheckAUemp80] = useState(false);

  if (selected === option1) {
    setCheckAUemp01(true);
    setCheckAUemp13(false);
    setCheckAUemp35(false);
    setCheckAUemp58(false);
    setCheckAUemp80(false);
  }
  if (selected === option2) {
    setCheckAUemp01(false);
    setCheckAUemp13(true);
    setCheckAUemp35(false);
    setCheckAUemp58(false);
    setCheckAUemp80(false);
  }
  if (selected === option3) {
    setCheckAUemp01(false);
    setCheckAUemp13(false);
    setCheckAUemp35(true);
    setCheckAUemp58(false);
    setCheckAUemp80(false);
  }
  if (selected === option4) {
    setCheckAUemp01(false);
    setCheckAUemp13(false);
    setCheckAUemp35(false);
    setCheckAUemp58(true);
    setCheckAUemp80(false);
  }
  if (selected === option5) {
    setCheckAUemp01(false);
    setCheckAUemp13(false);
    setCheckAUemp35(false);
    setCheckAUemp58(false);
    setCheckAUemp80(true);
  }

  if (checkAUemp01) {
    setPointsAUemp(0);
  }
  if (checkAUemp13) {
    setPointsAUemp(5);
  }
  if (checkAUemp35) {
    setPointsAUemp(10);
  }
  if (checkAUemp58) {
    setPointsAUemp(15);
  }
  if (checkAUemp80) {
    setPointsAUemp(20);
  }

  return (
    <div>
      <label className="block text-gray-700 text-xl font-bold mb-4">
        {title}
      </label>
      <div className="flex flex-col gap-2">
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="option"
            value={option1}
            checked={selected === option1}
            onChange={handleChange}
            className="hidden"
          />
          <div className="w-6 h-6 border border-gray-400 rounded-full flex items-center justify-center mr-2">
            {selected === option1 && (
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            )}
          </div>
          {option1}
        </label>
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="option"
            value={option2}
            checked={selected === option2}
            onChange={handleChange}
            className="hidden"
          />
          <div className="w-6 h-6 border border-gray-400 rounded-full flex items-center justify-center mr-2">
            {selected === option2 && (
              <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
            )}
          </div>
          {option2}
        </label>
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="option"
            value={option3}
            checked={selected === option3}
            onChange={handleChange}
            className="hidden"
          />
          <div className="w-6 h-6 border border-gray-400 rounded-full flex items-center justify-center mr-2">
            {selected === option3 && (
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            )}
          </div>
          {option3}
        </label>
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="option"
            value={option4}
            checked={selected === option4}
            onChange={handleChange}
            className="hidden"
          />
          <div className="w-6 h-6 border border-gray-400 rounded-full flex items-center justify-center mr-2">
            {selected === option4 && (
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            )}
          </div>
          {option4}
        </label>
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="option"
            value={option5}
            checked={selected === option5}
            onChange={handleChange}
            className="hidden"
          />
          <div className="w-6 h-6 border border-gray-400 rounded-full flex items-center justify-center mr-2">
            {selected === option5 && (
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            )}
          </div>
          {option5}
        </label>
      </div>
      <p className="text-gray-500 mt-2">Selected Option: {selected}</p>
    </div>
  );
};

export const Education = ({ setPointsEdu }: any) => {
  const title = "Select your educational qualification";
  const option1 =
    "A Doctorate from an Australian educational institution or a Doctorate from another educational institution, that is of a recognised standard.";
  const option2 =
    "At least a Bachelor degree from an Australian educational institution or at least a Bachelor qualification, from another educational institution, that is of a recognised standard.";
  const option3 =
    "A diploma or trade qualification from an Australian educational institution.";
  const option4 =
    "Attained a qualification or award recognised by the relevant assessing authority for your nominated skilled occupation as being suitable for that occupation";

  const [selected, setSelected] = useState("None"); // Set an initial value

  const handleChange = (event: any) => {
    setSelected(event.target.value);
  };

  const [checkEduDoc, setCheckEduDoc] = useState(false);
  const [checkEduBach, setCheckEduBach] = useState(false);
  const [checkEduDpl, setCheckEduDpl] = useState(false);
  const [checkEduRel, setCheckEduRel] = useState(false);

  if (selected === option1) {
    setCheckEduDoc(true);
    setCheckEduBach(false);
    setCheckEduDpl(false);
    setCheckEduRel(false);
  }
  if (selected === option2) {
    setCheckEduDoc(false);
    setCheckEduBach(true);
    setCheckEduDpl(false);
    setCheckEduRel(false);
  }
  if (selected === option3) {
    setCheckEduDoc(false);
    setCheckEduBach(false);
    setCheckEduDpl(true);
    setCheckEduRel(false);
  }
  if (selected === option4) {
    setCheckEduDoc(false);
    setCheckEduBach(false);
    setCheckEduDpl(false);
    setCheckEduRel(true);
  }

  if (checkEduDoc) {
    setPointsEdu(20);
  }
  if (checkEduBach) {
    setPointsEdu(15);
  }
  if (checkEduDpl) {
    setPointsEdu(10);
  }
  if (checkEduRel) {
    setPointsEdu(10);
  }

  return (
    <div>
      <label className="block text-gray-700 text-xl font-bold mb-4">
        {title}
      </label>
      <div className="flex flex-col gap-2">
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="option"
            value={option1}
            checked={selected === option1}
            onChange={handleChange}
            className="hidden"
          />
          <div className="w-6 h-6 border border-gray-400 rounded-full flex items-center justify-center mr-2">
            {selected === option1 && (
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            )}
          </div>
          {option1}
        </label>
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="option"
            value={option2}
            checked={selected === option2}
            onChange={handleChange}
            className="hidden"
          />
          <div className="w-6 h-6 border border-gray-400 rounded-full flex items-center justify-center mr-2">
            {selected === option2 && (
              <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
            )}
          </div>
          {option2}
        </label>
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="option"
            value={option3}
            checked={selected === option3}
            onChange={handleChange}
            className="hidden"
          />
          <div className="w-6 h-6 border border-gray-400 rounded-full flex items-center justify-center mr-2">
            {selected === option3 && (
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            )}
          </div>
          {option3}
        </label>
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="option"
            value={option4}
            checked={selected === option4}
            onChange={handleChange}
            className="hidden"
          />
          <div className="w-6 h-6 border border-gray-400 rounded-full flex items-center justify-center mr-2">
            {selected === option4 && (
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            )}
          </div>
          {option4}
        </label>
      </div>
      <p className="text-gray-500 mt-2">Selected Option: {selected}</p>
    </div>
  );
};

export const SpecEdu = ({ setPointsSpecEdu }: any) => {
  const title =
    "Specialist education qualification. Do you have a Masters degree by research or a Doctorate degree from an Australian educational institution that included at least 2 academic years to in a relevant field?";
  const option1 = "Yes";
  const option2 = "No";

  const [selected, setSelected] = useState("None"); // Set an initial value

  const handleChange = (event: any) => {
    setSelected(event.target.value);
  };
  const [checkSpecEduYes, setCheckSpecEduYes] = useState(false);
  const [checkSpecEduNo, setCheckSpecEduNo] = useState(false);

  if (selected === option1) {
    setCheckSpecEduYes(true);
    setCheckSpecEduNo(false);
  }
  if (selected === option2) {
    setCheckSpecEduYes(false);
    setCheckSpecEduNo(true);
  }

  if (checkSpecEduYes) {
    setPointsSpecEdu(10);
  }
  if (checkSpecEduNo) {
    setPointsSpecEdu(0);
  }

  return (
    <div>
      <label className="block text-gray-700 text-xl font-bold mb-4">
        {title}
      </label>
      <div className="flex flex-col gap-2">
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="option"
            value={option1}
            checked={selected === option1}
            onChange={handleChange}
            className="hidden"
          />
          <div className="w-6 h-6 border border-gray-400 rounded-full flex items-center justify-center mr-2">
            {selected === option1 && (
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            )}
          </div>
          {option1}
        </label>
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="option"
            value={option2}
            checked={selected === option2}
            onChange={handleChange}
            className="hidden"
          />
          <div className="w-6 h-6 border border-gray-400 rounded-full flex items-center justify-center mr-2">
            {selected === option2 && (
              <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
            )}
          </div>
          {option2}
        </label>
      </div>
      <p className="text-gray-500 mt-2">Selected Option: {selected}</p>
    </div>
  );
};

export const AusStudy = ({ setPointsAusStudy }: any) => {
  const title =
    "Australian study requirement. Do you have at least 1 degree, diploma or trade qualification from an Australian educational institution that meets the Australian study requirement?";
  const option1 = "Yes";
  const option2 = "No";

  const [selected, setSelected] = useState("None"); // Set an initial value

  const handleChange = (event: any) => {
    setSelected(event.target.value);
  };
  const [checkAusStudyYes, setCheckAusStudyYes] = useState(false);
  const [checkAusStudyNo, setCheckAusStudyNo] = useState(false);

  if (selected === option1) {
    setCheckAusStudyYes(true);
    setCheckAusStudyNo(false);
  }
  if (selected === option2) {
    setCheckAusStudyYes(false);
    setCheckAusStudyNo(true);
  }

  if (checkAusStudyYes) {
    setPointsAusStudy(5);
  }
  if (checkAusStudyNo) {
    setPointsAusStudy(0);
  }

  return (
    <div>
      <label className="block text-gray-700 text-xl font-bold mb-4">
        {title}
      </label>
      <div className="flex flex-col gap-2">
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="option"
            value={option1}
            checked={selected === option1}
            onChange={handleChange}
            className="hidden"
          />
          <div className="w-6 h-6 border border-gray-400 rounded-full flex items-center justify-center mr-2">
            {selected === option1 && (
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            )}
          </div>
          {option1}
        </label>
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="option"
            value={option2}
            checked={selected === option2}
            onChange={handleChange}
            className="hidden"
          />
          <div className="w-6 h-6 border border-gray-400 rounded-full flex items-center justify-center mr-2">
            {selected === option2 && (
              <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
            )}
          </div>
          {option2}
        </label>
      </div>
      <p className="text-gray-500 mt-2">Selected Option: {selected}</p>
    </div>
  );
};

export const RegionalStudy = ({ setPointsRegStudy }: any) => {
  const title =
    "Study in regional Australia. Do you have at least 1 degree, diploma or trade qualification from an Australian educational institution that satisfies the Australian study requirement obtained while living and studying in an eligible area of regional Australia?";
  const option1 = "Yes";
  const option2 = "No";

  const [selected, setSelected] = useState("None"); // Set an initial value

  const handleChange = (event: any) => {
    setSelected(event.target.value);
  };
  const [checkRegionalStudyYes, setCheckRegionalStudyYes] = useState(false);
  const [checkRegionalStudyNo, setCheckRegionalStudyNo] = useState(false);

  if (selected === option1) {
    setCheckRegionalStudyYes(true);
    setCheckRegionalStudyNo(false);
  }
  if (selected === option2) {
    setCheckRegionalStudyYes(false);
    setCheckRegionalStudyNo(true);
  }

  if (checkRegionalStudyYes) {
    setPointsRegStudy(5);
  }
  if (checkRegionalStudyNo) {
    setPointsRegStudy(0);
  }

  return (
    <div>
      <label className="block text-gray-700 text-xl font-bold mb-4">
        {title}
      </label>
      <div className="flex flex-col gap-2">
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="option"
            value={option1}
            checked={selected === option1}
            onChange={handleChange}
            className="hidden"
          />
          <div className="w-6 h-6 border border-gray-400 rounded-full flex items-center justify-center mr-2">
            {selected === option1 && (
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            )}
          </div>
          {option1}
        </label>
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="option"
            value={option2}
            checked={selected === option2}
            onChange={handleChange}
            className="hidden"
          />
          <div className="w-6 h-6 border border-gray-400 rounded-full flex items-center justify-center mr-2">
            {selected === option2 && (
              <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
            )}
          </div>
          {option2}
        </label>
      </div>
      <p className="text-gray-500 mt-2">Selected Option: {selected}</p>
    </div>
  );
};

export const ProfYear = ({ setPointsProfYear }: any) => {
  const title =
    "Professional year in Australia. Did you complete a professional year in Australia?";
  const option1 = "Yes";
  const option2 = "No";

  const [selected, setSelected] = useState("None"); // Set an initial value

  const handleChange = (event: any) => {
    setSelected(event.target.value);
  };
  const [checkProfYearYes, setCheckProfYearYes] = useState(false);
  const [checkProfYearNo, setCheckProfYearNo] = useState(false);

  if (selected === option1) {
    setCheckProfYearYes(true);
    setCheckProfYearNo(false);
  }
  if (selected === option2) {
    setCheckProfYearYes(false);
    setCheckProfYearNo(true);
  }

  if (checkProfYearYes) {
    setPointsProfYear(5);
  }
  if (checkProfYearNo) {
    setPointsProfYear(0);
  }

  return (
    <div>
      <label className="block text-gray-700 text-xl font-bold mb-4">
        {title}
      </label>
      <div className="flex flex-col gap-2">
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="option"
            value={option1}
            checked={selected === option1}
            onChange={handleChange}
            className="hidden"
          />
          <div className="w-6 h-6 border border-gray-400 rounded-full flex items-center justify-center mr-2">
            {selected === option1 && (
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            )}
          </div>
          {option1}
        </label>
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="option"
            value={option2}
            checked={selected === option2}
            onChange={handleChange}
            className="hidden"
          />
          <div className="w-6 h-6 border border-gray-400 rounded-full flex items-center justify-center mr-2">
            {selected === option2 && (
              <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
            )}
          </div>
          {option2}
        </label>
      </div>
      <p className="text-gray-500 mt-2">Selected Option: {selected}</p>
    </div>
  );
};

export const Naati = ({ setPointsNaati }: any) => {
  const title =
    "Credentialled community language (NAATI). Have you been accredited at the paraprofessional level or above, certified at the certified provisional level or above, or have a community language credential for interpreting or translating by the National Accreditation Authority for Translators and Interpreters?";
  const option1 = "Yes";
  const option2 = "No";

  const [selected, setSelected] = useState("None"); // Set an initial value

  const handleChange = (event: any) => {
    setSelected(event.target.value);
  };
  const [checkNaatiYes, setCheckNaatiYes] = useState(false);
  const [checkNaatiNo, setCheckNaatiNo] = useState(false);

  if (selected === option1) {
    setCheckNaatiYes(true);
    setCheckNaatiNo(false);
  }
  if (selected === option2) {
    setCheckNaatiYes(false);
    setCheckNaatiNo(true);
  }

  if (checkNaatiYes) {
    setPointsNaati(5);
  }
  if (checkNaatiNo) {
    setPointsNaati(0);
  }

  return (
    <div>
      <label className="block text-gray-700 text-xl font-bold mb-4">
        {title}
      </label>
      <div className="flex flex-col gap-2">
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="option"
            value={option1}
            checked={selected === option1}
            onChange={handleChange}
            className="hidden"
          />
          <div className="w-6 h-6 border border-gray-400 rounded-full flex items-center justify-center mr-2">
            {selected === option1 && (
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            )}
          </div>
          {option1}
        </label>
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="option"
            value={option2}
            checked={selected === option2}
            onChange={handleChange}
            className="hidden"
          />
          <div className="w-6 h-6 border border-gray-400 rounded-full flex items-center justify-center mr-2">
            {selected === option2 && (
              <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
            )}
          </div>
          {option2}
        </label>
      </div>
      <p className="text-gray-500 mt-2">Selected Option: {selected}</p>
    </div>
  );
};

export const PartnerSkills = ({ setPointsPartner }: any) => {
  const title = "Select the relevant partner skills qualifications.";
  const option1 =
    "Your spouse or de facto partner must also be an applicant for this visa and meet age, English and skill criteria";
  const option2 =
    "Your spouse or de facto partner must also be an applicant for this visa and has competent English";
  const option3 =
    "You are single or your partner is an Australian citizen or permanent resident";

  const [selected, setSelected] = useState("None"); // Set an initial value

  const handleChange = (event: any) => {
    setSelected(event.target.value);
  };
  const [partnerSkill, setPartnerSkill] = useState(false);
  const [partnerEng, setPartnerEng] = useState(false);
  const [partnerNo, setPartnerNo] = useState(false);

  if (selected === option1) {
    setPartnerSkill(true);
    setPartnerEng(false);
    setPartnerNo(false);
  }
  if (selected === option2) {
    setPartnerSkill(false);
    setPartnerEng(true);
    setPartnerNo(false);
  }
  if (selected === option3) {
    setPartnerSkill(false);
    setPartnerEng(false);
    setPartnerNo(true);
  }

  if (partnerSkill) {
    setPointsPartner(10);
  }
  if (partnerEng) {
    setPointsPartner(5);
  }
  if (partnerNo) {
    setPointsPartner(10);
  }

  return (
    <div>
      <label className="block text-gray-700 text-xl font-bold mb-4">
        {title}
      </label>
      <div className="flex flex-col gap-2">
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="option"
            value={option1}
            checked={selected === option1}
            onChange={handleChange}
            className="hidden"
          />
          <div className="w-6 h-6 border border-gray-400 rounded-full flex items-center justify-center mr-2">
            {selected === option1 && (
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            )}
          </div>
          {option1}
        </label>
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="option"
            value={option2}
            checked={selected === option2}
            onChange={handleChange}
            className="hidden"
          />
          <div className="w-6 h-6 border border-gray-400 rounded-full flex items-center justify-center mr-2">
            {selected === option2 && (
              <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
            )}
          </div>
          {option2}
        </label>
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="option"
            value={option3}
            checked={selected === option3}
            onChange={handleChange}
            className="hidden"
          />
          <div className="w-6 h-6 border border-gray-400 rounded-full flex items-center justify-center mr-2">
            {selected === option3 && (
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            )}
          </div>
          {option3}
        </label>
      </div>
      <p className="text-gray-500 mt-2">Selected Option: {selected}</p>
    </div>
  );
};

export const Nomination = ({ setPointsNomination }: any) => {
  const title =
    "Have you been invited to apply for a Skilled Nominated visa (subclass 190)  and the nominating State or Territory government agency has not withdrawn the nomination?";
  const option1 = "Yes";
  const option2 = "No";

  const [selected, setSelected] = useState("None"); // Set an initial value

  const handleChange = (event: any) => {
    setSelected(event.target.value);
  };
  const [checkNominationYes, setCheckNominationYes] = useState(false);
  const [checkNominationNo, setCheckNominationNo] = useState(false);

  if (selected === option1) {
    setCheckNominationYes(true);
    setCheckNominationNo(false);
  }
  if (selected === option2) {
    setCheckNominationYes(false);
    setCheckNominationNo(true);
  }

  if (checkNominationYes) {
    setPointsNomination(5);
  }
  if (checkNominationNo) {
    setPointsNomination(0);
  }

  return (
    <div>
      <label className="block text-gray-700 text-xl font-bold mb-4">
        {title}
      </label>
      <div className="flex flex-col gap-2">
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="option"
            value={option1}
            checked={selected === option1}
            onChange={handleChange}
            className="hidden"
          />
          <div className="w-6 h-6 border border-gray-400 rounded-full flex items-center justify-center mr-2">
            {selected === option1 && (
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            )}
          </div>
          {option1}
        </label>
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="option"
            value={option2}
            checked={selected === option2}
            onChange={handleChange}
            className="hidden"
          />
          <div className="w-6 h-6 border border-gray-400 rounded-full flex items-center justify-center mr-2">
            {selected === option2 && (
              <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
            )}
          </div>
          {option2}
        </label>
      </div>
      <p className="text-gray-500 mt-2">Selected Option: {selected}</p>
    </div>
  );
};

export const Sponsor491 = ({ setPointsSponsor491 }: any) => {
  const title = "Have you been nominated or sponsored to apply for this visa?";
  const option1 =
    "You were invited to apply for a Skilled Work Regional (Provisional) visa because you were nominated and the nominating State or Territory government agency has not withdrawn that nomination";
  const option2 =
    "You are being sponsored for a Skilled Work Regional (Provisional) visa by a family member and the Minister has accepted that sponsorship";
  const option3 = "Not Applicable";

  const [selected, setSelected] = useState("None"); // Set an initial value

  const handleChange = (e: any) => {
    setSelected(e.target.value);
  };
  const [nominated, setNominated] = useState(false);
  const [sponsored, setSponsored] = useState(false);
  const [noneApp, setNonApp] = useState(false);

  if (selected === option1) {
    setNominated(true);
    setSponsored(false);
    setNonApp(false);
  }
  if (selected === option2) {
    setNominated(false);
    setSponsored(true);
    setNonApp(false);
  }
  if (selected === option3) {
    setNominated(false);
    setSponsored(false);
    setNonApp(true);
  }

  if (nominated) {
    setPointsSponsor491(15);
  }
  if (sponsored) {
    setPointsSponsor491(15);
  }
  if (noneApp) {
    setPointsSponsor491(0);
  }

  return (
    <div>
      <label className="block text-gray-700 text-xl font-bold mb-4">
        {title}
      </label>
      <div className="flex flex-col gap-2">
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="option"
            value={option1}
            checked={selected === option1}
            onChange={handleChange}
            className="hidden"
          />
          <div className="w-6 h-6 border border-gray-400 rounded-full flex items-center justify-center mr-2">
            {selected === option1 && (
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            )}
          </div>
          {option1}
        </label>
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="option"
            value={option2}
            checked={selected === option2}
            onChange={handleChange}
            className="hidden"
          />
          <div className="w-6 h-6 border border-gray-400 rounded-full flex items-center justify-center mr-2">
            {selected === option2 && (
              <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
            )}
          </div>
          {option2}
        </label>
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="option"
            value={option3}
            checked={selected === option3}
            onChange={handleChange}
            className="hidden"
          />
          <div className="w-6 h-6 border border-gray-400 rounded-full flex items-center justify-center mr-2">
            {selected === option3 && (
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            )}
          </div>
          {option3}
        </label>
      </div>
      <p className="text-gray-500 mt-2">Selected Option: {selected}</p>
    </div>
  );
};

export const Result189 = ({
  pointsAge,
  pointsEng,
  pointsOVemp,
  pointsAUemp,
  pointsEdu,
  pointsSepcEdu,
  pointsAusStudy,
  pointsRegStudy,
  pointsProfYear,
  pointsNaati,
  pointsPartner,
}: any) => {
  const totalPoints =
    0 |
    (pointsAge +
      pointsEng +
      pointsOVemp +
      pointsAUemp +
      pointsEdu +
      pointsSepcEdu +
      pointsAusStudy +
      pointsRegStudy +
      pointsProfYear +
      pointsNaati +
      pointsPartner);

  return (
    <div className="bg-[#2d2a2e] w-[80vw] max-w-[768px] rounded-md shadow-md">
      <div className="flex text-white flex-col items-center justify-center">
        Your total points is <p>{totalPoints}</p>
      </div>
      {/* ... other code ... */}
    </div>
  );
};

export const Result190 = ({
  pointsAge,
  pointsEng,
  pointsOVemp,
  pointsAUemp,
  pointsEdu,
  pointsSepcEdu,
  pointsAusStudy,
  pointsRegStudy,
  pointsProfYear,
  pointsNaati,
  pointsPartner,
  pointsNomination,
}: any) => {
  const totalPoints =
    0 |
    (pointsAge +
      pointsEng +
      pointsOVemp +
      pointsAUemp +
      pointsEdu +
      pointsSepcEdu +
      pointsAusStudy +
      pointsRegStudy +
      pointsProfYear +
      pointsNaati +
      pointsPartner +
      pointsNomination);

  return (
    <div className="bg-[#2d2a2e] w-[80vw] max-w-[768px] rounded-md shadow-md">
      <div className="flex text-white flex-col items-center justify-center">
        Your total points is <p>{totalPoints}</p>
      </div>
      {/* ... other code ... */}
    </div>
  );
};

export const Result491 = ({
  pointsAge,
  pointsEng,
  pointsOVemp,
  pointsAUemp,
  pointsEdu,
  pointsSepcEdu,
  pointsAusStudy,
  pointsRegStudy,
  pointsProfYear,
  pointsNaati,
  pointsPartner,
  pointsSponsor491,
}: any) => {
  const totalPoints =
    0 |
    (pointsAge +
      pointsEng +
      pointsOVemp +
      pointsAUemp +
      pointsEdu +
      pointsSepcEdu +
      pointsAusStudy +
      pointsRegStudy +
      pointsProfYear +
      pointsNaati +
      pointsPartner +
      pointsSponsor491);

  return (
    <div className="bg-[#2d2a2e] w-[80vw] max-w-[768px] rounded-md shadow-md">
      <div className="flex text-white flex-col items-center justify-center">
        Your total points is <p>{totalPoints}</p>
      </div>
    </div>
  );
};
