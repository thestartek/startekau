"use client";
import { DropDownProps } from "@/types";
import { useState } from "react";

const DropDown = ({
  title,
  option1,
  option2,
  option3,
  option4,
}: DropDownProps) => {
  const [selected, setSelected] = useState("Select an option"); // Set an initial value
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleChange = (option: string) => {
    setSelected(option);
    setIsDropdownOpen(false);
  };

  const isOptionSelected = (option: string) => selected === option;

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

export default DropDown;
