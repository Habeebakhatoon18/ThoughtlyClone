import React, { useState } from "react";

const industries = [
  "Healthcare",
  "Real Estate",
  "Government",
  "Insurance",
  "Legal",
  "Services/Utilities",
  "Retail",
  "Travel/Hospitality",
];

const IndustrySelector = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("Healthcare");

  return (
    <section className="px-6 py-16 bg-gray-50">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-gray-900 text-center">
        The future of customer <span className="text-green-500">interaction.</span>
      </h2>

      {/* Industry Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {industries.map((industry) => (
          <button
            key={industry}
            onClick={() => setSelectedIndustry(industry)}
            className={`px-5 py-2 rounded-full border text-gray-700 text-sm transition ${
              selectedIndustry === industry
                ? "bg-white border-green-500 text-green-600 shadow-md"
                : "border-gray-300 bg-gray-100 hover:bg-white"
            }`}
          >
            {industry}
          </button>
        ))}
      </div>

      {/* Selected Industry Description */}
      <div className="mt-12 max-w-3xl mx-auto text-center">
        <h3 className="text-2xl font-semibold text-gray-900">{selectedIndustry}</h3>
        <p className="text-gray-600 mt-2">
          Our AI voice agents automate complex processes from new patient intake to appointment scheduling and outbound claim status calls. With Thoughtly, you'll reduce labor costs, free up staff, and deliver superior customer service.
        </p>
      </div>
    </section>
  );
};

export default IndustrySelector;
