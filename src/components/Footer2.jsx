import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail, MdLocationPin } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Style.css";

const Footer2 = () => {
  return (
    <>
      <div className="parent-background">
        <div class="p-10 flex flex-col sm:flex-row justify-between mt-28">
          <div class="mt-4 p-2 text-white">
            <h1 className="text-white font-bold text-1xl md:text-3xl mb-2">
              ANHE
            </h1>
            <p className="mt-4">Empowering Dreams, Bridging Futures</p>

            <p>Your Trusted Partner for Financial </p>

            <p>Solutions and Personalized Loans.</p>

            <p>Fast, Flexible, Reliable.</p>
          </div>

          <div class="mt-4 p-2 text-white ">
            <h1 className="font-bold text-2xl ">Contact Us</h1>
            <hr className="w-[25%] mt-3"></hr>
            <div className="flex items-center mt-4 ">
              <FiPhoneCall className="mr-2" />
              <p>Hotline : </p>
            </div>
            <div className="ml-6">
              <p className="mt-1">Phone : +91-7874990627</p>
            </div>
            <div className="flex items-center mt-3">
              <MdOutlineEmail className="mr-2" />
              <p>Email : </p>
            </div>
            <div className="ml-6">
              <p className="mt-1">ahneconsultancyservices@gmail.com</p>
            </div>

            <div className="flex items-center mt-3">
              <MdLocationPin className="mr-2" />
              <p>Address : </p>
            </div>
            <div className="ml-6">
              <p className="mt-1">
                111, International Market, <br />
                Vrachha Surat, Gujarat
              </p>
            </div>
          </div>

          <div class="mt-4 p-2 text-white">
            <h1 className="font-bold text-2xl">Service Links</h1>
            <hr className="w-[25%] md:w-[25%] lg:w-[60%] mt-3"></hr>
            <p className="mt-4">
              <Link to="/">Home</Link>
            </p>

            <p className="mt-1">
              <Link to="/About">About</Link>
            </p>

            <p className="mt-1">
              <Link to="/Insurance">Insurance</Link>
            </p>

            <p className="mt-1">
              <Link to="/Policy">Privacy Policy</Link>
            </p>

            <p className="mt-1">
              <Link to="/Contact">Contact</Link>
            </p>

            <p className="mt-1">
              <Link to="/DropShipping">DropShipping</Link>
            </p>

            <p className="mt-1">
              <Link to="/Tours&Travel">Tours&Travel</Link>
            </p>

            <p className="mt-1">
              <Link to="/Development">Development</Link>
            </p>

            <p className="mt-1">
              <Link to="/Loan">Loan</Link>
            </p>
          </div>

          <div class="mt-4 p-2 text-white">
            <h1 className="font-bold text-2xl m">Follow Us</h1>
            <hr className="w-[25%] md:w-[25%] lg:w-[60%] mt-3"></hr>

            <p class=" mt-4 flex items-center space-x-4 my-2">
              <a href="https://www.facebook.com/ahnefinance">
                <BsFacebook className="h-[40px] w-[40px]" />
              </a>

              <a href="https://www.facebook.com/ahnefinance">
                <AiFillInstagram className="h-[40px] w-[40px]" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer2;
