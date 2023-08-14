import React, { useState } from "react";
import "./Style.css";

const Contact = () => {
  const [values, setValue] = useState({
    name: "",

    email: "",

    phone: "",

    message: "",

    subject: "",
  });

  function inputHandle(event) {
    const newObj = { ...values, [event.target.name]: event.target.value };

    setValue(newObj);
  }

  return (
    <>
      <div className="bg-[#050b2a] text-white flex flex-col justify-center items-center h-80">
        <h1 className="text-3xl font-bold">Contact</h1>

        <div className="flex items-center mt-4 font-medium">
          <h6 className="mr-2">Home</h6>

          <span className="h-1 w-1 rounded-full bg-white "></span>

          <h6 className="ml-2">Contact</h6>
        </div>
      </div>

      <div className=" container grid grid-cols-1 md:grid-cols-3 m-10 gap-2 mx-10 mt-10 p-8">
        <div className="my-5 ml-10 bg-white col-span-2 ">
          <div className="shadow-top-md p-10 ">
            <h4 className="text-center font-bold text-3xl">
              Drop Us A Message For Any Query
            </h4>

            <form>
              <div className="grid  grid-cols-2 gap-5 pb-4 pt-4">
                <input
                  type="text"
                  className="mt-1 px-4 py-3 bg-gray-100 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1  "
                  placeholder="Username"
                  onChange={inputHandle}
                  name="name"
                  value={values.name}
                />

                <input
                  type="text"
                  className="mt-1 px-4 py-3 bg-gray-100 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1 "
                  placeholder="Email"
                  onChange={inputHandle}
                  name="email"
                  value={values.email}
                />

                <input
                  type="text"
                  className="mt-1 px-4 py-3 bg-gray-100 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1 "
                  placeholder="Phone Number"
                  onChange={inputHandle}
                  name="phone"
                  value={values.phone}
                />

                <input
                  type="text"
                  className="mt-1 px-4 py-3 bg-gray-100 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1 "
                  placeholder="Subject"
                  onChange={inputHandle}
                  name="subject"
                  value={values.subject}
                />

                <textarea
                  placeholder="Text area"
                  cols="5"
                  rows="8"
                  className="mt-1 px-4 py-3 bg-gray-100 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1  col-span-2  "
                  onChange={inputHandle}
                  name="message"
                  value={values.message}
                />

                <input
                  type="submit"
                  value="Send message"
                  // onClick={submitHandle}

                  className=" flex m-auto focus-outline-none bg-blue-500 border-0 py-2 px-8 hover:bg-indigo-600  text-lg

                text-white font-bold col-span-2 "
                />
              </div>
            </form>
          </div>
        </div>

        {/* information part */}

        <div className=" container mt-5 my-10 bg-white p-4  ">
          <div className="p-5 shadow-top-md mr-10 ">
            <h4 className=" p-3 text-4xl">Contact info</h4>

            <h4 className=" text-2xl bg-blue-500 p-5 text-white flex flex-cols space-x-4  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>

              <div>
                <h1>location</h1>

                <span className="text-xl">Benguluru</span>
              </div>
            </h4>

            <h4 className=" text-2xl bg-blue-500 p-5 text-white flex flex-cols space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>

              <div>
                <h1>Call Us:</h1>

                <p>
                  {" "}
                  <span className="text-xl">+91 9876567870</span>{" "}
                </p>

                <p>
                  {" "}
                  <span className="text-xl">+0 (967) 870 765</span>{" "}
                </p>
              </div>
            </h4>

            <h4 className=" text-2xl bg-blue-500 p-5 text-white flex flex-cols space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.478 5.559A1.5 1.5 0 016.912 4.5H9A.75.75 0 009 3H6.912a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H15a.75.75 0 000 1.5h2.088a1.5 1.5 0 011.434 1.059l2.213 7.191H17.89a3 3 0 00-2.684 1.658l-.256.513a1.5 1.5 0 01-1.342.829h-3.218a1.5 1.5 0 01-1.342-.83l-.256-.512a3 3 0 00-2.684-1.658H3.265l2.213-7.191z"
                  clipRule="evenodd"
                />

                <path
                  fillRule="evenodd"
                  d="M12 2.25a.75.75 0 01.75.75v6.44l1.72-1.72a.75.75 0 111.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 011.06-1.06l1.72 1.72V3a.75.75 0 01.75-.75z"
                  clipRule="evenodd"
                />
              </svg>

              <div>
                <h1>Email Us:</h1>

                <p>
                  {" "}
                  <span className="text-xl">email@gmail.com</span>{" "}
                </p>

                <p>
                  {" "}
                  <span className="text-xl">lok@email.com</span>{" "}
                </p>
              </div>
            </h4>
          </div>
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497700.11233460344!2d77.30126459904938!3d12.953790196306082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1691479687163!5m2!1sen!2sin"
        width="100%"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className="m-2 p-2"
      ></iframe>
    </>
  );
};

export default Contact;
