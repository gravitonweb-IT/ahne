import React from "react";
import {
  AiFillAndroid,
  AiOutlineLaptop,
  AiOutlineNodeIndex,
} from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";

import { GiArtificialIntelligence } from "react-icons/gi";
import { BsFillDatabaseFill } from "react-icons/bs";

const Development = () => {
  return (
    <>
      <div className="bg-[#050b2a] text-white flex flex-col justify-center items-center h-80">
        <h1 className="text-3xl font-bold">Development</h1>

        <div className="flex items-center mt-4 font-medium">
          <h6 className="mr-2">Home</h6>

          <span className="h-1 w-1 rounded-full bg-white "></span>

          <h6 className="ml-2">Development</h6>
        </div>
      </div>

      {/* top heading */}
      <div>
        <h1 className="text-[#262566] font-bold text-4xl mt-20 text-center">
          Jobs and Placements
        </h1>
      </div>
      {/* top heading */}

      {/* content */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  mx-10 md:mx-20 lg:mx-32 mt-28">
        <div className="hover:bg-[#262566] hover:text-white shadow-lg p-12 rounded-lg overflow-hidden bg-white">
          <div className="flex justify-center text-sky-400">
            <FaLaptopCode className="h-[50px] w-[50px]  " />
          </div>

          <div className="text-center mt-5">
            <h2 className="text-2xl font-semibold mb-2 ">
              Frontend Development
            </h2>
            <p className=" text-xl mt-2 ">
              Make a career in Frontend Development
            </p>
          </div>
        </div>

        <div className="hover:bg-[#262566] hover:text-white shadow-lg p-12 rounded-lg overflow-hidden bg-white">
          <div className="flex justify-center text-sky-400">
            <AiOutlineLaptop className="h-[50px] w-[50px]" />
          </div>

          <div className="text-center mt-5">
            <h2 className="text-2xl font-semibold mb-2 ">
              Backend Development
            </h2>
            <p className=" text-xl mt-2">
              Make a career in Backend Development
            </p>
          </div>
        </div>
        <div className="hover:bg-[#262566] hover:text-white shadow-lg p-12 rounded-lg overflow-hidden bg-white">
          <div className="flex justify-center text-sky-400">
            <AiFillAndroid className="h-[50px] w-[50px] " />
          </div>

          <div className="text-center mt-5">
            <h2 className="text-2xl font-semibold mb-2 ">
              Android Development
            </h2>
            <p className=" text-xl mt-2">
              Make a career in Android Development
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  mx-10 md:mx-20 lg:mx-32 mt-28">
        <div className="hover:bg-[#262566] hover:text-white shadow-lg p-12 rounded-lg overflow-hidden bg-white">
          <div className="flex justify-center text-sky-400">
            <GiArtificialIntelligence className="h-[50px] w-[50px] " />
          </div>

          <div className="text-center mt-5">
            <h2 className="text-2xl font-semibold mb-2 ">
              Artificial Intelligence
            </h2>
            <p className=" text-xl mt-2">
              Make a career in Artificial Intelligence
            </p>
          </div>
        </div>

        <div className="hover:bg-[#262566] hover:text-white shadow-lg p-12 rounded-lg overflow-hidden bg-white">
          <div className="flex justify-center text-sky-400">
            <BsFillDatabaseFill className="h-[50px] w-[50px] " />
          </div>

          <div className="text-center mt-5">
            <h2 className="text-2xl font-semibold mb-2 ">Data Science</h2>
            <p className=" text-xl mt-2">Make a career in Data Science</p>
          </div>
        </div>
        <div className=" hover:bg-[#262566] hover:text-white shadow-lg p-12 rounded-lg overflow-hidden bg-white ">
          <div className="flex justify-center text-sky-400  ">
            <AiOutlineNodeIndex className="h-[50px] w-[50px] " />
          </div>

          <div className="text-center mt-5 " >
            <h2 className="text-2xl font-semibold mb-2 ">
              Fullstack Development
            </h2>
            <p className=" text-xl mt-2">
              Make a career in Fullstack Development
            </p>
          </div>
        </div>
      </div>

      {/* content */}
    </>
  );
};

export default Development;
