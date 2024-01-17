import React, { useState } from "react";

import Header from "../Header/Header";
import ModelPrediction from "./ModelPrediction/ModelPrediction";

const ModelAnalysis2 = ({ title, tabs, info }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="px-10 mt-28">
      <div className="rounded-xl bg-white relative w-[450px]">
        <div className="border-[3px] border-solid border-blue-800 rounded-xl">
          <Header title={title} />

          <div>
            <div className="flex flex-col items-center justify-start px-5">
              <div
                className="mb-4 border-b border-gray-200 w-full "
                // dark:border-gray-700
              >
                <ul className="flex flex-wrap gap-2 -mb-px  text-sm font-medium text-center">
                  {tabs.map((tab, i) => (
                    <li
                      className="me-2"
                      key={i}
                      onClick={() => setActiveTab(tab)}
                    >
                      <button
                        className={[
                          activeTab === tab
                            ? "inline-block p-4 pl-2  border-b-2 rounded-t-lg text-blue-600 border-blue-600"
                            : "inline-block p-4 pl-2    border-b-2 border-transparent rounded-t-lg text-gray-500 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300",
                        ].join(" ")}
                        type="button"
                        role="tab"
                      >
                        {tab}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full">
                {activeTab === "Model metrics" && (
                  <ModelPrediction {...info.modelMetrics} />
                )}
                {activeTab === "Analysis tools" && (
                  <ModelPrediction {...info.analysisTools} />
                )}
                {activeTab === "Versions" && (
                  <ModelPrediction {...info.versions} bg="bg-gray-50" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelAnalysis2;
