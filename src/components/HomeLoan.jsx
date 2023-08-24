import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";

const HomeLoan = () => {
  return (
    <>
      <div className="bg-[#050b2a] text-white flex flex-col justify-center items-center h-80">
        <h1 className="text-3xl font-bold">Home Loan</h1>

        <div className="flex items-center mt-4 font-medium">
          <h6 className="mr-2">Home</h6>

          <span className="h-1 w-1 rounded-full bg-white "></span>

          <h6 className="ml-2">Home Loan</h6>
        </div>
      </div>

      {/* content */}

      <div>
        <h1 className="text-[#262566] font-bold text-4xl mt-20 text-center ">
          Home Loan
        </h1>

        <p className="text-center mt-7 text-lg">
          Enjoy hassle-free home loan processing with simplified home loan
          document requirements. <br />
          You are just a few clicks away from the best Home Loan offer in your
          city. Currently home loan interest rate starts at 8.50% <br />p.a for all
          loan amounts.
          
          Requirement for home loan documents includes identity and address
          proof (KYC documents), income<br /> proof, photographs along a duly filled
          and signed home loan application form.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10  mx-10 md:mx-20 lg:mx-32 mt-28">
        <div className="border-2 p-5">
          <h1 className="text-3xl font-bold text-[#262566] ">Features </h1>

          <ul className="list-disc mt-5">
            <li className="ml-4">
              A home loan is a secured loan that is obtained to purchase a
              property by offering it as collateral.
            </li>

            <li className="ml-4 mt-3">
              Home loans offer high-value funding at economical interest rates
              and for long tenures.
            </li>

            <li className="ml-4 mt-3">They are repaid through EMIs.</li>
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
              Document Required for Home Loan
            </h1>
          </div>

          {/* arrow start */}
          <div className="absolute top-3 right-3 text-gray-500  transition-transform duration-500 rotate-0 peer-checked:rotate-180">
            <AiOutlineArrowDown />
          </div>

          <div className="bg-white max-h-0 peer-checked:max-h-full overflow-hidden transition-all duration-500">
            <div className="p-4 pb-6">
              It is possible to manage the cash flow, upgrade business equipment
              and grow the business by the option of home loans. Each bank has
              specific requirements, criteria and eligibility factors. Here is
              the list of few document requirements and other details mentioned.
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
              Documents Required for Salaried Individuals{" "}
            </h1>
          </div>

          {/* arrow start */}
          <div className="absolute top-3 right-3 text-gray-500 transition-transform duration-500 rotate-0 peer-checked:rotate-180">
            <AiOutlineArrowDown />
          </div>

          <div className="bg-white max-h-0 peer-checked:max-h-full overflow-hidden transition-all duration-500">
            <div className="p-4">
              <p className="py-6 ">
                A copy of any of the following as proof of residence :
              </p>
              <ul className="marker:text-green list-outside list-disc ml-4 pl-10 mb-8">
                <li className=" ">
                  Ration Card,Telephone Bill,Electricity Bill,Voter's ID Card
                </li>
                <p className="py-6">
                  A copy of any of the following as proof of identity:
                </p>
                <li className=" ">Voter's ID Card,Employer's Card</li>

                <li className=" ">
                  Latest Bank Statement/Passbook from where you can show a
                  salary/income being credited for the previous 6 months
                </li>

                <li className=" ">
                  Salary slip for the previous 6 months showing all deductions
                </li>

                <li className=" ">Form 16 for the previous 2 years</li>
                <li className=" ">
                  Copies of all the property documents of the concerned property
                  to be pledged for the loan
                </li>
              </ul>
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
              Documents Required for Self Employed Professionals/Individuals{" "}
            </h1>
          </div>

          {/* arrow start */}
          <div className="absolute top-3 right-3 text-gray-500 transition-transform duration-500 rotate-0 peer-checked:rotate-180">
            <AiOutlineArrowDown />
          </div>

          <div className="bg-white max-h-0 peer-checked:max-h-full overflow-hidden transition-all duration-500">
            <div className="p-4">
              <p className="py-6 ml-10 ">
                A business person including professionals as well as
                non-professionals are required to submit following income
                documents along with Identity, Address & Property documents
              </p>
              <ul className="marker:text-green list-outside list-disc ml-4 pl-10 mb-8">
                <li className=" ">
                  Business profile, Memorandum & Articles of Association of the
                  Company, Latest Form 26
                </li>
                <li>
                  Details of existing loans of the individual as well as the
                  business entity, including the details of the outstanding
                  amount, instalments, purpose, security, balance loan term,
                  etc.
                </li>

                <li className=" ">
                  Current Account Statements of the last 6 months of business
                  entity and Savings Account Statements of last the 6 months of
                  the individual.
                </li>

                <li className=" ">
                  Copies of all the property documents of the concerned property
                  to be pledged for the loan
                </li>

                <li className=" ">Form 16 for the previous 2 years</li>
                <li className=" ">
                  Copies of all the property documents of the concerned property
                  to be pledged for the loan
                </li>
              </ul>
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
              Documents Required for NRI{" "}
            </h1>
          </div>

          {/* arrow start */}
          <div className="absolute top-3 right-3 text-gray-500 transition-transform duration-500 rotate-0 peer-checked:rotate-180">
            <AiOutlineArrowDown />
          </div>

          <div className="bg-white max-h-0 peer-checked:max-h-full overflow-hidden transition-all duration-500">
            <div className="p-4">
              <p className="py-6 ">
                A copy of any of the following documnets
              </p>
              <ul className="marker:text-green list-outside list-disc ml-4 pl-10 mb-8">
                <li className=" ">
                Also note that NRIs are also required to self-attest the KYC documents. KYC documents for the Power of Attorney holder is also required which will be verified with the originals. In case of absence of presence of NRI applicant following documents will be additionally obtained:
                </li>
                <p className="py-6">
                Identity & Address Proof of place of residence of NRI should be duly notarised by the Notary Public (overseas).
                </p>
                <li className=" ">The identity and address proof should be duly attested by Indian Embassy at the place of NRI applicant.</li>

              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* accordion */}

      {/* content */}
    </>
  );
};

export default HomeLoan;
