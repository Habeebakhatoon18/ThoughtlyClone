import React from "react";
import Navbar from "./Navbar";
import CallCard from "./CallCard";
import CallButton from "./CallButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      
      
      <main className="container mx-auto px-6 pt-5 pb-20">
        <div className="flex  items-center">
          <div className="flex flex-col mr-30 gap-5 " style={{ fontFamily:" 'Whyte', sans-serif"}}>
            <h1 className="text-8xl tracking-tight leading-none mb-5 max-w-[300px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[600px]" >
              Never leave your business on hold.
            </h1>
            <p className="text-xl text-[#959393] leading-relaxed max-w-[200px] sm:max-w-[300px] md:max-w-[500px] lg:max-w-[400px] ">
              Deploy your fully-integrated AI call center starting at just 9 cents per minute. Build workflows around your CRM, and let your agents handle the rest.
            </p>
            <CallButton/>     
            </div>

          <div className="flex flex-col justify-center lg:justify-end">
            <CallCard />
            <img className="w-fit mt-10" src="../public/start.png" alt="Start-image" />
          </div>
          <div>
        <img src="../public/sidebar.png" className = "h-fit"alt="sidebar" />
        </div>
        </div>
        
      </main>
      
    </div>
  );
};

export default Index;