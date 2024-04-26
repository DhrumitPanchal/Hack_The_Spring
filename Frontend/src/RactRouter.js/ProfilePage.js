import React, { useState, useContext } from "react";
// import { FaMessage, FaPen } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import { Context } from "./Context";
function ProfilePage() {
  const [proEditable, setProEditable] = useState(false);
  const [userWorker, setUserWorker] = useState(false);
  const [data, setData] = useState({});

  const { user, setUser, updateUserDetails } = useContext(Context);
  const navigate = useNavigate();

  const handelInput = (event) => {
    if (proEditable) {
      const name = event.target.name;
      const value = event.target.value;
      setUser({ ...user, [name]: value });
    }
  };

  const logout = () => {
    Cookies.remove("accessToken");
    navigate("/login");
  };
  console.log("profile url : " + user?.profilePic);
  return (
    <div className="relative  h-screen w-full pt-[5rem]">
      <div className=" px-[1.2rem] p-5">
        <div className="md:flex gap-[2rem] no-wrap  ">
          {/* <div className="absolute top-[5rem] right-[1rem] bg-red-400 h-[2rem] w-[3rem] t">Edit</div> */}

          <div className=" w-full md:w-[19rem] md:mx-2 border-[2px] overflow-hidden border-ButtonColor rounded-[8px] ">
            <div className="">
              <div className="relative z-20 mx-auto h-[17rem]  w-full flex justify-center items-center">
                <img
                  src={user?.profilePic}
                  className=" z-10 absolute h-[14rem] w-[14rem] border-[4px] overflow-hidden border-ButtonColor  rounded-full "
                  alt=""
                  srcset=""
                />
                <div className="z-0 top-0 left-0 absolute h-[10rem] w-full  bg-ButtonColor"></div>
              </div>

              <div className="overflow-hidden image">
                <img
                  className="w-full h-auto mx-auto"
                  src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                  alt=""
                />
              </div>
            </div>
            <h2 className="text-center text-[1.1rem] font-medium">
              7658b876823768
            </h2>
            <div className="m-[1rem] p-[1rem] rounded-[.4rem] bg-ButtonColor/30">
              <input
                required
                onChange={(e) => handelInput(e)}
                name="name"
                value={user.name}
                placeholder="userName"
                className="text-xl truncate ... w-[14rem] font-bold leading-8 text-gray-900 bg-transparent "
                disabled
              />

              <h3 className="leading-6 text-gray-600 font-lg text-semibold">
                Owner at Her Company Inc.
              </h3>
              <p className="text-sm leading-6 text-gray-500 hover:text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <ul className="px-3 py-[.2rem] mt-3 text-gray-600 bg-gray-100 divide-y rounded shadow-sm hover:text-gray-700 hover:shadow">
                <li className="flex items-center py-3">
                  <span>Status</span>
                  <span className="ml-auto">
                    <span className="px-2 py-1 text-sm text-white rounded bg-primaryColor">
                      {userWorker ? "Worker" : "client"}
                    </span>
                  </span>
                </li>
                {userWorker && (
                  <li className="flex items-center py-3">
                    <span>Work</span>
                    <span className="ml-auto">{data?.Catagory}</span>
                  </li>
                )}
              </ul>
            </div>
          </div>

          <div className="w-full h-64 mx-2 md:w-10/12 max-sm:h-fit">
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

                <div
                  onClick={() => logout()}
                  className="cursor-pointer  h-[2rem] w-[6rem] flex justify-center items-center rounded-[.2rem]  text-[1rem] text-primaryColor bg-white"
                >
                  Log Out
                </div>
              </div>
              <div className="text-gray-700 mt-[1rem] pr-[6rem]  px-[2rem] pb-[2rem] ">
                <div className="grid text-sm md:grid-cols-1">
                  <div className="grid grid-cols-2 max-sm:grid-cols-1 text-[1.4rem] my-[.6rem]">
                    <div className="px-4 py-2 font-semibold">Name</div>
                    {proEditable ? (
                      <input
                        required
                        onChange={(e) => handelInput(e)}
                        name="name"
                        placeholder="Name"
                        value={user?.name}
                        className="px-4 py-2 -ml-[12rem] max-sm:ml-0 bg-transparent border-b-2 border-ButtonColor/50 outline-none focus:border-ButtonColor duration-300"
                      />
                    ) : (
                      <input
                        required
                        onChange={(e) => handelInput(e)}
                        name="name"
                        placeholder="Name"
                        value={user?.name}
                        className="px-4 py-2 -ml-[12rem] max-sm:-ml-0 bg-transparent border-b-2 outline-none focus:border-ButtonColor duration-300"
                        disabled
                      />
                    )}
                  </div>

                  <div className="grid grid-cols-2 max-sm:grid-cols-1 text-[1.4rem] my-[.6rem]">
                    <div className="px-4 py-2 font-semibold">Email.</div>
                    <div className=" -ml-[12rem] max-sm:ml-0">
                      {proEditable ? (
                        <input
                          type="text"
                          required
                          onChange={(e) => handelInput(e)}
                          name="email"
                          className="w-full px-4 py-2 duration-300 bg-transparent border-b-2 outline-none max-sm:ml-0 border-ButtonColor/50 focus:border-ButtonColor"
                          placeholder="Email"
                          value={user?.email}
                        />
                      ) : (
                        <input
                          type="text"
                          required
                          onChange={(e) => handelInput(e)}
                          name="email"
                          className="w-full px-4 py-2 duration-300 bg-transparent border-b-2 outline-none max-sm:ml-0 focus:border-ButtonColor"
                          placeholder="Email"
                          value={user?.email}
                          disabled
                        />
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 max-sm:grid-cols-1 text-[1.4rem] my-[.6rem] ">
                    <div className="px-4 py-2 font-semibold">Gender</div>

                    {!proEditable ? (
                      <div className="px-4 py-2 -ml-[12rem] max-sm:ml-0 flex gap-[2rem] justify-start border-b-2 border-slate-200">
                        <div className="">{user?.gender}</div>
                      </div>
                    ) : (
                      <div className="px-4 py-2 -ml-[12rem] max-sm:ml-0 flex gap-[2rem] justify-start">
                        <div className="flex gap-[.8rem] items-center capitalize">
                          {user.gender === "male" ? (
                            <input
                              type="radio"
                              name="gender"
                              id="male"
                              onClick={(e) => handelInput(e)}
                              value="male"
                              checked
                              className="scale-[1.6]"
                            />
                          ) : (
                            <input
                              type="radio"
                              name="gender"
                              id="male"
                              onClick={(e) => handelInput(e)}
                              value="male"
                              className="scale-[1.6]"
                            />
                          )}
                          <label htmlFor="male">male</label>
                        </div>
                        <div className="flex gap-[.8rem] items-center capitalize">
                          {
                            <input
                              type="radio"
                              name="gender"
                              id="female"
                              onClick={(e) => handelInput(e)}
                              value="female"
                              className="scale-[1.6]"
                            />
                          }
                          <label htmlFor="female">female</label>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="grid grid-cols-2 max-sm:grid-cols-1 text-[1.4rem] my-[.6rem]">
                    <div className="px-4 py-2 font-semibold">Contact No.</div>
                    {proEditable ? (
                      <input
                        required
                        onChange={(e) => handelInput(e)}
                        name="contactNo"
                        value={user?.contactNo}
                        type="tel"
                        className="px-4 py-2 -ml-[12rem] border-b-2 max-sm:ml-0 border-ButtonColor/50 outline-none focus:border-ButtonColor transition-colors duration-300"
                        placeholder="Add contact number"
                      />
                    ) : (
                      <input
                        required
                        onChange={(e) => handelInput(e)}
                        name="contactNo"
                        value={user?.contactNo}
                        type="tel"
                        className="px-4 py-2 -ml-[12rem] border-b-2 max-sm:ml-0 bg-transparent outline-none focus:border-ButtonColor transition-colors duration-300"
                        placeholder="Add contact number"
                        disabled
                      />
                    )}
                  </div>
                  <div className="grid grid-cols-2 max-sm:grid-cols-1 text-[1.4rem] my-[.6rem]">
                    <div className="px-4 py-2 font-semibold">Address</div>

                    {proEditable ? (
                      <input
                        required
                        onChange={(e) => handelInput(e)}
                        name="address"
                        value={user?.address}
                        className="px-4 py-2 -ml-[12rem] bg-transparent max-sm:ml-0 border-b-2 border-ButtonColor/50 outline-none focus:border-ButtonColor duration-300"
                        placeholder="Address"
                      />
                    ) : (
                      <input
                        required
                        onChange={(e) => handelInput(e)}
                        name="address"
                        value={user?.address}
                        className="px-4 py-2 -ml-[12rem] bg-transparent max-sm:ml-0 border-b-2 outline-none focus:border-ButtonColor duration-300"
                        placeholder="Address"
                        disabled
                      />
                    )}
                  </div>

                  <div className="grid grid-cols-2 max-sm:grid-cols-1 text-[1.4rem] my-[.6rem]">
                    <div className="px-4 py-2 font-semibold">Birthday</div>
                    {proEditable ? (
                      <input
                        required
                        onChange={(e) => handelInput(e)}
                        name="birthday"
                        value={user?.birthday}
                        className="w-[16rem] px-4 py-2 -ml-[12rem] max-sm:ml-0 bg-transparent border-b-2 border-ButtonColor/50 outline-none focus:border-ButtonColor duration-300"
                        type="date"
                      />
                    ) : (
                      <input
                        required
                        onChange={(e) => handelInput(e)}
                        name="birthday"
                        value={user?.birthday}
                        className="w-[16rem] px-4 py-2 -ml-[12rem] max-sm:ml-0 bg-transparent border-b-2  outline-none focus:border-ButtonColor duration-300"
                        type="date"
                        disabled
                      />
                    )}
                  </div>
                </div>
              </div>

              <div className="absolute flex gap-[1rem] m-[1rem]  bottom-0 right-0 ">
                {proEditable && (
                  <div
                    onClick={() => {
                      updateUserDetails();
                      setProEditable(!proEditable);
                    }}
                    className="cursor-pointer flex justify-center items-center  h-[2rem] w-[4.6rem] rounded-[.3rem] bg-primaryColor text-white font-semibold"
                  >
                    Save
                  </div>
                )}

                <div
                  onClick={() => setProEditable(!proEditable)}
                  className="cursor-pointer flex justify-center items-center h-[2rem] w-[4.6rem] rounded-[.3rem] bg-ButtonColor text-white font-semibold"
                >
                  Edit
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
