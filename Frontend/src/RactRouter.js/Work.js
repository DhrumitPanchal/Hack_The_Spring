import React, { useState, useEffect, useContext } from "react";
import Footer from "./Footer";
import { Context } from "./Context";
function Work() {
  const [openWork, setOpenWork] = useState(false);
  const [openWorkData, setOpenWorkData] = useState({});
  const { works, user, handelApplyForWork } = useContext(Context);
  const [allWork, setAllWork] = useState(works);

  const applyForWork = () => {
    handelApplyForWork(openWorkData?._id);
    return setOpenWork(false);
  };

  useEffect(() => {
    setAllWork(works);
  }, [works]);
  return (
    <section className="relative w-full h-full text-black">
      {/* -------- popup work ------  */}

      {openWork && (
        <div
          onClick={() => setOpenWork(!openWork)}
          className=" fixed top-0 bg-black/10 backdrop-blur-[2px] w-full h-screen flex justify-center items-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative overflow-hidden flex max-sm:flex-col max-sm:gap-0 gap-[1.4rem] rounded-[.8rem] h-[24rem] max-sm:mt-[3rem] max-sm:min-h-[40rem] max-sm:max-h-fit   w-fit max-sm:w-[85%]  bg-white border-[1px] border-slate-300 shadow-[0_0_10px_rgba(0,0,0,0.4)]"
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
              <h2 className="capitalize  text-[1.6rem] font-bold text-primaryColor">
                {openWorkData?.title}
              </h2>
              <h2 className="mt-[.4rem] capitalize font-semibold">
                Location :{" "}
                <span className="font-normal">{openWorkData?.location}</span>
              </h2>
              <div className="flex gap-[1.2rem]">
                <h2 className="font-semibold capitalize ">
                  Workers :{" "}
                  <span className="font-normal">
                    {openWorkData?.workerQuantity}
                  </span>
                </h2>
                <h2 className="font-semibold capitalize ">
                  Applicants :{" "}
                  <span className="font-normal">
                    {openWorkData?.applicant?.length}
                  </span>
                </h2>
              </div>
              <div className="mt-[rem]">
                <div className="w-full flex gap-[1.2rem] ">
                  <h2>
                    <span className="font-semibold capitalize">start :</span>{" "}
                    {openWorkData?.startDate}
                  </h2>
                  <h2>
                    <span className="font-semibold capitalize">end :</span>{" "}
                    {openWorkData?.endDate}
                  </h2>
                </div>
              </div>

              <div>
                <h2 className="text-[1.1rem]  capitalize">
                  <span className="font-semibold capitalize">
                    description :
                  </span>
                  {openWorkData.description}
                </h2>
              </div>
              <div className="absolute rounded-[.5rem] bottom-[1rem] flex gap-[1rem] w-full ">
                <button
                  onClick={() => {
                    setOpenWork(false);
                    setOpenWorkData({});
                  }}
                  className="rounded-[.5rem] px-[2rem] py-[.3rem] font-semibold  text-white w-fit bg-primaryColor/70"
                >
                  Close
                </button>
                {openWorkData.applicant.some(
                  (item) => item?.applicantId === user.userId
                ) ? (
                  <button className=" rounded-[.5rem] px-[2rem] py-[.3rem] font-semibold  text-white w-fit bg-primaryColor/20">
                    Applied
                  </button>
                ) : (
                  <button
                    onClick={() => applyForWork()}
                    className=" rounded-[.5rem] px-[2rem] py-[.3rem] font-semibold  text-white w-fit bg-primaryColor"
                  >
                    Apply
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="pt-[3.5rem] mt-[1.2rem] max-sm:mt-[1.8rem] px-[1.6rem] flex justify-between items-center bg-slate-100">
        <h2 className="  text-[2.2rem] font-bold capitalize text-primaryColor">
          works
        </h2>
      </div>

      {/* -------- main work ------  */}

      <div className="bg-slate-100 min-h-[40rem]  px-[2rem] py-[2rem] ">
        <div className="flex flex-wrap gap-[1rem] max-sm:gap-[1.4rem]">
          {allWork.map((work) => {
            return (
              <div
                key={work?._id}
                className="overflow-hidden p-[.8rem] flex rounded-[.8rem] rounded-t-none border-t-[3px] border-primaryColor gap-[1rem] h-full w-fit max-sm:w-full bg-primaryColor/10"
              >
                <div className="flex flex-col gap-[.8rem] justify-between items-start w-[21rem] max-sm:w-full px-[1rem] pb-[.5rem]">
                  <div className="flex flex-col">
                    <h2 className="text-[1.3rem] mt-[.6rem] font-bold text-primaryColor">
                      {work?.title}
                    </h2>
                    <h2 className="mt-[.6rem] text-[.9rem] capitalize">
                      {work?.location}
                    </h2>
                    <div className="flex gap-[1.2rem]">
                      <h2 className="capitalize ">
                        Workers :{" "}
                        <span className="font-normal">
                          {work?.workerQuantity}
                        </span>
                      </h2>
                      <h2 className="capitalize ">
                        Applicants :{" "}
                        <span className="font-normal">
                          {work?.applicant?.length}
                        </span>
                      </h2>
                    </div>
                    <h2 className="mt-[.2rem] text-[1.1rem] font-medium">
                      {work?.description}
                    </h2>
                    <h2 className="text-[.9rem] mt-[.1rem] capitalize ">
                      posted 1h
                    </h2>
                  </div>
                  <button
                    onClick={() => {
                      setOpenWork(!openWork);
                      setOpenWorkData(work);
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
