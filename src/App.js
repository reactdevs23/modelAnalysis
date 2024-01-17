import React from "react";
import MainComponent from "./components/MainComponent/MainComponent";
import {
  arrowUpRightFromSquareSolid,
  chart,
  download,
  filter,
  info,
  refresh,
  shape2,
} from "./images/image";

function App() {
  const data = {
    modelAnalysis1: {
      title: "Modal analysis",
      modelVerision: {
        label: "Current model",
        versions: ["Model-1475", "Model-1476", "Model-1477", "Model-1478"],
      },
      devDropdown: {
        title: "Dev",
        dropdownItems: [
          { item: "Dashboard", to: "#" },
          { item: "Settings", to: "#" },
          { item: "Earnings", to: "#" },
          { item: "Sign out", to: "#" },
        ],
      },
      accuracyDropdown: {
        title: "Accuracy",
        dropdownItems: [
          { item: "Dashboard", to: "#" },
          { item: "Settings", to: "#" },
          { item: "Earnings", to: "#" },
          { item: "Sign out", to: "#" },
        ],
      },
      specification: {
        tableHeading: ["", "Dev", "Valid", "Test"],
        tableData: [
          { title: "Accuracy", dev: "95.7%", valid: "94.9%", test: "95.1%" },
          { title: "Recall", dev: "93.5%", valid: "89.7%", test: "90.0%" },
          { title: "F1", dev: "89.2", valid: "89.6", test: "87.2" },
        ],
      },
      versionInfo: {
        label: "Modal versions",
        icon: info,
      },
      scoreInfo: {
        label: "F1 Score",
        chart: chart,
      },
    },
    modelAnalysis2: {
      title: "Modal analysis",
      tabs: ["Model metrics", "Analysis tools", "Versions"],

      info: {
        modelMetrics: {
          modelVersions: [
            "Clarity Matrix",
            "Model-1476",
            "Model-1477",
            "Model-1478",
          ],
          modelPrediction: {
            label: "Model prediction",
            icons: {
              filterIcon: filter,
              refreshIcon: refresh,
              downloadIcon: download,
              shareIcon: arrowUpRightFromSquareSolid,
            },
            incorectPrediction: {
              label: "Incorrect",
              details: [
                {
                  id: 15,
                  suggestion: {
                    label: "Suggestion",
                    info: "Refine Exiting LFs",
                  },
                  color: "#fbcfe8",
                },
                {
                  id: 0,
                  suggestion: {
                    label: "Suggestion",
                    info: "Refine Model",
                  },
                  color: "#e5e7eb",
                },
                {
                  id: 8,
                  suggestion: {
                    label: "Suggestion",
                    info: "Write new LFs",
                  },

                  color: "#fbcfe8",
                },
              ],
            },
            correctPrediction: {
              label: "Correct",
              details: [
                {
                  id: 4,
                  info: "Model corrects incorrect LF outputs",
                  color: "#bfdbfe",
                },
                {
                  id: 69,
                  info: "Model fits to correct LF outputs",
                  color: "#a4cafe",
                },
                {
                  id: 4,
                  info: "Model generalizes beyond LFs",
                  color: "#bfdbfe",
                },
              ],
            },
          },
        },

        analysisTools: {
          modelVersions: [
            "Clarity Matrix",
            "Model-1476",
            "Model-1477",
            "Model-1478",
          ],
          modelPrediction: {
            label: "Model prediction",
            icons: {
              filterIcon: filter,
              refreshIcon: refresh,
              downloadIcon: download,
              shareIcon: arrowUpRightFromSquareSolid,
            },
            incorectPrediction: {
              label: "Incorrect",
              details: [
                {
                  id: 15,
                  suggestion: {
                    label: "Suggestion",
                    info: "Refine Exiting LFs",
                  },
                  color: "#fbcfe8",
                },
                {
                  id: 0,
                  suggestion: {
                    label: "Suggestion",
                    info: "Refine Model",
                  },
                  color: "#e5e7eb",
                },
                {
                  id: 8,
                  suggestion: {
                    label: "Suggestion",
                    info: "Write new LFs",
                  },

                  color: "#fbcfe8",
                },
              ],
            },
            correctPrediction: {
              label: "Correct",
              details: [
                {
                  id: 4,
                  info: "Model corrects incorrect LF outputs",
                  color: "#bfdbfe",
                },
                {
                  id: 69,
                  info: "Model fits to correct LF outputs",
                  color: "#a4cafe",
                },
                {
                  id: 4,
                  info: "Model generalizes beyond LFs",
                  color: "#bfdbfe",
                },
              ],
            },
          },
        },
        versions: {
          modelVersions: [
            "Clarity Matrix",
            "Model-1476",
            "Model-1477",
            "Model-1478",
          ],
          modelPrediction: {
            label: "Model prediction",
            icons: {
              filterIcon: filter,
              refreshIcon: refresh,
              downloadIcon: download,
              shareIcon: arrowUpRightFromSquareSolid,
            },
            incorectPrediction: {
              label: "Incorrect",
              details: [
                {
                  id: 15,
                  suggestion: {
                    label: "Suggestion",
                    info: "Refine Exiting LFs",
                  },
                  color: "#fbcfe8",
                },
                {
                  id: 0,
                  suggestion: {
                    label: "Suggestion",
                    info: "Refine Model",
                  },
                  color: "#e5e7eb",
                },
                {
                  id: 8,
                  suggestion: {
                    label: "Suggestion",
                    info: "Write new LFs",
                  },

                  color: "#fbcfe8",
                },
              ],
            },
            correctPrediction: {
              label: "Correct",
              details: [
                {
                  id: 4,
                  info: "Model corrects incorrect LF outputs",
                  color: "#bfdbfe",
                },
                {
                  id: 69,
                  info: "Model fits to correct LF outputs",
                  color: "#a4cafe",
                },
                {
                  id: 4,
                  info: "Model generalizes beyond LFs",
                  color: "#bfdbfe",
                },
              ],
            },
          },
        },
      },
    },
    errorSlices: [
      {
        heading: "Slice 1",
        percentage: "12.7%",
        info: "Low model confidence (margin distance > 0.5) + Similar data in an embedding cluster",
        example: {
          totalExample: 102,
          to: "#",
        },
      },
      {
        heading: "Slice 2",
        percentage: "12.7%",
        info: "Ground Truth = Employment, Model prediction = Services",
        example: {
          totalExample: 102,
          to: "#",
        },
      },
      {
        heading: "Slice 3",
        percentage: "11.3%",
        info: "Similar data in an embedding cluster",
        example: {
          totalExample: 91,
          to: "#",
        },
      },
    ],
    shape: shape2,
  };

  return <MainComponent {...data} />;
}

export default App;
