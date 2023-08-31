import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight } from "@fortawesome/free-regular-svg-icons";
import img2 from "../assets/images/image2.jpg";
import img3 from "../assets/images/belowNavbarimg.jpg";
import About from "../assets/images/about-img-2.png";
import Business from "../assets/images/business.png";
import Blog1 from "../assets/images/blog1.png";
import Blog2 from "../assets/images/blog2.png";
import Blog3 from "../assets/images/blog3.png";
import Team1 from "../assets/images/team1.png";
import Team2 from "../assets/images/team2.png";
import Team3 from "../assets/images/team3.png";
import "../components/Style.css";
import { AiOutlineSafety } from "react-icons/ai";
import { MdSafetyDivider } from "react-icons/md";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";

const Homepage = () => {
  return (
    <>
      <div class="relative h-screen flex items-center justify-center font-sans">
        <img src={img3} alt="Image" class="h-full w-[100%] object-cover" />

        <div class="absolute inset-y-0 left-0 flex flex-col justify-center h-full w-1/2 bg-blue-700 bg-opacity-60 overflow-auto">
          <div class="mx-8 text-white font-roboto">
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
              Need Instant Loan !!
            </h1>
            <p className="mt-4 text-xl">
              "Need cash now? Get an instant loan for urgent expenses. Simple
              online application, quick approval, and funds deposited fast."
            </p>
          </div>
        </div>
      </div>

      {/* part 2 */}

      <div className="section-title text-center mt-32">
        <span className="text-xs md:text-sm lg:text-base font-semibold text-blue-500 mb-2 md:mb-4 lg:mb-6">
          Our Features
        </span>

        <h2 className="text-2xl md:text-3xl lg:text-4xl mb-2 md:mb-4 lg:mb-6 font-bold text-[#050b2a] mt-5">
          We are Award Winning Company
        </h2>

        <p className="text-sm md:text-base font-sans mt-3">
          "Distinguished by our multiple awards, we exemplify excellence and
          innovation,
          <br /> a testament to our dedication and exceptional performance."
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-10 mt-20">
        {/* Feature Card 1 */}
        <div className=" bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden  hover:bg-[#262566] hover:text-white">
          <div className="w-20 mx-auto mt-6 text-sky-400">
            <FontAwesomeIcon
              icon={faCircleUser}
              alt="Icon"
              className="p-2 w-full h-20 object-cover"
            />
          </div>
          <div className="p-5">
            <p className="text-xl text-center font-bold hover:text-white">
              Loan Amount
            </p>
            <div className="text-center">
              <div className="flex flex-col items-center">
                <p className="mt-4 text-grey-700 hover:text-white text-xl">
                  Key attributes defining the loan offer, encompassing rate,
                  term, amount, and conditions for borrowing.
                </p>
                <div className="mt-6 ">
                  <FontAwesomeIcon
                    icon={faCircleRight}
                    size="2x"
                    className="text-blue-800"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div className=" bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden  hover:bg-[#262566] hover:text-white">
          <div className="w-20 mx-auto mt-6 text-sky-400">
            <FontAwesomeIcon
              icon={faShieldHalved}
              alt="Icon"
              className="p-2 w-full h-20 object-cover"
            />
          </div>
          <div className="p-5">
            <p className="text-xl text-center font-bold hover:text-white">
              Monthly Payment
            </p>

            <div className="text-center ">
              <div className="flex flex-col items-center">
                <p className="mt-4 text-grey-700 hover:text-white text-xl">
                  Fixed amount to be paid per month towards loan repayment,
                  covering principal and interest.
                </p>
                <div className="mt-6 ">
                  <FontAwesomeIcon
                    icon={faCircleRight}
                    size="2x"
                    className="text-blue-800"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden  hover:bg-[#262566] hover:text-white">
          <div className="w-20 mx-auto mt-6 text-sky-400">
            <FontAwesomeIcon
              icon={faLock}
              alt="Icon"
              className="p-2 w-full h-20 object-cover"
            />
          </div>
          <div className="p-5">
            <p className="text-xl text-center font-bold hover:text-white">
              Collateral
            </p>

            <div className="text-center ">
              <div className="flex flex-col items-center">
                <p className="mt-4 text-grey-700 hover:text-white text-xl">
                  Asset pledged by the borrower to secure the loan, offered as
                  repayment if default occurs.
                </p>
                <div className="mt-6 ">
                  <FontAwesomeIcon
                    icon={faCircleRight}
                    size="2x"
                    className="text-blue-800"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden  hover:bg-[#262566] hover:text-white">
          <div className="w-20 mx-auto mt-6 text-sky-400">
            <FontAwesomeIcon
              icon={faHandshake}
              alt="Icon"
              className="p-2 w-full h-20 object-cover"
            />
          </div>
          <div className="p-5">
            <p className="text-xl text-center font-bold hover:text-white">
              Approval Time
            </p>

            <div className="text-center ">
              <div className="flex flex-col items-center">
                <p className="mt-4 text-grey-700 hover:text-white text-xl">
                  The duration taken by lenders to review, assess, and decide
                  upon a loan application's acceptance.
                </p>
                <div className="mt-6 ">
                  <FontAwesomeIcon
                    icon={faCircleRight}
                    size="2x"
                    className="text-blue-800"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* part 2 end */}

      {/* part 3  About us*/}

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

      {/* part 3  About us end*/}

      {/* part 8 number contact start */}

      <div className="bg-[#050b2a] rounded-md min-h-[250px] w-[100%] p-4 flex flex-col md:flex-row justify-evenly items-center mt-10 font-roboto">
        <div className="text-white font-bold text-xl p-4 rounded md:m-4 md:w-1/2 lg:w-1/3">
          <p>Have you any question? Ask Us anything, we’d love to answer!</p>
        </div>

        <div className="w-full md:w-auto m-3 p-3">
        <Link to='/Contact'>
          <button className="p-3 bg-white text-xl rounded-md w-full md:w-full lg:w-[200px]">
            Contact Us
          </button>
          </Link>
        </div>
      </div>

      {/* part 8 end */}

      {/* part 4  Our Services*/}

      <div className="section-title text-center mt-28">
        <span className="text-xs md:text-sm lg:text-base font-semibold text-blue-500 mb-2 md:mb-4 lg:mb-6">
          Our Services
        </span>

        <h2 className="text-2xl md:text-3xl lg:text-4xl mb-2 md:mb-4 lg:mb-6 font-bold text-[#050b2a] mt-5">
          Types of Loans
        </h2>

        <p className="text-sm md:text-base font-sans">
          Explore diverse loans: mortgages, personal, auto, business. Tailored
          options catering to unique needs, enabling financial aspirations to
          materialize.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-9 mt-16">
        <div className="flex justify-center p-8  ">
          <div className="bg-white p-3 rounded-lg shadow-top-md shadow-xl flex items-center ">
            <div className="text-center">
              <h3 className="flex justify-center p-5"></h3>

              <h3 className="text-xl font-semibold mb-2">Personal Loans</h3>

              <p className="text-gray-600">
                Flexible funding for various personal expenses, from medical
                bills to vacations.
              </p>

              <Link
                to="/PersonalLoan"
                className="mt-4 inline-block text-blue-500 hover:underline"
              >
                Learn More <i className="bx bx-chevrons-right ml-1"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-center  p-8 ">
          <div className="bg-white p-3 rounded-lg shadow-top-md shadow-md flex items-center ">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Mortgage Loan</h3>

              <p className="text-gray-600">
                Turn your dream of homeownership into reality with our
                competitive mortgage options.
              </p>

              <Link
                to="/Mortgage"
                className="mt-4 inline-block text-blue-500 hover:underline"
              >
                Learn More <i className="bx bx-chevrons-right ml-1"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-center  p-8 ">
          <div className="bg-white p-3 rounded-lg shadow-top-md shadow-md flex items-center">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Business Loan</h3>

              <p className="text-gray-600">
                Fuel your business growth with our tailored financing for
                startups and established enterprises.
              </p>

              <Link
                to="/BusinessLoan"
                className="mt-4 inline-block text-blue-500 hover:underline"
              >
                Learn More <i className="bx bx-chevrons-right ml-1"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-center p-8 ">
          <div className="bg-white p-3 rounded-lg shadow-top-md shadow-xl flex items-center ">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Home Loan</h3>

              <p className="text-gray-600">
                Secure your dream home with flexible home loan options and
                competitive interest rates.
              </p>

              <Link
                to="/HomeLoan"
                className="mt-4 inline-block text-blue-500 hover:underline"
              >
                Learn More <i className="bx bx-chevrons-right ml-1"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-center  p-8 ">
          <div className="bg-white p-3 rounded-lg shadow-top-md shadow-md flex items-center ">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Insurance</h3>

              <p className="text-gray-600">
                Protection, peace, and security—insurance shields you from
                life's uncertainties and unexpected events.
              </p>

              <Link
                to="/Insurance"
                className="mt-4 inline-block text-blue-500 hover:underline"
              >
                Learn More <i className="bx bx-chevrons-right ml-1"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-center  p-8 ">
          <div className="bg-white p-3 rounded-lg shadow-top-md shadow-md flex items-center ">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Auto Loan Top Up</h3>

              <p className="text-gray-600">
                Elevate your ride with easy auto loan top-up, unlocking enhanced
                vehicle experiences.
              </p>

              <Link
                to="/AutoLoantopUp"
                className="mt-4 inline-block text-blue-500 hover:underline"
              >
                Learn More <i className="bx bx-chevrons-right ml-1"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* part 4 end Our Services*/}

      {/* part 5 sofa-image */}

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
              <Link to='/Contact'>
            <button className="rounded-[5px] bg-[#31abfc] p-2 mt-5 mb-3 text-white">
              Contact Us
            </button>
            </Link>
          </div>
        </div>
      </div>
      {/* part 5 sofa-image end  */}

      {/* part 6 start our team */}

      {/* <div className="mt-28">
        <div className="text-center">
          <span className="text-[#12b48b] font-bold text-base"> Team</span>

          <h1 className="text-[#262566] font-bold text-4xl mt-4">
            Our Expert Team
          </h1>

          <p className="mt-5">
            Our proficient team blends experience and innovation to provide
            tailored solutions, guiding you through challenges and towards
            success with expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  mx-10 md:mx-20 lg:mx-32 mt-20">
          <div className="text-center">
            <a href="#">
              <img src={Team1} className="w-full h-auto"></img>
            </a>

            <div className="team-content">
              <h3 className="text-[#262566] font-bold text-xl">
                David Jon Korola
              </h3>

              <span className="text-[#31abfc] text-sm font-semibold">
                Marketer
              </span>
            </div>
          </div>

          <div className="text-center">
            <a href="#">
              <img src={Team2} className="w-full h-auto"></img>
            </a>

            <div className="team-content">
              <h3 className="text-[#262566] font-bold text-xl">Merris Polar</h3>

              <span className="text-[#31abfc] text-sm font-semibold">CEO</span>
            </div>
          </div>

          <div className="text-center">
            <a href="#">
              <img src={Team3} className="w-full h-auto"></img>
            </a>

            <div className="team-content">
              <h3 className="text-[#262566] font-bold text-xl">Deck Dew</h3>

              <span className="text-[#31abfc] text-sm font-semibold">
                Founder
              </span>
            </div>
          </div>
        </div>
      </div> */}

      {/* part 6  our team end */}

      {/* part 7  start*/}

      <div className="mt-28 font-roboto grid grid-cols-1 lg:grid-cols-4 items-center bg-[#050b2a] py-8 min-h-[200px] w-full overflow-hidden">
        <div className="p-4 rounded m-4 text-center">
          <h3 className="text-white font-bold text-3xl">950 +</h3>
          <h3 className="text-white font-bold text-xl">Completed Project</h3>
        </div>

        <div className="p-4 rounded m-4 text-center">
          <h3 className="text-white font-bold text-3xl">850 +</h3>
          <h3 className="text-white font-bold text-xl">Winning Awards</h3>
        </div>

        <div className="p-4 rounded m-4 text-center">
          <h3 className="text-white font-bold text-3xl">550 +</h3>
          <h3 className="text-white font-bold text-xl">Clients</h3>
        </div>

        <div className="p-4 rounded m-4 text-center">
          <h3 className="text-white font-bold text-3xl">440 +</h3>
          <h3 className="text-white font-bold text-xl">Countries</h3>
        </div>
      </div>

      {/* part 7  end*/}

      {/* part 9 start */}

      <div className="mt-28">
        <div className="text-center">
          <span className="text-[#12b48b] font-bold text-base">Blog</span>

          <h1 className="text-[#262566] font-bold text-4xl mt-4">
            Latest News From Our Blog
          </h1>

          <p className="mt-5">
            Explore our blog for the freshest insights, covering diverse topics
            that impact your life, business, and the ever-evolving world around
            us.<br></br>
            Discover our latest blog updates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  mx-10 md:mx-20 lg:mx-32 mt-10">
          <div>
            <a href="#">
              <img src={Blog1} className="w-full h-auto"></img>
            </a>

            <div className="p-8 shadow-2xl">
              <ul className="flex space-x-4">
                <li className="text-[#12b48b]">10 April 2020</li>

                <li className="text-[#12b48b]">
                  <a href="#">By admin</a>
                </li>
              </ul>

              <h3 className="text-[#204066] text-xl mt-4 mb-4 font-bold">
                2020 Insurance Trends And Possible Challenge
              </h3>

              <a href="#" className="text-[#12b48b] font-medium">
                Read More
              </a>
            </div>
          </div>

          <div>
            <a href="#">
              <img src={Blog2} className="w-full h-auto"></img>
            </a>

            <div className="p-8 shadow-2xl">
              <ul className="flex space-x-4">
                <li className="text-[#12b48b]">10 April 2020</li>

                <li className="text-[#12b48b]">
                  <a href="#">By admin</a>
                </li>
              </ul>

              <h3 className="text-[#204066] text-xl mt-4 mb-4 font-bold">
                2020 Insurance Trends And Possible Challenge
              </h3>

              <a href="#" className="text-[#12b48b] font-medium">
                Read More
              </a>
            </div>
          </div>

          <div>
            <a href="#">
              <img src={Blog3} className="w-full h-auto"></img>
            </a>

            <div className="p-8 shadow-2xl">
              <ul className="flex space-x-4">
                <li className="text-[#12b48b]">10 April 2020</li>

                <li className="text-[#12b48b]">
                  <a href="#">By admin</a>
                </li>
              </ul>

              <h3 className="text-[#204066] text-xl mt-4 mb-4 font-bold">
                2020 Insurance Trends And Possible Challenge
              </h3>

              <a href="#" className="text-[#12b48b] font-medium">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* part 9 end */}
    </>
  );
};

export default Homepage;
