import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faCircleUp } from "@fortawesome/free-regular-svg-icons";
import { AiOutlineSafety } from "react-icons/ai";
import { MdSafetyDivider } from "react-icons/md";
import img1 from "../assets/images/about-img1.png";
import img2 from "../assets/images/vision-img.png";
import img3 from "../assets/images/about-img-2.png";


const About = () => {
  return (
    <>
      <div className="bg-[#050b2a] text-white flex flex-col justify-center items-center h-80">
        <h1 className="text-3xl font-bold">About</h1>

        <div className="flex items-center mt-4 font-medium">
          <h6 className="mr-2">Home</h6>

          <span className="h-1 w-1 rounded-full bg-white "></span>

          <h6 className="ml-2">About</h6>
        </div>
      </div>

      {/* ----------------------------------- */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-10 md:mx-20 lg:mx-32 mt-28">
        <div>
          <span className="text-[#31abfc] font-bold text-sm">About Us</span>

          <h1 className="text-[#262566] font-bold text-4xl mt-4">
            We have been Thriving for 37 Years in the Area
          </h1>

          <p className="mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus
          </p>

          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus aliqua suspendris.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-4">
            <div className="flex items-center">
              <ul className="list-disc list-inside text-blue-900 mt-4 md:mt-10">
                <li className="flex items-center">
                  <FontAwesomeIcon
                    icon={faCircleUp}
                    rotation={90}
                    className="text-blue-500 mr-2"
                  />
                  Save Money
                </li>

                <li className="flex items-center">
                  <FontAwesomeIcon
                    icon={faCircleUp}
                    rotation={90}
                    className="text-blue-500 mr-2"
                  />
                  Flexible Insurance
                </li>

                <li className="flex items-center">
                  <FontAwesomeIcon
                    icon={faCircleUp}
                    rotation={90}
                    className="text-blue-500 mr-2"
                  />
                  Investment Planning
                </li>
              </ul>
            </div>

            <div className="flex items-center">
              <ul className="list-disc list-inside text-blue-900 mt-4 md:mt-10">
                <li className="flex items-center">
                  <FontAwesomeIcon
                    icon={faCircleUp}
                    rotation={90}
                    className="text-blue-500 mr-2"
                  />
                  Fast Application
                </li>

                <li className="flex items-center">
                  <FontAwesomeIcon
                    icon={faCircleUp}
                    rotation={90}
                    className="text-blue-500 mr-2"
                  />
                  No Brokers, No Upselling
                </li>

                <li className="flex items-center">
                  <FontAwesomeIcon
                    icon={faCircleUp}
                    rotation={90}
                    className="text-blue-500 mr-2"
                  />
                  Professional Advisor
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="insurance-about-img px-16 mt-10">
          <img src={img1} className="w-full h-auto" alt="About Us" />
        </div>
      </div>

    
      {/* //2nd About div */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-10 md:mx-20 lg:mx-32 mt-28">
        <div className="insurance-about-img px-16 mb-5 md:mb-0 lg:mb-0">
          <img src={img2} className="w-full h-auto" alt="About Us" />
        </div>
        <div>
          <span className="text-[#31abfc] font-bold text-sm">Our Vision</span>

          <h1 className="text-[#262566] font-bold text-4xl mt-4">
            We are Committed to Help Clients to
            <br />
            Reach The Goals
          </h1>

          <p className="mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus
          </p>

          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus aliqua suspendris.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-4">
            <div className="flex items-center">
              <ul className="list-disc list-inside text-blue-900 mt-4 md:mt-10">
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faChevronRight} className="" />
                  <FontAwesomeIcon icon={faChevronRight} className="mr-2" />
                  Save Money
                </li>

                <li className="flex items-center">
                  <FontAwesomeIcon icon={faChevronRight} className="" />
                  <FontAwesomeIcon icon={faChevronRight} className="mr-2" />
                  Flexible Insurance
                </li>

                <li className="flex items-center">
                  <FontAwesomeIcon icon={faChevronRight} className="" />
                  <FontAwesomeIcon icon={faChevronRight} className="mr-2" />
                  Investment Planning
                </li>
              </ul>
            </div>

            <div className="flex items-center">
              <ul className="list-disc list-inside text-blue-900 mt-4 md:mt-10">
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faChevronRight} className="" />
                  <FontAwesomeIcon icon={faChevronRight} className="mr-2" />
                  Fast Application
                </li>

                <li className="flex items-center">
                  <FontAwesomeIcon icon={faChevronRight} className="" />
                  <FontAwesomeIcon icon={faChevronRight} className="mr-2" />
                  No Brokers, No Upselling
                </li>

                <li className="flex items-center">
                  <FontAwesomeIcon icon={faChevronRight} className="" />
                  <FontAwesomeIcon icon={faChevronRight} className="mr-2" />
                  Professional Advisor
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      
      {/* 3rd div start */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-10 md:mx-20 lg:mx-32 mt-28">
        <div>
          <span className="text-[#31abfc] font-bold text-sm">About Us</span>

          <h1 className="text-[#262566] font-bold text-4xl mt-4">
            Insurance Always Ready to Protect
            <br />
            your Life & Business
          </h1>

          <p className="mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus
          </p>

          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus aliqua suspendris.
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
          <img src={img3} className="w-full h-auto" alt="About Us" />
        </div>
      </div>
    </>
  );
};

export default About;
