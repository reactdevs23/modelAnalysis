import React, { useState } from "react";
import DropDown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import DataTable from "./DataTable/DataTable";
import DevAndAccuracyDropDown from "./DevAndAccuracyDropDown/DevAndAccuracyDropDown";
import { chart, info } from "../../images/image";

const ModelAnalysis1 = () => {
  const [currentItem, setCurrentItem] = useState("Model-1475");

  const dropdownItems = [
    "Model-1475",
    "Model-1476",
    "Model-1477",
    "Model-1478",
  ];

  const data = [
    { heading: "Accuracy", dev: "95.7%", valid: "94.9%", test: "95.1%" },
    { heading: "Recall", dev: "93.5%", valid: "89.7%", test: "90.0%" },
    { heading: "F1", dev: "89.2", valid: "89.6", test: "87.2" },
  ];

  const devDropdownItems = [
    { item: "Dashboard", to: "#" },
    { item: "Settings", to: "#" },
    { item: "Earnings", to: "#" },
    { item: "Sign out", to: "#" },
  ];
  const accuracyDropdownItems = [
    { item: "Dashboard", to: "#" },
    { item: "Settings", to: "#" },
    { item: "Earnings", to: "#" },
    { item: "Sign out", to: "#" },
  ];
  return (
    <div className="px-10">
      <div className="rounded-xl bg-white relative w-[450px]">
        <div className="border-[3px] border-solid border-blue-800 rounded-xl">
          <Header title="Modal analysis" />

          <div className="flex items-center justify-start mb-3 px-5 pt-1">
            <label className="text-black font-normal font-Poppins text-base">
              Current model
            </label>
            <div className="text-black w-[155px]  font-normal font-Poppins text-base bg-transparent rounded-lg border-none  pl-0 focus:ring-0">
              <DropDown
                dropdownItems={dropdownItems}
                currentItem={currentItem}
                setCurrentItem={setCurrentItem}
                textSize="text-base"
              />
            </div>
          </div>
          <DataTable data={data} />
          <div>
            <div className="flex items-center justify-start px-5 pt-5 pb-2">
              <div className="flex items-center justify-center">
                <h4 className="font-semibold">Modal versions</h4>
                <img src={info} className="w-5 ml-2" alt="" />
              </div>
              <div>
                <div className="relative inline-block text-left pl-16">
                  <div className="flex items-center justify-between w-[200px]">
                    <DevAndAccuracyDropDown
                      title="Dev"
                      dropdownItems={devDropdownItems}
                      rightAlign
                    />
                    <DevAndAccuracyDropDown
                      title="Accuracy"
                      dropdownItems={accuracyDropdownItems}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="px-5">
              <p className="font-Poppins text-sm font-medium pb-2">F1 Score</p>
              <a href="#/">
                <img
                  src={chart}
                  className="w-full h-auto rounded-b rounded-xl"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelAnalysis1;
