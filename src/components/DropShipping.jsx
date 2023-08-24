import React from "react";

import Shipping1 from "../assets/images/drop-shipping1.avif";

import Shipping2 from "../assets/images/drop-shipping2.avif";

import Shipping3 from "../assets/images/drop-shipping3.png";

import Shipping4 from "../assets/images/drop-shipping4.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DropShipping() {
  return (
    <>
      <div className="bg-[#050b2a] text-white flex flex-col justify-center items-center h-80">
        <h1 className="text-3xl font-bold">Drop Shipping</h1>

        <div className="flex items-center mt-4 font-medium">
          <h6 className="mr-2">Home</h6>

          <span className="h-1 w-1 rounded-full bg-white "></span>

          <h6 className="ml-2">Drop Shipping</h6>
        </div>
      </div>

      <div className="text-center mt-20">
        <span className="text-[#31abfc] font-bold text-sm">Drop Shipping</span>

        <h1 className="text-[#262566] font-bold text-4xl mt-4">
          How does Dropshipping work?
        </h1>

        <p className="mt-5">
          With dropshipping apps, products ship directly from the supplier to
          your customer, <br></br> and you only pay for what you sell. No
          upfront inventory costs, no hassles with fulfillment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-10 md:mx-20 lg:mx-32 mt-10">
        <div>
          <a href="#">
            <img src={Shipping1} className="w-full h-auto"></img>
          </a>

          <div className="">
            <h1 className="text-[#204066] text-xl text-center font-semibold">
              Step 1
            </h1>

            <h1 className="text-lg mt-4 mb-4 text-center">
              Your customer places an order from your online store
            </h1>
          </div>
        </div>

        <div>
          <a href="#">
            <img src={Shipping2} className="w-full h-auto"></img>
          </a>

          <div className="">
            <h1 className="text-[#204066] text-xl text-center font-semibold">
              Step 2
            </h1>

            <h1 className="text-lg mt-4 mb-4  text-center">
              Your store automatically sends the order to your dropshipping
              supplier
            </h1>
          </div>
        </div>

        <div>
          <a href="#">
            <img src={Shipping3} className="w-full h-auto"></img>
          </a>

          <div className="">
            <h1 className="text-[#204066] text-xl text-center font-semibold">
              Step 3
            </h1>

            <h1 className="text-lg mt-4  text-center">
              Your dropshipping supplier prepares your customer’s order
            </h1>
          </div>
        </div>

        <div>
          <a href="#">
            <img src={Shipping4} className="w-full h-auto"></img>
          </a>

          <div className="">
            <h1 className="text-[#204066] text-xl text-center font-semibold">
              Step 4
            </h1>

            <h1 className="text-lg font-sm mt-4 mb-4 text-center">
              Your dropshipping supplier ships the order directly to your
              customer
            </h1>
          </div>
        </div>
      </div>

      <div className="text-center mt-24">
        <h1 className="text-[#262566] font-bold text-4xl mt-4">
          Jumpstart your Dropshipping business
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-10 md:mx-20 lg:mx-32 mt-10">
        <div className="mt-10 text-center">
          <h1 className="text-[#12b48b] font-semibold text-2xl">
            Launch for Less
          </h1>

          <p className="mt-5">
            Start your dropshipping business with minimal costs. Using a
            dropshipping supplier means saving on inventory space, and not
            paying for products until you’ve sold them.
          </p>
        </div>

        <div className="mt-10 text-center">
          <h1 className="text-[#12b48b] font-semibold text-2xl ">
            Work on what matters
          </h1>

          <p className="mt-5">
            Fulfill and ship orders with only a few clicks. Dropshipping
            suppliers free up time to perfect your products, optimize your
            marketing, and talk with your customers.
          </p>
        </div>

        <div className="mt-10 text-center">
          <h1 className="text-[#12b48b] font-semibold text-2xl">
            Test for success
          </h1>

          <p className="mt-5">
            Experiment with new products, suppliers, and sales channels.
            Dropshipping is a low-risk way to find what works best for you and
            your business.
          </p>
        </div>

        <div className="mt-10 text-center">
          <h1 className="text-[#12b48b] font-semibold text-2xl">
            Sell globally
          </h1>

          <p className="mt-5">
            Grow your business by selling to customers all over the world. Many
            dropshipping suppliers offer worldwide warehousing and fulfillment.
          </p>
        </div>
      </div>
    </>
  );
}
