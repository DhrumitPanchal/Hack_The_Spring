import React from "react";
import { useNavigate } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

function UserCard(props) {
  const worker = props.data;
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/profile/${worker._id}`)}
      className="cursor-pointer flex justify-between items-center gap-[1.2rem] h-fit w-[30rem] p-[1.2rem] rounded-[1rem] border-[1px] border-slate-300 bg-white"
    >
      <div className="flex gap-[1rem]">
        <img
          alt=""
          src={worker.profilePic}
          className="h-[3.4rem] w-[3.4rem] rounded-full bg-black"
        />
        <div>
          <h2 className="text-[1.2rem] font-semibold">{worker?.name}</h2>
          <h2 className="text-[.9rem] font-medium">{worker?.email}</h2>
        </div>
      </div>
      <div className="flex justify-center items-center rounded-full h-[2rem] w-[2rem] ">
        <FaAngleRight className="text-[2rem] text-slate-300" />
      </div>
    </div>
  );
}

export default UserCard;
