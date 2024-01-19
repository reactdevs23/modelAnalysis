import React from "react";
import ModelAnalysis1 from "../ModelAnalysis1/ModelAnalysis1";
import ModelAnalysis2 from "../ModelAnalysis2/ModelAnalysis2";
import ErrorSlices from "../ErrorSlices/ErrorSlices";
import Shape from "../Shape";

const MainComponent = ({
  modelAnalysis1,
  modelAnalysis2,
  errorSlices,
  bgShapeColor,
}) => {
  return (
    <>
      <section className="py-[38px] relative min-h-screen	 flex flex-col justify-center">
        <div className="max-w-[800px] w-full mx-auto px-3 relative z-20">
          <div className="flex justify-center -mx-10">
            {modelAnalysis1 && <ModelAnalysis1 {...modelAnalysis1} />}

            {modelAnalysis2 && <ModelAnalysis2 {...modelAnalysis2} />}
          </div>{" "}
          {errorSlices && <ErrorSlices data={errorSlices} />}
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full max-w-[1080px]">
          <Shape bgShapeColor={bgShapeColor} />
        </div>
      </section>
    </>
  );
};

export default MainComponent;
