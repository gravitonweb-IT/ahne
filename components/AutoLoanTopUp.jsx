import React, { useState } from "react";

const AutoLoanTopUp = () => {
  const initialAccordionStates = Array(2).fill(false); // Initialize 2 accordion items with closed state
  const [accordionStates, setAccordionStates] = useState(
    initialAccordionStates
  );

  const toggleAccordion = (index) => {
    const newAccordionStates = [...accordionStates];
    newAccordionStates[index] = !newAccordionStates[index];
    setAccordionStates(newAccordionStates);
  };
  return (
    <>
      <div className="bg-[#050b2a] text-white flex flex-col justify-center items-center h-80">
        <h1 className="text-3xl font-bold">Auto Loan Top Up</h1>

        <div className="flex items-center mt-4 font-medium">
          <h6 className="mr-2">Home</h6>

          <span className="h-1 w-1 rounded-full bg-white "></span>

          <h6 className="ml-2">Auto Loan Top Up</h6>
        </div>
      </div>

      {/* content */}

      <div>
        <h1 className="text-[#262566] font-bold text-4xl mt-20 text-center ">
          Auto Loan Top Up
        </h1>
        <p className="text-center mt-7 text-lg">
          "Auto Loan Top Up" extends an existing car loan, providing extra funds
          for vehicle needs.
          <br />
          Eligibility is assessed, and if approved, the loan terms are adjusted.
          It offers convenience but requires
          <br /> caution due to increased debt and costs tied to extended
          repayment. Useful for car repairs and upgrades.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10  mx-10 md:mx-20 lg:mx-32 mt-28">
        <div className="border-2 p-5">
          <h1 className="text-3xl font-bold text-[#262566] ">Features </h1>

          <ul className="list-disc mt-5">
            <li className="ml-4">
              Auto Loan Top Up allows borrowers to access additional funds on
              their existing car loan for vehicle-related expenses.
            </li>
            <li className="ml-4 mt-3">
              Borrowers deal with their current lender, simplifying the
              borrowing process and leveraging the existing relationship.
            </li>
            <li className="ml-4 mt-3">
              Avoids the need to apply for a new loan, saving time and
              paperwork.
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
            <li className="ml-4 list-none">
              <h3>Salaried</h3>
            </li>
            <li className="ml-4 mt-3">
              Any of the following age proof documents:Aadhar Card/Passport/ PAN
              Card/ Voters ID/ Driving License with DOB (recent, legible,
              laminated)/ Photo Ration Card with DOB/ Employer Certificate or
              ID/ School or College Leaving Certificate
            </li>
            <li className="ml-4 mt-3">
              Any of the following documents as proof of identity:Aadhar
              Card/Passport Copy/PAN Card/Voters ID Card/Photo Driving License
              with DOB (recent, legible, laminated)/Photo Ration Card with DOB
            </li>
            <li className="ml-4 mt-3">
              All the following documents as proof of income: /Latest Salary
              Slip /Latest Form 16/Latest ITR /corporate salary account
              statement for salary credits above Rs. 80,000 for the previous 3
              months
            </li>

            <li className="ml-4 mt-3">
              Any of the following documents as address proof:Photo Ration Card
              with DOB /Photo Driving License with DOB (recent, legible,
              laminated) /Passport Copy /Telephone Bill /Electricity Bill
              /Credit Card Statement with Credit Card Copy /Employer
              Certificate/ID
            </li>

            <li className="ml-4 mt-3">
              Any of the following as sign verification proof:/Passport Copy
              /Photo Driving License with DOB (recent, legible, laminated)
              /Credit Card Statement with Credit Card Copy /Banker's
              Verification /Copy of Margin Money Paid to the Bank /9 month
              repayment track for vehicles being used personally, and 12 month
              repayment track for vehicles being used commercially /Foreclosure
              statement in case there is a non-HDFC Bank loan on the vehicle
            </li>
          </ul>
        </div>
        <div className="border-2 p-5">
          <h1 className="text-3xl font-bold text-[#262566] ">Documentation</h1>

          <ul className="list-disc mt-5">
            <li className="ml-4 list-none">
              <h3>Self Employed Individuals (Sole Proprietorship)</h3>
            </li>
            <li className="ml-4 mt-3">
              Any of the following age proof documents:Aadhar Card /Passport
              /PAN Card /Voters ID Card /Photo Driving License with DOB (recent,
              legible, laminated) /Photo Ration Card with DOB /Employer
              Certificate/ID /School/College Leaving Certificate
            </li>
            <li className="ml-4 mt-3">
              Any of the following documents as proof of identity:Aadhar Card
              /Passport Copy /PAN Card /Voters ID Card /Photo Driving License
              with DOB (recent, legible, laminated) /Photo Ration Card with DOB
              /Latest ITR / Previous ITR with Adv. Tax paid Challan / latest IT
              assessment order as proof of income
            </li>
            <li className="ml-4 mt-3">
              Any of the following documents as address proof:Photo Ration Card
              with DOB /Photo Driving License with DOB (recent, legible,
              laminated) /Passport Copy /Telephone Bill /Electricity Bill
              /Credit Card Statement with Credit Card Copy /Employer
              Certificate/ID
            </li>

            <li className="ml-4 mt-3">
              Any of the following as sign verification proof:Passport Copy
              /Photo Driving License with DOB (recent, legible, laminated)
              /Credit Card Statement with Credit Card Copy /Banker's
              Verification /Copy of Margin Money Paid to the Bank /9 month
              repayment track for vehicles being used personally, and 12 month
              repayment track for vehicles being used commercially /Foreclosure
              statement in case there is a non-HDFC Bank loan on the vehicle
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10  mx-10 md:mx-20 lg:mx-32 mt-28">
        <div className="border-2 p-5">
          <h1 className="text-3xl font-bold text-[#262566] ">Documentation</h1>

          <ul className="list-disc mt-5">
            <li className="ml-4 list-none">
              <h3>Self Employed Individuals (Partnership Firms)</h3>
            </li>
            <li className="ml-4 mt-3">
              Partnership deed as age proof:Partnership deed as identity proof
              /Latest ITR and Balance Sheet along with Profit & Loss Account. In
              case the business turnover exceeds Rs. 40 Lakhs, or the
              professional turnover exceeds Rs. 10 Lakhs, the balance sheet
              needs to have been audited, and in which case the latest Income
              Tax Return need not be taken
            </li>
            <li className="ml-4 mt-3">
              Any of the following documents as address proof:/Partnership Deed
              /Telephone Bill /Electricity Bill
            </li>
            <li className="ml-4 mt-3">
              Any of the following as sign verification proof:Passport Copy
              /Photo Driving License with DOB (recent, legible, laminated)
              /Credit Card Statement with Credit Card Copy /Banker's
              Verification /Copy of Margin Money Paid to the Bank /9 month
              repayment track for vehicles being used personally, and 12 month
              repayment track for vehicles being used commercially
            </li>
          </ul>
        </div>
        <div className="border-2 p-5">
          <h1 className="text-3xl font-bold text-[#262566] ">Documentation</h1>

          <ul className="list-disc mt-5">
            <li className="ml-4 list-none">
              <h3>Self Employed Individuals (Private Limited Companies)</h3>
            </li>
            <li className="ml-4 mt-3">
              Memorandum and Articles of Association/Certificate of
              Incorporation as age proof
            </li>
            <li className="ml-4 mt-3">
              Memorandum and Articles of Association/Certificate of
              Incorporation as identity proof
            </li>
            <li className="ml-4 mt-3">
              Latest ITR and audited Balance Sheet along with Profit & Loss
              Account as proof of income
            </li>
            <li className="ml-4 mt-3">
              Any of the following documents as address proof:Memorandum and
              Articles of Association /Certification of Incorporation /Telephone
              Bill /Electricity Bill
            </li>
            <li className="ml-4 mt-3">
              Any of the following as sign verification proof:Passport Copy
              /Photo Driving License with DOB (recent, legible, laminated)
              /Credit Card Statement with Credit Card Copy /Banker's
              Verification /Copy of Margin Money Paid to the Bank /9 month
              repayment track for vehicles being used personally, and 12 month
              repayment track for vehicles being used commercially /Foreclosure
              statement in case there is a non-HDFC Bank loan on the vehicle
            </li>
          </ul>
        </div>
      </div>

      {/* content */}
    </>
  );
};

export default AutoLoanTopUp;
