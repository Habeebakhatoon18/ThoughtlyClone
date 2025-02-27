
import React from "react";
import { motion } from "framer-motion";

const pageTwo = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex md:flex-col md:5 items-center justify-center p-6" style={{ fontFamily: "'Whyte', sans-serif" }}>
      {/* Hero Section */}
      <motion.div
        className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="md:self-end">
          <p className="text-green-600 text-xs font-semibold uppercase tracking-wide">
            Inbound and outbound phone calls
          </p>
          <h1 className="text-4xl font-bold mt-2 leading-tight "style={{ fontFamily: "'Whyte', sans-serif" }}>
            From "Hello" to handled in a few clicks.
          </h1>
          <p className="text-gray-600 mt-4">
            Thoughtly agents expertly handle inbound and outbound calls related to customer service, sales, and marketing. Build your agent yourself or let us assist you in creating the perfect agent to meet your needs.
          </p>
        </div>

        {/* Speech Card */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-black p-5 font-semibold self-start">🔊 Speak</div>
          <p className="mt-3 text-gray-600">
            "Hello <span className="text-blue-500 font-medium">{`{api.name}`}</span>, is your email address still <span className="text-blue-500 font-medium">{`{api.email}`}</span>?"
          </p>
          <div className="flex w-full justify-between p-5 pb-1 text-gray-400">
            <div>yes</div>
            <div>No new Email</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Staggered Cards Section */}
      <div className="max-w-6xl w-full md:h-full mt-20 grid md:grid-cols-2 gap-10 items-start">
        {/* Left Card - A/B Test */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg relative top-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-3">
            <span className="bg-yellow-300 p-2 rounded-lg border-gray-300">✂️</span>
            <h3 className="text-xl font-bold">A/B Test</h3>
          </div>
          <p className="mt-3 text-gray-600">
            Great <span className="text-blue-500 font-medium">{`{name}`}</span>, let's get you in the system and I'll route you to the right place!
          </p>
          <div className="mt-4 p-4 border border-gray-300 rounded-lg">
            <h4 className="font-semibold">Conversion Analytics ↗</h4>
            <div className="mt-2">
              <p className="text-gray-600 text-sm">FLOW 1</p>
              <div className="w-full bg-gray-200 h-4 rounded-full">
                <div className="bg-blue-500 h-full rounded-full text-xs text-white text-center" style={{ width: "82%" }}>
                  82%
                </div>
              </div>
            </div>
            <div className="mt-2">
              <p className="text-gray-600 text-sm">FLOW 2</p>
              <div className="w-full bg-gray-200 h-4 rounded-full">
                <div className="bg-green-500 h-full border-gray-300 rounded-full text-xs text-white text-center" style={{ width: "34%" }}>
                  34%
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Action Card */}
        <motion.div
          className="bg-white p-6 rounded-lg border-gray-300 shadow-lg relative top-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-3 p-5">
            <span className="bg-orange-300 p-2 border-gray-300 rounded-lg">🔌</span>
            <h3 className="text-xl font-bold">Action</h3>
          </div>
          <div className="mt-3 p-4 border border-gray-300 rounded-lg">
            <h4 className="font-semibold flex items-center"><span className="mr-2">🔗</span>Webhook</h4>
            <div className="mt-2">
              <p className="text-gray-600 text-sm">Event</p>
              <div className="w-full bg-gray-200 p-2 border-gray-300 rounded-lg">POST</div>
            </div>
            <div className="mt-2">
              <p className="text-gray-600 text-sm">URL</p>
              <div className="w-full bg-gray-200 p-2 border-gray-300 rounded-lg text-sm overflow-hidden">
                https://my-api.com/user-id%20-22...
              </div>
            </div>
          </div>
        </motion.div>
<motion.div></motion.div>
        {/* Right Card - Analytics Text */}
        <motion.div
          className=" self-end mt-5"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-green-600 font-semibold uppercase tracking-wide">A data-driven approach</p>
          <h2 className="text-3xl font-bold mt-2 leading-tight">
            Analytics that tell <br />
            <span className="text-gray-800">your customer’s story</span>
          </h2>
          <p className="text-gray-600 mt-4">
            Empower your decision-making with comprehensive analytics, detailed reports, and A/B testing. Thoughtly provides real-time data visualization and performance metrics, enabling you to optimize communication strategies, understand customer behavior, and drive conversions more effectively.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default pageTwo;
