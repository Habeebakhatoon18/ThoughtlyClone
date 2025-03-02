import React, { useState } from "react";

const sectors = [
  { name: "Healthcare", content: "Our AI voice agents automate complex processes from new patient intake and appointment scheduling to outbound claim status calls. With Thoughtly, you'll reduce your labor costs, free up nurses, and deliver superior member service with AI that understands the nuances of the healthcare industry.",img:"../public/static/healthcare.jpg" },

  { name: "Real Estate", content: "Selling your customers that dream condo or beach home has never been easier. Our AI agents instantly respond to every inquiry, re-engage with previous leads, and schedule showings at a scale previously unimaginable. With Thoughtly, you'll connect your buyers to the most powerful and human-like conversational technology on the market." ,img:"../public/static/retail.png"},

  { name: "Insurance", content: "Our AI agents streamline member interactions by assisting your members with filing new claims, checking their claim status, answer coverage and benefit questions, and modifying and updating their policies. With Thoughtly you'll deliver superior member service and make data-driven decisions faster than ever before.",img:"../public/static/insurance.png" },

  { name: "Legal", content: "Elevate your law practice with our AI-driven communication tool. Tailored for legal professionals, our AI Agents screen leads, welcome new clients, pencil in appointments, handle payments, pass along your messages with outbound calls, and do so much more! Boost productivity and client satisfaction." ,img:"../public/static/legal.png"},

  { name: "Services/Utilities", content: "Our AI voice agents intake and qualify new customers, schedule appointments and provide service status updates all on your behalf. With Thoughtly, you'll convert more leads, reduce labor costs and drive more revenue.",img:"../public/static/service.png" },

  { name: "Retail", content: "Our AI agents assist retail accounts by efficiently handling WISMO inquiries, cancellations, modifications, and FAQs, ensuring seamless customer support and satisfaction. They provide timely, accurate responses and manage a variety of customer needs, streamlining operations and enhancing the overall shopping experience." ,img:"../public/static/retail.png"},

  { name: "Travel/Hospitality", content: "Our AI agents assist travel and hospitality accounts by efficiently managing reservation confirmations, flight status updates, cancellations, modifications, and FAQs, ensuring seamless customer support and satisfaction. They provide timely, accurate responses to a variety of customer needs, streamlining operations and enhancing the overall travel experience." ,img:"../public/static/travel.png"},

  { name: "Government", content: "Delight constituents with our AI voice agents. Whether you are a PAC, campaign, or advocacy group looking to personalize interactions with voters or a Public Transit Authority looking to automate ride status and ride requests to hit speed to answer SLAs, Thoughtly is here to help!" ,img:"../public/static/gov.png"}
];

const InteractiveSectors = () => {
  const [selectedSector, setSelectedSector] = useState(sectors[7]);

  return (
    <>
    
      {/* Left Section - Image */}
      <div className="w-full bg-[#f6f6f4] md:flex space-y-6 px-10 py-6 items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold md:max-w-1/3 text-black">
          The future of customer <span className="text-green-400">interaction.</span>
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {sectors.map((sector) => (
            <button
              key={sector.name}
              className={`border rounded-lg hover:outline-green-400,img:"../" px-6 py-4 text-black font-medium flex items-center justify-between ${selectedSector.name === sector.name ? "border-green-400" : "border-gray-200"}`}
              onClick={() => setSelectedSector(sector)}
            >
              {sector.name}
              {selectedSector.name === sector.name && <span className="ml-2 w-2 h-2 bg-green-400 rounded-full"></span>}
            </button>
          ))}
        </div>
        </div>


        <div className="flex flex-col md:flex-row items-center justify-center  bg-[#f6f6f4] px-6">
      <div className="w-full md:w-1/3 flex flex-col gap-2 justify-center px-4">
        <img src={selectedSector.img} alt={selectedSector.name} className="rounded-lg shadow-lg" />
        <img className="self-end md:w-2/3" src="../sector.png" alt="" />
      </div>
      
      {/* Right Section - Content */}
      <div className="w-full md:w-1/3 p-6 space-y-6">
        
        
        <div className="bg-[#f6f6f4] p-6 rounded-lg ">
          <h2 className="text-xl font-semibold text-black">{selectedSector.name}</h2>
          <p className="text-gray-500 mt-2">{selectedSector.content}</p>
      </div>
      <div className="gap-5 rounded-xl p-5 flex flex-col bg-[#f1f1ee]">
      <img  className="md:w-2/3" src="../start.png" alt="start image" />
      <img className="md:w-2/3 self-end" src="../speak.png" alt="speak card" />
      </div>
      </div>
      </div>
    </>
  );
};

export default InteractiveSectors;
