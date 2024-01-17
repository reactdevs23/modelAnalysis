import React from "react";
import Header from "../Header/Header";
import { rightArrow } from "../../images/image";

const ErrorSlices = ({ data }) => {
  return (
    <div className="px-10 -mt-[320px] -ml-[25px] relative z-50">
      <div className="rounded-xl bg-white relative w-[480px]">
        <div className="border-[3px] border-solid border-blue-800 rounded-xl">
          <Header title="Error slices" />
          <div className="p-5">
            {data.map((el, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-xl pb-3 mb-5"
              >
                <div className="flex items-center justify-between border-b py-2 px-5 border-gray-200">
                  <h5 className="text-lg font-bold">{el.heading}</h5>
                  <span className="text-lg font-medium font-Poppins">
                    {el.percentage}
                  </span>
                </div>
                <div className="px-5">
                  <p className="text-gray-600 font-medium text-base font-Poppins pt-4 pb-3">
                    {el.info}
                  </p>
                  <a
                    href={el.example.to}
                    className="text-blue-700 text-lg font-semibold"
                  >
                    <img
                      src={rightArrow}
                      className="inline-block mr-3 w-4"
                      alt=""
                    />
                    <span>View {el.example.totalExample} examples</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorSlices;
