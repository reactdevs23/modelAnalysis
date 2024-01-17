import React, { useState } from "react";
import DropDown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import DataTable from "./DataTable/DataTable";
import DevAndAccuracyDropDown from "./DevAndAccuracyDropDown/DevAndAccuracyDropDown";

const ModelAnalysis1 = ({
  title,
  modelVerision,
  specification,
  devDropdown,
  accuracyDropdown,
  versionInfo,
  scoreInfo,
}) => {
  const [currentItem, setCurrentItem] = useState(modelVerision.versions[0]);

  return (
    <div className="px-10">
      <div className="rounded-xl bg-white relative w-[450px]">
        <div className="border-[3px] border-solid border-blue-800 rounded-xl">
          <Header title={title} />

          <div className="flex items-center justify-start mb-3 px-5 pt-1">
            <label className="text-black font-normal font-Poppins text-base">
              {modelVerision.label}
            </label>
            <div className="text-black w-[155px]  font-normal font-Poppins text-base bg-transparent rounded-lg border-none  pl-0 focus:ring-0">
              <DropDown
                dropdownItems={modelVerision.versions}
                currentItem={currentItem}
                setCurrentItem={setCurrentItem}
                textSize="text-base"
              />
            </div>
          </div>
          <DataTable {...specification} />
          <div>
            <div className="flex items-center justify-start px-5 pt-5 pb-2">
              <div className="flex items-center justify-center">
                <h4 className="font-semibold">{versionInfo.label}</h4>
                <img src={versionInfo.icon} className="w-5 ml-2" alt="" />
              </div>
              <div>
                <div className="relative inline-block text-left pl-16">
                  <div className="flex items-center justify-between w-[200px]">
                    <DevAndAccuracyDropDown
                      title={devDropdown.title}
                      dropdownItems={devDropdown.dropdownItems}
                    />
                    <DevAndAccuracyDropDown
                      title="Accuracy"
                      dropdownItems={accuracyDropdown.dropdownItems}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="px-5">
              <p className="font-Poppins text-sm font-medium pb-2">
                {scoreInfo.label}
              </p>
              <a href="#/">
                <img
                  src={scoreInfo.chart}
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
