import React, { useState } from "react";
import DropDown from "../../Dropdown/Dropdown";

const ModelPrediction = ({ modelVersions, modelPrediction, bg }) => {
  const [currentItem, setCurrentItem] = useState(modelVersions[0]);

  return (
    <div className={[" rounded-lg ", bg && bg].join(" ")}>
      <div className="flex items-center justify-between">
        <div className="w-[60%]">
          <DropDown
            dropdownItems={modelVersions}
            currentItem={currentItem}
            setCurrentItem={setCurrentItem}
          />
        </div>
        <div className="w-[40%] pl-5">
          <ul className="flex items-center justify-end gap-4">
            {modelPrediction.icons.filterIcon && (
              <li>
                <a href="#/">
                  <img
                    src={modelPrediction.icons.filterIcon}
                    className="w-5"
                    alt=""
                  />
                </a>
              </li>
            )}
            {modelPrediction.icons.refreshIcon && (
              <li>
                <a href="#/">
                  <img
                    src={modelPrediction.icons.refreshIcon}
                    className="w-5"
                    alt=""
                  />
                </a>
              </li>
            )}
            {modelPrediction.icons.downloadIcon && (
              <li>
                <a href="#/">
                  <img
                    src={modelPrediction.icons.downloadIcon}
                    className="w-5"
                    alt=""
                  />
                </a>
              </li>
            )}
            {modelPrediction.icons.shareIcon && (
              <li>
                <a href="#/">
                  <img
                    src={modelPrediction.icons.shareIcon}
                    className="w-5"
                    alt=""
                  />
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="max-w-[380px] ml-auto pb-5 pt-5">
        <h5 className="text-sm font-semibold text-center text-gray-500">
          {modelPrediction.label}
        </h5>
        <div className="flex flex-wrap items-start justify-between">
          <div className="w-1/2">
            <p className="text-center text-sm text-gray-500 font-bold pb-3 pt-2">
              {modelPrediction.incorectPrediction.label}
            </p>
            {modelPrediction.incorectPrediction.details.map((el, i) => (
              <div
                key={i}
                className=" py-5 pl-7"
                // bg-pink-200
                style={{ background: el.color }}
              >
                <span className="text-sm font-bold text-gray-600">{el.id}</span>
                <p className="text-sm font-bold pt-1 text-gray-500">
                  {el.suggestion.label}
                  <br />
                  {el.suggestion.info}
                </p>
              </div>
            ))}
          </div>
          <div className="w-1/2">
            <p className="text-center text-sm text-gray-500 font-bold pb-3 pt-2">
              {modelPrediction.correctPrediction.label}
            </p>
            {modelPrediction.correctPrediction.details.map((el, i) => (
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

export default ModelPrediction;
