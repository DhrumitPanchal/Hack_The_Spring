import React, { useState, useContext, useEffect } from "react";
// import { FaMessage, FaPen } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "./Context";
function ProfilePage() {
  const [userData, setUserData] = useState({});
  const { user, allUsers } = useContext(Context);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id === user?.userId) {
      navigate("/profile");
    }
    const Data = allUsers.filter((data) => data?._id === id);
    setUserData(Data[0]);
  }, [id, allUsers]);

  return (
    <div className="relative  h-screen w-full pt-[5rem]">
      <div className=" px-[1.2rem] py-6">
        <div className="md:flex gap-[2rem] no-wrap  ">
          <div className="h-[33.6rem] w-full md:w-[19rem] md:mx-2 border-[2px] overflow-hidden border-ButtonColor rounded-[8px] ">
            <div className="pt-[1rem] relative z-20 mx-auto h-[17rem]  w-full flex justify-center items-center">
              <img
                src={userData?.profilePic}
                className=" z-10 absolute h-[14rem] w-[14rem] border-[4px] overflow-hidden border-ButtonColor  rounded-full "
                alt=""
              />
              <div className="z-0 top-0 left-0 absolute h-[10rem] w-full  bg-ButtonColor"></div>
            </div>

            <div className="m-[1rem] py-[2rem] px-[1rem] rounded-[.4rem] bg-ButtonColor/30">
              <h3 className="leading-6 text-gray-600 font-lg text-semibold">
                Owner at Her Company Inc.
              </h3>
              <p className="text-sm leading-6 text-gray-500 hover:text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                veniam.
              </p>
              <ul className="px-3  py-[.4rem] mt-3 text-gray-600 bg-gray-100 divide-y rounded shadow-sm hover:text-gray-700 hover:shadow">
                <li className="flex items-center py-3">
                  <span>Status</span>
                  <span className="ml-auto">
                    <span className="px-2 py-1 text-sm text-white rounded bg-primaryColor">
                      {userData?.role}
                    </span>
                  </span>
                </li>
                {/* {userWorker && (
                  <li className="flex items-center py-3">
                    <span>Work</span>
                    <span className="ml-auto">{data?.Catagory}</span>
                  </li>
                )} */}
              </ul>
            </div>
          </div>

          <div className="w-full h-64 md:w-10/12 max-sm:h-fit">
            <div className="relative max-sm:mt-[2rem] w-full bg-white pb-[1.2rem] border-[2px] overflow-hidden border-ButtonColor  rounded-[8px]  ">
              <div className="px-[2.6rem] py-[1.4rem] flex items-center justify-between space-x-2 font-semibold leading-8 text-gray-900  bg-ButtonColor">
                <div className="flex gap-[1rem]">
                  <div className=" h-[2.2rem] w-[2.2rem] flex justify-center items-center rounded-full border-[.2rem] border-white">
                    <FaRegUser className="text-[1.1rem] text-white" />
                  </div>
                  <span className="tracking-wide text-[2rem] text-white">
                    About
                  </span>
                </div>
              </div>
              <div className="text-gray-700 mt-[1rem] pr-[6rem]  px-[2rem] pb-[2rem] ">
                <div className="grid text-sm md:grid-cols-1">
                  <div className="grid grid-cols-2 max-sm:grid-cols-1 text-[1.4rem] my-[.6rem]">
                    <div className="px-4 py-2 font-semibold">Name</div>
                    <input
                      required
                      name="name"
                      placeholder="Name"
                      value={userData?.name}
                      className="px-4 py-2 -ml-[12rem] max-sm:-ml-0 bg-transparent border-b-2 outline-none focus:border-ButtonColor duration-300"
                      disabled
                    />
                  </div>

                  <div className="grid grid-cols-2 max-sm:grid-cols-1 text-[1.4rem] my-[.6rem]">
                    <div className="px-4 py-2 font-semibold">Email.</div>
                    <div className=" -ml-[12rem] max-sm:ml-0">
                      <input
                        type="text"
                        required
                        name="email"
                        className="w-full px-4 py-2 duration-300 bg-transparent border-b-2 outline-none max-sm:ml-0 focus:border-ButtonColor"
                        placeholder="Email"
                        value={userData?.email}
                        disabled
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 max-sm:grid-cols-1 text-[1.4rem] my-[.6rem] ">
                    <div className="px-4 py-2 font-semibold">Gender</div>

                    <div className="px-4 py-2 -ml-[12rem] max-sm:ml-0 flex gap-[2rem] justify-start border-b-2 border-slate-200">
                      <div className="">{userData?.gender}</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 max-sm:grid-cols-1 text-[1.4rem] my-[.6rem]">
                    <div className="px-4 py-2 font-semibold">Contact No.</div>

                    <input
                      required
                      name="contactNo"
                      value={userData?.contactNo}
                      type="tel"
                      className="px-4 py-2 -ml-[12rem] border-b-2 max-sm:ml-0 bg-transparent outline-none focus:border-ButtonColor transition-colors duration-300"
                      placeholder="Add contact number"
                      disabled
                    />
                  </div>
                  <div className="grid grid-cols-2 max-sm:grid-cols-1 text-[1.4rem] my-[.6rem]">
                    <div className="px-4 py-2 font-semibold">Address</div>
                    <input
                      required
                      name="address"
                      value={userData?.address}
                      className="px-4 py-2 -ml-[12rem] bg-transparent max-sm:ml-0 border-b-2 outline-none focus:border-ButtonColor duration-300"
                      placeholder="Address"
                      disabled
                    />
                  </div>

                  <div className="grid grid-cols-2 max-sm:grid-cols-1 text-[1.4rem] my-[.6rem]">
                    <div className="px-4 py-2 font-semibold">Birthday</div>

                    <input
                      required
                      name="birthday"
                      value={userData?.birthday}
                      className="w-[16rem] px-4 py-2 -ml-[12rem] max-sm:ml-0 bg-transparent border-b-2  outline-none focus:border-ButtonColor duration-300"
                      type="date"
                      disabled
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
