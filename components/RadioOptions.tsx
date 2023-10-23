import { DropDownProps } from "@/types";
import { useState } from "react";

const RadioOptions = ({ title, option1, option2, option3 }: DropDownProps) => {
  const [selected, setSelected] = useState("None"); // Set an initial value

  const handleChange = (event: any) => {
    setSelected(event.target.value);
  };

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

export default RadioOptions;
