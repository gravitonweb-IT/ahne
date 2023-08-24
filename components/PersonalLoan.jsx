import React from "react";

const PersonalLoan = () => {
  return (
    <>
      <div className="bg-[#050b2a] text-white flex flex-col justify-center items-center h-80">
        <h1 className="text-3xl font-bold">Personal Loan</h1>

        <div className="flex items-center mt-4 font-medium">
          <h6 className="mr-2">Home</h6>

          <span className="h-1 w-1 rounded-full bg-white "></span>

          <h6 className="ml-2">Personal Loan</h6>
        </div>
      </div>

      {/* content */}

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10  mx-10 md:mx-20 lg:mx-32 mt-28">
        <div className="border-2 p-5">
          <h1 className="text-3xl font-bold text-[#262566] ">Documentation</h1>

          <ul className="list-disc mt-5">
            <li className="ml-4">
              Identity proof / address proof (copy of passport/voter ID
              card/driving license/Aadhaar Card)
            </li>
            <li className="ml-4 mt-3">
              Bank statement of previous 6 months (Passbook of previous 6
              months)
            </li>
            <li className="ml-4 mt-3">
              Three latest salary slip/current dated salary certificate with the
              latest Form 16
            </li>
          </ul>
        </div>
      </div>

      {/* content */}
    </>
  );
};

export default PersonalLoan;
