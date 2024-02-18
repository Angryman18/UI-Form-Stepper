import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);

  const defaultCircleStyle =
    "w-12 h-12 flex justify-center items-center font-bold text-2xl text-white rounded-full ";
  const defaultLine = "h-2 flex-1 my-auto ";

  const styler = (type, userStep) => {
    switch (type) {
      case "STEP":
        if (userStep <= step) {
          return defaultCircleStyle + "border-green-600 bg-green-600";
        } else return defaultCircleStyle + "border-sky-600 bg-sky-600";
      case "LINE":
        if (userStep < step) {
          return defaultLine + "bg-green-600";
        } else return defaultLine + "bg-sky-600";
      default:
        return null;
    }
  };

  return (
    <div className="block">
      <h1 className="text-2xl mx-auto w-40 font-semibold pt-4">Stepper Form</h1>
      <div className="w-1/3 min-w-[300px] mx-auto my-4">
        <div className="flex justify-between">
          <div className="w-full flex">
            <div className={styler("STEP", 1)}>{step > 1 ? "✓" : "1"}</div>
            <div className={styler("LINE", 1)}></div>
          </div>
          <div className="w-full flex">
            <div className={styler("STEP", 2)}>{step > 2 ? "✓" : "2"}</div>
            <div className={styler("LINE", 2)}></div>
          </div>
          <div className="w-full flex">
            <div className={styler("STEP", 3)}>{step > 3 ? "✓" : "3"}</div>
            <div className={styler("LINE", 3)}></div>
          </div>
          <div className="w-full flex">
            <div className={styler("STEP", 4)}>{step > 4 ? "✓" : "4"}</div>
          </div>
        </div>
      </div>
      <button
        onClick={() => setStep(step + 1)}
        className=" outline-none text-white py-1 px-4 rounded-lg bg-slate-600 hover:opacity-90f duration-75 block mx-auto"
      >
        forward Step
      </button>
    </div>
  );
}

export default App;
