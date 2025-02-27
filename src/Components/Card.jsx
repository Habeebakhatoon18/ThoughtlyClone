// import React from "react";
// const Card = ({ img, heading, desc, h, l }) => {
//     return (
//       <div className="w-full p-5 rounded-3xl">
//         {/* Background Image with Positioning */}
//         <div
//   className={`w-full rounded-lg  shadow-lg relative overflow-hidden ${h ? "md:h-200" : "md:h-100"}`}
//   style={{
//     backgroundImage: `url(${img})`,
//     backgroundSize: "cover",
//     backgroundPosition: `top ${l ? "left" : "right"}`,
//   }}
// >

//           {/* Text Content - Responsive Width */}
//           <div className="md:absolute bottom-4 left-4 text-white w-full max-w-[75%] sm:max-w-full drop-shadow-lg">
//             <h2 className="text-xl text-black font-semibold mb-3 md:w-1/3 sm:w-full">{heading}</h2>
//             <p className="text-sm md:w-3/4 sm:w-full text-[#959393]">{desc}</p>
//           </div>
//         </div>

//       </div>
//     );
//   };
//   export default Card;
import React from "react";

const Card = ({ img, heading, desc, h, l }) => {
  return (
    <div className="sm:w-full h-2/3 sm:h-auto p-5  rounded-3xl">
      {/* Background Image with Positioning */}
      <div
        className={`w-full rounded-lg shadow-lg relative overflow-hidden bg-cover ${l ? "sm:bg-left" : "bg-right"} ${h ? "md:h-200" : "md:h-100"}`}
        style={{ backgroundImage: `url(${img})` }}
      >
        {/* Text Content - Responsive Width */}
        <div className="md:absolute flex flex-col justify-end bottom-4 sm:h-auto h-[100vw] left-4 text-white w-full px-4">
          <h2 className="text-xl text-black font-semibold mb-3 w-full md:w-1/3">{heading}</h2>
          <p className="text-sm mb-3 text-[#959393] w-full md:w-3/4">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
