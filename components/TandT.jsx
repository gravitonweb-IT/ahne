import React from "react";
import Dubai from "../assets/images/Dubai.jpg";
import Maldives from "../assets/images/Maldives.jpg";

const TandT = () => {
  return (
    <>
      <div className="bg-[#050b2a] text-white flex flex-col justify-center items-center h-80">
        <h1 className="text-3xl font-bold">Tour and Travel</h1>

        <div className="flex items-center mt-4 font-medium">
          <h6 className="mr-2">Home</h6>

          <span className="h-1 w-1 rounded-full bg-white "></span>

          <h6 className="ml-2">Tour and Travel</h6>
        </div>
      </div>

      {/* top row */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  mx-10 md:mx-20 lg:mx-32 mt-28">
        <div>
          <img src={Dubai} className="w-full h-auto"></img>

          <div className="p-8 shadow-2xl">
            <ul className="flex space-x-4">
              <li className="text-[#12b48b]">10 April 2020</li>

              <li className="text-[#12b48b]">Amazing Dubai</li>
            </ul>

            <h3 className="text-[#204066] text-xl mt-4 mb-4 font-bold">
              Destination Beyond Belief
            </h3>
          </div>
        </div>

        <div>
          <img src={Maldives} className="w-full h-auto"></img>

          <div className="p-8 shadow-2xl">
            <ul className="flex space-x-4">
              <li className="text-[#12b48b]">10 April 2020</li>

              <li className="text-[#12b48b]">Andamans</li>
            </ul>

            <h3 className="text-[#204066] text-xl mt-4 mb-4 font-bold">
              Serene Surrounding
            </h3>
          </div>
        </div>

        <div>
          <img src={Maldives} className="w-full h-auto"></img>

          <div className="p-8 shadow-2xl">
            <ul className="flex space-x-4">
              <li className="text-[#12b48b]">10 April 2020</li>

              <li className="text-[#12b48b]">Maldives</li>
            </ul>

            <h3 className="text-[#204066] text-xl mt-4 mb-4 font-bold">
              One stop Destination
            </h3>
          </div>
        </div>
      </div>

      {/* top row */}

      {/* international */}
      <div className=" mt-28 grid lg:grid-cols-2  mx-10 md:mx-20 lg:mx-32">
        <div>
          <h1 className="text-2xl text-blue-500 font-bold">
            International Holiday Packages
          </h1>
          <p className=" text-xl font-semibold  ">
            Whether it’s your first international trip or you have travelled
            abroad multiple times, planning a holiday to a distant land is
            always a special feeling. Our international holiday packages are
            well-made and hold a high reputation among customers who have been
            travelling with us.
          </p>
        </div>
        <div className="pl-0 md:pl-28 lg:pl-32  mt-12 md:mt-0 lg:mt-0">
          <img
            src={Maldives}
            alt="Image 2"
            className="w-[100%] h-[auto] rounded"
          />
        </div>
      </div>

      {/* international */}

      {/* indian holidays */}
      <div className=" mt-28 grid lg:grid-cols-2  mx-10 md:mx-20 lg:mx-32">
        <div className="pr-0 md:pr-28 lg:pr-32">
          <img
            src={Dubai}
            alt="Image 2"
            className="w-[100%] h-[auto] rounded"
          />
        </div>

        <div className="  mt-12 md:mt-0 lg:mt-0">
          <h1 className="text-2xl text-blue-500 font-bold">
            International Holiday Packages
          </h1>
          <p className=" text-xl font-semibold  ">
            Whether it’s your first international trip or you have travelled
            abroad multiple times, planning a holiday to a distant land is
            always a special feeling. Our international holiday packages are
            well-made and hold a high reputation among customers who have been
            travelling with us.
          </p>
        </div>
      </div>
      {/* indian holidays */}

      {/* honeymoon */}
      <div className=" mt-28 grid lg:grid-cols-2  mx-10 md:mx-20 lg:mx-32">
        <div>
          <h1 className="text-2xl text-blue-500 font-bold">
            International Holiday Packages
          </h1>
          <p className=" text-xl font-semibold  ">
            Whether it’s your first international trip or you have travelled
            abroad multiple times, planning a holiday to a distant land is
            always a special feeling. Our international holiday packages are
            well-made and hold a high reputation among customers who have been
            travelling with us.
          </p>
        </div>
        <div className="pl-0 md:pl-28 lg:pl-32  mt-12 md:mt-0 lg:mt-0">
          <img
            src={Maldives}
            alt="Image 2"
            className="w-[100%] h-[auto] rounded"
          />
        </div>
      </div>
      {/* honeymoon */}
    </>
  );
};

export default TandT;
