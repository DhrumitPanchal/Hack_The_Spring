import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import Footer from "./Footer";
import { Context } from "./Context";

function AddWork() {
  const [openWork, setOpenWork] = useState(false);
  const [openCreateWork, setOpenCreateWork] = useState(false);
  const [openUpdateWork, setOpenUpdateWork] = useState(false);
  const [openWorkData, setOpenWorkData] = useState({});
  const [applicants, setApplicants] = useState([]);
  const navigate = useNavigate();

  const {
    user,
    works,
    allUsers,
    handelAddWork,
    handelGetAllWorks,
    handelUpdateWork,
    handelDeleteWork,
  } = useContext(Context);
  const [allWork, setAllWork] = useState([]);
  const [addWork, setAddWork] = useState({
    title: "",
    location: "",
    workerQuantity: 0,
    startDate: "",
    endDate: "",
    description: "",
  });

  const [updateWork, setUpdateWork] = useState({
    _id: "",
    postedBY: "",
    title: "",
    location: "",
    workerQuantity: 0,
    startDate: "",
    endDate: "",
    description: "",
    postedDate: "",
    applicant: [],
  });
  const handelInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setAddWork({ ...addWork, [name]: value });
  };

  const handelUpdateInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUpdateWork({ ...updateWork, [name]: value });
  };

  const handelSubmit = () => {
    handelAddWork(addWork);
    setOpenCreateWork(false);
    handelGetAllWorks();
  };

  const OpenUpdateWork = () => {
    setOpenWork(false);
    setOpenUpdateWork(true);
    setUpdateWork(openWorkData);
  };

  const submitUpdateWork = async () => {
    await handelUpdateWork(updateWork?._id, updateWork);
    setOpenUpdateWork(false);
    handelGetAllWorks();
  };

  const filterApplicants = (work) => {
    const filteredWorkers = allUsers.filter((item) =>
      work.applicant.some((e) => {
        return e?.applicantId === item._id && user;
      })
    );
    console.log("filtered applicants : " + filterApplicants);
    setApplicants(filteredWorkers);
  };

  useEffect(() => {
    const filterUserWorks = works.filter(
      (item) => item?.postedBY === user.userId
    );
    setAllWork(filterUserWorks);
  }, [works, handelAddWork, handelGetAllWorks, user.userId]);

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
              <div className="w-full">
                <h1 className="font-semibold">Name</h1>
                <input
                  type="text"
                  name="title"
                  value={addWork.title}
                  onChange={(e) => handelInput(e)}
                  className="w-full p-2 pl-3 border-2 border-gray-200 rounded-md outline-none focus:border-ButtonColor"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 ">
              <h1 className="font-semibold capitalize">Work description</h1>
              <textarea
                name="description"
                value={addWork.description}
                onChange={(e) => handelInput(e)}
                type="text"
                className="p-2 pl-3 border-2 border-gray-200 rounded-md outline-none focus:border-ButtonColor"
              />
            </div>

            <div className=" flex gap-[2rem] justify-between items-end">
              <div className="w-1/2">
                <h1 className="font-semibold capitalize">start date</h1>
                <input
                  name="startDate"
                  value={addWork.startDate}
                  onChange={(e) => handelInput(e)}
                  type="date"
                  className="w-full p-2 pl-3 border-2 border-gray-200 rounded-md outline-none focus:border-ButtonColor"
                />
              </div>
              <div className="w-1/2">
                <h1 className="font-semibold capitalize">end date</h1>
                <input
                  name="endDate"
                  value={addWork.endDate}
                  onChange={(e) => handelInput(e)}
                  type="date"
                  className="w-full p-2 pl-3 border-2 border-gray-200 rounded-md outline-none focus:border-ButtonColor"
                />
              </div>
            </div>
            <input
              name="location"
              value={addWork.location}
              onChange={(e) => handelInput(e)}
              type="text"
              placeholder="location"
              className="w-full p-2 pl-3 border-2 border-gray-200 rounded-md outline-none focus:border-ButtonColor"
            />

            <input
              name="workerQuantity"
              value={addWork.workerQuantity}
              onChange={(e) => handelInput(e)}
              type="number"
              placeholder="number of peoples required"
              className="w-full p-2 pl-3 border-2 border-gray-200 rounded-md outline-none focus:border-ButtonColor"
            />
            <button
              onClick={() => handelSubmit()}
              className="text-[1.2rem] bg-gradient-to-r p-2 rounded-md  bg-ButtonColor/70 hover:bg-ButtonColor focus:bg-ButtonColor text-white"
            >
              Submit
            </button>
          </div>
        </div>
      )}

      {/* ------------------ update work ---------------------- */}
      {openUpdateWork && (
        <div
          onClick={(e) => {
            setOpenUpdateWork(!openUpdateWork);
            e.stopPropagation();
          }}
          className=" backdrop-blur-[2px] w-full pt-[2rem] fixed h-full flex justify-center items-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className=" flex gap-[1.2rem] p-[2rem] pt-5  w-[35%] max-sm:w-[90%] flex-col rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.4)] bg-gray-100 text-gray-500"
          >
            <h1 className="font-bold text-[2vw] text-black  text-center w-full ">
              Update Work
            </h1>
            <div className=" flex gap-[2rem] justify-between items-end">
              <div className="w-full">
                <h1 className="font-semibold">Name</h1>
                <input
                  type="text"
                  name="title"
                  value={updateWork.title}
                  onChange={(e) => handelUpdateInput(e)}
                  className="w-full p-2 pl-3 border-2 border-gray-200 rounded-md outline-none focus:border-ButtonColor"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 ">
              <h1 className="font-semibold capitalize">Work description</h1>
              <textarea
                name="description"
                value={updateWork.description}
                onChange={(e) => handelUpdateInput(e)}
                type="text"
                className="p-2 pl-3 border-2 border-gray-200 rounded-md outline-none focus:border-ButtonColor"
              />
            </div>

            <div className=" flex gap-[2rem] justify-between items-end">
              <div className="w-1/2">
                <h1 className="font-semibold capitalize">start date</h1>
                <input
                  name="startDate"
                  value={updateWork.startDate}
                  onChange={(e) => handelUpdateInput(e)}
                  type="date"
                  className="w-full p-2 pl-3 border-2 border-gray-200 rounded-md outline-none focus:border-ButtonColor"
                />
              </div>
              <div className="w-1/2">
                <h1 className="font-semibold capitalize">end date</h1>
                <input
                  name="endDate"
                  value={updateWork.endDate}
                  onChange={(e) => handelUpdateInput(e)}
                  type="date"
                  className="w-full p-2 pl-3 border-2 border-gray-200 rounded-md outline-none focus:border-ButtonColor"
                />
              </div>
            </div>
            <input
              name="location"
              value={updateWork.location}
              onChange={(e) => handelUpdateInput(e)}
              type="text"
              placeholder="location"
              className="w-full p-2 pl-3 border-2 border-gray-200 rounded-md outline-none focus:border-ButtonColor"
            />

            <input
              name="workerQuantity"
              value={updateWork.workerQuantity}
              onChange={(e) => handelUpdateInput(e)}
              type="number"
              placeholder="number of peoples required"
              className="w-full p-2 pl-3 border-2 border-gray-200 rounded-md outline-none focus:border-ButtonColor"
            />
            <button
              onClick={() => submitUpdateWork()}
              className="text-[1.2rem] bg-gradient-to-r p-2 rounded-md  bg-ButtonColor/70 hover:bg-ButtonColor focus:bg-ButtonColor text-white"
            >
              Update
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
            className=" overflow-hidden max-sm:mt-[3rem] flex max-sm:flex-col max-sm:gap-0 gap-[1.4rem] rounded-[.8rem] h-[25rem] max-sm:h-[45rem] w-[60rem] max-sm:w-[85%]  bg-white border-[1px] border-slate-300 shadow-[0_0_10px_rgba(0,0,0,0.4)]"
          >
            <div className="flex relative max-sm:h-[40rem] max-sm:border-b-[2px] max-sm:border-primaryColor flex-col gap-[.4rem] w-1/2  max-sm:w-full p-[1.4rem] max-sm:px-[1rem] pr-[.8rem]">
              <div className="flex gap-[1rem] w-full h-fit">
                <div className="flex flex-col">
                  <h2 className="capitalize text-[1.4rem] font-semibold text-primaryColor">
                    {openWorkData?.title}
                  </h2>
                  <h2 className="mt-[.4rem] text-[1.1rem] font-semibold">
                    Location :{" "}
                    <span className="font-normal">
                      {openWorkData?.location}
                    </span>
                  </h2>
                  <div className="mt-[.3rem]">
                    <div className="w-full  flex gap-[1.2rem] ">
                      <h2>
                        <span className="font-semibold">Start :</span>{" "}
                        {openWorkData?.startDate}
                      </h2>
                      <h2>
                        <span className="font-semibold">End :</span>{" "}
                        {openWorkData?.endDate}
                      </h2>
                    </div>
                  </div>
                  <div className="flex w-full gap-[1.2rem]">
                    <h2 className="font-semibold mt-[.3rem]">
                      Workers :{" "}
                      <span className="font-normal">
                        {openWorkData?.workerQuantity}
                      </span>
                    </h2>
                    <h2 className="font-semibold mt-[.3rem]">
                      Applicants :{" "}
                      <span className="font-normal">
                        {openWorkData?.applicant.length}
                      </span>
                    </h2>
                  </div>
                </div>
              </div>

              <div className="w-full ">
                <h2 className="text-[1.2rem] font-semibold capitalize">
                  description :
                  <span className="font-normal">
                    {openWorkData.description}
                  </span>
                </h2>
              </div>

              <div className="flex w-full gap-[1.2rem] absolute bottom-[1rem]">
                <button
                  onClick={() => setOpenWork(false)}
                  className=" rounded-[.5rem] px-[1rem] py-[.3rem] font-semibold  text-white w-fit bg-primaryColor/70"
                >
                  Close
                </button>

                <button
                  onClick={() => OpenUpdateWork()}
                  className=" rounded-[.5rem] px-[1rem] py-[.3rem] font-semibold  text-white w-fit bg-green-400"
                >
                  Update
                </button>

                <button
                  onClick={() => {
                    handelDeleteWork(openWorkData._id);
                    setOpenWork(!openWork);
                  }}
                  className=" rounded-[.5rem] px-[1rem] py-[.3rem] font-semibold  text-white w-fit bg-red-400"
                >
                  Delete
                </button>
              </div>
            </div>
            <div className="max-sm:hidden py-[2rem] flex justify-center items-center h-full  w-fit">
              <div className="h-full w-[.2rem] bg-primaryColor"></div>
            </div>
            <div className="flex relative h-full flex-col gap-[.4rem] w-1/2 max-sm:w-full p-[1.4rem] max-sm:pt-[.6rem] max-sm:px-[1rem] pr-[1.4rem]">
              <h2 className="capitalize text-[1.4rem] font-semibold text-primaryColor">
                applicants
              </h2>
              <div className=" w-full h-full overflow-y-auto scrollbar-thumb-blue-500 pr-[1rem]">
                {applicants.length > 0 ? (
                  applicants.map((e) => (
                    <div
                      onClick={() => navigate(`/profile/${e._id}`)}
                      className="cursor-pointer mt-[.4rem] flex justify-between items-center gap-[1.2rem] h-fit w-full px-[.8rem] py-[.4rem] rounded-[.6rem] border-[1px] border-slate-400 bg-white"
                    >
                      <div className="flex gap-[1rem]">
                        <img
                          alt=""
                          src={e?.profilePic}
                          className="h-[2.4rem] w-[2.4rem] rounded-full bg-black"
                        />
                        <div>
                          <h2 className="text-[1rem] font-semibold">
                            {e?.name}
                          </h2>
                          <h2 className="text-[.7rem] font-medium">
                            {e?.email}
                          </h2>
                        </div>
                      </div>
                      <div className="flex justify-center items-center rounded-full h-[2rem] w-[2rem] ">
                        <FaAngleRight className="text-[1rem] text-slate-300" />
                      </div>
                    </div>
                  ))
                ) : (
                  <h2 className="flex items-center justify-center w-full h-full text-[1.4rem] -mt-[.3rem] text-red-400">
                    {" "}
                    Not have any applicants{" "}
                  </h2>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="pt-[3.5rem] mt-[1.2rem] max-sm:mt-[1.8rem] px-[1.6rem] flex justify-between items-center bg-slate-100">
        <h2 className="  text-[2.2rem] font-bold capitalize text-primaryColor">
          Your Works
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
          {allWork.map((work) => {
            return (
              <div
                id="workCard"
                className="overflow-hidden p-[.8rem] flex rounded-[.8rem] rounded-t-none border-t-[3px] border-primaryColor gap-[1rem] h-full w-fit max-sm:w-full bg-primaryColor/10"
              >
                <div className="flex flex-col gap-[.8rem] justify-between items-start w-[21rem] max-sm:w-full px-[1rem] pb-[.5rem]">
                  <div className="flex flex-col">
                    <h2 className="text-[1.3rem] mt-[.6rem] font-bold text-primaryColor">
                      {work?.title}
                    </h2>
                    <h2 className="mt-[.6rem] text-[.9rem]">
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
                    <h2 className="mt-[.2rem] font-medium">
                      {work?.description}
                    </h2>
                    <h2 className="text-[.9rem] mt-[.1rem] capitalize ">
                      posted 1h
                    </h2>
                  </div>
                  <button
                    id="workViewButton"
                    onClick={() => {
                      setOpenWork(!openWork);
                      setOpenWorkData(work);
                      filterApplicants(work);
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

export default AddWork;
