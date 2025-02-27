import React from 'react'

const CallButton = () => {
  return (
    
        <div className="flex outline-2 rounded-2xl outline-white p-3 hover:outline-green-400 items-center space-x-4 ">
              <input
                type="email"
                placeholder="What is your work email?"
                className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:border-[#2ECC71] transition-colors"
              />
              <button className="bg-green-400 text-black px-6 py-3 rounded-lg hover:bg-[#27ae60] transition-colors whitespace-nowrap">
                Get Started →
              </button>
            
          
    </div>
  )
}

export default CallButton