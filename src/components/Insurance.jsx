import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";
import About from "../assets/images/about-img-2.png";
import InsuranceImg from "../assets/images/insurance-img.png";
import Business from "../assets/images/business.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AiOutlineSafety } from "react-icons/ai";

import { faCheck, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  AiOutlineBank,
  AiFillInsurance,
  AiOutlineLaptop,
  AiOutlineNodeIndex,
} from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";

import { GiArtificialIntelligence } from "react-icons/gi";
import { BsFillDatabaseFill } from "react-icons/bs";
import {
  MdSafetyDivider,
  MdOutlineFamilyRestroom,
  MdOutlineSavings,
  MdOutlineHealthAndSafety,
} from "react-icons/md";
import { TfiMoney } from "react-icons/tfi";
import { GiSuspensionBridge, GiReceiveMoney } from "react-icons/gi";

const Insurance = () => {
  return (
    <>
      <div className="bg-[#050b2a] text-white flex flex-col justify-center items-center h-80">
        <h1 className="text-3xl font-bold">Insurance</h1>

        <div className="flex items-center mt-4 font-medium">
          <h6 className="mr-2">Home</h6>

          <span className="h-1 w-1 rounded-full bg-white "></span>

          <h6 className="ml-2">Insurance</h6>
        </div>
      </div>

      {/* top heading */}
      <div>
        <h1 className="text-[#262566] font-bold text-4xl mt-20 text-center">
          Plans
        </h1>
      </div>
      {/* top heading */}

      {/*new content */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  mx-10 md:mx-20 lg:mx-32 mt-28">
        <div className="hover:bg-[#262566] hover:text-white shadow-lg p-12 rounded-lg overflow-hidden bg-white">
          <div className="flex justify-center text-sky-400">
            <MdOutlineFamilyRestroom className="h-[50px] w-[50px] " />
          </div>

          <div className="text-center mt-5">
            <h2 className="text-2xl font-semibold mb-2 ">Term Plans</h2>
          </div>
        </div>

        <div className="hover:bg-[#262566] hover:text-white shadow-lg p-12 rounded-lg overflow-hidden bg-white">
          <div className="flex justify-center text-sky-400">
            <TfiMoney className="h-[50px] w-[50px]" />
          </div>

          <div className="text-center mt-5">
            <h2 className="text-2xl font-semibold mb-2 ">
              Immediate Income Plans
            </h2>
          </div>
        </div>

        <div className="hover:bg-[#262566] hover:text-white shadow-lg p-12 rounded-lg overflow-hidden bg-white">
          <div className="flex justify-center text-sky-400">
            <GiSuspensionBridge className="h-[50px] w-[50px] " />
          </div>

          <div className="text-center mt-5">
            <h2 className="text-2xl font-semibold mb-2 ">Pension Plans</h2>
          </div>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  mx-10 md:mx-20 lg:mx-32 mt-28"> */}
        <div className="hover:bg-[#262566] hover:text-white shadow-lg p-12 rounded-lg overflow-hidden bg-white">
          <div className="flex justify-center text-sky-400">
            <MdOutlineSavings className="h-[50px] w-[50px] " />
          </div>

          <div className="text-center mt-5">
            <h2 className="text-2xl font-semibold mb-2 ">Savings Plans</h2>
          </div>
        </div>

        <div className="hover:bg-[#262566] hover:text-white shadow-lg p-12 rounded-lg overflow-hidden bg-white">
          <div className="flex justify-center text-sky-400">
            <MdOutlineHealthAndSafety className="h-[50px] w-[50px] " />
          </div>

          <div className="text-center mt-5">
            <h2 className="text-2xl font-semibold mb-2 ">Smart Protect Plan</h2>
          </div>
        </div>
        <div className=" hover:bg-[#262566] hover:text-white shadow-lg p-12 rounded-lg overflow-hidden bg-white ">
          <div className="flex justify-center text-sky-400  ">
            <AiFillInsurance className="h-[50px] w-[50px] " />
          </div>

          <div className="text-center mt-5 ">
            <h2 className="text-2xl font-semibold mb-2 ">Ulip Plans</h2>
          </div>
        </div>
        {/* </div> */}

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  mx-10 md:mx-20 lg:mx-32 mt-28"> */}
        <div className="hover:bg-[#262566] hover:text-white shadow-lg p-12 rounded-lg overflow-hidden bg-white">
          <div className="flex justify-center text-sky-400">
            <GiReceiveMoney className="h-[50px] w-[50px] " />
          </div>

          <div className="text-center mt-5">
            <h2 className="text-2xl font-semibold mb-2 ">Guaranteed Income</h2>
          </div>
        </div>

        <div className="hover:bg-[#262566] hover:text-white shadow-lg p-12 rounded-lg overflow-hidden bg-white">
          <div className="flex justify-center text-sky-400">
            <AiOutlineBank className="h-[50px] w-[50px]" />
          </div>

          <div className="text-center mt-5">
            <h2 className="text-2xl font-semibold mb-2 ">
              Fixed Maturity Plans
            </h2>
          </div>
        </div>
        <div className="hover:bg-[#262566] hover:text-white shadow-lg p-12 rounded-lg overflow-hidden bg-white">
          <div className="flex justify-center text-sky-400">
            <MdOutlineSavings className="h-[50px] w-[50px] " />
          </div>

          <div className="text-center mt-5">
            <h2 className="text-2xl font-semibold mb-2 ">
              Return of Premium Term Plans
            </h2>
          </div>
        </div>
      </div>
      {/* </div> */}

      {/*  new content */}

      <div className="mt-20">
        <div className="text-center">
          <span className="text-[#31abfc] font-bold text-sm">
            Why Choose Us
          </span>

          <h1 className="text-[#262566] font-bold text-4xl mt-4">
            We are Dedicated to Support You
          </h1>

          <p className="mt-5">
            Committed to your success, we offer unwavering support. With
            tailored solutions and a dedicated team, we're here to empower your
            journey.
            <br></br>
            Dedicated to supporting your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-10 md:mx-20 lg:mx-32 mt-20">
          <div className="insurance-section text-center bg-[#fff] p-8">
            <span className="flaticon-kindness text-4xl text-[#31abfc]">
              <FontAwesomeIcon icon={faCheck} />
            </span>

            <h3 className="mt-4 text-[#262566] font-bold text-xl">
              Service With Love
            </h3>

            <p className="mt-4 mb-5">
              Providing heartfelt, exceptional service imbued with genuine care,
              ensuring your satisfaction and building lasting connections.
            </p>

            <a className="bg-[#31abfc] text-[#fff] text-base p-1 px-2  rounded-full">
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>

          <div className="insurance-section text-center bg-[#fff] p-8">
            <span className="flaticon-kindness text-4xl text-[#31abfc]">
              <FontAwesomeIcon icon={faCheck} />
            </span>

            <h3 className="mt-4 text-[#262566] font-bold text-xl">
              Service With Affection.
            </h3>

            <p className="mt-4 mb-5">
              Delivering attentive and caring service, we go beyond expectations
              to ensure your experience is cherished.
            </p>

            <a className="bg-[#31abfc] text-[#fff] text-base p-1 px-2  rounded-full">
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>

          <div className="insurance-section text-center bg-[#fff] p-8">
            <span className="flaticon-kindness text-4xl text-[#31abfc]">
              <FontAwesomeIcon icon={faCheck} />
            </span>

            <h3 className="mt-4 text-[#262566] font-bold text-xl">
              Caringly Dedicated
            </h3>

            <p className="mt-4 mb-5">
              Devoted service, infused with genuine care and affection, creating
              a memorable and heartfelt experience.
            </p>

            <a className="bg-[#31abfc] text-[#fff] text-base p-1 px-2  rounded-full">
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-10 md:mx-20 lg:mx-32 mt-28">
        <div>
          <span className="text-[#31abfc] font-bold text-sm">About Us</span>

          <h1 className="text-[#262566] font-bold text-4xl mt-4">
            Insurance Always Ready to Protect
            <br />
            your Life & Business
          </h1>

          <p className="mt-5">
            Insurance stands as a steadfast guardian, unyielding in its
            commitment to safeguard both lives and businesses. In the face of
            uncertainties, it provides a shield against the unexpected, offering
            financial protection and peace of mind. With a foundation built on
            preparedness, insurance remains a constant ally, ready to shield
            individuals and enterprises from the storms of life.
          </p>

          <p className="mt-4">
            For individuals, it offers a safety net against medical expenses and
            unforeseen accidents. For businesses, it fortifies against risks
            that could disrupt operations. Whether personal or professional,
            insurance stands as a testament to prudence, always prepared to step
            in and mitigate the impact of unforeseen events.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-4">
            <div className="flex items-center">
              <AiOutlineSafety className="text-4xl text-[#262566]" />
              <span className="text-[#262566] text-base pl-3 font-bold">
                We always Care about Client Satisfaction
              </span>
            </div>

            <div className="flex items-center">
              <MdSafetyDivider className="text-4xl text-[#262566]" />
              <span className="text-[#262566] text-base pl-3 font-bold">
                100+ Community Involvement
              </span>
            </div>
          </div>
        </div>

        <div className="insurance-about-img px-16 mt-10">
          <img src={About} className="w-full h-auto" alt="About Us" />
        </div>
      </div>

      <div className="mt-20">
        <div className="text-center">
          <span className="text-[#31abfc] font-bold text-sm">Get A Quote</span>

          <h1 className="text-[#262566] font-bold text-4xl mt-4">
            Get A Free Quote
          </h1>

          <p className="mt-5">
            Receive a complimentary quote today. Discover cost-effective
            solutions tailored to your needs. Unlock possibilities with us.{" "}
            <br></br>
            Request your free quote now.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-10 md:mx-20 lg:mx-32 mt-28 mb-20">
          <div className=" insurance-about-img pr-0 lg:pr-20 md:pr-15 mb-5 lg:mb-0 md:mb-0">
            <img src={InsuranceImg} className="w-full h-auto"></img>
          </div>

          <div className="insurance-form p-12 bg-[#151449]">
            <h1 className="text-[#fff] font-bold text-3xl">Connect Us</h1>

            <div className="form">
              <div class="form-group mt-10">
                <input
                  type="text"
                  class="form-control"
                  id="Name"
                  placeholder="Your Name"
                ></input>
              </div>

              <div class="form-group mt-10">
                <input
                  type="text"
                  class="form-control"
                  id="Email"
                  placeholder="Your Email"
                ></input>
              </div>

              <div class="form-group mt-10">
                <input
                  type="text"
                  class="form-control"
                  id="Number"
                  placeholder="Your Number"
                ></input>
              </div>

              <div class="form-group mt-10">
                <div class="select-box">
                  <select class="form-select">
                    <option value="5">Insurance</option>

                    <option value="1">Home Property</option>

                    <option value="2">Health Insurance</option>

                    <option value="0">Car Insurance</option>

                    <option value="3">Life Insurance</option>

                    <option value="4">Home Insurance</option>
                  </select>
                </div>
              </div>

              <button className="insurance-button mt-10">
                Start Saving Today
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 bg-[#262566] w-10/12 rounded-[15px]">
          <div>
            {" "}
            <img
              src={Business}
              className="w-full h-auto rounded-[15px]"
              alt="Business Image"
            />
          </div>

          <div className="flex flex-col justify-center items-center">
            <h1 className="mt-3 lg:mt-0 md:mt-0 font-bold text-sm  md:text-medium lg:text-3xl text-white">
              {" "}
              Save up to 30% when you buy small <br></br>business insurance in
              online
            </h1>
            <Link to="/Contact">
              <button className="rounded-[5px] bg-[#31abfc] p-2 mt-5 mb-3 text-white">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Insurance;
