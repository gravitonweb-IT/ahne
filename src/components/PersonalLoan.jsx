import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";

const PersonalLoan = () => {
  return (
    <>
      {/* banner */}
      <div className="bg-[#050b2a] text-white flex flex-col justify-center items-center h-80">
        <h1 className="text-3xl font-bold">Personal Loan</h1>

        <div className="flex items-center mt-4 font-medium">
          <h6 className="mr-2">Home</h6>

          <span className="h-1 w-1 rounded-full bg-white "></span>

          <h6 className="ml-2">Personal Loan</h6>
        </div>
      </div>
      {/* banner */}

      
      

      <div>
        <h1 className="text-[#262566] font-bold text-4xl mt-20 text-center ">
          Personal Loan
        </h1>
        <p className="text-center mt-7 text-lg">
          Whether it's planned events like weddings, vacations, or home
          renovations, or unexpected emergencies such as <br />
          medical procedures, our Personal Loan makes life easier. With a
          seamless online application process, we ensure <br />
          quick and hassle-free access to funds, making it the ideal credit
          option for you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10  mx-10 md:mx-20 lg:mx-32 mt-28">
        <div className="border-2 p-5">
          <h1 className="text-3xl font-bold text-[#262566] ">Features </h1>

          <ul className="list-disc mt-5">
            <li className="ml-4">
              Get funds in 10 seconds if you are a pre-approved customer.
            </li>
            <li className="ml-4 mt-3">
              Other customers can get a loan within 4 working days subject to
              documentation and verification as per requirement.
            </li>
            <li className="ml-4 mt-3">
              We have simplified the personal loan application process. You can
              make an online personal loan application in just a few clicks
            </li>
          </ul>
        </div>

        <div className="border-2 p-5">
          <h1 className="text-3xl font-bold text-[#262566] ">Eligibility </h1>

          <ul className="list-disc mt-5">
            <li className="ml-4 ">
              Employees of private limited companies, employees from public
              sector undertakings, including central, state and local bodies
            </li>
            <li className="ml-4 mt-3">
              Individuals between 21 and 60 years of age
            </li>
            <li className="ml-4 mt-3">
              Individuals who have had a job for at least 2 years, with a
              minimum of 1 year with the current employer
            </li>
            <li className="ml-4 mt-3">
              Those who earn a minimum of 25,000 net income per month.
            </li>
          </ul>
        </div>
      </div>

    

      {/* accordion */}

      <div className="max-w-full lg:mx-24 mx-5 flex flex-col justify-center px-4 py-8">
        <h2 className="flex justify-center font-bold text-xl m-6">
          Documents Required
        </h2>

        

        <div className="relative overflow-hidden rounded shadow-2xl border border-b-0">
          <input
            type="checkbox"
            className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
          />
          <div className="bg-white  rounded h-full py-5 px-6 w-full  flex items-center">
            <h1 className="font-xl text-xl ">
              Personal Loan Document Required
            </h1>
          </div>

          {/* arrow start */}
          <div className="absolute top-3 right-3 text-gray-500  transition-transform duration-500 rotate-0 peer-checked:rotate-180">
            <AiOutlineArrowDown />
          </div>

          <div className="bg-white max-h-0 peer-checked:max-h-full overflow-hidden transition-all duration-500">
            <div className="p-4 pb-6">
              It is possible to manage the cash flow, upgrade business equipment
              and grow the business by the option of personal loans. Each bank
              has specific requirements, criteria and eligibility factors. Here
              is the list of few banks document requirements and other details
              mentioned.
            </div>
          </div>
        </div>

        <div className="relative  overflow-hidden shadow-2xl border border-b-0  ">
          <input
            type="checkbox"
            className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
          />
          <div className="bg-white border-2 rounded border-b-0 h-full py-5 px-6 w-full pl-15 flex items-center">
            <h1 className="font-xl text-xl ">
              Documents Required for Personal Loan{" "}
            </h1>
          </div>

          {/* arrow start */}
          <div className="absolute top-3 right-3 text-gray-500 transition-transform duration-500 rotate-0 peer-checked:rotate-180">
            <AiOutlineArrowDown />
          </div>

          <div className="bg-white max-h-0 peer-checked:max-h-full overflow-hidden transition-all duration-500">
            <div className="p-4">
              <p className="py-6">
                To avail a Personal loan, an applicant needs to provide the
                following documents as per the lender's requirements.
              </p>
              <ul className="marker:text-green list-outside list-disc ml-4 pl-10 mb-8">
                <li className=" ">
                  Identity proof / address proof (copy of passport/voter ID
                  card/driving license/Aadhaar Card)
                </li>

                <li className=" ">
                  Bank statement of previous 6 months (Passbook of previous 6
                  months)
                </li>

                <li className=" ">
                  Three latest salary slip/current dated salary certificate with
                  the latest Form 16
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* accordion */}
    </>
  );
};

export default PersonalLoan;
