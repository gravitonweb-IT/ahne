import React from "react";
import "./Style.css";
import About from "../assets/images/about-img-2.png"
import InsuranceImg from "../assets/images/insurance-img.png";
import Business from "../assets/images/business.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AiOutlineSafety } from "react-icons/ai";
import { MdSafetyDivider } from "react-icons/md";
import { faCheck, faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
      <div className="mt-20">
        <div className="text-center">
          <span className="text-[#31abfc] font-bold text-sm">
            Why Choose Us
          </span>

          <h1 className="text-[#262566] font-bold text-4xl mt-4">
            We are Dedicated to Support You
          </h1>

          <p className="mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore <br></br> et dolore magna
            aliqua. Quis ipsum suspendisse ultrices gravida. Risus
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
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
              Service With Love
            </h3>

            <p className="mt-4 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
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
              Service With Love
            </h3>

            <p className="mt-4 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
        </p>

        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus aliqua suspendris.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore <br></br> et dolore magna
            aliqua. Quis ipsum suspendisse ultrices gravida. Risus
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

            <button className="rounded-[5px] bg-[#31abfc] p-2 mt-5 mb-3 text-white">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Insurance;
