import React, { useState } from "react";
import DropDown from "../../Dropdown/Dropdown";
import {
  arrowUpRightFromSquareSolid,
  download,
  filter,
  refresh,
} from "../../../images/image";
const Versions = () => {
  const [currentItem, setCurrentItem] = useState("Clarity Matrix");
  const dropdownItems = [
    "Clarity Matrix",
    "Model-1476",
    "Model-1477",
    "Model-1478",
  ];
  const modelPrediction = {
    incorect: [
      { id: 15, suggestion: "Refine Exiting LFs", color: "#fbcfe8" },
      { id: 0, suggestion: "Refine Model", color: "#e5e7eb" },
      { id: 8, suggestion: "Write new LFs", color: "#fbcfe8" },
    ],
    correct: [
      { id: 4, info: "Model corrects incorrect LF outputs", color: "#bfdbfe" },
      { id: 69, info: "Model fits to correct LF outputs", color: "#a4cafe" },
      { id: 4, info: "Model generalizes beyond LFs", color: "#bfdbfe" },
    ],
  };
  return (
    <div className=" rounded-lg bg-gray-50 ">
      <div className="flex items-center justify-between">
        <div className="w-[60%]">
          <DropDown
            dropdownItems={dropdownItems}
            currentItem={currentItem}
            setCurrentItem={setCurrentItem}
          />
        </div>
        <div className="w-[40%] pl-5">
          <ul className="flex items-center justify-between">
            <li>
              <a href="#/">
                <img src={filter} className="w-5" alt="" />
              </a>
            </li>
            <li>
              <a href="#/">
                <img src={refresh} className="w-5" alt="" />
              </a>
            </li>
            <li>
              <a href="#/">
                <img src={download} className="w-5" alt="" />
              </a>
            </li>
            <li>
              <a href="#/">
                <img src={arrowUpRightFromSquareSolid} className="w-5" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-[380px] ml-auto pb-5 pt-5">
        <h5 className="text-sm font-semibold text-center text-gray-500">
          Model prediction
        </h5>
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-1/2">
            <p className="text-center text-sm text-gray-500 font-bold pb-3 pt-2">
              Incorrect
            </p>
            {modelPrediction.incorect.map((el, i) => (
              <div
                key={i}
                className=" py-5 pl-7"
                // bg-pink-200
                style={{ background: el.color }}
              >
                <span className="text-sm font-bold text-gray-600">{el.id}</span>
                <p className="text-sm font-bold pt-1 text-gray-500">
                  Suggestion:
                  <br />
                  {el.suggestion}
                </p>
              </div>
            ))}
          </div>
          <div className="w-1/2">
            <p className="text-center text-sm text-gray-500 font-bold pb-3 pt-2">
              correct
            </p>
            {modelPrediction.correct.map((el, i) => (
              <div
                key={i}
                className=" py-5 pl-7"
                style={{ background: el.color }}
              >
                {/* bg-blue-200 */}
                <span className="text-sm font-bold text-gray-600">{el.id}</span>
                <p className="text-sm font-bold pt-1 text-gray-500">
                  {el.info}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Versions;
