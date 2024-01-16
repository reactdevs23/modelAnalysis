import ErrorSlices from "./components/ErrorSlices/ErrorSlices";
import ModelAnalysis1 from "./components/ModelAnalysis1/ModelAnalysis1";
import ModelAnalysis2 from "./components/ModelAnalysis2/ModelAnalysis2";
import { shape2 } from "./images/image";

function App() {
  return (
    <>
      <section className="py-[38px] relative">
        <div className="max-w-[800px] w-full mx-auto px-3 relative z-20">
          <div className="flex justify-center -mx-10">
            <ModelAnalysis1 />

            <ModelAnalysis2 />
          </div>{" "}
          <ErrorSlices />
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full max-w-[1080px]">
          <img src={shape2} alt="" className="w-full" />
        </div>
      </section>
    </>
  );
}

export default App;
