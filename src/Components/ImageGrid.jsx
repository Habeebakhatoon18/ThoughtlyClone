import React from 'react';
import Card from './Card';

const ImageGrid = () => {
  return (
    <>
      <div className='bg-[#f1f1ee] md:px-40 px-2'>
        <div className="flex flex-col md:flex-row items-center justify-center gap-1 ">
          {/* First Card */}
          <Card
            img="/static/f0.webp"
            heading="Appointment Scheduling"
            desc="Your Thoughtly agent syncs with your calendar, working alongside callers to pinpoint the perfect meeting time. Coordinate effortlessly."
          />
          {/* Second Card */}
          <Card
            img="/static/f1.webp"
            heading="Lead Qualification"
            desc="Every incoming call is an opportunity. Your Thoughtly agent will never miss a call from a potential lead, intuitively directing them to the ideal point of contact. Perfect routing, every time, ready to convert."
          />
        </div>
        
        <div className='grid grid-cols-1 gap-1 md:p-6 md:grid-cols-2 lg:grid-cols-3'>
          <div className=' col-span-1 w-full'>
            <Card 
              img="/static/f2.webp"
              heading="Analytics & Reporting"
              desc="Optimize your communication strategies by leveraging industry-leading analytics and data collection."
            />
          </div>
          <div className='w-full'>
            <Card
              img="/static/f3.webp"
              heading="Call Routing"
              desc="Build a human-like receptionist to route calls based on natural requests from your customers – all with zero hold time."
            />
          </div>
          <div className='md:row-span-2 w-full'>
            <Card
              img="/static/f4.webp"
              heading="Custom Knowledge Base"
              desc="Train your agent on hours of call recordings, unstructured text, and even your website."
              h="8"
              l="9"
            />
          </div>
          <div className="w-full md:col-span-2">
            <Card
              img="/static/f5.webp"
              heading="Built for your Tech Stack"
              desc="Arm your agents with advanced automation capabilities to authenticate callers quickly and resolve customer service issues seamlessly."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageGrid;
