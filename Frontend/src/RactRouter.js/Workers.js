import React, { useState, useContext } from "react";
import { Context } from "./Context";
import { FaSearch, FaTimes } from "react-icons/fa";
import Footer from "./Footer";
import UserCard from "./UserCard";
function Workers() {
  const { allUsers } = useContext(Context);

  const [filteredUser, setFilteredUser] = useState([]);
  const [search, setSearch] = useState("");
  const [filterIsActive, setFilterIsActive] = useState(false);

  const handelSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
    handelSearchUser();
    if (search) {
      setFilterIsActive(true);
    }
  };

  const handelSearchUser = () => {
    const lowerSearch = search?.toLowerCase();
    const result = allUsers.filter((user) => {
      return user.name.toLowerCase().includes(lowerSearch) && user;
    });

    setFilteredUser(result);
  };
  return (
    <section className="pt-[6rem] h-max w-full bg-slate-100">
      <div className="mx-[2rem]">
        <div className=" flex justify-between w-full max-sm:flex-col max-sm:items-center max-sm:gap-[1.4rem]">
          <div className="flex h-[2.6rem] w-[25rem] rounded-[1.4rem] overflow-hidden">
            <input
              onChange={(e) => handelSearch(e)}
              value={search}
              type="text"
              className="pl-[1rem] outline-none w-4/5 text-[1.1rem] bg-slate-200"
              placeholder="search"
            />
            <button
              onClick={() => handelSearchUser()}
              className="cursor-pointer flex justify-center items-center w-1/5 h-full text-[1rem] bg-primaryColor"
            >
              {filterIsActive ? (
                <FaTimes
                  onClick={() => {
                    setSearch("");
                    setFilterIsActive(false);
                  }}
                  className="text-white"
                />
              ) : (
                <FaSearch className="text-white" />
              )}
            </button>
          </div>
        </div>
        <div className="pb-[4rem] mt-[2rem] min-h-[38rem] h-fit ">
          <div className="flex-wrap flex max-sm:flex-col max-sm:justify-start gap-[1.8rem]">
            {allUsers?.length > 0 ? (
              filterIsActive ? (
                filteredUser.map((worker, i) => {
                  return <UserCard data={worker} key={worker._id} />;
                })
              ) : (
                allUsers.map((worker, i) => {
                  return <UserCard data={worker} key={worker._id} />;
                })
              )
            ) : (
              <h1>No worker here</h1>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Workers;
