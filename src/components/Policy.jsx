import React from "react";

const Policy = () => {
  return (
    <>
      <div className="bg-[#050b2a] text-white flex flex-col justify-center items-center h-80">
        <h1 className="text-3xl font-bold">Privacy Policy</h1>

        <div className="flex items-center mt-4 font-medium">
          <h6 className="mr-2">Home</h6>

          <span className="h-1 w-1 rounded-full bg-white "></span>

          <h6 className="ml-2">Privacy Policy</h6>
        </div>
      </div>
      <div className="px-10  mt-20 text-blue-950 font-bold  ">
        <h1 className="text-3xl">Privacy Policy</h1>
      </div>

      <div className="container p-8 m-18 bg-white-200 ">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 px-5 ">
            1. Information We Collect
          </h2>

          <div className="mx-5">
            <ul className="m-3 pl-5  list-disc">
              <li className="p-1">
                Personal Information: Name, address, contact details, date of
                birth, Social Security number, and other identification
                information.
              </li>

              <li className="p-1">
                Financial Information: Income details, credit history, loan
                application information, employment details, and other financial
                data.
              </li>

              <li className="p-1">
                Usage Data: Information about how you interact with our website,
                app, and services.
              </li>

              <li className="p-1">
                Communications: Records of your communication with us, including
                emails, phone calls, and chat logs.
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 px-5 ">
            2. How We Collect Information
          </h2>

          <div className="px-4">
            <ul className="m-3 pl-5  list-disc">
              <li className="p-1">
                Directly from you when you apply for a loan, communicate with
                us, or use our services.
              </li>

              <li className="p-1">
                From third-party sources, such as credit bureaus and financial
                institutions, to verify information provided.
              </li>

              <li className="p-1">
                Through cookies and similar tracking technologies when you visit
                our website.
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 px-5 ">
            3. Use of Information
          </h2>

          <div className="px-4 mt-4">
            <p className="px-4">
              We may use your information for the following purposes:
            </p>

            <ul className="m-2 pl-5  list-disc">
              <li className="p-1">
                Communication: Contacting you regarding your loan application,
                updates, and related matters.
              </li>

              <li className="p-1">
                Customer Service: Providing support and assistance to address
                your inquiries and concerns.
              </li>

              <li className="p-1">
                Compliance and Legal Obligations: Complying with applicable
                laws, regulations, and legal processes..
              </li>

              <li className="p-1">
                Processing Loan Applications: Evaluating your eligibility for
                loans, processing applications, and disbursing funds.
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 px-5 ">
            4. Sharing of Information
          </h2>

          <div className="px-4 mt-4">
            <p className="px-4">
              We may share your information with the following parties:
            </p>

            <ul className="m-3 pl-5  list-disc">
              <li className="p-1">
                Service Providers: Third-party partners and vendors who assist
                in loan processing, customer service, and related activities.
              </li>

              <li className="p-1">
                Affiliates: Other companies within our corporate group, if
                applicable.
              </li>

              <li className="p-1">
                Legal and Regulatory Authorities: When reqlired by law,
                regulation, or court order.
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 px-5 ">
            5. Data Security
          </h2>

          <div className="px-4">
            <ul className="m-3 pl-5  list-disc">
              <li>
                Legal and Regulatory Authorities: When required by law,
                regulation, or court order.
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 px-5 ">
            6. Your Choices
          </h2>

          <div className="px-4">
            <ul className="m-3 pl-5  list-disc">
              <li className="p-1">
                Access and Correction: You can access and update your personal
                information by contacting us.
              </li>

              <li className="p-1">
                Communication Preferences: You can choose to receive or opt out
                of certain communications.
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800  px-5 ">
            7. Children's Privacy
          </h2>

          <div className="px-4">
            <ul className="m-3 pl-5 list-disc">
              <li>
                Our services are not intended for individuals under the age of
                18. We do not knowingly collect information from minors.
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 px-5">
            8. Contact Us
          </h2>

          <div className="px-4">
            <ul className="m-3 pl-5  list-disc">
              <li>
                If you have questions, concerns, or requests related to your
                personal information, please contact us at +91-7874990627.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default Policy;
