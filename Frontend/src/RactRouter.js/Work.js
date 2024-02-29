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
    <section className="relative h-full w-full text-black">
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
            className=" flex gap-[1.2rem] p-[2rem] pt-5  w-[35%] flex-col rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.4)] bg-gray-100 text-gray-500"
          >
            <h1 className="font-bold text-[2vw] text-black  text-center w-full ">
              Add Work
            </h1>
            <div className=" flex gap-[2rem] justify-between items-end">
              <div className="w-1/2">
                <h1 className="font-semibold">Name</h1>
                <input
                  type="text"
                  className="w-full pl-3  border-2 border-gray-200  focus:border-ButtonColor outline-none p-2 rounded-md"
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
                        <input type="text" className='pl-3  border-2 border-primaryColor/40 focus:border-primaryColor outline-none p-2 rounded-md' />
                    </div> */}
            <div className="flex flex-col gap-2 ">
              <h1 className="font-semibold capitalize">Work descripton</h1>
              <textarea
                type="text"
                className="pl-3  border-2 border-gray-200  focus:border-ButtonColor outline-none p-2 rounded-md"
              />
            </div>
            {/* <div className="flex flex-col gap-2 text-primaryColor">
                        <h1 className='font-semibold capitalize'>expected budget</h1>
                        <input type="text" className='pl-3  border-2 border-primaryColor/40 focus:border-primaryColor outline-none p-2 rounded-md' />
                    </div> */}
            {/* <div className="flex flex-col gap-2 text-primaryColor">
                        <h1 className='font-semibold capitalize'>address</h1>
                        <textarea type="text" className='pl-3  border-2 border-primaryColor/40 focus:border-primaryColor outline-none p-2 rounded-md' />
                    </div> */}
            <div className=" flex gap-[2rem] justify-between items-end">
              <div className="w-1/2">
                <h1 className="font-semibold capitalize">start date</h1>
                <input
                  type="text"
                  className="w-full pl-3  border-2 border-gray-200  focus:border-ButtonColor outline-none p-2 rounded-md"
                />
              </div>
              <div className="w-1/2">
                <h1 className="font-semibold capitalize">end date</h1>
                <input
                  type="text"
                  className="w-full pl-3  border-2 border-gray-200  focus:border-ButtonColor outline-none p-2 rounded-md"
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
            className="relative overflow-hidden flex  gap-[1.4rem] rounded-[.8rem] h-[24rem] w-fit bg-white border-[1px] border-slate-300 shadow-[0_0_10px_rgba(0,0,0,0.4)]"
          >
            <div className="h-full w-[24rem] p-[1rem] ">
              <img
                src="./image2.jpg"
                alt=""
                srcset=""
                className="border-[1px] border-slate-400 h-full w-full rounded-[1rem] "
              />
            </div>
            <div className="flex flex-col gap-[1rem] w-[20rem] py-[1.4rem] pr-[.8rem]">
              <h2 className="mx-auto text-[1.6rem] font-bold text-primaryColor">
                Wooden Bed Making
              </h2>
              <div className="mt-[rem]">
                <h2 className="text-[1.1rem] font-semibold capitalize">
                  date :
                </h2>
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
              <div className="overflow-hidden p-[.8rem] flex rounded-[.8rem] gap-[1rem] h-full w-fit border-[1px] border-slate-300 max-sm:w-full bg-white">
                <div className="h-full w-[5.8rem] ">
                  <img
                    src="./image2.jpg"
                    alt=""
                    srcset=""
                    className="h-full w-full border-[1px] border-slate-400  rounded-[.4rem] "
                  />
                </div>
                <div className="flex flex-col justify-between items-start w-[14rem] pr-[.8rem]">
                  <div className="flex flex-col">
                    <h2 className="text-[1.3rem]  font-bold text-primaryColor">
                      Wooden Bad Making
                    </h2>
                    <h2 className="text-[1.1rem] capitalize font-semibold text-TextColor2">
                      date : {e.date}
                    </h2>
                  </div>
                  <button
                    onClick={() => {
                      setOpenWork(!openWork);
                      setOpenWorkData(e);
                    }}
                    className="py-[.1rem] px-[1rem] border-[1px] border-slate-300 hover:bg-primaryColor hover:text-white transition-colors duration-200 bg-slate-200 rounded-[.4rem] font-medium mb-[.2rem] text-[.8rem]"
                  >
                    View
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
