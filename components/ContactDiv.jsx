import React from "react";

const ContactDiv = () => {
  return (
    <div className="bg-indigo-800 rounded-md min-h-[200px] w-[100%] p-4 flex flex-col md:flex-row justify-evenly items-center mt-20 font-roboto">
      {/* First nested div */}
      <div className="text-white font-bold text-xl p-4 rounded md:m-4 md:w-1/2 lg:w-1/3">
        <p>Have you any question? Ask Us anything, we’d love to answer!</p>
      </div>

      {/* Second nested div */}
      <div className="w-full md:w-auto">
        <button className="m-4 bg-white text-xl p-4 rounded-md w-full md:w-auto">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default ContactDiv;
