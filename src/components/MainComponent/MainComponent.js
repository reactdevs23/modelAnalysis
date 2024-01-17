import React from "react";
import ModelAnalysis1 from "../ModelAnalysis1/ModelAnalysis1";
import ModelAnalysis2 from "../ModelAnalysis2/ModelAnalysis2";
import ErrorSlices from "../ErrorSlices/ErrorSlices";

const MainComponent = ({
  modelAnalysis1,
  modelAnalysis2,
  errorSlices,
  shape,
}) => {
  return (
    <>
      <section className="py-[38px] relative">
        <div className="max-w-[800px] w-full mx-auto px-3 relative z-20">
          <div className="flex justify-center -mx-10">
            <ModelAnalysis1 {...modelAnalysis1} />

            <ModelAnalysis2 {...modelAnalysis2} />
          </div>{" "}
          <ErrorSlices data={errorSlices} />
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full max-w-[1080px]">
          <img src={shape} alt="" className="w-full" />
        </div>
      </section>
    </>
  );
};

export default MainComponent;
