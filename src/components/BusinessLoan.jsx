import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
const BusinessLoan = () => {
  return (
    <>
    <div className="bg-[#050b2a] text-white flex flex-col justify-center items-center h-80">
        <h1 className="text-3xl font-bold">Business Loan</h1>

        <div className="flex items-center mt-4 font-medium">
          <h6 className="mr-2">Home</h6>

          <span className="h-1 w-1 rounded-full bg-white "></span>

          <h6 className="ml-2">Business Loan</h6>
        </div>
      </div>

      {/* content */}

      <div>
        <h1 className="text-[#262566] font-bold text-4xl mt-20 text-center ">
          Business Loan
        </h1>

        <p className="text-center mt-7 text-lg">
        Secure your business's growth with our tailored business loan solutions. Whether you're launching a startup  <br />
        or expanding your operations, we offer flexible financing options to meet your unique needs. Benefit from competitive interest rates,<br /> manageable repayment plans, 
        
          and dedicated financial guidance. Our streamlined application process ensures quick approvals,<br /> getting you the funds you need when you need them.
          Empower your business to thrive – apply for our business loan today and turn your vision into reality.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10  mx-10 md:mx-20 lg:mx-32 mt-28">
        <div className="border-2 p-5">
          <h1 className="text-3xl font-bold text-[#262566] ">Features </h1>

          <ul className="list-disc mt-5">
            <li className="ml-4">
            Term Loans: Loans with fixed terms, repayment schedules, and interest rates.
            </li>

            <li className="ml-4 mt-3">
            A revolving credit line that allows businesses to borrow up to a predetermined limit.Equipment Financing: Loans specifically for purchasing equipment or machinery.
            </li>

            <li className="ml-4 mt-3"> Loans based on the value of outstanding invoices.Startup Loans: Loans tailored for new businesses with limited operating history.</li>
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
              Business Loan Document Required
            </h1>
          </div>

          {/* arrow start */}
          <div className="absolute top-3 right-3 text-gray-500  transition-transform duration-500 rotate-0 peer-checked:rotate-180">
            <AiOutlineArrowDown />
          </div>

          <div className="bg-white max-h-0 peer-checked:max-h-full overflow-hidden transition-all duration-500">
            <div className="p-4 pb-6">
              It is possible to manage the cash flow, upgrade business equipment
              and grow the business by the option of business loans. Each bank
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
              Checklist of Document Required for Business Loan{" "}
            </h1>
          </div>

          {/* arrow start */}
          <div className="absolute top-3 right-3 text-gray-500 transition-transform duration-500 rotate-0 peer-checked:rotate-180">
            <AiOutlineArrowDown />
          </div>

          <div className="bg-white max-h-0 peer-checked:max-h-full overflow-hidden transition-all duration-500">
            <div className="p-4">
              <p className="py-6">
                To avail a business loan, an applicant needs to provide the
                following documents as per the lender's requirements.
              </p>
              <ul className="marker:text-green list-outside list-disc ml-4 pl-10 mb-8">
                <li className=" ">
                  <b>Identity Proof:</b> Driving License / PAN Card / Passport /
                  Voters ID Card / Aadhaar Card.
                </li>

                <li className=" ">
                  <b>Address Proof:</b> Ration Card /Telephone Bill /
                  Electricity Bill / Passport / Trade license / Lease agreement
                  / Sales Tax certificate.
                </li>

                <li className=" ">
                  {" "}
                  <b>Income Proof:</b>Bank Statement of Last 2 Years.
                </li>

                <li className="">Proof of Business Continuation</li>
                <li className=" ">
                  <b>Business Ownership Proof:</b> Other Mandatory Documents
                  such as Sole Proprietorship Declaration, Certified true copy
                  of Memorandum & Articles of Association.
                </li>
                <li className="">Last 3 years audited financials.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden shadow-2xl border border-b-0 ">
          <input
            type="checkbox"
            className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
          />
          <div className="bg-white border-2 border-b-0 rounded h-full py-5 px-6 w-full pl-15 flex items-center">
            <h1 className="font-xl text-xl ">
              List of Common Documents Required for Business Loan
            </h1>
          </div>

          {/* arrow start */}
          <div className="absolute top-3 right-3 text-gray-500  transition-transform duration-500 rotate-0 peer-checked:rotate-180">
            <AiOutlineArrowDown />
          </div>

          <div className="bg-white max-h-0 peer-checked:max-h-full overflow-hidden transition-all duration-500">
            <div className="p-4">
              <p className="py-6">
                Here is a list of documents that are commonly required by all
                the business loan lenders.
              </p>
              <ul className="marker:text-green list-outside list-disc ml-4 pl-10 mb-8">
                <li className=" ">
                  <b>Application Form:</b> Complete loan application form with
                  one passport size photograph
                </li>

                <li className=" ">
                  <b>Valid Proof of Applicant's Identity:</b> Passport, Photo
                  PAN card, Voter’s identity card , Driving license and MAPIN
                  card
                </li>

                <li className=" ">
                  {" "}
                  <b>Proof of Residence:</b>Ration card/Telephone Bill/ Lease
                  agreement/ Electricity Bill/ Passport/Trade license /Sales Tax
                  certificate.
                </li>

                <li className="">
                  <b>Proof of Age:</b>Passport, Photo PAN card, Voter’s identity
                  card
                </li>
                <li className=" ">
                  <b>Financial Documents:</b>Copies of IT returns for the last
                  two years along with the latest Bank statements for 6 months
                  and P & L and balance sheet for last two years audited by a
                  C.A.
                  <ul className="marker:text-green list-outside list-decimal ml-7">
                    <li>
                      <b>
                        Self Employed (Private Ltd. Co. and Partnership Firms):
                      </b>{" "}
                      P & L Copies of IT returns for the last two years and P &
                      L and balance sheet for last two years audited by a
                      chartered accountant.
                    </li>
                    <li>
                      <b>Self Employed Individuals - Professionals:</b>Copies of
                      IT returns for the last two years and Bank statements for
                      last 6 months and – Professionals: P & L and balance sheet
                      for last two years audited by a chartered accountant
                    </li>
                    <li>
                      <b>Self Employed Individuals - Non Professionals: </b>P &
                      L and balance sheet for last two years audited by a
                      chartered accountant and Copies of IT returns for the last
                      two years and Bank statements
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden shadow-2xl border border-b-0 ">
          <input
            type="checkbox"
            className="peer absolute top-0 inset-x-0 w-full h-full py-5 opacity-0 z-10 cursor-pointer"
          />
          <div className="bg-white border-2 border-b-0 rounded h-full py-5 px-6 w-full pl-15 flex items-center">
            <h1 className="font-xl text-xl ">
              Documents Required for Self Employed (Private Ltd. Co. and
              Partership Firms)
            </h1>
          </div>

          {/* arrow start */}
          <div className="absolute top-3 right-3 text-gray-500  transition-transform duration-500 rotate-0 peer-checked:rotate-180">
            <AiOutlineArrowDown />
          </div>

          <div className="bg-white max-h-0 peer-checked:max-h-full overflow-hidden transition-all duration-500">
            <div className="p-4">
              <ul className="marker:text-green list-outside list-disc ml-4 pl-10 mb-8 ">
                <li className=" ">
                  <b>Proof of Identity of Private Limited Company:</b> Sales tax
                  / VAT /Service tax / Excise registration, / IT return of the
                  concern, Water / Electricity / Registration under Shops and
                  Establishment Act, PAN ID /Municipal tax bill in the name of
                  the concern, Memorandum and Articles of Association
                </li>

                <li className=" ">
                  <b>Proof of Individual Identity</b> Proof to be submitted for
                  the authorized signatories and about two directors (which
                  includes the managing director) (any one of the following):
                  PAN card, Voter’s identity card, Driving license and Passport
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="relative  overflow-hidden shadow-lg border border-b-0 ">
          <input
            type="checkbox"
            className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer "
          />
          <div className="bg-white border-2 border-b-0 rounded h-full py-5 px-6 w-full pl-15 flex items-center">
            <h1 className="font-xl text-xl ">
              Documents Required for Self Employed Individuals Professionals
            </h1>
          </div>

          {/* arrow start */}
          <div className="absolute top-3 right-3 text-gray-500  transition-transform duration-500 rotate-0 peer-checked:rotate-180">
            <AiOutlineArrowDown />
          </div>

          <div className="bg-white max-h-0 peer-checked:max-h-full overflow-hidden transition-all duration-500">
            <div className="p-4">
              <ul className="marker:text-green list-outside list-disc ml-4 pl-10 mb-8">
                <li className=" ">
                  <b>Proof of Identity of Sole Proprietorship: </b> Proof of
                  identity of the sole proprietorship
                </li>
                <li className=" ">
                  PAN ID / IT return of the concern or Municipal tax, Water,
                  Electricity bill in the name of the concern
                </li>

                <li className=" ">
                  {" "}
                  <b>
                    Individual identity proof to be submitted for the Sole
                    Proprietor:
                  </b>{" "}
                  Passport, Driving license, Voter’s identity card, Photo PAN
                  card.
                </li>
                <li className=" ">
                  {" "}
                  <b>
                    Proof of residence address for the Sole Proprietor:{" "}
                  </b>{" "}
                  Driving license, Ration card, Passport, Voter’s identity card
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="relative  overflow-hidden shadow-lg border border-b-0 ">
          <input
            type="checkbox"
            className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer "
          />
          <div className="bg-white border-2 border-b-0 rounded h-full py-5 px-6 w-full pl-15 flex items-center">
            <h1 className="font-xl text-xl ">
              Documents Required for Self Employed Individuals Non-Professionals
            </h1>
          </div>

          {/* arrow start */}
          <div className="absolute top-3 right-3 text-gray-500  transition-transform duration-500 rotate-0 peer-checked:rotate-180">
            <AiOutlineArrowDown />
          </div>

          <div className="bg-white max-h-0 peer-checked:max-h-full overflow-hidden transition-all duration-500">
            <div className="p-4 pb-10">
              <ul className="marker:text-green list-outside list-disc ml-4 pl-10 mb-8">
                <li className=" ">
                  Proof of identity of the sole proprietorship
                </li>
                <li className=" ">Proof of individual identity</li>

                <li className=" ">Three years income tax returns</li>
                <li className=" ">Three years sales tax returns</li>
                <li className=" ">
                  Copy of periodic stock, age wise book-debt and
                  creditors-statement for latest three months
                </li>

                <li>
                  Copy of last 6 months bank statement of main banker / copy of
                  bank statement for the term loan
                </li>
              </ul>
              <p>
                Business Loan Application Form is a mandatory document to be
                filled, it is clear that irrespective of which bank you are look
                to apply for a business loan, without necessary documentation
                the request will not be process. Keep these paper works done
                before approaching the bank.
              </p>
            </div>
          </div>
        </div>
      </div>

      
                 
                  
              
          
        
    </>
  );
};

export default BusinessLoan;
