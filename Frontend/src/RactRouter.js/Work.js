import React, { useState, useEffect, useRef } from "react";
import Navebar from "./Navebar";
import Footer from "./Footer";
function Work() {
  const [openWork, setOpenWork] = useState(false);
  const [openCreateWork, setOpenCreateWork] = useState(false);
  const [openWorkData, setOpenWorkData] = useState({});
  const data = [
    {
      id: 1,
      date: "10/10/2023",
      time: "below 3Pm",
      descripition:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam enim libero eius laboriosam, illum",
    },
    {
      id: 1,
      date: "10/10/2023",
      time: "below 3Pm",
      descripition:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam enim libero eius laboriosam, illum",
    },
    {
      id: 1,
      date: "10/10/2023",
      time: "below 3Pm",
      descripition:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam enim libero eius laboriosam, illum",
    },
    {
      id: 1,
      date: "10/10/2023",
      time: "below 3Pm",
      descripition:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam enim libero eius laboriosam, illum",
    },
    {
      id: 1,
      date: "10/10/2023",
      time: "below 3Pm",
      descripition:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam enim libero eius laboriosam, illum",
    },
  ];

  return (
    <section className="relative w-full h-full text-black">
      {openCreateWork && (
        <div
          onClick={(e) => {
            setOpenCreateWork(!openCreateWork);
            e.stopPropagation();
          }}
          className=" backdrop-blur-[2px] w-full pt-[2rem] fixed h-full flex justify-center items-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className=" flex gap-[1.2rem] p-[2rem] pt-5  w-[35%] max-sm:w-[90%] flex-col rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.4)] bg-gray-100 text-gray-500"
          >
            <h1 className="font-bold text-[2vw] text-black  text-center w-full ">
              Add Work
            </h1>
            <div className=" flex gap-[2rem] justify-between items-end">
              <div className="w-1/2">
                <h1 className="font-semibold">Name</h1>
                <input
                  type="text"
                  className="w-full p-2 pl-3 border-2 border-gray-200 rounded-md outline-none focus:border-ButtonColor"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="Catagory"></label>
                <select
                  name="Catagory"
                  className="w-full mt-[1rem] px-[2rem] py-[.4rem] text-[1.3rem] border-2 border-gray-200  focus:border-ButtonColor outline-none p-2 rounded-md  text-black"
                >
                  <option value="" defaultChecked>
                    Catagory
                  </option>
                  <option value="">Catagory</option>
                  <option value="">Catagory</option>
                </select>
              </div>
            </div>
            {/* <div className="flex flex-col gap-2 text-primaryColor">
                        <h1 className='font-semibold capitalize'>work title</h1>
                        <input type="text" className='p-2 pl-3 border-2 rounded-md outline-none border-primaryColor/40 focus:border-primaryColor' />
                    </div> */}
            <div className="flex flex-col gap-2 ">
              <h1 className="font-semibold capitalize">Work descripton</h1>
              <textarea
                type="text"
                className="p-2 pl-3 border-2 border-gray-200 rounded-md outline-none focus:border-ButtonColor"
              />
            </div>
            {/* <div className="flex flex-col gap-2 text-primaryColor">
                        <h1 className='font-semibold capitalize'>expected budget</h1>
                        <input type="text" className='p-2 pl-3 border-2 rounded-md outline-none border-primaryColor/40 focus:border-primaryColor' />
                    </div> */}
            {/* <div className="flex flex-col gap-2 text-primaryColor">
                        <h1 className='font-semibold capitalize'>address</h1>
                        <textarea type="text" className='p-2 pl-3 border-2 rounded-md outline-none border-primaryColor/40 focus:border-primaryColor' />
                    </div> */}
            <div className=" flex gap-[2rem] justify-between items-end">
              <div className="w-1/2">
                <h1 className="font-semibold capitalize">start date</h1>
                <input
                  type="text"
                  className="w-full p-2 pl-3 border-2 border-gray-200 rounded-md outline-none focus:border-ButtonColor"
                />
              </div>
              <div className="w-1/2">
                <h1 className="font-semibold capitalize">end date</h1>
                <input
                  type="text"
                  className="w-full p-2 pl-3 border-2 border-gray-200 rounded-md outline-none focus:border-ButtonColor"
                />
              </div>
            </div>
            <button className="text-[1.2rem] bg-gradient-to-r p-2 rounded-md  bg-ButtonColor/70 hover:bg-ButtonColor focus:bg-ButtonColor text-white">
              Submit
            </button>
          </div>
        </div>
      )}

      {/* -------- popup work ------  */}
      {openWork && (
        <div
          onClick={() => setOpenWork(!openWork)}
          className=" fixed top-0 bg-black/10 backdrop-blur-[2px] w-full h-screen flex justify-center items-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative overflow-hidden flex max-sm:flex-col max-sm:gap-0 gap-[1.4rem] rounded-[.8rem] h-[24rem] max-sm:h-[40rem] w-fit max-sm:w-[75%]  bg-white border-[1px] border-slate-300 shadow-[0_0_10px_rgba(0,0,0,0.4)]"
          >
            <div className="h-full w-[24rem] max-sm:w-full max-sm:h-[20rem] p-[1rem] max-sm:pb-0 ">
              <img
                src="./image2.jpg"
                alt=""
                srcset=""
                className="border-[1px] border-slate-400 h-full w-full rounded-[1rem] "
              />
            </div>
            <div className="flex flex-col gap-[.4rem] w-[20rem] max-sm:w-full py-[1.4rem] max-sm:px-[1rem] pr-[.8rem]">
              <h2 className="mx-auto text-[1.6rem] font-bold text-primaryColor">
                Wooden Bed Making
              </h2>
              <h2 className="mt-[.4rem]">Location</h2>
              <h2 className="">Number of workers : </h2>
              <div className="mt-[rem]">
                <div className="w-full flex gap-[1.2rem] ">
                  <h2>
                    <span className="font-semibold">start :</span> 10/10/2023
                  </h2>
                  <h2>
                    <span className="font-semibold">end :</span> 10/11/2023
                  </h2>
                </div>
              </div>

              <div>
                <h2 className="text-[1.1rem]  capitalize">
                  <span className="font-semibold">descripition :</span>{" "}
                  {openWorkData.descripition}
                </h2>
              </div>
              <button
                onClick={() => setOpenWork(!openWork)}
                className="absolute rounded-[.5rem] bottom-[1rem] px-[2rem] py-[.3rem] font-semibold  text-white w-fit bg-primaryColor"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="pt-[3.5rem] mt-[1.2rem] max-sm:mt-[1.8rem] px-[1.6rem] flex justify-between items-center bg-slate-100">
        <h2 className="  text-[2.2rem] font-bold capitalize text-primaryColor">
          work
        </h2>
        <button
          onClick={() => setOpenCreateWork(!openCreateWork)}
          className=" py-[.3rem] px-[1rem] rounded-[.4rem] text-white bg-ButtonColor"
        >
          Add Work
        </button>
      </div>

      {/* -------- main work ------  */}

      <div className="bg-slate-100 min-h-[40rem]  px-[2rem] py-[2rem] ">
        <div className="flex flex-wrap gap-[1rem] max-sm:gap-[1.4rem]">
          {data.map((e) => {
            return (
              <div className="overflow-hidden p-[.8rem] flex rounded-[.8rem] rounded-t-none border-t-[3px] border-primaryColor gap-[1rem] h-full w-fit max-sm:w-full bg-primaryColor/10">
                <div className="flex flex-col gap-[.8rem] justify-between items-start w-[21rem] px-[1rem] pb-[.5rem]">
                  <div className="flex flex-col">
                    <h2 className="text-[1.3rem] mt-[.6rem] font-bold text-primaryColor">
                      Wooden Bad Making
                    </h2>
                    <h2 className="mt-[.6rem] text-[.9rem]">location : 32</h2>
                    <h2>number of worker :</h2>
                    <h2 className="mt-[.2rem] font-medium">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Excepturi voluptatum si est sed eligendi alias autem non
                      nemo minima exercitationem.
                    </h2>
                    <h2 className="text-[.9rem] mt-[.1rem] capitalize ">
                      posted 1h ago
                    </h2>
                  </div>
                  <button
                    onClick={() => {
                      setOpenWork(!openWork);
                      setOpenWorkData(e);
                    }}
                    className="py-[.4rem] px-[1rem] mt-[.4rem] border-[1px] w-full border-slate-300 text-white  transition-colors duration-200 bg-primaryColor rounded-[.4rem] font-medium mb-[.2rem] text-[1.1rem]"
                  >
                    View details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </section>
  );
}

export default Work;
