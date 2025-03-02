import { useState } from "react";
import CallButton from "./CallButton";



export default function CommunicationRevolution() {
  const [email, setEmail] = useState("");

  return (
    <div className="bg-gray-50 min-h-screen flex  items-center px-4 md:px-12">
      <div className="max-w-4xl text-center pt-20">
        <h1 className="text-6xl md:text-8xl font-semibold text-gray-900 leading-tight" style={{ fontFamily: "'Whyte', sans-serif" }}>
          Join the <br className="hidden md:block" /> communication revolution.
        </h1>
        
        </div>
        <div className="flex  flex-col md:max-w-1/2 items-center justify-end gap-2 mt-6">
        <p className="text-gray-600 mt-4 md:max-w-1/2 text-lg">
          Slash your costs and transform your customer experience. The generative AI revolution is here.
          Don't get left behind.
        </p>
          <CallButton/>
        </div>
      
      
       
    </div>
  );
}
