import { useEffect } from "react";

export default function Calender() {
  useEffect(() => {
    // Dynamically load Elfsight script
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center text-sky-700">
        Events Calendar
      </h1>
      <div
        className="elfsight-app-92626549-a114-4759-9bda-7c3bdf2a9f86"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
}
