import React, { useState, useContext } from "react";
import Navebar from "./Navebar";
import Footer from "./Footer";
import { Context } from "./Context";
function Contect() {
  const { handelSendMessage } = useContext(Context);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNo: null,
    message: "",
  });

  const handelInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };
  return (
    <>
      <section className="relative flex text-gray-600 max-sm:flex-col ">
        <div className="h-screen w-1/2 max-sm:w-full flex justify-center items-center bg-[#006fcb]/50">
          <img src="./conteact.png" className="h-[35rem]" alt="" />
        </div>
        <div className="container w-1/2 py-24 max-sm:w-full">
          <div className="flex flex-col w-full mb-12 text-center">
            <h1 className="mb-1 text-2xl font-medium text-gray-900 underline sm:text-3xl title-font">
              Contact Us
            </h1>
          </div>
          <div className="w-full px-[4rem] max-sm:px-[2rem]">
            <div className="flex flex-col gap-[.2rem]">
              <div className="w-full p-2 max-sm:w-full">
                <input
                  type="text"
                  onChange={(e) => handelInput(e)}
                  value={formData?.name}
                  name="name"
                  placeholder="Name"
                  className="w-full text-[1.1rem] placeholder:text-ButtonColor/70 bg-gray-100 bg-opacity-50 rounded border-[1.6px] border-ButtonColor/40 focus:border-ButtonColor outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 "
                />
              </div>
              <div className="w-full p-2 max-sm:w-full">
                <input
                  type="email"
                  onChange={(e) => handelInput(e)}
                  value={formData?.email}
                  name="email"
                  placeholder="Email"
                  className="w-full text-[1.1rem] placeholder:text-ButtonColor/70 bg-gray-100 bg-opacity-50 rounded border-[1.6px] border-ButtonColor/40 focus:border-ButtonColor text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 "
                />
              </div>

              <div className="w-full p-2 max-sm:w-full">
                <input
                  type="number"
                  onChange={(e) => handelInput(e)}
                  value={formData?.contactNo}
                  name="contactNo"
                  placeholder="Mobile Number"
                  className="w-full text-[1.1rem] placeholder:text-ButtonColor/70 bg-gray-100 bg-opacity-50 rounded border-[1.6px] border-ButtonColor/40 focus:border-ButtonColor text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 "
                />
              </div>
              <div className="w-full p-2">
                <textarea
                  name="message"
                  onChange={(e) => handelInput(e)}
                  value={formData?.message}
                  placeholder="Message"
                  rows={3}
                  className="w-full text-[1.1rem] placeholder:text-ButtonColor/70 bg-gray-100 bg-opacity-50 rounded border-[1.6px] border-ButtonColor/40 focus:border-ButtonColor text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 "
                  defaultValue={""}
                />
              </div>
              <div className="mt-[1rem] p-2 w-full">
                <button
                  onClick={() => handelSendMessage(formData)}
                  className="flex px-8 py-2 mx-auto text-lg text-white border-0 rounded bg-ButtonColor/80 focus:outline-none hover:bg-ButtonColor"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contect;
