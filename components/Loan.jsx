import React from "react";
import { Link } from "react-router-dom";
import personalloan from "../assets/images/personal-loan-imgs.avif";
import BusinessLoan from "../assets/images/business-loan-img3.avif";
import MortgageLoan from "../assets/images/mortgage-loan.avif";
import homeLoan from "../assets/images/home-loan.jpg";
import topUp from  "../assets/images/top-up-imgs.avif";

const Loan = () => {
  return (
    <>
      <div className="bg-[#050b2a] text-white flex flex-col justify-center items-center h-80">
        <h1 className="text-3xl font-bold">Loan</h1>

        <div className="flex items-center mt-4 font-medium">
          <h6 className="mr-2">Home</h6>

          <span className="h-1 w-1 rounded-full bg-white "></span>

          <h6 className="ml-2">Loan</h6>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  mx-10 md:mx-20 lg:mx-32 mt-28">
        <div className="hover:bg-[#262566] hover:text-white shadow-lg p-12 rounded-lg overflow-hidden bg-white">
          <a href="#">
            <img src={personalloan} className="w-full h-auto"></img>
          </a>
          <div className="text-center mt-5">
            <h2 className="text-2xl font-semibold mb-2 ">Personal Loan</h2>
            <p className=" text-xl mt-2 ">Get a Personal Loan</p>
            <div className="mt-5">
              <Link to="/PersonalLoan" className="text-[#12b48b] font-medium ">
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div className="hover:bg-[#262566] hover:text-white shadow-lg p-12 rounded-lg overflow-hidden bg-white">
          <a href="#">
            <img src={BusinessLoan} className="w-full h-auto"></img>
          </a>
          <div className="text-center mt-5">
            <h2 className="text-2xl font-semibold mb-2 ">Business Loan</h2>
            <p className=" text-xl mt-2 ">Get a Business Loan</p>
            <div className="mt-5">
              <Link href="#" className="text-[#12b48b] font-medium ">
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div className="hover:bg-[#262566] hover:text-white shadow-lg p-12 rounded-lg overflow-hidden bg-white">
        <a href="#">
            <img src={MortgageLoan} className="w-full h-auto"></img>
          </a>
          <div className="text-center mt-5">
            <h2 className="text-2xl font-semibold mb-2 "> Mortgage Loan </h2>
            <p className=" text-xl mt-2 ">Get a Mortgage Loan </p>
            <div className="mt-5">
              <Link to="/Mortgage" className="text-[#12b48b] font-medium ">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  mx-10 md:mx-20 lg:mx-32 mt-28  ">
      
        <div className="hover:bg-[#262566] hover:text-white shadow-lg p-12 rounded-lg overflow-hidden bg-white ">
        <a href="#">
            <img src={homeLoan} className="w-full h-auto"></img>
          </a>
          <div className="text-center mt-5">
            <h2 className="text-2xl font-semibold mb-2 ">Home Loan</h2>
            <p className=" text-xl mt-2 ">Get a Home Loan</p>
            <div className="mt-5">
              <Link to='/HomeLoan' className="text-[#12b48b] font-medium ">
                Read More
              </Link>
            </div>
          </div>
        </div>

        <div className="hover:bg-[#262566] hover:text-white shadow-lg p-12 rounded-lg overflow-hidden bg-white ">
        <a href="#">
            <img src={topUp} className="w-full h-auto"></img>
          </a>
          <div className="text-center mt-5">
            <h2 className="text-2xl font-semibold mb-2 ">Auto Loan Top Up</h2>
            <p className=" text-xl mt-2 ">Auto Loan Top Up</p>
            <div className="mt-5">
              <Link to="/AutoLoanTopUp" className="text-[#12b48b] font-medium ">
                Read More
              </Link>
            </div>
          </div>
        </div>

        </div>
      

    </>
  );
};

export default Loan;
