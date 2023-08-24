import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";

export default function Mortgage() {
  return (
    <>
      <div className="bg-[#050b2a] text-white flex flex-col justify-center items-center h-80">
        <h1 className="text-3xl font-bold">Mortgage Loan</h1>

        <div className="flex items-center mt-4 font-medium">
          <h6 className="mr-2">Home</h6>

          <span className="h-1 w-1 rounded-full bg-white "></span>

          <h6 className="ml-2">Mortgage Loan</h6>
        </div>
      </div>

      {/* content */}

      <div>
        <h1 className="text-[#262566] font-bold text-4xl mt-20 text-center ">
          Mortgage Loan
        </h1>

        <p className="text-center mt-7 text-lg">
          A mortgage loan is a financial arrangement in which a lender provides
          funds to a borrower to purchase real estate, typically<br></br> a
          home. This loan is secured by the property itself, meaning that if the
          borrower fails to repay the loan, the lender<br></br> has the right to
          take ownership of the property through a process known as foreclosure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10  mx-10 md:mx-20 lg:mx-32 mt-28">
        <div className="border-2 p-5">
          <h1 className="text-3xl font-bold text-[#262566] ">Features </h1>

          <ul className="list-disc mt-5">
            <li className="ml-4">
              A mortgage loan is a secured loan, where the property being
              purchased serves as collateral for the loan.
            </li>

            <li className="ml-4 mt-3">
              Mortgage payments consist of two main components: the principal
              (the original loan amount) and the interest (the cost of
              borrowing).
            </li>

            <li className="ml-4 mt-3">
              Mortgage loans typically follow an amortization schedule, which
              outlines the payment structure over the loan term.
            </li>
          </ul>
        </div>

        <div className="border-2 p-5">
          <h1 className="text-3xl font-bold text-[#262566] ">Eligibility </h1>

          <ul className="list-disc mt-5">
            <li className="ml-4 ">
              A good credit score is crucial for mortgage approval. Lenders use
              credit scores to gauge a borrower's creditworthiness and risk.
            </li>

            <li className="ml-4 mt-3">
              Lenders review your income to ensure you have the financial
              capacity to make mortgage payments.
            </li>

            <li className="ml-4 mt-3">
              Lenders assess your DTI, which compares your monthly debt payments
              to your monthly income.
            </li>

            <li className="ml-4 mt-3">
              The size of your down payment affects your eligibility.
            </li>
          </ul>
        </div>
      </div>

      

      {/* content */}

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
            Document Required for Mortgage Loan 
            </h1>
          </div>

          {/* arrow start */}
          <div className="absolute top-3 right-3 text-gray-500  transition-transform duration-500 rotate-0 peer-checked:rotate-180">
            <AiOutlineArrowDown />
          </div>

          <div className="bg-white max-h-0 peer-checked:max-h-full overflow-hidden transition-all duration-500">
            <div className="p-4 pb-6">
              It is possible to manage the cash flow, upgrade business equipment
              and grow the business by the option of mortgage loans. Each bank
              has specific requirements, criteria and eligibility factors. Here
              is the list of few document requirements and other details
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
              A copy of any of the following as proof of  identity:
              </p>
                <li className=" ">
                Voter's ID Card,Employer's Card
                </li>

                <li className=" ">
                Latest Bank Statement/Passbook from where you can show a salary/income being credited for the previous 6 months
                </li>

                <li className=" ">
                Salary slip for the previous 6 months showing all deductions
                </li>

                <li className=" ">
                Form 16 for the previous 2 years
                </li>
                <li className=" ">
                Copies of all the property documents of the concerned property to be pledged for the loan
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
              A copy of any of the following as proof of residence :
              </p>
              <ul className="marker:text-green list-outside list-disc ml-4 pl-10 mb-8">
                <li className=" ">
                Ration Card,Telephone Bill,Electricity Bill,Voter's ID Card
                </li>
                <p className="py-6">
              A copy of any of the following as proof of  identity:
              </p>
                <li className=" ">
                Voter's ID Card,Employer's Card
                </li>

                <li className=" ">
                Latest Bank Statement/Passbook from where you can show a salary/income being credited for the previous 6 months
                </li>

                <li className=" ">
                Copies of all the property documents of the concerned property to be pledged for the loan
                </li>

                <li className=" ">
                Form 16 for the previous 2 years
                </li>
                <li className=" ">
                Copies of all the property documents of the concerned property to be pledged for the loan
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
            
      {/* accordion */}
    </>
  );
}
