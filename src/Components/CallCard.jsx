import React from "react";

const CallCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md flex gap-2 transform transition-all duration-300 hover:shadow-3xl">
      <div className="relative overflow-hidden rounded-lg mb-4 group">
        <img
          src="static/call-widget.webp"
          alt="Call center agent"
          className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="space-y-4">
        <div className="flex  justify-center flex-col gap-3 items-center space-x-2">
          <div className="w-8 h-8 bg-[#2ECC71] rounded-full flex  items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <a href="tel:+18557170250" className="text-xl font-medium hover:text-[#2ECC71] transition-colors">
            +1 (855) 717-0250
          </a>
          <div className="text-sm text-gray-500 uppercase tracking-wider">
          INCOMING CALL
        </div>
        <div className="relative h-8 w-full">
          <img src="../public/callLines.png" alt="" />
        </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default CallCard;