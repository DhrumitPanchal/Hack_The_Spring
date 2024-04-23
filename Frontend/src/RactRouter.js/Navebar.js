import React, { useEffect, useState, useContext } from "react";
import { NavLink, useNavigate, Navigate, useLocation } from "react-router-dom";
import { Context } from "./Context";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

function Navebar() {
  const { user } = useContext(Context);
  const [menuopen, setMenuopen] = useState(false);
  const navigate = useNavigate();
  let location = useLocation();
  const [data, setData] = useState({});

  return (
    <>
      {location.pathname !== "/login" && (
        <div className="fixed z-50 top-0 px-[2rem] py-[.8rem] flex justify-between items-center w-full bg-white shadow-[0_0_10px_rgba(0,0,0,0.4)]">
          <NavLink to={"/"}>
            <h2 className="text-[1.5rem] text-black font-bold cursor-pointer">
              <span className=" text-primaryColor text-[1.5rem] mr-[.1rem]">
                क
              </span>
              RM
            </h2>
          </NavLink>

          <ul
            className={` max-sm:absolute max-sm:justify-center max-sm:items-center  max-sm:top-0  ${
              menuopen ? "max-sm:left-0" : "max-sm:left-full"
            } max-sm:duration-200 max-sm:bg-blue-200 max-sm:h-screen max-sm:w-full flex justify-between text-lg  text-black font-semibold capitalize`}
          >
            <FaTimes
              onClick={() => setMenuopen(!menuopen)}
              className="absolute top-4 hidden max-sm:block right-4 text-[2rem] text-black"
            />
            <div className="flex max-sm:flex-col max-sm:gap-[1rem] max-sm:text-center text-black font-bold ">
              <li className="px-3">
                <NavLink
                  className="max-sm:text-[2rem] hover:text-primaryColor/50 transition-colors duration-300"
                  to={"/"}
                >
                  home
                </NavLink>
              </li>
              <li className="px-3">
                <NavLink
                  className="max-sm:text-[2rem] hover:text-primaryColor/50 transition-colors duration-300"
                  to={"/about"}
                >
                  about us
                </NavLink>
              </li>
              <li className="px-3">
                <NavLink
                  className="max-sm:text-[2rem] hover:text-primaryColor/50 transition-colors duration-300"
                  to={"/contact"}
                >
                  contect
                </NavLink>
              </li>
              <li className="px-3">
                <NavLink
                  className="max-sm:text-[2rem] hover:text-primaryColor/50 transition-colors duration-300"
                  to={"/work"}
                >
                  get work
                </NavLink>
              </li>
              <li className="px-3">
                <NavLink
                  className="max-sm:text-[2rem] hover:text-primaryColor/50 transition-colors duration-300"
                  to={"/addWork"}
                >
                  add work
                </NavLink>
              </li>
              <li className="px-3">
                <NavLink
                  className="max-sm:text-[2rem] hover:text-primaryColor/50 transition-colors duration-300"
                  to={"/workers"}
                >
                  Workers
                </NavLink>
              </li>
              {/* <div className='flex justify-center items-center py-[.2rem] px-[.8rem] rounded-[.3rem] bg-yellow-400 '>login</div>
          <div className='flex justify-center items-center py-[.2rem] px-[.8rem] rounded-[.3rem] bg-yellow-400 '>register</div> */}
            </div>
          </ul>
          <div className="flex items-center gap-[1rem] font-semibold text-white">
            {user ? (
              <NavLink to={"/profile"}>
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRudDbHeW2OobhX8E9fAY-ctpUAHeTNWfaqJA&usqp=CAU"
                    className="w-[2.2rem] h-[2.2rem]  rounded-full bg-black"
                  />
                </div>
              </NavLink>
            ) : (
              <NavLink to={"/Login"}>
                <div className="cursor-pointer max-sm:hidden flex justify-center items-center py-[.2rem] px-[.8rem] rounded-[.3rem] bg-primaryColor text-[white]">
                  Login
                </div>
              </NavLink>
            )}
            {/* <FaBars onClick={() => setMenuopen(!menuopen)} className='text-[2rem]'/> */}

            <FaBars
              onClick={() => setMenuopen(!menuopen)}
              className=" hidden max-sm:block text-[2rem] text-primaryColor"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Navebar;
