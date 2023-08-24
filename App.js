import React from "react";
import Homepage from "./pages/Homepage";
import Insurance from "../src/components/Insurance";
import About from "../src/components/About";
import Contact from "./components/Contact";
import Policy from "../src/components/Policy";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer2 from "./components/Footer2";
import Copyright from "./components/Copyright";
import DropShipping from "./components/DropShipping";
import Development from "./components/Development";
import TandT from "./components/TandT";
import Loan from "./components/Loan";
import PersonalLoan from "./components/PersonalLoan";
import AutoLoanTopUp from "./components/AutoLoanTopUp";
import Mortgage from "./components/Mortgage";
import HomeLoan from "./components/HomeLoan";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element=<Homepage /> />
        <Route path="/About" element=<About /> />
        <Route path="/Insurance" element=<Insurance /> />
        <Route path="/Policy" element=<Policy /> />
        <Route path="/Contact" element=<Contact /> />
        <Route path="/DropShipping" element=<DropShipping /> />
        <Route path="/TandT" element=<TandT /> />
        <Route path="/Development" element=<Development /> />
        <Route path="/Loan" element=<Loan /> />
        <Route path="/PersonalLoan" element=<PersonalLoan /> />
        <Route path="/AutoLoanTopUp" element=<AutoLoanTopUp /> />
        <Route path="/Mortgage" element=<Mortgage /> />
        <Route path="/HomeLoan" element=<HomeLoan /> />
      </Routes>
      <Footer2 />
      <Copyright />
    </>
  );
};

export default App;
